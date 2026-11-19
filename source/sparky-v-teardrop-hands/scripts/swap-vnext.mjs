import {fileURLToPath as __toPath} from 'node:url'; import __path from 'node:path';  // handoff: paths relative to this script
const ROOT = __path.resolve(__path.dirname(__toPath(import.meta.url)), '..').replace(/\\/g, '/');
const EXT = __path.resolve(ROOT, '..', 'external').replace(/\\/g, '/');
// Move the v5 body (with its baked-texture material) and the refitted eyelids/mouth into the approved GLB.
// Rig, hands, sparks and all 16 clips stay; joint indices remapped by bone name.
import {NodeIO} from '@gltf-transform/core';
import {ALL_EXTENSIONS} from '@gltf-transform/extensions';
import {mergeDocuments, prune, unpartition} from '@gltf-transform/functions';
import fs from 'node:fs';
const V2 = EXT+'/approved-rig';
const V4 = ROOT;
const io = new NodeIO().registerExtensions(ALL_EXTENSIONS);
const doc = await io.read(V2 + '/Outputs/sparky-fireball-rounded-raw.glb');
const src = await io.read(V4 + '/work/v5-rigged-scene.glb');
const srcNodes = src.getRoot().listNodes().filter(n => n.getMesh());
const map = mergeDocuments(doc, src);
const merged = new Set(map.values());
const root = doc.getRoot();
const report = [];
// new face rig points (jaw, mouth corners, upper lip, cheeks, nose) only exist in the Blender export: move them into the approved rig
const faceJoints = [];
function addFaceJoint(tSkin, iSkin, bi, names) {
  const m = iSkin.listJoints()[bi], name = m.getName();
  if (!name.startsWith('Sparky_')) throw Error('joint ' + name);
  if (names.includes(name)) return names.indexOf(name);
  const parentName = m.getParentNode().getName();
  let parent = root.listNodes().find(n => !merged.has(n) && n.getName() === parentName);
  if (!parent) {   // parent is itself a new bone (flame tongue tip -> root): add it first
    const pi = iSkin.listJoints().findIndex(j => j.getName() === parentName);
    if (pi < 0) throw Error('parent ' + parentName);
    if (!names.includes(parentName)) addFaceJoint(tSkin, iSkin, pi, names);
    parent = root.listNodes().find(n => !merged.has(n) && n.getName() === parentName);
  }
  m.getParentNode().removeChild(m); parent.addChild(m); merged.delete(m);
  const ibmT = tSkin.getInverseBindMatrices(), ibmI = iSkin.getInverseBindMatrices();
  const arr = new Float32Array(ibmT.getArray().length + 16); arr.set(ibmT.getArray()); arr.set(ibmI.getArray().slice(bi * 16, bi * 16 + 16), ibmT.getArray().length);
  ibmT.setArray(arr); tSkin.addJoint(m); names.push(name); faceJoints.push(name);
  report.push('face joint ' + name + ' <' + parentName);
  return names.length - 1;
}
for (const sn of srcNodes) {
  const name = sn.getName(), inc = map.get(sn);
  const key = name.startsWith('geometry_0') ? 'geometry_0' : name;
  const target = root.listNodes().find(n => !merged.has(n) && n.getMesh() && n.getName().startsWith(key));
  if (!target) { report.push(name + ': no target'); continue; }
  const tMesh = target.getMesh(), oldPrim = tMesh.listPrimitives()[0], newPrim = inc.getMesh().listPrimitives()[0];
  if (target.getSkin() && inc.getSkin()) {
    const a = target.getSkin().listJoints().map(j => j.getName()), b = inc.getSkin().listJoints().map(j => j.getName());
    const remap = b.map((n, bi) => { let i = a.indexOf(n); if (i < 0) i = addFaceJoint(target.getSkin(), inc.getSkin(), bi, a); return i; });
    for (let k = 0; k < remap.length; k++) remap[k] = a.indexOf(b[k]);
    const j = newPrim.getAttribute('JOINTS_0'); const arr = j.getArray().slice(); for (let i = 0; i < arr.length; i++) arr[i] = remap[arr[i]]; j.setArray(arr);
  }
  if (key !== 'geometry_0' && !key.includes('ArmMesh')) newPrim.setMaterial(oldPrim.getMaterial());   // face parts keep approved materials; mittens bring their own
  if (!key.includes('ArmMesh') && newPrim.listTargets().length !== oldPrim.listTargets().length) throw Error(name + ' morph count ' + newPrim.listTargets().length + ' vs ' + oldPrim.listTargets().length);
  tMesh.removePrimitive(oldPrim); tMesh.addPrimitive(newPrim);
  report.push(name + ' -> ' + target.getName() + ' (' + newPrim.getAttribute('POSITION').getCount() + ' v)');
}
// sparks are added separately later: remove the floating Spark_* objects and their animation channels
for (const n of root.listNodes()) if (n.getName().startsWith('Spark_') || n.getName().includes('ShoulderCap')) {
  for (const a of root.listAnimations()) for (const c of a.listChannels()) if (c.getTargetNode() === n) { const sm = c.getSampler(); c.dispose(); sm.dispose(); }
  n.dispose(); report.push('removed ' + n.getName());
}
for (const s of root.listScenes()) if (s !== root.getDefaultScene()) s.dispose();
for (const n of merged) if (n.propertyType === 'Node') n.dispose();   // leftover Blender nodes only; materials/textures stay
// ---- facial expression clips, driven by the face rig points + brow bones + eyelid / mouth morphs (from the expressions sheet)
const node = n => root.listNodes().find(x => x.getName() === n && !merged.has(x));
const buf = root.listBuffers()[0];
// ---- arms + hands: put the arm-chain joints where hand-rig.py built the arms (teardrop body), keep their rest
// rotations (all clips only key rotations, so every existing gesture still drives them), then rebind:
// IBM_new = inverse(W_new) * W_old * IBM_old keeps the bind shape exact for every joint.
const ARM = JSON.parse(fs.readFileSync(V4 + '/data/arm-rig.json', 'utf8'));
const G = p => [p[0], p[2], -p[1]];                       // Blender (Z up, -Y front) -> glTF (Y up, +Z front)
const M4 = {
  mul(a, b) { const o = new Array(16); for (let c = 0; c < 4; c++) for (let r = 0; r < 4; r++) { let v = 0; for (let k = 0; k < 4; k++) v += a[k * 4 + r] * b[c * 4 + k]; o[c * 4 + r] = v; } return o; },
  inv(m) { const a = m, o = new Array(16);
    const b00 = a[0]*a[5]-a[1]*a[4], b01 = a[0]*a[6]-a[2]*a[4], b02 = a[0]*a[7]-a[3]*a[4], b03 = a[1]*a[6]-a[2]*a[5], b04 = a[1]*a[7]-a[3]*a[5], b05 = a[2]*a[7]-a[3]*a[6];
    const b06 = a[8]*a[13]-a[9]*a[12], b07 = a[8]*a[14]-a[10]*a[12], b08 = a[8]*a[15]-a[11]*a[12], b09 = a[9]*a[14]-a[10]*a[13], b10 = a[9]*a[15]-a[11]*a[13], b11 = a[10]*a[15]-a[11]*a[14];
    const d = 1 / (b00*b11 - b01*b10 + b02*b09 + b03*b08 - b04*b07 + b05*b06);
    o[0]=(a[5]*b11-a[6]*b10+a[7]*b09)*d; o[1]=(a[2]*b10-a[1]*b11-a[3]*b09)*d; o[2]=(a[13]*b05-a[14]*b04+a[15]*b03)*d; o[3]=(a[10]*b04-a[9]*b05-a[11]*b03)*d;
    o[4]=(a[6]*b08-a[4]*b11-a[7]*b07)*d; o[5]=(a[0]*b11-a[2]*b08+a[3]*b07)*d; o[6]=(a[14]*b02-a[12]*b05-a[15]*b01)*d; o[7]=(a[8]*b05-a[10]*b02+a[11]*b01)*d;
    o[8]=(a[4]*b10-a[5]*b08+a[7]*b06)*d; o[9]=(a[1]*b08-a[0]*b10-a[3]*b06)*d; o[10]=(a[12]*b04-a[13]*b02+a[15]*b00)*d; o[11]=(a[9]*b02-a[8]*b04-a[11]*b00)*d;
    o[12]=(a[5]*b07-a[4]*b09-a[6]*b06)*d; o[13]=(a[0]*b09-a[1]*b07+a[2]*b06)*d; o[14]=(a[13]*b01-a[12]*b03-a[14]*b00)*d; o[15]=(a[8]*b03-a[9]*b01+a[10]*b00)*d; return o; },
  point(m, p) { return [0, 1, 2].map(r => m[r] * p[0] + m[4 + r] * p[1] + m[8 + r] * p[2] + m[12 + r]); },
  rotQ(m) {   // rotation part of a (scaled) matrix -> quaternion
    const sx = Math.hypot(m[0], m[1], m[2]), sy = Math.hypot(m[4], m[5], m[6]), sz = Math.hypot(m[8], m[9], m[10]);
    const r = [m[0]/sx, m[1]/sx, m[2]/sx, m[4]/sy, m[5]/sy, m[6]/sy, m[8]/sz, m[9]/sz, m[10]/sz];
    const t = r[0] + r[4] + r[8]; let q;
    if (t > 0) { const S = Math.sqrt(t + 1) * 2; q = [(r[5] - r[7]) / S, (r[6] - r[2]) / S, (r[1] - r[3]) / S, .25 * S]; }
    else if (r[0] > r[4] && r[0] > r[8]) { const S = Math.sqrt(1 + r[0] - r[4] - r[8]) * 2; q = [.25 * S, (r[3] + r[1]) / S, (r[6] + r[2]) / S, (r[5] - r[7]) / S]; }
    else if (r[4] > r[8]) { const S = Math.sqrt(1 + r[4] - r[0] - r[8]) * 2; q = [(r[3] + r[1]) / S, .25 * S, (r[7] + r[5]) / S, (r[6] - r[2]) / S]; }
    else { const S = Math.sqrt(1 + r[8] - r[0] - r[4]) * 2; q = [(r[6] + r[2]) / S, (r[7] + r[5]) / S, .25 * S, (r[1] - r[3]) / S]; }
    return q; },
};
const qrot = (q, v) => { const [x, y, z, w] = q, ix = w*v[0] + y*v[2] - z*v[1], iy = w*v[1] + z*v[0] - x*v[2], iz = w*v[2] + x*v[1] - y*v[0], iw = -x*v[0] - y*v[1] - z*v[2];
  return [ix*w + iw*-x + iy*-z - iz*-y, iy*w + iw*-y + iz*-x - ix*-z, iz*w + iw*-z + ix*-y - iy*-x]; };
