import * as THREE from 'three';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';
import {OrbitControls} from 'three/addons/controls/OrbitControls.js';
import {EffectComposer} from 'three/addons/postprocessing/EffectComposer.js';
import {RenderPass} from 'three/addons/postprocessing/RenderPass.js';
import {UnrealBloomPass} from 'three/addons/postprocessing/UnrealBloomPass.js';
import {SavePass} from 'three/addons/postprocessing/SavePass.js';
import {ShaderPass} from 'three/addons/postprocessing/ShaderPass.js';
import {OutputPass} from 'three/addons/postprocessing/OutputPass.js';
import {MeshoptDecoder} from 'meshoptimizer';
import {SparkyPlayer} from './player.js';
import {FireAura,flicker} from './fire-aura.js';
// ---- mobile mode: phones get a lighter render path (no post passes), adaptive resolution
const _Q=new URLSearchParams(location.search);
const MOBILE=_Q.get('mobile')==='1'||(_Q.get('mobile')!=='0'&&matchMedia('(pointer: coarse)').matches&&Math.min(screen.width,screen.height)<900);
window.__SPARKY_MOBILE=MOBILE;document.documentElement.classList.toggle('mobile',MOBILE);
const canvas=document.querySelector('canvas'),r=new THREE.WebGLRenderer({canvas,antialias:true,preserveDrawingBuffer:!MOBILE,powerPreference:'high-performance'});
const PR_STEPS=MOBILE?[1.25,1.0,0.8]:[1.5];let PR_LVL=0;r.setPixelRatio(Math.min(devicePixelRatio,PR_STEPS[0]));r.toneMapping=THREE.NeutralToneMapping;r.toneMappingExposure=1.0;
const scene=new THREE.Scene();scene.background=new THREE.Color('#18222e');
const camera=new THREE.PerspectiveCamera(30,1,.01,30),controls=new OrbitControls(camera,canvas);
controls.enableDamping=true;controls.enablePan=false;controls.minDistance=1.1;controls.maxDistance=5;
controls.target.set(0,.08,0);camera.position.set(1.2,.1,2.85);
scene.add(new THREE.HemisphereLight(0xfff5dd,0x8a6371,2));
for(const [pos,intensity,col]of [[[-2,3,3],2,0xffe9c9],[[3,2,1],.6,0xcce5ff],[[1,2,-3],1,0xff8c30]]){const l=new THREE.DirectionalLight(col,intensity);l.position.set(...pos);scene.add(l);}
const composer=new EffectComposer(r);composer.renderTarget1.samples=4;composer.renderTarget2.samples=4;   /* MSAA: crisp edges (eyes, joins) */composer.addPass(new RenderPass(scene,camera));const baseTarget=new THREE.WebGLRenderTarget(1,1,{type:THREE.HalfFloatType});composer.addPass(new SavePass(baseTarget));const bloom=new UnrealBloomPass(new THREE.Vector2(600,600),.32,.45,.82);composer.addPass(bloom);
const faceSafe=new ShaderPass({uniforms:{tDiffuse:{value:null},tBase:{value:baseTarget.texture},uFace:{value:new THREE.Vector2(.5,.4)},uRadius:{value:new THREE.Vector2(.15,.18)},uVisible:{value:1}},vertexShader:'varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',fragmentShader:'uniform sampler2D tDiffuse,tBase;uniform vec2 uFace,uRadius;uniform float uVisible;varying vec2 vUv;void main(){vec4 a=texture2D(tDiffuse,vUv),b=texture2D(tBase,vUv);float d=length((vUv-uFace)/uRadius);float lb=dot(b.rgb,vec3(.3,.59,.11)),la=dot(a.rgb,vec3(.3,.59,.11));float protect=(1.-smoothstep(.72,1.30,d))*uVisible*max(smoothstep(.12,.32,lb/max(la,.001)),1.-smoothstep(.40,.62,d));gl_FragColor=mix(a,b,protect*.97);}'});faceSafe.uniforms.tBase.value=baseTarget.texture;composer.addPass(faceSafe);composer.addPass(new OutputPass());
function protectFace(){const bone=fx?.root.getObjectByName('Sparky_Body');if(!bone)return;bone.updateWorldMatrix(true,false);const c=new THREE.Vector3(-.02,-.17,.28).applyMatrix4(bone.matrixWorld).project(camera),right=new THREE.Vector3(.28,-.17,.28).applyMatrix4(bone.matrixWorld).project(camera),up=new THREE.Vector3(-.02,.07,.28).applyMatrix4(bone.matrixWorld).project(camera);faceSafe.uniforms.uFace.value.set(c.x*.5+.5,c.y*.5+.5);faceSafe.uniforms.uRadius.value.set(Math.max(.025,Math.abs(right.x-c.x)*.5),Math.max(.04,Math.abs(up.y-c.y)*.5));faceSafe.uniforms.uVisible.value=Math.max(0,Math.min(1,(camera.position.z+.2)*3.));}

