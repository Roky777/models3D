import {RisingFireWisps} from './rising-fire-wisps.js';
import * as THREE from 'three';
import {TipFlames} from './tip-flames.js';
import {HandFlames} from './hand-flames.js';
const noise=`float hash(vec3 p){p=fract(p*.3183099+vec3(.1,.2,.3));p*=17.;return fract(p.x*p.y*p.z*(p.x+p.y+p.z));}
float noise3(vec3 p){vec3 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(mix(hash(i),hash(i+vec3(1,0,0)),f.x),mix(hash(i+vec3(0,1,0)),hash(i+vec3(1,1,0)),f.x),f.y),mix(mix(hash(i+vec3(0,0,1)),hash(i+vec3(1,0,1)),f.x),mix(hash(i+vec3(0,1,1)),hash(i+vec3(1,1,1)),f.x),f.y),f.z);}
float fbm(vec3 p){return .62*noise3(p)+.27*noise3(p*2.03)+.11*noise3(p*4.01);}`;

// ---- fire timing shared by the shader (tongue stretch), the tip flames and the light
const vnoise=x=>{const i=Math.floor(x),f=x-i,u=f*f*(3-2*f);const h=n=>{const s=Math.sin(n*127.1+311.7)*43758.5453;return s-Math.floor(s);};return h(i)*(1-u)+h(i+1)*u;};
export function flicker(t){   // brightness: slow breathing of the fire + fast ~10 Hz flicker, never periodic
 return 1+.045*Math.sin(t*1.7)*.6+.035*(vnoise(t*1.9)-.5)*2+.012*(vnoise(t*4.3+17)-.5)*2;}
export function tongueCycles(t,n){   // each tongue: eased stretch up, eased settle with a tiny squash-bounce (cute, never snappy)
 const sm=(a,b,x)=>{const q=Math.min(1,Math.max(0,(x-a)/(b-a)));return q*q*(3-2*q);};
 const out=[];for(let k=0;k<n;k++){const rate=.55+.30*((k*.618)%1);const c=t*rate+k*.37+.20*Math.sin(t*.53+k*1.9);
  const f=c-Math.floor(c);const g=Math.max(0,(f-.50)/.50);
  const st=f<.5?sm(0,.5,f):(1-sm(0,.62,g))-.22*Math.sin(Math.PI*sm(.45,1,g))*(1-g*.3);   // up ... settle ... little squash ... recover
  out.push({cycle:Math.floor(c),f,stretch:st});}
 return out;}
// per-vertex flame data from the tongue spines: s (0 root .. 1 tip), membership weight, seed, tongue index
export function restOf(p){return new THREE.Vector3(p[0],p[2],-p[1]);}   // sculpt (Blender Z-up, face -Y) -> body rest space
function buildFlameData(body,restM,tongues){
 const samples=[];
 tongues.forEach((t,k)=>{const sp=t.spine.map(restOf);const at=s=>{const f=s*(sp.length-1),i=Math.min(Math.floor(f),sp.length-2);return sp[i].clone().lerp(sp[i+1],f-i);};
  for(let j=0;j<=40;j++){const s=j/40;samples.push([at(s),s,1.25*Math.max(.005,t.r0*Math.pow(1-Math.pow(s,1.35),.85)),k]);}
  for(const lk of t.licks||[]){const ls=lk.spine.map(restOf);for(let j=0;j<=20;j++){const s=j/20,f=s*(ls.length-1),i=Math.min(Math.floor(f),ls.length-2);
   samples.push([ls[i].clone().lerp(ls[i+1],f-i),lk.t+(.95-lk.t)*s,1.25*Math.max(.004,lk.r0*Math.pow(1-Math.pow(s,1.35),.85)),k]);}}});
 const pos=body.geometry.getAttribute('position'),n=pos.count,data=new Float32Array(n*4),blend=new Float32Array(n),v=new THREE.Vector3();
 const sm=(a,b,x)=>{const q=Math.min(1,Math.max(0,(x-a)/(b-a)));return q*q*(3-2*q);};
 const nt=Math.max(1,tongues.length),bw=new Float32Array(nt),bsv=new Float32Array(nt);
 for(let i=0;i<n;i++){v.fromBufferAttribute(pos,i).applyMatrix4(restM);bw.fill(0);bsv.fill(0);
  if(v.y>-.06)for(const [p,s,r,k] of samples){const d=v.distanceTo(p);if(d>r*1.6+.05)continue;const w=sm(.06,.30,s)*(1-sm(r+.006,r*1.6+.05,d));if(w>bw[k]){bw[k]=w;bsv[k]=s;}}
  let k1=0,k2=0;for(let k=0;k<nt;k++)if(bw[k]>bw[k1])k1=k;k2=k1===0&&nt>1?1:0;for(let k=0;k<nt;k++)if(k!==k1&&bw[k]>bw[k2])k2=k;
  const w1=bw[k1],w2=k2===k1?0:bw[k2],ws=w1+w2;
  const b=ws>1e-5?w2/ws:0;                                      // share of the 2nd tongue: 0.5 exactly on the border
  data[i*4]=ws>1e-5?(bsv[k1]*w1+bsv[k2]*w2)/ws:0;               // position along the tongue, blended
  data[i*4+1]=Math.min(1,w1+w2*.5);data[i*4+2]=k1;data[i*4+3]=k2;blend[i]=b;}
 body.geometry.setAttribute('aFlameB',new THREE.BufferAttribute(blend,1));
 body.geometry.setAttribute('aFlame',new THREE.BufferAttribute(data,4));return data;}