const qinv = q => [-q[0], -q[1], -q[2], q[3]];
const skins = root.listSkins();
const before = new Map();
for (const sk of skins) for (const j of sk.listJoints()) if (!before.has(j)) before.set(j, j.getWorldMatrix().slice());
let armSet = 0;
for (const bd of ARM.bones) {
  const nd = root.listNodes().find(x => x.getName() === bd.name && !merged.has(x));
  if (!nd) { report.push('arm: missing ' + bd.name); continue; }
  const par = nd.getParentNode();
  nd.setTranslation(M4.point(M4.inv(par.getWorldMatrix()), G(bd.head)));
  if (/_2$|_Hand_B$/.test(bd.name)) { nd.setRotation([0, 0, 0, 1]); nd.setScale([1, 1, 1]); }
  armSet++;
}
for (const sk of skins) {   // one shared bind pose per skin, taken from an approved joint: M = W_body(bind) * IBM_body
  const js = sk.listJoints(), acc = sk.getInverseBindMatrices(), arr = acc.getArray().slice();
  const bi = js.findIndex(j => j.getName() === 'Sparky_Body'); if (bi < 0) continue;
  const Mb = M4.mul(before.get(js[bi]), Array.from(arr.slice(bi * 16, bi * 16 + 16)));
  js.forEach((j, i) => { const nw = M4.mul(M4.inv(j.getWorldMatrix()), Mb); for (let k = 0; k < 16; k++) arr[i * 16 + k] = nw[k]; });
  acc.setArray(arr);
}
report.push('arms: ' + armSet + ' joints placed, ' + skins.length + ' skins rebound');
// ---- hand clips: fist, open, point, wave (rotation keys; axes from hand-rig.py, turned into each joint's parent frame)
function handClip(name, dur, poseAt) {
  const anim = doc.createAnimation(name); const FPS = 30, N = Math.round(dur * FPS);
  const tracks = new Map();
  for (let i = 0; i <= N; i++) {
    const t = Math.min(dur, i / FPS), pose = poseAt(t);
    for (const [bn, rots] of Object.entries(pose)) {
      const nd = root.listNodes().find(x => x.getName() === bn && !merged.has(x)); if (!nd) continue;
      if (!tracks.has(bn)) tracks.set(bn, {nd, r0: nd.getRotation(), pq: M4.rotQ(nd.getParentNode().getWorldMatrix()), t: [], q: []});
      const tr = tracks.get(bn); let q = tr.r0;
      for (const [axisB, ang] of rots) {
        const ax = qrot(qinv(tr.pq), G(axisB)); const L = Math.hypot(...ax) || 1, s2 = Math.sin(ang / 2) / L;
        q = qmul([ax[0] * s2, ax[1] * s2, ax[2] * s2, Math.cos(ang / 2)], q);
      }
      tr.t.push(t); tr.q.push(...q);
    }
  }
  for (const tr of tracks.values()) {
    const sm = doc.createAnimationSampler().setInterpolation('LINEAR')
      .setInput(doc.createAccessor().setType('SCALAR').setArray(new Float32Array(tr.t)).setBuffer(buf))
      .setOutput(doc.createAccessor().setType('VEC4').setArray(new Float32Array(tr.q)).setBuffer(buf));
    anim.addSampler(sm).addChannel(doc.createAnimationChannel().setTargetNode(tr.nd).setTargetPath('rotation').setSampler(sm));
  }
  report.push('clip ' + name + ' (' + tracks.size + ' joints)');
}
const ease = (t, d, a = .35, b = .4) => { const x = Math.min(1, t / a, (d - t) / b); const c = Math.max(0, x); return c * c * (3 - 2 * c); };
const AX = ARM.axes;
const TW = +(process.env.TWIST || '1');   // cartoon hands rest with the palm turned ~40 deg toward the viewer; raised poses roll it back so the palm faces front
const roll = (sd, a) => AX[sd].twist ? [[AX[sd].twist, TW * a]] : [];
const fingers = (side, c1, c2, th1, th2) => Object.fromEntries([   // mitten: the _2 bones no longer exist (ignored)
  ...['Index', 'Middle', 'Pinky'].flatMap(f => [[`Sparky_${side}_${f}`, [[AX[side].curl, c1]]], [`Sparky_${side}_${f}_2`, [[AX[side].curl, c2]]]]),
  [`Sparky_${side}_Thumb`, [[AX[side].thumb_curl, th1]]], [`Sparky_${side}_Thumb_2`, [[AX[side].thumb_curl, th2]]]]);