let player,fx,rig,t=0;
function resize(){const w=canvas.clientWidth,h=canvas.clientHeight;r.setSize(w,h,false);composer.setSize(w,h);baseTarget.setSize(r.domElement.width,r.domElement.height);camera.aspect=w/h;camera.updateProjectionMatrix();}
new ResizeObserver(resize).observe(canvas);
const clock=new THREE.Clock();function draw(){requestAnimationFrame(draw);const dt=Math.min(clock.getDelta(),.05);if(player&&fx){if(player.playing)t+=dt;player.update(dt);fx.update(t,camera);fireLightUpdate(t);rig.updateMatrixWorld(true);}controls.update();if(!MOBILE)protectFace();if(MOBILE&&mobileGlow)mobileGlow.position.copy(camera.position).sub(controls.target).normalize().multiplyScalar(-.55).add(controls.target);renderFrame();adapt(dt);}draw();
function renderFrame(){if(MOBILE)r.render(scene,camera);else composer.render();}
let _acc=0,_n=0;function adapt(dt){if(!MOBILE||PR_LVL>=PR_STEPS.length-1||!player)return;_acc+=dt;_n++;if(_n<90)return;const fps=_n/_acc;_acc=0;_n=0;
 if(fps<45){PR_LVL++;r.setPixelRatio(Math.min(devicePixelRatio,PR_STEPS[PR_LVL]));resize();}}
// soft warm glow behind the character (stands in for bloom on phones)
let mobileGlow=null;if(MOBILE){const gc=document.createElement('canvas');gc.width=gc.height=128;const g=gc.getContext('2d'),gr=g.createRadialGradient(64,64,0,64,64,64);
 gr.addColorStop(0,'rgba(255,255,255,.22)');gr.addColorStop(.40,'rgba(255,255,255,.07)');gr.addColorStop(1,'rgba(255,255,255,0)');   /* tinted per mood below */g.fillStyle=gr;g.fillRect(0,0,128,128);
 mobileGlow=new THREE.Sprite(new THREE.SpriteMaterial({map:new THREE.CanvasTexture(gc),transparent:true,depthWrite:false,blending:THREE.AdditiveBlending}));mobileGlow.scale.set(1.25,1.25,1);mobileGlow.material.color.setRGB(1.,.62,.30);mobileGlow.renderOrder=-2;scene.add(mobileGlow);}