// Surface flames: GPU flame tongues emitted from the whole body surface (burning-ball look), rising, swaying and fading.
class SurfaceFlames{
 constructor(body,bone,time,count=300){
  this.bone=bone;this.time=time;
  body.updateMatrixWorld(true);bone.updateWorldMatrix(true,false);
  const inv=bone.matrixWorld.clone().invert(),pos=body.geometry.getAttribute('position'),v=new THREE.Vector3();
  const pts=[];let cx=0,cy=0,cz=0;
  for(let i=0;i<4000;i++){const k=Math.floor(Math.random()*pos.count);body.getVertexPosition(k,v);v.applyMatrix4(body.matrixWorld).applyMatrix4(inv);pts.push(v.clone());cx+=v.x;cy+=v.y;cz+=v.z;}
  const c=new THREE.Vector3(cx/pts.length,cy/pts.length,cz/pts.length);
  const ys=pts.map(p=>p.y),ymin=Math.min(...ys),ymax=Math.max(...ys);
  const base=[],dir=[],par=[];let n=0;
  for(const p of pts){if(n>=count)break;
   const h=(p.y-ymin)/(ymax-ymin);
   const front=p.z-c.z, face=front>0.10&&Math.abs(p.x-c.x)<0.21&&h>0.12&&h<0.66;   // keep the face clear
   if(face)continue;
   if(Math.random()>0.45+0.40*h)continue;                                          // more flames higher up
   const d=p.clone().sub(c);d.y*=0.35;d.normalize();
   base.push(p.x,p.y,p.z);dir.push(d.x,d.y,d.z);
   par.push(Math.random(),0.45+Math.random()*0.45,(0.055+0.065*h)*(0.75+Math.random()*0.5),(0.035+0.09*h)*(0.8+Math.random()*0.4));n++;}
  const g=new THREE.InstancedBufferGeometry();g.copy(new THREE.PlaneGeometry(1,1));g.instanceCount=n;
  g.setAttribute('aBase',new THREE.InstancedBufferAttribute(new Float32Array(base),3));
  g.setAttribute('aDir',new THREE.InstancedBufferAttribute(new Float32Array(dir),3));
  g.setAttribute('aParam',new THREE.InstancedBufferAttribute(new Float32Array(par),4));
  this.uBone={value:new THREE.Matrix4()};
  this.material=new THREE.ShaderMaterial({transparent:true,depthWrite:false,blending:THREE.AdditiveBlending,
   uniforms:{uTime:time,uBone:this.uBone},
   vertexShader:`attribute vec3 aBase;attribute vec3 aDir;attribute vec4 aParam;uniform float uTime;uniform mat4 uBone;
    varying vec2 vUv;varying float vLife;varying float vSeed;
    void main(){float life=fract(uTime*aParam.y+aParam.x*7.13);
     vec3 p=aBase+aDir*(.006+.03*life);p.y+=aParam.w*life;
     p.x+=.018*sin(uTime*3.1+aParam.x*40.)*life;p.z+=.014*cos(uTime*2.7+aParam.x*23.)*life;
     vec4 wp=uBone*vec4(p,1.);
     float sz=aParam.z*pow(sin(3.14159*clamp(life*1.15,0.,1.)),.55);
     vec3 right=vec3(viewMatrix[0][0],viewMatrix[1][0],viewMatrix[2][0]);vec3 up=vec3(viewMatrix[0][1],viewMatrix[1][1],viewMatrix[2][1]);
     wp.xyz+=right*position.x*sz+up*(position.y+.45)*sz*1.9;
     vUv=position.xy*2.;vLife=life;vSeed=aParam.x;gl_Position=projectionMatrix*viewMatrix*wp;}`,
   fragmentShader:noise+`
    uniform float uTime;varying vec2 vUv;varying float vLife;varying float vSeed;
    void main(){float yy=vUv.y*.5+.5;
     float n=noise3(vec3(vUv.x*3.,vUv.y*3.-uTime*4.5,vSeed*17.));
     float width=mix(.85,.04,pow(yy,.75));
     float edge=abs(vUv.x+.22*(n-.5)*yy)/max(width,.01);
     float shape=(1.-smoothstep(.5,1.,edge))*smoothstep(-.05,.18,yy)*(1.-smoothstep(.8,1.,yy+.15*n));
     float core=(1.-smoothstep(0.,.65,edge))*(1.-yy*.8);
     vec3 col=mix(vec3(.85,.10,.01),vec3(1.,.42,.05),core);col=mix(col,vec3(1.,.68,.16),core*core*(1.-vLife)*.7);
     float a=shape*(1.-smoothstep(.45,1.,vLife))*smoothstep(0.,.12,vLife)*.42;
     gl_FragColor=vec4(col*a,a);}`});
  this.mesh=new THREE.Mesh(g,this.material);this.mesh.frustumCulled=false;this.mesh.renderOrder=6;this.mesh.name='FireSurfaceFlames';
 }
 update(on){this.mesh.visible=on;this.bone.updateWorldMatrix(true,false);this.uBone.value.copy(this.bone.matrixWorld);}
}
const FIRE_FIELD=`float fireHeat(vec3 p,float t){float hgt=clamp((p.y+.444)/.944,0.,1.);float ang=atan(p.x,abs(p.z));   // symmetric front/back: one fireball
 float nA=fbm(vec3(ang*1.6,p.y*3.2-t*.85,1.7));float nB=fbm(vec3(ang*3.1+4.,p.y*6.5-t*1.6,3.1));
 float tongues=.5+.5*sin(ang*7.+nA*5.+p.y*4.-t*.4);float heat=1.05-hgt*.95+(tongues-.5)*.55+(nB-.5)*.45;
 return heat;}
float fireFace(vec3 p){float hgt=clamp((p.y+.444)/.944,0.,1.);return (p.z>0.?1.:.45)*smoothstep(.05,.16,abs(p.z))*(1.-smoothstep(.20,.30,abs(p.x)))*smoothstep(.10,.18,hgt)*(1.-smoothstep(.50,.58,hgt));}`;
const ART_FLOW=`uniform sampler2D uArtF,uArtB,uArtFlow;
vec2 artUV(vec3 p){return vec2(1.15160*p.x+.49258,1.05241*p.y+.50066);}
vec3 artAt(vec3 p,vec3 n){
 float faceK=smoothstep(.0,.12,p.z)*(1.-smoothstep(.20,.30,abs(p.x)))*smoothstep(-.36,-.28,p.y)*(1.-smoothstep(.02,.10,p.y));
 float wf=pow(max(n.z,0.),2.)+faceK*6.,wb=pow(max(-n.z,0.),2.),ws=pow(abs(n.x),2.)*1.2;float sw=wf+wb+ws+1e-4;
 vec3 cf=texture2D(uArtFlow,artUV(p)).rgb;   // face-free art: the rising fire never drags eyes / brows / smile up into the forehead
 vec3 cb=texture2D(uArtB,vec2(-1.12177*p.x+.46821,.94361*p.y+.45150)).rgb;
 vec3 cs=texture2D(uArtB,vec2(1.12177*p.z*sign(p.x)+.46821,.94361*p.y+.45150)).rgb;
 return (cf*wf+cb*wb+cs*ws)/sw;}
vec3 artFlow(vec3 p,vec3 n,float t){float ph1=fract(t*.42),ph2=fract(t*.42+.5);float w1=1.-abs(2.*ph1-1.);
 vec3 fl=vec3(.012*sin(p.y*9.+t*1.3),.085,0.);
 float fk=smoothstep(.0,.12,p.z)*(1.-smoothstep(.20,.30,abs(p.x)))*smoothstep(-.36,-.28,p.y)*(1.-smoothstep(.02,.10,p.y));
 fl*=1.-fk;
 return artAt(p-fl*ph1,n)*w1+artAt(p-fl*ph2,n)*(1.-w1);}`;