// (hand clips are created after the face clips, see 'emotions' below)
function clip(name, dur, keys) {   // keys: {bone: [[t, dx, dy, dz], ...]} in body rest space;  morph: {mesh: [[t, w...], ...]}
  const anim = doc.createAnimation(name);
  for (const [bn, ks] of Object.entries(keys.bones || {})) {
    const n = node(bn); if (!n) { report.push('clip ' + name + ': no bone ' + bn); continue; }
    const r = n.getTranslation();
    const sampler = doc.createAnimationSampler().setInterpolation('LINEAR')
      .setInput(doc.createAccessor().setType('SCALAR').setArray(new Float32Array(ks.map(k => k[0]))).setBuffer(buf))
      .setOutput(doc.createAccessor().setType('VEC3').setArray(new Float32Array(ks.flatMap(k => [r[0] + k[1], r[1] + k[2], r[2] + k[3]]))).setBuffer(buf));
    anim.addSampler(sampler).addChannel(doc.createAnimationChannel().setTargetNode(n).setTargetPath('translation').setSampler(sampler));
  }
  for (const [mn, ks] of Object.entries(keys.morphs || {})) {
    const n = node(mn); if (!n) continue; const cnt = n.getMesh().listPrimitives()[0].listTargets().length;
    const out = ks.flatMap(k => { const w = new Array(cnt).fill(0); k.slice(1).forEach((v, i) => w[i] = v); return w; });
    const sampler = doc.createAnimationSampler().setInterpolation('LINEAR')
      .setInput(doc.createAccessor().setType('SCALAR').setArray(new Float32Array(ks.map(k => k[0]))).setBuffer(buf))
      .setOutput(doc.createAccessor().setType('SCALAR').setArray(new Float32Array(out)).setBuffer(buf));
    anim.addSampler(sampler).addChannel(doc.createAnimationChannel().setTargetNode(n).setTargetPath('weights').setSampler(sampler));
  }
  report.push('clip ' + name);
}
// pose -> ease in, hold, ease out over `dur`
const env = (d, x, y, z) => [[0, 0, 0, 0], [0.25, x * .8, y * .8, z * .8], [0.4, x, y, z], [d - 0.45, x, y, z], [d - 0.1, 0, 0, 0], [d, 0, 0, 0]];
const envW = (d, ...w) => [[0, ...w.map(() => 0)], [0.3, ...w], [d - 0.45, ...w], [d - 0.1, ...w.map(() => 0)], [d, ...w.map(() => 0)]];
const lids = (side, d, ...w) => Object.fromEntries(['Upper', 'Lower', 'Lash'].flatMap(p => (side === 'B' ? ['L', 'R'] : [side]).map(s => ['Eyelid_' + s + '_' + p, envW(d, ...w)])));
const mouth = (d, ...w) => Object.fromEntries(['Interior', 'Teeth', 'Tongue'].map(p => ['Mouth_' + p, envW(d, ...w)]));
const brows = (d, yL, yR, inner = 0) => ({
  Sparky_L_Brow_inside: env(d, 0, yL + inner, 0), Sparky_L_Brow_middle: env(d, 0, yL, 0), Sparky_L_Brow_outside: env(d, 0, yL - inner * .5, 0),
  Sparky_R_Brow_inside: env(d, 0, yR + inner, 0), Sparky_R_Brow_middle: env(d, 0, yR, 0), Sparky_R_Brow_outside: env(d, 0, yR - inner * .5, 0)});