const gltf=await new GLTFLoader().setMeshoptDecoder(MeshoptDecoder).loadAsync('assets/sparky.glb',e=>{const L=document.getElementById('loading');if(L&&e.total)L.textContent='Loading Sparky… '+Math.round(100*e.loaded/e.total)+'%';});
const manifest=await(await fetch('data/animations.json')).json();
const tongues=await(await fetch('data/flame-tongues.json')).json();
player=new SparkyPlayer(gltf,manifest);scene.add(player.object);fx=new FireAura(gltf,tongues);if(fx.tipFlames)scene.add(fx.tipFlames.mesh);if(fx.handFlames)scene.add(fx.handFlames.mesh);rig=new THREE.SkeletonHelper(player.object);rig.visible=false;scene.add(rig);
// the fire lights its surroundings: warm point light at the crown + a floor that catches the flicker
const fireLight=new THREE.PointLight(0xff8a2e,2.2,3.2,1.6);scene.add(fireLight);
const box=new THREE.Box3().setFromObject(player.object);
const gc=document.createElement('canvas');gc.width=gc.height=256;const gx=gc.getContext('2d');const gg=gx.createRadialGradient(128,128,0,128,128,128);gg.addColorStop(0,'#fff');gg.addColorStop(.55,'#888');gg.addColorStop(1,'#000');gx.fillStyle=gg;gx.fillRect(0,0,256,256);
const floor=new THREE.Mesh(new THREE.CircleGeometry(1.25,64),new THREE.MeshStandardMaterial({color:0x1c1512,roughness:.95,metalness:0,transparent:true,alphaMap:new THREE.CanvasTexture(gc),depthWrite:false}));
floor.rotation.x=-Math.PI/2;floor.position.y=box.min.y-.07;floor.renderOrder=-1;scene.add(floor);
const glowM=new THREE.MeshBasicMaterial({color:0xff7a22,transparent:true,blending:THREE.AdditiveBlending,depthWrite:false,alphaMap:new THREE.CanvasTexture(gc)});
const glow=new THREE.Mesh(new THREE.CircleGeometry(.75,48),glowM);glow.rotation.x=-Math.PI/2;glow.position.y=floor.position.y+.002;scene.add(glow);floor.visible=false;glow.visible=false;   /* no floor disc / ground glow under him */
const crownLocal=new THREE.Vector3(0,.40,0),_cw=new THREE.Vector3();
function fireLightUpdate(time){const bone=player.object.getObjectByName('Sparky_Body');if(!bone)return;const f=flicker(time);const on=fx.enabled;
 bone.updateWorldMatrix(true,false);_cw.copy(crownLocal).applyMatrix4(bone.matrixWorld);
 fireLight.position.set(_cw.x+.025*Math.sin(time*1.7),_cw.y+.015*Math.sin(time*2.3+1),_cw.z+.025*Math.cos(time*1.4));   // light source dances with the flames
 fireLight.intensity=on?2.2*f*f:0;glowM.opacity=on?.15*f*f:0;bloom.strength=on?.32*(.85+.15*f*f):0;}
const menu=document.getElementById('animation');for(const a of manifest){const o=document.createElement('option');o.value=a.name;o.textContent=a.label;menu.append(o);}
menu.onchange=()=>{player.play(menu.value);player.playing=true;};for(const b of document.querySelectorAll('[data-pose]'))b.onclick=()=>{menu.value=b.dataset.pose;menu.onchange();};player.play('Idle_Blink');document.getElementById('loading').hidden=true;
document.getElementById('pause').onclick=()=>{player.playing=!player.playing;document.getElementById('pause').textContent=player.playing?'Pause':'Play';};
document.getElementById('fire').onchange=e=>{fx.enabled=e.target.checked;bloom.enabled=e.target.checked;};
document.getElementById('rig').onchange=e=>rig.visible=e.target.checked;
document.getElementById('wire').onchange=e=>{gltf.scene.traverse(o=>{if(o.isMesh&&!o.name.startsWith('Fire')&&o.material?.wireframe!==undefined)o.material.wireframe=e.target.checked;});};
function view(name){const views={front:[0,.09,3.05],quarter:[1.5,.1,2.8],side:[3.05,.09,0],back:[0,.09,-3.05]};camera.position.set(...views[name]);controls.target.set(0,.08,0);controls.update();}
for(const b of document.querySelectorAll('[data-view]'))b.onclick=()=>view(b.dataset.view);
window.sparkyFireball={renderer:r,scene,camera,controls,composer,player,fx,rig,manifest,view,render(){controls.update();fx.update(t,camera);protectFace();composer.render();},
 frame(time,clip){player.playing=false;t=time;player.seek(clip?time%clip:time);fx.update(t,camera);fireLightUpdate(t);controls.update();protectFace();composer.render();return canvas.toDataURL('image/jpeg',.9);}};


const initialView=new URLSearchParams(location.search).get('view');if(['front','quarter','side','back'].includes(initialView))view(initialView);