export class FireAura{
 constructor(gltf,tongues=[]){this.tongues=tongues;this.stretch={value:new Float32Array(8)};this.flick={value:1};this.time={value:0};this.enabled=true;this.records=[];this.volumes=[];this.lids=[];this.root=gltf.scene;this.fireTexture=new THREE.TextureLoader().load('textures/living-fire-wrap-v1.webp');this.fireTexture.colorSpace=THREE.SRGBColorSpace;this.fireTexture.wrapS=this.fireTexture.wrapT=THREE.RepeatWrapping;this.fireTexture.anisotropy=4;
 const bodyBone=gltf.scene.getObjectByName('Sparky_Body')||gltf.scene;let body=null;
 gltf.scene.traverse(o=>{if(o.isMesh&&o.name.startsWith('geometry_0'))body=o});this.body=body;
 if(body&&/v5/i.test(body.material.name||'')){const mat=body.material.clone();body.material=mat;mat.metalness=0;mat.roughness=.62;mat.emissive.set(0xffffff);{const ns=new THREE.TextureLoader().load('textures/v5-basecolor-nosmile'+(window.__SPARKY_MOBILE?'':'-hd')+'.webp',t=>{t.anisotropy=8;t.needsUpdate=true;});const m0=mat.map;ns.flipY=m0?m0.flipY:false;ns.colorSpace=THREE.SRGBColorSpace;ns.channel=m0?m0.channel:0;ns.anisotropy=4;mat.map=ns;const sk=new THREE.TextureLoader().load('textures/v5-basecolor-skin'+(window.__SPARKY_MOBILE?'':'-hd')+'.webp',t=>{t.anisotropy=8;t.needsUpdate=true;});sk.flipY=ns.flipY;sk.colorSpace=THREE.SRGBColorSpace;sk.channel=ns.channel;sk.anisotropy=4;this.skinMap={value:sk};}   // viewer: smile drawn by the shader; skin bake under the eyelids
 mat.emissiveMap=mat.map;mat.emissiveIntensity=.42;
 // eyelids drawn in the shader to the exact shape of the painted eyes; driven by the rig's blink morphs
 this.blinkL={value:0};this.blinkR={value:0};this.mouthOpen={value:0};this.mouthO={value:0};this.mouthSrc=null;this.lidSrc={L:null,R:null};const restU={value:body.skeleton.boneInverses[body.skeleton.bones.findIndex(b=>b.name==='Sparky_Body')].clone()};
 this.root.traverse(o=>{if(o.isMesh&&o.name.startsWith('Eyelid_')){if(o.name.startsWith('Eyelid_L_Upper'))this.lidSrc.L=o;if(o.name.startsWith('Eyelid_R_Upper'))this.lidSrc.R=o;o.visible=false;o.userData.hiddenLid=true;}if(o.isMesh&&o.name.startsWith('Mouth_')){if(o.name.startsWith('Mouth_Interior'))this.mouthSrc=o;o.visible=false;o.userData.hiddenLid=true;}});
 this.flameData=buildFlameData(body,restU.value,tongues);this.restMatrix=restU.value;this.tipFlames=new TipFlames(body,restU.value,tongues);this.handFlames=new HandFlames(gltf.scene);const _tl=new THREE.TextureLoader();const artF=_tl.load('textures/front-art-padded.webp'),artB=_tl.load('textures/back-art-v2.webp'),artNS=_tl.load('textures/front-art-nosmile.webp'),artSK=_tl.load('textures/front-art-skin.webp'),artFL=_tl.load('textures/front-art-flow.webp');for(const t of [artF,artB,artNS,artSK,artFL]){t.colorSpace=THREE.SRGBColorSpace;t.wrapS=t.wrapT=THREE.ClampToEdgeWrapping;}
 mat.onBeforeCompile=s=>{s.uniforms.uFireTime=this.time;s.uniforms.uRest=restU;s.uniforms.uArtF={value:artF};s.uniforms.uArtB={value:artB};s.uniforms.uArtFlow={value:artFL};s.uniforms.uArtNS={value:artNS};s.uniforms.uSkinMap=this.skinMap;s.uniforms.uArtSK={value:artSK};s.uniforms.uBlinkL=this.blinkL;s.uniforms.uBlinkR=this.blinkR;s.uniforms.uMouthOpen=this.mouthOpen;s.uniforms.uMouthO=this.mouthO;s.uniforms.uStretch=this.stretch;s.uniforms.uFlick=this.flick;
 s.vertexShader=(window.__SPARKY_MOBILE?'#define SPARKY_MOBILE\n':'')+'uniform float uFireTime;uniform mat4 uRest;varying vec3 vRest;varying vec3 vRN;attribute vec4 aFlame;attribute float aFlameB;varying vec4 vFlame;varying float vSide;uniform float uStretch[8];\n'+noise+'\n'+FIRE_FIELD+'\nvec3 gN=vec3(0.,0.,1.);\n'+ART_FLOW+'\nfloat fireLayers(vec3 p){vec3 c=artFlow(p,gN,uFireTime);return 2.2*smoothstep(.45,.85,dot(c,vec3(.25,.6,.15)))*(1.-(p.z>0.?fireFace(p):0.))*smoothstep(-.44,-.32,p.y);}\n'+s.vertexShader.replace('#include <beginnormal_vertex>',`#include <beginnormal_vertex>
 
#ifdef SPARKY_MOBILE
 {gN=normalize(mat3(uRest)*objectNormal);}
#else
 {vec3 rp=(uRest*vec4(position,1.)).xyz;gN=normalize(mat3(uRest)*objectNormal);float eps=.008;float l0=fireLayers(rp);
  vec3 g=vec3(fireLayers(rp+vec3(eps,0,0))-l0,fireLayers(rp+vec3(0,eps,0))-l0,fireLayers(rp+vec3(0,0,eps))-l0)/eps*.012;
  vec3 nn=normalize(objectNormal);objectNormal=normalize(nn-(g-nn*dot(g,nn)));}
#endif
`).replace('#include <begin_vertex>',`#include <begin_vertex>
 vRest=(uRest*vec4(position,1.)).xyz;vRN=gN;
 float crown=smoothstep(.0,.42,vRest.y);
 float edgeFlame=smoothstep(.27,.40,abs(vRest.x))*smoothstep(-.27,-.04,vRest.y);
 float flameMove=max(crown,edgeFlame);
 transformed.x+=.004*flameMove*sin(vRest.y*13.-uFireTime*1.3+vRest.x*11.);
 transformed.y+=.005*flameMove*sin(vRest.x*12.+uFireTime*1.5+vRest.z*8.);
 float backF=smoothstep(-.02,-.16,vRest.z)*smoothstep(-.34,.05,vRest.y);            // back burns too: small licks low, stronger toward the top
 float rise=sin(vRest.y*16.-uFireTime*3.2+vRest.x*9.)*.5+.5;
 transformed.y+=.006*backF*rise*(.5+.5*smoothstep(-.3,.3,vRest.y));
 transformed.x+=.003*backF*sin(vRest.y*12.-uFireTime*2.6+vRest.x*7.);
 // real 3D flame layers: the same tongue field that paints the colours pushes the surface out in stacked steps,
 // and because the field flows upward the raised tongues physically rise over the body
 float layers=fireLayers(vRest);
 float mPerQ=length(uRest[0].xyz);
 float dispM=.012*layers;
 transformed+=objectNormal*(dispM/max(mPerQ,1e-6));
 // Cute fire: soft licks that roll up each tongue (root anchored, tip sways most), each tongue gently stretches up,
 // settles back and does a tiny squash-bounce; everything eased, nothing jittery. All seeds come from position and the
 // stretch is blended between neighbouring tongues, so the surface never creases where two tongues meet.
 float fS=aFlame.x,fW=aFlame.y;int fI1=int(aFlame.z+.5),fI2=int(aFlame.w+.5);
 float stK=mix(uStretch[fI1],uStretch[fI2],aFlameB);float fSide=mix(float(fI1>0),float(fI2>0),aFlameB);vSide=fSide*fW;
 float fAng=atan(vRest.x,vRest.z+.001);
 float fSeed=.5+.28*sin(fAng*2.+.7)+.18*cos(fAng*3.-1.1);
 vFlame=vec4(fS,fW,fSeed,stK);
 float tipA=fW*pow(fS,1.6);
 float ph=fS*4.6-uFireTime*3.0+fSeed*7.;
 float lick=sin(ph+.8*sin(fS*2.2-uFireTime*1.3+fSeed*4.))*.7+sin(ph*1.6-uFireTime*1.1+2.)*.3;
 float drift=noise3(vec3(fS*2.,fSeed*5.,uFireTime*.9))-.5;
 vec3 sideD=vec3(cos(fAng+1.5708),0.,sin(fAng+1.5708))*-1.,outD=vec3(sin(fAng),0.,cos(fAng));
 vec3 offR=(sideD*(.018*lick+.006*drift)+outD*(.006*sin(ph*1.2+1.)))*tipA;
 offR.y+=fW*pow(fS,2.0)*(.050+.008*fSide)*stK;
 offR.xz*=1.-.30*stK*fW*smoothstep(.45,1.,fS);
 float cwT=smoothstep(.10,.48,vRest.y)*(1.-fW);
 offR+=vec3(.004*cwT*sin(uFireTime*2.2+vRest.y*9.+vRest.x*6.),.003*cwT*sin(uFireTime*1.9+vRest.x*7.+vRest.z*5.),.003*cwT*cos(uFireTime*2.0+vRest.y*8.));
 transformed+=inverse(mat3(uRest))*offR;`);
 s.fragmentShader=s.fragmentShader.replace('#include <map_fragment>','float lidC=lidCover(vRest);vec4 sampledDiffuseColor=mix(texture2D(map,vMapUv),texture2D(uSkinMap,vMapUv),lidC);diffuseColor*=sampledDiffuseColor;').replace('#include <emissivemap_fragment>','vec4 emissiveColor=mix(texture2D(emissiveMap,vEmissiveMapUv),texture2D(uSkinMap,vEmissiveMapUv),lidC);totalEmissiveRadiance*=emissiveColor.rgb;');
 s.fragmentShader='uniform sampler2D uArtNS,uArtSK;uniform float uFireTime,uBlinkL,uBlinkR,uMouthOpen,uMouthO,uFlick;varying vec3 vRest;varying vec3 vRN;varying vec4 vFlame;varying float vSide;\n'+'uniform sampler2D uSkinMap;float lidCover(vec3 p){float cov=0.;for(int e=0;e<2;e++){vec2 c=e==0?vec2(-.1228,-.1306):vec2(.0951,-.1306);float bl=e==0?uBlinkL:uBlinkR;vec2 q=(p.xy-c)/vec2(.094,.101);float inside=1.-smoothstep(.88,1.05,length(q));float arch=.40*(1.-q.x*q.x);float edge=mix(1.06,-.31,bl)+arch*bl,lidBot=mix(-1.06,-.28,bl)+arch*bl;float aa=fwidth(q.y)*1.5+.01;float c1=max(smoothstep(edge-aa,edge+aa,q.y),1.-smoothstep(lidBot-aa,lidBot+aa,q.y))*smoothstep(.02,.10,bl);cov=max(cov,inside*c1);}return cov*smoothstep(.02,.10,p.z);}\n'+noise+'\n'+FIRE_FIELD+'\n'+ART_FLOW+'\n'+s.fragmentShader.replace('#include <opaque_fragment>',`
 float lumL=dot(outgoingLight,vec3(.3,.59,.11)),lumD=dot(diffuseColor.rgb,vec3(.3,.59,.11));
 vec3 skinC=vec3(.95,.69,.115)*clamp(.85+.25*dot(normalize(normal),normalize(vec3(-.35,.55,.75))),.75,1.1);
 float cw=max(smoothstep(-0.08,0.38,vRest.y),smoothstep(-.02,-.16,vRest.z)*smoothstep(-.38,.0,vRest.y));
 float flow=fbm(vec3(vRest.x*7.,vRest.y*6.2-uFireTime*2.7,vRest.z*7.));
 float lick=smoothstep(.52,.86,flow)*cw;
 outgoingLight=mix(outgoingLight,outgoingLight*1.22+vec3(1.,.80,.30)*.22,lick*.65);
 float pulse=.93+.05*sin(uFireTime*7.3+vRest.y*9.)+.03*sin(uFireTime*13.7+vRest.x*5.);
 outgoingLight*=mix(1.,pulse,cw);
 // crisp stylized fire over the whole body (not the face): hard-edged red / orange / yellow tongue bands rising all round
 {
  float hgt=clamp((vRest.y+.444)/.944,0.,1.);
  float ang=atan(vRest.x,vRest.z);
  float faceZ=(vRest.z>0.?1.:.45)*smoothstep(.05,.16,abs(vRest.z))*(1.-smoothstep(.20,.30,abs(vRest.x)))*smoothstep(.10,.18,hgt)*(1.-smoothstep(.50,.58,hgt));
  vec3 c=artFlow(vRest,normalize(vRN),uFireTime);
  float heat=dot(c,vec3(.25,.6,.15));float e=.018;
  // bump shading from the band field: each colour layer reads as a raised, sculpted flame edge
  float band=smoothstep(.45,.85,heat)*2.;
  vec3 dpx=dFdx(-vViewPosition),dpy=dFdy(-vViewPosition);float dbx=dFdx(band),dby=dFdy(band);
  vec3 nV=normalize(normal);vec3 r1=cross(dpy,nV),r2=cross(nV,dpx);float det=dot(dpx,r1);
  vec3 grad=sign(det)*(dbx*r1+dby*r2);vec3 nBump=normalize(abs(det)*nV-grad*.0035);
  float lit=clamp(.80+.38*dot(nBump,normalize(vec3(-.35,.55,.75))),.55,1.25);
  float fireAmt=(1.-(vRest.z>0.?faceZ:0.))*.96;
  outgoingLight=mix(outgoingLight,c*1.08*lit,fireAmt);
 }
 // living fire light on the tongues
 {
  float fS=vFlame.x,fW=vFlame.y,fSeed=vFlame.z,stK=vFlame.w;
  // heat pulses: bright bands that rush up each tongue (light travels with the gas, upward)
  float pn=fbm(vec3(vRest.x*9.,vRest.y*7.-uFireTime*3.4,vRest.z*9.));
  float pulse=smoothstep(.45,1.,sin(fS*7.-uFireTime*4.2+fSeed*6.+pn*2.5));
  outgoingLight=mix(outgoingLight,outgoingLight*1.10+vec3(1.,.62,.20)*.10,pulse*fW*smoothstep(.35,.9,fS)*.35);   // big flame body: subtle, toward the tip only
  // tips cool to deeper red-orange as they thin out
  float tipC=fW*smoothstep(.62,1.,fS);
  outgoingLight=mix(outgoingLight,outgoingLight*vec3(1.08,.62,.42),tipC*.55);
  // burning tips: rising noise eats the end of each tongue; the cut edge burns hot yellow-white
  float er=fbm(vec3(vRest.x*7.,vRest.y*5.5-uFireTime*1.7,vRest.z*7.));
  float eat=tipC*(.75+.35*max(stK,0.))*smoothstep(.78,1.,fS)*.95;
  float edge=er-(eat-.18);
  if(eat>.02&&edge<0.)discard;
  outgoingLight=mix(mix(outgoingLight,vec3(1.,.84,.50),.55),outgoingLight,max(smoothstep(.0,.10,edge),step(eat,.02)));
 }
 // igniting side flames: hot glow building toward each tip, flickering
 {float ig=vSide*smoothstep(.25,.95,vFlame.x);float fl=.75+.25*sin(uFireTime*7.3+vFlame.z*17.)+.15*sin(uFireTime*12.1+vFlame.x*9.);
  outgoingLight=mix(outgoingLight,outgoingLight*1.12+vec3(1.,.62,.18)*.16*fl,ig*.45);}
 outgoingLight*=uFlick;
 // ---- face finishing (cute, clean): everything drawn over the face takes its colour from the REAL lit skin next to
 // it (front art sampled nearby x the light at this pixel), so lids and mouth covers melt into the face
 {
  vec3 L3=vec3(.3,.59,.11);float fF=smoothstep(.02,.10,vRest.z);
  vec3 artHere=texture2D(uArtF,artUV(vRest)).rgb;
  float skinLike=smoothstep(.45,.65,dot(artHere,L3))*smoothstep(.30,.15,artHere.b)*smoothstep(.05,.2,artHere.r-artHere.b);
  float kL=mix(.88*uFlick,clamp(dot(outgoingLight,L3)/max(dot(artHere,L3),.04),.7,1.6),skinLike);   // light at this pixel (from skin pixels)
  #define SKIN(xy) (texture2D(uArtF,artUV(vec3(xy,0.))).rgb*kL)
  // glossy eye sparkles + rosy blush
  for(int e=0;e<2;e++){
   vec2 c=e==0?vec2(-.1228,-.1306):vec2(.0951,-.1306); float bl=e==0?uBlinkL:uBlinkR; float open_=1.-smoothstep(.15,.35,bl);
   float sp1=1.-smoothstep(.010,.016,length((vRest.xy-(c+vec2(.020,.026)))*vec2(1.,.85)));
   float sp2=1.-smoothstep(.004,.008,length(vRest.xy-(c+vec2(-.020,-.022))));
   vec2 bc=e==0?vec2(-.168,-.218):vec2(.124,-.218);
   float blush=1.-smoothstep(.35,1.,length((vRest.xy-bc)/vec2(.044,.026)));
   outgoingLight=mix(outgoingLight,outgoingLight*vec3(1.02,.62,.58)+vec3(.10,.02,.03),blush*.55*fF);
  }
  // eyelids: lid colour = the skin around this eye (gradient between just below and just above it, same light),
  // soft crease shade toward the lash, tapered lash line with a tiny outer flick
  for(int e=0;e<2;e++){
   vec2 c=e==0?vec2(-.1228,-.1306):vec2(.0951,-.1306); float bl=e==0?uBlinkL:uBlinkR; float outer=e==0?-1.:1.;
   if(bl<.02)continue;
   vec2 q=(vRest.xy-c)/vec2(.094,.101); float inside=1.-smoothstep(.88,1.05,length(q));   // also covers the soft glow around the painted eye
   float meet=-.28, arch=.40*(1.-q.x*q.x);
   float edge=mix(1.06,meet-.03,bl)+arch*bl, lidBot=mix(-1.06,meet,bl)+arch*bl;
   float aa=fwidth(q.y)*1.5+.01;
   float cover=max(smoothstep(edge-aa,edge+aa,q.y),1.-smoothstep(lidBot-aa,lidBot+aa,q.y))*smoothstep(.02,.10,bl);
   outgoingLight*=1.-.07*smoothstep(.30,0.,abs(q.y-edge))*step(edge,q.y+.001)*inside*cover*fF;   // soft crease shade above the lash
   float t=abs(q.x), taper=1.-smoothstep(.55,1.,t);
   float lw=.045+.035*taper*smoothstep(.3,.8,bl);
   float lash=(1.-smoothstep(lw-aa,lw+aa,abs(q.y-edge)))*smoothstep(.30,.65,bl)*(1.-smoothstep(.92,1.02,t));
   float flick=(1.-smoothstep(.035,.06,length(vec2(q.x*outer-1.0,q.y-edge-.10))))*smoothstep(.55,.85,bl);   // outer lash flick
   outgoingLight=mix(outgoingLight,vec3(.075,.020,.006),clamp(max(lash,flick)*inside*fF+flick*(1.-inside)*fF,0.,1.));   // solid dark-brown lash (same family as brows)
  }
  // mouth: hide the painted smile cleanly whenever a mouth shape is shown, then draw the cute shape on top
  vec2 mm=vRest.xy-vec2(-.0124,-.2084);float e=.0016;
  float curve0=-.0116+5.78*mm.x*mm.x;
  float coverAmt=clamp(max(uMouthOpen,uMouthO)*5.,0.,1.);
  {   // the closed smile, drawn here (curve, thickness and colour measured from the art); it simply is not drawn while a
      // mouth shape is shown, so nothing ever has to be covered
   float xc=clamp(mm.x,-.0626,.0626), cy=-.0116+5.78*xc*xc;
   float dl=length(vec2(mm.x-xc,(mm.y-cy)*1.05));
   float aaS=fwidth(dl)*1.1+.0003;
   float line=1.-smoothstep(.0036-aaS,.0036+aaS,dl);
   float halo=(1.-smoothstep(.0036,.0085,dl))*(1.-line)*step(cy,mm.y);     // soft embossed light just above the line
   float vis=1.-coverAmt;
   outgoingLight=mix(outgoingLight,outgoingLight*1.06,halo*.6*vis*fF);
   outgoingLight=mix(outgoingLight,vec3(.125,.015,.0025)*kL,line*vis*fF);   // sRGB (99,32,8) in linear light
  }
  if(uMouthOpen>.02){   // cute open smile: a rounded 'D' -- gentle smiling top line over a round bottom, soft corners,
                        // warm red inside, pink tongue, thin brown outline (same colour as the painted smile)
   float op=uMouthOpen; float w=.031+.007*op, h=.010+.028*op, t0=.002;
   float topY=t0+1.9*mm.x*mm.x;                                        // the top line smiles up a little at the corners
   float dE=(1.-length(vec2(mm.x/w,(mm.y-t0)/h)))*min(w,h);              // round bottom (ellipse)
   float dT=topY-mm.y;                                                    // below the top line
   float k=.004; float hh=clamp(.5+.5*(dT-dE)/k,0.,1.); float d=mix(dT,dE,hh)-k*hh*(1.-hh);   // smooth min -> soft corners
   float aaM=fwidth(d)*1.2+.0004;
   float inner=smoothstep(-aaM,aaM,d), outerL=smoothstep(-aaM,aaM,d+.0027);
   vec3 cav=mix(vec3(.64,.15,.12),vec3(.33,.05,.07),smoothstep(t0-h,t0,mm.y));
   float tg=1.-smoothstep(.75,1.,length(vec2(mm.x/(w*.56),(mm.y-(t0-h*.78))/(h*.42))));
   cav=mix(cav,vec3(1.,.52,.55),tg*.95);
   outgoingLight=mix(outgoingLight,vec3(.27,.09,.04),outerL*fF);
   outgoingLight=mix(outgoingLight,cav,inner*fF);
  }
  if(uMouthO>.02){      // cute little 'o'
   vec2 qo=(mm-vec2(0.,-.004))/(vec2(.012,.016)*(.45+.55*uMouthO)); float r=length(qo);
   float aaO=fwidth(r)*1.2+.02;
   float inner=1.-smoothstep(1.-aaO,1.,r), outerL=1.-smoothstep(1.24-aaO,1.24,r);
   vec3 cav=mix(vec3(.30,.05,.06),vec3(.60,.13,.11),smoothstep(.2,-1.,qo.y));
   cav=mix(cav,vec3(1.,.50,.52),(1.-smoothstep(.45,.7,length((qo-vec2(0.,-.62))/vec2(.75,.42))))*.9);
   outgoingLight=mix(outgoingLight,vec3(.27,.09,.04),outerL*fF);
   outgoingLight=mix(outgoingLight,cav,inner*fF);
  }
  #undef SKIN
 }
 float rimV=1.-abs(dot(normalize(normal),normalize(vViewPosition)));
 outgoingLight+=vec3(1.,.30,.04)*pow(rimV,2.5)*.45;
 #include <opaque_fragment>`);};
 mat.customProgramCacheKey=()=> 'sparky-vflame-face17';this.bodyMaterial=mat;
 // translucent flame shells: soft tongues eroded by rising noise around the crown, sides and back (not over the face)
 this.shells=[];const mkShell=(inflate,lift,alpha,scale,speed,key)=>{const sm=new THREE.MeshBasicMaterial({color:0xffffff,transparent:true,depthWrite:false,blending:THREE.AdditiveBlending});
  sm.onBeforeCompile=sh=>{sh.uniforms.uFireTime=this.time;sh.uniforms.uRest=restU;
   sh.vertexShader='uniform float uFireTime;uniform mat4 uRest;varying vec3 vRest;varying vec3 vN;varying vec3 vV;\n'+noise+'\n'+sh.vertexShader.replace('#include <begin_vertex>',`#include <begin_vertex>
   vRest=(uRest*vec4(position,1.)).xyz;float cw=smoothstep(-0.34,0.30,vRest.y);
   float n=fbm(vec3(vRest.x*${scale.toFixed(2)},vRest.y*${(scale*.8).toFixed(2)}-uFireTime*${speed.toFixed(2)},vRest.z*${scale.toFixed(2)}));
   transformed+=objectNormal*(${inflate.toFixed(3)}*(.35+.65*cw)+.03*cw*n);transformed.y+=${lift.toFixed(3)}*cw*cw*(n+.2);`).replace('#include <project_vertex>','#include <project_vertex>\n vN=normalize(normalMatrix*objectNormal);vV=-mvPosition.xyz;');
   sh.fragmentShader='uniform float uFireTime;varying vec3 vRest;varying vec3 vN;varying vec3 vV;\n'+noise+'\n'+sh.fragmentShader.replace('#include <opaque_fragment>',`
   float fres=1.-abs(dot(normalize(vN),normalize(vV)));
   float cw=smoothstep(-0.36,0.28,vRest.y);
   float n=fbm(vec3(vRest.x*${(scale*1.4).toFixed(2)},vRest.y*${(scale*1.1).toFixed(2)}-uFireTime*${(speed*1.15).toFixed(2)},vRest.z*${(scale*1.4).toFixed(2)}));
   float face=smoothstep(.04,.16,vRest.z)*(1.-smoothstep(-.02,.10,vRest.y));
   float tongue=smoothstep(.50,.78,n+fres*.30-(1.-cw)*.45);
   float a=tongue*(.20+.80*fres)*cw*(1.-face)*${alpha.toFixed(2)};
   vec3 col=mix(vec3(1.,.16,.02),vec3(1.,.62,.14),smoothstep(.55,.90,n));col=mix(col,vec3(1.,.90,.55),smoothstep(.82,.98,n)*.6);
   outgoingLight=col;diffuseColor.a=a;
   #include <opaque_fragment>`);};
  sm.customProgramCacheKey=()=> 'sparky-flame-shell-'+key;
  const shell=new THREE.SkinnedMesh(body.geometry,sm);shell.name='FireShell_'+key;shell.bind(body.skeleton,body.bindMatrix);shell.morphTargetInfluences=body.morphTargetInfluences;shell.morphTargetDictionary=body.morphTargetDictionary;shell.frustumCulled=false;shell.renderOrder=5;body.parent.add(shell);shell.position.copy(body.position);shell.quaternion.copy(body.quaternion);shell.scale.copy(body.scale);this.shells.push(shell);};
 // surface flame sprites removed (rejected: not high quality)
 body=null;}
 if(body){const si=body.geometry.getAttribute('skinIndex'),sw=body.geometry.getAttribute('skinWeight'),features=new Float32Array(si.count);for(let i=0;i<si.count;i++){let w=0;for(let k=0;k<4;k++){const j=si.getComponent(i,k);if(body.skeleton.bones[j]?.name.includes('_Brow_'))w+=sw.getComponent(i,k);}features[i]=Math.min(1,w*1.6);}body.geometry.setAttribute('featureWeight',new THREE.BufferAttribute(features,1));const ga=body.geometry.attributes;const findAttr=n=>Object.keys(ga).find(k=>k.toLowerCase()===n);for(const [src,dst] of [['_spike','spikeMask'],['_core','spikeCore']]){const k=findAttr(src);body.geometry.setAttribute(dst,k?ga[k]:new THREE.BufferAttribute(new Float32Array(si.count),1));}const mat=body.material.clone();body.material=mat;mat.emissive.set(0);mat.roughnessMap=null;mat.roughness=1;mat.metalness=0;mat.transparent=true;mat.side=THREE.FrontSide;
 mat.onBeforeCompile=s=>{
 s.uniforms.uFireTime=this.time;s.uniforms.uFireArt={value:this.fireTexture};s.uniforms.uFireRest={value:body.skeleton.boneInverses[body.skeleton.bones.findIndex(b=>b.name==='Sparky_Body')].clone()};
 s.vertexShader='attribute float featureWeight;attribute float spikeMask;attribute float spikeCore;varying float vSpike;varying float vCore;uniform mat4 uFireRest;varying float vFeatureWeight;varying vec3 vFirePos;uniform float uFireTime;\n'+s.vertexShader;
 s.vertexShader=s.vertexShader.replace('#include <begin_vertex>',`#include <begin_vertex>
 vFirePos=(uFireRest*vec4(position,1.)).xyz;vFeatureWeight=featureWeight;vSpike=spikeMask;vCore=spikeCore;
 float crown=smoothstep(.0,.42,vFirePos.y);
 float edgeFlame=smoothstep(.27,.40,abs(vFirePos.x))*smoothstep(-.27,-.04,vFirePos.y);
 float flameMove=max(crown,edgeFlame);
 transformed.x+=.004*flameMove*sin(vFirePos.y*13.-uFireTime*1.3+vFirePos.x*11.);
 transformed.y+=.005*flameMove*sin(vFirePos.x*12.+uFireTime*1.5+vFirePos.z*8.);`);
 s.fragmentShader='uniform sampler2D uFireArt;varying float vSpike;varying float vCore;varying float vFeatureWeight;varying vec3 vFirePos;uniform float uFireTime;\n'+noise+'\n'+`float wrapDistance(float a,float b){return abs(atan(sin(a-b),cos(a-b)));}
float wrappedFlames(vec3 p,float time){
 float theta=atan((p.x+.02)/.42,p.z/.39);
 float heat=.035;
 for(int i=0;i<11;i++){
  float fi=float(i);
  float endHeight=.12+.26*(.5+.5*sin(fi*2.31+.4));
  float h=clamp((p.y+.49)/(endHeight+.49),0.,1.);
  float center=fi*6.2831853/11.+.22*sin(h*3.1+fi*.92)*h-.48*h*h;
  center+=.018*sin(time*.75+fi*1.7+h*4.)*h;
  float width=.035+.33*pow(max(0.,sin(h*3.14159)),.68)*(1.-.44*h);
  float distance=wrapDistance(theta,center);
  float gate=smoothstep(0.,.08,h)*(1.-smoothstep(.94,1.,h));
  float orange=.35*(1.-smoothstep(width*.65,width*1.65,distance));
  float gold=.38*(1.-smoothstep(width*.27,width*.95,distance));
  float yellow=.24*(1.-smoothstep(width*.04,width*.48,wrapDistance(theta,center+.055*(1.-h))));
  heat=max(heat,(orange+gold+yellow)*gate);
 }
 return heat;
}`+'\n'
 +s.fragmentShader;
 s.fragmentShader=s.fragmentShader.replace('#include <opaque_fragment>',`
 vec3 painted=diffuseColor.rgb;
 float brightColour=smoothstep(.18,.52,painted.r)*(1.-smoothstep(.45,.80,painted.b/max(painted.r,.001)));
 float eyeL=1.-smoothstep(.87,1.03,length(vec2((vFirePos.x+.152)/.087,(vFirePos.y+.135)/.100)));
 float eyeR=1.-smoothstep(.87,1.03,length(vec2((vFirePos.x-.095)/.091,(vFirePos.y+.139)/.101)));
 float faceFront=smoothstep(.17,.27,vFirePos.z);
 float mouthZone=(1.-smoothstep(.75,1.1,length(vec2((vFirePos.x+.028)/.105,(vFirePos.y+.25)/.045))))*faceFront;float mouthInk=mouthZone*(1.-smoothstep(.025,.10,painted.r));float whiteDetail=smoothstep(.55,.80,painted.b/max(painted.r,.001))*smoothstep(.65,.85,painted.g/max(painted.r,.001));float fireMask=(1.-max(eyeL,eyeR)*faceFront)*(1.-vFeatureWeight)*(1.-mouthInk)*(1.-whiteDetail*faceFront);
 float field=fbm(vFirePos*5.+vec3(0.,-uFireTime*.55,0.));
 float flow=sin(vFirePos.y*23.-uFireTime*1.8+field*6.+vFirePos.x*11.);
 float heat=pow(clamp(painted.g/max(painted.r,.001),0.,1.),.65);
 float wrapBlend=1.-smoothstep(.06,.25,vFirePos.z);heat=mix(heat,wrappedFlames(vFirePos,uFireTime),wrapBlend);heat=clamp(heat+(field-.5)*.045+flow*.035*smoothstep(-.02,.12,vFirePos.y),0.,1.);
 vec3 red=vec3(1.,.018,.001),orange=vec3(1.,.20,.004),gold=vec3(1.,.48,.009),yellow=vec3(1.,.76,.055);
 vec3 fire=mix(red,orange,smoothstep(.0,.32,heat));
 fire=mix(fire,gold,smoothstep(.28,.72,heat));
 fire=mix(fire,yellow,smoothstep(.68,1.,heat));
 float frontCore=(1.-smoothstep(.45,1.1,length(vec2((vFirePos.x+.02)/.39,(vFirePos.y+.20)/.32))))*faceFront;
 float viewEdge=1.-abs(dot(normalize(normal),normalize(vViewPosition)));
 float densityLight=.88+.34*(1.-viewEdge)+.14*frontCore;
 float cleanCore=(1.-smoothstep(.55,1.1,length(vec2((vFirePos.x+.02)/.38,(vFirePos.y+.20)/.32))))*faceFront;fire=mix(fire,vec3(1.,.66,.022),cleanCore*.62);float theta=atan((vFirePos.x+.02)/.42,vFirePos.z/.39);vec2 fireUV=vec2(theta/6.2831853+.5,(vFirePos.y+.49)/1.06-uFireTime*.016);fireUV.x+=.007*sin(vFirePos.y*12.-uFireTime*.6);fireUV=fract(fireUV);vec3 art=textureLod(uFireArt,fireUV,1.0).rgb;float seamU=1.-smoothstep(0.,.045,min(fireUV.x,1.-fireUV.x));art=mix(art,(art+textureLod(uFireArt,vec2(1.-fireUV.x,fireUV.y),1.0).rgb)*.5,seamU);float seamV=1.-smoothstep(0.,.045,min(fireUV.y,1.-fireUV.y));art=mix(art,(art+textureLod(uFireArt,vec2(fireUV.x,1.-fireUV.y),1.0).rgb)*.5,seamV);float artBlend=max(1.-smoothstep(.06,.25,vFirePos.z),smoothstep(-.01,.16,vFirePos.y))*(1.-cleanCore*.96)*smoothstep(-.48,-.35,vFirePos.y);fire=mix(fire,art*1.10,artBlend*.45*(1.-.75*(1.-smoothstep(-.10,.08,vFirePos.z))));float warmRim=smoothstep(.76,1.10,length(vec2((vFirePos.x+.02)/.40,(vFirePos.y+.19)/.37)))*(1.-smoothstep(-.03,.08,vFirePos.y))*faceFront;fire=mix(fire,vec3(1.,.13,.002),warmRim*.78);float rear=1.-smoothstep(-.10,.08,vFirePos.z);float rearCenter=clamp(1.-length(vec2((vFirePos.x+.01)/.46,(vFirePos.y+.17)/.50)),0.,1.);vec3 backCore=mix(vec3(1.,.16,.003),mix(vec3(1.,.42,.01),vec3(1.,.76,.09),smoothstep(.40,.92,rearCenter)),smoothstep(.0,.45,rearCenter));fire=mix(fire,backCore,rear*.85);float flick=.5+.5*sin(vFirePos.y*20.-uFireTime*3.2+vFirePos.x*7.);float lobes=0.;for(int i=-1;i<=1;i++){float fi=float(i);float by=vFirePos.y;float cx=fi*.17+.01+.025*sin(by*7.+uFireTime*1.3+fi*2.1)*smoothstep(-.3,.2,by);float wid=(.10-.02*abs(fi))*(1.7-1.45*smoothstep(-.42,.30-.10*abs(fi),by));float top=.28-.10*abs(fi);float lobe=(1.-smoothstep(wid*.35,wid,abs(vFirePos.x-cx)))*(1.-smoothstep(top-.16,top,by))*smoothstep(-.47,-.30,by);lobes=max(lobes,lobe);}
 float baseCore=1.-smoothstep(.08,.34,length(vec2((vFirePos.x+.01)*1.05,(vFirePos.y+.28)*1.5)));float backHeat=max(max(lobes*.95,baseCore),rearCenter*.5);vec3 backFire=mix(vec3(1.,.10,.002),vec3(1.,.36,.008),smoothstep(.05,.40,backHeat));backFire=mix(backFire,vec3(1.,.78,.10),smoothstep(.55,.95,backHeat)*(.92+.08*flick));fire=mix(fire,backFire,rear*.9);fire=mix(fire,vec3(.90,.05,.001),pow(viewEdge,2.4)*rear*.7);outgoingLight=mix(outgoingLight,fire*densityLight*1.04,fireMask);
 diffuseColor.a*=1.-.33*pow(viewEdge,4.)*fireMask*(1.-frontCore);
 #include <opaque_fragment>
 `);
 };
 mat.customProgramCacheKey=()=> 'sparky-v4-spike-paint-v1';this.bodyMaterial=mat;
 }
 this.root.traverse(o=>{if(!o.isMesh||(!o.name.includes('ArmMesh')&&!o.name.includes('ShoulderCap')))return;o.material=o.material.clone();o.material.roughnessMap=null;o.material.roughness=.92;o.material.metalness=0;
 if(/mitten/i.test(o.material.name||'')){const m=o.material;const upIdx=o.isSkinnedMesh?o.skeleton.bones.findIndex(b=>/_UpperArm$/.test(b.name)):-1;m.vertexColors=false;m.color.set(0xffffff);m.map=null;m.emissive.set(0);
  // fiery hands: the same living fire as the body -- flame bands flowing upward (world space, so fire always rises),
  // warm yellow core -> orange -> soft red toward the edges, glowing rim, body flicker
  m.onBeforeCompile=sh=>{sh.uniforms.uFireTime=this.time;sh.uniforms.uFlick=this.flick;sh.uniforms.uUpIdx={value:upIdx};
   sh.vertexShader='uniform float uUpIdx;varying vec3 vHW;varying float vRoot;\n'+sh.vertexShader.replace('#include <project_vertex>','#include <project_vertex>\n vHW=(modelMatrix*vec4(transformed,1.)).xyz;\n#ifdef USE_SKINNING\n vRoot=dot(vec4(equal(skinIndex,vec4(uUpIdx))),skinWeight);\n#else\n vRoot=0.;\n#endif\n');
   sh.fragmentShader='uniform float uFireTime,uFlick;varying vec3 vHW;varying float vRoot;\n'+noise+'\n'+sh.fragmentShader.replace('#include <opaque_fragment>',`float rimM=1.-abs(dot(normalize(normal),normalize(vViewPosition)));
   float t=uFireTime;vec3 p=vHW*30.;                                  // hand-sized, soft flame pattern
   float n1=fbm(vec3(p.x,p.y-t*2.3,p.z)),n2=fbm(vec3(p.x*2.1+3.,p.y*2.1-t*4.0,p.z*2.1));
   float tongues=smoothstep(.2,.8,.5+.5*sin(p.x*1.4+p.z*1.2+n1*3.5+p.y*1.0-t*3.0));    // gentle rising flame streaks
   float heat=clamp(.82-pow(rimM,1.25)*.90+(n1-.5)*.30+(tongues-.5)*.38+(n2-.5)*.10,0.,1.);   // smooth warm fire: gold body, soft yellow streaks, orange rim (no blotches)
   vec3 red=vec3(.85,.07,.006),orange=vec3(1.,.22,.012),gold=vec3(1.,.46,.035),yellow=vec3(1.,.72,.14);
   vec3 cM=mix(red,orange,smoothstep(.0,.32,heat));cM=mix(cM,gold,smoothstep(.28,.66,heat));cM=mix(cM,yellow,smoothstep(.62,1.,heat));
   float fl=.94+.05*sin(t*7.3+p.y)+.03*sin(t*13.1+p.x*2.);
   float root=smoothstep(.15,.85,vRoot);                                   // near the shoulder: body colour, no red rim
   cM=mix(cM,mix(gold,yellow,.55),root*.85);
   outgoingLight=cM*fl*uFlick*1.04+vec3(1.,.38,.06)*pow(rimM,2.6)*.42*(1.-root*.9);
   #include <opaque_fragment>`);};m.customProgramCacheKey=()=> 'sparky-fire-hands6';}
 else o.material.color.multiplyScalar(1.08);});this.backLayers=[];this.root.traverse(o=>{if(!o.isMesh||!o.name.startsWith('BackFlame_'))return;const material=o.material.clone();o.material=material;material.roughness=1;material.metalness=0;material.transparent=true;material.depthWrite=true;material.side=THREE.FrontSide;material.onBeforeCompile=s=>{s.uniforms.uFireTime=this.time;s.vertexShader='varying vec3 vFlameW;\n'+s.vertexShader.replace('#include <project_vertex>','vFlameW=(modelMatrix*vec4(transformed,1.)).xyz;\n#include <project_vertex>');s.fragmentShader='uniform float uFireTime;varying vec3 vFlameW;\n'+s.fragmentShader.replace('#include <opaque_fragment>',`float facing=abs(dot(normalize(normal),normalize(vViewPosition)));float rise=.5+.5*sin(vFlameW.y*24.-uFireTime*4.0+vFlameW.x*9.+vFlameW.z*6.);float flick=.5+.5*sin(vFlameW.y*9.-uFireTime*2.1+vFlameW.x*4.);outgoingLight=diffuseColor.rgb*(.90+.14*facing+.16*rise*flick);diffuseColor.a*=.97-.18*pow(1.-facing,4.);\n#include <opaque_fragment>`);};material.customProgramCacheKey=()=> 'back-flame-rising-tongues-v3';this.backLayers.push(o);});this.root.updateMatrixWorld(true);this.root.traverse(o=>{if(!o.isMesh||!o.name.startsWith('Eyelid_')||o.name.includes('Lash'))return;const u={value:new THREE.Matrix4()};const material=o.material.clone();o.material=material;material.onBeforeCompile=s=>{s.uniforms.uLidRest=u;s.vertexShader='uniform mat4 uLidRest;varying vec3 vLidPos;\n'+s.vertexShader;s.vertexShader=s.vertexShader.replace('#include <project_vertex>','vLidPos=(uLidRest*vec4(transformed,1.)).xyz;\n#include <project_vertex>');s.fragmentShader='varying vec3 vLidPos;\n'+s.fragmentShader;s.fragmentShader=s.fragmentShader.replace('#include <opaque_fragment>',`float core=1.-smoothstep(.45,1.1,length(vec2((vLidPos.x+.02)/.39,(vLidPos.y+.20)/.32)));float edge=1.-abs(dot(normalize(normal),normalize(vViewPosition)));outgoingLight=vec3(1.,.66,.022)*(.88+.34*(1.-edge)+.14*core)*1.04;\n#include <opaque_fragment>`);};material.customProgramCacheKey=()=> 'sparky-lid-core-match-v1';this.lids.push({object:o,uniform:u});});
 this.wisps={update(){},dispose(){}};   // floating wisps removed (sparks will be added separately)
 // Floating sparks: fade out the ones that sit in front of the body from the current view (they read as a dot/blemish there).
 this.sparks=[];this.root.traverse(o=>{if(!o.isMesh||!o.name.startsWith('Spark_'))return;o.material=o.material.clone();o.material.transparent=true;o.geometry.computeBoundingSphere();const rest=o.geometry.boundingSphere.center.clone().applyMatrix4(o.matrixWorld).sub(bodyBone.getWorldPosition(new THREE.Vector3()));this.sparks.push({o,rest,base:o.material.opacity});});this._v1=new THREE.Vector3();this._v2=new THREE.Vector3();this._v3=new THREE.Vector3();
 }
 fadeSparks(camera){const bone=this.root.getObjectByName('Sparky_Body');if(!bone||!this.sparks.length)return;const body=bone.getWorldPosition(this._v1),cam=this._v2.copy(camera.position).sub(body);cam.y=0;cam.normalize();for(const s of this.sparks){const p=this._v3.copy(s.rest);const rel=p.y;p.y=0;if(p.lengthSq()<1e-6)continue;p.normalize();const c=Math.abs(p.dot(cam));const overlap=THREE.MathUtils.smoothstep(c,.45,.8)*(1-THREE.MathUtils.smoothstep(rel,.30,.42));s.o.material.opacity=s.base*(1-overlap);s.o.visible=overlap<.98;}}
 update(t,camera){this.time.value=t;const cyc=tongueCycles(t,this.tongues.length);for(let k=0;k<cyc.length;k++)this.stretch.value[k]=cyc[k].stretch;this.cycles=cyc;this.flick.value=flicker(t);this.tipFlames?.update(t,camera,cyc,this.enabled);this.handFlames?.update(t,camera,this.enabled);this.fadeSparks(camera);if(this.lidSrc){const b=o=>{if(!o||!o.morphTargetInfluences)return 0;const w=o.morphTargetInfluences;return Math.min(1,.25*w[0]+.5*w[1]+.75*w[2]+1.*w[3]);};this.blinkL.value=b(this.lidSrc.L);this.blinkR.value=b(this.lidSrc.R);}if(this.mouthSrc&&this.mouthSrc.morphTargetInfluences){const w=this.mouthSrc.morphTargetInfluences;this.mouthOpen.value=Math.min(1,.25*w[0]+.5*w[1]+.75*w[2]+w[3]);this.mouthO.value=w[4]||0;}for(const sh of this.shells||[])sh.visible=this.enabled;this.surfaceFlames?.update(this.enabled);this.wisps.update(t,camera,this.enabled);const bone=this.root.getObjectByName('Sparky_Body');bone.updateWorldMatrix(true,false);const inv=bone.matrixWorld.clone().invert();for(const r of this.lids){r.object.updateWorldMatrix(true,false);r.uniform.value.multiplyMatrices(inv,r.object.matrixWorld);}for(const o of this.volumes){o.visible=this.enabled;o.updateWorldMatrix(true,false);o.material.uniforms.uCamera.value.copy(camera.position);o.worldToLocal(o.material.uniforms.uCamera.value);}for(const o of this.records)o.visible=this.enabled;}
 dispose(){this.wisps.dispose();for(const o of [...this.records,...this.volumes]){o.removeFromParent();o.material.dispose();}this.volumes[0]?.geometry.dispose();}
}