const D = 2.4;
clip('Face_Happy', D, {bones: {...brows(D, .008, .008),
  Sparky_L_MouthCorner: env(D, -.008, .012, .004), Sparky_R_MouthCorner: env(D, .008, .012, .004),
  Sparky_L_Cheek: env(D, 0, .010, .006), Sparky_R_Cheek: env(D, 0, .010, .006), Sparky_Jaw: env(D, 0, -.004, 0)},
  morphs: {}});
clip('Face_Laugh', D, {bones: {...brows(D, .006, .006),
  Sparky_L_MouthCorner: env(D, -.012, .014, .002), Sparky_R_MouthCorner: env(D, .012, .014, .002),
  Sparky_L_Cheek: env(D, 0, .014, .008), Sparky_R_Cheek: env(D, 0, .014, .008), Sparky_Jaw: env(D, 0, -.020, .004), Sparky_UpperLip: env(D, 0, .004, .002)},
  morphs: {...lids('B', D, 0, 0, 0, 1), ...mouth(D, 0, 0, 0, 1, 0)}});
clip('Face_Surprised', D, {bones: {...brows(D, .012, .012),
  Sparky_L_MouthCorner: env(D, .010, -.002, 0), Sparky_R_MouthCorner: env(D, -.010, -.002, 0),
  Sparky_Jaw: env(D, 0, -.018, 0), Sparky_Nose: env(D, 0, .003, .002), Sparky_UpperLip: env(D, 0, .004, 0)},
  morphs: {...mouth(D, 0, 0, 0, 0, 1)}});
