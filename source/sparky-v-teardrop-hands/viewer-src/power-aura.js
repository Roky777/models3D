import * as THREE from 'three';
// Angry power-up aura: a golden flame aura behind Sparky with tongues shooting up fast (a "high burner" rage aura).
// One camera-facing quad behind the body (the body hides its middle), additive, so it is cheap on phones too.
export class PowerAura {
  constructor() {
    this.u = {uTime: {value: 0}, uAmt: {value: 0}};
    this.material = new THREE.ShaderMaterial({
      uniforms: this.u, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
      vertexShader: 'varying vec2 vUv;void main(){vUv=uv*2.-1.;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',
      fragmentShader: `uniform float uTime,uAmt;varying vec2 vUv;
        float h(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
        float n(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(h(i),h(i+vec2(1.,0.)),f.x),mix(h(i+vec2(0.,1.)),h(i+vec2(1.,1.)),f.x),f.y);}
        float fbm(vec2 p){float s=0.,a=.5;for(int i=0;i<4;i++){s+=a*n(p);p*=2.03;a*=.5;}return s;}
        void main(){
          vec2 p=vUv;float t=uTime;
          vec2 q=vec2(p.x*1.30,(p.y+.28)*.92);float r=length(q);
          float up=smoothstep(-.55,1.,p.y);
          float fl=fbm(vec2(p.x*4.5,p.y*1.6-t*7.5))*1.1+fbm(vec2(p.x*9.,p.y*3.-t*12.))*.5;   // fast rising flame field
          float edge=.50+up*.60*fl+.06*fl;
          float shell=smoothstep(edge,edge-.30,r);
          float spikes=pow(fbm(vec2(p.x*11.,p.y*1.2-t*10.)),3.)*3.2*smoothstep(.25,.9,r)*smoothstep(edge+.35,edge-.05,r);
          float a=clamp(shell*.62+spikes,0.,1.)*uAmt*smoothstep(-1.,-.70,p.y)*smoothstep(1.,.70,abs(p.x))*smoothstep(1.,.78,p.y);   // soft quad edges
          vec3 col=mix(vec3(1.,.42,.05),vec3(1.,.93,.58),smoothstep(.3,1.,shell+spikes*.5));
          float fk=.85+.12*sin(t*31.)+.08*sin(t*53.);
          vec3 o=col*a*fk*1.15;o*=min(1.,.78/max(dot(o,vec3(.2126,.7152,.0722)),.001));   // stays under the bloom threshold (its glow is drawn here)
          gl_FragColor=vec4(o,a);
        }`});
    this.mesh = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), this.material);
    this.mesh.name = 'PowerAura'; this.mesh.frustumCulled = false; this.mesh.visible = false;
    this._d = new THREE.Vector3();
  }
  update(t, camera, amt, on, center, height) {
    this.u.uTime.value = t; this.u.uAmt.value = amt; this.mesh.visible = on && amt > .01;
    if (!this.mesh.visible) return;
    const d = this._d.copy(camera.position).sub(center); d.y = 0; d.normalize();
    this.mesh.position.copy(center).addScaledVector(d, -.30); this.mesh.position.y += height * .16;
    this.mesh.quaternion.copy(camera.quaternion); this.mesh.scale.set(height * 1.25, height * 1.85, 1);
  }
}
