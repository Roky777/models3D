import * as THREE from 'three';
import {restOf} from './fire-aura.js';

// Flame pieces breaking off the tongue tips (real fire: a tongue stretches, its top pinches off and rises away).
// One emitter per tongue tip and per side lick. A piece is born when the tongue snaps back (tongueCycles), at the
// tip's current world position, then rises (buoyancy: accelerating), thins, sways, reddens and burns out in ~0.3-0.6 s.
const MAX = 48;
const hash = n => { const s = Math.sin(n * 91.345 + 47.853) * 43758.5453; return s - Math.floor(s); };

export class TipFlames {
  constructor(body, restMatrix, tongues) {
    this.body = body;
    const bones = body.skeleton.bones, inv = body.skeleton.boneInverses;
    const meshFromRest = restMatrix.clone().invert();
    this.emitters = [];
    tongues.forEach((t, k) => {
      const bi = bones.findIndex(b => b.name === 'Sparky_Flame_' + t.name + '_B');
      if (bi < 0) return;
      const add = (pt, size, delay) => {   // tip point expressed in the tip bone's local space -> follows the skinned tip
        const local = restOf(pt).applyMatrix4(meshFromRest).applyMatrix4(body.bindMatrix).applyMatrix4(inv[bi]);
        this.emitters.push({k, bone: bones[bi], local, size, delay, last: null});
      };
      const tip = t.spine[t.spine.length - 1];
      add(tip, t.name === 'Main' ? 1.0 : 0.8, 0);
    });
    const g = new THREE.InstancedBufferGeometry();
    g.copy(new THREE.PlaneGeometry(1, 1));
    g.instanceCount = MAX;
    this.aPos = new THREE.InstancedBufferAttribute(new Float32Array(MAX * 3), 3);
    this.aPar = new THREE.InstancedBufferAttribute(new Float32Array(MAX * 4), 4);   // height, width, life 0..1, seed
    g.setAttribute('aPos', this.aPos); g.setAttribute('aPar', this.aPar);
    this.time = {value: 0};
    this.material = new THREE.ShaderMaterial({
      transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
      uniforms: {uTime: this.time},
      vertexShader: `attribute vec3 aPos;attribute vec4 aPar;varying vec2 vUv;varying vec4 vPar;
        void main(){vPar=aPar;vUv=vec2(position.x,position.y+.5);
          vec3 up=vec3(0.,1.,0.);vec3 toCam=normalize(cameraPosition-aPos);vec3 right=normalize(cross(up,toCam));
          vec3 p=aPos+right*position.x*aPar.y+up*(position.y+.5)*aPar.x;
          if(aPar.z<=0.||aPar.z>=1.)p=vec3(0.,-99.,0.);
          gl_Position=projectionMatrix*viewMatrix*vec4(p,1.);}`,
      fragmentShader: `uniform float uTime;varying vec2 vUv;varying vec4 vPar;
        float h1(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
        float n2(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(h1(i),h1(i+vec2(1,0)),f.x),mix(h1(i+vec2(0,1)),h1(i+vec2(1,1)),f.x),f.y);}
        void main(){
          float life=vPar.z,seed=vPar.w,h=vUv.y;
          // teardrop flame: round, full bottom -> curving sweep into a fine tip; the shape wiggles as it rises
          float sway=(n2(vec2(h*1.6-uTime*2.6+seed*11.,seed*3.))-.5)*.32*h;
          float x=vUv.x-sway;
          float w=.5*pow(max(0.,sin(3.14159*min(h*1.25,1.))),.5)*(1.-.62*h)*(1.-.30*life);
          float d=abs(x)/max(w,.001);
          float body=(1.-smoothstep(.55,1.,d))*smoothstep(0.,.10,h)*(1.-smoothstep(.80,1.,h));
          // it burns away from the edges: rising noise erodes it more and more over its life
          float er=n2(vec2(vUv.x*3.5+seed*7.,h*3.-uTime*3.5));
          body*=smoothstep(life*1.05-.40,life*1.05-.12,er*(1.-.4*d));   // solid at birth, burns away later
          float core=(1.-smoothstep(0.,.55,d))*(1.-h*.7);
          vec3 c=mix(vec3(1.,.16,.02),vec3(1.,.55,.10),core);
          c=mix(c,vec3(1.,.88,.55),core*core*(1.-life));
          c=mix(c,vec3(1.,.35,.06),smoothstep(.45,1.,life)*.5);   // stays warm orange as it fades
          float a=body*(1.-smoothstep(.40,.85,life))*smoothstep(0.,.06,life);
          gl_FragColor=vec4(c*a*1.25,a);}`,
    });
    this.mesh = new THREE.Mesh(g, this.material);
    this.mesh.frustumCulled = false; this.mesh.renderOrder = 7; this.mesh.name = 'FireTipFlames';
    this.pieces = [];
    this.scale = 1;
    const bi = bones.findIndex(b => b.name === 'Sparky_Body');
    if (bi >= 0) this.bodyBone = {bone: bones[bi], chain: new THREE.Matrix4().multiplyMatrices(inv[bi], body.bindMatrix).multiply(meshFromRest)};
    this._v = new THREE.Vector3(); this._m = new THREE.Matrix4();
  }