clip('Face_Think', D, {bones: {...brows(D, .014, -.006),
  Sparky_L_MouthCorner: env(D, .006, -.004, 0), Sparky_R_MouthCorner: env(D, .010, .008, 0),
  Sparky_UpperLip: env(D, .006, 0, 0), Sparky_Jaw: env(D, .006, -.002, 0), Sparky_R_Cheek: env(D, 0, .006, .004)},
  morphs: {...lids('B', D, .15)}});
clip('Face_Wink', D, {bones: {...brows(D, .010, -.004),
  Sparky_L_MouthCorner: env(D, -.006, .008, .002), Sparky_R_MouthCorner: env(D, .010, .016, .004),
  Sparky_R_Cheek: env(D, 0, .016, .008), Sparky_L_Cheek: env(D, 0, .006, .004)},
  morphs: {...lids('R', D, 0, 0, 0, 1)}});
clip('Face_Sad', D, {bones: {...brows(D, -.002, -.002, .012),
  Sparky_L_MouthCorner: env(D, .004, -.012, 0), Sparky_R_MouthCorner: env(D, -.004, -.012, 0),
  Sparky_Jaw: env(D, 0, -.003, 0), Sparky_L_Cheek: env(D, 0, -.004, 0), Sparky_R_Cheek: env(D, 0, -.004, 0)},
  morphs: {...lids('B', D, .18)}});
// ---- emotions: the face clip and the mitten hands in one clip (easy to trigger: one clip = one emotion)
function withFace(anim, faceName) {
  const face = root.listAnimations().find(a => a.getName() === faceName); if (!face) return anim;
  for (const ch of face.listChannels()) {
    const sm = ch.getSampler();
    const s2 = doc.createAnimationSampler().setInterpolation(sm.getInterpolation()).setInput(sm.getInput()).setOutput(sm.getOutput());
    anim.addSampler(s2).addChannel(doc.createAnimationChannel().setTargetNode(ch.getTargetNode()).setTargetPath(ch.getTargetPath()).setSampler(s2));
  }
  return anim;
}
const lastAnim = () => root.listAnimations()[root.listAnimations().length - 1];
const both = (fn) => ({...fn('L'), ...fn('R')});
const mitt = (side, c, th) => ({[`Sparky_${side}_Index`]: [[AX[side].curl, c]], [`Sparky_${side}_Middle`]: [[AX[side].curl, c]], [`Sparky_${side}_Pinky`]: [[AX[side].curl, c]], [`Sparky_${side}_Thumb`]: [[AX[side].thumb_curl, th]]});
// Wave: arm out + a little forward, forearm up, waving from the elbow (+ happy face)
handClip('Hands_Wave', 3.2, t => { const e = ease(t, 3.2, .5, .55), w = Math.sin(2 * Math.PI * 2.2 * t) * e;
  return {...mitt('R', -.2 * e, -.3 * e), Sparky_R_UpperArm: [[AX.R.raise_side, .95 * e], [AX.R.raise_front, .45 * e]],
    Sparky_R_Elbow: [[AX.R.raise_side, .80 * e + .40 * w]], Sparky_R_Hand: [[AX.R.raise_side, .18 * w], ...roll('R', .9 * e)]}; });
