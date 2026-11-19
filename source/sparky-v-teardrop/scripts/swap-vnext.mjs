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