  tipWorld(e, out) {   // same chain as GPU skinning: model * bindInverse * bone * boneInverse * bind
    this._m.multiplyMatrices(this.body.matrixWorld, this.body.bindMatrixInverse).multiply(e.bone.matrixWorld);
    return out.copy(e.local).applyMatrix4(this._m);
  }

  update(t, camera, cycles, enabled = true) {
    this.time.value = t;
    this.mesh.visible = enabled;
    if (!cycles) return;
    this.body.updateMatrixWorld(true);
    // world units per rest metre, through the body bone's skinning chain
    const bb = this.bodyBone;
    if (bb) this.scale = this._m.multiplyMatrices(this.body.matrixWorld, this.body.bindMatrixInverse).multiply(bb.bone.matrixWorld).multiply(bb.chain).getMaxScaleOnAxis();
    for (let i = 0; i < this.emitters.length; i++) {
      const e = this.emitters[i], c = cycles[e.k]; if (!c) continue;
      // tongue tips break off right at the snap; side licks on their own offset beat
      const ph = c.f + c.cycle - e.delay, id = Math.floor(ph - 0.56), key = id;   // leaves as the tongue starts to settle
      if (e.last === null) { e.last = key; continue; }
      if (key !== e.last) {
        e.last = key;
        if (hash(i * 13.1 + key * 7.7) < (e.delay ? 0.18 : 0.50)) {   // not every cycle: irregular
          const r = hash(i * 3.3 + key * 1.9);
          this.pieces.push({p: this.tipWorld(e, new THREE.Vector3()), born: t, life: 0.75 + 0.35 * r, size: e.size * (0.8 + 0.45 * r),
            seed: hash(key * 5.1 + i), drift: (hash(key + i * 2.2) - 0.5) * 0.10});
        }
      }
    }
    this.pieces = this.pieces.filter(q => t - q.born < q.life && t >= q.born).slice(-MAX);
    const P = this.aPos.array, A = this.aPar.array;
    for (let j = 0; j < MAX; j++) {
      const q = this.pieces[j];
      if (!q) { A[j * 4 + 2] = 0; continue; }
      const age = t - q.born, life = age / q.life, s = this.scale;
      // buoyant rise: starts with the tongue's upward speed and accelerates; drifts and sways a little
      P[j * 3] = q.p.x + (q.drift * age + 0.010 * Math.sin(age * 6.5 + q.seed * 9)) * s;
      P[j * 3 + 1] = q.p.y + (0.07 * age + 0.10 * age * age) * s - 0.045 * q.size * s;   // born overlapping the tip it tears from
      P[j * 3 + 2] = q.p.z + (0.6 * q.drift * age) * s;
      A[j * 4] = (0.13 + 0.03 * life) * q.size * s * (1 - 0.35 * life);          // gets taller...
      A[j * 4 + 1] = (0.11 - 0.035 * life) * q.size * s * (1 - 0.35 * life);     // ...and thinner as it rises
      A[j * 4 + 2] = Math.max(1e-4, life); A[j * 4 + 3] = q.seed;
    }
    this.aPos.needsUpdate = true; this.aPar.needsUpdate = true;
  }

  dispose() { this.mesh.removeFromParent(); this.mesh.geometry.dispose(); this.material.dispose(); }
}