withFace(lastAnim(), 'Face_Happy');
// Happy: clapping in front of the tummy
handClip('Emotion_Happy', 2.8, t => { const e = ease(t, 2.8, .35, .45), c = .5 + .5 * Math.sin(2 * Math.PI * 3.0 * t);
  return both(sd => ({[`Sparky_${sd}_UpperArm`]: [[AX[sd].raise_front, .48 * e], [AX[sd].inward, (.40 + .26 * c) * e]],
    [`Sparky_${sd}_Elbow`]: [[AX[sd].raise_front, .30 * e]], ...mitt(sd, -.1 * e, -.2 * e)})); });
withFace(lastAnim(), 'Face_Happy');
// Excited: both hands up and out, jiggling fast
handClip('Emotion_Excited', 2.8, t => { const e = ease(t, 2.8, .3, .45);
  return both(sd => { const ph = sd === 'L' ? 0 : Math.PI, j = Math.sin(2 * Math.PI * 4.2 * t + ph) * e;
    return {[`Sparky_${sd}_UpperArm`]: [[AX[sd].raise_side, (1.05 + .12 * j) * e], [AX[sd].raise_front, .45 * e]],
      [`Sparky_${sd}_Elbow`]: [[AX[sd].raise_side, .55 * e]], [`Sparky_${sd}_Hand`]: [[AX[sd].raise_side, .25 * j], ...roll(sd, .9 * e)], ...mitt(sd, -.22 * e, -.35 * e)}; }); });
withFace(lastAnim(), 'Face_Laugh');
// Shy: hands together in front, fidgeting, a little sway
handClip('Emotion_Shy', 3.2, t => { const e = ease(t, 3.2, .5, .55);
  return both(sd => { const ph = sd === 'L' ? 0 : Math.PI, f = Math.sin(2 * Math.PI * 1.5 * t + ph) * e;
    return {[`Sparky_${sd}_UpperArm`]: [[AX[sd].raise_front, .55 * e], [AX[sd].inward, .62 * e]],
      [`Sparky_${sd}_Elbow`]: [[AX[sd].raise_front, .35 * e]], [`Sparky_${sd}_Hand`]: [[AX[sd].inward, .16 * f]], ...mitt(sd, (.45 + .15 * f) * e, .3 * e)}; }); });
withFace(lastAnim(), 'Face_Wink');
// (Emotion_Sad: see 'mood clips' below)
// Surprised: hands pop up beside the cheeks, open
handClip('Emotion_Surprised', 2.6, t => { const e = ease(t, 2.6, .18, .5);
  return both(sd => ({[`Sparky_${sd}_UpperArm`]: [[AX[sd].raise_front, .80 * e], [AX[sd].raise_side, .75 * e]],
    [`Sparky_${sd}_Elbow`]: [[AX[sd].raise_front, .70 * e]], ...mitt(sd, -.25 * e, -.4 * e)})); });
withFace(lastAnim(), 'Face_Surprised');
// ---- mood clips: Emotion_Angry (power-up rage) and Emotion_Sad (dim blue, small). Mood_Anger / Mood_Sad are empty nodes
// whose scale (0..1) says how angry / sad Sparky is right now: any engine can read them; the viewer drives the fire from
// them (angry: fast high-burning flames + golden aura; sad: dim blue, slow drooping flames).
const mNode = nm => root.listNodes().find(x => x.getName() === nm && !merged.has(x));
const idleRoot = mNode('Sparky_Idle_Root');
for (const nm of ['Mood_Anger', 'Mood_Sad']) idleRoot.addChild(doc.createNode(nm).setScale([0, 0, 0]));
function mTrack(anim, nm, path, dur, fn, FPS = 30) {
  const nd = mNode(nm); if (!nd) { report.push('mood: missing ' + nm); return; }
  const N = Math.round(dur * FPS), tt = [], vv = [];
  for (let i = 0; i <= N; i++) { const t = Math.min(dur, i / FPS); tt.push(t); vv.push(...fn(t, nd)); }
  const type = path === 'weights' ? 'SCALAR' : path === 'rotation' ? 'VEC4' : 'VEC3';
  const sm = doc.createAnimationSampler().setInterpolation('LINEAR')
    .setInput(doc.createAccessor().setType('SCALAR').setArray(new Float32Array(tt)).setBuffer(buf))
    .setOutput(doc.createAccessor().setType(type).setArray(new Float32Array(vv)).setBuffer(buf));
  anim.addSampler(sm).addChannel(doc.createAnimationChannel().setTargetNode(nd).setTargetPath(path).setSampler(sm));
}
const mOff = (nd, d) => { const r = nd.getTranslation(); return [r[0] + d[0], r[1] + d[1], r[2] + d[2]]; };
const mLids = (anim, dur, fn, slot = 1) => { for (const sd of ['L', 'R']) for (const part of ['Upper', 'Lower', 'Lash']) mTrack(anim, `Eyelid_${sd}_${part}`, 'weights', dur, t => { const w = [0, 0, 0, 0]; if (part !== 'Lower') w[slot] = fn(t); return w; }); };
const mBrows = (anim, dur, fn) => { for (const sd of ['L', 'R']) { const inw = sd === 'L' ? 1 : -1;   // +x toward the middle for the left brow
  for (const part of ['inside', 'middle', 'outside']) mTrack(anim, `Sparky_${sd}_Brow_${part}`, 'translation', dur, (t, nd) => { const [dx, dy] = fn(t, part); return mOff(nd, [dx * inw, dy, 0]); }); } };
