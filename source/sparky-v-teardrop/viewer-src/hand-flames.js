import * as THREE from 'three';

// Little soft flames sitting on each fire mitten: they follow the hand, always rise straight up (fire), flicker and sway.
// Soft additive glow, no geometry -> never reads as a spike. Works for any ArmMesh skinned to the hand / finger bones.
const PER_HAND = 3;
export class HandFlames {
  constructor(root) {
    this.hands = [];
    root.traverse(o => {
      if (!o.isSkinnedMesh || !/ArmMesh/.test(o.name)) return;
      const bones = o.skeleton.bones, inv = o.skeleton.boneInverses;
      const handIdx = bones.findIndex(b => /_(L|R)_Hand$/.test(b.name) && (o.name.includes('_' + b.name.split('_')[1] + '_')));
      if (handIdx < 0) return;
      const handish = new Set(bones.map((b, i) => /_(Hand|Index|Middle|Pinky|Thumb)/.test(b.name) ? i : -1).filter(i => i >= 0));
      const pos = o.geometry.getAttribute('position'), si = o.geometry.getAttribute('skinIndex'), sw = o.geometry.getAttribute('skinWeight');
      const v = new THREE.Vector3(), lo = new THREE.Vector3(1e9, 1e9, 1e9), hi = new THREE.Vector3(-1e9, -1e9, -1e9), c = new THREE.Vector3(); let n = 0;
      for (let i = 0; i < pos.count; i++) {
        let w = 0; for (let k = 0; k < 4; k++) if (handish.has(si.getComponent(i, k))) w += sw.getComponent(i, k);
        if (w < 0.6) continue;
        v.fromBufferAttribute(pos, i); lo.min(v); hi.max(v); c.add(v); n++;
      }
      if (!n) return;
      c.multiplyScalar(1 / n);
      const size = hi.clone().sub(lo);
      // anchors on the upper part of the mitten (mesh bind space, y up), turned into hand-bone local space
      const toBone = new THREE.Matrix4().multiplyMatrices(inv[handIdx], o.bindMatrix);
      const anchors = [[0, .32, 0], [-.30, .18, .10], [.30, .20, -.10]].map(([ax, ay, az]) =>
        new THREE.Vector3(c.x + ax * size.x, c.y + ay * size.y, c.z + az * size.z).applyMatrix4(toBone));
      const cornerA = lo.clone().applyMatrix4(toBone), cornerB = hi.clone().applyMatrix4(toBone);   // mitten extent, hand-bone space
      this.hands.push({mesh: o, bone: bones[handIdx], anchors, cornerA, cornerB});
    });
    const N = Math.max(1, this.hands.length * PER_HAND);
    const g = new THREE.InstancedBufferGeometry(); g.copy(new THREE.PlaneGeometry(1, 1)); g.instanceCount = N;
    this.aPos = new THREE.InstancedBufferAttribute(new Float32Array(N * 3), 3);
    this.aPar = new THREE.InstancedBufferAttribute(new Float32Array(N * 4), 4);   // height, width, visible, seed
    g.setAttribute('aPos', this.aPos); g.setAttribute('aPar', this.aPar);
    this.time = {value: 0};
    this.material = new THREE.ShaderMaterial({
      transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, uniforms: {uTime: this.time},
      vertexShader: `attribute vec3 aPos;attribute vec4 aPar;varying vec2 vUv;varying vec4 vPar;
        void main(){vPar=aPar;vUv=vec2(position.x,position.y+.5);
          vec3 up=vec3(0.,1.,0.);vec3 toCam=normalize(cameraPosition-aPos);vec3 right=normalize(cross(up,toCam));
          vec3 p=aPos+right*position.x*aPar.y+up*(position.y+.5)*aPar.x;if(aPar.z<.5)p=vec3(0.,-99.,0.);
          gl_Position=projectionMatrix*viewMatrix*vec4(p,1.);}`,
      fragmentShader: `uniform float uTime;varying vec2 vUv;varying vec4 vPar;
        float h1(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
        float n2(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(h1(i),h1(i+vec2(1,0)),f.x),mix(h1(i+vec2(0,1)),h1(i+vec2(1,1)),f.x),f.y);}
        void main(){float s=vPar.w,h=vUv.y;
          float sway=(n2(vec2(h*2.2-uTime*3.2+s*9.,s*4.))-.5)*.36*h;
          float x=vUv.x-sway;
          float w=.5*pow(max(0.,sin(3.14159*min(h*1.3,1.))),.55)*(1.-.62*h);   // soft teardrop flame
          float d=abs(x)/max(w,.001);
          float body=(1.-smoothstep(.45,1.,d))*smoothstep(0.,.12,h)*(1.-smoothstep(.72,1.,h+.18*n2(vec2(x*4.+s,h*3.-uTime*5.))));
          float core=(1.-smoothstep(0.,.6,d))*(1.-h*.75);
          vec3 c=mix(vec3(1.,.22,.03),vec3(1.,.58,.12),core);c=mix(c,vec3(1.,.86,.50),core*core*.55);
          gl_FragColor=vec4(c*body*.95,body);}`,
    });
    this.mesh = new THREE.Mesh(g, this.material); this.mesh.frustumCulled = false; this.mesh.renderOrder = 6; this.mesh.name = 'FireHandFlames';
    this._m = new THREE.Matrix4(); this._v = new THREE.Vector3(); this._a = new THREE.Vector3(); this._b = new THREE.Vector3();
  }

  update(t, camera, enabled = true) {
    this.time.value = t; this.mesh.visible = enabled && this.hands.length > 0;
    const P = this.aPos.array, A = this.aPar.array;
    this.hands.forEach((hd, hi) => {
      hd.mesh.updateMatrixWorld(true);
      this._m.multiplyMatrices(hd.mesh.matrixWorld, hd.mesh.bindMatrixInverse).multiply(hd.bone.matrixWorld);
      // world size of the mitten (for flame scale)
      const s = this._a.copy(hd.cornerA).applyMatrix4(this._m).distanceTo(this._b.copy(hd.cornerB).applyMatrix4(this._m)) * .58;   // mitten size in world units
      hd.anchors.forEach((an, k) => {
        const j = hi * PER_HAND + k, seed = hi * 3.7 + k * 1.31;
        this._v.copy(an).applyMatrix4(this._m);
        const fl = 1 + .22 * Math.sin(t * 7.1 + seed * 5) + .14 * Math.sin(t * 12.7 + seed * 2.3);   // flicker
        const big = k === 0 ? 1 : .72;
        P[j * 3] = this._v.x; P[j * 3 + 1] = this._v.y - s * .06; P[j * 3 + 2] = this._v.z;
        A[j * 4] = s * .80 * big * fl; A[j * 4 + 1] = s * .46 * big * (2 - fl) * .9; A[j * 4 + 2] = 1; A[j * 4 + 3] = seed;
      });
    });
    this.aPos.needsUpdate = true; this.aPar.needsUpdate = true;
  }

  dispose() { this.mesh.removeFromParent(); this.mesh.geometry.dispose(); this.material.dispose(); }
}