const mCorners = (anim, dur, fn) => { for (const sd of ['L', 'R']) mTrack(anim, `Sparky_${sd}_MouthCorner`, 'translation', dur, (t, nd) => mOff(nd, [0, fn(t), 0])); };
const FLOOR_Y = -0.34;   // bottom of the body (glTF y); the shrink keeps it on the ground

// Angry: "powering up" -- fists clenched, arms tense at the sides, body trembling and growing a little, brows down in a
// V, eyes narrowed (the viewer slants the lids), mouth corners down; the fire goes high, fast and golden.
const DA = 4.2;
handClip('Emotion_Angry', DA, t => { const e = ease(t, DA, .35, .6), j = Math.sin(2 * Math.PI * 12 * t) * e;
  return both(sd => ({[`Sparky_${sd}_UpperArm`]: [[AX[sd].raise_side, (.30 + .02 * j) * e], [AX[sd].raise_front, .12 * e]],
    [`Sparky_${sd}_Elbow`]: [[AX[sd].raise_front, .62 * e]], [`Sparky_${sd}_Hand`]: [[AX[sd].raise_side, .05 * j]],
    ...mitt(sd, 1.25 * e, .95 * e)})); });
{ const A = lastAnim(), ease2 = t => ease(t, DA, .35, .6);
  mTrack(A, 'Mood_Anger', 'scale', DA, t => { const e = ease2(t); return [e, e, e]; });
  mTrack(A, 'Sparky_Body', 'translation', DA, (t, nd) => { const e = ease2(t); return mOff(nd, [Math.sin(2 * Math.PI * 13 * t) * .0035 * e, Math.sin(2 * Math.PI * 17 * t + 1) * .0025 * e, 0]); });
  mTrack(A, 'Sparky_Body', 'scale', DA, t => { const e = ease2(t), b = .012 * Math.sin(2 * Math.PI * 2.2 * t) * e; return [1 + .025 * e, 1 + .045 * e + b, 1 + .025 * e]; });
  mBrows(A, DA, (t, part) => { const e = ease2(t); return part === 'inside' ? [.008 * e, -.020 * e] : part === 'middle' ? [.003 * e, -.007 * e] : [0, .007 * e]; });
  mLids(A, DA, t => .78 * ease2(t), 2);   // Blink_ThreeQuarter: narrowed eyes (the viewer slants them)
  mCorners(A, DA, t => -.007 * ease2(t));
  report.push('clip Emotion_Angry (mood)'); }

// Sad: the flame dims and turns blue, Sparky shrinks (stays on the ground), slow heavy sway, arms limp, brows up in the
// middle, droopy lids, mouth corners down.
const DS = 4.6;
handClip('Emotion_Sad', DS, t => { const e = ease(t, DS, .9, .8), sw = Math.sin(2 * Math.PI * .45 * t) * e;
  return both(sd => ({[`Sparky_${sd}_UpperArm`]: [[AX[sd].raise_side, (-.18 + .03 * sw) * e], [AX[sd].inward, .28 * e]],
    [`Sparky_${sd}_Elbow`]: [[AX[sd].raise_front, .22 * e]], [`Sparky_${sd}_Hand`]: [[AX[sd].raise_side, -.15 * e]], ...mitt(sd, .40 * e, .25 * e)})); });
{ const A = lastAnim(), ease2 = t => ease(t, DS, .9, .8);
  mTrack(A, 'Mood_Sad', 'scale', DS, t => { const e = ease2(t); return [e, e, e]; });
  mTrack(A, 'Sparky_Motion_Root', 'scale', DS, t => { const k = 1 - .24 * ease2(t); return [k, k, k]; });
  mTrack(A, 'Sparky_Motion_Root', 'translation', DS, (t, nd) => { const k = 1 - .24 * ease2(t); return mOff(nd, [0, FLOOR_Y * (1 - k), 0]); });
  mTrack(A, 'Sparky_Motion_Root', 'rotation', DS, t => { const a = Math.sin(2 * Math.PI * .45 * t) * .045 * ease2(t); return [0, 0, Math.sin(a / 2), Math.cos(a / 2)]; });
  mBrows(A, DS, (t, part) => { const e = ease2(t); return part === 'inside' ? [.003 * e, .012 * e] : part === 'middle' ? [0, .003 * e] : [0, -.009 * e]; });
  mLids(A, DS, t => .62 * ease2(t));
  mCorners(A, DS, t => -.008 * ease2(t));
  report.push('clip Emotion_Sad (mood)'); }

// ---- living flame tongues: each tongue bone sways / flickers in a seamless loop, added to Fire_Ambient (plays under
// every action) and Idle_Blink. Root bones sway gently, tip bones whip more (fire licking upward).
function qmul(a, b) { return [a[3]*b[0]+a[0]*b[3]+a[1]*b[2]-a[2]*b[1], a[3]*b[1]-a[0]*b[2]+a[1]*b[3]+a[2]*b[0], a[3]*b[2]+a[0]*b[1]-a[1]*b[0]+a[2]*b[3], a[3]*b[3]-a[0]*b[0]-a[1]*b[1]-a[2]*b[2]]; }
function qaxis(x, z) { const ang = Math.hypot(x, z); if (ang < 1e-9) return [0, 0, 0, 1]; const s = Math.sin(ang / 2) / ang; return [x * s, 0, z * s, Math.cos(ang / 2)]; }
const flameBones = root.listNodes().filter(n => /^Sparky_Flame_.*_[AB]$/.test(n.getName()) && !merged.has(n));
function clipLength(a) { let t = 0; for (const sm of a.listSamplers()) { const arr = sm.getInput().getArray(); t = Math.max(t, arr[arr.length - 1]); } return t; }
for (const clipName of ['Fire_Ambient', 'Idle_Blink']) {
  const anim = root.listAnimations().find(a => a.getName() === clipName); if (!anim) continue;
  const T = clipLength(anim) || 4; const N = Math.max(48, Math.round(T * 40));
  flameBones.forEach((n, k) => {
    const tip = n.getName().endsWith('_B'); const r0 = n.getRotation(); const s0 = n.getScale();
    // fire, not rubber: small irregular jitter (several unrelated frequencies 0.8-8 Hz, whole cycles -> seamless loop),
    // root bones nearly still, tips quick; the big licking waves are done per-vertex in the viewer shader
    const ph = k * 1.73, amp = tip ? 0.040 : 0.014;   // cute + eased: slow, soft sway only
    const F = [[0.5, .42], [1.1, .30], [1.9, .18], [3.0, .10]];
    const C = F.map(([f]) => Math.max(1, Math.round(T * f)));
    const noise = (w, sh) => F.reduce((acc, [, a], i) => acc + a * Math.sin(C[i] * w + ph * (1.3 + i * .71) + sh), 0);
    const times = [], rots = [], scl = [];
    for (let i = 0; i <= N; i++) {
      const t = T * i / N, w = 2 * Math.PI * t / T;
      const ax = amp * noise(w, 0), az = amp * noise(w, 2.1);
      times.push(t); rots.push(...qmul(r0, qaxis(ax, az)));
      const st = tip ? 1 + 0.035 * noise(w, 4.2) : 1 + 0.010 * noise(w, 5.0);
      const sw = 1 - (st - 1) * 0.5;
      scl.push(s0[0] * sw, s0[1] * st, s0[2] * sw);
    }
    const input = doc.createAccessor().setType('SCALAR').setArray(new Float32Array(times)).setBuffer(buf);
    const sr = doc.createAnimationSampler().setInterpolation('LINEAR').setInput(input).setOutput(doc.createAccessor().setType('VEC4').setArray(new Float32Array(rots)).setBuffer(buf));
    const ss = doc.createAnimationSampler().setInterpolation('LINEAR').setInput(input).setOutput(doc.createAccessor().setType('VEC3').setArray(new Float32Array(scl)).setBuffer(buf));
    anim.addSampler(sr).addChannel(doc.createAnimationChannel().setTargetNode(n).setTargetPath('rotation').setSampler(sr));
    anim.addSampler(ss).addChannel(doc.createAnimationChannel().setTargetNode(n).setTargetPath('scale').setSampler(ss));
  });
  report.push('flame flicker -> ' + clipName + ' (' + flameBones.length + ' bones, ' + T.toFixed(2) + 's)');
}
await doc.transform(prune(), unpartition());
const out = V4 + '/Outputs/sparky-vnext-raw.glb';
await io.write(out, doc);
fs.writeFileSync(V4 + '/data/swap-vnext.json', JSON.stringify({report, animations: root.listAnimations().length, bytes: fs.statSync(out).size}, null, 2));
console.log('SWAPPED_V5', JSON.stringify({report, animations: root.listAnimations().length}));
