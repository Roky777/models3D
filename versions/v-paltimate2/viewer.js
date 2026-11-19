var pn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},mn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},dd=0,Xc=1,fd=2;var Kc=1,ud=2,Na=3,Gt=0,Bt=1,Xt=2,ta=0,kn=1,_a=2,Jc=3,Yc=4,bd=5,fn=100,pd=101,md=102,gd=103,xd=104,vd=200,yd=201,_d=202,Md=203,wr=204,Ar=205,wd=206,Ad=207,Ed=208,Sd=209,Td=210,Rd=211,Id=212,Cd=213,kd=214,Gr=0,Vr=1,Wr=2,Pn=3,qr=4,Xr=5,Kr=6,Jr=7,Zc=0,Pd=1,Nd=2,en=0,Yr=1,Zr=2,Qr=3,$r=4,Fd=5,eo=6,Pi=7,zc="attached",Dd="detached",Qc=300,Wn=301,qn=302,to=303,ao=304,ks=306,Ra=1e3,ca=1001,xi=1002,Tt=1003,no=1004;var Xn=1005;var Ot=1006,Ni=1007;var Ma=1008;var Fa=1009,$c=1010,eh=1011,Fi=1012,io=1013,gn=1014,la=1015,Ft=1016,so=1017,ro=1018,Kn=1020,th=35902,ah=1021,nh=1022,aa=1023,ih=1024,sh=1025,Cn=1026,Nn=1027,oo=1028,co=1029,rh=1030,ho=1031;var lo=1033,Ps=33776,Ns=33777,Fs=33778,Ds=33779,fo=35840,uo=35841,bo=35842,po=35843,mo=36196,go=37492,xo=37496,vo=37808,yo=37809,_o=37810,Mo=37811,wo=37812,Ao=37813,Eo=37814,So=37815,To=37816,Ro=37817,Io=37818,Co=37819,ko=37820,Po=37821,Ls=36492,No=36494,Fo=36495,oh=36283,Do=36284,Lo=36285,Uo=36286,Oo=2200,Us=2201,Ld=2202,Fn=2300,Dn=2301,Mr=2302,Rn=2400,In=2401,is=2402,zo=2500,Ud=2501,ch=0,Os=1,Di=2,Od=3200,zd=3201;var hh=0,Bd=1,tn="",ft="srgb",Rt="srgb-linear",ss="linear",Je="srgb";var Tn=7680;var Bc=519,jd=512,Hd=513,Gd=514,lh=515,Vd=516,Wd=517,qd=518,Xd=519,Er=35044;var dh="300 es",Ta=2e3,rs=2001,va=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let a=this._listeners;a[e]===void 0&&(a[e]=[]),a[e].indexOf(t)===-1&&a[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let a=this._listeners;return a[e]!==void 0&&a[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let n=this._listeners[e];if(n!==void 0){let i=n.indexOf(t);i!==-1&&n.splice(i,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let a=this._listeners[e.type];if(a!==void 0){e.target=this;let n=a.slice(0);for(let i=0,r=n.length;i<r;i++)n[i].call(this,e);e.target=null}}},Pt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Rl=1234567,as=Math.PI/180,Ln=180/Math.PI;function xa(){let s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,a=Math.random()*4294967295|0;return(Pt[s&255]+Pt[s>>8&255]+Pt[s>>16&255]+Pt[s>>24&255]+"-"+Pt[e&255]+Pt[e>>8&255]+"-"+Pt[e>>16&15|64]+Pt[e>>24&255]+"-"+Pt[t&63|128]+Pt[t>>8&255]+"-"+Pt[t>>16&255]+Pt[t>>24&255]+Pt[a&255]+Pt[a>>8&255]+Pt[a>>16&255]+Pt[a>>24&255]).toLowerCase()}function Le(s,e,t){return Math.max(e,Math.min(t,s))}function fh(s,e){return(s%e+e)%e}function eu(s,e,t,a,n){return a+(s-e)*(n-a)/(t-e)}function tu(s,e,t){return s!==e?(t-s)/(e-s):0}function ns(s,e,t){return(1-t)*s+t*e}function au(s,e,t,a){return ns(s,e,1-Math.exp(-t*a))}function nu(s,e=1){return e-Math.abs(fh(s,e*2)-e)}function iu(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function su(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function ru(s,e){return s+Math.floor(Math.random()*(e-s+1))}function ou(s,e){return s+Math.random()*(e-s)}function cu(s){return s*(.5-Math.random())}function hu(s){s!==void 0&&(Rl=s);let e=Rl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function lu(s){return s*as}function du(s){return s*Ln}function fu(s){return(s&s-1)===0&&s!==0}function uu(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function bu(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function pu(s,e,t,a,n){let i=Math.cos,r=Math.sin,o=i(t/2),c=r(t/2),h=i((e+a)/2),l=r((e+a)/2),d=i((e-a)/2),u=r((e-a)/2),p=i((a-e)/2),x=r((a-e)/2);switch(n){case"XYX":s.set(o*l,c*d,c*u,o*h);break;case"YZY":s.set(c*u,o*l,c*d,o*h);break;case"ZXZ":s.set(c*d,c*u,o*l,o*h);break;case"XZX":s.set(o*l,c*x,c*p,o*h);break;case"YXY":s.set(c*p,o*l,c*x,o*h);break;case"ZYZ":s.set(c*x,c*p,o*l,o*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}}function ga(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function $e(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var xn={DEG2RAD:as,RAD2DEG:Ln,generateUUID:xa,clamp:Le,euclideanModulo:fh,mapLinear:eu,inverseLerp:tu,lerp:ns,damp:au,pingpong:nu,smoothstep:iu,smootherstep:su,randInt:ru,randFloat:ou,randFloatSpread:cu,seededRandom:hu,degToRad:lu,radToDeg:du,isPowerOfTwo:fu,ceilPowerOfTwo:uu,floorPowerOfTwo:bu,setQuaternionFromProperEuler:pu,normalize:$e,denormalize:ga},ue=class s{constructor(e=0,t=0){s.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,a=this.y,n=e.elements;return this.x=n[0]*t+n[3]*a+n[6],this.y=n[1]*t+n[4]*a+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Le(this.x,e.x,t.x),this.y=Le(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Le(this.x,e,t),this.y=Le(this.y,e,t),this}clampLength(e,t){let a=this.length();return this.divideScalar(a||1).multiplyScalar(Le(a,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let a=this.dot(e)/t;return Math.acos(Le(a,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,a=this.y-e.y;return t*t+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,a){return this.x=e.x+(t.x-e.x)*a,this.y=e.y+(t.y-e.y)*a,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let a=Math.cos(t),n=Math.sin(t),i=this.x-e.x,r=this.y-e.y;return this.x=i*a-r*n+e.x,this.y=i*n+r*a+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Pe=class s{constructor(e,t,a,n,i,r,o,c,h){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,a,n,i,r,o,c,h)}set(e,t,a,n,i,r,o,c,h){let l=this.elements;return l[0]=e,l[1]=n,l[2]=o,l[3]=t,l[4]=i,l[5]=c,l[6]=a,l[7]=r,l[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,a=e.elements;return t[0]=a[0],t[1]=a[1],t[2]=a[2],t[3]=a[3],t[4]=a[4],t[5]=a[5],t[6]=a[6],t[7]=a[7],t[8]=a[8],this}extractBasis(e,t,a){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),a.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let a=e.elements,n=t.elements,i=this.elements,r=a[0],o=a[3],c=a[6],h=a[1],l=a[4],d=a[7],u=a[2],p=a[5],x=a[8],g=n[0],b=n[3],f=n[6],v=n[1],w=n[4],m=n[7],M=n[2],A=n[5],T=n[8];return i[0]=r*g+o*v+c*M,i[3]=r*b+o*w+c*A,i[6]=r*f+o*m+c*T,i[1]=h*g+l*v+d*M,i[4]=h*b+l*w+d*A,i[7]=h*f+l*m+d*T,i[2]=u*g+p*v+x*M,i[5]=u*b+p*w+x*A,i[8]=u*f+p*m+x*T,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],a=e[1],n=e[2],i=e[3],r=e[4],o=e[5],c=e[6],h=e[7],l=e[8];return t*r*l-t*o*h-a*i*l+a*o*c+n*i*h-n*r*c}invert(){let e=this.elements,t=e[0],a=e[1],n=e[2],i=e[3],r=e[4],o=e[5],c=e[6],h=e[7],l=e[8],d=l*r-o*h,u=o*c-l*i,p=h*i-r*c,x=t*d+a*u+n*p;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/x;return e[0]=d*g,e[1]=(n*h-l*a)*g,e[2]=(o*a-n*r)*g,e[3]=u*g,e[4]=(l*t-n*c)*g,e[5]=(n*i-o*t)*g,e[6]=p*g,e[7]=(a*c-h*t)*g,e[8]=(r*t-a*i)*g,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,a,n,i,r,o){let c=Math.cos(i),h=Math.sin(i);return this.set(a*c,a*h,-a*(c*r+h*o)+r+e,-n*h,n*c,-n*(-h*r+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(uc.makeScale(e,t)),this}rotate(e){return this.premultiply(uc.makeRotation(-e)),this}translate(e,t){return this.premultiply(uc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),a=Math.sin(e);return this.set(t,-a,0,a,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,a=e.elements;for(let n=0;n<9;n++)if(t[n]!==a[n])return!1;return!0}fromArray(e,t=0){for(let a=0;a<9;a++)this.elements[a]=e[a+t];return this}toArray(e=[],t=0){let a=this.elements;return e[t]=a[0],e[t+1]=a[1],e[t+2]=a[2],e[t+3]=a[3],e[t+4]=a[4],e[t+5]=a[5],e[t+6]=a[6],e[t+7]=a[7],e[t+8]=a[8],e}clone(){return new this.constructor().fromArray(this.elements)}},uc=new Pe;function uh(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function vi(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Kd(){let s=vi("canvas");return s.style.display="block",s}var Il={};function Jn(s){s in Il||(Il[s]=!0,console.warn(s))}function Jd(s,e,t){return new Promise(function(a,n){function i(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:n();break;case s.TIMEOUT_EXPIRED:setTimeout(i,t);break;default:a()}}setTimeout(i,t)})}function Yd(s){let e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Zd(s){let e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var Cl=new Pe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),kl=new Pe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function mu(){let s={enabled:!0,workingColorSpace:Rt,spaces:{},convert:function(n,i,r){return this.enabled===!1||i===r||!i||!r||(this.spaces[i].transfer===Je&&(n.r=qa(n.r),n.g=qa(n.g),n.b=qa(n.b)),this.spaces[i].primaries!==this.spaces[r].primaries&&(n.applyMatrix3(this.spaces[i].toXYZ),n.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===Je&&(n.r=gi(n.r),n.g=gi(n.g),n.b=gi(n.b))),n},fromWorkingColorSpace:function(n,i){return this.convert(n,this.workingColorSpace,i)},toWorkingColorSpace:function(n,i){return this.convert(n,i,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===tn?ss:this.spaces[n].transfer},getLuminanceCoefficients:function(n,i=this.workingColorSpace){return n.fromArray(this.spaces[i].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,i,r){return n.copy(this.spaces[i].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],a=[.3127,.329];return s.define({[Rt]:{primaries:e,whitePoint:a,transfer:ss,toXYZ:Cl,fromXYZ:kl,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ft},outputColorSpaceConfig:{drawingBufferColorSpace:ft}},[ft]:{primaries:e,whitePoint:a,transfer:Je,toXYZ:Cl,fromXYZ:kl,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ft}}}),s}var Ue=mu();function qa(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function gi(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var ii,Sr=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ii===void 0&&(ii=vi("canvas")),ii.width=e.width,ii.height=e.height;let a=ii.getContext("2d");e instanceof ImageData?a.putImageData(e,0,0):a.drawImage(e,0,0,e.width,e.height),t=ii}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=vi("canvas");t.width=e.width,t.height=e.height;let a=t.getContext("2d");a.drawImage(e,0,0,e.width,e.height);let n=a.getImageData(0,0,e.width,e.height),i=n.data;for(let r=0;r<i.length;r++)i[r]=qa(i[r]/255)*255;return a.putImageData(n,0,0),t}else if(e.data){let t=e.data.slice(0);for(let a=0;a<t.length;a++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[a]=Math.floor(qa(t[a]/255)*255):t[a]=qa(t[a]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},gu=0,os=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:gu++}),this.uuid=xa(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let a={uuid:this.uuid,url:""},n=this.data;if(n!==null){let i;if(Array.isArray(n)){i=[];for(let r=0,o=n.length;r<o;r++)n[r].isDataTexture?i.push(bc(n[r].image)):i.push(bc(n[r]))}else i=bc(n);a.url=i}return t||(e.images[this.uuid]=a),a}};function bc(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Sr.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var xu=0,vt=class s extends va{constructor(e=s.DEFAULT_IMAGE,t=s.DEFAULT_MAPPING,a=ca,n=ca,i=Ot,r=Ma,o=aa,c=Fa,h=s.DEFAULT_ANISOTROPY,l=tn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:xu++}),this.uuid=xa(),this.name="",this.source=new os(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=a,this.wrapT=n,this.magFilter=i,this.minFilter=r,this.anisotropy=h,this.format=o,this.internalFormat=null,this.type=c,this.offset=new ue(0,0),this.repeat=new ue(1,1),this.center=new ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Pe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=l,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let a={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(a.userData=this.userData),t||(e.textures[this.uuid]=a),a}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Qc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ra:e.x=e.x-Math.floor(e.x);break;case ca:e.x=e.x<0?0:1;break;case xi:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ra:e.y=e.y-Math.floor(e.y);break;case ca:e.y=e.y<0?0:1;break;case xi:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};vt.DEFAULT_IMAGE=null;vt.DEFAULT_MAPPING=Qc;vt.DEFAULT_ANISOTROPY=1;var Ke=class s{constructor(e=0,t=0,a=0,n=1){s.prototype.isVector4=!0,this.x=e,this.y=t,this.z=a,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,a,n){return this.x=e,this.y=t,this.z=a,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,a=this.y,n=this.z,i=this.w,r=e.elements;return this.x=r[0]*t+r[4]*a+r[8]*n+r[12]*i,this.y=r[1]*t+r[5]*a+r[9]*n+r[13]*i,this.z=r[2]*t+r[6]*a+r[10]*n+r[14]*i,this.w=r[3]*t+r[7]*a+r[11]*n+r[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,a,n,i,c=e.elements,h=c[0],l=c[4],d=c[8],u=c[1],p=c[5],x=c[9],g=c[2],b=c[6],f=c[10];if(Math.abs(l-u)<.01&&Math.abs(d-g)<.01&&Math.abs(x-b)<.01){if(Math.abs(l+u)<.1&&Math.abs(d+g)<.1&&Math.abs(x+b)<.1&&Math.abs(h+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let w=(h+1)/2,m=(p+1)/2,M=(f+1)/2,A=(l+u)/4,T=(d+g)/4,R=(x+b)/4;return w>m&&w>M?w<.01?(a=0,n=.707106781,i=.707106781):(a=Math.sqrt(w),n=A/a,i=T/a):m>M?m<.01?(a=.707106781,n=0,i=.707106781):(n=Math.sqrt(m),a=A/n,i=R/n):M<.01?(a=.707106781,n=.707106781,i=0):(i=Math.sqrt(M),a=T/i,n=R/i),this.set(a,n,i,t),this}let v=Math.sqrt((b-x)*(b-x)+(d-g)*(d-g)+(u-l)*(u-l));return Math.abs(v)<.001&&(v=1),this.x=(b-x)/v,this.y=(d-g)/v,this.z=(u-l)/v,this.w=Math.acos((h+p+f-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Le(this.x,e.x,t.x),this.y=Le(this.y,e.y,t.y),this.z=Le(this.z,e.z,t.z),this.w=Le(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Le(this.x,e,t),this.y=Le(this.y,e,t),this.z=Le(this.z,e,t),this.w=Le(this.w,e,t),this}clampLength(e,t){let a=this.length();return this.divideScalar(a||1).multiplyScalar(Le(a,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,a){return this.x=e.x+(t.x-e.x)*a,this.y=e.y+(t.y-e.y)*a,this.z=e.z+(t.z-e.z)*a,this.w=e.w+(t.w-e.w)*a,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Tr=class extends va{constructor(e=1,t=1,a={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ke(0,0,e,t),this.scissorTest=!1,this.viewport=new Ke(0,0,e,t);let n={width:e,height:t,depth:1};a=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ot,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},a);let i=new vt(n,a.mapping,a.wrapS,a.wrapT,a.magFilter,a.minFilter,a.format,a.type,a.anisotropy,a.colorSpace);i.flipY=!1,i.generateMipmaps=a.generateMipmaps,i.internalFormat=a.internalFormat,this.textures=[];let r=a.count;for(let o=0;o<r;o++)this.textures[o]=i.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=a.depthBuffer,this.stencilBuffer=a.stencilBuffer,this.resolveDepthBuffer=a.resolveDepthBuffer,this.resolveStencilBuffer=a.resolveStencilBuffer,this.depthTexture=a.depthTexture,this.samples=a.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,a=1){if(this.width!==e||this.height!==t||this.depth!==a){this.width=e,this.height=t,this.depth=a;for(let n=0,i=this.textures.length;n<i;n++)this.textures[n].image.width=e,this.textures[n].image.height=t,this.textures[n].image.depth=a;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let a=0,n=e.textures.length;a<n;a++)this.textures[a]=e.textures[a].clone(),this.textures[a].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new os(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},xt=class extends Tr{constructor(e=1,t=1,a={}){super(e,t,a),this.isWebGLRenderTarget=!0}},cs=class extends vt{constructor(e=null,t=1,a=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:a,depth:n},this.magFilter=Tt,this.minFilter=Tt,this.wrapR=ca,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Rr=class extends vt{constructor(e=null,t=1,a=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:a,depth:n},this.magFilter=Tt,this.minFilter=Tt,this.wrapR=ca,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var At=class{constructor(e=0,t=0,a=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=a,this._w=n}static slerpFlat(e,t,a,n,i,r,o){let c=a[n+0],h=a[n+1],l=a[n+2],d=a[n+3],u=i[r+0],p=i[r+1],x=i[r+2],g=i[r+3];if(o===0){e[t+0]=c,e[t+1]=h,e[t+2]=l,e[t+3]=d;return}if(o===1){e[t+0]=u,e[t+1]=p,e[t+2]=x,e[t+3]=g;return}if(d!==g||c!==u||h!==p||l!==x){let b=1-o,f=c*u+h*p+l*x+d*g,v=f>=0?1:-1,w=1-f*f;if(w>Number.EPSILON){let M=Math.sqrt(w),A=Math.atan2(M,f*v);b=Math.sin(b*A)/M,o=Math.sin(o*A)/M}let m=o*v;if(c=c*b+u*m,h=h*b+p*m,l=l*b+x*m,d=d*b+g*m,b===1-o){let M=1/Math.sqrt(c*c+h*h+l*l+d*d);c*=M,h*=M,l*=M,d*=M}}e[t]=c,e[t+1]=h,e[t+2]=l,e[t+3]=d}static multiplyQuaternionsFlat(e,t,a,n,i,r){let o=a[n],c=a[n+1],h=a[n+2],l=a[n+3],d=i[r],u=i[r+1],p=i[r+2],x=i[r+3];return e[t]=o*x+l*d+c*p-h*u,e[t+1]=c*x+l*u+h*d-o*p,e[t+2]=h*x+l*p+o*u-c*d,e[t+3]=l*x-o*d-c*u-h*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,a,n){return this._x=e,this._y=t,this._z=a,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let a=e._x,n=e._y,i=e._z,r=e._order,o=Math.cos,c=Math.sin,h=o(a/2),l=o(n/2),d=o(i/2),u=c(a/2),p=c(n/2),x=c(i/2);switch(r){case"XYZ":this._x=u*l*d+h*p*x,this._y=h*p*d-u*l*x,this._z=h*l*x+u*p*d,this._w=h*l*d-u*p*x;break;case"YXZ":this._x=u*l*d+h*p*x,this._y=h*p*d-u*l*x,this._z=h*l*x-u*p*d,this._w=h*l*d+u*p*x;break;case"ZXY":this._x=u*l*d-h*p*x,this._y=h*p*d+u*l*x,this._z=h*l*x+u*p*d,this._w=h*l*d-u*p*x;break;case"ZYX":this._x=u*l*d-h*p*x,this._y=h*p*d+u*l*x,this._z=h*l*x-u*p*d,this._w=h*l*d+u*p*x;break;case"YZX":this._x=u*l*d+h*p*x,this._y=h*p*d+u*l*x,this._z=h*l*x-u*p*d,this._w=h*l*d-u*p*x;break;case"XZY":this._x=u*l*d-h*p*x,this._y=h*p*d-u*l*x,this._z=h*l*x+u*p*d,this._w=h*l*d+u*p*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let a=t/2,n=Math.sin(a);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(a),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,a=t[0],n=t[4],i=t[8],r=t[1],o=t[5],c=t[9],h=t[2],l=t[6],d=t[10],u=a+o+d;if(u>0){let p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(l-c)*p,this._y=(i-h)*p,this._z=(r-n)*p}else if(a>o&&a>d){let p=2*Math.sqrt(1+a-o-d);this._w=(l-c)/p,this._x=.25*p,this._y=(n+r)/p,this._z=(i+h)/p}else if(o>d){let p=2*Math.sqrt(1+o-a-d);this._w=(i-h)/p,this._x=(n+r)/p,this._y=.25*p,this._z=(c+l)/p}else{let p=2*Math.sqrt(1+d-a-o);this._w=(r-n)/p,this._x=(i+h)/p,this._y=(c+l)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let a=e.dot(t)+1;return a<Number.EPSILON?(a=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=a):(this._x=0,this._y=-e.z,this._z=e.y,this._w=a)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=a),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Le(this.dot(e),-1,1)))}rotateTowards(e,t){let a=this.angleTo(e);if(a===0)return this;let n=Math.min(1,t/a);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let a=e._x,n=e._y,i=e._z,r=e._w,o=t._x,c=t._y,h=t._z,l=t._w;return this._x=a*l+r*o+n*h-i*c,this._y=n*l+r*c+i*o-a*h,this._z=i*l+r*h+a*c-n*o,this._w=r*l-a*o-n*c-i*h,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let a=this._x,n=this._y,i=this._z,r=this._w,o=r*e._w+a*e._x+n*e._y+i*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=r,this._x=a,this._y=n,this._z=i,this;let c=1-o*o;if(c<=Number.EPSILON){let p=1-t;return this._w=p*r+t*this._w,this._x=p*a+t*this._x,this._y=p*n+t*this._y,this._z=p*i+t*this._z,this.normalize(),this}let h=Math.sqrt(c),l=Math.atan2(h,o),d=Math.sin((1-t)*l)/h,u=Math.sin(t*l)/h;return this._w=r*d+this._w*u,this._x=a*d+this._x*u,this._y=n*d+this._y*u,this._z=i*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,a){return this.copy(e).slerp(t,a)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),a=Math.random(),n=Math.sqrt(1-a),i=Math.sqrt(a);return this.set(n*Math.sin(e),n*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},k=class s{constructor(e=0,t=0,a=0){s.prototype.isVector3=!0,this.x=e,this.y=t,this.z=a}set(e,t,a){return a===void 0&&(a=this.z),this.x=e,this.y=t,this.z=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Pl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Pl.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,a=this.y,n=this.z,i=e.elements;return this.x=i[0]*t+i[3]*a+i[6]*n,this.y=i[1]*t+i[4]*a+i[7]*n,this.z=i[2]*t+i[5]*a+i[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,a=this.y,n=this.z,i=e.elements,r=1/(i[3]*t+i[7]*a+i[11]*n+i[15]);return this.x=(i[0]*t+i[4]*a+i[8]*n+i[12])*r,this.y=(i[1]*t+i[5]*a+i[9]*n+i[13])*r,this.z=(i[2]*t+i[6]*a+i[10]*n+i[14])*r,this}applyQuaternion(e){let t=this.x,a=this.y,n=this.z,i=e.x,r=e.y,o=e.z,c=e.w,h=2*(r*n-o*a),l=2*(o*t-i*n),d=2*(i*a-r*t);return this.x=t+c*h+r*d-o*l,this.y=a+c*l+o*h-i*d,this.z=n+c*d+i*l-r*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,a=this.y,n=this.z,i=e.elements;return this.x=i[0]*t+i[4]*a+i[8]*n,this.y=i[1]*t+i[5]*a+i[9]*n,this.z=i[2]*t+i[6]*a+i[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Le(this.x,e.x,t.x),this.y=Le(this.y,e.y,t.y),this.z=Le(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Le(this.x,e,t),this.y=Le(this.y,e,t),this.z=Le(this.z,e,t),this}clampLength(e,t){let a=this.length();return this.divideScalar(a||1).multiplyScalar(Le(a,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,a){return this.x=e.x+(t.x-e.x)*a,this.y=e.y+(t.y-e.y)*a,this.z=e.z+(t.z-e.z)*a,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let a=e.x,n=e.y,i=e.z,r=t.x,o=t.y,c=t.z;return this.x=n*c-i*o,this.y=i*r-a*c,this.z=a*o-n*r,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let a=e.dot(this)/t;return this.copy(e).multiplyScalar(a)}projectOnPlane(e){return pc.copy(this).projectOnVector(e),this.sub(pc)}reflect(e){return this.sub(pc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let a=this.dot(e)/t;return Math.acos(Le(a,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,a=this.y-e.y,n=this.z-e.z;return t*t+a*a+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,a){let n=Math.sin(t)*e;return this.x=n*Math.sin(a),this.y=Math.cos(t)*e,this.z=n*Math.cos(a),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,a){return this.x=e*Math.sin(t),this.y=a,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),a=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=a,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,a=Math.sqrt(1-t*t);return this.x=a*Math.cos(e),this.y=t,this.z=a*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},pc=new k,Pl=new At,zt=class{constructor(e=new k(1/0,1/0,1/0),t=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,a=e.length;t<a;t+=3)this.expandByPoint(ba.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,a=e.count;t<a;t++)this.expandByPoint(ba.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,a=e.length;t<a;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let a=ba.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(a),this.max.copy(e).add(a),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let a=e.geometry;if(a!==void 0){let i=a.getAttribute("position");if(t===!0&&i!==void 0&&e.isInstancedMesh!==!0)for(let r=0,o=i.count;r<o;r++)e.isMesh===!0?e.getVertexPosition(r,ba):ba.fromBufferAttribute(i,r),ba.applyMatrix4(e.matrixWorld),this.expandByPoint(ba);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Zs.copy(e.boundingBox)):(a.boundingBox===null&&a.computeBoundingBox(),Zs.copy(a.boundingBox)),Zs.applyMatrix4(e.matrixWorld),this.union(Zs)}let n=e.children;for(let i=0,r=n.length;i<r;i++)this.expandByObject(n[i],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ba),ba.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,a;return e.normal.x>0?(t=e.normal.x*this.min.x,a=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,a=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,a+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,a+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,a+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,a+=e.normal.z*this.min.z),t<=-e.constant&&a>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ki),Qs.subVectors(this.max,Ki),si.subVectors(e.a,Ki),ri.subVectors(e.b,Ki),oi.subVectors(e.c,Ki),nn.subVectors(ri,si),sn.subVectors(oi,ri),wn.subVectors(si,oi);let t=[0,-nn.z,nn.y,0,-sn.z,sn.y,0,-wn.z,wn.y,nn.z,0,-nn.x,sn.z,0,-sn.x,wn.z,0,-wn.x,-nn.y,nn.x,0,-sn.y,sn.x,0,-wn.y,wn.x,0];return!mc(t,si,ri,oi,Qs)||(t=[1,0,0,0,1,0,0,0,1],!mc(t,si,ri,oi,Qs))?!1:($s.crossVectors(nn,sn),t=[$s.x,$s.y,$s.z],mc(t,si,ri,oi,Qs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ba).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ba).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(za[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),za[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),za[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),za[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),za[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),za[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),za[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),za[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(za),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},za=[new k,new k,new k,new k,new k,new k,new k,new k],ba=new k,Zs=new zt,si=new k,ri=new k,oi=new k,nn=new k,sn=new k,wn=new k,Ki=new k,Qs=new k,$s=new k,An=new k;function mc(s,e,t,a,n){for(let i=0,r=s.length-3;i<=r;i+=3){An.fromArray(s,i);let o=n.x*Math.abs(An.x)+n.y*Math.abs(An.y)+n.z*Math.abs(An.z),c=e.dot(An),h=t.dot(An),l=a.dot(An);if(Math.max(-Math.max(c,h,l),Math.min(c,h,l))>o)return!1}return!0}var vu=new zt,Ji=new k,gc=new k,Vt=class{constructor(e=new k,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let a=this.center;t!==void 0?a.copy(t):vu.setFromPoints(e).getCenter(a);let n=0;for(let i=0,r=e.length;i<r;i++)n=Math.max(n,a.distanceToSquared(e[i]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let a=this.center.distanceToSquared(e);return t.copy(e),a>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ji.subVectors(e,this.center);let t=Ji.lengthSq();if(t>this.radius*this.radius){let a=Math.sqrt(t),n=(a-this.radius)*.5;this.center.addScaledVector(Ji,n/a),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(gc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ji.copy(e.center).add(gc)),this.expandByPoint(Ji.copy(e.center).sub(gc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Ba=new k,xc=new k,er=new k,rn=new k,vc=new k,tr=new k,yc=new k,Xa=class{constructor(e=new k,t=new k(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ba)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let a=t.dot(this.direction);return a<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,a)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ba.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ba.copy(this.origin).addScaledVector(this.direction,t),Ba.distanceToSquared(e))}distanceSqToSegment(e,t,a,n){xc.copy(e).add(t).multiplyScalar(.5),er.copy(t).sub(e).normalize(),rn.copy(this.origin).sub(xc);let i=e.distanceTo(t)*.5,r=-this.direction.dot(er),o=rn.dot(this.direction),c=-rn.dot(er),h=rn.lengthSq(),l=Math.abs(1-r*r),d,u,p,x;if(l>0)if(d=r*c-o,u=r*o-c,x=i*l,d>=0)if(u>=-x)if(u<=x){let g=1/l;d*=g,u*=g,p=d*(d+r*u+2*o)+u*(r*d+u+2*c)+h}else u=i,d=Math.max(0,-(r*u+o)),p=-d*d+u*(u+2*c)+h;else u=-i,d=Math.max(0,-(r*u+o)),p=-d*d+u*(u+2*c)+h;else u<=-x?(d=Math.max(0,-(-r*i+o)),u=d>0?-i:Math.min(Math.max(-i,-c),i),p=-d*d+u*(u+2*c)+h):u<=x?(d=0,u=Math.min(Math.max(-i,-c),i),p=u*(u+2*c)+h):(d=Math.max(0,-(r*i+o)),u=d>0?i:Math.min(Math.max(-i,-c),i),p=-d*d+u*(u+2*c)+h);else u=r>0?-i:i,d=Math.max(0,-(r*u+o)),p=-d*d+u*(u+2*c)+h;return a&&a.copy(this.origin).addScaledVector(this.direction,d),n&&n.copy(xc).addScaledVector(er,u),p}intersectSphere(e,t){Ba.subVectors(e.center,this.origin);let a=Ba.dot(this.direction),n=Ba.dot(Ba)-a*a,i=e.radius*e.radius;if(n>i)return null;let r=Math.sqrt(i-n),o=a-r,c=a+r;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let a=-(this.origin.dot(e.normal)+e.constant)/t;return a>=0?a:null}intersectPlane(e,t){let a=this.distanceToPlane(e);return a===null?null:this.at(a,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let a,n,i,r,o,c,h=1/this.direction.x,l=1/this.direction.y,d=1/this.direction.z,u=this.origin;return h>=0?(a=(e.min.x-u.x)*h,n=(e.max.x-u.x)*h):(a=(e.max.x-u.x)*h,n=(e.min.x-u.x)*h),l>=0?(i=(e.min.y-u.y)*l,r=(e.max.y-u.y)*l):(i=(e.max.y-u.y)*l,r=(e.min.y-u.y)*l),a>r||i>n||((i>a||isNaN(a))&&(a=i),(r<n||isNaN(n))&&(n=r),d>=0?(o=(e.min.z-u.z)*d,c=(e.max.z-u.z)*d):(o=(e.max.z-u.z)*d,c=(e.min.z-u.z)*d),a>c||o>n)||((o>a||a!==a)&&(a=o),(c<n||n!==n)&&(n=c),n<0)?null:this.at(a>=0?a:n,t)}intersectsBox(e){return this.intersectBox(e,Ba)!==null}intersectTriangle(e,t,a,n,i){vc.subVectors(t,e),tr.subVectors(a,e),yc.crossVectors(vc,tr);let r=this.direction.dot(yc),o;if(r>0){if(n)return null;o=1}else if(r<0)o=-1,r=-r;else return null;rn.subVectors(this.origin,e);let c=o*this.direction.dot(tr.crossVectors(rn,tr));if(c<0)return null;let h=o*this.direction.dot(vc.cross(rn));if(h<0||c+h>r)return null;let l=-o*rn.dot(yc);return l<0?null:this.at(l/r,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Te=class s{constructor(e,t,a,n,i,r,o,c,h,l,d,u,p,x,g,b){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,a,n,i,r,o,c,h,l,d,u,p,x,g,b)}set(e,t,a,n,i,r,o,c,h,l,d,u,p,x,g,b){let f=this.elements;return f[0]=e,f[4]=t,f[8]=a,f[12]=n,f[1]=i,f[5]=r,f[9]=o,f[13]=c,f[2]=h,f[6]=l,f[10]=d,f[14]=u,f[3]=p,f[7]=x,f[11]=g,f[15]=b,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(e){let t=this.elements,a=e.elements;return t[0]=a[0],t[1]=a[1],t[2]=a[2],t[3]=a[3],t[4]=a[4],t[5]=a[5],t[6]=a[6],t[7]=a[7],t[8]=a[8],t[9]=a[9],t[10]=a[10],t[11]=a[11],t[12]=a[12],t[13]=a[13],t[14]=a[14],t[15]=a[15],this}copyPosition(e){let t=this.elements,a=e.elements;return t[12]=a[12],t[13]=a[13],t[14]=a[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,a){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),a.setFromMatrixColumn(this,2),this}makeBasis(e,t,a){return this.set(e.x,t.x,a.x,0,e.y,t.y,a.y,0,e.z,t.z,a.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,a=e.elements,n=1/ci.setFromMatrixColumn(e,0).length(),i=1/ci.setFromMatrixColumn(e,1).length(),r=1/ci.setFromMatrixColumn(e,2).length();return t[0]=a[0]*n,t[1]=a[1]*n,t[2]=a[2]*n,t[3]=0,t[4]=a[4]*i,t[5]=a[5]*i,t[6]=a[6]*i,t[7]=0,t[8]=a[8]*r,t[9]=a[9]*r,t[10]=a[10]*r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,a=e.x,n=e.y,i=e.z,r=Math.cos(a),o=Math.sin(a),c=Math.cos(n),h=Math.sin(n),l=Math.cos(i),d=Math.sin(i);if(e.order==="XYZ"){let u=r*l,p=r*d,x=o*l,g=o*d;t[0]=c*l,t[4]=-c*d,t[8]=h,t[1]=p+x*h,t[5]=u-g*h,t[9]=-o*c,t[2]=g-u*h,t[6]=x+p*h,t[10]=r*c}else if(e.order==="YXZ"){let u=c*l,p=c*d,x=h*l,g=h*d;t[0]=u+g*o,t[4]=x*o-p,t[8]=r*h,t[1]=r*d,t[5]=r*l,t[9]=-o,t[2]=p*o-x,t[6]=g+u*o,t[10]=r*c}else if(e.order==="ZXY"){let u=c*l,p=c*d,x=h*l,g=h*d;t[0]=u-g*o,t[4]=-r*d,t[8]=x+p*o,t[1]=p+x*o,t[5]=r*l,t[9]=g-u*o,t[2]=-r*h,t[6]=o,t[10]=r*c}else if(e.order==="ZYX"){let u=r*l,p=r*d,x=o*l,g=o*d;t[0]=c*l,t[4]=x*h-p,t[8]=u*h+g,t[1]=c*d,t[5]=g*h+u,t[9]=p*h-x,t[2]=-h,t[6]=o*c,t[10]=r*c}else if(e.order==="YZX"){let u=r*c,p=r*h,x=o*c,g=o*h;t[0]=c*l,t[4]=g-u*d,t[8]=x*d+p,t[1]=d,t[5]=r*l,t[9]=-o*l,t[2]=-h*l,t[6]=p*d+x,t[10]=u-g*d}else if(e.order==="XZY"){let u=r*c,p=r*h,x=o*c,g=o*h;t[0]=c*l,t[4]=-d,t[8]=h*l,t[1]=u*d+g,t[5]=r*l,t[9]=p*d-x,t[2]=x*d-p,t[6]=o*l,t[10]=g*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(yu,e,_u)}lookAt(e,t,a){let n=this.elements;return Zt.subVectors(e,t),Zt.lengthSq()===0&&(Zt.z=1),Zt.normalize(),on.crossVectors(a,Zt),on.lengthSq()===0&&(Math.abs(a.z)===1?Zt.x+=1e-4:Zt.z+=1e-4,Zt.normalize(),on.crossVectors(a,Zt)),on.normalize(),ar.crossVectors(Zt,on),n[0]=on.x,n[4]=ar.x,n[8]=Zt.x,n[1]=on.y,n[5]=ar.y,n[9]=Zt.y,n[2]=on.z,n[6]=ar.z,n[10]=Zt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let a=e.elements,n=t.elements,i=this.elements,r=a[0],o=a[4],c=a[8],h=a[12],l=a[1],d=a[5],u=a[9],p=a[13],x=a[2],g=a[6],b=a[10],f=a[14],v=a[3],w=a[7],m=a[11],M=a[15],A=n[0],T=n[4],R=n[8],_=n[12],y=n[1],C=n[5],O=n[9],P=n[13],U=n[2],q=n[6],B=n[10],V=n[14],z=n[3],Z=n[7],ae=n[11],le=n[15];return i[0]=r*A+o*y+c*U+h*z,i[4]=r*T+o*C+c*q+h*Z,i[8]=r*R+o*O+c*B+h*ae,i[12]=r*_+o*P+c*V+h*le,i[1]=l*A+d*y+u*U+p*z,i[5]=l*T+d*C+u*q+p*Z,i[9]=l*R+d*O+u*B+p*ae,i[13]=l*_+d*P+u*V+p*le,i[2]=x*A+g*y+b*U+f*z,i[6]=x*T+g*C+b*q+f*Z,i[10]=x*R+g*O+b*B+f*ae,i[14]=x*_+g*P+b*V+f*le,i[3]=v*A+w*y+m*U+M*z,i[7]=v*T+w*C+m*q+M*Z,i[11]=v*R+w*O+m*B+M*ae,i[15]=v*_+w*P+m*V+M*le,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],a=e[4],n=e[8],i=e[12],r=e[1],o=e[5],c=e[9],h=e[13],l=e[2],d=e[6],u=e[10],p=e[14],x=e[3],g=e[7],b=e[11],f=e[15];return x*(+i*c*d-n*h*d-i*o*u+a*h*u+n*o*p-a*c*p)+g*(+t*c*p-t*h*u+i*r*u-n*r*p+n*h*l-i*c*l)+b*(+t*h*d-t*o*p-i*r*d+a*r*p+i*o*l-a*h*l)+f*(-n*o*l-t*c*d+t*o*u+n*r*d-a*r*u+a*c*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,a){let n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=t,n[14]=a),this}invert(){let e=this.elements,t=e[0],a=e[1],n=e[2],i=e[3],r=e[4],o=e[5],c=e[6],h=e[7],l=e[8],d=e[9],u=e[10],p=e[11],x=e[12],g=e[13],b=e[14],f=e[15],v=d*b*h-g*u*h+g*c*p-o*b*p-d*c*f+o*u*f,w=x*u*h-l*b*h-x*c*p+r*b*p+l*c*f-r*u*f,m=l*g*h-x*d*h+x*o*p-r*g*p-l*o*f+r*d*f,M=x*d*c-l*g*c-x*o*u+r*g*u+l*o*b-r*d*b,A=t*v+a*w+n*m+i*M;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let T=1/A;return e[0]=v*T,e[1]=(g*u*i-d*b*i-g*n*p+a*b*p+d*n*f-a*u*f)*T,e[2]=(o*b*i-g*c*i+g*n*h-a*b*h-o*n*f+a*c*f)*T,e[3]=(d*c*i-o*u*i-d*n*h+a*u*h+o*n*p-a*c*p)*T,e[4]=w*T,e[5]=(l*b*i-x*u*i+x*n*p-t*b*p-l*n*f+t*u*f)*T,e[6]=(x*c*i-r*b*i-x*n*h+t*b*h+r*n*f-t*c*f)*T,e[7]=(r*u*i-l*c*i+l*n*h-t*u*h-r*n*p+t*c*p)*T,e[8]=m*T,e[9]=(x*d*i-l*g*i-x*a*p+t*g*p+l*a*f-t*d*f)*T,e[10]=(r*g*i-x*o*i+x*a*h-t*g*h-r*a*f+t*o*f)*T,e[11]=(l*o*i-r*d*i-l*a*h+t*d*h+r*a*p-t*o*p)*T,e[12]=M*T,e[13]=(l*g*n-x*d*n+x*a*u-t*g*u-l*a*b+t*d*b)*T,e[14]=(x*o*n-r*g*n-x*a*c+t*g*c+r*a*b-t*o*b)*T,e[15]=(r*d*n-l*o*n+l*a*c-t*d*c-r*a*u+t*o*u)*T,this}scale(e){let t=this.elements,a=e.x,n=e.y,i=e.z;return t[0]*=a,t[4]*=n,t[8]*=i,t[1]*=a,t[5]*=n,t[9]*=i,t[2]*=a,t[6]*=n,t[10]*=i,t[3]*=a,t[7]*=n,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],a=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,a,n))}makeTranslation(e,t,a){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,a,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),a=Math.sin(e);return this.set(1,0,0,0,0,t,-a,0,0,a,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),a=Math.sin(e);return this.set(t,0,a,0,0,1,0,0,-a,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),a=Math.sin(e);return this.set(t,-a,0,0,a,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let a=Math.cos(t),n=Math.sin(t),i=1-a,r=e.x,o=e.y,c=e.z,h=i*r,l=i*o;return this.set(h*r+a,h*o-n*c,h*c+n*o,0,h*o+n*c,l*o+a,l*c-n*r,0,h*c-n*o,l*c+n*r,i*c*c+a,0,0,0,0,1),this}makeScale(e,t,a){return this.set(e,0,0,0,0,t,0,0,0,0,a,0,0,0,0,1),this}makeShear(e,t,a,n,i,r){return this.set(1,a,i,0,e,1,r,0,t,n,1,0,0,0,0,1),this}compose(e,t,a){let n=this.elements,i=t._x,r=t._y,o=t._z,c=t._w,h=i+i,l=r+r,d=o+o,u=i*h,p=i*l,x=i*d,g=r*l,b=r*d,f=o*d,v=c*h,w=c*l,m=c*d,M=a.x,A=a.y,T=a.z;return n[0]=(1-(g+f))*M,n[1]=(p+m)*M,n[2]=(x-w)*M,n[3]=0,n[4]=(p-m)*A,n[5]=(1-(u+f))*A,n[6]=(b+v)*A,n[7]=0,n[8]=(x+w)*T,n[9]=(b-v)*T,n[10]=(1-(u+g))*T,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,t,a){let n=this.elements,i=ci.set(n[0],n[1],n[2]).length(),r=ci.set(n[4],n[5],n[6]).length(),o=ci.set(n[8],n[9],n[10]).length();this.determinant()<0&&(i=-i),e.x=n[12],e.y=n[13],e.z=n[14],pa.copy(this);let h=1/i,l=1/r,d=1/o;return pa.elements[0]*=h,pa.elements[1]*=h,pa.elements[2]*=h,pa.elements[4]*=l,pa.elements[5]*=l,pa.elements[6]*=l,pa.elements[8]*=d,pa.elements[9]*=d,pa.elements[10]*=d,t.setFromRotationMatrix(pa),a.x=i,a.y=r,a.z=o,this}makePerspective(e,t,a,n,i,r,o=Ta){let c=this.elements,h=2*i/(t-e),l=2*i/(a-n),d=(t+e)/(t-e),u=(a+n)/(a-n),p,x;if(o===Ta)p=-(r+i)/(r-i),x=-2*r*i/(r-i);else if(o===rs)p=-r/(r-i),x=-r*i/(r-i);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=l,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,a,n,i,r,o=Ta){let c=this.elements,h=1/(t-e),l=1/(a-n),d=1/(r-i),u=(t+e)*h,p=(a+n)*l,x,g;if(o===Ta)x=(r+i)*d,g=-2*d;else if(o===rs)x=i*d,g=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*h,c[4]=0,c[8]=0,c[12]=-u,c[1]=0,c[5]=2*l,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=g,c[14]=-x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,a=e.elements;for(let n=0;n<16;n++)if(t[n]!==a[n])return!1;return!0}fromArray(e,t=0){for(let a=0;a<16;a++)this.elements[a]=e[a+t];return this}toArray(e=[],t=0){let a=this.elements;return e[t]=a[0],e[t+1]=a[1],e[t+2]=a[2],e[t+3]=a[3],e[t+4]=a[4],e[t+5]=a[5],e[t+6]=a[6],e[t+7]=a[7],e[t+8]=a[8],e[t+9]=a[9],e[t+10]=a[10],e[t+11]=a[11],e[t+12]=a[12],e[t+13]=a[13],e[t+14]=a[14],e[t+15]=a[15],e}},ci=new k,pa=new Te,yu=new k(0,0,0),_u=new k(1,1,1),on=new k,ar=new k,Zt=new k,Nl=new Te,Fl=new At,ya=class s{constructor(e=0,t=0,a=0,n=s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=a,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,a,n=this._order){return this._x=e,this._y=t,this._z=a,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,a=!0){let n=e.elements,i=n[0],r=n[4],o=n[8],c=n[1],h=n[5],l=n[9],d=n[2],u=n[6],p=n[10];switch(t){case"XYZ":this._y=Math.asin(Le(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,p),this._z=Math.atan2(-r,i)):(this._x=Math.atan2(u,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Le(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,h)):(this._y=Math.atan2(-d,i),this._z=0);break;case"ZXY":this._x=Math.asin(Le(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-r,h)):(this._y=0,this._z=Math.atan2(c,i));break;case"ZYX":this._y=Math.asin(-Le(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(c,i)):(this._x=0,this._z=Math.atan2(-r,h));break;case"YZX":this._z=Math.asin(Le(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-l,h),this._y=Math.atan2(-d,i)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Le(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(u,h),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,a===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,a){return Nl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Nl,t,a)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Fl.setFromEuler(this),this.setFromQuaternion(Fl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ya.DEFAULT_ORDER="XYZ";var hs=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Mu=0,Dl=new k,hi=new At,ja=new Te,nr=new k,Yi=new k,wu=new k,Au=new At,Ll=new k(1,0,0),Ul=new k(0,1,0),Ol=new k(0,0,1),zl={type:"added"},Eu={type:"removed"},li={type:"childadded",child:null},_c={type:"childremoved",child:null},ct=class s extends va{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Mu++}),this.uuid=xa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let e=new k,t=new ya,a=new At,n=new k(1,1,1);function i(){a.setFromEuler(t,!1)}function r(){t.setFromQuaternion(a,void 0,!1)}t._onChange(i),a._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:a},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new Te},normalMatrix:{value:new Pe}}),this.matrix=new Te,this.matrixWorld=new Te,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new hs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return hi.setFromAxisAngle(e,t),this.quaternion.multiply(hi),this}rotateOnWorldAxis(e,t){return hi.setFromAxisAngle(e,t),this.quaternion.premultiply(hi),this}rotateX(e){return this.rotateOnAxis(Ll,e)}rotateY(e){return this.rotateOnAxis(Ul,e)}rotateZ(e){return this.rotateOnAxis(Ol,e)}translateOnAxis(e,t){return Dl.copy(e).applyQuaternion(this.quaternion),this.position.add(Dl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ll,e)}translateY(e){return this.translateOnAxis(Ul,e)}translateZ(e){return this.translateOnAxis(Ol,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ja.copy(this.matrixWorld).invert())}lookAt(e,t,a){e.isVector3?nr.copy(e):nr.set(e,t,a);let n=this.parent;this.updateWorldMatrix(!0,!1),Yi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ja.lookAt(Yi,nr,this.up):ja.lookAt(nr,Yi,this.up),this.quaternion.setFromRotationMatrix(ja),n&&(ja.extractRotation(n.matrixWorld),hi.setFromRotationMatrix(ja),this.quaternion.premultiply(hi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(zl),li.child=e,this.dispatchEvent(li),li.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.remove(arguments[a]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Eu),_c.child=e,this.dispatchEvent(_c),_c.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ja.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ja.multiply(e.parent.matrixWorld)),e.applyMatrix4(ja),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(zl),li.child=e,this.dispatchEvent(li),li.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let a=0,n=this.children.length;a<n;a++){let r=this.children[a].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,a=[]){this[e]===t&&a.push(this);let n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].getObjectsByProperty(e,t,a);return a}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yi,e,wu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yi,Au,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let a=0,n=t.length;a<n;a++)t[a].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let a=0,n=t.length;a<n;a++)t[a].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let a=0,n=t.length;a<n;a++)t[a].updateMatrixWorld(e)}updateWorldMatrix(e,t){let a=this.parent;if(e===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",a={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},a.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.visibility=this._visibility,n.active=this._active,n.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.geometryCount=this._geometryCount,n.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(n.boundingSphere={center:n.boundingSphere.center.toArray(),radius:n.boundingSphere.radius}),this.boundingBox!==null&&(n.boundingBox={min:n.boundingBox.min.toArray(),max:n.boundingBox.max.toArray()}));function i(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=i(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let h=0,l=c.length;h<l;h++){let d=c[h];i(e.shapes,d)}else i(e.shapes,c)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,h=this.material.length;c<h;c++)o.push(i(e.materials,this.material[c]));n.material=o}else n.material=i(e.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];n.animations.push(i(e.animations,c))}}if(t){let o=r(e.geometries),c=r(e.materials),h=r(e.textures),l=r(e.images),d=r(e.shapes),u=r(e.skeletons),p=r(e.animations),x=r(e.nodes);o.length>0&&(a.geometries=o),c.length>0&&(a.materials=c),h.length>0&&(a.textures=h),l.length>0&&(a.images=l),d.length>0&&(a.shapes=d),u.length>0&&(a.skeletons=u),p.length>0&&(a.animations=p),x.length>0&&(a.nodes=x)}return a.object=n,a;function r(o){let c=[];for(let h in o){let l=o[h];delete l.metadata,c.push(l)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let a=0;a<e.children.length;a++){let n=e.children[a];this.add(n.clone())}return this}};ct.DEFAULT_UP=new k(0,1,0);ct.DEFAULT_MATRIX_AUTO_UPDATE=!0;ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ma=new k,Ha=new k,Mc=new k,Ga=new k,di=new k,fi=new k,Bl=new k,wc=new k,Ac=new k,Ec=new k,Sc=new Ke,Tc=new Ke,Rc=new Ke,dn=class s{constructor(e=new k,t=new k,a=new k){this.a=e,this.b=t,this.c=a}static getNormal(e,t,a,n){n.subVectors(a,t),ma.subVectors(e,t),n.cross(ma);let i=n.lengthSq();return i>0?n.multiplyScalar(1/Math.sqrt(i)):n.set(0,0,0)}static getBarycoord(e,t,a,n,i){ma.subVectors(n,t),Ha.subVectors(a,t),Mc.subVectors(e,t);let r=ma.dot(ma),o=ma.dot(Ha),c=ma.dot(Mc),h=Ha.dot(Ha),l=Ha.dot(Mc),d=r*h-o*o;if(d===0)return i.set(0,0,0),null;let u=1/d,p=(h*c-o*l)*u,x=(r*l-o*c)*u;return i.set(1-p-x,x,p)}static containsPoint(e,t,a,n){return this.getBarycoord(e,t,a,n,Ga)===null?!1:Ga.x>=0&&Ga.y>=0&&Ga.x+Ga.y<=1}static getInterpolation(e,t,a,n,i,r,o,c){return this.getBarycoord(e,t,a,n,Ga)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(i,Ga.x),c.addScaledVector(r,Ga.y),c.addScaledVector(o,Ga.z),c)}static getInterpolatedAttribute(e,t,a,n,i,r){return Sc.setScalar(0),Tc.setScalar(0),Rc.setScalar(0),Sc.fromBufferAttribute(e,t),Tc.fromBufferAttribute(e,a),Rc.fromBufferAttribute(e,n),r.setScalar(0),r.addScaledVector(Sc,i.x),r.addScaledVector(Tc,i.y),r.addScaledVector(Rc,i.z),r}static isFrontFacing(e,t,a,n){return ma.subVectors(a,t),Ha.subVectors(e,t),ma.cross(Ha).dot(n)<0}set(e,t,a){return this.a.copy(e),this.b.copy(t),this.c.copy(a),this}setFromPointsAndIndices(e,t,a,n){return this.a.copy(e[t]),this.b.copy(e[a]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,t,a,n){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,a),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ma.subVectors(this.c,this.b),Ha.subVectors(this.a,this.b),ma.cross(Ha).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return s.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return s.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,a,n,i){return s.getInterpolation(e,this.a,this.b,this.c,t,a,n,i)}containsPoint(e){return s.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return s.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let a=this.a,n=this.b,i=this.c,r,o;di.subVectors(n,a),fi.subVectors(i,a),wc.subVectors(e,a);let c=di.dot(wc),h=fi.dot(wc);if(c<=0&&h<=0)return t.copy(a);Ac.subVectors(e,n);let l=di.dot(Ac),d=fi.dot(Ac);if(l>=0&&d<=l)return t.copy(n);let u=c*d-l*h;if(u<=0&&c>=0&&l<=0)return r=c/(c-l),t.copy(a).addScaledVector(di,r);Ec.subVectors(e,i);let p=di.dot(Ec),x=fi.dot(Ec);if(x>=0&&p<=x)return t.copy(i);let g=p*h-c*x;if(g<=0&&h>=0&&x<=0)return o=h/(h-x),t.copy(a).addScaledVector(fi,o);let b=l*x-p*d;if(b<=0&&d-l>=0&&p-x>=0)return Bl.subVectors(i,n),o=(d-l)/(d-l+(p-x)),t.copy(n).addScaledVector(Bl,o);let f=1/(b+g+u);return r=g*f,o=u*f,t.copy(a).addScaledVector(di,r).addScaledVector(fi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Qd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},cn={h:0,s:0,l:0},ir={h:0,s:0,l:0};function Ic(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}var ge=class{constructor(e,t,a){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,a)}set(e,t,a){if(t===void 0&&a===void 0){let n=e;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(e,t,a);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ft){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ue.toWorkingColorSpace(this,t),this}setRGB(e,t,a,n=Ue.workingColorSpace){return this.r=e,this.g=t,this.b=a,Ue.toWorkingColorSpace(this,n),this}setHSL(e,t,a,n=Ue.workingColorSpace){if(e=fh(e,1),t=Le(t,0,1),a=Le(a,0,1),t===0)this.r=this.g=this.b=a;else{let i=a<=.5?a*(1+t):a+t-a*t,r=2*a-i;this.r=Ic(r,i,e+1/3),this.g=Ic(r,i,e),this.b=Ic(r,i,e-1/3)}return Ue.toWorkingColorSpace(this,n),this}setStyle(e,t=ft){function a(i){i!==void 0&&parseFloat(i)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,r=n[1],o=n[2];switch(r){case"rgb":case"rgba":if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return a(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return a(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case"hsl":case"hsla":if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return a(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){let i=n[1],r=i.length;if(r===3)return this.setRGB(parseInt(i.charAt(0),16)/15,parseInt(i.charAt(1),16)/15,parseInt(i.charAt(2),16)/15,t);if(r===6)return this.setHex(parseInt(i,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ft){let a=Qd[e.toLowerCase()];return a!==void 0?this.setHex(a,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=qa(e.r),this.g=qa(e.g),this.b=qa(e.b),this}copyLinearToSRGB(e){return this.r=gi(e.r),this.g=gi(e.g),this.b=gi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ft){return Ue.fromWorkingColorSpace(Nt.copy(this),e),Math.round(Le(Nt.r*255,0,255))*65536+Math.round(Le(Nt.g*255,0,255))*256+Math.round(Le(Nt.b*255,0,255))}getHexString(e=ft){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ue.workingColorSpace){Ue.fromWorkingColorSpace(Nt.copy(this),t);let a=Nt.r,n=Nt.g,i=Nt.b,r=Math.max(a,n,i),o=Math.min(a,n,i),c,h,l=(o+r)/2;if(o===r)c=0,h=0;else{let d=r-o;switch(h=l<=.5?d/(r+o):d/(2-r-o),r){case a:c=(n-i)/d+(n<i?6:0);break;case n:c=(i-a)/d+2;break;case i:c=(a-n)/d+4;break}c/=6}return e.h=c,e.s=h,e.l=l,e}getRGB(e,t=Ue.workingColorSpace){return Ue.fromWorkingColorSpace(Nt.copy(this),t),e.r=Nt.r,e.g=Nt.g,e.b=Nt.b,e}getStyle(e=ft){Ue.fromWorkingColorSpace(Nt.copy(this),e);let t=Nt.r,a=Nt.g,n=Nt.b;return e!==ft?`color(${e} ${t.toFixed(3)} ${a.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(a*255)},${Math.round(n*255)})`}offsetHSL(e,t,a){return this.getHSL(cn),this.setHSL(cn.h+e,cn.s+t,cn.l+a)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,a){return this.r=e.r+(t.r-e.r)*a,this.g=e.g+(t.g-e.g)*a,this.b=e.b+(t.b-e.b)*a,this}lerpHSL(e,t){this.getHSL(cn),e.getHSL(ir);let a=ns(cn.h,ir.h,t),n=ns(cn.s,ir.s,t),i=ns(cn.l,ir.l,t);return this.setHSL(a,n,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,a=this.g,n=this.b,i=e.elements;return this.r=i[0]*t+i[3]*a+i[6]*n,this.g=i[1]*t+i[4]*a+i[7]*n,this.b=i[2]*t+i[5]*a+i[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Nt=new ge;ge.NAMES=Qd;var Su=0,Wt=class extends va{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Su++}),this.uuid=xa(),this.name="",this.type="Material",this.blending=kn,this.side=Gt,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=wr,this.blendDst=Ar,this.blendEquation=fn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ge(0,0,0),this.blendAlpha=0,this.depthFunc=Pn,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Bc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Tn,this.stencilZFail=Tn,this.stencilZPass=Tn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let a=e[t];if(a===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let n=this[t];if(n===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(a):n&&n.isVector3&&a&&a.isVector3?n.copy(a):this[t]=a}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let a={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.color&&this.color.isColor&&(a.color=this.color.getHex()),this.roughness!==void 0&&(a.roughness=this.roughness),this.metalness!==void 0&&(a.metalness=this.metalness),this.sheen!==void 0&&(a.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(a.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(a.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(a.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(a.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(a.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(a.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(a.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(a.shininess=this.shininess),this.clearcoat!==void 0&&(a.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(a.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(a.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(a.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(a.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,a.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(a.dispersion=this.dispersion),this.iridescence!==void 0&&(a.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(a.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(a.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(a.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(a.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(a.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(a.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(a.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(a.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(a.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(a.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(a.lightMap=this.lightMap.toJSON(e).uuid,a.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(a.aoMap=this.aoMap.toJSON(e).uuid,a.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(a.bumpMap=this.bumpMap.toJSON(e).uuid,a.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(a.normalMap=this.normalMap.toJSON(e).uuid,a.normalMapType=this.normalMapType,a.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(a.displacementMap=this.displacementMap.toJSON(e).uuid,a.displacementScale=this.displacementScale,a.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(a.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(a.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(a.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(a.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(a.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(a.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(a.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(a.combine=this.combine)),this.envMapRotation!==void 0&&(a.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(a.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(a.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(a.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(a.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(a.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(a.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(a.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(a.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(a.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(a.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(a.size=this.size),this.shadowSide!==null&&(a.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(a.sizeAttenuation=this.sizeAttenuation),this.blending!==kn&&(a.blending=this.blending),this.side!==Gt&&(a.side=this.side),this.vertexColors===!0&&(a.vertexColors=!0),this.opacity<1&&(a.opacity=this.opacity),this.transparent===!0&&(a.transparent=!0),this.blendSrc!==wr&&(a.blendSrc=this.blendSrc),this.blendDst!==Ar&&(a.blendDst=this.blendDst),this.blendEquation!==fn&&(a.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(a.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(a.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(a.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(a.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(a.blendAlpha=this.blendAlpha),this.depthFunc!==Pn&&(a.depthFunc=this.depthFunc),this.depthTest===!1&&(a.depthTest=this.depthTest),this.depthWrite===!1&&(a.depthWrite=this.depthWrite),this.colorWrite===!1&&(a.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(a.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Bc&&(a.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(a.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(a.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Tn&&(a.stencilFail=this.stencilFail),this.stencilZFail!==Tn&&(a.stencilZFail=this.stencilZFail),this.stencilZPass!==Tn&&(a.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(a.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(a.rotation=this.rotation),this.polygonOffset===!0&&(a.polygonOffset=!0),this.polygonOffsetFactor!==0&&(a.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(a.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(a.linewidth=this.linewidth),this.dashSize!==void 0&&(a.dashSize=this.dashSize),this.gapSize!==void 0&&(a.gapSize=this.gapSize),this.scale!==void 0&&(a.scale=this.scale),this.dithering===!0&&(a.dithering=!0),this.alphaTest>0&&(a.alphaTest=this.alphaTest),this.alphaHash===!0&&(a.alphaHash=!0),this.alphaToCoverage===!0&&(a.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(a.premultipliedAlpha=!0),this.forceSinglePass===!0&&(a.forceSinglePass=!0),this.wireframe===!0&&(a.wireframe=!0),this.wireframeLinewidth>1&&(a.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(a.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(a.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(a.flatShading=!0),this.visible===!1&&(a.visible=!1),this.toneMapped===!1&&(a.toneMapped=!1),this.fog===!1&&(a.fog=!1),Object.keys(this.userData).length>0&&(a.userData=this.userData);function n(i){let r=[];for(let o in i){let c=i[o];delete c.metadata,r.push(c)}return r}if(t){let i=n(e.textures),r=n(e.images);i.length>0&&(a.textures=i),r.length>0&&(a.images=r)}return a}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,a=null;if(t!==null){let n=t.length;a=new Array(n);for(let i=0;i!==n;++i)a[i]=t[i].clone()}return this.clippingPlanes=a,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},It=class extends Wt{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ya,this.combine=Zc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var mt=new k,sr=new ue,it=class{constructor(e,t,a=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=a,this.usage=Er,this.updateRanges=[],this.gpuType=la,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,a){e*=this.itemSize,a*=t.itemSize;for(let n=0,i=this.itemSize;n<i;n++)this.array[e+n]=t.array[a+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,a=this.count;t<a;t++)sr.fromBufferAttribute(this,t),sr.applyMatrix3(e),this.setXY(t,sr.x,sr.y);else if(this.itemSize===3)for(let t=0,a=this.count;t<a;t++)mt.fromBufferAttribute(this,t),mt.applyMatrix3(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}applyMatrix4(e){for(let t=0,a=this.count;t<a;t++)mt.fromBufferAttribute(this,t),mt.applyMatrix4(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}applyNormalMatrix(e){for(let t=0,a=this.count;t<a;t++)mt.fromBufferAttribute(this,t),mt.applyNormalMatrix(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}transformDirection(e){for(let t=0,a=this.count;t<a;t++)mt.fromBufferAttribute(this,t),mt.transformDirection(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let a=this.array[e*this.itemSize+t];return this.normalized&&(a=ga(a,this.array)),a}setComponent(e,t,a){return this.normalized&&(a=$e(a,this.array)),this.array[e*this.itemSize+t]=a,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ga(t,this.array)),t}setX(e,t){return this.normalized&&(t=$e(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ga(t,this.array)),t}setY(e,t){return this.normalized&&(t=$e(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ga(t,this.array)),t}setZ(e,t){return this.normalized&&(t=$e(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ga(t,this.array)),t}setW(e,t){return this.normalized&&(t=$e(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,a){return e*=this.itemSize,this.normalized&&(t=$e(t,this.array),a=$e(a,this.array)),this.array[e+0]=t,this.array[e+1]=a,this}setXYZ(e,t,a,n){return e*=this.itemSize,this.normalized&&(t=$e(t,this.array),a=$e(a,this.array),n=$e(n,this.array)),this.array[e+0]=t,this.array[e+1]=a,this.array[e+2]=n,this}setXYZW(e,t,a,n,i){return e*=this.itemSize,this.normalized&&(t=$e(t,this.array),a=$e(a,this.array),n=$e(n,this.array),i=$e(i,this.array)),this.array[e+0]=t,this.array[e+1]=a,this.array[e+2]=n,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Er&&(e.usage=this.usage),e}};var ls=class extends it{constructor(e,t,a){super(new Uint16Array(e),t,a)}};var ds=class extends it{constructor(e,t,a){super(new Uint32Array(e),t,a)}};var bt=class extends it{constructor(e,t,a){super(new Float32Array(e),t,a)}},Tu=0,ra=new Te,Cc=new ct,ui=new k,Qt=new zt,Zi=new zt,wt=new k,Et=class s extends va{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Tu++}),this.uuid=xa(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(uh(e)?ds:ls)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,a=0){this.groups.push({start:e,count:t,materialIndex:a})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let a=this.attributes.normal;if(a!==void 0){let i=new Pe().getNormalMatrix(e);a.applyNormalMatrix(i),a.needsUpdate=!0}let n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ra.makeRotationFromQuaternion(e),this.applyMatrix4(ra),this}rotateX(e){return ra.makeRotationX(e),this.applyMatrix4(ra),this}rotateY(e){return ra.makeRotationY(e),this.applyMatrix4(ra),this}rotateZ(e){return ra.makeRotationZ(e),this.applyMatrix4(ra),this}translate(e,t,a){return ra.makeTranslation(e,t,a),this.applyMatrix4(ra),this}scale(e,t,a){return ra.makeScale(e,t,a),this.applyMatrix4(ra),this}lookAt(e){return Cc.lookAt(e),Cc.updateMatrix(),this.applyMatrix4(Cc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ui).negate(),this.translate(ui.x,ui.y,ui.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let a=[];for(let n=0,i=e.length;n<i;n++){let r=e[n];a.push(r.x,r.y,r.z||0)}this.setAttribute("position",new bt(a,3))}else{let a=Math.min(e.length,t.count);for(let n=0;n<a;n++){let i=e[n];t.setXYZ(n,i.x,i.y,i.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new zt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let a=0,n=t.length;a<n;a++){let i=t[a];Qt.setFromBufferAttribute(i),this.morphTargetsRelative?(wt.addVectors(this.boundingBox.min,Qt.min),this.boundingBox.expandByPoint(wt),wt.addVectors(this.boundingBox.max,Qt.max),this.boundingBox.expandByPoint(wt)):(this.boundingBox.expandByPoint(Qt.min),this.boundingBox.expandByPoint(Qt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(e){let a=this.boundingSphere.center;if(Qt.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){let o=t[i];Zi.setFromBufferAttribute(o),this.morphTargetsRelative?(wt.addVectors(Qt.min,Zi.min),Qt.expandByPoint(wt),wt.addVectors(Qt.max,Zi.max),Qt.expandByPoint(wt)):(Qt.expandByPoint(Zi.min),Qt.expandByPoint(Zi.max))}Qt.getCenter(a);let n=0;for(let i=0,r=e.count;i<r;i++)wt.fromBufferAttribute(e,i),n=Math.max(n,a.distanceToSquared(wt));if(t)for(let i=0,r=t.length;i<r;i++){let o=t[i],c=this.morphTargetsRelative;for(let h=0,l=o.count;h<l;h++)wt.fromBufferAttribute(o,h),c&&(ui.fromBufferAttribute(e,h),wt.add(ui)),n=Math.max(n,a.distanceToSquared(wt))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let a=t.position,n=t.normal,i=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new it(new Float32Array(4*a.count),4));let r=this.getAttribute("tangent"),o=[],c=[];for(let R=0;R<a.count;R++)o[R]=new k,c[R]=new k;let h=new k,l=new k,d=new k,u=new ue,p=new ue,x=new ue,g=new k,b=new k;function f(R,_,y){h.fromBufferAttribute(a,R),l.fromBufferAttribute(a,_),d.fromBufferAttribute(a,y),u.fromBufferAttribute(i,R),p.fromBufferAttribute(i,_),x.fromBufferAttribute(i,y),l.sub(h),d.sub(h),p.sub(u),x.sub(u);let C=1/(p.x*x.y-x.x*p.y);isFinite(C)&&(g.copy(l).multiplyScalar(x.y).addScaledVector(d,-p.y).multiplyScalar(C),b.copy(d).multiplyScalar(p.x).addScaledVector(l,-x.x).multiplyScalar(C),o[R].add(g),o[_].add(g),o[y].add(g),c[R].add(b),c[_].add(b),c[y].add(b))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let R=0,_=v.length;R<_;++R){let y=v[R],C=y.start,O=y.count;for(let P=C,U=C+O;P<U;P+=3)f(e.getX(P+0),e.getX(P+1),e.getX(P+2))}let w=new k,m=new k,M=new k,A=new k;function T(R){M.fromBufferAttribute(n,R),A.copy(M);let _=o[R];w.copy(_),w.sub(M.multiplyScalar(M.dot(_))).normalize(),m.crossVectors(A,_);let C=m.dot(c[R])<0?-1:1;r.setXYZW(R,w.x,w.y,w.z,C)}for(let R=0,_=v.length;R<_;++R){let y=v[R],C=y.start,O=y.count;for(let P=C,U=C+O;P<U;P+=3)T(e.getX(P+0)),T(e.getX(P+1)),T(e.getX(P+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let a=this.getAttribute("normal");if(a===void 0)a=new it(new Float32Array(t.count*3),3),this.setAttribute("normal",a);else for(let u=0,p=a.count;u<p;u++)a.setXYZ(u,0,0,0);let n=new k,i=new k,r=new k,o=new k,c=new k,h=new k,l=new k,d=new k;if(e)for(let u=0,p=e.count;u<p;u+=3){let x=e.getX(u+0),g=e.getX(u+1),b=e.getX(u+2);n.fromBufferAttribute(t,x),i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,b),l.subVectors(r,i),d.subVectors(n,i),l.cross(d),o.fromBufferAttribute(a,x),c.fromBufferAttribute(a,g),h.fromBufferAttribute(a,b),o.add(l),c.add(l),h.add(l),a.setXYZ(x,o.x,o.y,o.z),a.setXYZ(g,c.x,c.y,c.z),a.setXYZ(b,h.x,h.y,h.z)}else for(let u=0,p=t.count;u<p;u+=3)n.fromBufferAttribute(t,u+0),i.fromBufferAttribute(t,u+1),r.fromBufferAttribute(t,u+2),l.subVectors(r,i),d.subVectors(n,i),l.cross(d),a.setXYZ(u+0,l.x,l.y,l.z),a.setXYZ(u+1,l.x,l.y,l.z),a.setXYZ(u+2,l.x,l.y,l.z);this.normalizeNormals(),a.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,a=e.count;t<a;t++)wt.fromBufferAttribute(e,t),wt.normalize(),e.setXYZ(t,wt.x,wt.y,wt.z)}toNonIndexed(){function e(o,c){let h=o.array,l=o.itemSize,d=o.normalized,u=new h.constructor(c.length*l),p=0,x=0;for(let g=0,b=c.length;g<b;g++){o.isInterleavedBufferAttribute?p=c[g]*o.data.stride+o.offset:p=c[g]*l;for(let f=0;f<l;f++)u[x++]=h[p++]}return new it(u,l,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new s,a=this.index.array,n=this.attributes;for(let o in n){let c=n[o],h=e(c,a);t.setAttribute(o,h)}let i=this.morphAttributes;for(let o in i){let c=[],h=i[o];for(let l=0,d=h.length;l<d;l++){let u=h[l],p=e(u,a);c.push(p)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;for(let o=0,c=r.length;o<c;o++){let h=r[o];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let h in c)c[h]!==void 0&&(e[h]=c[h]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let a=this.attributes;for(let c in a){let h=a[c];e.data.attributes[c]=h.toJSON(e.data)}let n={},i=!1;for(let c in this.morphAttributes){let h=this.morphAttributes[c],l=[];for(let d=0,u=h.length;d<u;d++){let p=h[d];l.push(p.toJSON(e.data))}l.length>0&&(n[c]=l,i=!0)}i&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);let r=this.groups;r.length>0&&(e.data.groups=JSON.parse(JSON.stringify(r)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let a=e.index;a!==null&&this.setIndex(a.clone(t));let n=e.attributes;for(let h in n){let l=n[h];this.setAttribute(h,l.clone(t))}let i=e.morphAttributes;for(let h in i){let l=[],d=i[h];for(let u=0,p=d.length;u<p;u++)l.push(d[u].clone(t));this.morphAttributes[h]=l}this.morphTargetsRelative=e.morphTargetsRelative;let r=e.groups;for(let h=0,l=r.length;h<l;h++){let d=r[h];this.addGroup(d.start,d.count,d.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},jl=new Te,En=new Xa,rr=new Vt,Hl=new k,or=new k,cr=new k,hr=new k,kc=new k,lr=new k,Gl=new k,dr=new k,st=class extends ct{constructor(e=new Et,t=new It){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,a=Object.keys(t);if(a.length>0){let n=t[a[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,r=n.length;i<r;i++){let o=n[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=i}}}}getVertexPosition(e,t){let a=this.geometry,n=a.attributes.position,i=a.morphAttributes.position,r=a.morphTargetsRelative;t.fromBufferAttribute(n,e);let o=this.morphTargetInfluences;if(i&&o){lr.set(0,0,0);for(let c=0,h=i.length;c<h;c++){let l=o[c],d=i[c];l!==0&&(kc.fromBufferAttribute(d,e),r?lr.addScaledVector(kc,l):lr.addScaledVector(kc.sub(t),l))}t.add(lr)}return t}raycast(e,t){let a=this.geometry,n=this.material,i=this.matrixWorld;n!==void 0&&(a.boundingSphere===null&&a.computeBoundingSphere(),rr.copy(a.boundingSphere),rr.applyMatrix4(i),En.copy(e.ray).recast(e.near),!(rr.containsPoint(En.origin)===!1&&(En.intersectSphere(rr,Hl)===null||En.origin.distanceToSquared(Hl)>(e.far-e.near)**2))&&(jl.copy(i).invert(),En.copy(e.ray).applyMatrix4(jl),!(a.boundingBox!==null&&En.intersectsBox(a.boundingBox)===!1)&&this._computeIntersections(e,t,En)))}_computeIntersections(e,t,a){let n,i=this.geometry,r=this.material,o=i.index,c=i.attributes.position,h=i.attributes.uv,l=i.attributes.uv1,d=i.attributes.normal,u=i.groups,p=i.drawRange;if(o!==null)if(Array.isArray(r))for(let x=0,g=u.length;x<g;x++){let b=u[x],f=r[b.materialIndex],v=Math.max(b.start,p.start),w=Math.min(o.count,Math.min(b.start+b.count,p.start+p.count));for(let m=v,M=w;m<M;m+=3){let A=o.getX(m),T=o.getX(m+1),R=o.getX(m+2);n=fr(this,f,e,a,h,l,d,A,T,R),n&&(n.faceIndex=Math.floor(m/3),n.face.materialIndex=b.materialIndex,t.push(n))}}else{let x=Math.max(0,p.start),g=Math.min(o.count,p.start+p.count);for(let b=x,f=g;b<f;b+=3){let v=o.getX(b),w=o.getX(b+1),m=o.getX(b+2);n=fr(this,r,e,a,h,l,d,v,w,m),n&&(n.faceIndex=Math.floor(b/3),t.push(n))}}else if(c!==void 0)if(Array.isArray(r))for(let x=0,g=u.length;x<g;x++){let b=u[x],f=r[b.materialIndex],v=Math.max(b.start,p.start),w=Math.min(c.count,Math.min(b.start+b.count,p.start+p.count));for(let m=v,M=w;m<M;m+=3){let A=m,T=m+1,R=m+2;n=fr(this,f,e,a,h,l,d,A,T,R),n&&(n.faceIndex=Math.floor(m/3),n.face.materialIndex=b.materialIndex,t.push(n))}}else{let x=Math.max(0,p.start),g=Math.min(c.count,p.start+p.count);for(let b=x,f=g;b<f;b+=3){let v=b,w=b+1,m=b+2;n=fr(this,r,e,a,h,l,d,v,w,m),n&&(n.faceIndex=Math.floor(b/3),t.push(n))}}}};function Ru(s,e,t,a,n,i,r,o){let c;if(e.side===Bt?c=a.intersectTriangle(r,i,n,!0,o):c=a.intersectTriangle(n,i,r,e.side===Gt,o),c===null)return null;dr.copy(o),dr.applyMatrix4(s.matrixWorld);let h=t.ray.origin.distanceTo(dr);return h<t.near||h>t.far?null:{distance:h,point:dr.clone(),object:s}}function fr(s,e,t,a,n,i,r,o,c,h){s.getVertexPosition(o,or),s.getVertexPosition(c,cr),s.getVertexPosition(h,hr);let l=Ru(s,e,t,a,or,cr,hr,Gl);if(l){let d=new k;dn.getBarycoord(Gl,or,cr,hr,d),n&&(l.uv=dn.getInterpolatedAttribute(n,o,c,h,d,new ue)),i&&(l.uv1=dn.getInterpolatedAttribute(i,o,c,h,d,new ue)),r&&(l.normal=dn.getInterpolatedAttribute(r,o,c,h,d,new k),l.normal.dot(a.direction)>0&&l.normal.multiplyScalar(-1));let u={a:o,b:c,c:h,normal:new k,materialIndex:0};dn.getNormal(or,cr,hr,u.normal),l.face=u,l.barycoord=d}return l}var yi=class s extends Et{constructor(e=1,t=1,a=1,n=1,i=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:a,widthSegments:n,heightSegments:i,depthSegments:r};let o=this;n=Math.floor(n),i=Math.floor(i),r=Math.floor(r);let c=[],h=[],l=[],d=[],u=0,p=0;x("z","y","x",-1,-1,a,t,e,r,i,0),x("z","y","x",1,-1,a,t,-e,r,i,1),x("x","z","y",1,1,e,a,t,n,r,2),x("x","z","y",1,-1,e,a,-t,n,r,3),x("x","y","z",1,-1,e,t,a,n,i,4),x("x","y","z",-1,-1,e,t,-a,n,i,5),this.setIndex(c),this.setAttribute("position",new bt(h,3)),this.setAttribute("normal",new bt(l,3)),this.setAttribute("uv",new bt(d,2));function x(g,b,f,v,w,m,M,A,T,R,_){let y=m/T,C=M/R,O=m/2,P=M/2,U=A/2,q=T+1,B=R+1,V=0,z=0,Z=new k;for(let ae=0;ae<B;ae++){let le=ae*C-P;for(let Ae=0;Ae<q;Ae++){let Be=Ae*y-O;Z[g]=Be*v,Z[b]=le*w,Z[f]=U,h.push(Z.x,Z.y,Z.z),Z[g]=0,Z[b]=0,Z[f]=A>0?1:-1,l.push(Z.x,Z.y,Z.z),d.push(Ae/T),d.push(1-ae/R),V+=1}}for(let ae=0;ae<R;ae++)for(let le=0;le<T;le++){let Ae=u+le+q*ae,Be=u+le+q*(ae+1),W=u+(le+1)+q*(ae+1),$=u+(le+1)+q*ae;c.push(Ae,Be,$),c.push(Be,W,$),z+=6}o.addGroup(p,z,_),p+=z,u+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Yn(s){let e={};for(let t in s){e[t]={};for(let a in s[t]){let n=s[t][a];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][a]=null):e[t][a]=n.clone():Array.isArray(n)?e[t][a]=n.slice():e[t][a]=n}}return e}function Dt(s){let e={};for(let t=0;t<s.length;t++){let a=Yn(s[t]);for(let n in a)e[n]=a[n]}return e}function Iu(s){let e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function bh(s){let e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ue.workingColorSpace}var wa={clone:Yn,merge:Dt},Cu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ku=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,rt=class extends Wt{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Cu,this.fragmentShader=ku,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Yn(e.uniforms),this.uniformsGroups=Iu(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:"c",value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:"v2",value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:"v3",value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:"m4",value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let a={};for(let n in this.extensions)this.extensions[n]===!0&&(a[n]=!0);return Object.keys(a).length>0&&(t.extensions=a),t}},fs=class extends ct{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Te,this.projectionMatrix=new Te,this.projectionMatrixInverse=new Te,this.coordinateSystem=Ta}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},hn=new k,Vl=new ue,Wl=new ue,gt=class extends fs{constructor(e=50,t=1,a=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=a,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ln*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(as*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ln*2*Math.atan(Math.tan(as*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,a){hn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(hn.x,hn.y).multiplyScalar(-e/hn.z),hn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(hn.x,hn.y).multiplyScalar(-e/hn.z)}getViewSize(e,t){return this.getViewBounds(e,Vl,Wl),t.subVectors(Wl,Vl)}setViewOffset(e,t,a,n,i,r){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=a,this.view.offsetY=n,this.view.width=i,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(as*.5*this.fov)/this.zoom,a=2*t,n=this.aspect*a,i=-.5*n,r=this.view;if(this.view!==null&&this.view.enabled){let c=r.fullWidth,h=r.fullHeight;i+=r.offsetX*n/c,t-=r.offsetY*a/h,n*=r.width/c,a*=r.height/h}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+n,t,t-a,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},bi=-90,pi=1,Ir=class extends ct{constructor(e,t,a){super(),this.type="CubeCamera",this.renderTarget=a,this.coordinateSystem=null,this.activeMipmapLevel=0;let n=new gt(bi,pi,e,t);n.layers=this.layers,this.add(n);let i=new gt(bi,pi,e,t);i.layers=this.layers,this.add(i);let r=new gt(bi,pi,e,t);r.layers=this.layers,this.add(r);let o=new gt(bi,pi,e,t);o.layers=this.layers,this.add(o);let c=new gt(bi,pi,e,t);c.layers=this.layers,this.add(c);let h=new gt(bi,pi,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[a,n,i,r,o,c]=t;for(let h of t)this.remove(h);if(e===Ta)a.up.set(0,1,0),a.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===rs)a.up.set(0,-1,0),a.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:a,activeMipmapLevel:n}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,r,o,c,h,l]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;let g=a.texture.generateMipmaps;a.texture.generateMipmaps=!1,e.setRenderTarget(a,0,n),e.render(t,i),e.setRenderTarget(a,1,n),e.render(t,r),e.setRenderTarget(a,2,n),e.render(t,o),e.setRenderTarget(a,3,n),e.render(t,c),e.setRenderTarget(a,4,n),e.render(t,h),a.texture.generateMipmaps=g,e.setRenderTarget(a,5,n),e.render(t,l),e.setRenderTarget(d,u,p),e.xr.enabled=x,a.texture.needsPMREMUpdate=!0}},us=class extends vt{constructor(e,t,a,n,i,r,o,c,h,l){e=e!==void 0?e:[],t=t!==void 0?t:Wn,super(e,t,a,n,i,r,o,c,h,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Cr=class extends xt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let a={width:e,height:e,depth:1},n=[a,a,a,a,a,a];this.texture=new us(n,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ot}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let a={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},n=new yi(5,5,5),i=new rt({name:"CubemapFromEquirect",uniforms:Yn(a.uniforms),vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,side:Bt,blending:ta});i.uniforms.tEquirect.value=t;let r=new st(n,i),o=t.minFilter;return t.minFilter===Ma&&(t.minFilter=Ot),new Ir(1,10,this).update(e,r),t.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(e,t,a,n){let i=e.getRenderTarget();for(let r=0;r<6;r++)e.setRenderTarget(this,r),e.clear(t,a,n);e.setRenderTarget(i)}};var bs=class extends ct{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ya,this.environmentIntensity=1,this.environmentRotation=new ya,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},_i=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Er,this.updateRanges=[],this.version=0,this.uuid=xa()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,a){e*=this.stride,a*=t.stride;for(let n=0,i=this.stride;n<i;n++)this.array[e+n]=t.array[a+n];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=xa()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),a=new this.constructor(t,this.stride);return a.setUsage(this.usage),a}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=xa()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Ut=new k,Mi=class s{constructor(e,t,a,n=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=a,this.normalized=n}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,a=this.data.count;t<a;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix4(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyNormalMatrix(e){for(let t=0,a=this.count;t<a;t++)Ut.fromBufferAttribute(this,t),Ut.applyNormalMatrix(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}transformDirection(e){for(let t=0,a=this.count;t<a;t++)Ut.fromBufferAttribute(this,t),Ut.transformDirection(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}getComponent(e,t){let a=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(a=ga(a,this.array)),a}setComponent(e,t,a){return this.normalized&&(a=$e(a,this.array)),this.data.array[e*this.data.stride+this.offset+t]=a,this}setX(e,t){return this.normalized&&(t=$e(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=$e(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=$e(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=$e(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ga(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ga(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ga(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ga(t,this.array)),t}setXY(e,t,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=$e(t,this.array),a=$e(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=a,this}setXYZ(e,t,a,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=$e(t,this.array),a=$e(a,this.array),n=$e(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=a,this.data.array[e+2]=n,this}setXYZW(e,t,a,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=$e(t,this.array),a=$e(a,this.array),n=$e(n,this.array),i=$e(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=a,this.data.array[e+2]=n,this.data.array[e+3]=i,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let a=0;a<this.count;a++){let n=a*this.data.stride+this.offset;for(let i=0;i<this.itemSize;i++)t.push(this.data.array[n+i])}return new it(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new s(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let a=0;a<this.count;a++){let n=a*this.data.stride+this.offset;for(let i=0;i<this.itemSize;i++)t.push(this.data.array[n+i])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}};var ql=new k,Xl=new Ke,Kl=new Ke,Pu=new k,Jl=new Te,ur=new k,Pc=new Vt,Yl=new Te,Nc=new Xa,Un=class extends st{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=zc,this.bindMatrix=new Te,this.bindMatrixInverse=new Te,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new zt),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let a=0;a<t.count;a++)this.getVertexPosition(a,ur),this.boundingBox.expandByPoint(ur)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Vt),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let a=0;a<t.count;a++)this.getVertexPosition(a,ur),this.boundingSphere.expandByPoint(ur)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let a=this.material,n=this.matrixWorld;a!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Pc.copy(this.boundingSphere),Pc.applyMatrix4(n),e.ray.intersectsSphere(Pc)!==!1&&(Yl.copy(n).invert(),Nc.copy(e.ray).applyMatrix4(Yl),!(this.boundingBox!==null&&Nc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Nc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new Ke,t=this.geometry.attributes.skinWeight;for(let a=0,n=t.count;a<n;a++){e.fromBufferAttribute(t,a);let i=1/e.manhattanLength();i!==1/0?e.multiplyScalar(i):e.set(1,0,0,0),t.setXYZW(a,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===zc?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Dd?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let a=this.skeleton,n=this.geometry;Xl.fromBufferAttribute(n.attributes.skinIndex,e),Kl.fromBufferAttribute(n.attributes.skinWeight,e),ql.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let i=0;i<4;i++){let r=Kl.getComponent(i);if(r!==0){let o=Xl.getComponent(i);Jl.multiplyMatrices(a.bones[o].matrixWorld,a.boneInverses[o]),t.addScaledVector(Pu.copy(ql).applyMatrix4(Jl),r)}}return t.applyMatrix4(this.bindMatrixInverse)}},wi=class extends ct{constructor(){super(),this.isBone=!0,this.type="Bone"}},ps=class extends vt{constructor(e=null,t=1,a=1,n,i,r,o,c,h=Tt,l=Tt,d,u){super(null,r,o,c,h,l,n,i,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:a},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Zl=new Te,Nu=new Te,ms=class s{constructor(e=[],t=[]){this.uuid=xa(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let a=0,n=this.bones.length;a<n;a++)this.boneInverses.push(new Te)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let a=new Te;this.bones[e]&&a.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(a)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let a=this.bones[e];a&&a.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let a=this.bones[e];a&&(a.parent&&a.parent.isBone?(a.matrix.copy(a.parent.matrixWorld).invert(),a.matrix.multiply(a.matrixWorld)):a.matrix.copy(a.matrixWorld),a.matrix.decompose(a.position,a.quaternion,a.scale))}}update(){let e=this.bones,t=this.boneInverses,a=this.boneMatrices,n=this.boneTexture;for(let i=0,r=e.length;i<r;i++){let o=e[i]?e[i].matrixWorld:Nu;Zl.multiplyMatrices(o,t[i]),Zl.toArray(a,i*16)}n!==null&&(n.needsUpdate=!0)}clone(){return new s(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let a=new ps(t,e,e,aa,la);return a.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=a,this}getBoneByName(e){for(let t=0,a=this.bones.length;t<a;t++){let n=this.bones[t];if(n.name===e)return n}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let a=0,n=e.bones.length;a<n;a++){let i=e.bones[a],r=t[i];r===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",i),r=new wi),this.bones.push(r),this.boneInverses.push(new Te().fromArray(e.boneInverses[a]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,a=this.boneInverses;for(let n=0,i=t.length;n<i;n++){let r=t[n];e.bones.push(r.uuid);let o=a[n];e.boneInverses.push(o.toArray())}return e}},ha=class extends it{constructor(e,t,a,n=1){super(e,t,a),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},mi=new Te,Ql=new Te,br=[],$l=new zt,Fu=new Te,Qi=new st,$i=new Vt,gs=class extends st{constructor(e,t,a){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ha(new Float32Array(a*16),16),this.instanceColor=null,this.morphTexture=null,this.count=a,this.boundingBox=null,this.boundingSphere=null;for(let n=0;n<a;n++)this.setMatrixAt(n,Fu)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new zt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let a=0;a<t;a++)this.getMatrixAt(a,mi),$l.copy(e.boundingBox).applyMatrix4(mi),this.boundingBox.union($l)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Vt),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let a=0;a<t;a++)this.getMatrixAt(a,mi),$i.copy(e.boundingSphere).applyMatrix4(mi),this.boundingSphere.union($i)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let a=t.morphTargetInfluences,n=this.morphTexture.source.data.data,i=a.length+1,r=e*i+1;for(let o=0;o<a.length;o++)a[o]=n[r+o]}raycast(e,t){let a=this.matrixWorld,n=this.count;if(Qi.geometry=this.geometry,Qi.material=this.material,Qi.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),$i.copy(this.boundingSphere),$i.applyMatrix4(a),e.ray.intersectsSphere($i)!==!1))for(let i=0;i<n;i++){this.getMatrixAt(i,mi),Ql.multiplyMatrices(a,mi),Qi.matrixWorld=Ql,Qi.raycast(e,br);for(let r=0,o=br.length;r<o;r++){let c=br[r];c.instanceId=i,c.object=this,t.push(c)}br.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new ha(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let a=t.morphTargetInfluences,n=a.length+1;this.morphTexture===null&&(this.morphTexture=new ps(new Float32Array(n*this.count),n,this.count,oo,la));let i=this.morphTexture.source.data.data,r=0;for(let h=0;h<a.length;h++)r+=a[h];let o=this.geometry.morphTargetsRelative?1:1-r,c=n*e;i[c]=o,i.set(a,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}},Fc=new k,Du=new k,Lu=new Pe,oa=class{constructor(e=new k(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,a,n){return this.normal.set(e,t,a),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,a){let n=Fc.subVectors(a,t).cross(Du.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let a=e.delta(Fc),n=this.normal.dot(a);if(n===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let i=-(e.start.dot(this.normal)+this.constant)/n;return i<0||i>1?null:t.copy(e.start).addScaledVector(a,i)}intersectsLine(e){let t=this.distanceToPoint(e.start),a=this.distanceToPoint(e.end);return t<0&&a>0||a<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let a=t||Lu.getNormalMatrix(e),n=this.coplanarPoint(Fc).applyMatrix4(e),i=this.normal.applyMatrix3(a).normalize();return this.constant=-n.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Sn=new Vt,pr=new k,Ai=class{constructor(e=new oa,t=new oa,a=new oa,n=new oa,i=new oa,r=new oa){this.planes=[e,t,a,n,i,r]}set(e,t,a,n,i,r){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(a),o[3].copy(n),o[4].copy(i),o[5].copy(r),this}copy(e){let t=this.planes;for(let a=0;a<6;a++)t[a].copy(e.planes[a]);return this}setFromProjectionMatrix(e,t=Ta){let a=this.planes,n=e.elements,i=n[0],r=n[1],o=n[2],c=n[3],h=n[4],l=n[5],d=n[6],u=n[7],p=n[8],x=n[9],g=n[10],b=n[11],f=n[12],v=n[13],w=n[14],m=n[15];if(a[0].setComponents(c-i,u-h,b-p,m-f).normalize(),a[1].setComponents(c+i,u+h,b+p,m+f).normalize(),a[2].setComponents(c+r,u+l,b+x,m+v).normalize(),a[3].setComponents(c-r,u-l,b-x,m-v).normalize(),a[4].setComponents(c-o,u-d,b-g,m-w).normalize(),t===Ta)a[5].setComponents(c+o,u+d,b+g,m+w).normalize();else if(t===rs)a[5].setComponents(o,d,g,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Sn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Sn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Sn)}intersectsSprite(e){return Sn.center.set(0,0,0),Sn.radius=.7071067811865476,Sn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Sn)}intersectsSphere(e){let t=this.planes,a=e.center,n=-e.radius;for(let i=0;i<6;i++)if(t[i].distanceToPoint(a)<n)return!1;return!0}intersectsBox(e){let t=this.planes;for(let a=0;a<6;a++){let n=t[a];if(pr.x=n.normal.x>0?e.max.x:e.min.x,pr.y=n.normal.y>0?e.max.y:e.min.y,pr.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(pr)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let a=0;a<6;a++)if(t[a].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var On=class extends Wt{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ge(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},kr=new k,Pr=new k,ed=new Te,es=new Xa,mr=new Vt,Dc=new k,td=new k,zn=class extends ct{constructor(e=new Et,t=new On){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,a=[0];for(let n=1,i=t.count;n<i;n++)kr.fromBufferAttribute(t,n-1),Pr.fromBufferAttribute(t,n),a[n]=a[n-1],a[n]+=kr.distanceTo(Pr);e.setAttribute("lineDistance",new bt(a,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let a=this.geometry,n=this.matrixWorld,i=e.params.Line.threshold,r=a.drawRange;if(a.boundingSphere===null&&a.computeBoundingSphere(),mr.copy(a.boundingSphere),mr.applyMatrix4(n),mr.radius+=i,e.ray.intersectsSphere(mr)===!1)return;ed.copy(n).invert(),es.copy(e.ray).applyMatrix4(ed);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,h=this.isLineSegments?2:1,l=a.index,u=a.attributes.position;if(l!==null){let p=Math.max(0,r.start),x=Math.min(l.count,r.start+r.count);for(let g=p,b=x-1;g<b;g+=h){let f=l.getX(g),v=l.getX(g+1),w=gr(this,e,es,c,f,v);w&&t.push(w)}if(this.isLineLoop){let g=l.getX(x-1),b=l.getX(p),f=gr(this,e,es,c,g,b);f&&t.push(f)}}else{let p=Math.max(0,r.start),x=Math.min(u.count,r.start+r.count);for(let g=p,b=x-1;g<b;g+=h){let f=gr(this,e,es,c,g,g+1);f&&t.push(f)}if(this.isLineLoop){let g=gr(this,e,es,c,x-1,p);g&&t.push(g)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,a=Object.keys(t);if(a.length>0){let n=t[a[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,r=n.length;i<r;i++){let o=n[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=i}}}}};function gr(s,e,t,a,n,i){let r=s.geometry.attributes.position;if(kr.fromBufferAttribute(r,n),Pr.fromBufferAttribute(r,i),t.distanceSqToSegment(kr,Pr,Dc,td)>a)return;Dc.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(Dc);if(!(c<e.near||c>e.far))return{distance:c,point:td.clone().applyMatrix4(s.matrixWorld),index:n,face:null,faceIndex:null,barycoord:null,object:s}}var ad=new k,nd=new k,Ei=class extends zn{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,a=[];for(let n=0,i=t.count;n<i;n+=2)ad.fromBufferAttribute(t,n),nd.fromBufferAttribute(t,n+1),a[n]=n===0?0:a[n-1],a[n+1]=a[n]+ad.distanceTo(nd);e.setAttribute("lineDistance",new bt(a,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},xs=class extends zn{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Si=class extends Wt{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ge(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},id=new Te,jc=new Xa,xr=new Vt,vr=new k,vs=class extends ct{constructor(e=new Et,t=new Si){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let a=this.geometry,n=this.matrixWorld,i=e.params.Points.threshold,r=a.drawRange;if(a.boundingSphere===null&&a.computeBoundingSphere(),xr.copy(a.boundingSphere),xr.applyMatrix4(n),xr.radius+=i,e.ray.intersectsSphere(xr)===!1)return;id.copy(n).invert(),jc.copy(e.ray).applyMatrix4(id);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,h=a.index,d=a.attributes.position;if(h!==null){let u=Math.max(0,r.start),p=Math.min(h.count,r.start+r.count);for(let x=u,g=p;x<g;x++){let b=h.getX(x);vr.fromBufferAttribute(d,b),sd(vr,b,c,n,e,t,this)}}else{let u=Math.max(0,r.start),p=Math.min(d.count,r.start+r.count);for(let x=u,g=p;x<g;x++)vr.fromBufferAttribute(d,x),sd(vr,x,c,n,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,a=Object.keys(t);if(a.length>0){let n=t[a[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,r=n.length;i<r;i++){let o=n[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=i}}}}};function sd(s,e,t,a,n,i,r){let o=jc.distanceSqToPoint(s);if(o<t){let c=new k;jc.closestPointToPoint(s,c),c.applyMatrix4(a);let h=n.ray.origin.distanceTo(c);if(h<n.near||h>n.far)return;i.push({distance:h,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:r})}}var $t=class extends ct{constructor(){super(),this.isGroup=!0,this.type="Group"}};var Ti=class extends vt{constructor(e,t,a,n,i,r,o,c,h){super(e,t,a,n,i,r,o,c,h),this.isCanvasTexture=!0,this.needsUpdate=!0}},ys=class extends vt{constructor(e,t,a,n,i,r,o,c,h,l=Cn){if(l!==Cn&&l!==Nn)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");a===void 0&&l===Cn&&(a=gn),a===void 0&&l===Nn&&(a=Kn),super(null,n,i,r,o,c,l,a,h),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Tt,this.minFilter=c!==void 0?c:Tt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}};var Ri=class s extends Et{constructor(e=1,t=32,a=0,n=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:a,thetaLength:n},t=Math.max(3,t);let i=[],r=[],o=[],c=[],h=new k,l=new ue;r.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let d=0,u=3;d<=t;d++,u+=3){let p=a+d/t*n;h.x=e*Math.cos(p),h.y=e*Math.sin(p),r.push(h.x,h.y,h.z),o.push(0,0,1),l.x=(r[u]/e+1)/2,l.y=(r[u+1]/e+1)/2,c.push(l.x,l.y)}for(let d=1;d<=t;d++)i.push(d,d+1,0);this.setIndex(i),this.setAttribute("position",new bt(r,3)),this.setAttribute("normal",new bt(o,3)),this.setAttribute("uv",new bt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.segments,e.thetaStart,e.thetaLength)}};var un=class s extends Et{constructor(e=1,t=1,a=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:a,heightSegments:n};let i=e/2,r=t/2,o=Math.floor(a),c=Math.floor(n),h=o+1,l=c+1,d=e/o,u=t/c,p=[],x=[],g=[],b=[];for(let f=0;f<l;f++){let v=f*u-r;for(let w=0;w<h;w++){let m=w*d-i;x.push(m,-v,0),g.push(0,0,1),b.push(w/o),b.push(1-f/c)}}for(let f=0;f<c;f++)for(let v=0;v<o;v++){let w=v+h*f,m=v+h*(f+1),M=v+1+h*(f+1),A=v+1+h*f;p.push(w,m,A),p.push(m,M,A)}this.setIndex(p),this.setAttribute("position",new bt(x,3)),this.setAttribute("normal",new bt(g,3)),this.setAttribute("uv",new bt(b,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.widthSegments,e.heightSegments)}};var _s=class extends rt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Ka=class extends Wt{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ge(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=hh,this.normalScale=new ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ya,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},qt=class extends Ka{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ue(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Le(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ge(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ge(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ge(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Nr=class extends Wt{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Od,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Fr=class extends Wt{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function yr(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function Uu(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Ou(s){function e(n,i){return s[n]-s[i]}let t=s.length,a=new Array(t);for(let n=0;n!==t;++n)a[n]=n;return a.sort(e),a}function rd(s,e,t){let a=s.length,n=new s.constructor(a);for(let i=0,r=0;r!==a;++i){let o=t[i]*e;for(let c=0;c!==e;++c)n[r++]=s[o+c]}return n}function $d(s,e,t,a){let n=1,i=s[0];for(;i!==void 0&&i[a]===void 0;)i=s[n++];if(i===void 0)return;let r=i[a];if(r!==void 0)if(Array.isArray(r))do r=i[a],r!==void 0&&(e.push(i.time),t.push.apply(t,r)),i=s[n++];while(i!==void 0);else if(r.toArray!==void 0)do r=i[a],r!==void 0&&(e.push(i.time),r.toArray(t,t.length)),i=s[n++];while(i!==void 0);else do r=i[a],r!==void 0&&(e.push(i.time),t.push(r)),i=s[n++];while(i!==void 0)}var Ja=class{constructor(e,t,a,n){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new t.constructor(a),this.sampleValues=t,this.valueSize=a,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,a=this._cachedIndex,n=t[a],i=t[a-1];e:{t:{let r;a:{n:if(!(e<n)){for(let o=a+2;;){if(n===void 0){if(e<i)break n;return a=t.length,this._cachedIndex=a,this.copySampleValue_(a-1)}if(a===o)break;if(i=n,n=t[++a],e<n)break t}r=t.length;break a}if(!(e>=i)){let o=t[1];e<o&&(a=2,i=o);for(let c=a-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(a===c)break;if(n=i,i=t[--a-1],e>=i)break t}r=a,a=0;break a}break e}for(;a<r;){let o=a+r>>>1;e<t[o]?r=o:a=o+1}if(n=t[a],i=t[a-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return a=t.length,this._cachedIndex=a,this.copySampleValue_(a-1)}this._cachedIndex=a,this.intervalChanged_(a,i,n)}return this.interpolate_(a,i,e,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,a=this.sampleValues,n=this.valueSize,i=e*n;for(let r=0;r!==n;++r)t[r]=a[i+r];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Dr=class extends Ja{constructor(e,t,a,n){super(e,t,a,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Rn,endingEnd:Rn}}intervalChanged_(e,t,a){let n=this.parameterPositions,i=e-2,r=e+1,o=n[i],c=n[r];if(o===void 0)switch(this.getSettings_().endingStart){case In:i=e,o=2*t-a;break;case is:i=n.length-2,o=t+n[i]-n[i+1];break;default:i=e,o=a}if(c===void 0)switch(this.getSettings_().endingEnd){case In:r=e,c=2*a-t;break;case is:r=1,c=a+n[1]-n[0];break;default:r=e-1,c=t}let h=(a-t)*.5,l=this.valueSize;this._weightPrev=h/(t-o),this._weightNext=h/(c-a),this._offsetPrev=i*l,this._offsetNext=r*l}interpolate_(e,t,a,n){let i=this.resultBuffer,r=this.sampleValues,o=this.valueSize,c=e*o,h=c-o,l=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,p=this._weightNext,x=(a-t)/(n-t),g=x*x,b=g*x,f=-u*b+2*u*g-u*x,v=(1+u)*b+(-1.5-2*u)*g+(-.5+u)*x+1,w=(-1-p)*b+(1.5+p)*g+.5*x,m=p*b-p*g;for(let M=0;M!==o;++M)i[M]=f*r[l+M]+v*r[h+M]+w*r[c+M]+m*r[d+M];return i}},Ms=class extends Ja{constructor(e,t,a,n){super(e,t,a,n)}interpolate_(e,t,a,n){let i=this.resultBuffer,r=this.sampleValues,o=this.valueSize,c=e*o,h=c-o,l=(a-t)/(n-t),d=1-l;for(let u=0;u!==o;++u)i[u]=r[h+u]*d+r[c+u]*l;return i}},Lr=class extends Ja{constructor(e,t,a,n){super(e,t,a,n)}interpolate_(e){return this.copySampleValue_(e-1)}},ea=class{constructor(e,t,a,n){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=yr(t,this.TimeBufferType),this.values=yr(a,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,a;if(t.toJSON!==this.toJSON)a=t.toJSON(e);else{a={name:e.name,times:yr(e.times,Array),values:yr(e.values,Array)};let n=e.getInterpolation();n!==e.DefaultInterpolation&&(a.interpolation=n)}return a.type=e.ValueTypeName,a}InterpolantFactoryMethodDiscrete(e){return new Lr(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ms(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Dr(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Fn:t=this.InterpolantFactoryMethodDiscrete;break;case Dn:t=this.InterpolantFactoryMethodLinear;break;case Mr:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let a="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(a);return console.warn("THREE.KeyframeTrack:",a),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Fn;case this.InterpolantFactoryMethodLinear:return Dn;case this.InterpolantFactoryMethodSmooth:return Mr}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let a=0,n=t.length;a!==n;++a)t[a]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let a=0,n=t.length;a!==n;++a)t[a]*=e}return this}trim(e,t){let a=this.times,n=a.length,i=0,r=n-1;for(;i!==n&&a[i]<e;)++i;for(;r!==-1&&a[r]>t;)--r;if(++r,i!==0||r!==n){i>=r&&(r=Math.max(r,1),i=r-1);let o=this.getValueSize();this.times=a.slice(i,r),this.values=this.values.slice(i*o,r*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let a=this.times,n=this.values,i=a.length;i===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let r=null;for(let o=0;o!==i;o++){let c=a[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(r!==null&&r>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,r),e=!1;break}r=c}if(n!==void 0&&Uu(n))for(let o=0,c=n.length;o!==c;++o){let h=n[o];if(isNaN(h)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,h),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),a=this.getValueSize(),n=this.getInterpolation()===Mr,i=e.length-1,r=1;for(let o=1;o<i;++o){let c=!1,h=e[o],l=e[o+1];if(h!==l&&(o!==1||h!==e[0]))if(n)c=!0;else{let d=o*a,u=d-a,p=d+a;for(let x=0;x!==a;++x){let g=t[d+x];if(g!==t[u+x]||g!==t[p+x]){c=!0;break}}}if(c){if(o!==r){e[r]=e[o];let d=o*a,u=r*a;for(let p=0;p!==a;++p)t[u+p]=t[d+p]}++r}}if(i>0){e[r]=e[i];for(let o=i*a,c=r*a,h=0;h!==a;++h)t[c+h]=t[o+h];++r}return r!==e.length?(this.times=e.slice(0,r),this.values=t.slice(0,r*a)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),a=this.constructor,n=new a(this.name,e,t);return n.createInterpolant=this.createInterpolant,n}};ea.prototype.TimeBufferType=Float32Array;ea.prototype.ValueBufferType=Float32Array;ea.prototype.DefaultInterpolation=Dn;var Ya=class extends ea{constructor(e,t,a){super(e,t,a)}};Ya.prototype.ValueTypeName="bool";Ya.prototype.ValueBufferType=Array;Ya.prototype.DefaultInterpolation=Fn;Ya.prototype.InterpolantFactoryMethodLinear=void 0;Ya.prototype.InterpolantFactoryMethodSmooth=void 0;var ws=class extends ea{};ws.prototype.ValueTypeName="color";var Ia=class extends ea{};Ia.prototype.ValueTypeName="number";var Ur=class extends Ja{constructor(e,t,a,n){super(e,t,a,n)}interpolate_(e,t,a,n){let i=this.resultBuffer,r=this.sampleValues,o=this.valueSize,c=(a-t)/(n-t),h=e*o;for(let l=h+o;h!==l;h+=4)At.slerpFlat(i,0,r,h-o,r,h,c);return i}},Ca=class extends ea{InterpolantFactoryMethodLinear(e){return new Ur(this.times,this.values,this.getValueSize(),e)}};Ca.prototype.ValueTypeName="quaternion";Ca.prototype.InterpolantFactoryMethodSmooth=void 0;var Za=class extends ea{constructor(e,t,a){super(e,t,a)}};Za.prototype.ValueTypeName="string";Za.prototype.ValueBufferType=Array;Za.prototype.DefaultInterpolation=Fn;Za.prototype.InterpolantFactoryMethodLinear=void 0;Za.prototype.InterpolantFactoryMethodSmooth=void 0;var ka=class extends ea{};ka.prototype.ValueTypeName="vector";var Bn=class{constructor(e="",t=-1,a=[],n=zo){this.name=e,this.tracks=a,this.duration=t,this.blendMode=n,this.uuid=xa(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],a=e.tracks,n=1/(e.fps||1);for(let r=0,o=a.length;r!==o;++r)t.push(Bu(a[r]).scale(n));let i=new this(e.name,e.duration,t,e.blendMode);return i.uuid=e.uuid,i}static toJSON(e){let t=[],a=e.tracks,n={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let i=0,r=a.length;i!==r;++i)t.push(ea.toJSON(a[i]));return n}static CreateFromMorphTargetSequence(e,t,a,n){let i=t.length,r=[];for(let o=0;o<i;o++){let c=[],h=[];c.push((o+i-1)%i,o,(o+1)%i),h.push(0,1,0);let l=Ou(c);c=rd(c,1,l),h=rd(h,1,l),!n&&c[0]===0&&(c.push(i),h.push(h[0])),r.push(new Ia(".morphTargetInfluences["+t[o].name+"]",c,h).scale(1/a))}return new this(e,-1,r)}static findByName(e,t){let a=e;if(!Array.isArray(e)){let n=e;a=n.geometry&&n.geometry.animations||n.animations}for(let n=0;n<a.length;n++)if(a[n].name===t)return a[n];return null}static CreateClipsFromMorphTargetSequences(e,t,a){let n={},i=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){let h=e[o],l=h.name.match(i);if(l&&l.length>1){let d=l[1],u=n[d];u||(n[d]=u=[]),u.push(h)}}let r=[];for(let o in n)r.push(this.CreateFromMorphTargetSequence(o,n[o],t,a));return r}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let a=function(d,u,p,x,g){if(p.length!==0){let b=[],f=[];$d(p,b,f,x),b.length!==0&&g.push(new d(u,b,f))}},n=[],i=e.name||"default",r=e.fps||30,o=e.blendMode,c=e.length||-1,h=e.hierarchy||[];for(let d=0;d<h.length;d++){let u=h[d].keys;if(!(!u||u.length===0))if(u[0].morphTargets){let p={},x;for(x=0;x<u.length;x++)if(u[x].morphTargets)for(let g=0;g<u[x].morphTargets.length;g++)p[u[x].morphTargets[g]]=-1;for(let g in p){let b=[],f=[];for(let v=0;v!==u[x].morphTargets.length;++v){let w=u[x];b.push(w.time),f.push(w.morphTarget===g?1:0)}n.push(new Ia(".morphTargetInfluence["+g+"]",b,f))}c=p.length*r}else{let p=".bones["+t[d].name+"]";a(ka,p+".position",u,"pos",n),a(Ca,p+".quaternion",u,"rot",n),a(ka,p+".scale",u,"scl",n)}}return n.length===0?null:new this(i,c,n,o)}resetDuration(){let e=this.tracks,t=0;for(let a=0,n=e.length;a!==n;++a){let i=this.tracks[a];t=Math.max(t,i.times[i.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function zu(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ia;case"vector":case"vector2":case"vector3":case"vector4":return ka;case"color":return ws;case"quaternion":return Ca;case"bool":case"boolean":return Ya;case"string":return Za}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function Bu(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=zu(s.type);if(s.times===void 0){let t=[],a=[];$d(s.keys,t,a,"value"),s.times=t,s.values=a}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}var Wa={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}},Or=class{constructor(e,t,a){let n=this,i=!1,r=0,o=0,c,h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=a,this.itemStart=function(l){o++,i===!1&&n.onStart!==void 0&&n.onStart(l,r,o),i=!0},this.itemEnd=function(l){r++,n.onProgress!==void 0&&n.onProgress(l,r,o),r===o&&(i=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(l){n.onError!==void 0&&n.onError(l)},this.resolveURL=function(l){return c?c(l):l},this.setURLModifier=function(l){return c=l,this},this.addHandler=function(l,d){return h.push(l,d),this},this.removeHandler=function(l){let d=h.indexOf(l);return d!==-1&&h.splice(d,2),this},this.getHandler=function(l){for(let d=0,u=h.length;d<u;d+=2){let p=h[d],x=h[d+1];if(p.global&&(p.lastIndex=0),p.test(l))return x}return null}}},ef=new Or,Pa=class{constructor(e){this.manager=e!==void 0?e:ef,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let a=this;return new Promise(function(n,i){a.load(e,n,t,i)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Pa.DEFAULT_MATERIAL_NAME="__DEFAULT";var Va={},Hc=class extends Error{constructor(e,t){super(e),this.response=t}},Ii=class extends Pa{constructor(e){super(e)}load(e,t,a,n){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let i=Wa.get(e);if(i!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(i),this.manager.itemEnd(e)},0),i;if(Va[e]!==void 0){Va[e].push({onLoad:t,onProgress:a,onError:n});return}Va[e]=[],Va[e].push({onLoad:t,onProgress:a,onError:n});let r=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,c=this.responseType;fetch(r).then(h=>{if(h.status===200||h.status===0){if(h.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||h.body===void 0||h.body.getReader===void 0)return h;let l=Va[e],d=h.body.getReader(),u=h.headers.get("X-File-Size")||h.headers.get("Content-Length"),p=u?parseInt(u):0,x=p!==0,g=0,b=new ReadableStream({start(f){v();function v(){d.read().then(({done:w,value:m})=>{if(w)f.close();else{g+=m.byteLength;let M=new ProgressEvent("progress",{lengthComputable:x,loaded:g,total:p});for(let A=0,T=l.length;A<T;A++){let R=l[A];R.onProgress&&R.onProgress(M)}f.enqueue(m),v()}},w=>{f.error(w)})}}});return new Response(b)}else throw new Hc(`fetch for "${h.url}" responded with ${h.status}: ${h.statusText}`,h)}).then(h=>{switch(c){case"arraybuffer":return h.arrayBuffer();case"blob":return h.blob();case"document":return h.text().then(l=>new DOMParser().parseFromString(l,o));case"json":return h.json();default:if(o===void 0)return h.text();{let d=/charset="?([^;"\s]*)"?/i.exec(o),u=d&&d[1]?d[1].toLowerCase():void 0,p=new TextDecoder(u);return h.arrayBuffer().then(x=>p.decode(x))}}}).then(h=>{Wa.add(e,h);let l=Va[e];delete Va[e];for(let d=0,u=l.length;d<u;d++){let p=l[d];p.onLoad&&p.onLoad(h)}}).catch(h=>{let l=Va[e];if(l===void 0)throw this.manager.itemError(e),h;delete Va[e];for(let d=0,u=l.length;d<u;d++){let p=l[d];p.onError&&p.onError(h)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var zr=class extends Pa{constructor(e){super(e)}load(e,t,a,n){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let i=this,r=Wa.get(e);if(r!==void 0)return i.manager.itemStart(e),setTimeout(function(){t&&t(r),i.manager.itemEnd(e)},0),r;let o=vi("img");function c(){l(),Wa.add(e,this),t&&t(this),i.manager.itemEnd(e)}function h(d){l(),n&&n(d),i.manager.itemError(e),i.manager.itemEnd(e)}function l(){o.removeEventListener("load",c,!1),o.removeEventListener("error",h,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",h,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),i.manager.itemStart(e),o.src=e,o}};var bn=class extends Pa{constructor(e){super(e)}load(e,t,a,n){let i=new vt,r=new zr(this.manager);return r.setCrossOrigin(this.crossOrigin),r.setPath(this.path),r.load(e,function(o){i.image=o,i.needsUpdate=!0,t!==void 0&&t(i)},a,n),i}},jn=class extends ct{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ge(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},As=class extends jn{constructor(e,t,a){super(e,a),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ct.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ge(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Lc=new Te,od=new k,cd=new k,Es=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ue(512,512),this.map=null,this.mapPass=null,this.matrix=new Te,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ai,this._frameExtents=new ue(1,1),this._viewportCount=1,this._viewports=[new Ke(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,a=this.matrix;od.setFromMatrixPosition(e.matrixWorld),t.position.copy(od),cd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(cd),t.updateMatrixWorld(),Lc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Lc),a.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),a.multiply(Lc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Gc=class extends Es{constructor(){super(new gt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,a=Ln*2*e.angle*this.focus,n=this.mapSize.width/this.mapSize.height,i=e.distance||t.far;(a!==t.fov||n!==t.aspect||i!==t.far)&&(t.fov=a,t.aspect=n,t.far=i,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Ss=class extends jn{constructor(e,t,a=0,n=Math.PI/3,i=0,r=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ct.DEFAULT_UP),this.updateMatrix(),this.target=new ct,this.distance=a,this.angle=n,this.penumbra=i,this.decay=r,this.map=null,this.shadow=new Gc}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},hd=new Te,ts=new k,Uc=new k,Vc=class extends Es{constructor(){super(new gt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ue(4,2),this._viewportCount=6,this._viewports=[new Ke(2,1,1,1),new Ke(0,1,1,1),new Ke(3,1,1,1),new Ke(1,1,1,1),new Ke(3,0,1,1),new Ke(1,0,1,1)],this._cubeDirections=[new k(1,0,0),new k(-1,0,0),new k(0,0,1),new k(0,0,-1),new k(0,1,0),new k(0,-1,0)],this._cubeUps=[new k(0,1,0),new k(0,1,0),new k(0,1,0),new k(0,1,0),new k(0,0,1),new k(0,0,-1)]}updateMatrices(e,t=0){let a=this.camera,n=this.matrix,i=e.distance||a.far;i!==a.far&&(a.far=i,a.updateProjectionMatrix()),ts.setFromMatrixPosition(e.matrixWorld),a.position.copy(ts),Uc.copy(a.position),Uc.add(this._cubeDirections[t]),a.up.copy(this._cubeUps[t]),a.lookAt(Uc),a.updateMatrixWorld(),n.makeTranslation(-ts.x,-ts.y,-ts.z),hd.multiplyMatrices(a.projectionMatrix,a.matrixWorldInverse),this._frustum.setFromProjectionMatrix(hd)}},Hn=class extends jn{constructor(e,t,a=0,n=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=a,this.decay=n,this.shadow=new Vc}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Qa=class extends fs{constructor(e=-1,t=1,a=1,n=-1,i=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=a,this.bottom=n,this.near=i,this.far=r,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,a,n,i,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=a,this.view.offsetY=n,this.view.width=i,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),a=(this.right+this.left)/2,n=(this.top+this.bottom)/2,i=a-e,r=a+e,o=n+t,c=n-t;if(this.view!==null&&this.view.enabled){let h=(this.right-this.left)/this.view.fullWidth/this.zoom,l=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=h*this.view.offsetX,r=i+h*this.view.width,o-=l*this.view.offsetY,c=o-l*this.view.height}this.projectionMatrix.makeOrthographic(i,r,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Wc=class extends Es{constructor(){super(new Qa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Gn=class extends jn{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ct.DEFAULT_UP),this.updateMatrix(),this.target=new ct,this.shadow=new Wc}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var $a=class{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let a=0,n=e.length;a<n;a++)t+=String.fromCharCode(e[a]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}},Ci=class extends Et{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}};var Ts=class extends Pa{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,a,n){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let i=this,r=Wa.get(e);if(r!==void 0){if(i.manager.itemStart(e),r.then){r.then(h=>{t&&t(h),i.manager.itemEnd(e)}).catch(h=>{n&&n(h)});return}return setTimeout(function(){t&&t(r),i.manager.itemEnd(e)},0),r}let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;let c=fetch(e,o).then(function(h){return h.blob()}).then(function(h){return createImageBitmap(h,Object.assign(i.options,{colorSpaceConversion:"none"}))}).then(function(h){return Wa.add(e,h),t&&t(h),i.manager.itemEnd(e),h}).catch(function(h){n&&n(h),Wa.remove(e),i.manager.itemError(e),i.manager.itemEnd(e)});Wa.add(e,c),i.manager.itemStart(e)}};var Br=class extends gt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Vn=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=ld(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=ld();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function ld(){return performance.now()}var jr=class{constructor(e,t,a){this.binding=e,this.valueSize=a;let n,i,r;switch(t){case"quaternion":n=this._slerp,i=this._slerpAdditive,r=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(a*6),this._workIndex=5;break;case"string":case"bool":n=this._select,i=this._select,r=this._setAdditiveIdentityOther,this.buffer=new Array(a*5);break;default:n=this._lerp,i=this._lerpAdditive,r=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(a*5)}this._mixBufferRegion=n,this._mixBufferRegionAdditive=i,this._setIdentity=r,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let a=this.buffer,n=this.valueSize,i=e*n+n,r=this.cumulativeWeight;if(r===0){for(let o=0;o!==n;++o)a[i+o]=a[o];r=t}else{r+=t;let o=t/r;this._mixBufferRegion(a,i,0,o,n)}this.cumulativeWeight=r}accumulateAdditive(e){let t=this.buffer,a=this.valueSize,n=a*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,n,0,e,a),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,a=this.buffer,n=e*t+t,i=this.cumulativeWeight,r=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,i<1){let c=t*this._origIndex;this._mixBufferRegion(a,n,c,1-i,t)}r>0&&this._mixBufferRegionAdditive(a,n,this._addIndex*t,1,t);for(let c=t,h=t+t;c!==h;++c)if(a[c]!==a[c+t]){o.setValue(a,n);break}}saveOriginalState(){let e=this.binding,t=this.buffer,a=this.valueSize,n=a*this._origIndex;e.getValue(t,n);for(let i=a,r=n;i!==r;++i)t[i]=t[n+i%a];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let a=e;a<t;a++)this.buffer[a]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let a=0;a<this.valueSize;a++)this.buffer[t+a]=this.buffer[e+a]}_select(e,t,a,n,i){if(n>=.5)for(let r=0;r!==i;++r)e[t+r]=e[a+r]}_slerp(e,t,a,n){At.slerpFlat(e,t,e,t,e,a,n)}_slerpAdditive(e,t,a,n,i){let r=this._workIndex*i;At.multiplyQuaternionsFlat(e,r,e,t,e,a),At.slerpFlat(e,t,e,t,e,r,n)}_lerp(e,t,a,n,i){let r=1-n;for(let o=0;o!==i;++o){let c=t+o;e[c]=e[c]*r+e[a+o]*n}}_lerpAdditive(e,t,a,n,i){for(let r=0;r!==i;++r){let o=t+r;e[o]=e[o]+e[a+r]*n}}},ph="\\[\\]\\.:\\/",ju=new RegExp("["+ph+"]","g"),mh="[^"+ph+"]",Hu="[^"+ph.replace("\\.","")+"]",Gu=/((?:WC+[\/:])*)/.source.replace("WC",mh),Vu=/(WCOD+)?/.source.replace("WCOD",Hu),Wu=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",mh),qu=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",mh),Xu=new RegExp("^"+Gu+Vu+Wu+qu+"$"),Ku=["material","materials","bones","map"],qc=class{constructor(e,t,a){let n=a||et.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,n)}getValue(e,t){this.bind();let a=this._targetGroup.nCachedObjects_,n=this._bindings[a];n!==void 0&&n.getValue(e,t)}setValue(e,t){let a=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=a.length;n!==i;++n)a[n].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,a=e.length;t!==a;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,a=e.length;t!==a;++t)e[t].unbind()}},et=class s{constructor(e,t,a){this.path=t,this.parsedPath=a||s.parseTrackName(t),this.node=s.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,a){return e&&e.isAnimationObjectGroup?new s.Composite(e,t,a):new s(e,t,a)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(ju,"")}static parseTrackName(e){let t=Xu.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let a={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},n=a.nodeName&&a.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){let i=a.nodeName.substring(n+1);Ku.indexOf(i)!==-1&&(a.nodeName=a.nodeName.substring(0,n),a.objectName=i)}if(a.propertyName===null||a.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return a}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let a=e.skeleton.getBoneByName(t);if(a!==void 0)return a}if(e.children){let a=function(i){for(let r=0;r<i.length;r++){let o=i[r];if(o.name===t||o.uuid===t)return o;let c=a(o.children);if(c)return c}return null},n=a(e.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let a=this.resolvedProperty;for(let n=0,i=a.length;n!==i;++n)e[t++]=a[n]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let a=this.resolvedProperty;for(let n=0,i=a.length;n!==i;++n)a[n]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let a=this.resolvedProperty;for(let n=0,i=a.length;n!==i;++n)a[n]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let a=this.resolvedProperty;for(let n=0,i=a.length;n!==i;++n)a[n]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,a=t.objectName,n=t.propertyName,i=t.propertyIndex;if(e||(e=s.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(a){let h=t.objectIndex;switch(a){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let l=0;l<e.length;l++)if(e[l].name===h){h=l;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[a]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[a]}if(h!==void 0){if(e[h]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[h]}}let r=e[n];if(r===void 0){let h=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+h+"."+n+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(i!==void 0){if(n==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[i]!==void 0&&(i=e.morphTargetDictionary[i])}c=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=i}else r.fromArray!==void 0&&r.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(c=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=n;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};et.Composite=qc;et.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};et.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};et.prototype.GetterByBindingType=[et.prototype._getValue_direct,et.prototype._getValue_array,et.prototype._getValue_arrayElement,et.prototype._getValue_toArray];et.prototype.SetterByBindingTypeAndVersioning=[[et.prototype._setValue_direct,et.prototype._setValue_direct_setNeedsUpdate,et.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[et.prototype._setValue_array,et.prototype._setValue_array_setNeedsUpdate,et.prototype._setValue_array_setMatrixWorldNeedsUpdate],[et.prototype._setValue_arrayElement,et.prototype._setValue_arrayElement_setNeedsUpdate,et.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[et.prototype._setValue_fromArray,et.prototype._setValue_fromArray_setNeedsUpdate,et.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Hr=class{constructor(e,t,a=null,n=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=a,this.blendMode=n;let i=t.tracks,r=i.length,o=new Array(r),c={endingStart:Rn,endingEnd:Rn};for(let h=0;h!==r;++h){let l=i[h].createInterpolant(null);o[h]=l,l.settings=c}this._interpolantSettings=c,this._interpolants=o,this._propertyBindings=new Array(r),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Us,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,a){if(e.fadeOut(t),this.fadeIn(t),a){let n=this._clip.duration,i=e._clip.duration,r=i/n,o=n/i;e.warp(1,r,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,a){return e.crossFadeFrom(this,t,a)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,a){let n=this._mixer,i=n.time,r=this.timeScale,o=this._timeScaleInterpolant;o===null&&(o=n._lendControlInterpolant(),this._timeScaleInterpolant=o);let c=o.parameterPositions,h=o.sampleValues;return c[0]=i,c[1]=i+a,h[0]=e/r,h[1]=t/r,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,a,n){if(!this.enabled){this._updateWeight(e);return}let i=this._startTime;if(i!==null){let c=(e-i)*a;c<0||a===0?t=0:(this._startTime=null,t=a*c)}t*=this._updateTimeScale(e);let r=this._updateTime(t),o=this._updateWeight(e);if(o>0){let c=this._interpolants,h=this._propertyBindings;switch(this.blendMode){case Ud:for(let l=0,d=c.length;l!==d;++l)c[l].evaluate(r),h[l].accumulateAdditive(o);break;case zo:default:for(let l=0,d=c.length;l!==d;++l)c[l].evaluate(r),h[l].accumulate(n,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let a=this._weightInterpolant;if(a!==null){let n=a.evaluate(e)[0];t*=n,e>a.parameterPositions[1]&&(this.stopFading(),n===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let a=this._timeScaleInterpolant;if(a!==null){let n=a.evaluate(e)[0];t*=n,e>a.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,a=this.loop,n=this.time+e,i=this._loopCount,r=a===Ld;if(e===0)return i===-1?n:r&&(i&1)===1?t-n:n;if(a===Oo){i===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(n>=t)n=t;else if(n<0)n=0;else{this.time=n;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=n,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(i===-1&&(e>=0?(i=0,this._setEndings(!0,this.repetitions===0,r)):this._setEndings(this.repetitions===0,!0,r)),n>=t||n<0){let o=Math.floor(n/t);n-=t*o,i+=Math.abs(o);let c=this.repetitions-i;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,n=e>0?t:0,this.time=n,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(c===1){let h=e<0;this._setEndings(h,!h,r)}else this._setEndings(!1,!1,r);this._loopCount=i,this.time=n,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=n;if(r&&(i&1)===1)return t-n}return n}_setEndings(e,t,a){let n=this._interpolantSettings;a?(n.endingStart=In,n.endingEnd=In):(e?n.endingStart=this.zeroSlopeAtStart?In:Rn:n.endingStart=is,t?n.endingEnd=this.zeroSlopeAtEnd?In:Rn:n.endingEnd=is)}_scheduleFading(e,t,a){let n=this._mixer,i=n.time,r=this._weightInterpolant;r===null&&(r=n._lendControlInterpolant(),this._weightInterpolant=r);let o=r.parameterPositions,c=r.sampleValues;return o[0]=i,c[0]=t,o[1]=i+e,c[1]=a,this}},Ju=new Float32Array(1),Rs=class extends va{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){let a=e._localRoot||this._root,n=e._clip.tracks,i=n.length,r=e._propertyBindings,o=e._interpolants,c=a.uuid,h=this._bindingsByRootAndName,l=h[c];l===void 0&&(l={},h[c]=l);for(let d=0;d!==i;++d){let u=n[d],p=u.name,x=l[p];if(x!==void 0)++x.referenceCount,r[d]=x;else{if(x=r[d],x!==void 0){x._cacheIndex===null&&(++x.referenceCount,this._addInactiveBinding(x,c,p));continue}let g=t&&t._propertyBindings[d].binding.parsedPath;x=new jr(et.create(a,p,g),u.ValueTypeName,u.getValueSize()),++x.referenceCount,this._addInactiveBinding(x,c,p),r[d]=x}o[d].resultBuffer=x.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let a=(e._localRoot||this._root).uuid,n=e._clip.uuid,i=this._actionsByClip[n];this._bindAction(e,i&&i.knownActions[0]),this._addInactiveAction(e,n,a)}let t=e._propertyBindings;for(let a=0,n=t.length;a!==n;++a){let i=t[a];i.useCount++===0&&(this._lendBinding(i),i.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let a=0,n=t.length;a!==n;++a){let i=t[a];--i.useCount===0&&(i.restoreOriginalState(),this._takeBackBinding(i))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,a){let n=this._actions,i=this._actionsByClip,r=i[t];if(r===void 0)r={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,i[t]=r;else{let o=r.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=n.length,n.push(e),r.actionByRoot[a]=e}_removeInactiveAction(e){let t=this._actions,a=t[t.length-1],n=e._cacheIndex;a._cacheIndex=n,t[n]=a,t.pop(),e._cacheIndex=null;let i=e._clip.uuid,r=this._actionsByClip,o=r[i],c=o.knownActions,h=c[c.length-1],l=e._byClipCacheIndex;h._byClipCacheIndex=l,c[l]=h,c.pop(),e._byClipCacheIndex=null;let d=o.actionByRoot,u=(e._localRoot||this._root).uuid;delete d[u],c.length===0&&delete r[i],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let a=0,n=t.length;a!==n;++a){let i=t[a];--i.referenceCount===0&&this._removeInactiveBinding(i)}}_lendAction(e){let t=this._actions,a=e._cacheIndex,n=this._nActiveActions++,i=t[n];e._cacheIndex=n,t[n]=e,i._cacheIndex=a,t[a]=i}_takeBackAction(e){let t=this._actions,a=e._cacheIndex,n=--this._nActiveActions,i=t[n];e._cacheIndex=n,t[n]=e,i._cacheIndex=a,t[a]=i}_addInactiveBinding(e,t,a){let n=this._bindingsByRootAndName,i=this._bindings,r=n[t];r===void 0&&(r={},n[t]=r),r[a]=e,e._cacheIndex=i.length,i.push(e)}_removeInactiveBinding(e){let t=this._bindings,a=e.binding,n=a.rootNode.uuid,i=a.path,r=this._bindingsByRootAndName,o=r[n],c=t[t.length-1],h=e._cacheIndex;c._cacheIndex=h,t[h]=c,t.pop(),delete o[i],Object.keys(o).length===0&&delete r[n]}_lendBinding(e){let t=this._bindings,a=e._cacheIndex,n=this._nActiveBindings++,i=t[n];e._cacheIndex=n,t[n]=e,i._cacheIndex=a,t[a]=i}_takeBackBinding(e){let t=this._bindings,a=e._cacheIndex,n=--this._nActiveBindings,i=t[n];e._cacheIndex=n,t[n]=e,i._cacheIndex=a,t[a]=i}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,a=e[t];return a===void 0&&(a=new Ms(new Float32Array(2),new Float32Array(2),1,Ju),a.__cacheIndex=t,e[t]=a),a}_takeBackControlInterpolant(e){let t=this._controlInterpolants,a=e.__cacheIndex,n=--this._nActiveControlInterpolants,i=t[n];e.__cacheIndex=n,t[n]=e,i.__cacheIndex=a,t[a]=i}clipAction(e,t,a){let n=t||this._root,i=n.uuid,r=typeof e=="string"?Bn.findByName(n,e):e,o=r!==null?r.uuid:e,c=this._actionsByClip[o],h=null;if(a===void 0&&(r!==null?a=r.blendMode:a=zo),c!==void 0){let d=c.actionByRoot[i];if(d!==void 0&&d.blendMode===a)return d;h=c.knownActions[0],r===null&&(r=h._clip)}if(r===null)return null;let l=new Hr(this,r,t,a);return this._bindAction(l,h),this._addInactiveAction(l,o,i),l}existingAction(e,t){let a=t||this._root,n=a.uuid,i=typeof e=="string"?Bn.findByName(a,e):e,r=i?i.uuid:e,o=this._actionsByClip[r];return o!==void 0&&o.actionByRoot[n]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let a=t-1;a>=0;--a)e[a].stop();return this}update(e){e*=this.timeScale;let t=this._actions,a=this._nActiveActions,n=this.time+=e,i=Math.sign(e),r=this._accuIndex^=1;for(let h=0;h!==a;++h)t[h]._update(n,e,i,r);let o=this._bindings,c=this._nActiveBindings;for(let h=0;h!==c;++h)o[h].apply(r);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,a=e.uuid,n=this._actionsByClip,i=n[a];if(i!==void 0){let r=i.knownActions;for(let o=0,c=r.length;o!==c;++o){let h=r[o];this._deactivateAction(h);let l=h._cacheIndex,d=t[t.length-1];h._cacheIndex=null,h._byClipCacheIndex=null,d._cacheIndex=l,t[l]=d,t.pop(),this._removeInactiveBindingsForAction(h)}delete n[a]}}uncacheRoot(e){let t=e.uuid,a=this._actionsByClip;for(let r in a){let o=a[r].actionByRoot,c=o[t];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}let n=this._bindingsByRootAndName,i=n[t];if(i!==void 0)for(let r in i){let o=i[r];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){let a=this.existingAction(e,t);a!==null&&(this._deactivateAction(a),this._removeInactiveAction(a))}};var ki=class{constructor(e=1,t=0,a=0){return this.radius=e,this.phi=t,this.theta=a,this}set(e,t,a){return this.radius=e,this.phi=t,this.theta=a,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Le(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,a){return this.radius=Math.sqrt(e*e+t*t+a*a),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,a),this.phi=Math.acos(Le(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var ln=new k,_r=new Te,Oc=new Te,Is=class extends Ei{constructor(e){let t=tf(e),a=new Et,n=[],i=[],r=new ge(0,0,1),o=new ge(0,1,0);for(let h=0;h<t.length;h++){let l=t[h];l.parent&&l.parent.isBone&&(n.push(0,0,0),n.push(0,0,0),i.push(r.r,r.g,r.b),i.push(o.r,o.g,o.b))}a.setAttribute("position",new bt(n,3)),a.setAttribute("color",new bt(i,3));let c=new On({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(a,c),this.isSkeletonHelper=!0,this.type="SkeletonHelper",this.root=e,this.bones=t,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1}updateMatrixWorld(e){let t=this.bones,a=this.geometry,n=a.getAttribute("position");Oc.copy(this.root.matrixWorld).invert();for(let i=0,r=0;i<t.length;i++){let o=t[i];o.parent&&o.parent.isBone&&(_r.multiplyMatrices(Oc,o.matrixWorld),ln.setFromMatrixPosition(_r),n.setXYZ(r,ln.x,ln.y,ln.z),_r.multiplyMatrices(Oc,o.parent.matrixWorld),ln.setFromMatrixPosition(_r),n.setXYZ(r+1,ln.x,ln.y,ln.z),r+=2)}a.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(e)}dispose(){this.geometry.dispose(),this.material.dispose()}};function tf(s){let e=[];s.isBone===!0&&e.push(s);for(let t=0;t<s.children.length;t++)e.push.apply(e,tf(s.children[t]));return e}var Cs=class extends va{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}};function gh(s,e,t,a){let n=Yu(a);switch(t){case ah:return s*e;case ih:return s*e;case sh:return s*e*2;case oo:return s*e/n.components*n.byteLength;case co:return s*e/n.components*n.byteLength;case rh:return s*e*2/n.components*n.byteLength;case ho:return s*e*2/n.components*n.byteLength;case nh:return s*e*3/n.components*n.byteLength;case aa:return s*e*4/n.components*n.byteLength;case lo:return s*e*4/n.components*n.byteLength;case Ps:case Ns:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Fs:case Ds:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case uo:case po:return Math.max(s,16)*Math.max(e,8)/4;case fo:case bo:return Math.max(s,8)*Math.max(e,8)/2;case mo:case go:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case xo:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case vo:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case yo:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case _o:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Mo:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case wo:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Ao:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Eo:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case So:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case To:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Ro:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Io:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Co:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case ko:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Po:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Ls:case No:case Fo:return Math.ceil(s/4)*Math.ceil(e/4)*16;case oh:case Do:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Lo:case Uo:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Yu(s){switch(s){case Fa:case $c:return{byteLength:1,components:1};case Fi:case eh:case Ft:return{byteLength:2,components:1};case so:case ro:return{byteLength:2,components:4};case gn:case io:case la:return{byteLength:4,components:1};case th:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"171"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="171");function Sf(){let s=null,e=!1,t=null,a=null;function n(i,r){t(i,r),a=s.requestAnimationFrame(n)}return{start:function(){e!==!0&&t!==null&&(a=s.requestAnimationFrame(n),e=!0)},stop:function(){s.cancelAnimationFrame(a),e=!1},setAnimationLoop:function(i){t=i},setContext:function(i){s=i}}}function Qu(s){let e=new WeakMap;function t(o,c){let h=o.array,l=o.usage,d=h.byteLength,u=s.createBuffer();s.bindBuffer(c,u),s.bufferData(c,h,l),o.onUploadCallback();let p;if(h instanceof Float32Array)p=s.FLOAT;else if(h instanceof Uint16Array)o.isFloat16BufferAttribute?p=s.HALF_FLOAT:p=s.UNSIGNED_SHORT;else if(h instanceof Int16Array)p=s.SHORT;else if(h instanceof Uint32Array)p=s.UNSIGNED_INT;else if(h instanceof Int32Array)p=s.INT;else if(h instanceof Int8Array)p=s.BYTE;else if(h instanceof Uint8Array)p=s.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)p=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:u,type:p,bytesPerElement:h.BYTES_PER_ELEMENT,version:o.version,size:d}}function a(o,c,h){let l=c.array,d=c.updateRanges;if(s.bindBuffer(h,o),d.length===0)s.bufferSubData(h,0,l);else{d.sort((p,x)=>p.start-x.start);let u=0;for(let p=1;p<d.length;p++){let x=d[u],g=d[p];g.start<=x.start+x.count+1?x.count=Math.max(x.count,g.start+g.count-x.start):(++u,d[u]=g)}d.length=u+1;for(let p=0,x=d.length;p<x;p++){let g=d[p];s.bufferSubData(h,g.start*l.BYTES_PER_ELEMENT,l,g.start,g.count)}c.clearUpdateRanges()}c.onUploadCallback()}function n(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function i(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=e.get(o);c&&(s.deleteBuffer(c.buffer),e.delete(o))}function r(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let l=e.get(o);(!l||l.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let h=e.get(o);if(h===void 0)e.set(o,t(o,c));else if(h.version<o.version){if(h.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(h.buffer,o,c),h.version=o.version}}return{get:n,remove:i,update:r}}var $u=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,eb=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,tb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ab=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,nb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ib=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,sb=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,rb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ob=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,cb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,hb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,lb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,db=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,fb=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,ub=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,bb=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,pb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,mb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,gb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,xb=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,vb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,yb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,_b=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Mb=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,wb=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Ab=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Eb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Sb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Tb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Rb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ib="gl_FragColor = linearToOutputTexel( gl_FragColor );",Cb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,kb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Pb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Nb=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Fb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Db=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Lb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ub=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ob=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,zb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Bb=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,jb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Hb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Gb=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Vb=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Wb=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,qb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Xb=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Kb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Jb=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Yb=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Zb=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Qb=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,$b=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ep=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,tp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ap=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,np=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ip=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,sp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,rp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,op=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,cp=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,lp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,dp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,fp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,up=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bp=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,pp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,gp=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,xp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,_p=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Mp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,wp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ap=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ep=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Sp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Tp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Rp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ip=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Cp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,kp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Pp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Np=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Fp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Dp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Lp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Up=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Op=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,zp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Bp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,jp=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Hp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Gp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Vp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Wp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,qp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Xp=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Kp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Jp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Yp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Zp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Qp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$p=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,em=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tm=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,am=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,im=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,sm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,rm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,om=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,cm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,hm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,dm=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,fm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,um=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bm=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,gm=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,vm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ym=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_m=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mm=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,wm=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Am=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Em=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sm=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Tm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Rm=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Im=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Cm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,km=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,De={alphahash_fragment:$u,alphahash_pars_fragment:eb,alphamap_fragment:tb,alphamap_pars_fragment:ab,alphatest_fragment:nb,alphatest_pars_fragment:ib,aomap_fragment:sb,aomap_pars_fragment:rb,batching_pars_vertex:ob,batching_vertex:cb,begin_vertex:hb,beginnormal_vertex:lb,bsdfs:db,iridescence_fragment:fb,bumpmap_pars_fragment:ub,clipping_planes_fragment:bb,clipping_planes_pars_fragment:pb,clipping_planes_pars_vertex:mb,clipping_planes_vertex:gb,color_fragment:xb,color_pars_fragment:vb,color_pars_vertex:yb,color_vertex:_b,common:Mb,cube_uv_reflection_fragment:wb,defaultnormal_vertex:Ab,displacementmap_pars_vertex:Eb,displacementmap_vertex:Sb,emissivemap_fragment:Tb,emissivemap_pars_fragment:Rb,colorspace_fragment:Ib,colorspace_pars_fragment:Cb,envmap_fragment:kb,envmap_common_pars_fragment:Pb,envmap_pars_fragment:Nb,envmap_pars_vertex:Fb,envmap_physical_pars_fragment:Wb,envmap_vertex:Db,fog_vertex:Lb,fog_pars_vertex:Ub,fog_fragment:Ob,fog_pars_fragment:zb,gradientmap_pars_fragment:Bb,lightmap_pars_fragment:jb,lights_lambert_fragment:Hb,lights_lambert_pars_fragment:Gb,lights_pars_begin:Vb,lights_toon_fragment:qb,lights_toon_pars_fragment:Xb,lights_phong_fragment:Kb,lights_phong_pars_fragment:Jb,lights_physical_fragment:Yb,lights_physical_pars_fragment:Zb,lights_fragment_begin:Qb,lights_fragment_maps:$b,lights_fragment_end:ep,logdepthbuf_fragment:tp,logdepthbuf_pars_fragment:ap,logdepthbuf_pars_vertex:np,logdepthbuf_vertex:ip,map_fragment:sp,map_pars_fragment:rp,map_particle_fragment:op,map_particle_pars_fragment:cp,metalnessmap_fragment:hp,metalnessmap_pars_fragment:lp,morphinstance_vertex:dp,morphcolor_vertex:fp,morphnormal_vertex:up,morphtarget_pars_vertex:bp,morphtarget_vertex:pp,normal_fragment_begin:mp,normal_fragment_maps:gp,normal_pars_fragment:xp,normal_pars_vertex:vp,normal_vertex:yp,normalmap_pars_fragment:_p,clearcoat_normal_fragment_begin:Mp,clearcoat_normal_fragment_maps:wp,clearcoat_pars_fragment:Ap,iridescence_pars_fragment:Ep,opaque_fragment:Sp,packing:Tp,premultiplied_alpha_fragment:Rp,project_vertex:Ip,dithering_fragment:Cp,dithering_pars_fragment:kp,roughnessmap_fragment:Pp,roughnessmap_pars_fragment:Np,shadowmap_pars_fragment:Fp,shadowmap_pars_vertex:Dp,shadowmap_vertex:Lp,shadowmask_pars_fragment:Up,skinbase_vertex:Op,skinning_pars_vertex:zp,skinning_vertex:Bp,skinnormal_vertex:jp,specularmap_fragment:Hp,specularmap_pars_fragment:Gp,tonemapping_fragment:Vp,tonemapping_pars_fragment:Wp,transmission_fragment:qp,transmission_pars_fragment:Xp,uv_pars_fragment:Kp,uv_pars_vertex:Jp,uv_vertex:Yp,worldpos_vertex:Zp,background_vert:Qp,background_frag:$p,backgroundCube_vert:em,backgroundCube_frag:tm,cube_vert:am,cube_frag:nm,depth_vert:im,depth_frag:sm,distanceRGBA_vert:rm,distanceRGBA_frag:om,equirect_vert:cm,equirect_frag:hm,linedashed_vert:lm,linedashed_frag:dm,meshbasic_vert:fm,meshbasic_frag:um,meshlambert_vert:bm,meshlambert_frag:pm,meshmatcap_vert:mm,meshmatcap_frag:gm,meshnormal_vert:xm,meshnormal_frag:vm,meshphong_vert:ym,meshphong_frag:_m,meshphysical_vert:Mm,meshphysical_frag:wm,meshtoon_vert:Am,meshtoon_frag:Em,points_vert:Sm,points_frag:Tm,shadow_vert:Rm,shadow_frag:Im,sprite_vert:Cm,sprite_frag:km},ne={common:{diffuse:{value:new ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Pe},alphaMap:{value:null},alphaMapTransform:{value:new Pe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Pe}},envmap:{envMap:{value:null},envMapRotation:{value:new Pe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Pe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Pe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Pe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Pe},normalScale:{value:new ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Pe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Pe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Pe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Pe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Pe},alphaTest:{value:0},uvTransform:{value:new Pe}},sprite:{diffuse:{value:new ge(16777215)},opacity:{value:1},center:{value:new ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Pe},alphaMap:{value:null},alphaMapTransform:{value:new Pe},alphaTest:{value:0}}},Da={basic:{uniforms:Dt([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.fog]),vertexShader:De.meshbasic_vert,fragmentShader:De.meshbasic_frag},lambert:{uniforms:Dt([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,ne.lights,{emissive:{value:new ge(0)}}]),vertexShader:De.meshlambert_vert,fragmentShader:De.meshlambert_frag},phong:{uniforms:Dt([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,ne.lights,{emissive:{value:new ge(0)},specular:{value:new ge(1118481)},shininess:{value:30}}]),vertexShader:De.meshphong_vert,fragmentShader:De.meshphong_frag},standard:{uniforms:Dt([ne.common,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.roughnessmap,ne.metalnessmap,ne.fog,ne.lights,{emissive:{value:new ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:De.meshphysical_vert,fragmentShader:De.meshphysical_frag},toon:{uniforms:Dt([ne.common,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.gradientmap,ne.fog,ne.lights,{emissive:{value:new ge(0)}}]),vertexShader:De.meshtoon_vert,fragmentShader:De.meshtoon_frag},matcap:{uniforms:Dt([ne.common,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,{matcap:{value:null}}]),vertexShader:De.meshmatcap_vert,fragmentShader:De.meshmatcap_frag},points:{uniforms:Dt([ne.points,ne.fog]),vertexShader:De.points_vert,fragmentShader:De.points_frag},dashed:{uniforms:Dt([ne.common,ne.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:De.linedashed_vert,fragmentShader:De.linedashed_frag},depth:{uniforms:Dt([ne.common,ne.displacementmap]),vertexShader:De.depth_vert,fragmentShader:De.depth_frag},normal:{uniforms:Dt([ne.common,ne.bumpmap,ne.normalmap,ne.displacementmap,{opacity:{value:1}}]),vertexShader:De.meshnormal_vert,fragmentShader:De.meshnormal_frag},sprite:{uniforms:Dt([ne.sprite,ne.fog]),vertexShader:De.sprite_vert,fragmentShader:De.sprite_frag},background:{uniforms:{uvTransform:{value:new Pe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:De.background_vert,fragmentShader:De.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Pe}},vertexShader:De.backgroundCube_vert,fragmentShader:De.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:De.cube_vert,fragmentShader:De.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:De.equirect_vert,fragmentShader:De.equirect_frag},distanceRGBA:{uniforms:Dt([ne.common,ne.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:De.distanceRGBA_vert,fragmentShader:De.distanceRGBA_frag},shadow:{uniforms:Dt([ne.lights,ne.fog,{color:{value:new ge(0)},opacity:{value:1}}]),vertexShader:De.shadow_vert,fragmentShader:De.shadow_frag}};Da.physical={uniforms:Dt([Da.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Pe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Pe},clearcoatNormalScale:{value:new ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Pe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Pe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Pe},sheen:{value:0},sheenColor:{value:new ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Pe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Pe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Pe},transmissionSamplerSize:{value:new ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Pe},attenuationDistance:{value:0},attenuationColor:{value:new ge(0)},specularColor:{value:new ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Pe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Pe},anisotropyVector:{value:new ue},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Pe}}]),vertexShader:De.meshphysical_vert,fragmentShader:De.meshphysical_frag};var Bo={r:0,b:0,g:0},Zn=new ya,Pm=new Te;function Nm(s,e,t,a,n,i,r){let o=new ge(0),c=i===!0?0:1,h,l,d=null,u=0,p=null;function x(w){let m=w.isScene===!0?w.background:null;return m&&m.isTexture&&(m=(w.backgroundBlurriness>0?t:e).get(m)),m}function g(w){let m=!1,M=x(w);M===null?f(o,c):M&&M.isColor&&(f(M,1),m=!0);let A=s.xr.getEnvironmentBlendMode();A==="additive"?a.buffers.color.setClear(0,0,0,1,r):A==="alpha-blend"&&a.buffers.color.setClear(0,0,0,0,r),(s.autoClear||m)&&(a.buffers.depth.setTest(!0),a.buffers.depth.setMask(!0),a.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function b(w,m){let M=x(m);M&&(M.isCubeTexture||M.mapping===ks)?(l===void 0&&(l=new st(new yi(1,1,1),new rt({name:"BackgroundCubeMaterial",uniforms:Yn(Da.backgroundCube.uniforms),vertexShader:Da.backgroundCube.vertexShader,fragmentShader:Da.backgroundCube.fragmentShader,side:Bt,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(A,T,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),Zn.copy(m.backgroundRotation),Zn.x*=-1,Zn.y*=-1,Zn.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Zn.y*=-1,Zn.z*=-1),l.material.uniforms.envMap.value=M,l.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,l.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Pm.makeRotationFromEuler(Zn)),l.material.toneMapped=Ue.getTransfer(M.colorSpace)!==Je,(d!==M||u!==M.version||p!==s.toneMapping)&&(l.material.needsUpdate=!0,d=M,u=M.version,p=s.toneMapping),l.layers.enableAll(),w.unshift(l,l.geometry,l.material,0,0,null)):M&&M.isTexture&&(h===void 0&&(h=new st(new un(2,2),new rt({name:"BackgroundMaterial",uniforms:Yn(Da.background.uniforms),vertexShader:Da.background.vertexShader,fragmentShader:Da.background.fragmentShader,side:Gt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(h)),h.material.uniforms.t2D.value=M,h.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,h.material.toneMapped=Ue.getTransfer(M.colorSpace)!==Je,M.matrixAutoUpdate===!0&&M.updateMatrix(),h.material.uniforms.uvTransform.value.copy(M.matrix),(d!==M||u!==M.version||p!==s.toneMapping)&&(h.material.needsUpdate=!0,d=M,u=M.version,p=s.toneMapping),h.layers.enableAll(),w.unshift(h,h.geometry,h.material,0,0,null))}function f(w,m){w.getRGB(Bo,bh(s)),a.buffers.color.setClear(Bo.r,Bo.g,Bo.b,m,r)}function v(){l!==void 0&&(l.geometry.dispose(),l.material.dispose()),h!==void 0&&(h.geometry.dispose(),h.material.dispose())}return{getClearColor:function(){return o},setClearColor:function(w,m=1){o.set(w),c=m,f(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(w){c=w,f(o,c)},render:g,addToRenderList:b,dispose:v}}function Fm(s,e){let t=s.getParameter(s.MAX_VERTEX_ATTRIBS),a={},n=u(null),i=n,r=!1;function o(y,C,O,P,U){let q=!1,B=d(P,O,C);i!==B&&(i=B,h(i.object)),q=p(y,P,O,U),q&&x(y,P,O,U),U!==null&&e.update(U,s.ELEMENT_ARRAY_BUFFER),(q||r)&&(r=!1,m(y,C,O,P),U!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(U).buffer))}function c(){return s.createVertexArray()}function h(y){return s.bindVertexArray(y)}function l(y){return s.deleteVertexArray(y)}function d(y,C,O){let P=O.wireframe===!0,U=a[y.id];U===void 0&&(U={},a[y.id]=U);let q=U[C.id];q===void 0&&(q={},U[C.id]=q);let B=q[P];return B===void 0&&(B=u(c()),q[P]=B),B}function u(y){let C=[],O=[],P=[];for(let U=0;U<t;U++)C[U]=0,O[U]=0,P[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:O,attributeDivisors:P,object:y,attributes:{},index:null}}function p(y,C,O,P){let U=i.attributes,q=C.attributes,B=0,V=O.getAttributes();for(let z in V)if(V[z].location>=0){let ae=U[z],le=q[z];if(le===void 0&&(z==="instanceMatrix"&&y.instanceMatrix&&(le=y.instanceMatrix),z==="instanceColor"&&y.instanceColor&&(le=y.instanceColor)),ae===void 0||ae.attribute!==le||le&&ae.data!==le.data)return!0;B++}return i.attributesNum!==B||i.index!==P}function x(y,C,O,P){let U={},q=C.attributes,B=0,V=O.getAttributes();for(let z in V)if(V[z].location>=0){let ae=q[z];ae===void 0&&(z==="instanceMatrix"&&y.instanceMatrix&&(ae=y.instanceMatrix),z==="instanceColor"&&y.instanceColor&&(ae=y.instanceColor));let le={};le.attribute=ae,ae&&ae.data&&(le.data=ae.data),U[z]=le,B++}i.attributes=U,i.attributesNum=B,i.index=P}function g(){let y=i.newAttributes;for(let C=0,O=y.length;C<O;C++)y[C]=0}function b(y){f(y,0)}function f(y,C){let O=i.newAttributes,P=i.enabledAttributes,U=i.attributeDivisors;O[y]=1,P[y]===0&&(s.enableVertexAttribArray(y),P[y]=1),U[y]!==C&&(s.vertexAttribDivisor(y,C),U[y]=C)}function v(){let y=i.newAttributes,C=i.enabledAttributes;for(let O=0,P=C.length;O<P;O++)C[O]!==y[O]&&(s.disableVertexAttribArray(O),C[O]=0)}function w(y,C,O,P,U,q,B){B===!0?s.vertexAttribIPointer(y,C,O,U,q):s.vertexAttribPointer(y,C,O,P,U,q)}function m(y,C,O,P){g();let U=P.attributes,q=O.getAttributes(),B=C.defaultAttributeValues;for(let V in q){let z=q[V];if(z.location>=0){let Z=U[V];if(Z===void 0&&(V==="instanceMatrix"&&y.instanceMatrix&&(Z=y.instanceMatrix),V==="instanceColor"&&y.instanceColor&&(Z=y.instanceColor)),Z!==void 0){let ae=Z.normalized,le=Z.itemSize,Ae=e.get(Z);if(Ae===void 0)continue;let Be=Ae.buffer,W=Ae.type,$=Ae.bytesPerElement,de=W===s.INT||W===s.UNSIGNED_INT||Z.gpuType===io;if(Z.isInterleavedBufferAttribute){let ie=Z.data,Ee=ie.stride,ke=Z.offset;if(ie.isInstancedInterleavedBuffer){for(let Oe=0;Oe<z.locationSize;Oe++)f(z.location+Oe,ie.meshPerAttribute);y.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let Oe=0;Oe<z.locationSize;Oe++)b(z.location+Oe);s.bindBuffer(s.ARRAY_BUFFER,Be);for(let Oe=0;Oe<z.locationSize;Oe++)w(z.location+Oe,le/z.locationSize,W,ae,Ee*$,(ke+le/z.locationSize*Oe)*$,de)}else{if(Z.isInstancedBufferAttribute){for(let ie=0;ie<z.locationSize;ie++)f(z.location+ie,Z.meshPerAttribute);y.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let ie=0;ie<z.locationSize;ie++)b(z.location+ie);s.bindBuffer(s.ARRAY_BUFFER,Be);for(let ie=0;ie<z.locationSize;ie++)w(z.location+ie,le/z.locationSize,W,ae,le*$,le/z.locationSize*ie*$,de)}}else if(B!==void 0){let ae=B[V];if(ae!==void 0)switch(ae.length){case 2:s.vertexAttrib2fv(z.location,ae);break;case 3:s.vertexAttrib3fv(z.location,ae);break;case 4:s.vertexAttrib4fv(z.location,ae);break;default:s.vertexAttrib1fv(z.location,ae)}}}}v()}function M(){R();for(let y in a){let C=a[y];for(let O in C){let P=C[O];for(let U in P)l(P[U].object),delete P[U];delete C[O]}delete a[y]}}function A(y){if(a[y.id]===void 0)return;let C=a[y.id];for(let O in C){let P=C[O];for(let U in P)l(P[U].object),delete P[U];delete C[O]}delete a[y.id]}function T(y){for(let C in a){let O=a[C];if(O[y.id]===void 0)continue;let P=O[y.id];for(let U in P)l(P[U].object),delete P[U];delete O[y.id]}}function R(){_(),r=!0,i!==n&&(i=n,h(i.object))}function _(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:o,reset:R,resetDefaultState:_,dispose:M,releaseStatesOfGeometry:A,releaseStatesOfProgram:T,initAttributes:g,enableAttribute:b,disableUnusedAttributes:v}}function Dm(s,e,t){let a;function n(h){a=h}function i(h,l){s.drawArrays(a,h,l),t.update(l,a,1)}function r(h,l,d){d!==0&&(s.drawArraysInstanced(a,h,l,d),t.update(l,a,d))}function o(h,l,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(a,h,0,l,0,d);let p=0;for(let x=0;x<d;x++)p+=l[x];t.update(p,a,1)}function c(h,l,d,u){if(d===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let x=0;x<h.length;x++)r(h[x],l[x],u[x]);else{p.multiDrawArraysInstancedWEBGL(a,h,0,l,0,u,0,d);let x=0;for(let g=0;g<d;g++)x+=l[g]*u[g];t.update(x,a,1)}}this.setMode=n,this.render=i,this.renderInstances=r,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function Lm(s,e,t,a){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let T=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(T){return!(T!==aa&&a.convert(T)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){let R=T===Ft&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==Fa&&a.convert(T)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==la&&!R)}function c(T){if(T==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp",l=c(h);l!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",l,"instead."),h=l);let d=t.logarithmicDepthBuffer===!0,u=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_TEXTURE_SIZE),b=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),f=s.getParameter(s.MAX_VERTEX_ATTRIBS),v=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),w=s.getParameter(s.MAX_VARYING_VECTORS),m=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),M=x>0,A=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:i,getMaxPrecision:c,textureFormatReadable:r,textureTypeReadable:o,precision:h,logarithmicDepthBuffer:d,reverseDepthBuffer:u,maxTextures:p,maxVertexTextures:x,maxTextureSize:g,maxCubemapSize:b,maxAttributes:f,maxVertexUniforms:v,maxVaryings:w,maxFragmentUniforms:m,vertexTextures:M,maxSamples:A}}function Um(s){let e=this,t=null,a=0,n=!1,i=!1,r=new oa,o=new Pe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let p=d.length!==0||u||a!==0||n;return n=u,a=d.length,p},this.beginShadows=function(){i=!0,l(null)},this.endShadows=function(){i=!1},this.setGlobalState=function(d,u){t=l(d,u,0)},this.setState=function(d,u,p){let x=d.clippingPlanes,g=d.clipIntersection,b=d.clipShadows,f=s.get(d);if(!n||x===null||x.length===0||i&&!b)i?l(null):h();else{let v=i?0:a,w=v*4,m=f.clippingState||null;c.value=m,m=l(x,u,w,p);for(let M=0;M!==w;++M)m[M]=t[M];f.clippingState=m,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=v}};function h(){c.value!==t&&(c.value=t,c.needsUpdate=a>0),e.numPlanes=a,e.numIntersection=0}function l(d,u,p,x){let g=d!==null?d.length:0,b=null;if(g!==0){if(b=c.value,x!==!0||b===null){let f=p+g*4,v=u.matrixWorldInverse;o.getNormalMatrix(v),(b===null||b.length<f)&&(b=new Float32Array(f));for(let w=0,m=p;w!==g;++w,m+=4)r.copy(d[w]).applyMatrix4(v,o),r.normal.toArray(b,m),b[m+3]=r.constant}c.value=b,c.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,b}}function Om(s){let e=new WeakMap;function t(r,o){return o===to?r.mapping=Wn:o===ao&&(r.mapping=qn),r}function a(r){if(r&&r.isTexture){let o=r.mapping;if(o===to||o===ao)if(e.has(r)){let c=e.get(r).texture;return t(c,r.mapping)}else{let c=r.image;if(c&&c.height>0){let h=new Cr(c.height);return h.fromEquirectangularTexture(s,r),e.set(r,h),r.addEventListener("dispose",n),t(h.texture,r.mapping)}else return null}}return r}function n(r){let o=r.target;o.removeEventListener("dispose",n);let c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function i(){e=new WeakMap}return{get:a,dispose:i}}var Ui=4,af=[.125,.215,.35,.446,.526,.582],ei=20,xh=new Qa,nf=new ge,vh=null,yh=0,_h=0,Mh=!1,$n=(1+Math.sqrt(5))/2,Li=1/$n,sf=[new k(-$n,Li,0),new k($n,Li,0),new k(-Li,0,$n),new k(Li,0,$n),new k(0,$n,-Li),new k(0,$n,Li),new k(-1,1,-1),new k(1,1,-1),new k(-1,1,1),new k(1,1,1)],Go=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,a=.1,n=100){vh=this._renderer.getRenderTarget(),yh=this._renderer.getActiveCubeFace(),_h=this._renderer.getActiveMipmapLevel(),Mh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let i=this._allocateTargets();return i.depthBuffer=!0,this._sceneToCubeUV(e,a,n,i),t>0&&this._blur(i,0,0,t),this._applyPMREM(i),this._cleanup(i),i}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=cf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=of(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(vh,yh,_h),this._renderer.xr.enabled=Mh,e.scissorTest=!1,jo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Wn||e.mapping===qn?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),vh=this._renderer.getRenderTarget(),yh=this._renderer.getActiveCubeFace(),_h=this._renderer.getActiveMipmapLevel(),Mh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let a=t||this._allocateTargets();return this._textureToCubeUV(e,a),this._applyPMREM(a),this._cleanup(a),a}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,a={magFilter:Ot,minFilter:Ot,generateMipmaps:!1,type:Ft,format:aa,colorSpace:Rt,depthBuffer:!1},n=rf(e,t,a);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=rf(e,t,a);let{_lodMax:i}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=zm(i)),this._blurMaterial=Bm(i,e,t)}return n}_compileMaterial(e){let t=new st(this._lodPlanes[0],e);this._renderer.compile(t,xh)}_sceneToCubeUV(e,t,a,n){let o=new gt(90,1,t,a),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],l=this._renderer,d=l.autoClear,u=l.toneMapping;l.getClearColor(nf),l.toneMapping=en,l.autoClear=!1;let p=new It({name:"PMREM.Background",side:Bt,depthWrite:!1,depthTest:!1}),x=new st(new yi,p),g=!1,b=e.background;b?b.isColor&&(p.color.copy(b),e.background=null,g=!0):(p.color.copy(nf),g=!0);for(let f=0;f<6;f++){let v=f%3;v===0?(o.up.set(0,c[f],0),o.lookAt(h[f],0,0)):v===1?(o.up.set(0,0,c[f]),o.lookAt(0,h[f],0)):(o.up.set(0,c[f],0),o.lookAt(0,0,h[f]));let w=this._cubeSize;jo(n,v*w,f>2?w:0,w,w),l.setRenderTarget(n),g&&l.render(x,o),l.render(e,o)}x.geometry.dispose(),x.material.dispose(),l.toneMapping=u,l.autoClear=d,e.background=b}_textureToCubeUV(e,t){let a=this._renderer,n=e.mapping===Wn||e.mapping===qn;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=cf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=of());let i=n?this._cubemapMaterial:this._equirectMaterial,r=new st(this._lodPlanes[0],i),o=i.uniforms;o.envMap.value=e;let c=this._cubeSize;jo(t,0,0,3*c,2*c),a.setRenderTarget(t),a.render(r,xh)}_applyPMREM(e){let t=this._renderer,a=t.autoClear;t.autoClear=!1;let n=this._lodPlanes.length;for(let i=1;i<n;i++){let r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=sf[(n-i-1)%sf.length];this._blur(e,i-1,i,r,o)}t.autoClear=a}_blur(e,t,a,n,i){let r=this._pingPongRenderTarget;this._halfBlur(e,r,t,a,n,"latitudinal",i),this._halfBlur(r,e,a,a,n,"longitudinal",i)}_halfBlur(e,t,a,n,i,r,o){let c=this._renderer,h=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let l=3,d=new st(this._lodPlanes[n],h),u=h.uniforms,p=this._sizeLods[a]-1,x=isFinite(i)?Math.PI/(2*p):2*Math.PI/(2*ei-1),g=i/x,b=isFinite(i)?1+Math.floor(l*g):ei;b>ei&&console.warn(`sigmaRadians, ${i}, is too large and will clip, as it requested ${b} samples when the maximum is set to ${ei}`);let f=[],v=0;for(let T=0;T<ei;++T){let R=T/g,_=Math.exp(-R*R/2);f.push(_),T===0?v+=_:T<b&&(v+=2*_)}for(let T=0;T<f.length;T++)f[T]=f[T]/v;u.envMap.value=e.texture,u.samples.value=b,u.weights.value=f,u.latitudinal.value=r==="latitudinal",o&&(u.poleAxis.value=o);let{_lodMax:w}=this;u.dTheta.value=x,u.mipInt.value=w-a;let m=this._sizeLods[n],M=3*m*(n>w-Ui?n-w+Ui:0),A=4*(this._cubeSize-m);jo(t,M,A,3*m,2*m),c.setRenderTarget(t),c.render(d,xh)}};function zm(s){let e=[],t=[],a=[],n=s,i=s-Ui+1+af.length;for(let r=0;r<i;r++){let o=Math.pow(2,n);t.push(o);let c=1/o;r>s-Ui?c=af[r-s+Ui-1]:r===0&&(c=0),a.push(c);let h=1/(o-2),l=-h,d=1+h,u=[l,l,d,l,d,d,l,l,d,d,l,d],p=6,x=6,g=3,b=2,f=1,v=new Float32Array(g*x*p),w=new Float32Array(b*x*p),m=new Float32Array(f*x*p);for(let A=0;A<p;A++){let T=A%3*2/3-1,R=A>2?0:-1,_=[T,R,0,T+2/3,R,0,T+2/3,R+1,0,T,R,0,T+2/3,R+1,0,T,R+1,0];v.set(_,g*x*A),w.set(u,b*x*A);let y=[A,A,A,A,A,A];m.set(y,f*x*A)}let M=new Et;M.setAttribute("position",new it(v,g)),M.setAttribute("uv",new it(w,b)),M.setAttribute("faceIndex",new it(m,f)),e.push(M),n>Ui&&n--}return{lodPlanes:e,sizeLods:t,sigmas:a}}function rf(s,e,t){let a=new xt(s,e,t);return a.texture.mapping=ks,a.texture.name="PMREM.cubeUv",a.scissorTest=!0,a}function jo(s,e,t,a,n){s.viewport.set(e,t,a,n),s.scissor.set(e,t,a,n)}function Bm(s,e,t){let a=new Float32Array(ei),n=new k(0,1,0);return new rt({name:"SphericalGaussianBlur",defines:{n:ei,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:a},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:Ph(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ta,depthTest:!1,depthWrite:!1})}function of(){return new rt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ph(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ta,depthTest:!1,depthWrite:!1})}function cf(){return new rt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ph(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ta,depthTest:!1,depthWrite:!1})}function Ph(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function jm(s){let e=new WeakMap,t=null;function a(o){if(o&&o.isTexture){let c=o.mapping,h=c===to||c===ao,l=c===Wn||c===qn;if(h||l){let d=e.get(o),u=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==u)return t===null&&(t=new Go(s)),d=h?t.fromEquirectangular(o,d):t.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),d.texture;if(d!==void 0)return d.texture;{let p=o.image;return h&&p&&p.height>0||l&&p&&n(p)?(t===null&&(t=new Go(s)),d=h?t.fromEquirectangular(o):t.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),o.addEventListener("dispose",i),d.texture):null}}}return o}function n(o){let c=0,h=6;for(let l=0;l<h;l++)o[l]!==void 0&&c++;return c===h}function i(o){let c=o.target;c.removeEventListener("dispose",i);let h=e.get(c);h!==void 0&&(e.delete(c),h.dispose())}function r(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:a,dispose:r}}function Hm(s){let e={};function t(a){if(e[a]!==void 0)return e[a];let n;switch(a){case"WEBGL_depth_texture":n=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=s.getExtension(a)}return e[a]=n,n}return{has:function(a){return t(a)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(a){let n=t(a);return n===null&&Jn("THREE.WebGLRenderer: "+a+" extension not supported."),n}}}function Gm(s,e,t,a){let n={},i=new WeakMap;function r(d){let u=d.target;u.index!==null&&e.remove(u.index);for(let x in u.attributes)e.remove(u.attributes[x]);u.removeEventListener("dispose",r),delete n[u.id];let p=i.get(u);p&&(e.remove(p),i.delete(u)),a.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(d,u){return n[u.id]===!0||(u.addEventListener("dispose",r),n[u.id]=!0,t.memory.geometries++),u}function c(d){let u=d.attributes;for(let p in u)e.update(u[p],s.ARRAY_BUFFER)}function h(d){let u=[],p=d.index,x=d.attributes.position,g=0;if(p!==null){let v=p.array;g=p.version;for(let w=0,m=v.length;w<m;w+=3){let M=v[w+0],A=v[w+1],T=v[w+2];u.push(M,A,A,T,T,M)}}else if(x!==void 0){let v=x.array;g=x.version;for(let w=0,m=v.length/3-1;w<m;w+=3){let M=w+0,A=w+1,T=w+2;u.push(M,A,A,T,T,M)}}else return;let b=new(uh(u)?ds:ls)(u,1);b.version=g;let f=i.get(d);f&&e.remove(f),i.set(d,b)}function l(d){let u=i.get(d);if(u){let p=d.index;p!==null&&u.version<p.version&&h(d)}else h(d);return i.get(d)}return{get:o,update:c,getWireframeAttribute:l}}function Vm(s,e,t){let a;function n(u){a=u}let i,r;function o(u){i=u.type,r=u.bytesPerElement}function c(u,p){s.drawElements(a,p,i,u*r),t.update(p,a,1)}function h(u,p,x){x!==0&&(s.drawElementsInstanced(a,p,i,u*r,x),t.update(p,a,x))}function l(u,p,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(a,p,0,i,u,0,x);let b=0;for(let f=0;f<x;f++)b+=p[f];t.update(b,a,1)}function d(u,p,x,g){if(x===0)return;let b=e.get("WEBGL_multi_draw");if(b===null)for(let f=0;f<u.length;f++)h(u[f]/r,p[f],g[f]);else{b.multiDrawElementsInstancedWEBGL(a,p,0,i,u,0,g,0,x);let f=0;for(let v=0;v<x;v++)f+=p[v]*g[v];t.update(f,a,1)}}this.setMode=n,this.setIndex=o,this.render=c,this.renderInstances=h,this.renderMultiDraw=l,this.renderMultiDrawInstances=d}function Wm(s){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function a(i,r,o){switch(t.calls++,r){case s.TRIANGLES:t.triangles+=o*(i/3);break;case s.LINES:t.lines+=o*(i/2);break;case s.LINE_STRIP:t.lines+=o*(i-1);break;case s.LINE_LOOP:t.lines+=o*i;break;case s.POINTS:t.points+=o*i;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function n(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:n,update:a}}function qm(s,e,t){let a=new WeakMap,n=new Ke;function i(r,o,c){let h=r.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=l!==void 0?l.length:0,u=a.get(o);if(u===void 0||u.count!==d){let _=function(){T.dispose(),a.delete(o),o.removeEventListener("dispose",_)};u!==void 0&&u.texture.dispose();let p=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,b=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],v=o.morphAttributes.color||[],w=0;p===!0&&(w=1),x===!0&&(w=2),g===!0&&(w=3);let m=o.attributes.position.count*w,M=1;m>e.maxTextureSize&&(M=Math.ceil(m/e.maxTextureSize),m=e.maxTextureSize);let A=new Float32Array(m*M*4*d),T=new cs(A,m,M,d);T.type=la,T.needsUpdate=!0;let R=w*4;for(let y=0;y<d;y++){let C=b[y],O=f[y],P=v[y],U=m*M*4*y;for(let q=0;q<C.count;q++){let B=q*R;p===!0&&(n.fromBufferAttribute(C,q),A[U+B+0]=n.x,A[U+B+1]=n.y,A[U+B+2]=n.z,A[U+B+3]=0),x===!0&&(n.fromBufferAttribute(O,q),A[U+B+4]=n.x,A[U+B+5]=n.y,A[U+B+6]=n.z,A[U+B+7]=0),g===!0&&(n.fromBufferAttribute(P,q),A[U+B+8]=n.x,A[U+B+9]=n.y,A[U+B+10]=n.z,A[U+B+11]=P.itemSize===4?n.w:1)}}u={count:d,texture:T,size:new ue(m,M)},a.set(o,u),o.addEventListener("dispose",_)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",r.morphTexture,t);else{let p=0;for(let g=0;g<h.length;g++)p+=h[g];let x=o.morphTargetsRelative?1:1-p;c.getUniforms().setValue(s,"morphTargetBaseInfluence",x),c.getUniforms().setValue(s,"morphTargetInfluences",h)}c.getUniforms().setValue(s,"morphTargetsTexture",u.texture,t),c.getUniforms().setValue(s,"morphTargetsTextureSize",u.size)}return{update:i}}function Xm(s,e,t,a){let n=new WeakMap;function i(c){let h=a.render.frame,l=c.geometry,d=e.get(c,l);if(n.get(d)!==h&&(e.update(d),n.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),n.get(c)!==h&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),n.set(c,h))),c.isSkinnedMesh){let u=c.skeleton;n.get(u)!==h&&(u.update(),n.set(u,h))}return d}function r(){n=new WeakMap}function o(c){let h=c.target;h.removeEventListener("dispose",o),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:i,dispose:r}}var Tf=new vt,hf=new ys(1,1),Rf=new cs,If=new Rr,Cf=new us,lf=[],df=[],ff=new Float32Array(16),uf=new Float32Array(9),bf=new Float32Array(4);function zi(s,e,t){let a=s[0];if(a<=0||a>0)return s;let n=e*t,i=lf[n];if(i===void 0&&(i=new Float32Array(n),lf[n]=i),e!==0){a.toArray(i,0);for(let r=1,o=0;r!==e;++r)o+=t,s[r].toArray(i,o)}return i}function yt(s,e){if(s.length!==e.length)return!1;for(let t=0,a=s.length;t<a;t++)if(s[t]!==e[t])return!1;return!0}function _t(s,e){for(let t=0,a=e.length;t<a;t++)s[t]=e[t]}function Wo(s,e){let t=df[e];t===void 0&&(t=new Int32Array(e),df[e]=t);for(let a=0;a!==e;++a)t[a]=s.allocateTextureUnit();return t}function Km(s,e){let t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Jm(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;s.uniform2fv(this.addr,e),_t(t,e)}}function Ym(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(yt(t,e))return;s.uniform3fv(this.addr,e),_t(t,e)}}function Zm(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;s.uniform4fv(this.addr,e),_t(t,e)}}function Qm(s,e){let t=this.cache,a=e.elements;if(a===void 0){if(yt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),_t(t,e)}else{if(yt(t,a))return;bf.set(a),s.uniformMatrix2fv(this.addr,!1,bf),_t(t,a)}}function $m(s,e){let t=this.cache,a=e.elements;if(a===void 0){if(yt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),_t(t,e)}else{if(yt(t,a))return;uf.set(a),s.uniformMatrix3fv(this.addr,!1,uf),_t(t,a)}}function eg(s,e){let t=this.cache,a=e.elements;if(a===void 0){if(yt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),_t(t,e)}else{if(yt(t,a))return;ff.set(a),s.uniformMatrix4fv(this.addr,!1,ff),_t(t,a)}}function tg(s,e){let t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function ag(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;s.uniform2iv(this.addr,e),_t(t,e)}}function ng(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(yt(t,e))return;s.uniform3iv(this.addr,e),_t(t,e)}}function ig(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;s.uniform4iv(this.addr,e),_t(t,e)}}function sg(s,e){let t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function rg(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;s.uniform2uiv(this.addr,e),_t(t,e)}}function og(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(yt(t,e))return;s.uniform3uiv(this.addr,e),_t(t,e)}}function cg(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;s.uniform4uiv(this.addr,e),_t(t,e)}}function hg(s,e,t){let a=this.cache,n=t.allocateTextureUnit();a[0]!==n&&(s.uniform1i(this.addr,n),a[0]=n);let i;this.type===s.SAMPLER_2D_SHADOW?(hf.compareFunction=lh,i=hf):i=Tf,t.setTexture2D(e||i,n)}function lg(s,e,t){let a=this.cache,n=t.allocateTextureUnit();a[0]!==n&&(s.uniform1i(this.addr,n),a[0]=n),t.setTexture3D(e||If,n)}function dg(s,e,t){let a=this.cache,n=t.allocateTextureUnit();a[0]!==n&&(s.uniform1i(this.addr,n),a[0]=n),t.setTextureCube(e||Cf,n)}function fg(s,e,t){let a=this.cache,n=t.allocateTextureUnit();a[0]!==n&&(s.uniform1i(this.addr,n),a[0]=n),t.setTexture2DArray(e||Rf,n)}function ug(s){switch(s){case 5126:return Km;case 35664:return Jm;case 35665:return Ym;case 35666:return Zm;case 35674:return Qm;case 35675:return $m;case 35676:return eg;case 5124:case 35670:return tg;case 35667:case 35671:return ag;case 35668:case 35672:return ng;case 35669:case 35673:return ig;case 5125:return sg;case 36294:return rg;case 36295:return og;case 36296:return cg;case 35678:case 36198:case 36298:case 36306:case 35682:return hg;case 35679:case 36299:case 36307:return lg;case 35680:case 36300:case 36308:case 36293:return dg;case 36289:case 36303:case 36311:case 36292:return fg}}function bg(s,e){s.uniform1fv(this.addr,e)}function pg(s,e){let t=zi(e,this.size,2);s.uniform2fv(this.addr,t)}function mg(s,e){let t=zi(e,this.size,3);s.uniform3fv(this.addr,t)}function gg(s,e){let t=zi(e,this.size,4);s.uniform4fv(this.addr,t)}function xg(s,e){let t=zi(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function vg(s,e){let t=zi(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function yg(s,e){let t=zi(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function _g(s,e){s.uniform1iv(this.addr,e)}function Mg(s,e){s.uniform2iv(this.addr,e)}function wg(s,e){s.uniform3iv(this.addr,e)}function Ag(s,e){s.uniform4iv(this.addr,e)}function Eg(s,e){s.uniform1uiv(this.addr,e)}function Sg(s,e){s.uniform2uiv(this.addr,e)}function Tg(s,e){s.uniform3uiv(this.addr,e)}function Rg(s,e){s.uniform4uiv(this.addr,e)}function Ig(s,e,t){let a=this.cache,n=e.length,i=Wo(t,n);yt(a,i)||(s.uniform1iv(this.addr,i),_t(a,i));for(let r=0;r!==n;++r)t.setTexture2D(e[r]||Tf,i[r])}function Cg(s,e,t){let a=this.cache,n=e.length,i=Wo(t,n);yt(a,i)||(s.uniform1iv(this.addr,i),_t(a,i));for(let r=0;r!==n;++r)t.setTexture3D(e[r]||If,i[r])}function kg(s,e,t){let a=this.cache,n=e.length,i=Wo(t,n);yt(a,i)||(s.uniform1iv(this.addr,i),_t(a,i));for(let r=0;r!==n;++r)t.setTextureCube(e[r]||Cf,i[r])}function Pg(s,e,t){let a=this.cache,n=e.length,i=Wo(t,n);yt(a,i)||(s.uniform1iv(this.addr,i),_t(a,i));for(let r=0;r!==n;++r)t.setTexture2DArray(e[r]||Rf,i[r])}function Ng(s){switch(s){case 5126:return bg;case 35664:return pg;case 35665:return mg;case 35666:return gg;case 35674:return xg;case 35675:return vg;case 35676:return yg;case 5124:case 35670:return _g;case 35667:case 35671:return Mg;case 35668:case 35672:return wg;case 35669:case 35673:return Ag;case 5125:return Eg;case 36294:return Sg;case 36295:return Tg;case 36296:return Rg;case 35678:case 36198:case 36298:case 36306:case 35682:return Ig;case 35679:case 36299:case 36307:return Cg;case 35680:case 36300:case 36308:case 36293:return kg;case 36289:case 36303:case 36311:case 36292:return Pg}}var Ah=class{constructor(e,t,a){this.id=e,this.addr=a,this.cache=[],this.type=t.type,this.setValue=ug(t.type)}},Eh=class{constructor(e,t,a){this.id=e,this.addr=a,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Ng(t.type)}},Sh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,a){let n=this.seq;for(let i=0,r=n.length;i!==r;++i){let o=n[i];o.setValue(e,t[o.id],a)}}},wh=/(\w+)(\])?(\[|\.)?/g;function pf(s,e){s.seq.push(e),s.map[e.id]=e}function Fg(s,e,t){let a=s.name,n=a.length;for(wh.lastIndex=0;;){let i=wh.exec(a),r=wh.lastIndex,o=i[1],c=i[2]==="]",h=i[3];if(c&&(o=o|0),h===void 0||h==="["&&r+2===n){pf(t,h===void 0?new Ah(o,s,e):new Eh(o,s,e));break}else{let d=t.map[o];d===void 0&&(d=new Sh(o),pf(t,d)),t=d}}}var Oi=class{constructor(e,t){this.seq=[],this.map={};let a=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let n=0;n<a;++n){let i=e.getActiveUniform(t,n),r=e.getUniformLocation(t,i.name);Fg(i,r,this)}}setValue(e,t,a,n){let i=this.map[t];i!==void 0&&i.setValue(e,a,n)}setOptional(e,t,a){let n=t[a];n!==void 0&&this.setValue(e,a,n)}static upload(e,t,a,n){for(let i=0,r=t.length;i!==r;++i){let o=t[i],c=a[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,n)}}static seqWithValue(e,t){let a=[];for(let n=0,i=e.length;n!==i;++n){let r=e[n];r.id in t&&a.push(r)}return a}};function mf(s,e,t){let a=s.createShader(e);return s.shaderSource(a,t),s.compileShader(a),a}var Dg=37297,Lg=0;function Ug(s,e){let t=s.split(`
`),a=[],n=Math.max(e-6,0),i=Math.min(e+6,t.length);for(let r=n;r<i;r++){let o=r+1;a.push(`${o===e?">":" "} ${o}: ${t[r]}`)}return a.join(`
`)}var gf=new Pe;function Og(s){Ue._getMatrix(gf,Ue.workingColorSpace,s);let e=`mat3( ${gf.elements.map(t=>t.toFixed(4))} )`;switch(Ue.getTransfer(s)){case ss:return[e,"LinearTransferOETF"];case Je:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function xf(s,e,t){let a=s.getShaderParameter(e,s.COMPILE_STATUS),n=s.getShaderInfoLog(e).trim();if(a&&n==="")return"";let i=/ERROR: 0:(\d+)/.exec(n);if(i){let r=parseInt(i[1]);return t.toUpperCase()+`

`+n+`

`+Ug(s.getShaderSource(e),r)}else return n}function zg(s,e){let t=Og(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Bg(s,e){let t;switch(e){case Yr:t="Linear";break;case Zr:t="Reinhard";break;case Qr:t="Cineon";break;case $r:t="ACESFilmic";break;case eo:t="AgX";break;case Pi:t="Neutral";break;case Fd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Ho=new k;function jg(){Ue.getLuminanceCoefficients(Ho);let s=Ho.x.toFixed(4),e=Ho.y.toFixed(4),t=Ho.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Hg(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(zs).join(`
`)}function Gg(s){let e=[];for(let t in s){let a=s[t];a!==!1&&e.push("#define "+t+" "+a)}return e.join(`
`)}function Vg(s,e){let t={},a=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let n=0;n<a;n++){let i=s.getActiveAttrib(e,n),r=i.name,o=1;i.type===s.FLOAT_MAT2&&(o=2),i.type===s.FLOAT_MAT3&&(o=3),i.type===s.FLOAT_MAT4&&(o=4),t[r]={type:i.type,location:s.getAttribLocation(e,r),locationSize:o}}return t}function zs(s){return s!==""}function vf(s,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function yf(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Wg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Th(s){return s.replace(Wg,Xg)}var qg=new Map;function Xg(s,e){let t=De[e];if(t===void 0){let a=qg.get(e);if(a!==void 0)t=De[a],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,a);else throw new Error("Can not resolve #include <"+e+">")}return Th(t)}var Kg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _f(s){return s.replace(Kg,Jg)}function Jg(s,e,t,a){let n="";for(let i=parseInt(e);i<parseInt(t);i++)n+=a.replace(/\[\s*i\s*\]/g,"[ "+i+" ]").replace(/UNROLLED_LOOP_INDEX/g,i);return n}function Mf(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Yg(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Kc?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===ud?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Na&&(e="SHADOWMAP_TYPE_VSM"),e}function Zg(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Wn:case qn:e="ENVMAP_TYPE_CUBE";break;case ks:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Qg(s){let e="ENVMAP_MODE_REFLECTION";return s.envMap&&s.envMapMode===qn&&(e="ENVMAP_MODE_REFRACTION"),e}function $g(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Zc:e="ENVMAP_BLENDING_MULTIPLY";break;case Pd:e="ENVMAP_BLENDING_MIX";break;case Nd:e="ENVMAP_BLENDING_ADD";break}return e}function ex(s){let e=s.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,a=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:a,maxMip:t}}function tx(s,e,t,a){let n=s.getContext(),i=t.defines,r=t.vertexShader,o=t.fragmentShader,c=Yg(t),h=Zg(t),l=Qg(t),d=$g(t),u=ex(t),p=Hg(t),x=Gg(i),g=n.createProgram(),b,f,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(b=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(zs).join(`
`),b.length>0&&(b+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(zs).join(`
`),f.length>0&&(f+=`
`)):(b=[Mf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(zs).join(`
`),f=[Mf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+l:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==en?"#define TONE_MAPPING":"",t.toneMapping!==en?De.tonemapping_pars_fragment:"",t.toneMapping!==en?Bg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",De.colorspace_pars_fragment,zg("linearToOutputTexel",t.outputColorSpace),jg(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(zs).join(`
`)),r=Th(r),r=vf(r,t),r=yf(r,t),o=Th(o),o=vf(o,t),o=yf(o,t),r=_f(r),o=_f(o),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,b=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+b,f=["#define varying in",t.glslVersion===dh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===dh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let w=v+b+r,m=v+f+o,M=mf(n,n.VERTEX_SHADER,w),A=mf(n,n.FRAGMENT_SHADER,m);n.attachShader(g,M),n.attachShader(g,A),t.index0AttributeName!==void 0?n.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&n.bindAttribLocation(g,0,"position"),n.linkProgram(g);function T(C){if(s.debug.checkShaderErrors){let O=n.getProgramInfoLog(g).trim(),P=n.getShaderInfoLog(M).trim(),U=n.getShaderInfoLog(A).trim(),q=!0,B=!0;if(n.getProgramParameter(g,n.LINK_STATUS)===!1)if(q=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(n,g,M,A);else{let V=xf(n,M,"vertex"),z=xf(n,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(g,n.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+O+`
`+V+`
`+z)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(P===""||U==="")&&(B=!1);B&&(C.diagnostics={runnable:q,programLog:O,vertexShader:{log:P,prefix:b},fragmentShader:{log:U,prefix:f}})}n.deleteShader(M),n.deleteShader(A),R=new Oi(n,g),_=Vg(n,g)}let R;this.getUniforms=function(){return R===void 0&&T(this),R};let _;this.getAttributes=function(){return _===void 0&&T(this),_};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=n.getProgramParameter(g,Dg)),y},this.destroy=function(){a.releaseStatesOfProgram(this),n.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Lg++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=M,this.fragmentShader=A,this}var ax=0,Rh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,a=e.fragmentShader,n=this._getShaderStage(t),i=this._getShaderStage(a),r=this._getShaderCacheForMaterial(e);return r.has(n)===!1&&(r.add(n),n.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let a of t)a.usedTimes--,a.usedTimes===0&&this.shaderCache.delete(a.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,a=t.get(e);return a===void 0&&(a=new Set,t.set(e,a)),a}_getShaderStage(e){let t=this.shaderCache,a=t.get(e);return a===void 0&&(a=new Ih(e),t.set(e,a)),a}},Ih=class{constructor(e){this.id=ax++,this.code=e,this.usedTimes=0}};function nx(s,e,t,a,n,i,r){let o=new hs,c=new Rh,h=new Set,l=[],d=n.logarithmicDepthBuffer,u=n.vertexTextures,p=n.precision,x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(_){return h.add(_),_===0?"uv":`uv${_}`}function b(_,y,C,O,P){let U=O.fog,q=P.geometry,B=_.isMeshStandardMaterial?O.environment:null,V=(_.isMeshStandardMaterial?t:e).get(_.envMap||B),z=V&&V.mapping===ks?V.image.height:null,Z=x[_.type];_.precision!==null&&(p=n.getMaxPrecision(_.precision),p!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",p,"instead."));let ae=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,le=ae!==void 0?ae.length:0,Ae=0;q.morphAttributes.position!==void 0&&(Ae=1),q.morphAttributes.normal!==void 0&&(Ae=2),q.morphAttributes.color!==void 0&&(Ae=3);let Be,W,$,de;if(Z){let Qe=Da[Z];Be=Qe.vertexShader,W=Qe.fragmentShader}else Be=_.vertexShader,W=_.fragmentShader,c.update(_),$=c.getVertexShaderID(_),de=c.getFragmentShaderID(_);let ie=s.getRenderTarget(),Ee=s.state.buffers.depth.getReversed(),ke=P.isInstancedMesh===!0,Oe=P.isBatchedMesh===!0,ht=!!_.map,Ve=!!_.matcap,ut=!!V,N=!!_.aoMap,na=!!_.lightMap,je=!!_.bumpMap,He=!!_.normalMap,ye=!!_.displacementMap,nt=!!_.emissiveMap,_e=!!_.metalnessMap,I=!!_.roughnessMap,E=_.anisotropy>0,j=_.clearcoat>0,J=_.dispersion>0,Q=_.iridescence>0,K=_.sheen>0,ve=_.transmission>0,oe=E&&!!_.anisotropyMap,be=j&&!!_.clearcoatMap,We=j&&!!_.clearcoatNormalMap,te=j&&!!_.clearcoatRoughnessMap,pe=Q&&!!_.iridescenceMap,Se=Q&&!!_.iridescenceThicknessMap,Re=K&&!!_.sheenColorMap,me=K&&!!_.sheenRoughnessMap,Ge=!!_.specularMap,Fe=!!_.specularColorMap,at=!!_.specularIntensityMap,F=ve&&!!_.transmissionMap,se=ve&&!!_.thicknessMap,X=!!_.gradientMap,Y=!!_.alphaMap,he=_.alphaTest>0,ce=!!_.alphaHash,Ne=!!_.extensions,lt=en;_.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(lt=s.toneMapping);let kt={shaderID:Z,shaderType:_.type,shaderName:_.name,vertexShader:Be,fragmentShader:W,defines:_.defines,customVertexShaderID:$,customFragmentShaderID:de,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:p,batching:Oe,batchingColor:Oe&&P._colorsTexture!==null,instancing:ke,instancingColor:ke&&P.instanceColor!==null,instancingMorph:ke&&P.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:ie===null?s.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:Rt,alphaToCoverage:!!_.alphaToCoverage,map:ht,matcap:Ve,envMap:ut,envMapMode:ut&&V.mapping,envMapCubeUVHeight:z,aoMap:N,lightMap:na,bumpMap:je,normalMap:He,displacementMap:u&&ye,emissiveMap:nt,normalMapObjectSpace:He&&_.normalMapType===Bd,normalMapTangentSpace:He&&_.normalMapType===hh,metalnessMap:_e,roughnessMap:I,anisotropy:E,anisotropyMap:oe,clearcoat:j,clearcoatMap:be,clearcoatNormalMap:We,clearcoatRoughnessMap:te,dispersion:J,iridescence:Q,iridescenceMap:pe,iridescenceThicknessMap:Se,sheen:K,sheenColorMap:Re,sheenRoughnessMap:me,specularMap:Ge,specularColorMap:Fe,specularIntensityMap:at,transmission:ve,transmissionMap:F,thicknessMap:se,gradientMap:X,opaque:_.transparent===!1&&_.blending===kn&&_.alphaToCoverage===!1,alphaMap:Y,alphaTest:he,alphaHash:ce,combine:_.combine,mapUv:ht&&g(_.map.channel),aoMapUv:N&&g(_.aoMap.channel),lightMapUv:na&&g(_.lightMap.channel),bumpMapUv:je&&g(_.bumpMap.channel),normalMapUv:He&&g(_.normalMap.channel),displacementMapUv:ye&&g(_.displacementMap.channel),emissiveMapUv:nt&&g(_.emissiveMap.channel),metalnessMapUv:_e&&g(_.metalnessMap.channel),roughnessMapUv:I&&g(_.roughnessMap.channel),anisotropyMapUv:oe&&g(_.anisotropyMap.channel),clearcoatMapUv:be&&g(_.clearcoatMap.channel),clearcoatNormalMapUv:We&&g(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:te&&g(_.clearcoatRoughnessMap.channel),iridescenceMapUv:pe&&g(_.iridescenceMap.channel),iridescenceThicknessMapUv:Se&&g(_.iridescenceThicknessMap.channel),sheenColorMapUv:Re&&g(_.sheenColorMap.channel),sheenRoughnessMapUv:me&&g(_.sheenRoughnessMap.channel),specularMapUv:Ge&&g(_.specularMap.channel),specularColorMapUv:Fe&&g(_.specularColorMap.channel),specularIntensityMapUv:at&&g(_.specularIntensityMap.channel),transmissionMapUv:F&&g(_.transmissionMap.channel),thicknessMapUv:se&&g(_.thicknessMap.channel),alphaMapUv:Y&&g(_.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(He||E),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!q.attributes.uv&&(ht||Y),fog:!!U,useFog:_.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:Ee,skinning:P.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:le,morphTextureStride:Ae,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:s.shadowMap.enabled&&C.length>0,shadowMapType:s.shadowMap.type,toneMapping:lt,decodeVideoTexture:ht&&_.map.isVideoTexture===!0&&Ue.getTransfer(_.map.colorSpace)===Je,decodeVideoTextureEmissive:nt&&_.emissiveMap.isVideoTexture===!0&&Ue.getTransfer(_.emissiveMap.colorSpace)===Je,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Xt,flipSided:_.side===Bt,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Ne&&_.extensions.clipCullDistance===!0&&a.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ne&&_.extensions.multiDraw===!0||Oe)&&a.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:a.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return kt.vertexUv1s=h.has(1),kt.vertexUv2s=h.has(2),kt.vertexUv3s=h.has(3),h.clear(),kt}function f(_){let y=[];if(_.shaderID?y.push(_.shaderID):(y.push(_.customVertexShaderID),y.push(_.customFragmentShaderID)),_.defines!==void 0)for(let C in _.defines)y.push(C),y.push(_.defines[C]);return _.isRawShaderMaterial===!1&&(v(y,_),w(y,_),y.push(s.outputColorSpace)),y.push(_.customProgramCacheKey),y.join()}function v(_,y){_.push(y.precision),_.push(y.outputColorSpace),_.push(y.envMapMode),_.push(y.envMapCubeUVHeight),_.push(y.mapUv),_.push(y.alphaMapUv),_.push(y.lightMapUv),_.push(y.aoMapUv),_.push(y.bumpMapUv),_.push(y.normalMapUv),_.push(y.displacementMapUv),_.push(y.emissiveMapUv),_.push(y.metalnessMapUv),_.push(y.roughnessMapUv),_.push(y.anisotropyMapUv),_.push(y.clearcoatMapUv),_.push(y.clearcoatNormalMapUv),_.push(y.clearcoatRoughnessMapUv),_.push(y.iridescenceMapUv),_.push(y.iridescenceThicknessMapUv),_.push(y.sheenColorMapUv),_.push(y.sheenRoughnessMapUv),_.push(y.specularMapUv),_.push(y.specularColorMapUv),_.push(y.specularIntensityMapUv),_.push(y.transmissionMapUv),_.push(y.thicknessMapUv),_.push(y.combine),_.push(y.fogExp2),_.push(y.sizeAttenuation),_.push(y.morphTargetsCount),_.push(y.morphAttributeCount),_.push(y.numDirLights),_.push(y.numPointLights),_.push(y.numSpotLights),_.push(y.numSpotLightMaps),_.push(y.numHemiLights),_.push(y.numRectAreaLights),_.push(y.numDirLightShadows),_.push(y.numPointLightShadows),_.push(y.numSpotLightShadows),_.push(y.numSpotLightShadowsWithMaps),_.push(y.numLightProbes),_.push(y.shadowMapType),_.push(y.toneMapping),_.push(y.numClippingPlanes),_.push(y.numClipIntersection),_.push(y.depthPacking)}function w(_,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),_.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reverseDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),_.push(o.mask)}function m(_){let y=x[_.type],C;if(y){let O=Da[y];C=wa.clone(O.uniforms)}else C=_.uniforms;return C}function M(_,y){let C;for(let O=0,P=l.length;O<P;O++){let U=l[O];if(U.cacheKey===y){C=U,++C.usedTimes;break}}return C===void 0&&(C=new tx(s,y,_,i),l.push(C)),C}function A(_){if(--_.usedTimes===0){let y=l.indexOf(_);l[y]=l[l.length-1],l.pop(),_.destroy()}}function T(_){c.remove(_)}function R(){c.dispose()}return{getParameters:b,getProgramCacheKey:f,getUniforms:m,acquireProgram:M,releaseProgram:A,releaseShaderCache:T,programs:l,dispose:R}}function ix(){let s=new WeakMap;function e(r){return s.has(r)}function t(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function a(r){s.delete(r)}function n(r,o,c){s.get(r)[o]=c}function i(){s=new WeakMap}return{has:e,get:t,remove:a,update:n,dispose:i}}function sx(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function wf(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Af(){let s=[],e=0,t=[],a=[],n=[];function i(){e=0,t.length=0,a.length=0,n.length=0}function r(d,u,p,x,g,b){let f=s[e];return f===void 0?(f={id:d.id,object:d,geometry:u,material:p,groupOrder:x,renderOrder:d.renderOrder,z:g,group:b},s[e]=f):(f.id=d.id,f.object=d,f.geometry=u,f.material=p,f.groupOrder=x,f.renderOrder=d.renderOrder,f.z=g,f.group=b),e++,f}function o(d,u,p,x,g,b){let f=r(d,u,p,x,g,b);p.transmission>0?a.push(f):p.transparent===!0?n.push(f):t.push(f)}function c(d,u,p,x,g,b){let f=r(d,u,p,x,g,b);p.transmission>0?a.unshift(f):p.transparent===!0?n.unshift(f):t.unshift(f)}function h(d,u){t.length>1&&t.sort(d||sx),a.length>1&&a.sort(u||wf),n.length>1&&n.sort(u||wf)}function l(){for(let d=e,u=s.length;d<u;d++){let p=s[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:a,transparent:n,init:i,push:o,unshift:c,finish:l,sort:h}}function rx(){let s=new WeakMap;function e(a,n){let i=s.get(a),r;return i===void 0?(r=new Af,s.set(a,[r])):n>=i.length?(r=new Af,i.push(r)):r=i[n],r}function t(){s=new WeakMap}return{get:e,dispose:t}}function ox(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new k,color:new ge};break;case"SpotLight":t={position:new k,direction:new k,color:new ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new k,color:new ge,distance:0,decay:0};break;case"HemisphereLight":t={direction:new k,skyColor:new ge,groundColor:new ge};break;case"RectAreaLight":t={color:new ge,position:new k,halfWidth:new k,halfHeight:new k};break}return s[e.id]=t,t}}}function cx(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}var hx=0;function lx(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function dx(s){let e=new ox,t=cx(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)a.probe.push(new k);let n=new k,i=new Te,r=new Te;function o(h){let l=0,d=0,u=0;for(let _=0;_<9;_++)a.probe[_].set(0,0,0);let p=0,x=0,g=0,b=0,f=0,v=0,w=0,m=0,M=0,A=0,T=0;h.sort(lx);for(let _=0,y=h.length;_<y;_++){let C=h[_],O=C.color,P=C.intensity,U=C.distance,q=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)l+=O.r*P,d+=O.g*P,u+=O.b*P;else if(C.isLightProbe){for(let B=0;B<9;B++)a.probe[B].addScaledVector(C.sh.coefficients[B],P);T++}else if(C.isDirectionalLight){let B=e.get(C);if(B.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let V=C.shadow,z=t.get(C);z.shadowIntensity=V.intensity,z.shadowBias=V.bias,z.shadowNormalBias=V.normalBias,z.shadowRadius=V.radius,z.shadowMapSize=V.mapSize,a.directionalShadow[p]=z,a.directionalShadowMap[p]=q,a.directionalShadowMatrix[p]=C.shadow.matrix,v++}a.directional[p]=B,p++}else if(C.isSpotLight){let B=e.get(C);B.position.setFromMatrixPosition(C.matrixWorld),B.color.copy(O).multiplyScalar(P),B.distance=U,B.coneCos=Math.cos(C.angle),B.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),B.decay=C.decay,a.spot[g]=B;let V=C.shadow;if(C.map&&(a.spotLightMap[M]=C.map,M++,V.updateMatrices(C),C.castShadow&&A++),a.spotLightMatrix[g]=V.matrix,C.castShadow){let z=t.get(C);z.shadowIntensity=V.intensity,z.shadowBias=V.bias,z.shadowNormalBias=V.normalBias,z.shadowRadius=V.radius,z.shadowMapSize=V.mapSize,a.spotShadow[g]=z,a.spotShadowMap[g]=q,m++}g++}else if(C.isRectAreaLight){let B=e.get(C);B.color.copy(O).multiplyScalar(P),B.halfWidth.set(C.width*.5,0,0),B.halfHeight.set(0,C.height*.5,0),a.rectArea[b]=B,b++}else if(C.isPointLight){let B=e.get(C);if(B.color.copy(C.color).multiplyScalar(C.intensity),B.distance=C.distance,B.decay=C.decay,C.castShadow){let V=C.shadow,z=t.get(C);z.shadowIntensity=V.intensity,z.shadowBias=V.bias,z.shadowNormalBias=V.normalBias,z.shadowRadius=V.radius,z.shadowMapSize=V.mapSize,z.shadowCameraNear=V.camera.near,z.shadowCameraFar=V.camera.far,a.pointShadow[x]=z,a.pointShadowMap[x]=q,a.pointShadowMatrix[x]=C.shadow.matrix,w++}a.point[x]=B,x++}else if(C.isHemisphereLight){let B=e.get(C);B.skyColor.copy(C.color).multiplyScalar(P),B.groundColor.copy(C.groundColor).multiplyScalar(P),a.hemi[f]=B,f++}}b>0&&(s.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=ne.LTC_FLOAT_1,a.rectAreaLTC2=ne.LTC_FLOAT_2):(a.rectAreaLTC1=ne.LTC_HALF_1,a.rectAreaLTC2=ne.LTC_HALF_2)),a.ambient[0]=l,a.ambient[1]=d,a.ambient[2]=u;let R=a.hash;(R.directionalLength!==p||R.pointLength!==x||R.spotLength!==g||R.rectAreaLength!==b||R.hemiLength!==f||R.numDirectionalShadows!==v||R.numPointShadows!==w||R.numSpotShadows!==m||R.numSpotMaps!==M||R.numLightProbes!==T)&&(a.directional.length=p,a.spot.length=g,a.rectArea.length=b,a.point.length=x,a.hemi.length=f,a.directionalShadow.length=v,a.directionalShadowMap.length=v,a.pointShadow.length=w,a.pointShadowMap.length=w,a.spotShadow.length=m,a.spotShadowMap.length=m,a.directionalShadowMatrix.length=v,a.pointShadowMatrix.length=w,a.spotLightMatrix.length=m+M-A,a.spotLightMap.length=M,a.numSpotLightShadowsWithMaps=A,a.numLightProbes=T,R.directionalLength=p,R.pointLength=x,R.spotLength=g,R.rectAreaLength=b,R.hemiLength=f,R.numDirectionalShadows=v,R.numPointShadows=w,R.numSpotShadows=m,R.numSpotMaps=M,R.numLightProbes=T,a.version=hx++)}function c(h,l){let d=0,u=0,p=0,x=0,g=0,b=l.matrixWorldInverse;for(let f=0,v=h.length;f<v;f++){let w=h[f];if(w.isDirectionalLight){let m=a.directional[d];m.direction.setFromMatrixPosition(w.matrixWorld),n.setFromMatrixPosition(w.target.matrixWorld),m.direction.sub(n),m.direction.transformDirection(b),d++}else if(w.isSpotLight){let m=a.spot[p];m.position.setFromMatrixPosition(w.matrixWorld),m.position.applyMatrix4(b),m.direction.setFromMatrixPosition(w.matrixWorld),n.setFromMatrixPosition(w.target.matrixWorld),m.direction.sub(n),m.direction.transformDirection(b),p++}else if(w.isRectAreaLight){let m=a.rectArea[x];m.position.setFromMatrixPosition(w.matrixWorld),m.position.applyMatrix4(b),r.identity(),i.copy(w.matrixWorld),i.premultiply(b),r.extractRotation(i),m.halfWidth.set(w.width*.5,0,0),m.halfHeight.set(0,w.height*.5,0),m.halfWidth.applyMatrix4(r),m.halfHeight.applyMatrix4(r),x++}else if(w.isPointLight){let m=a.point[u];m.position.setFromMatrixPosition(w.matrixWorld),m.position.applyMatrix4(b),u++}else if(w.isHemisphereLight){let m=a.hemi[g];m.direction.setFromMatrixPosition(w.matrixWorld),m.direction.transformDirection(b),g++}}}return{setup:o,setupView:c,state:a}}function Ef(s){let e=new dx(s),t=[],a=[];function n(l){h.camera=l,t.length=0,a.length=0}function i(l){t.push(l)}function r(l){a.push(l)}function o(){e.setup(t)}function c(l){e.setupView(t,l)}let h={lightsArray:t,shadowsArray:a,camera:null,lights:e,transmissionRenderTarget:{}};return{init:n,state:h,setupLights:o,setupLightsView:c,pushLight:i,pushShadow:r}}function fx(s){let e=new WeakMap;function t(n,i=0){let r=e.get(n),o;return r===void 0?(o=new Ef(s),e.set(n,[o])):i>=r.length?(o=new Ef(s),r.push(o)):o=r[i],o}function a(){e=new WeakMap}return{get:t,dispose:a}}var ux=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,bx=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function px(s,e,t){let a=new Ai,n=new ue,i=new ue,r=new Ke,o=new Nr({depthPacking:zd}),c=new Fr,h={},l=t.maxTextureSize,d={[Gt]:Bt,[Bt]:Gt,[Xt]:Xt},u=new rt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ue},radius:{value:4}},vertexShader:ux,fragmentShader:bx}),p=u.clone();p.defines.HORIZONTAL_PASS=1;let x=new Et;x.setAttribute("position",new it(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new st(x,u),b=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Kc;let f=this.type;this.render=function(A,T,R){if(b.enabled===!1||b.autoUpdate===!1&&b.needsUpdate===!1||A.length===0)return;let _=s.getRenderTarget(),y=s.getActiveCubeFace(),C=s.getActiveMipmapLevel(),O=s.state;O.setBlending(ta),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let P=f!==Na&&this.type===Na,U=f===Na&&this.type!==Na;for(let q=0,B=A.length;q<B;q++){let V=A[q],z=V.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",V,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;n.copy(z.mapSize);let Z=z.getFrameExtents();if(n.multiply(Z),i.copy(z.mapSize),(n.x>l||n.y>l)&&(n.x>l&&(i.x=Math.floor(l/Z.x),n.x=i.x*Z.x,z.mapSize.x=i.x),n.y>l&&(i.y=Math.floor(l/Z.y),n.y=i.y*Z.y,z.mapSize.y=i.y)),z.map===null||P===!0||U===!0){let le=this.type!==Na?{minFilter:Tt,magFilter:Tt}:{};z.map!==null&&z.map.dispose(),z.map=new xt(n.x,n.y,le),z.map.texture.name=V.name+".shadowMap",z.camera.updateProjectionMatrix()}s.setRenderTarget(z.map),s.clear();let ae=z.getViewportCount();for(let le=0;le<ae;le++){let Ae=z.getViewport(le);r.set(i.x*Ae.x,i.y*Ae.y,i.x*Ae.z,i.y*Ae.w),O.viewport(r),z.updateMatrices(V,le),a=z.getFrustum(),m(T,R,z.camera,V,this.type)}z.isPointLightShadow!==!0&&this.type===Na&&v(z,R),z.needsUpdate=!1}f=this.type,b.needsUpdate=!1,s.setRenderTarget(_,y,C)};function v(A,T){let R=e.update(g);u.defines.VSM_SAMPLES!==A.blurSamples&&(u.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new xt(n.x,n.y)),u.uniforms.shadow_pass.value=A.map.texture,u.uniforms.resolution.value=A.mapSize,u.uniforms.radius.value=A.radius,s.setRenderTarget(A.mapPass),s.clear(),s.renderBufferDirect(T,null,R,u,g,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,s.setRenderTarget(A.map),s.clear(),s.renderBufferDirect(T,null,R,p,g,null)}function w(A,T,R,_){let y=null,C=R.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(C!==void 0)y=C;else if(y=R.isPointLight===!0?c:o,s.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){let O=y.uuid,P=T.uuid,U=h[O];U===void 0&&(U={},h[O]=U);let q=U[P];q===void 0&&(q=y.clone(),U[P]=q,T.addEventListener("dispose",M)),y=q}if(y.visible=T.visible,y.wireframe=T.wireframe,_===Na?y.side=T.shadowSide!==null?T.shadowSide:T.side:y.side=T.shadowSide!==null?T.shadowSide:d[T.side],y.alphaMap=T.alphaMap,y.alphaTest=T.alphaTest,y.map=T.map,y.clipShadows=T.clipShadows,y.clippingPlanes=T.clippingPlanes,y.clipIntersection=T.clipIntersection,y.displacementMap=T.displacementMap,y.displacementScale=T.displacementScale,y.displacementBias=T.displacementBias,y.wireframeLinewidth=T.wireframeLinewidth,y.linewidth=T.linewidth,R.isPointLight===!0&&y.isMeshDistanceMaterial===!0){let O=s.properties.get(y);O.light=R}return y}function m(A,T,R,_,y){if(A.visible===!1)return;if(A.layers.test(T.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&y===Na)&&(!A.frustumCulled||a.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,A.matrixWorld);let P=e.update(A),U=A.material;if(Array.isArray(U)){let q=P.groups;for(let B=0,V=q.length;B<V;B++){let z=q[B],Z=U[z.materialIndex];if(Z&&Z.visible){let ae=w(A,Z,_,y);A.onBeforeShadow(s,A,T,R,P,ae,z),s.renderBufferDirect(R,null,P,ae,A,z),A.onAfterShadow(s,A,T,R,P,ae,z)}}}else if(U.visible){let q=w(A,U,_,y);A.onBeforeShadow(s,A,T,R,P,q,null),s.renderBufferDirect(R,null,P,q,A,null),A.onAfterShadow(s,A,T,R,P,q,null)}}let O=A.children;for(let P=0,U=O.length;P<U;P++)m(O[P],T,R,_,y)}function M(A){A.target.removeEventListener("dispose",M);for(let R in h){let _=h[R],y=A.target.uuid;y in _&&(_[y].dispose(),delete _[y])}}}var mx={[Gr]:Vr,[Wr]:Kr,[qr]:Jr,[Pn]:Xr,[Vr]:Gr,[Kr]:Wr,[Jr]:qr,[Xr]:Pn};function gx(s,e){function t(){let F=!1,se=new Ke,X=null,Y=new Ke(0,0,0,0);return{setMask:function(he){X!==he&&!F&&(s.colorMask(he,he,he,he),X=he)},setLocked:function(he){F=he},setClear:function(he,ce,Ne,lt,kt){kt===!0&&(he*=lt,ce*=lt,Ne*=lt),se.set(he,ce,Ne,lt),Y.equals(se)===!1&&(s.clearColor(he,ce,Ne,lt),Y.copy(se))},reset:function(){F=!1,X=null,Y.set(-1,0,0,0)}}}function a(){let F=!1,se=!1,X=null,Y=null,he=null;return{setReversed:function(ce){if(se!==ce){let Ne=e.get("EXT_clip_control");se?Ne.clipControlEXT(Ne.LOWER_LEFT_EXT,Ne.ZERO_TO_ONE_EXT):Ne.clipControlEXT(Ne.LOWER_LEFT_EXT,Ne.NEGATIVE_ONE_TO_ONE_EXT);let lt=he;he=null,this.setClear(lt)}se=ce},getReversed:function(){return se},setTest:function(ce){ce?ie(s.DEPTH_TEST):Ee(s.DEPTH_TEST)},setMask:function(ce){X!==ce&&!F&&(s.depthMask(ce),X=ce)},setFunc:function(ce){if(se&&(ce=mx[ce]),Y!==ce){switch(ce){case Gr:s.depthFunc(s.NEVER);break;case Vr:s.depthFunc(s.ALWAYS);break;case Wr:s.depthFunc(s.LESS);break;case Pn:s.depthFunc(s.LEQUAL);break;case qr:s.depthFunc(s.EQUAL);break;case Xr:s.depthFunc(s.GEQUAL);break;case Kr:s.depthFunc(s.GREATER);break;case Jr:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Y=ce}},setLocked:function(ce){F=ce},setClear:function(ce){he!==ce&&(se&&(ce=1-ce),s.clearDepth(ce),he=ce)},reset:function(){F=!1,X=null,Y=null,he=null,se=!1}}}function n(){let F=!1,se=null,X=null,Y=null,he=null,ce=null,Ne=null,lt=null,kt=null;return{setTest:function(Qe){F||(Qe?ie(s.STENCIL_TEST):Ee(s.STENCIL_TEST))},setMask:function(Qe){se!==Qe&&!F&&(s.stencilMask(Qe),se=Qe)},setFunc:function(Qe,fa,Oa){(X!==Qe||Y!==fa||he!==Oa)&&(s.stencilFunc(Qe,fa,Oa),X=Qe,Y=fa,he=Oa)},setOp:function(Qe,fa,Oa){(ce!==Qe||Ne!==fa||lt!==Oa)&&(s.stencilOp(Qe,fa,Oa),ce=Qe,Ne=fa,lt=Oa)},setLocked:function(Qe){F=Qe},setClear:function(Qe){kt!==Qe&&(s.clearStencil(Qe),kt=Qe)},reset:function(){F=!1,se=null,X=null,Y=null,he=null,ce=null,Ne=null,lt=null,kt=null}}}let i=new t,r=new a,o=new n,c=new WeakMap,h=new WeakMap,l={},d={},u=new WeakMap,p=[],x=null,g=!1,b=null,f=null,v=null,w=null,m=null,M=null,A=null,T=new ge(0,0,0),R=0,_=!1,y=null,C=null,O=null,P=null,U=null,q=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),B=!1,V=0,z=s.getParameter(s.VERSION);z.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(z)[1]),B=V>=1):z.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),B=V>=2);let Z=null,ae={},le=s.getParameter(s.SCISSOR_BOX),Ae=s.getParameter(s.VIEWPORT),Be=new Ke().fromArray(le),W=new Ke().fromArray(Ae);function $(F,se,X,Y){let he=new Uint8Array(4),ce=s.createTexture();s.bindTexture(F,ce),s.texParameteri(F,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(F,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ne=0;Ne<X;Ne++)F===s.TEXTURE_3D||F===s.TEXTURE_2D_ARRAY?s.texImage3D(se,0,s.RGBA,1,1,Y,0,s.RGBA,s.UNSIGNED_BYTE,he):s.texImage2D(se+Ne,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,he);return ce}let de={};de[s.TEXTURE_2D]=$(s.TEXTURE_2D,s.TEXTURE_2D,1),de[s.TEXTURE_CUBE_MAP]=$(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),de[s.TEXTURE_2D_ARRAY]=$(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),de[s.TEXTURE_3D]=$(s.TEXTURE_3D,s.TEXTURE_3D,1,1),i.setClear(0,0,0,1),r.setClear(1),o.setClear(0),ie(s.DEPTH_TEST),r.setFunc(Pn),je(!1),He(Xc),ie(s.CULL_FACE),N(ta);function ie(F){l[F]!==!0&&(s.enable(F),l[F]=!0)}function Ee(F){l[F]!==!1&&(s.disable(F),l[F]=!1)}function ke(F,se){return d[F]!==se?(s.bindFramebuffer(F,se),d[F]=se,F===s.DRAW_FRAMEBUFFER&&(d[s.FRAMEBUFFER]=se),F===s.FRAMEBUFFER&&(d[s.DRAW_FRAMEBUFFER]=se),!0):!1}function Oe(F,se){let X=p,Y=!1;if(F){X=u.get(se),X===void 0&&(X=[],u.set(se,X));let he=F.textures;if(X.length!==he.length||X[0]!==s.COLOR_ATTACHMENT0){for(let ce=0,Ne=he.length;ce<Ne;ce++)X[ce]=s.COLOR_ATTACHMENT0+ce;X.length=he.length,Y=!0}}else X[0]!==s.BACK&&(X[0]=s.BACK,Y=!0);Y&&s.drawBuffers(X)}function ht(F){return x!==F?(s.useProgram(F),x=F,!0):!1}let Ve={[fn]:s.FUNC_ADD,[pd]:s.FUNC_SUBTRACT,[md]:s.FUNC_REVERSE_SUBTRACT};Ve[gd]=s.MIN,Ve[xd]=s.MAX;let ut={[vd]:s.ZERO,[yd]:s.ONE,[_d]:s.SRC_COLOR,[wr]:s.SRC_ALPHA,[Td]:s.SRC_ALPHA_SATURATE,[Ed]:s.DST_COLOR,[wd]:s.DST_ALPHA,[Md]:s.ONE_MINUS_SRC_COLOR,[Ar]:s.ONE_MINUS_SRC_ALPHA,[Sd]:s.ONE_MINUS_DST_COLOR,[Ad]:s.ONE_MINUS_DST_ALPHA,[Rd]:s.CONSTANT_COLOR,[Id]:s.ONE_MINUS_CONSTANT_COLOR,[Cd]:s.CONSTANT_ALPHA,[kd]:s.ONE_MINUS_CONSTANT_ALPHA};function N(F,se,X,Y,he,ce,Ne,lt,kt,Qe){if(F===ta){g===!0&&(Ee(s.BLEND),g=!1);return}if(g===!1&&(ie(s.BLEND),g=!0),F!==bd){if(F!==b||Qe!==_){if((f!==fn||m!==fn)&&(s.blendEquation(s.FUNC_ADD),f=fn,m=fn),Qe)switch(F){case kn:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case _a:s.blendFunc(s.ONE,s.ONE);break;case Jc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Yc:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case kn:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case _a:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Jc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Yc:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}v=null,w=null,M=null,A=null,T.set(0,0,0),R=0,b=F,_=Qe}return}he=he||se,ce=ce||X,Ne=Ne||Y,(se!==f||he!==m)&&(s.blendEquationSeparate(Ve[se],Ve[he]),f=se,m=he),(X!==v||Y!==w||ce!==M||Ne!==A)&&(s.blendFuncSeparate(ut[X],ut[Y],ut[ce],ut[Ne]),v=X,w=Y,M=ce,A=Ne),(lt.equals(T)===!1||kt!==R)&&(s.blendColor(lt.r,lt.g,lt.b,kt),T.copy(lt),R=kt),b=F,_=!1}function na(F,se){F.side===Xt?Ee(s.CULL_FACE):ie(s.CULL_FACE);let X=F.side===Bt;se&&(X=!X),je(X),F.blending===kn&&F.transparent===!1?N(ta):N(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),r.setFunc(F.depthFunc),r.setTest(F.depthTest),r.setMask(F.depthWrite),i.setMask(F.colorWrite);let Y=F.stencilWrite;o.setTest(Y),Y&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),nt(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?ie(s.SAMPLE_ALPHA_TO_COVERAGE):Ee(s.SAMPLE_ALPHA_TO_COVERAGE)}function je(F){y!==F&&(F?s.frontFace(s.CW):s.frontFace(s.CCW),y=F)}function He(F){F!==dd?(ie(s.CULL_FACE),F!==C&&(F===Xc?s.cullFace(s.BACK):F===fd?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ee(s.CULL_FACE),C=F}function ye(F){F!==O&&(B&&s.lineWidth(F),O=F)}function nt(F,se,X){F?(ie(s.POLYGON_OFFSET_FILL),(P!==se||U!==X)&&(s.polygonOffset(se,X),P=se,U=X)):Ee(s.POLYGON_OFFSET_FILL)}function _e(F){F?ie(s.SCISSOR_TEST):Ee(s.SCISSOR_TEST)}function I(F){F===void 0&&(F=s.TEXTURE0+q-1),Z!==F&&(s.activeTexture(F),Z=F)}function E(F,se,X){X===void 0&&(Z===null?X=s.TEXTURE0+q-1:X=Z);let Y=ae[X];Y===void 0&&(Y={type:void 0,texture:void 0},ae[X]=Y),(Y.type!==F||Y.texture!==se)&&(Z!==X&&(s.activeTexture(X),Z=X),s.bindTexture(F,se||de[F]),Y.type=F,Y.texture=se)}function j(){let F=ae[Z];F!==void 0&&F.type!==void 0&&(s.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function J(){try{s.compressedTexImage2D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Q(){try{s.compressedTexImage3D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function K(){try{s.texSubImage2D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ve(){try{s.texSubImage3D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function oe(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function be(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function We(){try{s.texStorage2D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function te(){try{s.texStorage3D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function pe(){try{s.texImage2D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Se(){try{s.texImage3D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Re(F){Be.equals(F)===!1&&(s.scissor(F.x,F.y,F.z,F.w),Be.copy(F))}function me(F){W.equals(F)===!1&&(s.viewport(F.x,F.y,F.z,F.w),W.copy(F))}function Ge(F,se){let X=h.get(se);X===void 0&&(X=new WeakMap,h.set(se,X));let Y=X.get(F);Y===void 0&&(Y=s.getUniformBlockIndex(se,F.name),X.set(F,Y))}function Fe(F,se){let Y=h.get(se).get(F);c.get(se)!==Y&&(s.uniformBlockBinding(se,Y,F.__bindingPointIndex),c.set(se,Y))}function at(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),r.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),l={},Z=null,ae={},d={},u=new WeakMap,p=[],x=null,g=!1,b=null,f=null,v=null,w=null,m=null,M=null,A=null,T=new ge(0,0,0),R=0,_=!1,y=null,C=null,O=null,P=null,U=null,Be.set(0,0,s.canvas.width,s.canvas.height),W.set(0,0,s.canvas.width,s.canvas.height),i.reset(),r.reset(),o.reset()}return{buffers:{color:i,depth:r,stencil:o},enable:ie,disable:Ee,bindFramebuffer:ke,drawBuffers:Oe,useProgram:ht,setBlending:N,setMaterial:na,setFlipSided:je,setCullFace:He,setLineWidth:ye,setPolygonOffset:nt,setScissorTest:_e,activeTexture:I,bindTexture:E,unbindTexture:j,compressedTexImage2D:J,compressedTexImage3D:Q,texImage2D:pe,texImage3D:Se,updateUBOMapping:Ge,uniformBlockBinding:Fe,texStorage2D:We,texStorage3D:te,texSubImage2D:K,texSubImage3D:ve,compressedTexSubImage2D:oe,compressedTexSubImage3D:be,scissor:Re,viewport:me,reset:at}}function xx(s,e,t,a,n,i,r){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new ue,l=new WeakMap,d,u=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(I,E){return p?new OffscreenCanvas(I,E):vi("canvas")}function g(I,E,j){let J=1,Q=_e(I);if((Q.width>j||Q.height>j)&&(J=j/Math.max(Q.width,Q.height)),J<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){let K=Math.floor(J*Q.width),ve=Math.floor(J*Q.height);d===void 0&&(d=x(K,ve));let oe=E?x(K,ve):d;return oe.width=K,oe.height=ve,oe.getContext("2d").drawImage(I,0,0,K,ve),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+K+"x"+ve+")."),oe}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),I;return I}function b(I){return I.generateMipmaps}function f(I){s.generateMipmap(I)}function v(I){return I.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?s.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function w(I,E,j,J,Q=!1){if(I!==null){if(s[I]!==void 0)return s[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let K=E;if(E===s.RED&&(j===s.FLOAT&&(K=s.R32F),j===s.HALF_FLOAT&&(K=s.R16F),j===s.UNSIGNED_BYTE&&(K=s.R8)),E===s.RED_INTEGER&&(j===s.UNSIGNED_BYTE&&(K=s.R8UI),j===s.UNSIGNED_SHORT&&(K=s.R16UI),j===s.UNSIGNED_INT&&(K=s.R32UI),j===s.BYTE&&(K=s.R8I),j===s.SHORT&&(K=s.R16I),j===s.INT&&(K=s.R32I)),E===s.RG&&(j===s.FLOAT&&(K=s.RG32F),j===s.HALF_FLOAT&&(K=s.RG16F),j===s.UNSIGNED_BYTE&&(K=s.RG8)),E===s.RG_INTEGER&&(j===s.UNSIGNED_BYTE&&(K=s.RG8UI),j===s.UNSIGNED_SHORT&&(K=s.RG16UI),j===s.UNSIGNED_INT&&(K=s.RG32UI),j===s.BYTE&&(K=s.RG8I),j===s.SHORT&&(K=s.RG16I),j===s.INT&&(K=s.RG32I)),E===s.RGB_INTEGER&&(j===s.UNSIGNED_BYTE&&(K=s.RGB8UI),j===s.UNSIGNED_SHORT&&(K=s.RGB16UI),j===s.UNSIGNED_INT&&(K=s.RGB32UI),j===s.BYTE&&(K=s.RGB8I),j===s.SHORT&&(K=s.RGB16I),j===s.INT&&(K=s.RGB32I)),E===s.RGBA_INTEGER&&(j===s.UNSIGNED_BYTE&&(K=s.RGBA8UI),j===s.UNSIGNED_SHORT&&(K=s.RGBA16UI),j===s.UNSIGNED_INT&&(K=s.RGBA32UI),j===s.BYTE&&(K=s.RGBA8I),j===s.SHORT&&(K=s.RGBA16I),j===s.INT&&(K=s.RGBA32I)),E===s.RGB&&j===s.UNSIGNED_INT_5_9_9_9_REV&&(K=s.RGB9_E5),E===s.RGBA){let ve=Q?ss:Ue.getTransfer(J);j===s.FLOAT&&(K=s.RGBA32F),j===s.HALF_FLOAT&&(K=s.RGBA16F),j===s.UNSIGNED_BYTE&&(K=ve===Je?s.SRGB8_ALPHA8:s.RGBA8),j===s.UNSIGNED_SHORT_4_4_4_4&&(K=s.RGBA4),j===s.UNSIGNED_SHORT_5_5_5_1&&(K=s.RGB5_A1)}return(K===s.R16F||K===s.R32F||K===s.RG16F||K===s.RG32F||K===s.RGBA16F||K===s.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function m(I,E){let j;return I?E===null||E===gn||E===Kn?j=s.DEPTH24_STENCIL8:E===la?j=s.DEPTH32F_STENCIL8:E===Fi&&(j=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===gn||E===Kn?j=s.DEPTH_COMPONENT24:E===la?j=s.DEPTH_COMPONENT32F:E===Fi&&(j=s.DEPTH_COMPONENT16),j}function M(I,E){return b(I)===!0||I.isFramebufferTexture&&I.minFilter!==Tt&&I.minFilter!==Ot?Math.log2(Math.max(E.width,E.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?E.mipmaps.length:1}function A(I){let E=I.target;E.removeEventListener("dispose",A),R(E),E.isVideoTexture&&l.delete(E)}function T(I){let E=I.target;E.removeEventListener("dispose",T),y(E)}function R(I){let E=a.get(I);if(E.__webglInit===void 0)return;let j=I.source,J=u.get(j);if(J){let Q=J[E.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&_(I),Object.keys(J).length===0&&u.delete(j)}a.remove(I)}function _(I){let E=a.get(I);s.deleteTexture(E.__webglTexture);let j=I.source,J=u.get(j);delete J[E.__cacheKey],r.memory.textures--}function y(I){let E=a.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),a.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(E.__webglFramebuffer[J]))for(let Q=0;Q<E.__webglFramebuffer[J].length;Q++)s.deleteFramebuffer(E.__webglFramebuffer[J][Q]);else s.deleteFramebuffer(E.__webglFramebuffer[J]);E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer[J])}else{if(Array.isArray(E.__webglFramebuffer))for(let J=0;J<E.__webglFramebuffer.length;J++)s.deleteFramebuffer(E.__webglFramebuffer[J]);else s.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&s.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let J=0;J<E.__webglColorRenderbuffer.length;J++)E.__webglColorRenderbuffer[J]&&s.deleteRenderbuffer(E.__webglColorRenderbuffer[J]);E.__webglDepthRenderbuffer&&s.deleteRenderbuffer(E.__webglDepthRenderbuffer)}let j=I.textures;for(let J=0,Q=j.length;J<Q;J++){let K=a.get(j[J]);K.__webglTexture&&(s.deleteTexture(K.__webglTexture),r.memory.textures--),a.remove(j[J])}a.remove(I)}let C=0;function O(){C=0}function P(){let I=C;return I>=n.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+n.maxTextures),C+=1,I}function U(I){let E=[];return E.push(I.wrapS),E.push(I.wrapT),E.push(I.wrapR||0),E.push(I.magFilter),E.push(I.minFilter),E.push(I.anisotropy),E.push(I.internalFormat),E.push(I.format),E.push(I.type),E.push(I.generateMipmaps),E.push(I.premultiplyAlpha),E.push(I.flipY),E.push(I.unpackAlignment),E.push(I.colorSpace),E.join()}function q(I,E){let j=a.get(I);if(I.isVideoTexture&&ye(I),I.isRenderTargetTexture===!1&&I.version>0&&j.__version!==I.version){let J=I.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{W(j,I,E);return}}t.bindTexture(s.TEXTURE_2D,j.__webglTexture,s.TEXTURE0+E)}function B(I,E){let j=a.get(I);if(I.version>0&&j.__version!==I.version){W(j,I,E);return}t.bindTexture(s.TEXTURE_2D_ARRAY,j.__webglTexture,s.TEXTURE0+E)}function V(I,E){let j=a.get(I);if(I.version>0&&j.__version!==I.version){W(j,I,E);return}t.bindTexture(s.TEXTURE_3D,j.__webglTexture,s.TEXTURE0+E)}function z(I,E){let j=a.get(I);if(I.version>0&&j.__version!==I.version){$(j,I,E);return}t.bindTexture(s.TEXTURE_CUBE_MAP,j.__webglTexture,s.TEXTURE0+E)}let Z={[Ra]:s.REPEAT,[ca]:s.CLAMP_TO_EDGE,[xi]:s.MIRRORED_REPEAT},ae={[Tt]:s.NEAREST,[no]:s.NEAREST_MIPMAP_NEAREST,[Xn]:s.NEAREST_MIPMAP_LINEAR,[Ot]:s.LINEAR,[Ni]:s.LINEAR_MIPMAP_NEAREST,[Ma]:s.LINEAR_MIPMAP_LINEAR},le={[jd]:s.NEVER,[Xd]:s.ALWAYS,[Hd]:s.LESS,[lh]:s.LEQUAL,[Gd]:s.EQUAL,[qd]:s.GEQUAL,[Vd]:s.GREATER,[Wd]:s.NOTEQUAL};function Ae(I,E){if(E.type===la&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Ot||E.magFilter===Ni||E.magFilter===Xn||E.magFilter===Ma||E.minFilter===Ot||E.minFilter===Ni||E.minFilter===Xn||E.minFilter===Ma)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(I,s.TEXTURE_WRAP_S,Z[E.wrapS]),s.texParameteri(I,s.TEXTURE_WRAP_T,Z[E.wrapT]),(I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY)&&s.texParameteri(I,s.TEXTURE_WRAP_R,Z[E.wrapR]),s.texParameteri(I,s.TEXTURE_MAG_FILTER,ae[E.magFilter]),s.texParameteri(I,s.TEXTURE_MIN_FILTER,ae[E.minFilter]),E.compareFunction&&(s.texParameteri(I,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(I,s.TEXTURE_COMPARE_FUNC,le[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Tt||E.minFilter!==Xn&&E.minFilter!==Ma||E.type===la&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||a.get(E).__currentAnisotropy){let j=e.get("EXT_texture_filter_anisotropic");s.texParameterf(I,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,n.getMaxAnisotropy())),a.get(E).__currentAnisotropy=E.anisotropy}}}function Be(I,E){let j=!1;I.__webglInit===void 0&&(I.__webglInit=!0,E.addEventListener("dispose",A));let J=E.source,Q=u.get(J);Q===void 0&&(Q={},u.set(J,Q));let K=U(E);if(K!==I.__cacheKey){Q[K]===void 0&&(Q[K]={texture:s.createTexture(),usedTimes:0},r.memory.textures++,j=!0),Q[K].usedTimes++;let ve=Q[I.__cacheKey];ve!==void 0&&(Q[I.__cacheKey].usedTimes--,ve.usedTimes===0&&_(E)),I.__cacheKey=K,I.__webglTexture=Q[K].texture}return j}function W(I,E,j){let J=s.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(J=s.TEXTURE_2D_ARRAY),E.isData3DTexture&&(J=s.TEXTURE_3D);let Q=Be(I,E),K=E.source;t.bindTexture(J,I.__webglTexture,s.TEXTURE0+j);let ve=a.get(K);if(K.version!==ve.__version||Q===!0){t.activeTexture(s.TEXTURE0+j);let oe=Ue.getPrimaries(Ue.workingColorSpace),be=E.colorSpace===tn?null:Ue.getPrimaries(E.colorSpace),We=E.colorSpace===tn||oe===be?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,We);let te=g(E.image,!1,n.maxTextureSize);te=nt(E,te);let pe=i.convert(E.format,E.colorSpace),Se=i.convert(E.type),Re=w(E.internalFormat,pe,Se,E.colorSpace,E.isVideoTexture);Ae(J,E);let me,Ge=E.mipmaps,Fe=E.isVideoTexture!==!0,at=ve.__version===void 0||Q===!0,F=K.dataReady,se=M(E,te);if(E.isDepthTexture)Re=m(E.format===Nn,E.type),at&&(Fe?t.texStorage2D(s.TEXTURE_2D,1,Re,te.width,te.height):t.texImage2D(s.TEXTURE_2D,0,Re,te.width,te.height,0,pe,Se,null));else if(E.isDataTexture)if(Ge.length>0){Fe&&at&&t.texStorage2D(s.TEXTURE_2D,se,Re,Ge[0].width,Ge[0].height);for(let X=0,Y=Ge.length;X<Y;X++)me=Ge[X],Fe?F&&t.texSubImage2D(s.TEXTURE_2D,X,0,0,me.width,me.height,pe,Se,me.data):t.texImage2D(s.TEXTURE_2D,X,Re,me.width,me.height,0,pe,Se,me.data);E.generateMipmaps=!1}else Fe?(at&&t.texStorage2D(s.TEXTURE_2D,se,Re,te.width,te.height),F&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,te.width,te.height,pe,Se,te.data)):t.texImage2D(s.TEXTURE_2D,0,Re,te.width,te.height,0,pe,Se,te.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Fe&&at&&t.texStorage3D(s.TEXTURE_2D_ARRAY,se,Re,Ge[0].width,Ge[0].height,te.depth);for(let X=0,Y=Ge.length;X<Y;X++)if(me=Ge[X],E.format!==aa)if(pe!==null)if(Fe){if(F)if(E.layerUpdates.size>0){let he=gh(me.width,me.height,E.format,E.type);for(let ce of E.layerUpdates){let Ne=me.data.subarray(ce*he/me.data.BYTES_PER_ELEMENT,(ce+1)*he/me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,X,0,0,ce,me.width,me.height,1,pe,Ne)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,X,0,0,0,me.width,me.height,te.depth,pe,me.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,X,Re,me.width,me.height,te.depth,0,me.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Fe?F&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,X,0,0,0,me.width,me.height,te.depth,pe,Se,me.data):t.texImage3D(s.TEXTURE_2D_ARRAY,X,Re,me.width,me.height,te.depth,0,pe,Se,me.data)}else{Fe&&at&&t.texStorage2D(s.TEXTURE_2D,se,Re,Ge[0].width,Ge[0].height);for(let X=0,Y=Ge.length;X<Y;X++)me=Ge[X],E.format!==aa?pe!==null?Fe?F&&t.compressedTexSubImage2D(s.TEXTURE_2D,X,0,0,me.width,me.height,pe,me.data):t.compressedTexImage2D(s.TEXTURE_2D,X,Re,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Fe?F&&t.texSubImage2D(s.TEXTURE_2D,X,0,0,me.width,me.height,pe,Se,me.data):t.texImage2D(s.TEXTURE_2D,X,Re,me.width,me.height,0,pe,Se,me.data)}else if(E.isDataArrayTexture)if(Fe){if(at&&t.texStorage3D(s.TEXTURE_2D_ARRAY,se,Re,te.width,te.height,te.depth),F)if(E.layerUpdates.size>0){let X=gh(te.width,te.height,E.format,E.type);for(let Y of E.layerUpdates){let he=te.data.subarray(Y*X/te.data.BYTES_PER_ELEMENT,(Y+1)*X/te.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Y,te.width,te.height,1,pe,Se,he)}E.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,pe,Se,te.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Re,te.width,te.height,te.depth,0,pe,Se,te.data);else if(E.isData3DTexture)Fe?(at&&t.texStorage3D(s.TEXTURE_3D,se,Re,te.width,te.height,te.depth),F&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,pe,Se,te.data)):t.texImage3D(s.TEXTURE_3D,0,Re,te.width,te.height,te.depth,0,pe,Se,te.data);else if(E.isFramebufferTexture){if(at)if(Fe)t.texStorage2D(s.TEXTURE_2D,se,Re,te.width,te.height);else{let X=te.width,Y=te.height;for(let he=0;he<se;he++)t.texImage2D(s.TEXTURE_2D,he,Re,X,Y,0,pe,Se,null),X>>=1,Y>>=1}}else if(Ge.length>0){if(Fe&&at){let X=_e(Ge[0]);t.texStorage2D(s.TEXTURE_2D,se,Re,X.width,X.height)}for(let X=0,Y=Ge.length;X<Y;X++)me=Ge[X],Fe?F&&t.texSubImage2D(s.TEXTURE_2D,X,0,0,pe,Se,me):t.texImage2D(s.TEXTURE_2D,X,Re,pe,Se,me);E.generateMipmaps=!1}else if(Fe){if(at){let X=_e(te);t.texStorage2D(s.TEXTURE_2D,se,Re,X.width,X.height)}F&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,pe,Se,te)}else t.texImage2D(s.TEXTURE_2D,0,Re,pe,Se,te);b(E)&&f(J),ve.__version=K.version,E.onUpdate&&E.onUpdate(E)}I.__version=E.version}function $(I,E,j){if(E.image.length!==6)return;let J=Be(I,E),Q=E.source;t.bindTexture(s.TEXTURE_CUBE_MAP,I.__webglTexture,s.TEXTURE0+j);let K=a.get(Q);if(Q.version!==K.__version||J===!0){t.activeTexture(s.TEXTURE0+j);let ve=Ue.getPrimaries(Ue.workingColorSpace),oe=E.colorSpace===tn?null:Ue.getPrimaries(E.colorSpace),be=E.colorSpace===tn||ve===oe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);let We=E.isCompressedTexture||E.image[0].isCompressedTexture,te=E.image[0]&&E.image[0].isDataTexture,pe=[];for(let Y=0;Y<6;Y++)!We&&!te?pe[Y]=g(E.image[Y],!0,n.maxCubemapSize):pe[Y]=te?E.image[Y].image:E.image[Y],pe[Y]=nt(E,pe[Y]);let Se=pe[0],Re=i.convert(E.format,E.colorSpace),me=i.convert(E.type),Ge=w(E.internalFormat,Re,me,E.colorSpace),Fe=E.isVideoTexture!==!0,at=K.__version===void 0||J===!0,F=Q.dataReady,se=M(E,Se);Ae(s.TEXTURE_CUBE_MAP,E);let X;if(We){Fe&&at&&t.texStorage2D(s.TEXTURE_CUBE_MAP,se,Ge,Se.width,Se.height);for(let Y=0;Y<6;Y++){X=pe[Y].mipmaps;for(let he=0;he<X.length;he++){let ce=X[he];E.format!==aa?Re!==null?Fe?F&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,he,0,0,ce.width,ce.height,Re,ce.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,he,Ge,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Fe?F&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,he,0,0,ce.width,ce.height,Re,me,ce.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,he,Ge,ce.width,ce.height,0,Re,me,ce.data)}}}else{if(X=E.mipmaps,Fe&&at){X.length>0&&se++;let Y=_e(pe[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,se,Ge,Y.width,Y.height)}for(let Y=0;Y<6;Y++)if(te){Fe?F&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,pe[Y].width,pe[Y].height,Re,me,pe[Y].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,Ge,pe[Y].width,pe[Y].height,0,Re,me,pe[Y].data);for(let he=0;he<X.length;he++){let Ne=X[he].image[Y].image;Fe?F&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,he+1,0,0,Ne.width,Ne.height,Re,me,Ne.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,he+1,Ge,Ne.width,Ne.height,0,Re,me,Ne.data)}}else{Fe?F&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,Re,me,pe[Y]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,Ge,Re,me,pe[Y]);for(let he=0;he<X.length;he++){let ce=X[he];Fe?F&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,he+1,0,0,Re,me,ce.image[Y]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,he+1,Ge,Re,me,ce.image[Y])}}}b(E)&&f(s.TEXTURE_CUBE_MAP),K.__version=Q.version,E.onUpdate&&E.onUpdate(E)}I.__version=E.version}function de(I,E,j,J,Q,K){let ve=i.convert(j.format,j.colorSpace),oe=i.convert(j.type),be=w(j.internalFormat,ve,oe,j.colorSpace),We=a.get(E),te=a.get(j);if(te.__renderTarget=E,!We.__hasExternalTextures){let pe=Math.max(1,E.width>>K),Se=Math.max(1,E.height>>K);Q===s.TEXTURE_3D||Q===s.TEXTURE_2D_ARRAY?t.texImage3D(Q,K,be,pe,Se,E.depth,0,ve,oe,null):t.texImage2D(Q,K,be,pe,Se,0,ve,oe,null)}t.bindFramebuffer(s.FRAMEBUFFER,I),He(E)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,J,Q,te.__webglTexture,0,je(E)):(Q===s.TEXTURE_2D||Q>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,J,Q,te.__webglTexture,K),t.bindFramebuffer(s.FRAMEBUFFER,null)}function ie(I,E,j){if(s.bindRenderbuffer(s.RENDERBUFFER,I),E.depthBuffer){let J=E.depthTexture,Q=J&&J.isDepthTexture?J.type:null,K=m(E.stencilBuffer,Q),ve=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,oe=je(E);He(E)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,oe,K,E.width,E.height):j?s.renderbufferStorageMultisample(s.RENDERBUFFER,oe,K,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,K,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,ve,s.RENDERBUFFER,I)}else{let J=E.textures;for(let Q=0;Q<J.length;Q++){let K=J[Q],ve=i.convert(K.format,K.colorSpace),oe=i.convert(K.type),be=w(K.internalFormat,ve,oe,K.colorSpace),We=je(E);j&&He(E)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,We,be,E.width,E.height):He(E)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,We,be,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,be,E.width,E.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ee(I,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,I),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let J=a.get(E.depthTexture);J.__renderTarget=E,(!J.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),q(E.depthTexture,0);let Q=J.__webglTexture,K=je(E);if(E.depthTexture.format===Cn)He(E)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Q,0,K):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Q,0);else if(E.depthTexture.format===Nn)He(E)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Q,0,K):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function ke(I){let E=a.get(I),j=I.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==I.depthTexture){let J=I.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),J){let Q=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,J.removeEventListener("dispose",Q)};J.addEventListener("dispose",Q),E.__depthDisposeCallback=Q}E.__boundDepthTexture=J}if(I.depthTexture&&!E.__autoAllocateDepthBuffer){if(j)throw new Error("target.depthTexture not supported in Cube render targets");Ee(E.__webglFramebuffer,I)}else if(j){E.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[J]),E.__webglDepthbuffer[J]===void 0)E.__webglDepthbuffer[J]=s.createRenderbuffer(),ie(E.__webglDepthbuffer[J],I,!1);else{let Q=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,K=E.__webglDepthbuffer[J];s.bindRenderbuffer(s.RENDERBUFFER,K),s.framebufferRenderbuffer(s.FRAMEBUFFER,Q,s.RENDERBUFFER,K)}}else if(t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=s.createRenderbuffer(),ie(E.__webglDepthbuffer,I,!1);else{let J=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Q=E.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Q),s.framebufferRenderbuffer(s.FRAMEBUFFER,J,s.RENDERBUFFER,Q)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Oe(I,E,j){let J=a.get(I);E!==void 0&&de(J.__webglFramebuffer,I,I.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),j!==void 0&&ke(I)}function ht(I){let E=I.texture,j=a.get(I),J=a.get(E);I.addEventListener("dispose",T);let Q=I.textures,K=I.isWebGLCubeRenderTarget===!0,ve=Q.length>1;if(ve||(J.__webglTexture===void 0&&(J.__webglTexture=s.createTexture()),J.__version=E.version,r.memory.textures++),K){j.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(E.mipmaps&&E.mipmaps.length>0){j.__webglFramebuffer[oe]=[];for(let be=0;be<E.mipmaps.length;be++)j.__webglFramebuffer[oe][be]=s.createFramebuffer()}else j.__webglFramebuffer[oe]=s.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){j.__webglFramebuffer=[];for(let oe=0;oe<E.mipmaps.length;oe++)j.__webglFramebuffer[oe]=s.createFramebuffer()}else j.__webglFramebuffer=s.createFramebuffer();if(ve)for(let oe=0,be=Q.length;oe<be;oe++){let We=a.get(Q[oe]);We.__webglTexture===void 0&&(We.__webglTexture=s.createTexture(),r.memory.textures++)}if(I.samples>0&&He(I)===!1){j.__webglMultisampledFramebuffer=s.createFramebuffer(),j.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let oe=0;oe<Q.length;oe++){let be=Q[oe];j.__webglColorRenderbuffer[oe]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,j.__webglColorRenderbuffer[oe]);let We=i.convert(be.format,be.colorSpace),te=i.convert(be.type),pe=w(be.internalFormat,We,te,be.colorSpace,I.isXRRenderTarget===!0),Se=je(I);s.renderbufferStorageMultisample(s.RENDERBUFFER,Se,pe,I.width,I.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+oe,s.RENDERBUFFER,j.__webglColorRenderbuffer[oe])}s.bindRenderbuffer(s.RENDERBUFFER,null),I.depthBuffer&&(j.__webglDepthRenderbuffer=s.createRenderbuffer(),ie(j.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(K){t.bindTexture(s.TEXTURE_CUBE_MAP,J.__webglTexture),Ae(s.TEXTURE_CUBE_MAP,E);for(let oe=0;oe<6;oe++)if(E.mipmaps&&E.mipmaps.length>0)for(let be=0;be<E.mipmaps.length;be++)de(j.__webglFramebuffer[oe][be],I,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,be);else de(j.__webglFramebuffer[oe],I,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);b(E)&&f(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ve){for(let oe=0,be=Q.length;oe<be;oe++){let We=Q[oe],te=a.get(We);t.bindTexture(s.TEXTURE_2D,te.__webglTexture),Ae(s.TEXTURE_2D,We),de(j.__webglFramebuffer,I,We,s.COLOR_ATTACHMENT0+oe,s.TEXTURE_2D,0),b(We)&&f(s.TEXTURE_2D)}t.unbindTexture()}else{let oe=s.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(oe=I.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(oe,J.__webglTexture),Ae(oe,E),E.mipmaps&&E.mipmaps.length>0)for(let be=0;be<E.mipmaps.length;be++)de(j.__webglFramebuffer[be],I,E,s.COLOR_ATTACHMENT0,oe,be);else de(j.__webglFramebuffer,I,E,s.COLOR_ATTACHMENT0,oe,0);b(E)&&f(oe),t.unbindTexture()}I.depthBuffer&&ke(I)}function Ve(I){let E=I.textures;for(let j=0,J=E.length;j<J;j++){let Q=E[j];if(b(Q)){let K=v(I),ve=a.get(Q).__webglTexture;t.bindTexture(K,ve),f(K),t.unbindTexture()}}}let ut=[],N=[];function na(I){if(I.samples>0){if(He(I)===!1){let E=I.textures,j=I.width,J=I.height,Q=s.COLOR_BUFFER_BIT,K=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ve=a.get(I),oe=E.length>1;if(oe)for(let be=0;be<E.length;be++)t.bindFramebuffer(s.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+be,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,ve.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+be,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,ve.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ve.__webglFramebuffer);for(let be=0;be<E.length;be++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(Q|=s.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(Q|=s.STENCIL_BUFFER_BIT)),oe){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ve.__webglColorRenderbuffer[be]);let We=a.get(E[be]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,We,0)}s.blitFramebuffer(0,0,j,J,0,0,j,J,Q,s.NEAREST),c===!0&&(ut.length=0,N.length=0,ut.push(s.COLOR_ATTACHMENT0+be),I.depthBuffer&&I.resolveDepthBuffer===!1&&(ut.push(K),N.push(K),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,N)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ut))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),oe)for(let be=0;be<E.length;be++){t.bindFramebuffer(s.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+be,s.RENDERBUFFER,ve.__webglColorRenderbuffer[be]);let We=a.get(E[be]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,ve.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+be,s.TEXTURE_2D,We,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ve.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&c){let E=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[E])}}}function je(I){return Math.min(n.maxSamples,I.samples)}function He(I){let E=a.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function ye(I){let E=r.render.frame;l.get(I)!==E&&(l.set(I,E),I.update())}function nt(I,E){let j=I.colorSpace,J=I.format,Q=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||j!==Rt&&j!==tn&&(Ue.getTransfer(j)===Je?(J!==aa||Q!==Fa)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",j)),E}function _e(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(h.width=I.naturalWidth||I.width,h.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(h.width=I.displayWidth,h.height=I.displayHeight):(h.width=I.width,h.height=I.height),h}this.allocateTextureUnit=P,this.resetTextureUnits=O,this.setTexture2D=q,this.setTexture2DArray=B,this.setTexture3D=V,this.setTextureCube=z,this.rebindTextures=Oe,this.setupRenderTarget=ht,this.updateRenderTargetMipmap=Ve,this.updateMultisampleRenderTarget=na,this.setupDepthRenderbuffer=ke,this.setupFrameBufferTexture=de,this.useMultisampledRTT=He}function vx(s,e){function t(a,n=tn){let i,r=Ue.getTransfer(n);if(a===Fa)return s.UNSIGNED_BYTE;if(a===so)return s.UNSIGNED_SHORT_4_4_4_4;if(a===ro)return s.UNSIGNED_SHORT_5_5_5_1;if(a===th)return s.UNSIGNED_INT_5_9_9_9_REV;if(a===$c)return s.BYTE;if(a===eh)return s.SHORT;if(a===Fi)return s.UNSIGNED_SHORT;if(a===io)return s.INT;if(a===gn)return s.UNSIGNED_INT;if(a===la)return s.FLOAT;if(a===Ft)return s.HALF_FLOAT;if(a===ah)return s.ALPHA;if(a===nh)return s.RGB;if(a===aa)return s.RGBA;if(a===ih)return s.LUMINANCE;if(a===sh)return s.LUMINANCE_ALPHA;if(a===Cn)return s.DEPTH_COMPONENT;if(a===Nn)return s.DEPTH_STENCIL;if(a===oo)return s.RED;if(a===co)return s.RED_INTEGER;if(a===rh)return s.RG;if(a===ho)return s.RG_INTEGER;if(a===lo)return s.RGBA_INTEGER;if(a===Ps||a===Ns||a===Fs||a===Ds)if(r===Je)if(i=e.get("WEBGL_compressed_texture_s3tc_srgb"),i!==null){if(a===Ps)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===Ns)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===Fs)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===Ds)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(i=e.get("WEBGL_compressed_texture_s3tc"),i!==null){if(a===Ps)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===Ns)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===Fs)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===Ds)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===fo||a===uo||a===bo||a===po)if(i=e.get("WEBGL_compressed_texture_pvrtc"),i!==null){if(a===fo)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===uo)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===bo)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===po)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===mo||a===go||a===xo)if(i=e.get("WEBGL_compressed_texture_etc"),i!==null){if(a===mo||a===go)return r===Je?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(a===xo)return r===Je?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===vo||a===yo||a===_o||a===Mo||a===wo||a===Ao||a===Eo||a===So||a===To||a===Ro||a===Io||a===Co||a===ko||a===Po)if(i=e.get("WEBGL_compressed_texture_astc"),i!==null){if(a===vo)return r===Je?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===yo)return r===Je?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===_o)return r===Je?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===Mo)return r===Je?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===wo)return r===Je?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===Ao)return r===Je?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===Eo)return r===Je?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===So)return r===Je?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===To)return r===Je?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===Ro)return r===Je?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===Io)return r===Je?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===Co)return r===Je?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===ko)return r===Je?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===Po)return r===Je?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===Ls||a===No||a===Fo)if(i=e.get("EXT_texture_compression_bptc"),i!==null){if(a===Ls)return r===Je?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===No)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===Fo)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===oh||a===Do||a===Lo||a===Uo)if(i=e.get("EXT_texture_compression_rgtc"),i!==null){if(a===Ls)return i.COMPRESSED_RED_RGTC1_EXT;if(a===Do)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===Lo)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===Uo)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===Kn?s.UNSIGNED_INT_24_8:s[a]!==void 0?s[a]:null}return{convert:t}}var yx={type:"move"},Bs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $t,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $t,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $t,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let a of e.hand.values())this._getHandJoint(t,a)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,a){let n=null,i=null,r=null,o=this._targetRay,c=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){r=!0;for(let g of e.hand.values()){let b=t.getJointPose(g,a),f=this._getHandJoint(h,g);b!==null&&(f.matrix.fromArray(b.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=b.radius),f.visible=b!==null}let l=h.joints["index-finger-tip"],d=h.joints["thumb-tip"],u=l.position.distanceTo(d.position),p=.02,x=.005;h.inputState.pinching&&u>p+x?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&u<=p-x&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,a),i!==null&&(c.matrix.fromArray(i.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,i.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(i.linearVelocity)):c.hasLinearVelocity=!1,i.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(i.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(n=t.getPose(e.targetRaySpace,a),n===null&&i!==null&&(n=i),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(yx)))}return o!==null&&(o.visible=n!==null),c!==null&&(c.visible=i!==null),h!==null&&(h.visible=r!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let a=new $t;a.matrixAutoUpdate=!1,a.visible=!1,e.joints[t.jointName]=a,e.add(a)}return e.joints[t.jointName]}},_x=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Mx=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Ch=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,a){if(this.texture===null){let n=new vt,i=e.properties.get(n);i.__webglTexture=t.texture,(t.depthNear!=a.depthNear||t.depthFar!=a.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,a=new rt({vertexShader:_x,fragmentShader:Mx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new st(new un(20,20),a)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},kh=class extends va{constructor(e,t){super();let a=this,n=null,i=1,r=null,o="local-floor",c=1,h=null,l=null,d=null,u=null,p=null,x=null,g=new Ch,b=t.getContextAttributes(),f=null,v=null,w=[],m=[],M=new ue,A=null,T=new gt;T.viewport=new Ke;let R=new gt;R.viewport=new Ke;let _=[T,R],y=new Br,C=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let $=w[W];return $===void 0&&($=new Bs,w[W]=$),$.getTargetRaySpace()},this.getControllerGrip=function(W){let $=w[W];return $===void 0&&($=new Bs,w[W]=$),$.getGripSpace()},this.getHand=function(W){let $=w[W];return $===void 0&&($=new Bs,w[W]=$),$.getHandSpace()};function P(W){let $=m.indexOf(W.inputSource);if($===-1)return;let de=w[$];de!==void 0&&(de.update(W.inputSource,W.frame,h||r),de.dispatchEvent({type:W.type,data:W.inputSource}))}function U(){n.removeEventListener("select",P),n.removeEventListener("selectstart",P),n.removeEventListener("selectend",P),n.removeEventListener("squeeze",P),n.removeEventListener("squeezestart",P),n.removeEventListener("squeezeend",P),n.removeEventListener("end",U),n.removeEventListener("inputsourceschange",q);for(let W=0;W<w.length;W++){let $=m[W];$!==null&&(m[W]=null,w[W].disconnect($))}C=null,O=null,g.reset(),e.setRenderTarget(f),p=null,u=null,d=null,n=null,v=null,Be.stop(),a.isPresenting=!1,e.setPixelRatio(A),e.setSize(M.width,M.height,!1),a.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){i=W,a.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){o=W,a.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||r},this.setReferenceSpace=function(W){h=W},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return d},this.getFrame=function(){return x},this.getSession=function(){return n},this.setSession=async function(W){if(n=W,n!==null){if(f=e.getRenderTarget(),n.addEventListener("select",P),n.addEventListener("selectstart",P),n.addEventListener("selectend",P),n.addEventListener("squeeze",P),n.addEventListener("squeezestart",P),n.addEventListener("squeezeend",P),n.addEventListener("end",U),n.addEventListener("inputsourceschange",q),b.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(M),n.renderState.layers===void 0){let $={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:i};p=new XRWebGLLayer(n,t,$),n.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new xt(p.framebufferWidth,p.framebufferHeight,{format:aa,type:Fa,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil})}else{let $=null,de=null,ie=null;b.depth&&(ie=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,$=b.stencil?Nn:Cn,de=b.stencil?Kn:gn);let Ee={colorFormat:t.RGBA8,depthFormat:ie,scaleFactor:i};d=new XRWebGLBinding(n,t),u=d.createProjectionLayer(Ee),n.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),v=new xt(u.textureWidth,u.textureHeight,{format:aa,type:Fa,depthTexture:new ys(u.textureWidth,u.textureHeight,de,void 0,void 0,void 0,void 0,void 0,void 0,$),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),h=null,r=await n.requestReferenceSpace(o),Be.setContext(n),Be.start(),a.isPresenting=!0,a.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function q(W){for(let $=0;$<W.removed.length;$++){let de=W.removed[$],ie=m.indexOf(de);ie>=0&&(m[ie]=null,w[ie].disconnect(de))}for(let $=0;$<W.added.length;$++){let de=W.added[$],ie=m.indexOf(de);if(ie===-1){for(let ke=0;ke<w.length;ke++)if(ke>=m.length){m.push(de),ie=ke;break}else if(m[ke]===null){m[ke]=de,ie=ke;break}if(ie===-1)break}let Ee=w[ie];Ee&&Ee.connect(de)}}let B=new k,V=new k;function z(W,$,de){B.setFromMatrixPosition($.matrixWorld),V.setFromMatrixPosition(de.matrixWorld);let ie=B.distanceTo(V),Ee=$.projectionMatrix.elements,ke=de.projectionMatrix.elements,Oe=Ee[14]/(Ee[10]-1),ht=Ee[14]/(Ee[10]+1),Ve=(Ee[9]+1)/Ee[5],ut=(Ee[9]-1)/Ee[5],N=(Ee[8]-1)/Ee[0],na=(ke[8]+1)/ke[0],je=Oe*N,He=Oe*na,ye=ie/(-N+na),nt=ye*-N;if($.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(nt),W.translateZ(ye),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),Ee[10]===-1)W.projectionMatrix.copy($.projectionMatrix),W.projectionMatrixInverse.copy($.projectionMatrixInverse);else{let _e=Oe+ye,I=ht+ye,E=je-nt,j=He+(ie-nt),J=Ve*ht/I*_e,Q=ut*ht/I*_e;W.projectionMatrix.makePerspective(E,j,J,Q,_e,I),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function Z(W,$){$===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices($.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(n===null)return;let $=W.near,de=W.far;g.texture!==null&&(g.depthNear>0&&($=g.depthNear),g.depthFar>0&&(de=g.depthFar)),y.near=R.near=T.near=$,y.far=R.far=T.far=de,(C!==y.near||O!==y.far)&&(n.updateRenderState({depthNear:y.near,depthFar:y.far}),C=y.near,O=y.far),T.layers.mask=W.layers.mask|2,R.layers.mask=W.layers.mask|4,y.layers.mask=T.layers.mask|R.layers.mask;let ie=W.parent,Ee=y.cameras;Z(y,ie);for(let ke=0;ke<Ee.length;ke++)Z(Ee[ke],ie);Ee.length===2?z(y,T,R):y.projectionMatrix.copy(T.projectionMatrix),ae(W,y,ie)};function ae(W,$,de){de===null?W.matrix.copy($.matrixWorld):(W.matrix.copy(de.matrixWorld),W.matrix.invert(),W.matrix.multiply($.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy($.projectionMatrix),W.projectionMatrixInverse.copy($.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Ln*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(u===null&&p===null))return c},this.setFoveation=function(W){c=W,u!==null&&(u.fixedFoveation=W),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=W)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(y)};let le=null;function Ae(W,$){if(l=$.getViewerPose(h||r),x=$,l!==null){let de=l.views;p!==null&&(e.setRenderTargetFramebuffer(v,p.framebuffer),e.setRenderTarget(v));let ie=!1;de.length!==y.cameras.length&&(y.cameras.length=0,ie=!0);for(let ke=0;ke<de.length;ke++){let Oe=de[ke],ht=null;if(p!==null)ht=p.getViewport(Oe);else{let ut=d.getViewSubImage(u,Oe);ht=ut.viewport,ke===0&&(e.setRenderTargetTextures(v,ut.colorTexture,u.ignoreDepthValues?void 0:ut.depthStencilTexture),e.setRenderTarget(v))}let Ve=_[ke];Ve===void 0&&(Ve=new gt,Ve.layers.enable(ke),Ve.viewport=new Ke,_[ke]=Ve),Ve.matrix.fromArray(Oe.transform.matrix),Ve.matrix.decompose(Ve.position,Ve.quaternion,Ve.scale),Ve.projectionMatrix.fromArray(Oe.projectionMatrix),Ve.projectionMatrixInverse.copy(Ve.projectionMatrix).invert(),Ve.viewport.set(ht.x,ht.y,ht.width,ht.height),ke===0&&(y.matrix.copy(Ve.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),ie===!0&&y.cameras.push(Ve)}let Ee=n.enabledFeatures;if(Ee&&Ee.includes("depth-sensing")){let ke=d.getDepthInformation(de[0]);ke&&ke.isValid&&ke.texture&&g.init(e,ke,n.renderState)}}for(let de=0;de<w.length;de++){let ie=m[de],Ee=w[de];ie!==null&&Ee!==void 0&&Ee.update(ie,$,h||r)}le&&le(W,$),$.detectedPlanes&&a.dispatchEvent({type:"planesdetected",data:$}),x=null}let Be=new Sf;Be.setAnimationLoop(Ae),this.setAnimationLoop=function(W){le=W},this.dispose=function(){}}},Qn=new ya,wx=new Te;function Ax(s,e){function t(b,f){b.matrixAutoUpdate===!0&&b.updateMatrix(),f.value.copy(b.matrix)}function a(b,f){f.color.getRGB(b.fogColor.value,bh(s)),f.isFog?(b.fogNear.value=f.near,b.fogFar.value=f.far):f.isFogExp2&&(b.fogDensity.value=f.density)}function n(b,f,v,w,m){f.isMeshBasicMaterial||f.isMeshLambertMaterial?i(b,f):f.isMeshToonMaterial?(i(b,f),d(b,f)):f.isMeshPhongMaterial?(i(b,f),l(b,f)):f.isMeshStandardMaterial?(i(b,f),u(b,f),f.isMeshPhysicalMaterial&&p(b,f,m)):f.isMeshMatcapMaterial?(i(b,f),x(b,f)):f.isMeshDepthMaterial?i(b,f):f.isMeshDistanceMaterial?(i(b,f),g(b,f)):f.isMeshNormalMaterial?i(b,f):f.isLineBasicMaterial?(r(b,f),f.isLineDashedMaterial&&o(b,f)):f.isPointsMaterial?c(b,f,v,w):f.isSpriteMaterial?h(b,f):f.isShadowMaterial?(b.color.value.copy(f.color),b.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function i(b,f){b.opacity.value=f.opacity,f.color&&b.diffuse.value.copy(f.color),f.emissive&&b.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(b.map.value=f.map,t(f.map,b.mapTransform)),f.alphaMap&&(b.alphaMap.value=f.alphaMap,t(f.alphaMap,b.alphaMapTransform)),f.bumpMap&&(b.bumpMap.value=f.bumpMap,t(f.bumpMap,b.bumpMapTransform),b.bumpScale.value=f.bumpScale,f.side===Bt&&(b.bumpScale.value*=-1)),f.normalMap&&(b.normalMap.value=f.normalMap,t(f.normalMap,b.normalMapTransform),b.normalScale.value.copy(f.normalScale),f.side===Bt&&b.normalScale.value.negate()),f.displacementMap&&(b.displacementMap.value=f.displacementMap,t(f.displacementMap,b.displacementMapTransform),b.displacementScale.value=f.displacementScale,b.displacementBias.value=f.displacementBias),f.emissiveMap&&(b.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,b.emissiveMapTransform)),f.specularMap&&(b.specularMap.value=f.specularMap,t(f.specularMap,b.specularMapTransform)),f.alphaTest>0&&(b.alphaTest.value=f.alphaTest);let v=e.get(f),w=v.envMap,m=v.envMapRotation;w&&(b.envMap.value=w,Qn.copy(m),Qn.x*=-1,Qn.y*=-1,Qn.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Qn.y*=-1,Qn.z*=-1),b.envMapRotation.value.setFromMatrix4(wx.makeRotationFromEuler(Qn)),b.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,b.reflectivity.value=f.reflectivity,b.ior.value=f.ior,b.refractionRatio.value=f.refractionRatio),f.lightMap&&(b.lightMap.value=f.lightMap,b.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,b.lightMapTransform)),f.aoMap&&(b.aoMap.value=f.aoMap,b.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,b.aoMapTransform))}function r(b,f){b.diffuse.value.copy(f.color),b.opacity.value=f.opacity,f.map&&(b.map.value=f.map,t(f.map,b.mapTransform))}function o(b,f){b.dashSize.value=f.dashSize,b.totalSize.value=f.dashSize+f.gapSize,b.scale.value=f.scale}function c(b,f,v,w){b.diffuse.value.copy(f.color),b.opacity.value=f.opacity,b.size.value=f.size*v,b.scale.value=w*.5,f.map&&(b.map.value=f.map,t(f.map,b.uvTransform)),f.alphaMap&&(b.alphaMap.value=f.alphaMap,t(f.alphaMap,b.alphaMapTransform)),f.alphaTest>0&&(b.alphaTest.value=f.alphaTest)}function h(b,f){b.diffuse.value.copy(f.color),b.opacity.value=f.opacity,b.rotation.value=f.rotation,f.map&&(b.map.value=f.map,t(f.map,b.mapTransform)),f.alphaMap&&(b.alphaMap.value=f.alphaMap,t(f.alphaMap,b.alphaMapTransform)),f.alphaTest>0&&(b.alphaTest.value=f.alphaTest)}function l(b,f){b.specular.value.copy(f.specular),b.shininess.value=Math.max(f.shininess,1e-4)}function d(b,f){f.gradientMap&&(b.gradientMap.value=f.gradientMap)}function u(b,f){b.metalness.value=f.metalness,f.metalnessMap&&(b.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,b.metalnessMapTransform)),b.roughness.value=f.roughness,f.roughnessMap&&(b.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,b.roughnessMapTransform)),f.envMap&&(b.envMapIntensity.value=f.envMapIntensity)}function p(b,f,v){b.ior.value=f.ior,f.sheen>0&&(b.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),b.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(b.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,b.sheenColorMapTransform)),f.sheenRoughnessMap&&(b.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,b.sheenRoughnessMapTransform))),f.clearcoat>0&&(b.clearcoat.value=f.clearcoat,b.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(b.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,b.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(b.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,b.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(b.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,b.clearcoatNormalMapTransform),b.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Bt&&b.clearcoatNormalScale.value.negate())),f.dispersion>0&&(b.dispersion.value=f.dispersion),f.iridescence>0&&(b.iridescence.value=f.iridescence,b.iridescenceIOR.value=f.iridescenceIOR,b.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],b.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(b.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,b.iridescenceMapTransform)),f.iridescenceThicknessMap&&(b.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,b.iridescenceThicknessMapTransform))),f.transmission>0&&(b.transmission.value=f.transmission,b.transmissionSamplerMap.value=v.texture,b.transmissionSamplerSize.value.set(v.width,v.height),f.transmissionMap&&(b.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,b.transmissionMapTransform)),b.thickness.value=f.thickness,f.thicknessMap&&(b.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,b.thicknessMapTransform)),b.attenuationDistance.value=f.attenuationDistance,b.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(b.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(b.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,b.anisotropyMapTransform))),b.specularIntensity.value=f.specularIntensity,b.specularColor.value.copy(f.specularColor),f.specularColorMap&&(b.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,b.specularColorMapTransform)),f.specularIntensityMap&&(b.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,b.specularIntensityMapTransform))}function x(b,f){f.matcap&&(b.matcap.value=f.matcap)}function g(b,f){let v=e.get(f).light;b.referencePosition.value.setFromMatrixPosition(v.matrixWorld),b.nearDistance.value=v.shadow.camera.near,b.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:a,refreshMaterialUniforms:n}}function Ex(s,e,t,a){let n={},i={},r=[],o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,w){let m=w.program;a.uniformBlockBinding(v,m)}function h(v,w){let m=n[v.id];m===void 0&&(x(v),m=l(v),n[v.id]=m,v.addEventListener("dispose",b));let M=w.program;a.updateUBOMapping(v,M);let A=e.render.frame;i[v.id]!==A&&(u(v),i[v.id]=A)}function l(v){let w=d();v.__bindingPointIndex=w;let m=s.createBuffer(),M=v.__size,A=v.usage;return s.bindBuffer(s.UNIFORM_BUFFER,m),s.bufferData(s.UNIFORM_BUFFER,M,A),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,w,m),m}function d(){for(let v=0;v<o;v++)if(r.indexOf(v)===-1)return r.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(v){let w=n[v.id],m=v.uniforms,M=v.__cache;s.bindBuffer(s.UNIFORM_BUFFER,w);for(let A=0,T=m.length;A<T;A++){let R=Array.isArray(m[A])?m[A]:[m[A]];for(let _=0,y=R.length;_<y;_++){let C=R[_];if(p(C,A,_,M)===!0){let O=C.__offset,P=Array.isArray(C.value)?C.value:[C.value],U=0;for(let q=0;q<P.length;q++){let B=P[q],V=g(B);typeof B=="number"||typeof B=="boolean"?(C.__data[0]=B,s.bufferSubData(s.UNIFORM_BUFFER,O+U,C.__data)):B.isMatrix3?(C.__data[0]=B.elements[0],C.__data[1]=B.elements[1],C.__data[2]=B.elements[2],C.__data[3]=0,C.__data[4]=B.elements[3],C.__data[5]=B.elements[4],C.__data[6]=B.elements[5],C.__data[7]=0,C.__data[8]=B.elements[6],C.__data[9]=B.elements[7],C.__data[10]=B.elements[8],C.__data[11]=0):(B.toArray(C.__data,U),U+=V.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,O,C.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function p(v,w,m,M){let A=v.value,T=w+"_"+m;if(M[T]===void 0)return typeof A=="number"||typeof A=="boolean"?M[T]=A:M[T]=A.clone(),!0;{let R=M[T];if(typeof A=="number"||typeof A=="boolean"){if(R!==A)return M[T]=A,!0}else if(R.equals(A)===!1)return R.copy(A),!0}return!1}function x(v){let w=v.uniforms,m=0,M=16;for(let T=0,R=w.length;T<R;T++){let _=Array.isArray(w[T])?w[T]:[w[T]];for(let y=0,C=_.length;y<C;y++){let O=_[y],P=Array.isArray(O.value)?O.value:[O.value];for(let U=0,q=P.length;U<q;U++){let B=P[U],V=g(B),z=m%M,Z=z%V.boundary,ae=z+Z;m+=Z,ae!==0&&M-ae<V.storage&&(m+=M-ae),O.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=m,m+=V.storage}}}let A=m%M;return A>0&&(m+=M-A),v.__size=m,v.__cache={},this}function g(v){let w={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(w.boundary=4,w.storage=4):v.isVector2?(w.boundary=8,w.storage=8):v.isVector3||v.isColor?(w.boundary=16,w.storage=12):v.isVector4?(w.boundary=16,w.storage=16):v.isMatrix3?(w.boundary=48,w.storage=48):v.isMatrix4?(w.boundary=64,w.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),w}function b(v){let w=v.target;w.removeEventListener("dispose",b);let m=r.indexOf(w.__bindingPointIndex);r.splice(m,1),s.deleteBuffer(n[w.id]),delete n[w.id],delete i[w.id]}function f(){for(let v in n)s.deleteBuffer(n[v]);r=[],n={},i={}}return{bind:c,update:h,dispose:f}}var Vo=class{constructor(e={}){let{canvas:t=Kd(),context:a=null,depth:n=!0,stencil:i=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:h=!1,powerPreference:l="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:u=!1}=e;this.isWebGLRenderer=!0;let p;if(a!==null){if(typeof WebGLRenderingContext<"u"&&a instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=a.getContextAttributes().alpha}else p=r;let x=new Uint32Array(4),g=new Int32Array(4),b=null,f=null,v=[],w=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ft,this.toneMapping=en,this.toneMappingExposure=1;let m=this,M=!1,A=0,T=0,R=null,_=-1,y=null,C=new Ke,O=new Ke,P=null,U=new ge(0),q=0,B=t.width,V=t.height,z=1,Z=null,ae=null,le=new Ke(0,0,B,V),Ae=new Ke(0,0,B,V),Be=!1,W=new Ai,$=!1,de=!1,ie=new Te,Ee=new Te,ke=new k,Oe=new Ke,ht={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ve=!1;function ut(){return R===null?z:1}let N=a;function na(S,D){return t.getContext(S,D)}try{let S={alpha:!0,depth:n,stencil:i,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:h,powerPreference:l,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"171"}`),t.addEventListener("webglcontextlost",Y,!1),t.addEventListener("webglcontextrestored",he,!1),t.addEventListener("webglcontextcreationerror",ce,!1),N===null){let D="webgl2";if(N=na(D,S),N===null)throw na(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let je,He,ye,nt,_e,I,E,j,J,Q,K,ve,oe,be,We,te,pe,Se,Re,me,Ge,Fe,at,F;function se(){je=new Hm(N),je.init(),Fe=new vx(N,je),He=new Lm(N,je,e,Fe),ye=new gx(N,je),He.reverseDepthBuffer&&u&&ye.buffers.depth.setReversed(!0),nt=new Wm(N),_e=new ix,I=new xx(N,je,ye,_e,He,Fe,nt),E=new Om(m),j=new jm(m),J=new Qu(N),at=new Fm(N,J),Q=new Gm(N,J,nt,at),K=new Xm(N,Q,J,nt),Re=new qm(N,He,I),te=new Um(_e),ve=new nx(m,E,j,je,He,at,te),oe=new Ax(m,_e),be=new rx,We=new fx(je),Se=new Nm(m,E,j,ye,K,p,c),pe=new px(m,K,He),F=new Ex(N,nt,He,ye),me=new Dm(N,je,nt),Ge=new Vm(N,je,nt),nt.programs=ve.programs,m.capabilities=He,m.extensions=je,m.properties=_e,m.renderLists=be,m.shadowMap=pe,m.state=ye,m.info=nt}se();let X=new kh(m,N);this.xr=X,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let S=je.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=je.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(S){S!==void 0&&(z=S,this.setSize(B,V,!1))},this.getSize=function(S){return S.set(B,V)},this.setSize=function(S,D,H=!0){if(X.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=S,V=D,t.width=Math.floor(S*z),t.height=Math.floor(D*z),H===!0&&(t.style.width=S+"px",t.style.height=D+"px"),this.setViewport(0,0,S,D)},this.getDrawingBufferSize=function(S){return S.set(B*z,V*z).floor()},this.setDrawingBufferSize=function(S,D,H){B=S,V=D,z=H,t.width=Math.floor(S*H),t.height=Math.floor(D*H),this.setViewport(0,0,S,D)},this.getCurrentViewport=function(S){return S.copy(C)},this.getViewport=function(S){return S.copy(le)},this.setViewport=function(S,D,H,G){S.isVector4?le.set(S.x,S.y,S.z,S.w):le.set(S,D,H,G),ye.viewport(C.copy(le).multiplyScalar(z).round())},this.getScissor=function(S){return S.copy(Ae)},this.setScissor=function(S,D,H,G){S.isVector4?Ae.set(S.x,S.y,S.z,S.w):Ae.set(S,D,H,G),ye.scissor(O.copy(Ae).multiplyScalar(z).round())},this.getScissorTest=function(){return Be},this.setScissorTest=function(S){ye.setScissorTest(Be=S)},this.setOpaqueSort=function(S){Z=S},this.setTransparentSort=function(S){ae=S},this.getClearColor=function(S){return S.copy(Se.getClearColor())},this.setClearColor=function(){Se.setClearColor.apply(Se,arguments)},this.getClearAlpha=function(){return Se.getClearAlpha()},this.setClearAlpha=function(){Se.setClearAlpha.apply(Se,arguments)},this.clear=function(S=!0,D=!0,H=!0){let G=0;if(S){let L=!1;if(R!==null){let ee=R.texture.format;L=ee===lo||ee===ho||ee===co}if(L){let ee=R.texture.type,re=ee===Fa||ee===gn||ee===Fi||ee===Kn||ee===so||ee===ro,fe=Se.getClearColor(),xe=Se.getClearAlpha(),Ie=fe.r,Ce=fe.g,Me=fe.b;re?(x[0]=Ie,x[1]=Ce,x[2]=Me,x[3]=xe,N.clearBufferuiv(N.COLOR,0,x)):(g[0]=Ie,g[1]=Ce,g[2]=Me,g[3]=xe,N.clearBufferiv(N.COLOR,0,g))}else G|=N.COLOR_BUFFER_BIT}D&&(G|=N.DEPTH_BUFFER_BIT),H&&(G|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Y,!1),t.removeEventListener("webglcontextrestored",he,!1),t.removeEventListener("webglcontextcreationerror",ce,!1),Se.dispose(),be.dispose(),We.dispose(),_e.dispose(),E.dispose(),j.dispose(),K.dispose(),at.dispose(),F.dispose(),ve.dispose(),X.dispose(),X.removeEventListener("sessionstart",_l),X.removeEventListener("sessionend",Ml),_n.stop()};function Y(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function he(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;let S=nt.autoReset,D=pe.enabled,H=pe.autoUpdate,G=pe.needsUpdate,L=pe.type;se(),nt.autoReset=S,pe.enabled=D,pe.autoUpdate=H,pe.needsUpdate=G,pe.type=L}function ce(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Ne(S){let D=S.target;D.removeEventListener("dispose",Ne),lt(D)}function lt(S){kt(S),_e.remove(S)}function kt(S){let D=_e.get(S).programs;D!==void 0&&(D.forEach(function(H){ve.releaseProgram(H)}),S.isShaderMaterial&&ve.releaseShaderCache(S))}this.renderBufferDirect=function(S,D,H,G,L,ee){D===null&&(D=ht);let re=L.isMesh&&L.matrixWorld.determinant()<0,fe=Jf(S,D,H,G,L);ye.setMaterial(G,re);let xe=H.index,Ie=1;if(G.wireframe===!0){if(xe=Q.getWireframeAttribute(H),xe===void 0)return;Ie=2}let Ce=H.drawRange,Me=H.attributes.position,qe=Ce.start*Ie,Ye=(Ce.start+Ce.count)*Ie;ee!==null&&(qe=Math.max(qe,ee.start*Ie),Ye=Math.min(Ye,(ee.start+ee.count)*Ie)),xe!==null?(qe=Math.max(qe,0),Ye=Math.min(Ye,xe.count)):Me!=null&&(qe=Math.max(qe,0),Ye=Math.min(Ye,Me.count));let pt=Ye-qe;if(pt<0||pt===1/0)return;at.setup(L,G,fe,H,xe);let dt,Xe=me;if(xe!==null&&(dt=J.get(xe),Xe=Ge,Xe.setIndex(dt)),L.isMesh)G.wireframe===!0?(ye.setLineWidth(G.wireframeLinewidth*ut()),Xe.setMode(N.LINES)):Xe.setMode(N.TRIANGLES);else if(L.isLine){let we=G.linewidth;we===void 0&&(we=1),ye.setLineWidth(we*ut()),L.isLineSegments?Xe.setMode(N.LINES):L.isLineLoop?Xe.setMode(N.LINE_LOOP):Xe.setMode(N.LINE_STRIP)}else L.isPoints?Xe.setMode(N.POINTS):L.isSprite&&Xe.setMode(N.TRIANGLES);if(L.isBatchedMesh)if(L._multiDrawInstances!==null)Xe.renderMultiDrawInstances(L._multiDrawStarts,L._multiDrawCounts,L._multiDrawCount,L._multiDrawInstances);else if(je.get("WEBGL_multi_draw"))Xe.renderMultiDraw(L._multiDrawStarts,L._multiDrawCounts,L._multiDrawCount);else{let we=L._multiDrawStarts,St=L._multiDrawCounts,Ze=L._multiDrawCount,ua=xe?J.get(xe).bytesPerElement:1,ni=_e.get(G).currentProgram.getUniforms();for(let Yt=0;Yt<Ze;Yt++)ni.setValue(N,"_gl_DrawID",Yt),Xe.render(we[Yt]/ua,St[Yt])}else if(L.isInstancedMesh)Xe.renderInstances(qe,pt,L.count);else if(H.isInstancedBufferGeometry){let we=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,St=Math.min(H.instanceCount,we);Xe.renderInstances(qe,pt,St)}else Xe.render(qe,pt)};function Qe(S,D,H){S.transparent===!0&&S.side===Xt&&S.forceSinglePass===!1?(S.side=Bt,S.needsUpdate=!0,Ys(S,D,H),S.side=Gt,S.needsUpdate=!0,Ys(S,D,H),S.side=Xt):Ys(S,D,H)}this.compile=function(S,D,H=null){H===null&&(H=S),f=We.get(H),f.init(D),w.push(f),H.traverseVisible(function(L){L.isLight&&L.layers.test(D.layers)&&(f.pushLight(L),L.castShadow&&f.pushShadow(L))}),S!==H&&S.traverseVisible(function(L){L.isLight&&L.layers.test(D.layers)&&(f.pushLight(L),L.castShadow&&f.pushShadow(L))}),f.setupLights();let G=new Set;return S.traverse(function(L){if(!(L.isMesh||L.isPoints||L.isLine||L.isSprite))return;let ee=L.material;if(ee)if(Array.isArray(ee))for(let re=0;re<ee.length;re++){let fe=ee[re];Qe(fe,H,L),G.add(fe)}else Qe(ee,H,L),G.add(ee)}),w.pop(),f=null,G},this.compileAsync=function(S,D,H=null){let G=this.compile(S,D,H);return new Promise(L=>{function ee(){if(G.forEach(function(re){_e.get(re).currentProgram.isReady()&&G.delete(re)}),G.size===0){L(S);return}setTimeout(ee,10)}je.get("KHR_parallel_shader_compile")!==null?ee():setTimeout(ee,10)})};let fa=null;function Oa(S){fa&&fa(S)}function _l(){_n.stop()}function Ml(){_n.start()}let _n=new Sf;_n.setAnimationLoop(Oa),typeof self<"u"&&_n.setContext(self),this.setAnimationLoop=function(S){fa=S,X.setAnimationLoop(S),S===null?_n.stop():_n.start()},X.addEventListener("sessionstart",_l),X.addEventListener("sessionend",Ml),this.render=function(S,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),X.enabled===!0&&X.isPresenting===!0&&(X.cameraAutoUpdate===!0&&X.updateCamera(D),D=X.getCamera()),S.isScene===!0&&S.onBeforeRender(m,S,D,R),f=We.get(S,w.length),f.init(D),w.push(f),Ee.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),W.setFromProjectionMatrix(Ee),de=this.localClippingEnabled,$=te.init(this.clippingPlanes,de),b=be.get(S,v.length),b.init(),v.push(b),X.enabled===!0&&X.isPresenting===!0){let ee=m.xr.getDepthSensingMesh();ee!==null&&dc(ee,D,-1/0,m.sortObjects)}dc(S,D,0,m.sortObjects),b.finish(),m.sortObjects===!0&&b.sort(Z,ae),Ve=X.enabled===!1||X.isPresenting===!1||X.hasDepthSensing()===!1,Ve&&Se.addToRenderList(b,S),this.info.render.frame++,$===!0&&te.beginShadows();let H=f.state.shadowsArray;pe.render(H,S,D),$===!0&&te.endShadows(),this.info.autoReset===!0&&this.info.reset();let G=b.opaque,L=b.transmissive;if(f.setupLights(),D.isArrayCamera){let ee=D.cameras;if(L.length>0)for(let re=0,fe=ee.length;re<fe;re++){let xe=ee[re];Al(G,L,S,xe)}Ve&&Se.render(S);for(let re=0,fe=ee.length;re<fe;re++){let xe=ee[re];wl(b,S,xe,xe.viewport)}}else L.length>0&&Al(G,L,S,D),Ve&&Se.render(S),wl(b,S,D);R!==null&&(I.updateMultisampleRenderTarget(R),I.updateRenderTargetMipmap(R)),S.isScene===!0&&S.onAfterRender(m,S,D),at.resetDefaultState(),_=-1,y=null,w.pop(),w.length>0?(f=w[w.length-1],$===!0&&te.setGlobalState(m.clippingPlanes,f.state.camera)):f=null,v.pop(),v.length>0?b=v[v.length-1]:b=null};function dc(S,D,H,G){if(S.visible===!1)return;if(S.layers.test(D.layers)){if(S.isGroup)H=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(D);else if(S.isLight)f.pushLight(S),S.castShadow&&f.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||W.intersectsSprite(S)){G&&Oe.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Ee);let re=K.update(S),fe=S.material;fe.visible&&b.push(S,re,fe,H,Oe.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||W.intersectsObject(S))){let re=K.update(S),fe=S.material;if(G&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Oe.copy(S.boundingSphere.center)):(re.boundingSphere===null&&re.computeBoundingSphere(),Oe.copy(re.boundingSphere.center)),Oe.applyMatrix4(S.matrixWorld).applyMatrix4(Ee)),Array.isArray(fe)){let xe=re.groups;for(let Ie=0,Ce=xe.length;Ie<Ce;Ie++){let Me=xe[Ie],qe=fe[Me.materialIndex];qe&&qe.visible&&b.push(S,re,qe,H,Oe.z,Me)}}else fe.visible&&b.push(S,re,fe,H,Oe.z,null)}}let ee=S.children;for(let re=0,fe=ee.length;re<fe;re++)dc(ee[re],D,H,G)}function wl(S,D,H,G){let L=S.opaque,ee=S.transmissive,re=S.transparent;f.setupLightsView(H),$===!0&&te.setGlobalState(m.clippingPlanes,H),G&&ye.viewport(C.copy(G)),L.length>0&&Js(L,D,H),ee.length>0&&Js(ee,D,H),re.length>0&&Js(re,D,H),ye.buffers.depth.setTest(!0),ye.buffers.depth.setMask(!0),ye.buffers.color.setMask(!0),ye.setPolygonOffset(!1)}function Al(S,D,H,G){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[G.id]===void 0&&(f.state.transmissionRenderTarget[G.id]=new xt(1,1,{generateMipmaps:!0,type:je.has("EXT_color_buffer_half_float")||je.has("EXT_color_buffer_float")?Ft:Fa,minFilter:Ma,samples:4,stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ue.workingColorSpace}));let ee=f.state.transmissionRenderTarget[G.id],re=G.viewport||C;ee.setSize(re.z,re.w);let fe=m.getRenderTarget();m.setRenderTarget(ee),m.getClearColor(U),q=m.getClearAlpha(),q<1&&m.setClearColor(16777215,.5),m.clear(),Ve&&Se.render(H);let xe=m.toneMapping;m.toneMapping=en;let Ie=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),f.setupLightsView(G),$===!0&&te.setGlobalState(m.clippingPlanes,G),Js(S,H,G),I.updateMultisampleRenderTarget(ee),I.updateRenderTargetMipmap(ee),je.has("WEBGL_multisampled_render_to_texture")===!1){let Ce=!1;for(let Me=0,qe=D.length;Me<qe;Me++){let Ye=D[Me],pt=Ye.object,dt=Ye.geometry,Xe=Ye.material,we=Ye.group;if(Xe.side===Xt&&pt.layers.test(G.layers)){let St=Xe.side;Xe.side=Bt,Xe.needsUpdate=!0,El(pt,H,G,dt,Xe,we),Xe.side=St,Xe.needsUpdate=!0,Ce=!0}}Ce===!0&&(I.updateMultisampleRenderTarget(ee),I.updateRenderTargetMipmap(ee))}m.setRenderTarget(fe),m.setClearColor(U,q),Ie!==void 0&&(G.viewport=Ie),m.toneMapping=xe}function Js(S,D,H){let G=D.isScene===!0?D.overrideMaterial:null;for(let L=0,ee=S.length;L<ee;L++){let re=S[L],fe=re.object,xe=re.geometry,Ie=G===null?re.material:G,Ce=re.group;fe.layers.test(H.layers)&&El(fe,D,H,xe,Ie,Ce)}}function El(S,D,H,G,L,ee){S.onBeforeRender(m,D,H,G,L,ee),S.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),L.onBeforeRender(m,D,H,G,S,ee),L.transparent===!0&&L.side===Xt&&L.forceSinglePass===!1?(L.side=Bt,L.needsUpdate=!0,m.renderBufferDirect(H,D,G,L,S,ee),L.side=Gt,L.needsUpdate=!0,m.renderBufferDirect(H,D,G,L,S,ee),L.side=Xt):m.renderBufferDirect(H,D,G,L,S,ee),S.onAfterRender(m,D,H,G,L,ee)}function Ys(S,D,H){D.isScene!==!0&&(D=ht);let G=_e.get(S),L=f.state.lights,ee=f.state.shadowsArray,re=L.state.version,fe=ve.getParameters(S,L.state,ee,D,H),xe=ve.getProgramCacheKey(fe),Ie=G.programs;G.environment=S.isMeshStandardMaterial?D.environment:null,G.fog=D.fog,G.envMap=(S.isMeshStandardMaterial?j:E).get(S.envMap||G.environment),G.envMapRotation=G.environment!==null&&S.envMap===null?D.environmentRotation:S.envMapRotation,Ie===void 0&&(S.addEventListener("dispose",Ne),Ie=new Map,G.programs=Ie);let Ce=Ie.get(xe);if(Ce!==void 0){if(G.currentProgram===Ce&&G.lightsStateVersion===re)return Tl(S,fe),Ce}else fe.uniforms=ve.getUniforms(S),S.onBeforeCompile(fe,m),Ce=ve.acquireProgram(fe,xe),Ie.set(xe,Ce),G.uniforms=fe.uniforms;let Me=G.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Me.clippingPlanes=te.uniform),Tl(S,fe),G.needsLights=Zf(S),G.lightsStateVersion=re,G.needsLights&&(Me.ambientLightColor.value=L.state.ambient,Me.lightProbe.value=L.state.probe,Me.directionalLights.value=L.state.directional,Me.directionalLightShadows.value=L.state.directionalShadow,Me.spotLights.value=L.state.spot,Me.spotLightShadows.value=L.state.spotShadow,Me.rectAreaLights.value=L.state.rectArea,Me.ltc_1.value=L.state.rectAreaLTC1,Me.ltc_2.value=L.state.rectAreaLTC2,Me.pointLights.value=L.state.point,Me.pointLightShadows.value=L.state.pointShadow,Me.hemisphereLights.value=L.state.hemi,Me.directionalShadowMap.value=L.state.directionalShadowMap,Me.directionalShadowMatrix.value=L.state.directionalShadowMatrix,Me.spotShadowMap.value=L.state.spotShadowMap,Me.spotLightMatrix.value=L.state.spotLightMatrix,Me.spotLightMap.value=L.state.spotLightMap,Me.pointShadowMap.value=L.state.pointShadowMap,Me.pointShadowMatrix.value=L.state.pointShadowMatrix),G.currentProgram=Ce,G.uniformsList=null,Ce}function Sl(S){if(S.uniformsList===null){let D=S.currentProgram.getUniforms();S.uniformsList=Oi.seqWithValue(D.seq,S.uniforms)}return S.uniformsList}function Tl(S,D){let H=_e.get(S);H.outputColorSpace=D.outputColorSpace,H.batching=D.batching,H.batchingColor=D.batchingColor,H.instancing=D.instancing,H.instancingColor=D.instancingColor,H.instancingMorph=D.instancingMorph,H.skinning=D.skinning,H.morphTargets=D.morphTargets,H.morphNormals=D.morphNormals,H.morphColors=D.morphColors,H.morphTargetsCount=D.morphTargetsCount,H.numClippingPlanes=D.numClippingPlanes,H.numIntersection=D.numClipIntersection,H.vertexAlphas=D.vertexAlphas,H.vertexTangents=D.vertexTangents,H.toneMapping=D.toneMapping}function Jf(S,D,H,G,L){D.isScene!==!0&&(D=ht),I.resetTextureUnits();let ee=D.fog,re=G.isMeshStandardMaterial?D.environment:null,fe=R===null?m.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Rt,xe=(G.isMeshStandardMaterial?j:E).get(G.envMap||re),Ie=G.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Ce=!!H.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Me=!!H.morphAttributes.position,qe=!!H.morphAttributes.normal,Ye=!!H.morphAttributes.color,pt=en;G.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(pt=m.toneMapping);let dt=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Xe=dt!==void 0?dt.length:0,we=_e.get(G),St=f.state.lights;if($===!0&&(de===!0||S!==y)){let Lt=S===y&&G.id===_;te.setState(G,S,Lt)}let Ze=!1;G.version===we.__version?(we.needsLights&&we.lightsStateVersion!==St.state.version||we.outputColorSpace!==fe||L.isBatchedMesh&&we.batching===!1||!L.isBatchedMesh&&we.batching===!0||L.isBatchedMesh&&we.batchingColor===!0&&L.colorTexture===null||L.isBatchedMesh&&we.batchingColor===!1&&L.colorTexture!==null||L.isInstancedMesh&&we.instancing===!1||!L.isInstancedMesh&&we.instancing===!0||L.isSkinnedMesh&&we.skinning===!1||!L.isSkinnedMesh&&we.skinning===!0||L.isInstancedMesh&&we.instancingColor===!0&&L.instanceColor===null||L.isInstancedMesh&&we.instancingColor===!1&&L.instanceColor!==null||L.isInstancedMesh&&we.instancingMorph===!0&&L.morphTexture===null||L.isInstancedMesh&&we.instancingMorph===!1&&L.morphTexture!==null||we.envMap!==xe||G.fog===!0&&we.fog!==ee||we.numClippingPlanes!==void 0&&(we.numClippingPlanes!==te.numPlanes||we.numIntersection!==te.numIntersection)||we.vertexAlphas!==Ie||we.vertexTangents!==Ce||we.morphTargets!==Me||we.morphNormals!==qe||we.morphColors!==Ye||we.toneMapping!==pt||we.morphTargetsCount!==Xe)&&(Ze=!0):(Ze=!0,we.__version=G.version);let ua=we.currentProgram;Ze===!0&&(ua=Ys(G,D,L));let ni=!1,Yt=!1,Xi=!1,ot=ua.getUniforms(),ia=we.uniforms;if(ye.useProgram(ua.program)&&(ni=!0,Yt=!0,Xi=!0),G.id!==_&&(_=G.id,Yt=!0),ni||y!==S){ye.buffers.depth.getReversed()?(ie.copy(S.projectionMatrix),Yd(ie),Zd(ie),ot.setValue(N,"projectionMatrix",ie)):ot.setValue(N,"projectionMatrix",S.projectionMatrix),ot.setValue(N,"viewMatrix",S.matrixWorldInverse);let Ht=ot.map.cameraPosition;Ht!==void 0&&Ht.setValue(N,ke.setFromMatrixPosition(S.matrixWorld)),He.logarithmicDepthBuffer&&ot.setValue(N,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&ot.setValue(N,"isOrthographic",S.isOrthographicCamera===!0),y!==S&&(y=S,Yt=!0,Xi=!0)}if(L.isSkinnedMesh){ot.setOptional(N,L,"bindMatrix"),ot.setOptional(N,L,"bindMatrixInverse");let Lt=L.skeleton;Lt&&(Lt.boneTexture===null&&Lt.computeBoneTexture(),ot.setValue(N,"boneTexture",Lt.boneTexture,I))}L.isBatchedMesh&&(ot.setOptional(N,L,"batchingTexture"),ot.setValue(N,"batchingTexture",L._matricesTexture,I),ot.setOptional(N,L,"batchingIdTexture"),ot.setValue(N,"batchingIdTexture",L._indirectTexture,I),ot.setOptional(N,L,"batchingColorTexture"),L._colorsTexture!==null&&ot.setValue(N,"batchingColorTexture",L._colorsTexture,I));let sa=H.morphAttributes;if((sa.position!==void 0||sa.normal!==void 0||sa.color!==void 0)&&Re.update(L,H,ua),(Yt||we.receiveShadow!==L.receiveShadow)&&(we.receiveShadow=L.receiveShadow,ot.setValue(N,"receiveShadow",L.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(ia.envMap.value=xe,ia.flipEnvMap.value=xe.isCubeTexture&&xe.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&D.environment!==null&&(ia.envMapIntensity.value=D.environmentIntensity),Yt&&(ot.setValue(N,"toneMappingExposure",m.toneMappingExposure),we.needsLights&&Yf(ia,Xi),ee&&G.fog===!0&&oe.refreshFogUniforms(ia,ee),oe.refreshMaterialUniforms(ia,G,z,V,f.state.transmissionRenderTarget[S.id]),Oi.upload(N,Sl(we),ia,I)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Oi.upload(N,Sl(we),ia,I),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&ot.setValue(N,"center",L.center),ot.setValue(N,"modelViewMatrix",L.modelViewMatrix),ot.setValue(N,"normalMatrix",L.normalMatrix),ot.setValue(N,"modelMatrix",L.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){let Lt=G.uniformsGroups;for(let Ht=0,fc=Lt.length;Ht<fc;Ht++){let Mn=Lt[Ht];F.update(Mn,ua),F.bind(Mn,ua)}}return ua}function Yf(S,D){S.ambientLightColor.needsUpdate=D,S.lightProbe.needsUpdate=D,S.directionalLights.needsUpdate=D,S.directionalLightShadows.needsUpdate=D,S.pointLights.needsUpdate=D,S.pointLightShadows.needsUpdate=D,S.spotLights.needsUpdate=D,S.spotLightShadows.needsUpdate=D,S.rectAreaLights.needsUpdate=D,S.hemisphereLights.needsUpdate=D}function Zf(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(S,D,H){_e.get(S.texture).__webglTexture=D,_e.get(S.depthTexture).__webglTexture=H;let G=_e.get(S);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=H===void 0,G.__autoAllocateDepthBuffer||je.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,D){let H=_e.get(S);H.__webglFramebuffer=D,H.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(S,D=0,H=0){R=S,A=D,T=H;let G=!0,L=null,ee=!1,re=!1;if(S){let xe=_e.get(S);if(xe.__useDefaultFramebuffer!==void 0)ye.bindFramebuffer(N.FRAMEBUFFER,null),G=!1;else if(xe.__webglFramebuffer===void 0)I.setupRenderTarget(S);else if(xe.__hasExternalTextures)I.rebindTextures(S,_e.get(S.texture).__webglTexture,_e.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let Me=S.depthTexture;if(xe.__boundDepthTexture!==Me){if(Me!==null&&_e.has(Me)&&(S.width!==Me.image.width||S.height!==Me.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");I.setupDepthRenderbuffer(S)}}let Ie=S.texture;(Ie.isData3DTexture||Ie.isDataArrayTexture||Ie.isCompressedArrayTexture)&&(re=!0);let Ce=_e.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Ce[D])?L=Ce[D][H]:L=Ce[D],ee=!0):S.samples>0&&I.useMultisampledRTT(S)===!1?L=_e.get(S).__webglMultisampledFramebuffer:Array.isArray(Ce)?L=Ce[H]:L=Ce,C.copy(S.viewport),O.copy(S.scissor),P=S.scissorTest}else C.copy(le).multiplyScalar(z).floor(),O.copy(Ae).multiplyScalar(z).floor(),P=Be;if(ye.bindFramebuffer(N.FRAMEBUFFER,L)&&G&&ye.drawBuffers(S,L),ye.viewport(C),ye.scissor(O),ye.setScissorTest(P),ee){let xe=_e.get(S.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+D,xe.__webglTexture,H)}else if(re){let xe=_e.get(S.texture),Ie=D||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,xe.__webglTexture,H||0,Ie)}_=-1},this.readRenderTargetPixels=function(S,D,H,G,L,ee,re){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let fe=_e.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&re!==void 0&&(fe=fe[re]),fe){ye.bindFramebuffer(N.FRAMEBUFFER,fe);try{let xe=S.texture,Ie=xe.format,Ce=xe.type;if(!He.textureFormatReadable(Ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!He.textureTypeReadable(Ce)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=S.width-G&&H>=0&&H<=S.height-L&&N.readPixels(D,H,G,L,Fe.convert(Ie),Fe.convert(Ce),ee)}finally{let xe=R!==null?_e.get(R).__webglFramebuffer:null;ye.bindFramebuffer(N.FRAMEBUFFER,xe)}}},this.readRenderTargetPixelsAsync=async function(S,D,H,G,L,ee,re){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let fe=_e.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&re!==void 0&&(fe=fe[re]),fe){let xe=S.texture,Ie=xe.format,Ce=xe.type;if(!He.textureFormatReadable(Ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!He.textureTypeReadable(Ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(D>=0&&D<=S.width-G&&H>=0&&H<=S.height-L){ye.bindFramebuffer(N.FRAMEBUFFER,fe);let Me=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,Me),N.bufferData(N.PIXEL_PACK_BUFFER,ee.byteLength,N.STREAM_READ),N.readPixels(D,H,G,L,Fe.convert(Ie),Fe.convert(Ce),0);let qe=R!==null?_e.get(R).__webglFramebuffer:null;ye.bindFramebuffer(N.FRAMEBUFFER,qe);let Ye=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await Jd(N,Ye,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,Me),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,ee),N.deleteBuffer(Me),N.deleteSync(Ye),ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(S,D=null,H=0){S.isTexture!==!0&&(Jn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),D=arguments[0]||null,S=arguments[1]);let G=Math.pow(2,-H),L=Math.floor(S.image.width*G),ee=Math.floor(S.image.height*G),re=D!==null?D.x:0,fe=D!==null?D.y:0;I.setTexture2D(S,0),N.copyTexSubImage2D(N.TEXTURE_2D,H,0,0,re,fe,L,ee),ye.unbindTexture()};let Qf=N.createFramebuffer(),$f=N.createFramebuffer();this.copyTextureToTexture=function(S,D,H=null,G=null,L=0,ee=null){S.isTexture!==!0&&(Jn("WebGLRenderer: copyTextureToTexture function signature has changed."),G=arguments[0]||null,S=arguments[1],D=arguments[2],ee=arguments[3]||0,H=null),ee===null&&(L!==0?(Jn("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ee=L,L=0):ee=0);let re,fe,xe,Ie,Ce,Me,qe,Ye,pt,dt=S.isCompressedTexture?S.mipmaps[ee]:S.image;if(H!==null)re=H.max.x-H.min.x,fe=H.max.y-H.min.y,xe=H.isBox3?H.max.z-H.min.z:1,Ie=H.min.x,Ce=H.min.y,Me=H.isBox3?H.min.z:0;else{let sa=Math.pow(2,-L);re=Math.floor(dt.width*sa),fe=Math.floor(dt.height*sa),S.isDataArrayTexture?xe=dt.depth:S.isData3DTexture?xe=Math.floor(dt.depth*sa):xe=1,Ie=0,Ce=0,Me=0}G!==null?(qe=G.x,Ye=G.y,pt=G.z):(qe=0,Ye=0,pt=0);let Xe=Fe.convert(D.format),we=Fe.convert(D.type),St;D.isData3DTexture?(I.setTexture3D(D,0),St=N.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(I.setTexture2DArray(D,0),St=N.TEXTURE_2D_ARRAY):(I.setTexture2D(D,0),St=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,D.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,D.unpackAlignment);let Ze=N.getParameter(N.UNPACK_ROW_LENGTH),ua=N.getParameter(N.UNPACK_IMAGE_HEIGHT),ni=N.getParameter(N.UNPACK_SKIP_PIXELS),Yt=N.getParameter(N.UNPACK_SKIP_ROWS),Xi=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,dt.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,dt.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Ie),N.pixelStorei(N.UNPACK_SKIP_ROWS,Ce),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Me);let ot=S.isDataArrayTexture||S.isData3DTexture,ia=D.isDataArrayTexture||D.isData3DTexture;if(S.isDepthTexture){let sa=_e.get(S),Lt=_e.get(D),Ht=_e.get(sa.__renderTarget),fc=_e.get(Lt.__renderTarget);ye.bindFramebuffer(N.READ_FRAMEBUFFER,Ht.__webglFramebuffer),ye.bindFramebuffer(N.DRAW_FRAMEBUFFER,fc.__webglFramebuffer);for(let Mn=0;Mn<xe;Mn++)ot&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,_e.get(S).__webglTexture,L,Me+Mn),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,_e.get(D).__webglTexture,ee,pt+Mn)),N.blitFramebuffer(Ie,Ce,re,fe,qe,Ye,re,fe,N.DEPTH_BUFFER_BIT,N.NEAREST);ye.bindFramebuffer(N.READ_FRAMEBUFFER,null),ye.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(L!==0||S.isRenderTargetTexture||_e.has(S)){let sa=_e.get(S),Lt=_e.get(D);ye.bindFramebuffer(N.READ_FRAMEBUFFER,Qf),ye.bindFramebuffer(N.DRAW_FRAMEBUFFER,$f);for(let Ht=0;Ht<xe;Ht++)ot?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,sa.__webglTexture,L,Me+Ht):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,sa.__webglTexture,L),ia?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Lt.__webglTexture,ee,pt+Ht):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Lt.__webglTexture,ee),L!==0?N.blitFramebuffer(Ie,Ce,re,fe,qe,Ye,re,fe,N.COLOR_BUFFER_BIT,N.NEAREST):ia?N.copyTexSubImage3D(St,ee,qe,Ye,pt+Ht,Ie,Ce,re,fe):N.copyTexSubImage2D(St,ee,qe,Ye,Ie,Ce,re,fe);ye.bindFramebuffer(N.READ_FRAMEBUFFER,null),ye.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else ia?S.isDataTexture||S.isData3DTexture?N.texSubImage3D(St,ee,qe,Ye,pt,re,fe,xe,Xe,we,dt.data):D.isCompressedArrayTexture?N.compressedTexSubImage3D(St,ee,qe,Ye,pt,re,fe,xe,Xe,dt.data):N.texSubImage3D(St,ee,qe,Ye,pt,re,fe,xe,Xe,we,dt):S.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,ee,qe,Ye,re,fe,Xe,we,dt.data):S.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,ee,qe,Ye,dt.width,dt.height,Xe,dt.data):N.texSubImage2D(N.TEXTURE_2D,ee,qe,Ye,re,fe,Xe,we,dt);N.pixelStorei(N.UNPACK_ROW_LENGTH,Ze),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ua),N.pixelStorei(N.UNPACK_SKIP_PIXELS,ni),N.pixelStorei(N.UNPACK_SKIP_ROWS,Yt),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Xi),ee===0&&D.generateMipmaps&&N.generateMipmap(St),ye.unbindTexture()},this.copyTextureToTexture3D=function(S,D,H=null,G=null,L=0){return S.isTexture!==!0&&(Jn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),H=arguments[0]||null,G=arguments[1]||null,S=arguments[2],D=arguments[3],L=arguments[4]||0),Jn('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(S,D,H,G,L)},this.initRenderTarget=function(S){_e.get(S).__webglFramebuffer===void 0&&I.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?I.setTextureCube(S,0):S.isData3DTexture?I.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?I.setTexture2DArray(S,0):I.setTexture2D(S,0),ye.unbindTexture()},this.resetState=function(){A=0,T=0,R=null,ye.reset(),at.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ta}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=Ue._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ue._getUnpackColorSpace()}};function Nh(s,e){if(e===ch)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===Di||e===Os){let t=s.getIndex();if(t===null){let r=[],o=s.getAttribute("position");if(o!==void 0){for(let c=0;c<o.count;c++)r.push(c);s.setIndex(r),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}let a=t.count-2,n=[];if(e===Di)for(let r=1;r<=a;r++)n.push(t.getX(0)),n.push(t.getX(r)),n.push(t.getX(r+1));else for(let r=0;r<a;r++)r%2===0?(n.push(t.getX(r)),n.push(t.getX(r+1)),n.push(t.getX(r+2))):(n.push(t.getX(r+2)),n.push(t.getX(r+1)),n.push(t.getX(r)));n.length/3!==a&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let i=s.clone();return i.setIndex(n),i.clearGroups(),i}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}var qo=class extends Pa{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Bh(t)}),this.register(function(t){return new jh(t)}),this.register(function(t){return new Yh(t)}),this.register(function(t){return new Zh(t)}),this.register(function(t){return new Qh(t)}),this.register(function(t){return new Gh(t)}),this.register(function(t){return new Vh(t)}),this.register(function(t){return new Wh(t)}),this.register(function(t){return new qh(t)}),this.register(function(t){return new zh(t)}),this.register(function(t){return new Xh(t)}),this.register(function(t){return new Hh(t)}),this.register(function(t){return new Jh(t)}),this.register(function(t){return new Kh(t)}),this.register(function(t){return new Uh(t)}),this.register(function(t){return new $h(t)}),this.register(function(t){return new el(t)})}load(e,t,a,n){let i=this,r;if(this.resourcePath!=="")r=this.resourcePath;else if(this.path!==""){let h=$a.extractUrlBase(e);r=$a.resolveURL(h,this.path)}else r=$a.extractUrlBase(e);this.manager.itemStart(e);let o=function(h){n?n(h):console.error(h),i.manager.itemError(e),i.manager.itemEnd(e)},c=new Ii(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(h){try{i.parse(h,r,function(l){t(l),i.manager.itemEnd(e)},o)}catch(l){o(l)}},a,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,a,n){let i,r={},o={},c=new TextDecoder;if(typeof e=="string")i=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===Df){try{r[ze.KHR_BINARY_GLTF]=new tl(e)}catch(d){n&&n(d);return}i=JSON.parse(r[ze.KHR_BINARY_GLTF].content)}else i=JSON.parse(c.decode(e));else i=e;if(i.asset===void 0||i.asset.version[0]<2){n&&n(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let h=new cl(i,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});h.fileLoader.setRequestHeader(this.requestHeader);for(let l=0;l<this.pluginCallbacks.length;l++){let d=this.pluginCallbacks[l](h);d.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[d.name]=d,r[d.name]=!0}if(i.extensionsUsed)for(let l=0;l<i.extensionsUsed.length;++l){let d=i.extensionsUsed[l],u=i.extensionsRequired||[];switch(d){case ze.KHR_MATERIALS_UNLIT:r[d]=new Oh;break;case ze.KHR_DRACO_MESH_COMPRESSION:r[d]=new al(i,this.dracoLoader);break;case ze.KHR_TEXTURE_TRANSFORM:r[d]=new nl;break;case ze.KHR_MESH_QUANTIZATION:r[d]=new il;break;default:u.indexOf(d)>=0&&o[d]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+d+'".')}}h.setExtensions(r),h.setPlugins(o),h.parse(a,n)}parseAsync(e,t){let a=this;return new Promise(function(n,i){a.parse(e,t,n,i)})}};function Sx(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}var ze={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Uh=class{constructor(e){this.parser=e,this.name=ze.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let a=0,n=t.length;a<n;a++){let i=t[a];i.extensions&&i.extensions[this.name]&&i.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,i.extensions[this.name].light)}}_loadLight(e){let t=this.parser,a="light:"+e,n=t.cache.get(a);if(n)return n;let i=t.json,c=((i.extensions&&i.extensions[this.name]||{}).lights||[])[e],h,l=new ge(16777215);c.color!==void 0&&l.setRGB(c.color[0],c.color[1],c.color[2],Rt);let d=c.range!==void 0?c.range:0;switch(c.type){case"directional":h=new Gn(l),h.target.position.set(0,0,-1),h.add(h.target);break;case"point":h=new Hn(l),h.distance=d;break;case"spot":h=new Ss(l),h.distance=d,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,h.angle=c.spot.outerConeAngle,h.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,h.target.position.set(0,0,-1),h.add(h.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return h.position.set(0,0,0),h.decay=2,an(h,c),c.intensity!==void 0&&(h.intensity=c.intensity),h.name=t.createUniqueName(c.name||"light_"+e),n=Promise.resolve(h),t.cache.add(a,n),n}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,a=this.parser,i=a.json.nodes[e],o=(i.extensions&&i.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return a._getNodeRef(t.cache,o,c)})}},Oh=class{constructor(){this.name=ze.KHR_MATERIALS_UNLIT}getMaterialType(){return It}extendParams(e,t,a){let n=[];e.color=new ge(1,1,1),e.opacity=1;let i=t.pbrMetallicRoughness;if(i){if(Array.isArray(i.baseColorFactor)){let r=i.baseColorFactor;e.color.setRGB(r[0],r[1],r[2],Rt),e.opacity=r[3]}i.baseColorTexture!==void 0&&n.push(a.assignTexture(e,"map",i.baseColorTexture,ft))}return Promise.all(n)}},zh=class{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=this.parser.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();let i=n.extensions[this.name].emissiveStrength;return i!==void 0&&(t.emissiveIntensity=i),Promise.resolve()}},Bh=class{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let a=this.parser.json.materials[e];return!a.extensions||!a.extensions[this.name]?null:qt}extendMaterialParams(e,t){let a=this.parser,n=a.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();let i=[],r=n.extensions[this.name];if(r.clearcoatFactor!==void 0&&(t.clearcoat=r.clearcoatFactor),r.clearcoatTexture!==void 0&&i.push(a.assignTexture(t,"clearcoatMap",r.clearcoatTexture)),r.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=r.clearcoatRoughnessFactor),r.clearcoatRoughnessTexture!==void 0&&i.push(a.assignTexture(t,"clearcoatRoughnessMap",r.clearcoatRoughnessTexture)),r.clearcoatNormalTexture!==void 0&&(i.push(a.assignTexture(t,"clearcoatNormalMap",r.clearcoatNormalTexture)),r.clearcoatNormalTexture.scale!==void 0)){let o=r.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ue(o,o)}return Promise.all(i)}},jh=class{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_DISPERSION}getMaterialType(e){let a=this.parser.json.materials[e];return!a.extensions||!a.extensions[this.name]?null:qt}extendMaterialParams(e,t){let n=this.parser.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();let i=n.extensions[this.name];return t.dispersion=i.dispersion!==void 0?i.dispersion:0,Promise.resolve()}},Hh=class{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let a=this.parser.json.materials[e];return!a.extensions||!a.extensions[this.name]?null:qt}extendMaterialParams(e,t){let a=this.parser,n=a.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();let i=[],r=n.extensions[this.name];return r.iridescenceFactor!==void 0&&(t.iridescence=r.iridescenceFactor),r.iridescenceTexture!==void 0&&i.push(a.assignTexture(t,"iridescenceMap",r.iridescenceTexture)),r.iridescenceIor!==void 0&&(t.iridescenceIOR=r.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),r.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=r.iridescenceThicknessMinimum),r.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=r.iridescenceThicknessMaximum),r.iridescenceThicknessTexture!==void 0&&i.push(a.assignTexture(t,"iridescenceThicknessMap",r.iridescenceThicknessTexture)),Promise.all(i)}},Gh=class{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_SHEEN}getMaterialType(e){let a=this.parser.json.materials[e];return!a.extensions||!a.extensions[this.name]?null:qt}extendMaterialParams(e,t){let a=this.parser,n=a.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();let i=[];t.sheenColor=new ge(0,0,0),t.sheenRoughness=0,t.sheen=1;let r=n.extensions[this.name];if(r.sheenColorFactor!==void 0){let o=r.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],Rt)}return r.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=r.sheenRoughnessFactor),r.sheenColorTexture!==void 0&&i.push(a.assignTexture(t,"sheenColorMap",r.sheenColorTexture,ft)),r.sheenRoughnessTexture!==void 0&&i.push(a.assignTexture(t,"sheenRoughnessMap",r.sheenRoughnessTexture)),Promise.all(i)}},Vh=class{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let a=this.parser.json.materials[e];return!a.extensions||!a.extensions[this.name]?null:qt}extendMaterialParams(e,t){let a=this.parser,n=a.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();let i=[],r=n.extensions[this.name];return r.transmissionFactor!==void 0&&(t.transmission=r.transmissionFactor),r.transmissionTexture!==void 0&&i.push(a.assignTexture(t,"transmissionMap",r.transmissionTexture)),Promise.all(i)}},Wh=class{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_VOLUME}getMaterialType(e){let a=this.parser.json.materials[e];return!a.extensions||!a.extensions[this.name]?null:qt}extendMaterialParams(e,t){let a=this.parser,n=a.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();let i=[],r=n.extensions[this.name];t.thickness=r.thicknessFactor!==void 0?r.thicknessFactor:0,r.thicknessTexture!==void 0&&i.push(a.assignTexture(t,"thicknessMap",r.thicknessTexture)),t.attenuationDistance=r.attenuationDistance||1/0;let o=r.attenuationColor||[1,1,1];return t.attenuationColor=new ge().setRGB(o[0],o[1],o[2],Rt),Promise.all(i)}},qh=class{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_IOR}getMaterialType(e){let a=this.parser.json.materials[e];return!a.extensions||!a.extensions[this.name]?null:qt}extendMaterialParams(e,t){let n=this.parser.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();let i=n.extensions[this.name];return t.ior=i.ior!==void 0?i.ior:1.5,Promise.resolve()}},Xh=class{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_SPECULAR}getMaterialType(e){let a=this.parser.json.materials[e];return!a.extensions||!a.extensions[this.name]?null:qt}extendMaterialParams(e,t){let a=this.parser,n=a.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();let i=[],r=n.extensions[this.name];t.specularIntensity=r.specularFactor!==void 0?r.specularFactor:1,r.specularTexture!==void 0&&i.push(a.assignTexture(t,"specularIntensityMap",r.specularTexture));let o=r.specularColorFactor||[1,1,1];return t.specularColor=new ge().setRGB(o[0],o[1],o[2],Rt),r.specularColorTexture!==void 0&&i.push(a.assignTexture(t,"specularColorMap",r.specularColorTexture,ft)),Promise.all(i)}},Kh=class{constructor(e){this.parser=e,this.name=ze.EXT_MATERIALS_BUMP}getMaterialType(e){let a=this.parser.json.materials[e];return!a.extensions||!a.extensions[this.name]?null:qt}extendMaterialParams(e,t){let a=this.parser,n=a.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();let i=[],r=n.extensions[this.name];return t.bumpScale=r.bumpFactor!==void 0?r.bumpFactor:1,r.bumpTexture!==void 0&&i.push(a.assignTexture(t,"bumpMap",r.bumpTexture)),Promise.all(i)}},Jh=class{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let a=this.parser.json.materials[e];return!a.extensions||!a.extensions[this.name]?null:qt}extendMaterialParams(e,t){let a=this.parser,n=a.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();let i=[],r=n.extensions[this.name];return r.anisotropyStrength!==void 0&&(t.anisotropy=r.anisotropyStrength),r.anisotropyRotation!==void 0&&(t.anisotropyRotation=r.anisotropyRotation),r.anisotropyTexture!==void 0&&i.push(a.assignTexture(t,"anisotropyMap",r.anisotropyTexture)),Promise.all(i)}},Yh=class{constructor(e){this.parser=e,this.name=ze.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,a=t.json,n=a.textures[e];if(!n.extensions||!n.extensions[this.name])return null;let i=n.extensions[this.name],r=t.options.ktx2Loader;if(!r){if(a.extensionsRequired&&a.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,i.source,r)}},Zh=class{constructor(e){this.parser=e,this.name=ze.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,a=this.parser,n=a.json,i=n.textures[e];if(!i.extensions||!i.extensions[t])return null;let r=i.extensions[t],o=n.images[r.source],c=a.textureLoader;if(o.uri){let h=a.options.manager.getHandler(o.uri);h!==null&&(c=h)}return this.detectSupport().then(function(h){if(h)return a.loadTextureImage(e,r.source,c);if(n.extensionsRequired&&n.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return a.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Qh=class{constructor(e){this.parser=e,this.name=ze.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,a=this.parser,n=a.json,i=n.textures[e];if(!i.extensions||!i.extensions[t])return null;let r=i.extensions[t],o=n.images[r.source],c=a.textureLoader;if(o.uri){let h=a.options.manager.getHandler(o.uri);h!==null&&(c=h)}return this.detectSupport().then(function(h){if(h)return a.loadTextureImage(e,r.source,c);if(n.extensionsRequired&&n.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return a.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},$h=class{constructor(e){this.name=ze.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,a=t.bufferViews[e];if(a.extensions&&a.extensions[this.name]){let n=a.extensions[this.name],i=this.parser.getDependency("buffer",n.buffer),r=this.parser.options.meshoptDecoder;if(!r||!r.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return i.then(function(o){let c=n.byteOffset||0,h=n.byteLength||0,l=n.count,d=n.byteStride,u=new Uint8Array(o,c,h);return r.decodeGltfBufferAsync?r.decodeGltfBufferAsync(l,d,u,n.mode,n.filter).then(function(p){return p.buffer}):r.ready.then(function(){let p=new ArrayBuffer(l*d);return r.decodeGltfBuffer(new Uint8Array(p),l,d,u,n.mode,n.filter),p})})}else return null}},el=class{constructor(e){this.name=ze.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,a=t.nodes[e];if(!a.extensions||!a.extensions[this.name]||a.mesh===void 0)return null;let n=t.meshes[a.mesh];for(let h of n.primitives)if(h.mode!==da.TRIANGLES&&h.mode!==da.TRIANGLE_STRIP&&h.mode!==da.TRIANGLE_FAN&&h.mode!==void 0)return null;let r=a.extensions[this.name].attributes,o=[],c={};for(let h in r)o.push(this.parser.getDependency("accessor",r[h]).then(l=>(c[h]=l,c[h])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(h=>{let l=h.pop(),d=l.isGroup?l.children:[l],u=h[0].count,p=[];for(let x of d){let g=new Te,b=new k,f=new At,v=new k(1,1,1),w=new gs(x.geometry,x.material,u);for(let m=0;m<u;m++)c.TRANSLATION&&b.fromBufferAttribute(c.TRANSLATION,m),c.ROTATION&&f.fromBufferAttribute(c.ROTATION,m),c.SCALE&&v.fromBufferAttribute(c.SCALE,m),w.setMatrixAt(m,g.compose(b,f,v));for(let m in c)if(m==="_COLOR_0"){let M=c[m];w.instanceColor=new ha(M.array,M.itemSize,M.normalized)}else m!=="TRANSLATION"&&m!=="ROTATION"&&m!=="SCALE"&&x.geometry.setAttribute(m,c[m]);ct.prototype.copy.call(w,x),this.parser.assignFinalMaterial(w),p.push(w)}return l.isGroup?(l.clear(),l.add(...p),l):p[0]}))}},Df="glTF",js=12,kf={JSON:1313821514,BIN:5130562},tl=class{constructor(e){this.name=ze.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,js),a=new TextDecoder;if(this.header={magic:a.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Df)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let n=this.header.length-js,i=new DataView(e,js),r=0;for(;r<n;){let o=i.getUint32(r,!0);r+=4;let c=i.getUint32(r,!0);if(r+=4,c===kf.JSON){let h=new Uint8Array(e,js+r,o);this.content=a.decode(h)}else if(c===kf.BIN){let h=js+r;this.body=e.slice(h,h+o)}r+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},al=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ze.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let a=this.json,n=this.dracoLoader,i=e.extensions[this.name].bufferView,r=e.extensions[this.name].attributes,o={},c={},h={};for(let l in r){let d=rl[l]||l.toLowerCase();o[d]=r[l]}for(let l in e.attributes){let d=rl[l]||l.toLowerCase();if(r[l]!==void 0){let u=a.accessors[e.attributes[l]],p=ji[u.componentType];h[d]=p.name,c[d]=u.normalized===!0}}return t.getDependency("bufferView",i).then(function(l){return new Promise(function(d,u){n.decodeDracoFile(l,function(p){for(let x in p.attributes){let g=p.attributes[x],b=c[x];b!==void 0&&(g.normalized=b)}d(p)},o,h,Rt,u)})})}},nl=class{constructor(){this.name=ze.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},il=class{constructor(){this.name=ze.KHR_MESH_QUANTIZATION}},Xo=class extends Ja{constructor(e,t,a,n){super(e,t,a,n)}copySampleValue_(e){let t=this.resultBuffer,a=this.sampleValues,n=this.valueSize,i=e*n*3+n;for(let r=0;r!==n;r++)t[r]=a[i+r];return t}interpolate_(e,t,a,n){let i=this.resultBuffer,r=this.sampleValues,o=this.valueSize,c=o*2,h=o*3,l=n-t,d=(a-t)/l,u=d*d,p=u*d,x=e*h,g=x-h,b=-2*p+3*u,f=p-u,v=1-b,w=f-u+d;for(let m=0;m!==o;m++){let M=r[g+m+o],A=r[g+m+c]*l,T=r[x+m+o],R=r[x+m]*l;i[m]=v*M+w*A+b*T+f*R}return i}},Tx=new At,sl=class extends Xo{interpolate_(e,t,a,n){let i=super.interpolate_(e,t,a,n);return Tx.fromArray(i).normalize().toArray(i),i}},da={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},ji={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Pf={9728:Tt,9729:Ot,9984:no,9985:Ni,9986:Xn,9987:Ma},Nf={33071:ca,33648:xi,10497:Ra},Fh={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},rl={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},vn={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Rx={CUBICSPLINE:void 0,LINEAR:Dn,STEP:Fn},Dh={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Ix(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new Ka({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Gt})),s.DefaultMaterial}function ti(s,e,t){for(let a in t.extensions)s[a]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[a]=t.extensions[a])}function an(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Cx(s,e,t){let a=!1,n=!1,i=!1;for(let h=0,l=e.length;h<l;h++){let d=e[h];if(d.POSITION!==void 0&&(a=!0),d.NORMAL!==void 0&&(n=!0),d.COLOR_0!==void 0&&(i=!0),a&&n&&i)break}if(!a&&!n&&!i)return Promise.resolve(s);let r=[],o=[],c=[];for(let h=0,l=e.length;h<l;h++){let d=e[h];if(a){let u=d.POSITION!==void 0?t.getDependency("accessor",d.POSITION):s.attributes.position;r.push(u)}if(n){let u=d.NORMAL!==void 0?t.getDependency("accessor",d.NORMAL):s.attributes.normal;o.push(u)}if(i){let u=d.COLOR_0!==void 0?t.getDependency("accessor",d.COLOR_0):s.attributes.color;c.push(u)}}return Promise.all([Promise.all(r),Promise.all(o),Promise.all(c)]).then(function(h){let l=h[0],d=h[1],u=h[2];return a&&(s.morphAttributes.position=l),n&&(s.morphAttributes.normal=d),i&&(s.morphAttributes.color=u),s.morphTargetsRelative=!0,s})}function kx(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,a=e.weights.length;t<a;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let a=0,n=t.length;a<n;a++)s.morphTargetDictionary[t[a]]=a}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Px(s){let e,t=s.extensions&&s.extensions[ze.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Lh(t.attributes):e=s.indices+":"+Lh(s.attributes)+":"+s.mode,s.targets!==void 0)for(let a=0,n=s.targets.length;a<n;a++)e+=":"+Lh(s.targets[a]);return e}function Lh(s){let e="",t=Object.keys(s).sort();for(let a=0,n=t.length;a<n;a++)e+=t[a]+":"+s[t[a]]+";";return e}function ol(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Nx(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var Fx=new Te,cl=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Sx,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let a=!1,n=-1,i=!1,r=-1;if(typeof navigator<"u"){let o=navigator.userAgent;a=/^((?!chrome|android).)*safari/i.test(o)===!0;let c=o.match(/Version\/(\d+)/);n=a&&c?parseInt(c[1],10):-1,i=o.indexOf("Firefox")>-1,r=i?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||a&&n<17||i&&r<98?this.textureLoader=new bn(this.options.manager):this.textureLoader=new Ts(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Ii(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let a=this,n=this.json,i=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(r){return r._markDefs&&r._markDefs()}),Promise.all(this._invokeAll(function(r){return r.beforeRoot&&r.beforeRoot()})).then(function(){return Promise.all([a.getDependencies("scene"),a.getDependencies("animation"),a.getDependencies("camera")])}).then(function(r){let o={scene:r[0][n.scene||0],scenes:r[0],animations:r[1],cameras:r[2],asset:n.asset,parser:a,userData:{}};return ti(i,o,n),an(o,n),Promise.all(a._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){for(let c of o.scenes)c.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],a=this.json.meshes||[];for(let n=0,i=t.length;n<i;n++){let r=t[n].joints;for(let o=0,c=r.length;o<c;o++)e[r[o]].isBone=!0}for(let n=0,i=e.length;n<i;n++){let r=e[n];r.mesh!==void 0&&(this._addNodeRef(this.meshCache,r.mesh),r.skin!==void 0&&(a[r.mesh].isSkinnedMesh=!0)),r.camera!==void 0&&this._addNodeRef(this.cameraCache,r.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,a){if(e.refs[t]<=1)return a;let n=a.clone(),i=(r,o)=>{let c=this.associations.get(r);c!=null&&this.associations.set(o,c);for(let[h,l]of r.children.entries())i(l,o.children[h])};return i(a,n),n.name+="_instance_"+e.uses[t]++,n}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let a=0;a<t.length;a++){let n=e(t[a]);if(n)return n}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let a=[];for(let n=0;n<t.length;n++){let i=e(t[n]);i&&a.push(i)}return a}getDependency(e,t){let a=e+":"+t,n=this.cache.get(a);if(!n){switch(e){case"scene":n=this.loadScene(t);break;case"node":n=this._invokeOne(function(i){return i.loadNode&&i.loadNode(t)});break;case"mesh":n=this._invokeOne(function(i){return i.loadMesh&&i.loadMesh(t)});break;case"accessor":n=this.loadAccessor(t);break;case"bufferView":n=this._invokeOne(function(i){return i.loadBufferView&&i.loadBufferView(t)});break;case"buffer":n=this.loadBuffer(t);break;case"material":n=this._invokeOne(function(i){return i.loadMaterial&&i.loadMaterial(t)});break;case"texture":n=this._invokeOne(function(i){return i.loadTexture&&i.loadTexture(t)});break;case"skin":n=this.loadSkin(t);break;case"animation":n=this._invokeOne(function(i){return i.loadAnimation&&i.loadAnimation(t)});break;case"camera":n=this.loadCamera(t);break;default:if(n=this._invokeOne(function(i){return i!=this&&i.getDependency&&i.getDependency(e,t)}),!n)throw new Error("Unknown type: "+e);break}this.cache.add(a,n)}return n}getDependencies(e){let t=this.cache.get(e);if(!t){let a=this,n=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(n.map(function(i,r){return a.getDependency(e,r)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],a=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[ze.KHR_BINARY_GLTF].body);let n=this.options;return new Promise(function(i,r){a.load($a.resolveURL(t.uri,n.path),i,void 0,function(){r(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(a){let n=t.byteLength||0,i=t.byteOffset||0;return a.slice(i,i+n)})}loadAccessor(e){let t=this,a=this.json,n=this.json.accessors[e];if(n.bufferView===void 0&&n.sparse===void 0){let r=Fh[n.type],o=ji[n.componentType],c=n.normalized===!0,h=new o(n.count*r);return Promise.resolve(new it(h,r,c))}let i=[];return n.bufferView!==void 0?i.push(this.getDependency("bufferView",n.bufferView)):i.push(null),n.sparse!==void 0&&(i.push(this.getDependency("bufferView",n.sparse.indices.bufferView)),i.push(this.getDependency("bufferView",n.sparse.values.bufferView))),Promise.all(i).then(function(r){let o=r[0],c=Fh[n.type],h=ji[n.componentType],l=h.BYTES_PER_ELEMENT,d=l*c,u=n.byteOffset||0,p=n.bufferView!==void 0?a.bufferViews[n.bufferView].byteStride:void 0,x=n.normalized===!0,g,b;if(p&&p!==d){let f=Math.floor(u/p),v="InterleavedBuffer:"+n.bufferView+":"+n.componentType+":"+f+":"+n.count,w=t.cache.get(v);w||(g=new h(o,f*p,n.count*p/l),w=new _i(g,p/l),t.cache.add(v,w)),b=new Mi(w,c,u%p/l,x)}else o===null?g=new h(n.count*c):g=new h(o,u,n.count*c),b=new it(g,c,x);if(n.sparse!==void 0){let f=Fh.SCALAR,v=ji[n.sparse.indices.componentType],w=n.sparse.indices.byteOffset||0,m=n.sparse.values.byteOffset||0,M=new v(r[1],w,n.sparse.count*f),A=new h(r[2],m,n.sparse.count*c);o!==null&&(b=new it(b.array.slice(),b.itemSize,b.normalized)),b.normalized=!1;for(let T=0,R=M.length;T<R;T++){let _=M[T];if(b.setX(_,A[T*c]),c>=2&&b.setY(_,A[T*c+1]),c>=3&&b.setZ(_,A[T*c+2]),c>=4&&b.setW(_,A[T*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}b.normalized=x}return b})}loadTexture(e){let t=this.json,a=this.options,i=t.textures[e].source,r=t.images[i],o=this.textureLoader;if(r.uri){let c=a.manager.getHandler(r.uri);c!==null&&(o=c)}return this.loadTextureImage(e,i,o)}loadTextureImage(e,t,a){let n=this,i=this.json,r=i.textures[e],o=i.images[t],c=(o.uri||o.bufferView)+":"+r.sampler;if(this.textureCache[c])return this.textureCache[c];let h=this.loadImageSource(t,a).then(function(l){l.flipY=!1,l.name=r.name||o.name||"",l.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(l.name=o.uri);let u=(i.samplers||{})[r.sampler]||{};return l.magFilter=Pf[u.magFilter]||Ot,l.minFilter=Pf[u.minFilter]||Ma,l.wrapS=Nf[u.wrapS]||Ra,l.wrapT=Nf[u.wrapT]||Ra,l.generateMipmaps=!l.isCompressedTexture&&l.minFilter!==Tt&&l.minFilter!==Ot,n.associations.set(l,{textures:e}),l}).catch(function(){return null});return this.textureCache[c]=h,h}loadImageSource(e,t){let a=this,n=this.json,i=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());let r=n.images[e],o=self.URL||self.webkitURL,c=r.uri||"",h=!1;if(r.bufferView!==void 0)c=a.getDependency("bufferView",r.bufferView).then(function(d){h=!0;let u=new Blob([d],{type:r.mimeType});return c=o.createObjectURL(u),c});else if(r.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let l=Promise.resolve(c).then(function(d){return new Promise(function(u,p){let x=u;t.isImageBitmapLoader===!0&&(x=function(g){let b=new vt(g);b.needsUpdate=!0,u(b)}),t.load($a.resolveURL(d,i.path),x,void 0,p)})}).then(function(d){return h===!0&&o.revokeObjectURL(c),an(d,r),d.userData.mimeType=r.mimeType||Nx(r.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),d});return this.sourceCache[e]=l,l}assignTexture(e,t,a,n){let i=this;return this.getDependency("texture",a.index).then(function(r){if(!r)return null;if(a.texCoord!==void 0&&a.texCoord>0&&(r=r.clone(),r.channel=a.texCoord),i.extensions[ze.KHR_TEXTURE_TRANSFORM]){let o=a.extensions!==void 0?a.extensions[ze.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let c=i.associations.get(r);r=i.extensions[ze.KHR_TEXTURE_TRANSFORM].extendTexture(r,o),i.associations.set(r,c)}}return n!==void 0&&(r.colorSpace=n),e[t]=r,r})}assignFinalMaterial(e){let t=e.geometry,a=e.material,n=t.attributes.tangent===void 0,i=t.attributes.color!==void 0,r=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+a.uuid,c=this.cache.get(o);c||(c=new Si,Wt.prototype.copy.call(c,a),c.color.copy(a.color),c.map=a.map,c.sizeAttenuation=!1,this.cache.add(o,c)),a=c}else if(e.isLine){let o="LineBasicMaterial:"+a.uuid,c=this.cache.get(o);c||(c=new On,Wt.prototype.copy.call(c,a),c.color.copy(a.color),c.map=a.map,this.cache.add(o,c)),a=c}if(n||i||r){let o="ClonedMaterial:"+a.uuid+":";n&&(o+="derivative-tangents:"),i&&(o+="vertex-colors:"),r&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=a.clone(),i&&(c.vertexColors=!0),r&&(c.flatShading=!0),n&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(a))),a=c}e.material=a}getMaterialType(){return Ka}loadMaterial(e){let t=this,a=this.json,n=this.extensions,i=a.materials[e],r,o={},c=i.extensions||{},h=[];if(c[ze.KHR_MATERIALS_UNLIT]){let d=n[ze.KHR_MATERIALS_UNLIT];r=d.getMaterialType(),h.push(d.extendParams(o,i,t))}else{let d=i.pbrMetallicRoughness||{};if(o.color=new ge(1,1,1),o.opacity=1,Array.isArray(d.baseColorFactor)){let u=d.baseColorFactor;o.color.setRGB(u[0],u[1],u[2],Rt),o.opacity=u[3]}d.baseColorTexture!==void 0&&h.push(t.assignTexture(o,"map",d.baseColorTexture,ft)),o.metalness=d.metallicFactor!==void 0?d.metallicFactor:1,o.roughness=d.roughnessFactor!==void 0?d.roughnessFactor:1,d.metallicRoughnessTexture!==void 0&&(h.push(t.assignTexture(o,"metalnessMap",d.metallicRoughnessTexture)),h.push(t.assignTexture(o,"roughnessMap",d.metallicRoughnessTexture))),r=this._invokeOne(function(u){return u.getMaterialType&&u.getMaterialType(e)}),h.push(Promise.all(this._invokeAll(function(u){return u.extendMaterialParams&&u.extendMaterialParams(e,o)})))}i.doubleSided===!0&&(o.side=Xt);let l=i.alphaMode||Dh.OPAQUE;if(l===Dh.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,l===Dh.MASK&&(o.alphaTest=i.alphaCutoff!==void 0?i.alphaCutoff:.5)),i.normalTexture!==void 0&&r!==It&&(h.push(t.assignTexture(o,"normalMap",i.normalTexture)),o.normalScale=new ue(1,1),i.normalTexture.scale!==void 0)){let d=i.normalTexture.scale;o.normalScale.set(d,d)}if(i.occlusionTexture!==void 0&&r!==It&&(h.push(t.assignTexture(o,"aoMap",i.occlusionTexture)),i.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=i.occlusionTexture.strength)),i.emissiveFactor!==void 0&&r!==It){let d=i.emissiveFactor;o.emissive=new ge().setRGB(d[0],d[1],d[2],Rt)}return i.emissiveTexture!==void 0&&r!==It&&h.push(t.assignTexture(o,"emissiveMap",i.emissiveTexture,ft)),Promise.all(h).then(function(){let d=new r(o);return i.name&&(d.name=i.name),an(d,i),t.associations.set(d,{materials:e}),i.extensions&&ti(n,d,i),d})}createUniqueName(e){let t=et.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,a=this.extensions,n=this.primitiveCache;function i(o){return a[ze.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return Ff(c,o,t)})}let r=[];for(let o=0,c=e.length;o<c;o++){let h=e[o],l=Px(h),d=n[l];if(d)r.push(d.promise);else{let u;h.extensions&&h.extensions[ze.KHR_DRACO_MESH_COMPRESSION]?u=i(h):u=Ff(new Et,h,t),n[l]={primitive:h,promise:u},r.push(u)}}return Promise.all(r)}loadMesh(e){let t=this,a=this.json,n=this.extensions,i=a.meshes[e],r=i.primitives,o=[];for(let c=0,h=r.length;c<h;c++){let l=r[c].material===void 0?Ix(this.cache):this.getDependency("material",r[c].material);o.push(l)}return o.push(t.loadGeometries(r)),Promise.all(o).then(function(c){let h=c.slice(0,c.length-1),l=c[c.length-1],d=[];for(let p=0,x=l.length;p<x;p++){let g=l[p],b=r[p],f,v=h[p];if(b.mode===da.TRIANGLES||b.mode===da.TRIANGLE_STRIP||b.mode===da.TRIANGLE_FAN||b.mode===void 0)f=i.isSkinnedMesh===!0?new Un(g,v):new st(g,v),f.isSkinnedMesh===!0&&f.normalizeSkinWeights(),b.mode===da.TRIANGLE_STRIP?f.geometry=Nh(f.geometry,Os):b.mode===da.TRIANGLE_FAN&&(f.geometry=Nh(f.geometry,Di));else if(b.mode===da.LINES)f=new Ei(g,v);else if(b.mode===da.LINE_STRIP)f=new zn(g,v);else if(b.mode===da.LINE_LOOP)f=new xs(g,v);else if(b.mode===da.POINTS)f=new vs(g,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+b.mode);Object.keys(f.geometry.morphAttributes).length>0&&kx(f,i),f.name=t.createUniqueName(i.name||"mesh_"+e),an(f,i),b.extensions&&ti(n,f,b),t.assignFinalMaterial(f),d.push(f)}for(let p=0,x=d.length;p<x;p++)t.associations.set(d[p],{meshes:e,primitives:p});if(d.length===1)return i.extensions&&ti(n,d[0],i),d[0];let u=new $t;i.extensions&&ti(n,u,i),t.associations.set(u,{meshes:e});for(let p=0,x=d.length;p<x;p++)u.add(d[p]);return u})}loadCamera(e){let t,a=this.json.cameras[e],n=a[a.type];if(!n){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return a.type==="perspective"?t=new gt(xn.radToDeg(n.yfov),n.aspectRatio||1,n.znear||1,n.zfar||2e6):a.type==="orthographic"&&(t=new Qa(-n.xmag,n.xmag,n.ymag,-n.ymag,n.znear,n.zfar)),a.name&&(t.name=this.createUniqueName(a.name)),an(t,a),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],a=[];for(let n=0,i=t.joints.length;n<i;n++)a.push(this._loadNodeShallow(t.joints[n]));return t.inverseBindMatrices!==void 0?a.push(this.getDependency("accessor",t.inverseBindMatrices)):a.push(null),Promise.all(a).then(function(n){let i=n.pop(),r=n,o=[],c=[];for(let h=0,l=r.length;h<l;h++){let d=r[h];if(d){o.push(d);let u=new Te;i!==null&&u.fromArray(i.array,h*16),c.push(u)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[h])}return new ms(o,c)})}loadAnimation(e){let t=this.json,a=this,n=t.animations[e],i=n.name?n.name:"animation_"+e,r=[],o=[],c=[],h=[],l=[];for(let d=0,u=n.channels.length;d<u;d++){let p=n.channels[d],x=n.samplers[p.sampler],g=p.target,b=g.node,f=n.parameters!==void 0?n.parameters[x.input]:x.input,v=n.parameters!==void 0?n.parameters[x.output]:x.output;g.node!==void 0&&(r.push(this.getDependency("node",b)),o.push(this.getDependency("accessor",f)),c.push(this.getDependency("accessor",v)),h.push(x),l.push(g))}return Promise.all([Promise.all(r),Promise.all(o),Promise.all(c),Promise.all(h),Promise.all(l)]).then(function(d){let u=d[0],p=d[1],x=d[2],g=d[3],b=d[4],f=[];for(let v=0,w=u.length;v<w;v++){let m=u[v],M=p[v],A=x[v],T=g[v],R=b[v];if(m===void 0)continue;m.updateMatrix&&m.updateMatrix();let _=a._createAnimationTracks(m,M,A,T,R);if(_)for(let y=0;y<_.length;y++)f.push(_[y])}return new Bn(i,void 0,f)})}createNodeMesh(e){let t=this.json,a=this,n=t.nodes[e];return n.mesh===void 0?null:a.getDependency("mesh",n.mesh).then(function(i){let r=a._getNodeRef(a.meshCache,n.mesh,i);return n.weights!==void 0&&r.traverse(function(o){if(o.isMesh)for(let c=0,h=n.weights.length;c<h;c++)o.morphTargetInfluences[c]=n.weights[c]}),r})}loadNode(e){let t=this.json,a=this,n=t.nodes[e],i=a._loadNodeShallow(e),r=[],o=n.children||[];for(let h=0,l=o.length;h<l;h++)r.push(a.getDependency("node",o[h]));let c=n.skin===void 0?Promise.resolve(null):a.getDependency("skin",n.skin);return Promise.all([i,Promise.all(r),c]).then(function(h){let l=h[0],d=h[1],u=h[2];u!==null&&l.traverse(function(p){p.isSkinnedMesh&&p.bind(u,Fx)});for(let p=0,x=d.length;p<x;p++)l.add(d[p]);return l})}_loadNodeShallow(e){let t=this.json,a=this.extensions,n=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let i=t.nodes[e],r=i.name?n.createUniqueName(i.name):"",o=[],c=n._invokeOne(function(h){return h.createNodeMesh&&h.createNodeMesh(e)});return c&&o.push(c),i.camera!==void 0&&o.push(n.getDependency("camera",i.camera).then(function(h){return n._getNodeRef(n.cameraCache,i.camera,h)})),n._invokeAll(function(h){return h.createNodeAttachment&&h.createNodeAttachment(e)}).forEach(function(h){o.push(h)}),this.nodeCache[e]=Promise.all(o).then(function(h){let l;if(i.isBone===!0?l=new wi:h.length>1?l=new $t:h.length===1?l=h[0]:l=new ct,l!==h[0])for(let d=0,u=h.length;d<u;d++)l.add(h[d]);if(i.name&&(l.userData.name=i.name,l.name=r),an(l,i),i.extensions&&ti(a,l,i),i.matrix!==void 0){let d=new Te;d.fromArray(i.matrix),l.applyMatrix4(d)}else i.translation!==void 0&&l.position.fromArray(i.translation),i.rotation!==void 0&&l.quaternion.fromArray(i.rotation),i.scale!==void 0&&l.scale.fromArray(i.scale);return n.associations.has(l)||n.associations.set(l,{}),n.associations.get(l).nodes=e,l}),this.nodeCache[e]}loadScene(e){let t=this.extensions,a=this.json.scenes[e],n=this,i=new $t;a.name&&(i.name=n.createUniqueName(a.name)),an(i,a),a.extensions&&ti(t,i,a);let r=a.nodes||[],o=[];for(let c=0,h=r.length;c<h;c++)o.push(n.getDependency("node",r[c]));return Promise.all(o).then(function(c){for(let l=0,d=c.length;l<d;l++)i.add(c[l]);let h=l=>{let d=new Map;for(let[u,p]of n.associations)(u instanceof Wt||u instanceof vt)&&d.set(u,p);return l.traverse(u=>{let p=n.associations.get(u);p!=null&&d.set(u,p)}),d};return n.associations=h(i),i})}_createAnimationTracks(e,t,a,n,i){let r=[],o=e.name?e.name:e.uuid,c=[];vn[i.path]===vn.weights?e.traverse(function(u){u.morphTargetInfluences&&c.push(u.name?u.name:u.uuid)}):c.push(o);let h;switch(vn[i.path]){case vn.weights:h=Ia;break;case vn.rotation:h=Ca;break;case vn.position:case vn.scale:h=ka;break;default:a.itemSize===1?h=Ia:h=ka;break}let l=n.interpolation!==void 0?Rx[n.interpolation]:Dn,d=this._getArrayFromAccessor(a);for(let u=0,p=c.length;u<p;u++){let x=new h(c[u]+"."+vn[i.path],t.array,d,l);n.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(x),r.push(x)}return r}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let a=ol(t.constructor),n=new Float32Array(t.length);for(let i=0,r=t.length;i<r;i++)n[i]=t[i]*a;t=n}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(a){let n=this instanceof Ca?sl:Xo;return new n(this.times,this.values,this.getValueSize()/3,a)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function Dx(s,e,t){let a=e.attributes,n=new zt;if(a.POSITION!==void 0){let o=t.json.accessors[a.POSITION],c=o.min,h=o.max;if(c!==void 0&&h!==void 0){if(n.set(new k(c[0],c[1],c[2]),new k(h[0],h[1],h[2])),o.normalized){let l=ol(ji[o.componentType]);n.min.multiplyScalar(l),n.max.multiplyScalar(l)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let i=e.targets;if(i!==void 0){let o=new k,c=new k;for(let h=0,l=i.length;h<l;h++){let d=i[h];if(d.POSITION!==void 0){let u=t.json.accessors[d.POSITION],p=u.min,x=u.max;if(p!==void 0&&x!==void 0){if(c.setX(Math.max(Math.abs(p[0]),Math.abs(x[0]))),c.setY(Math.max(Math.abs(p[1]),Math.abs(x[1]))),c.setZ(Math.max(Math.abs(p[2]),Math.abs(x[2]))),u.normalized){let g=ol(ji[u.componentType]);c.multiplyScalar(g)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}n.expandByVector(o)}s.boundingBox=n;let r=new Vt;n.getCenter(r.center),r.radius=n.min.distanceTo(n.max)/2,s.boundingSphere=r}function Ff(s,e,t){let a=e.attributes,n=[];function i(r,o){return t.getDependency("accessor",r).then(function(c){s.setAttribute(o,c)})}for(let r in a){let o=rl[r]||r.toLowerCase();o in s.attributes||n.push(i(a[r],o))}if(e.indices!==void 0&&!s.index){let r=t.getDependency("accessor",e.indices).then(function(o){s.setIndex(o)});n.push(r)}return Ue.workingColorSpace!==Rt&&"COLOR_0"in a&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Ue.workingColorSpace}" not supported.`),an(s,e),Dx(s,e,t),Promise.all(n).then(function(){return e.targets!==void 0?Cx(s,e.targets,t):s})}var Lf={type:"change"},ll={type:"start"},Of={type:"end"},Ko=new Xa,Uf=new oa,Lx=Math.cos(70*xn.DEG2RAD),Mt=new k,Kt=2*Math.PI,tt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},hl=1e-6,Jo=class extends Cs{constructor(e,t=null){super(e,t),this.state=tt.NONE,this.enabled=!0,this.target=new k,this.cursor=new k,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:pn.ROTATE,MIDDLE:pn.DOLLY,RIGHT:pn.PAN},this.touches={ONE:mn.ROTATE,TWO:mn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new k,this._lastQuaternion=new At,this._lastTargetPosition=new k,this._quat=new At().setFromUnitVectors(e.up,new k(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new ki,this._sphericalDelta=new ki,this._scale=1,this._panOffset=new k,this._rotateStart=new ue,this._rotateEnd=new ue,this._rotateDelta=new ue,this._panStart=new ue,this._panEnd=new ue,this._panDelta=new ue,this._dollyStart=new ue,this._dollyEnd=new ue,this._dollyDelta=new ue,this._dollyDirection=new k,this._mouse=new ue,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Ox.bind(this),this._onPointerDown=Ux.bind(this),this._onPointerUp=zx.bind(this),this._onContextMenu=qx.bind(this),this._onMouseWheel=Hx.bind(this),this._onKeyDown=Gx.bind(this),this._onTouchStart=Vx.bind(this),this._onTouchMove=Wx.bind(this),this._onMouseDown=Bx.bind(this),this._onMouseMove=jx.bind(this),this._interceptControlDown=Xx.bind(this),this._interceptControlUp=Kx.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Lf),this.update(),this.state=tt.NONE}update(e=null){let t=this.object.position;Mt.copy(t).sub(this.target),Mt.applyQuaternion(this._quat),this._spherical.setFromVector3(Mt),this.autoRotate&&this.state===tt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let a=this.minAzimuthAngle,n=this.maxAzimuthAngle;isFinite(a)&&isFinite(n)&&(a<-Math.PI?a+=Kt:a>Math.PI&&(a-=Kt),n<-Math.PI?n+=Kt:n>Math.PI&&(n-=Kt),a<=n?this._spherical.theta=Math.max(a,Math.min(n,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(a+n)/2?Math.max(a,this._spherical.theta):Math.min(n,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let i=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let r=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),i=r!=this._spherical.radius}if(Mt.setFromSpherical(this._spherical),Mt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Mt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let r=null;if(this.object.isPerspectiveCamera){let o=Mt.length();r=this._clampDistance(o*this._scale);let c=o-r;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),i=!!c}else if(this.object.isOrthographicCamera){let o=new k(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),i=c!==this.object.zoom;let h=new k(this._mouse.x,this._mouse.y,0);h.unproject(this.object),this.object.position.sub(h).add(o),this.object.updateMatrixWorld(),r=Mt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;r!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(r).add(this.object.position):(Ko.origin.copy(this.object.position),Ko.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ko.direction))<Lx?this.object.lookAt(this.target):(Uf.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ko.intersectPlane(Uf,this.target))))}else if(this.object.isOrthographicCamera){let r=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),r!==this.object.zoom&&(this.object.updateProjectionMatrix(),i=!0)}return this._scale=1,this._performCursorZoom=!1,i||this._lastPosition.distanceToSquared(this.object.position)>hl||8*(1-this._lastQuaternion.dot(this.object.quaternion))>hl||this._lastTargetPosition.distanceToSquared(this.target)>hl?(this.dispatchEvent(Lf),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Kt/60*this.autoRotateSpeed*e:Kt/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Mt.setFromMatrixColumn(t,0),Mt.multiplyScalar(-e),this._panOffset.add(Mt)}_panUp(e,t){this.screenSpacePanning===!0?Mt.setFromMatrixColumn(t,1):(Mt.setFromMatrixColumn(t,0),Mt.crossVectors(this.object.up,Mt)),Mt.multiplyScalar(e),this._panOffset.add(Mt)}_pan(e,t){let a=this.domElement;if(this.object.isPerspectiveCamera){let n=this.object.position;Mt.copy(n).sub(this.target);let i=Mt.length();i*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*i/a.clientHeight,this.object.matrix),this._panUp(2*t*i/a.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/a.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/a.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let a=this.domElement.getBoundingClientRect(),n=e-a.left,i=t-a.top,r=a.width,o=a.height;this._mouse.x=n/r*2-1,this._mouse.y=-(i/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Kt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Kt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Kt*this.rotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Kt*this.rotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Kt*this.rotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Kt*this.rotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),a=.5*(e.pageX+t.x),n=.5*(e.pageY+t.y);this._rotateStart.set(a,n)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),a=.5*(e.pageX+t.x),n=.5*(e.pageY+t.y);this._panStart.set(a,n)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),a=e.pageX-t.x,n=e.pageY-t.y,i=Math.sqrt(a*a+n*n);this._dollyStart.set(0,i)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let a=this._getSecondPointerPosition(e),n=.5*(e.pageX+a.x),i=.5*(e.pageY+a.y);this._rotateEnd.set(n,i)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Kt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Kt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),a=.5*(e.pageX+t.x),n=.5*(e.pageY+t.y);this._panEnd.set(a,n)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),a=e.pageX-t.x,n=e.pageY-t.y,i=Math.sqrt(a*a+n*n);this._dollyEnd.set(0,i),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let r=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(r,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new ue,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,a={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:a.deltaY*=16;break;case 2:a.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(a.deltaY*=10),a}};function Ux(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s)))}function Ox(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function zx(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Of),this.state=tt.NONE;break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function Bx(s){let e;switch(s.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case pn.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=tt.DOLLY;break;case pn.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=tt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=tt.ROTATE}break;case pn.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=tt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=tt.PAN}break;default:this.state=tt.NONE}this.state!==tt.NONE&&this.dispatchEvent(ll)}function jx(s){switch(this.state){case tt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case tt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case tt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function Hx(s){this.enabled===!1||this.enableZoom===!1||this.state!==tt.NONE||(s.preventDefault(),this.dispatchEvent(ll),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(Of))}function Gx(s){this.enabled!==!1&&this._handleKeyDown(s)}function Vx(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case mn.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=tt.TOUCH_ROTATE;break;case mn.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=tt.TOUCH_PAN;break;default:this.state=tt.NONE}break;case 2:switch(this.touches.TWO){case mn.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=tt.TOUCH_DOLLY_PAN;break;case mn.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=tt.TOUCH_DOLLY_ROTATE;break;default:this.state=tt.NONE}break;default:this.state=tt.NONE}this.state!==tt.NONE&&this.dispatchEvent(ll)}function Wx(s){switch(this._trackPointer(s),this.state){case tt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case tt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case tt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case tt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=tt.NONE}}function qx(s){this.enabled!==!1&&s.preventDefault()}function Xx(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Kx(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var Hi={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var jt=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},Jx=new Qa(-1,1,1,-1,0,1),dl=class extends Et{constructor(){super(),this.setAttribute("position",new bt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new bt([0,2,0,0,2,0],2))}},Yx=new dl,La=class{constructor(e){this._mesh=new st(Yx,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Jx)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Gi=class extends jt{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof rt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=wa.clone(e.uniforms),this.material=new rt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new La(this.material)}render(e,t,a){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=a.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Hs=class extends jt{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,a){let n=e.getContext(),i=e.state;i.buffers.color.setMask(!1),i.buffers.depth.setMask(!1),i.buffers.color.setLocked(!0),i.buffers.depth.setLocked(!0);let r,o;this.inverse?(r=0,o=1):(r=1,o=0),i.buffers.stencil.setTest(!0),i.buffers.stencil.setOp(n.REPLACE,n.REPLACE,n.REPLACE),i.buffers.stencil.setFunc(n.ALWAYS,r,4294967295),i.buffers.stencil.setClear(o),i.buffers.stencil.setLocked(!0),e.setRenderTarget(a),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),i.buffers.color.setLocked(!1),i.buffers.depth.setLocked(!1),i.buffers.color.setMask(!0),i.buffers.depth.setMask(!0),i.buffers.stencil.setLocked(!1),i.buffers.stencil.setFunc(n.EQUAL,1,4294967295),i.buffers.stencil.setOp(n.KEEP,n.KEEP,n.KEEP),i.buffers.stencil.setLocked(!0)}},Yo=class extends jt{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Zo=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let a=e.getSize(new ue);this._width=a.width,this._height=a.height,t=new xt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Ft}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Gi(Hi),this.copyPass.material.blending=ta,this.clock=new Vn}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),a=!1;for(let n=0,i=this.passes.length;n<i;n++){let r=this.passes[n];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(n),r.render(this.renderer,this.writeBuffer,this.readBuffer,e,a),r.needsSwap){if(a){let o=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Hs!==void 0&&(r instanceof Hs?a=!0:r instanceof Yo&&(a=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new ue);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let a=this._width*this._pixelRatio,n=this._height*this._pixelRatio;this.renderTarget1.setSize(a,n),this.renderTarget2.setSize(a,n);for(let i=0;i<this.passes.length;i++)this.passes[i].setSize(a,n)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Qo=class extends jt{constructor(e,t,a=null,n=null,i=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=a,this.clearColor=n,this.clearAlpha=i,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new ge}render(e,t,a){let n=e.autoClear;e.autoClear=!1;let i,r;this.overrideMaterial!==null&&(r=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(i=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:a),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(i),this.overrideMaterial!==null&&(this.scene.overrideMaterial=r),e.autoClear=n}};var zf={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ge(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var Vi=class s extends jt{constructor(e,t,a,n){super(),this.strength=t!==void 0?t:1,this.radius=a,this.threshold=n,this.resolution=e!==void 0?new ue(e.x,e.y):new ue(256,256),this.clearColor=new ge(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let i=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);this.renderTargetBright=new xt(i,r,{type:Ft}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let d=0;d<this.nMips;d++){let u=new xt(i,r,{type:Ft});u.texture.name="UnrealBloomPass.h"+d,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);let p=new xt(i,r,{type:Ft});p.texture.name="UnrealBloomPass.v"+d,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),i=Math.round(i/2),r=Math.round(r/2)}let o=zf;this.highPassUniforms=wa.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=n,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new rt({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let c=[3,5,7,9,11];i=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);for(let d=0;d<this.nMips;d++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(c[d])),this.separableBlurMaterials[d].uniforms.invSize.value=new ue(1/i,1/r),i=Math.round(i/2),r=Math.round(r/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let h=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=h,this.bloomTintColors=[new k(1,1,1),new k(1,1,1),new k(1,1,1),new k(1,1,1),new k(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let l=Hi;this.copyUniforms=wa.clone(l.uniforms),this.blendMaterial=new rt({uniforms:this.copyUniforms,vertexShader:l.vertexShader,fragmentShader:l.fragmentShader,blending:_a,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new ge,this.oldClearAlpha=1,this.basic=new It,this.fsQuad=new La(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let a=Math.round(e/2),n=Math.round(t/2);this.renderTargetBright.setSize(a,n);for(let i=0;i<this.nMips;i++)this.renderTargetsHorizontal[i].setSize(a,n),this.renderTargetsVertical[i].setSize(a,n),this.separableBlurMaterials[i].uniforms.invSize.value=new ue(1/a,1/n),a=Math.round(a/2),n=Math.round(n/2)}render(e,t,a,n,i){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let r=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),i&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=a.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=a.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let o=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this.fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[c].uniforms.direction.value=s.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=s.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this.fsQuad.render(e),o=this.renderTargetsVertical[c];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,i&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(a),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=r}getSeperableBlurMaterial(e){let t=[];for(let a=0;a<e;a++)t.push(.39894*Math.exp(-.5*a*a/(e*e))/e);return new rt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new ue(.5,.5)},direction:{value:new ue(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new rt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}};Vi.BlurDirectionX=new ue(1,0);Vi.BlurDirectionY=new ue(0,1);var $o=class extends jt{constructor(e){super();let t=Hi;this.textureID="tDiffuse",this.uniforms=wa.clone(t.uniforms),this.material=new rt({uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader,blending:ta}),this.renderTarget=e,this.renderTarget===void 0&&(this.renderTarget=new xt(1,1,{type:Ft}),this.renderTarget.texture.name="SavePass.rt"),this.needsSwap=!1,this.fsQuad=new La(this.material)}render(e,t,a){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=a.texture),e.setRenderTarget(this.renderTarget),this.clear&&e.clear(),this.fsQuad.render(e)}setSize(e,t){this.renderTarget.setSize(e,t)}dispose(){this.renderTarget.dispose(),this.material.dispose(),this.fsQuad.dispose()}};var Bf={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var ec=class extends jt{constructor(){super();let e=Bf;this.uniforms=wa.clone(e.uniforms),this.material=new _s({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new La(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,a){this.uniforms.tDiffuse.value=a.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Ue.getTransfer(this._outputColorSpace)===Je&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Yr?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Zr?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Qr?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===$r?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===eo?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Pi&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var M_=(function(){var s="b9H79Tebbbe9ok9Geueu9Geub9Gbb9Gruuuuuuueu9Gvuuuuueu9Gduueu9Gluuuueu9Gvuuuuub9Gouuuuuub9Gluuuub9GiuuueuiE8AdilveoveovrrwrrrDDoDrbqqbelve9Weiiviebeoweuecj:Gdkr:PlCo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8F9TW79O9V9Wt9FW9U9J9V9KW9wWVtW949c919M9MWV9mW4W2be8A9TW79O9V9Wt9FW9U9J9V9KW9wWVtW949c919M9MWVbd8F9TW79O9V9Wt9FW9U9J9V9KW9wWVtW949c919M9MWV9c9V919U9KbiE9TW79O9V9Wt9FW9U9J9V9KW9wWVtW949wWV79P9V9UblY9TW79O9V9Wt9FW9U9J9V9KW69U9KW949c919M9MWVbv8E9TW79O9V9Wt9FW9U9J9V9KW69U9KW949c919M9MWV9c9V919U9Kbo8A9TW79O9V9Wt9FW9U9J9V9KW69U9KW949wWV79P9V9UbrE9TW79O9V9Wt9FW9U9J9V9KW69U9KW949tWG91W9U9JWbwa9TW79O9V9Wt9FW9U9J9V9KW69U9KW949tWG91W9U9JW9c9V919U9KbDL9TW79O9V9Wt9FW9U9J9V9KWS9P2tWV9p9JtbqK9TW79O9V9Wt9FW9U9J9V9KWS9P2tWV9r919HtbkL9TW79O9V9Wt9FW9U9J9V9KWS9P2tWVT949WbxY9TW79O9V9Wt9FW9U9J9V9KWS9P2tWVJ9V29VVbmE9TW79O9V9Wt9F9V9Wt9P9T9P96W9wWVtW94J9H9J9OWbza9TW79O9V9Wt9F9V9Wt9P9T9P96W9wWVtW94J9H9J9OW9ttV9P9WbHa9TW79O9V9Wt9F9V9Wt9P9T9P96W9wWVtW94SWt9J9O9sW9T9H9WbOK9TW79O9V9Wt9F79W9Ht9P9H29t9VVt9sW9T9H9WbAl79IV9RbXDwebcekdKYq:Nf8Adbk;wadhud9:8Jjjjjbc;qw9Rgr8KjjjjbcbhwdnaeTmbabcbyd;i:I:cjbaoaocb9iEgDc:GeV86bbarc;adfcbcjdz:xjjjb8AdnaiTmbarc;adfadalz:wjjjb8Akarc;abfalfcbcbcjdal9RalcFe0Ez:xjjjb8Aarc;abfarc;adfalz:wjjjb8Aar9cb83iUar9cb83i8War9cb83iyar9cb83iaar9cb83iKar9cb83izar9cb83iwar9cb83ibcj;abal9Uc;WFbGcjdalca0Ehqdnaicd6mbavcd9imbaDTmbadcefhkaqci2gxal2hmarc;alfclfhParc;qlfceVhsarc;qofclVhzcbhHincdhOcbhAdnavci6mbar9cb83i;Ooar9cb83i;Goar9cb83i;yoar9cb83i;qoadaHfgoybbhCcbhXincbhwcbhQdninaoalfhLaoybbgKaC7aQVhQawcP0meaLhoaKhCawcefgwaXfai6mbkkcbhCarc;qofhwincwhYcwh8AdnaQaC93gocFeGgEcs0mbclh8AaEci0mbcdcbaEEh8Akdnaocw4cFeGgEcs0mbclhYaEci0mbcdcbaEEhYkaYa8AfhEawydbh3cwhYcwh8Adnaocz4cFeGg5cs0mbclh8Aa5ci0mbcdcba5Eh8AkaEa3fhEdnaocFFFFb0mbclhYaocFFF8F0mbcbcdaocjjjw6EhYkawaEa8AfaYfBdbawclfhwaCcefgCcw9hmbkaLhoaKhCaXczfgXai6mbkcbhocehwazhQinawaoaQydbarc;qofaocdtfydb6EhoaQclfhQawcefgwcw9hmbkaoclthAcihOkcbhEarc;qlfcbcjdz:xjjjb8AarcbBd;ilar9cb83i;aladh8Eaqh8Fakh3inarc;qlfadaEaEcb9h9Ral2falz:wjjjb8Aaia8Faia8F6EhadnaqaiaE9RaEaqfai6EgKcsfc9WGgoaK9nmbarc;qofaKfcbaoaK9Rz:xjjjb8AkadaEal2fhhcbhginagaAVcl4hXarc;alfagcdtfh8JaHh8Kcbh8Lina8LaHfhwdndndndndndndnagPlbedibkaKTmvahawfhoarc;qlfawfRbbhQarc;qofhwaahCinawaoRbbgYaQ9RgQcetaQcKtc8F91786bbawcefhwaoalfhoaYhQaEaCcufgC9hmbxvkkaKTmla8Kc9:Ghoa8LcitcwGh8Aarc;qlfawceVfRbbcwtarc;qlfawc9:GfRbbVhQarc;qofhwaahCinawa3aofRbbcwta8EaofRbbVgYaQ9RgQcetaQcztc8F917cFFiGa8A486bbaoalfhoawcefhwaYhQaEaCcufgC9hmbxlkkasa8Kc98GgQfhoa3aQfhYarc;qlfawc98GgQfRbbhCcwhwinaoRbbawtaCVhCaocefhoawcwfgwca9hmbxdkkaKTmdxekaKTmea8Lcith5ahaQfh8AcbhLina8ARbbhQcwhoaYhwinawRbbaotaQVhQawcefhwaocwfgoca9hmbkarc;qofaLfaQaC7aX93a5486bbaYalfhYa8Aalfh8AaQhCaLcefgLaK9hmbkka8Jydbh8AcbhLarc;qofhoincdhQcbhwinaQaoawfRbbcb9hfhQawcefgwcz9hmbkclhCcbhwinaCaoawfRbbcd0fhCawcefgwcz9hmbkcwhYcbhwinaYaoawfRbbcP0fhYawcefgwcz9hmbkaQaCaQaC6EgwaYawaY6Egwczawcz6Ea8Afh8AaoczfhoaLczfgLaK6mbka8Ja8ABdbka8Kcefh8Ka8Lcefg8Lcl9hmbkagcefggaO9hmbka8Eamfh8Ea8Faxfh8Fa3amfh3aEaxfgEai6mbkcbhocehwaPhQinawaoaQydbarc;alfaocdtfydb6EhoaQclfhQaOawcefgw9hmbkaraHcd4faAcdVaoaocdSE86bbaHclfgHal6mbkkabaefhgabcefhoalcd4g8McbaDEhkadcefh8Narc;abfceVhecbhmdndninaiam9nmearc;qofcbcjdz:xjjjb8Aagao9Rak6mdadamal2gwfhxcbhHa8Nawfhzaocbakz:xjjjbg8Fakfh3aqaiam9Ramaqfai6Egscsfgocl4cifcd4hOaoc9WGg8JThPindndndndndndndndndndnaDTmbaraHcd4fRbbgQciGPlbedlbkasTmdaxaHfhoarc;abfaHfRbbhQarc;qofhwashCinawaoRbbgYaQ9RgQcetaQcKtc8F91786bbawcefhwaoalfhoaYhQaCcufgCmbxikkasTmiaHcitcwGh8Aarc;abfaHceVfRbbcwtarc;abfaHc9:GgofRbbVhQaxaofhoarc;qofhwashCinawao8VbbgYaQ9RgQcetaQcztc8F917cFFiGa8A486bbawcefhwaoalfhoaYhQaCcufgCmbxikkaeaHc98Gg8Afhoaza8AfhYarc;abfa8AfRbbhCcwhwinaoRbbawtaCVhCaocefhoawcwfgwca9hmbkasTmdaQcl4hKaHcitcKGhEaxa8Afh8AcbhLina8ARbbhQcwhoaYhwinawRbbaotaQVhQawcefhwaocwfgoca9hmbkarc;qofaLfaQaC7aK93aE486bbaYalfhYa8Aalfh8AaQhCaLcefgLas9hmbkkaDmbcbhoxlka8JTmbcbhodninarc;qofaofgwcwf8Pibaw8Pib:e9qTmeaoczfgoa8J9pmdxbkkdnavmbcehoxikcbh8AaOhLaOhKinarc;qofa8Afgocwf8Pibhyao8Pibh8PcdhQcbhwinaQaoawfRbbcb9hfhQawcefgwcz9hmbkclhCcbhwinaCaoawfRbbcd0fhCawcefgwcz9hmbkcwhYcbhwinaYaoawfRbbcP0fhYawcefgwcz9hmbkaQaCaQaC6EgoaYaoaY6Egoczaocz6EaKfhKaocucbaya8P:e9cb9sEgwaoaw6EaLfhLa8Aczfg8Aa8J9pmdxbkka8FaHcd4fgoaoRbbcdaHcetcoGtV86bbxikdnaLas6mbaKas6mba8FaHcd4fgoaoRbbciaHcetcoGtV86bbaga39Ras6mra3arc;qofasz:wjjjbasfh3xikaLaK9phoka8FaHcd4fgwawRbbaoaHcetcoGtV86bbkaga39RaO6mla3cbaOz:xjjjbgaaOfhKdndna8JmbaPhoxekdnagaK9RcK9pmbaPhoxekaocdtc:q:G:cjbfcj:G:cjbaDEg3ydxghcetc;:FFFeGhAcuhEcuahtcu7cFeGh8Ecbh8Karc;qofhQinarc;qofa8KfhXczh8AdndndnahPDbeeeeeeedekcucbaXcwf8PibaX8Pib:e9cb9sEh8AxekcbhoaAh8Aina8Aa8EaQaofRbb9nfh8Aaocefgocz9hmbkkcih5cbhYinczhwdndndna3aYcdtfydbgLPDbeeeeeeedekcucbaXcwf8PibaX8Pib:e9cb9sEhwxekaLcetc;:FFFeGhwcuaLtcu7cFeGhCcbhoinawaCaQaofRbb9nfhwaocefgocz9hmbkkdndnawa8A6mbaLaE9hmeawa8A9hmea3a5cdtfydbcwSmekaYh5awh8AkaYcefgYci9hmbkaaa8Kco4fgoaoRbba5a8Kci4coGtV86bbdndndna3a5cdtfydbgEPDdbbbbbbbebkdncwaE9Tg5TmbcuaEtcu7hwdndnaEceSmbcbh8LaQhXinaXhoa5hYcbhCinaoRbbg8AawcFeGgLa8AaL6EaCaEtVhCaocefhoaYcufgYmbkaKaC86bbaXa5fhXaKcefhKa8La5fg8Lcz6mbxdkkcbh8LaQhXinaXhoa5hYcbhCinaoRbbg8AawcFeGgLa8AaL6EaCcetVhCaocefhoaYcufgYmbkaKaC:T9cFe:d9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:9ca188bbaXa5fhXaKcefhKa8La5fg8Lcz6mbkkcbhoinaKaQaofRbbgC86bbaKaCawcFeG9pfhKaocefgocz9hmbxikkdnaEceSmbinaKcb86bbaKcefhKxbkkinaKcb86bbaKcefhKxbkkaKaX8Pbw83bwaKaX8Pbb83bbaKczfhKka8Kczfg8Ka8J9pgomeaQczfhQagaK9RcK9pmbkkaoTmlaKh3aKTmlkaHcefgHal9hmbkarc;abfaxascufal2falz:wjjjb8Aasamfhma3hoa3mbkcbhwxdkdnagao9RakalfgwcKcaaDEgQawaQ0EgC9pmbcbhwxdkdnawaQ9pmbaocbaCaw9Rgwz:xjjjbawfhokaoarc;adfalz:wjjjbalfhodnaDTmbaoara8Mz:wjjjba8Mfhokaoab9Rhwxekcbhwkarc;qwf8Kjjjjbawk5babaeadaialcdcbyd;i:I:cjbz:bjjjbk9reduaecd4gdaefgicaaica0Ecj;abae9Uc;WFbGcjdaeca0Egicl4cifcd4aifae2adfabaifcufai9U2fcefkmbcbabBd;i:I:cjbk;HPeLu8Jjjjjbc;ae9Rgl8Kjjjjbcbhvdnaeaici9UgocHf6mbabcbyd;m:I:cjbgrc;GeV86bbalc;abfcFecjez:xjjjb8Aal9cu83iUal9cu83i8Wal9cu83iyal9cu83iaal9cu83iKal9cu83izal9cu83iwal9cu83ibabaefc9WfhwabcefgDaofhednaiTmbcmcsarcb9kgqEhkcbhxcbhmcbhPcbhscbhzindnaeaw9nmbcbhvxikazcufhvadaPcdtfgHydbhOaHcwfydbhAaHclfydbhCcbhXdndndninalc;abfavcsGcitfgoydlhQdndndnaoydbgoaO9hmbaQaCSmekdnaoaC9hmbaQaA9hmbaXcefhXxekaoaA9hmeaQaO9hmeaXcdfhXkaXc870mdascufhvaHaXcdtgAcxGgoyd:4:G:cjbcdtfydbhQaHaoyd:0:G:cjbcdtfydbhCaHaoyd:W:G:cjbcdtfydbhOcbhodnindnalavcsGcdtfydbaQ9hmbaohXxdkcuhXavcufhvaocefgocz9hmbkkaxaQaxSgvaXce9iaXak9oVgoGfhxdndndncbcsavEaXaoEgvcs9hmbarce9imbaQaQamaQcefamSgvEgmcefSmecmcsavEhvkaDavaAc;WeGV86bbavcs9hmeaQam9Rgvcetavc8F917hvinaecbcjeavcje6EavcFbGV86bbaecefheavcr4gvmbkaQhmxvkcPhvaDaAcPV86bbaQhmkavTmiavak9omicdhocehXazhAxlkavcufhvaXclfgXc;ab9hmbkkdnaHcecdcbaAaxSEaCaxSEcdtgvyd:W:G:cjbcdtfydbgOTaHavyd:0:G:cjbcdtfydbgCceSGaHavyd:4:G:cjbcdtfydbgQcdSGaxcb9hGaqGgLce9hmbal9cu83iUal9cu83i8Wal9cu83iyal9cu83iaal9cu83iKal9cu83izal9cu83iwal9cu83ibcbhxkcbhXascufgvhodnindnalaocsGcdtfydbaC9hmbaXhAxdkcuhAaocufhoaXcefgXcz9hmbkkcbhodnindnalavcsGcdtfydbaQ9hmbaohXxdkcuhXavcufhvaocefgocz9hmbkkaxaOaxSgKfhHdndnaAcm0mbaAcefhAxekcbcsaCaHSgvEhAaHavfhHkdndnaXcm0mbaXcefhXxekcbcsaQaHSgvEhXaHavfhHkc9:cuaKEhYcbhvaXaAcltVg8AcFeGhodndndninavc;q:G:cjbfRbbaoSmeavcefgvcz9hmbxdkkaLaOax9havcm0VVmbaDavc;WeV86bbxekaDaY86bbaea8A86bbaecefhekdnaKmbaOam9Rgvcetavc8F917hvinaecbcjeavcje6EavcFbGV86bbaecefheavcr4gvmbkaOhmkdnaAcs9hmbaCam9Rgvcetavc8F917hvinaecbcjeavcje6EavcFbGV86bbaecefheavcr4gvmbkaChmkdnaXcs9hmbaQam9Rgvcetavc8F917hvinaecbcjeavcje6EavcFbGV86bbaecefheavcr4gvmbkaQhmkalascdtfaOBdbascefcsGhvdndnaAPzbeeeeeeeeeeeeeebekalavcdtfaCBdbascdfcsGhvkdndnaXPzbeeeeeeeeeeeeeebekalavcdtfaQBdbavcefcsGhvkcihoalc;abfazcitfgXaOBdlaXaCBdbazcefcsGhAcdhXavhsaHhxxekcdhoalascdtfaQBdbcehXascefcsGhsazhAkalc;abfaAcitfgvaCBdlavaQBdbalc;abfazaXfcsGcitfgvaQBdlavaOBdbaDcefhDazaofcsGhzaPcifgPai6mbkkdnaeaw9nmbcbhvxekcbhvinaeavfavc;q:G:cjbfRbb86bbavcefgvcz9hmbkaeab9Ravfhvkalc;aef8KjjjjbavkZeeucbhddninadcefgdc8F0meaeceadt0mbkkadcrfcFeGcr9Uci2cdfabci9U2cHfkmbcbabBd;m:I:cjbk:zderu8Jjjjjbcz9Rhlcbhvdnaeaicvf6mbabcbRb;m:I:cjbc;qeV86bbal9cb83iwabcefhvabaefc98fhodnaiTmbcbhecbhrcbhwindnavao6mbcbskadawcdtfydbgDalcwfaraDae9Rgeaec8F91ge7ae9Rc507grcdtfgqydb9Rgec8E91c9:Gaecdt7arVheinavcbcjeaecje6EaecFbGV86bbavcefhvaecr4gembkaqaDBdbaDheawcefgwai9hmbkkdnavao9nmbcbskavcbBbbavab9RclfhvkavkBeeucbhddninadcefgdc8F0meaeceadt0mbkkabadcwfcFeGcr9U2cvfk:dvli99dui99ludnaeTmbcuadcetcuftcu7:Zhvdndncuaicuftcu7:ZgoJbbbZMgr:lJbbb9p9DTmbar:Ohwxekcjjjj94hwkcbhicbhDinalclfIdbgrJbbbbJbbjZalIdbgq:lar:lMalcwfIdbgk:lMgr:varJbbbb9BEgrNhxaqarNhralcxfIdbhqdndnakJbbbb9GTmbaxhkxekJbbjZar:l:tgkak:maxJbbbb9GEhkJbbjZax:l:tgxax:marJbbbb9GEhrkdndnaqJbbj:;aqJbbj:;9GEgxJbbjZaxJbbjZ9FEavNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohmxekcjjjj94hmkdndnakJbbj:;akJbbj:;9GEgqJbbjZaqJbbjZ9FEaoNJbbbZJbbb:;akJbbbb9GEMgq:lJbbb9p9DTmbaq:OhPxekcjjjj94hPkdndnarJbbj:;arJbbj:;9GEgqJbbjZaqJbbjZ9FEaoNJbbbZJbbb:;arJbbbb9GEMgr:lJbbb9p9DTmbar:Ohsxekcjjjj94hskdndnadcl9hmbabaDfgzas86bbazcifam86bbazcdfaw86bbazcefaP86bbxekabaifgzas87ebazcofam87ebazclfaw87ebazcdfaP87ebkaicwfhiaDclfhDalczfhlaecufgembkkk;hlld99eud99eudnaeTmbdndncuaicuftcu7:ZgvJbbbZMgo:lJbbb9p9DTmbao:Ohixekcjjjj94hikaic;8FiGhrinabcofcicdalclfIdb:lalIdb:l9EgialcwfIdb:lalaicdtfIdb:l9EEgialcxfIdb:lalaicdtfIdb:l9EEgiarV87ebdndnJbbj:;JbbjZalaicdtfIdbJbbbb9DEgoalaicd7cdtfIdbJ;Zl:1ZNNgwJbbj:;awJbbj:;9GEgDJbbjZaDJbbjZ9FEavNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohqxekcjjjj94hqkabcdfaq87ebdndnalaicefciGcdtfIdbJ;Zl:1ZNaoNgwJbbj:;awJbbj:;9GEgDJbbjZaDJbbjZ9FEavNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohqxekcjjjj94hqkabaq87ebdndnaoalaicufciGcdtfIdbJ;Zl:1ZNNgoJbbj:;aoJbbj:;9GEgwJbbjZawJbbjZ9FEavNJbbbZJbbb:;aoJbbbb9GEMgo:lJbbb9p9DTmbao:Ohixekcjjjj94hikabclfai87ebabcwfhbalczfhlaecufgembkkk;uvdDue998Jjjjjbcjd9Rgo8Kjjjjbdndndnadcd4grTmbc:CucbavEhwaohdarhDinadawBdbadclfhdaDcufgDmbkavcd9hmbaeTmbarcdthqcbhkalhxinaohdaxhDarhwinadadydbgmaDydbcL4cFeGc:cufgPamaP9kEBdbaDclfhDadclfhdawcufgwmbkaxaqfhxakcefgkae9hmbxdkkaeTmekarcdthxavce9hhqcbhkindndndnaqmbarTmdc:CuhwalhdarhDinawadydbcL4cFeGc:cufgmawam9kEhwadclfhdaDcufgDmbxdkkdndndndnavPleddbdkarTmlaohdalhDarhwinadcbaDydbcL4cFeGgmc:cufgPaPam0EBdbadclfhdaDclfhDawcufgwmbxikkarTmicbhdarhDindnaladfIdbgsJbbbb9Bmbaoadfas:8cL4cFeGgwc8Aawc8A0Ec:cufBdbkadclfhdaDcufgDmbxdkkarTmdkc:CuhwkcbhdarhminawhDdnavceSmbaoadfydbhDkdndnaladfIdbgscjjj;8iaDai9RcefgPcLt9R::NJbbbZJbbb:;asJbbbb9GEMgs:lJbbb9p9DTmbas:OhDxekcjjjj94hDkabadfaDcFFFiaDcFFFi9iEcFFFrGaPcKtVBdbadclfhdamcufgmmbkkabaxfhbalaxfhlakcefgkae9hmbkkaocjdf8Kjjjjbk:Olveue99iue99iudnaeTmbceaicufthvcuaitcu7:Zhocbhradcl9hhwcbhDindndnalcwfIdbgqJbbbbaqJbbbb9GEgqJbbjZaqJbbjZ9FEaoNJbbbZMgq:lJbbb9p9DTmbaq:Ohixekcjjjj94hikdndnalIdbgqJbbbbaqJbbbb9GEgqJbbjZaqJbbjZ9FEaoNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkadai9Rcd9TgkaifhidndnalclfIdbgqJbbbbaqJbbbb9GEgqJbbjZaqJbbjZ9FEaoNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkadai9Rcd9ThddndnalcxfIdbgqJbbbbaqJbbbb9GEgqJbbjZaqJbbjZ9FEaoNJbbbZMgq:lJbbb9p9DTmbaq:Ohxxekcjjjj94hxkadaifhiaxce91avVhxdndnawmbabaDfgmai86bbamcifax86bbamcdfad86bbamcefak86bbxekabarfgmai87ebamcofax87ebamclfad87ebamcdfak87ebkarcwfhraDclfhDalczfhlaecufgembkkk;mqdQui998Jjjjjbc:qd9Rgv8Kjjjjbavc:Sefcbc;Kbz:xjjjb8AdnadTmbaiTmbdndnabaeSmbaehoxekavcuadcdtgradcFFFFi0Ecbyd;q:I:cjbHjjjjbbgoBd:SeavceBd:mdaoaearz:wjjjb8AkavcbBd:Oeav9cb83i:Geavc:Gefaoadaiavc:Sefz:pjjjbavyd:Gehwadci9UgDcbyd;q:I:cjbHjjjjbbheavc:Sefavyd:mdgqcdtfaeBdbavaqcefgrBd:mdaecbaDz:xjjjbhkavc:SefarcdtfcuaicdtaicFFFFi0Ecbyd;q:I:cjbHjjjjbbgxBdbavaqcdfgmBd:mdalc;ebfhPawheaxhrinaralIdbaPaeydbgscwascw6EcdtfIdbMUdbaeclfhearclfhraicufgimbkavc:SefamcdtfcuaDcdtadcFFFF970Ecbyd;q:I:cjbHjjjjbbgmBdbdnadci6mbaoheamhraDhiinaraxaeydbcdtfIdbaxaeclfydbcdtfIdbMaxaecwfydbcdtfIdbMUdbaecxfhearclfhraicufgimbkkaqcifhzalc;ebfhHavc;qbfhOavheavyd:KehAavyd:OehCcbhscbhrcbhXcehQinaehLaoarcx2fgKydbhPaKclfydbhdabaXcx2fgecwfaKcwfydbgYBdbaeclfadBdbaeaPBdbakarfce86bbaOaYBdwaOadBdlaOaPBdbamarcdtfcbBdbcih8AdnasTmbaLhiinaOa8AcdtfaiydbgeBdba8AaeaY9haeaP9haead9hGGfh8AaiclfhiascufgsmbkkaXcefhXcbhsinaCaAaKascdtfydbcdtgifydbcdtfgYheawaifgdydbgPhidnaPTmbdninaeydbarSmeaeclfheaicufgiTmdxbkkaeaYaPcdtfc98fydbBdbadadydbcufBdbkascefgsci9hmbkdndndna8ATmbcuhrJbbbbhEcbhdavyd:KehYavyd:OehKindnawaOadcdtfydbcdtgsfydbgeTmbaxasfgiIdbh3aialcuadadcs0EcdtfclfIdbaHaecwaecw6EcdtfIdbMg5Udba5a3:th5aecdthiaKaYasfydbcdtfheinamaeydbgscdtfgPa5aPIdbMg3Udba3aEaEa39DgPEhEasaraPEhraeclfheaic98fgimbkkadcefgda8A9hmbkarcu9hmekaQaD9pmeindnakaQfRbbmbaQhrxdkaDaQcefgQ9hmbxdkka8Acza8Acz6EhsaOheaLhOarcu9hmekkazTmbaqcdtavc:Seffcwfheinaeydbcbyd;u:I:cjbH:bjjjbbaec98fheazcufgzmbkkavc:qdf8Kjjjjbk:0leoucuaicdtgvaicFFFFi0Egocbyd;q:I:cjbHjjjjbbhralalyd9GgwcdtfarBdbalawcefBd9GabarBdbaocbyd;q:I:cjbHjjjjbbhralalyd9GgocdtfarBdbalaocefBd9GabarBdlcuadcdtadcFFFFi0Ecbyd;q:I:cjbHjjjjbbhralalyd9GgocdtfarBdbalaocefBd9GabarBdwabydbcbavz:xjjjb8AabydbhraehladhvinaralydbcdtfgoaoydbcefBdbalclfhlavcufgvmbkcbhvabydlglhoarhwaihDinaoavBdbaoclfhoawydbavfhvawclfhwaDcufgDmbkadci9Uhqdnadcd9nmbabydwhocbhvinaecwfydbhwaeclfydbhDalaeydbcdtfgbabydbgbcefBdbaoabcdtfavBdbalaDcdtfgDaDydbgDcefBdbaoaDcdtfavBdbalawcdtfgwawydbgwcefBdbaoawcdtfavBdbaecxfheaqavcefgv9hmbkkinalalydbarydb9RBdbarclfhralclfhlaicufgimbkkQbabaeadaic;G:G:cjbz:ojjjbkQbabaeadaic;i:H:cjbz:ojjjbk9DeeuabcFeaicdtz:xjjjbhlcbhbdnadTmbindnalaeydbcdtfgiydbcu9hmbaiabBdbabcefhbkaeclfheadcufgdmbkkabk:3vioud9:du8Jjjjjbc;Wa9Rgl8Kjjjjbcbhvalcxfcbc;Kbz:xjjjb8AalcuadcitgoadcFFFFe0Ecbyd;q:I:cjbHjjjjbbgrBdxalceBd2araeadaicezNjjjbalcuaoadcjjjjoGEcbyd;q:I:cjbHjjjjbbgwBdzadcdthednadTmbabhiinaiavBdbaiclfhiadavcefgv9hmbkkawaefhDalabBdwalawBdl9cbhqindnadTmbaq9cq9:hkarhvaDhiadheinaiav8Pibak1:NcFrG87ebavcwfhvaicdfhiaecufgembkkalclfaq:NceGcdtfydbhxalclfaq9ce98gq:NceGcdtfydbhmalc;Wbfcbcjaz:xjjjb8AaDhvadhidnadTmbinalc;Wbfav8VebcdtfgeaeydbcefBdbavcdfhvaicufgimbkkcbhvcbhiinalc;WbfavfgeydbhoaeaiBdbaoaifhiavclfgvcja9hmbkadhvdndnadTmbinalc;WbfaDamydbgicetf8VebcdtfgeaeydbgecefBdbaxaecdtfaiBdbamclfhmavcufgvmbkaq9cv9smdcbhvinabawydbcdtfavBdbawclfhwadavcefgv9hmbxdkkaq9cv9smekkcwhvcbhiinalcxfavfc98fydbcbyd;u:I:cjbH:bjjjbbaiceGheclhvcehiaeTmbkalc;Waf8Kjjjjbk:Awliuo99iud9:cbhv8Jjjjjbca9Rgocbyd:4:I:cjbBdKaocb8Pd:W:I:cjb83izaocbyd;e:I:cjbBdwaocb8Pd:8:I:cjb83ibaicd4hrdndnadmbJFFuFhwJFFuuhDJFFuuhqJFFuFhkJFFuuhxJFFuFhmxekarcdthPaehsincbhiinaoczfaifgzasaifIdbgwazIdbgDaDaw9EEUdbaoaifgzawazIdbgDaDaw9DEUdbaiclfgicx9hmbkasaPfhsavcefgvad9hmbkaoIdKhDaoIdwhwaoIdChqaoIdlhkaoIdzhxaoIdbhmkdnadTmbJbbbbJbFu9hJbbbbamax:tgmamJbbbb9DEgmakaq:tgkakam9DEgkawaD:tgwawak9DEgw:vawJbbbb9BEhwdnalmbarcdthoindndnaeclfIdbaq:tawNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikai:S9cC:ghHdndnaeIdbax:tawNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikaHai:S:ehHdndnaecwfIdbaD:tawNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabaHai:T9cy:g:e83ibaeaofheabcwfhbadcufgdmbxdkkarcdthoindndnaeIdbax:tawNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikai:SgH9ca:gaH9cz:g9cjjj;4s:d:eaH9cFe:d:e9cF:bj;4:pj;ar:d9c:bd9:9c:p;G:d;4j:E;ar:d9cH9:9c;d;H:W:y:m:g;d;Hb:d9cv9:9c;j:KM;j:KM;j:Kd:dhOdndnaeclfIdbaq:tawNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikai:SgH9ca:gaH9cz:g9cjjj;4s:d:eaH9cFe:d:e9cF:bj;4:pj;ar:d9c:bd9:9c:p;G:d;4j:E;ar:d9cH9:9c;d;H:W:y:m:g;d;Hb:d9cq9:9cM;j:KM;j:KM;jl:daO:ehOdndnaecwfIdbaD:tawNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabaOai:SgH9ca:gaH9cz:g9cjjj;4s:d:eaH9cFe:d:e9cF:bj;4:pj;ar:d9c:bd9:9c:p;G:d;4j:E;ar:d9cH9:9c;d;H:W:y:m:g;d;Hb:d9cC9:9c:KM;j:KM;j:KMD:d:e83ibaeaofheabcwfhbadcufgdmbkkk9teiucbcbyd;y:I:cjbgeabcifc98GfgbBd;y:I:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaeczfheaiczfhiadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabk9teiucbcbyd;y:I:cjbgeabcrfc94GfgbBd;y:I:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikTeeucbabcbyd;y:I:cjbge9Rcifc98GaefgbBd;y:I:cjbdnabZbcztge9nmbabae9RcFFifcz4nb8Akkk;Sddbcj:Gdk;idbbbbdbbblbbbwbbbbbbbebbbdbbblbbbwbbbbbbbbbbbbbbbbbbbebbbdbbbbbbbebbbbbbbbbbbbbbbb4:h9w9N94:P:gW:j9O:ye9Pbbbbbb:l29hZ;69:9kZ;N;76Z;rg97Z;z;o9xZ8J;B85Z;:;u9yZ;b;k9HZ:2;Z9DZ9e:l9mZ59A8KZ:r;T3Z:A:zYZ79OHZ;j4::8::Y:D9V8:bbbb9s:49:Z8R:hBZ9M9M;M8:L;z;o8:;8:PG89q;x:J878R:hQ8::M:B;e87bbbbbbjZbbjZbbjZ:E;V;N8::Y:DsZ9i;H;68:xd;R8:;h0838:;W:NoZbbbb:WV9O8:uf888:9i;H;68:9c9G;L89;n;m9m89;D8Ko8:bbbbf:8tZ9m836ZS:2AZL;zPZZ818EZ9e:lxZ;U98F8:819E;68:FFuuFFuuFFuuFFuFFFuFFFuFbc;i:IdkCebbbebbbebbbdbbb9G:rbb",e=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var t,a=WebAssembly.instantiate(n(s),{}).then(function(p){t=p.instance,t.exports.__wasm_call_ctors(),t.exports.meshopt_encodeVertexVersion(1),t.exports.meshopt_encodeIndexVersion(1)});function n(p){for(var x=new Uint8Array(p.length),g=0;g<p.length;++g){var b=p.charCodeAt(g);x[g]=b>96?b-97:b>64?b-39:b+4}for(var f=0,g=0;g<p.length;++g)x[f++]=x[g]<60?e[x[g]]:(x[g]-60)*64+x[++g];return x.buffer.slice(0,f)}function i(p){if(!p)throw new Error("Assertion failed")}function r(p){return new Uint8Array(p.buffer,p.byteOffset,p.byteLength)}function o(p,x,g,b){var f=t.exports.sbrk,v=f(x.length*4),w=f(g*4),m=new Uint8Array(t.exports.memory.buffer),M=r(x);m.set(M,v),b&&b(v,v,x.length,g);var A=p(w,v,x.length,g);m=new Uint8Array(t.exports.memory.buffer);var T=new Uint32Array(g);new Uint8Array(T.buffer).set(m.subarray(w,w+g*4)),M.set(m.subarray(v,v+x.length*4)),f(v-f(0));for(var R=0;R<x.length;++R)x[R]=T[x[R]];return[T,A]}function c(p,x,g,b){var f=t.exports.sbrk,v=f(g*4),w=f(g*b),m=new Uint8Array(t.exports.memory.buffer);m.set(r(x),w),p(v,w,g,b),m=new Uint8Array(t.exports.memory.buffer);var M=new Uint32Array(g);return new Uint8Array(M.buffer).set(m.subarray(v,v+g*4)),f(v-f(0)),M}function h(p,x,g,b,f,v,w){var m=t.exports.sbrk,M=m(x),A=m(b*f),T=new Uint8Array(t.exports.memory.buffer);T.set(r(g),A);var R=p(M,x,A,b,f,v,w),_=new Uint8Array(R);return _.set(T.subarray(M,M+R)),m(M-m(0)),_}function l(p){for(var x=0,g=0;g<p.length;++g){var b=p[g];x=x<b?b:x}return x}function d(p,x){if(i(x==2||x==4),x==4)return new Uint32Array(p.buffer,p.byteOffset,p.byteLength/4);var g=new Uint16Array(p.buffer,p.byteOffset,p.byteLength/2);return new Uint32Array(g)}function u(p,x,g,b,f,v,w){var m=t.exports.sbrk,M=m(g*b),A=m(g*v),T=new Uint8Array(t.exports.memory.buffer);T.set(r(x),A),p(M,g,b,f,A,w);var R=new Uint8Array(g*b);return R.set(T.subarray(M,M+g*b)),m(M-m(0)),R}return{ready:a,supported:!0,reorderMesh:function(p,x,g){i(p instanceof Uint32Array||p instanceof Int32Array),i(!x||p.length%3==0);var b=x?g?t.exports.meshopt_optimizeVertexCacheStrip:t.exports.meshopt_optimizeVertexCache:void 0;return o(t.exports.meshopt_optimizeVertexFetchRemap,p,l(p)+1,b)},reorderPoints:function(p,x){return i(p instanceof Float32Array),i(p.length%x==0),i(x>=3),c(t.exports.meshopt_spatialSortRemap,p,p.length/x,x*4)},encodeVertexBuffer:function(p,x,g){i(g>0&&g<=256),i(g%4==0);var b=t.exports.meshopt_encodeVertexBufferBound(x,g);return h(t.exports.meshopt_encodeVertexBuffer,b,p,x,g)},encodeVertexBufferLevel:function(p,x,g,b,f){i(g>0&&g<=256),i(g%4==0),i(b>=0&&b<=3),i(f===void 0||f==0||f==1);var v=t.exports.meshopt_encodeVertexBufferBound(x,g);return h(t.exports.meshopt_encodeVertexBufferLevel,v,p,x,g,b,f===void 0?-1:f)},encodeIndexBuffer:function(p,x,g){i(g==2||g==4),i(x%3==0);var b=d(p,g),f=t.exports.meshopt_encodeIndexBufferBound(x,l(b)+1);return h(t.exports.meshopt_encodeIndexBuffer,f,b,x,4)},encodeIndexSequence:function(p,x,g){i(g==2||g==4);var b=d(p,g),f=t.exports.meshopt_encodeIndexSequenceBound(x,l(b)+1);return h(t.exports.meshopt_encodeIndexSequence,f,b,x,4)},encodeGltfBuffer:function(p,x,g,b,f){var v={ATTRIBUTES:this.encodeVertexBufferLevel,TRIANGLES:this.encodeIndexBuffer,INDICES:this.encodeIndexSequence};return i(v[b]),v[b](p,x,g,2,f===void 0?0:f)},encodeFilterOct:function(p,x,g,b){return i(g==4||g==8),i(b>=2&&b<=16),u(t.exports.meshopt_encodeFilterOct,p,x,g,b,16)},encodeFilterQuat:function(p,x,g,b){return i(g==8),i(b>=4&&b<=16),u(t.exports.meshopt_encodeFilterQuat,p,x,g,b,16)},encodeFilterExp:function(p,x,g,b,f){i(g>0&&g%4==0),i(b>=1&&b<=24);var v={Separate:0,SharedVector:1,SharedComponent:2,Clamped:3};return i(!f||f in v),u(t.exports.meshopt_encodeFilterExp,p,x,g,b,g,f?v[f]:1)},encodeFilterColor:function(p,x,g,b){return i(g==4||g==8),i(b>=2&&b<=16),u(t.exports.meshopt_encodeFilterColor,p,x,g,b,16)}}})();var jf=(function(){var s="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuixkbeeeddddillviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WboY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbrl79IV9Rbwq;X8:kdbk:kYi5ud9:du8Jjjjjbcjq9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaicefhxcj;abad9Uc;WFbGcjdadca0EhmaialfgPar9Rgoadfhsavaoadz:jjjjbgzceVhHcbhOdndninaeaO9nmeaPax9RaD6mdamaeaO9RaOamfgoae6EgAcsfglc9WGhCaAcethXaxaDfhiaOaeaoaeao6E9RhQalcl4cifcd4hLazcjdfaAfhKcbhYabaOad2fg8AhEaHh3incbh5dnawTmbaxaYcd4fRbbh5kcbh8Eazcjdfhqinaih8Fdndndndna5a8Ecet4ciGgoc9:fPdebdkaPa8F9RaA6mrazcjdfa8EaA2fa8FaAz:jjjjb8Aa8FaAfhixdkazcjdfa8EaA2fcbaAz:kjjjb8Aa8FhixekaPa8F9RaL6mva8FaLfhidnaCTmbaPai9RcK6mbaocdtc:q:G:cjbfcj:G:cjbawEhaczhrcbhlinargoc9Wfghaqfhrdndndndndndnaaa8Fahco4fRbbalcoG4ciGcdtfydbPDbedvivvvlvkar9cb83bwar9cb83bbxlkarcbaiRbdai8Xbb9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbaqaofgrcGfcbaicdfa8J9c8N1:NfghRbbag9cjjjjjw:dg8J9qE86bbarcVfcbaha8J9c8M1:NfghRbbag9cjjjjjl:dg8J9qE86bbarc7fcbaha8J9c8L1:NfghRbbag9cjjjjjd:dg8J9qE86bbarctfcbaha8J9c8K1:NfghRbbag9cjjjjje:dg8J9qE86bbarc91fcbaha8J9c8J1:NfghRbbag9cjjjj;ab:dg8J9qE86bbarc4fcbaha8J9cg1:NfghRbbag9cjjjja:dg8J9qE86bbarc93fcbaha8J9ch1:NfghRbbag9cjjjjz:dgg9qE86bbarc94fcbahag9ca1:NfghRbbai8Xbe9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbarc95fcbaha8J9c8N1:NfgiRbbag9cjjjjjw:dg8J9qE86bbarc96fcbaia8J9c8M1:NfgiRbbag9cjjjjjl:dg8J9qE86bbarc97fcbaia8J9c8L1:NfgiRbbag9cjjjjjd:dg8J9qE86bbarc98fcbaia8J9c8K1:NfgiRbbag9cjjjjje:dg8J9qE86bbarc99fcbaia8J9c8J1:NfgiRbbag9cjjjj;ab:dg8J9qE86bbarc9:fcbaia8J9cg1:NfgiRbbag9cjjjja:dg8J9qE86bbarcufcbaia8J9ch1:NfgiRbbag9cjjjjz:dgg9qE86bbaiag9ca1:NfhixikaraiRblaiRbbghco4g8Ka8KciSg8KE86bbaqaofgrcGfaiclfa8Kfg8KRbbahcl4ciGg8La8LciSg8LE86bbarcVfa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc7fa8Ka8Lfg8KRbbahciGghahciSghE86bbarctfa8Kahfg8KRbbaiRbeghco4g8La8LciSg8LE86bbarc91fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc4fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc93fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc94fa8Kahfg8KRbbaiRbdghco4g8La8LciSg8LE86bbarc95fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc96fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc97fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc98fa8KahfghRbbaiRbigico4g8Ka8KciSg8KE86bbarc99faha8KfghRbbaicl4ciGg8Ka8KciSg8KE86bbarc9:faha8KfghRbbaicd4ciGg8Ka8KciSg8KE86bbarcufaha8KfgrRbbaiciGgiaiciSgiE86bbaraifhixdkaraiRbwaiRbbghcl4g8Ka8KcsSg8KE86bbaqaofgrcGfaicwfa8Kfg8KRbbahcsGghahcsSghE86bbarcVfa8KahfghRbbaiRbeg8Kcl4g8La8LcsSg8LE86bbarc7faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarctfaha8KfghRbbaiRbdg8Kcl4g8La8LcsSg8LE86bbarc91faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc4faha8KfghRbbaiRbig8Kcl4g8La8LcsSg8LE86bbarc93faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc94faha8KfghRbbaiRblg8Kcl4g8La8LcsSg8LE86bbarc95faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc96faha8KfghRbbaiRbvg8Kcl4g8La8LcsSg8LE86bbarc97faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc98faha8KfghRbbaiRbog8Kcl4g8La8LcsSg8LE86bbarc99faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc9:faha8KfghRbbaiRbrgicl4g8Ka8KcsSg8KE86bbarcufaha8KfgrRbbaicsGgiaicsSgiE86bbaraifhixekarai8Pbw83bwarai8Pbb83bbaiczfhikdnaoaC9pmbalcdfhlaoczfhraPai9RcL0mekkaoaC6moaimexokaCmva8FTmvkaqaAfhqa8Ecefg8Ecl9hmbkdndndndnawTmbasaYcd4fRbbgociGPlbedrbkaATmdazaYfh8Fazcjdfhhcbh8EaEhaina8FRbbhraahocbhlinaoahalfRbbgqce4cbaqceG9R7arfgr86bbaoadfhoaAalcefgl9hmbkaacefhaa8Fcefh8FahaAfhha8Ecefg8Ecl9hmbxikkaATmeazaYfhaazcjdfhhcbhoceh8EaKh8FinaEaofhlaa8Vbbhrcbhoinala8FaofRbbcwtahaofRbbgqVc;:FiGce4cbaqceG9R7arfgr87bbaladfhlaQaocefgofmbka8FaXfh8FcdhoaacdfhaahaXfhha8EceGhlcbh8EalmbxdkkaATmbaocl4h8EazaYfRbbhqcwhoa3hlinalRbbaotaqVhqalcefhlaocwfgoca9hmbkcbhhaEh8FaKhainazcjdfahfRbbhrcwhoaahlinalRbbaotarVhralaAfhlaocwfgoca9hmbkara8E94aq7hqcbhoa8Fhlinalaqao486bbalcefhlaocwfgoca9hmbka8Fadfh8FaacefhaahcefghaA9hmbkkaEclfhEa3clfh3aYclfgYad6mbkaza8AaAcufad2fadz:jjjjb8AaAaOfhOaihxaimbkc9:hoxdkcbc99aPax9RakSEhoxekc9:hokavcjqf8Kjjjjbaok:bsesu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgwce0mbavc;abfcFecjez:kjjjb8Aav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhDaicefgiarfhqdndnaeci9pmbaqhexekcmcsawceSEhkcbhxcbhmaqhecbhlcbhoindndnaiRbbgrc;Ve0mbavc;abfaoarcu7gPcl4fcsGcitfgwydlhsawydbhzdndnarcsGgwak9pmbavalaPfcsGcdtfydbaxawEhraxawTgHfhxxekdnaeaD9nmbc9:hoxokdndnawcsSmbcehHamawcetfcWfhrxekaecefhrae8SbbgwcFeGhPdndnawcu9mmbarhexekaecvfheaPcFbGhPcrhwdninar8SbbgHcFbGawtaPVhPaHcu9kmearcefhrawcrfgwc8J9hmbxdkkarcefhekcehHaPce4cbaPceG9R7amfhrkarhmkavc;abfaocitfgwarBdbawasBdlavalcdtfarBdbavc;abfaocefcsGcitfgwazBdbawarBdlaocdfhoaHalfhldnadcd9hmbabar87elabas87edabaz87ebabcofhbxdkabarBdwabasBdlabazBdbabcxfhbxekdnarcpe0mbavalaDarcsGfRbbgwcl4gP9RcsGcdtfydbaxcefgsaPEhravalaw9RcsGcdtfydbasaPTgzfgsawcsGgPEhwaPThPdndnadcd9hmbabaw87elabar87edabax87ebcohHxekabawBdwabarBdlabaxBdbcxhHkavalcdtfaxBdbavc;abfaocitfgOarBdbaOaxBdlavalcefglcsGcdtfarBdbavc;abfaocefcsGcitfgOawBdbaOarBdlavalazfglcsGcdtfawBdbavc;abfaocdfcsGcitfgraxBdbarawBdlaocifhoabaHfhbalaPfhlasaPfhxxekdnaeaD9nmbc9:hoxlkaxcbaeRbbgwEgHarc;:eSgrfhsawcsGhOdndnawcl4gAmbascefhzxekashzavalaA9RcsGcdtfydbhskdndnaOmbazcefhxxekazhxavalaw9RcsGcdtfydbhzkdndnarTmbaecefhrxekaecdfhrae8SbegPcFeGhwdnaPcu9kmbaecofhHawcFbGhwcrhedninar8SbbgPcFbGaetawVhwaPcu9kmearcefhraecrfgec8J9hmbkaHhrxekarcefhrkawce4cbawceG9R7amfgmhHkdndnaAcsSmbarhwxekarcefhwar8SbbgecFeGhPdnaecu9kmbarcvfhsaPcFbGhPcrhedninaw8SbbgrcFbGaetaPVhParcu9kmeawcefhwaecrfgec8J9hmbkashwxekawcefhwkaPce4cbaPceG9R7amfgmhskdndnaOcsSmbawhexekawcefheaw8SbbgrcFeGhPdnarcu9kmbawcvfhzaPcFbGhPcrhrdninae8SbbgwcFbGartaPVhPawcu9kmeaecefhearcrfgrc8J9hmbkazhexekaecefhekaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabaz87elabas87edabaH87ebcohrxekabazBdwabasBdlabaHBdbcxhrkavc;abfaocitfgwasBdbawaHBdlavalcdtfaHBdbavc;abfaocefcsGcitfgwazBdbawasBdlavalcefglcsGcdtfasBdbavc;abfaocdfcsGcitfgwaHBdbawazBdlavalaATaAcsSVfglcsGcdtfazBdbalaOTaOcsSVfhlaocifhoabarfhbkaocsGhoalcsGhlaicefgiaq6mbkkcbc99aeaDSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk:4ioiue99dud99dud99dnaeTmbcbhiabhlindndnal8Uebgv:YgoJ:ji:1Salcof8UebgrciVgw:Y:vgDNJbbbZJbbb:;avcu9kEMgq:lJbbb9p9DTmbaq:Ohkxekcjjjj94hkkalclf8Uebhvalcdf8UebhxalarcefciGcetfak87ebdndnax:YgqaDNJbbbZJbbb:;axcu9kEMgm:lJbbb9p9DTmbam:Ohxxekcjjjj94hxkabaiarciGgkfcd7cetfax87ebdndnav:YgmaDNJbbbZJbbb:;avcu9kEMgP:lJbbb9p9DTmbaP:Ohvxekcjjjj94hvkalarcufciGcetfav87ebdndnawaw2:ZgPaPMaoaoN:taqaqN:tamamN:tgoJbbbbaoJbbbb9GE:raDNJbbbZMgD:lJbbb9p9DTmbaD:Ohrxekcjjjj94hrkalakcetfar87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2gdTmbinababydbgecwtcw91:Yaece91cjjj98Gcjjj;8if::NUdbabclfhbadcufgdmbkkk:Tvirud99eudndnadcl9hmbaeTmeindndnabRbbgiabcefgl8Sbbgvabcdfgo8Sbbgrf9R:YJbbuJabcifgwRbbgdce4adVgDcd4aDVgDcl4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax86bbdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao86bbdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai86bbdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad86bbabclfhbaecufgembxdkkaeTmbindndnab8Vebgiabcdfgl8Uebgvabclfgo8Uebgrf9R:YJbFu9habcofgw8Vebgdce4adVgDcd4aDVgDcl4aDVgDcw4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax87ebdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao87ebdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai87ebdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad87ebabcwfhbaecufgembkkk9teiucbcbyd:K:G:cjbgeabcifc98GfgbBd:K:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaeczfheaiczfhiadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkk83dbcj:Gdk8Kbbbbdbbblbbbwbbbbbbbebbbdbbblbbbwbbbbc:K:Gdkl8W:qbb",e="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuixkbbebeeddddilve9Weeeviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WbwY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbDl79IV9Rbqq:I9Dklbzik94evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaeai86b:q:W:cjbaecitab8Piw83i:q:G:cjbaecefgecjd9hmbkk:SBlEud97dur978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaialfgxar9RhodnadTgmmbavaoad;8qbbkaicefhPcj;abad9Uc;WFbGcjdadca0EhsdndndnadTmbaoadfhzcbhHinaeaH9nmdaxaP9RaD6miabaHad2fgOavcjdfasaeaH9RaHasfae6EgAaAcsfgoc9WGgCSEhXaPaDfhQaocl4cifcd4hLavcj;cbfaCcetfhKavcj;cbfaCci2fhYavcj;cbfaCfh8AcbhEaoc;ab6h3incbh5dnawTmbaPaEcd4fRbbh5kcbh8Eavcj;cbfh8Findndndndna5a8Ecet4ciGgoc9:fPdebdkaxaQ9RaC6mwdnaCTmbavcj;cbfa8EaC2faQaC;8qbbkaQaAfhQxdkaCTmeavcj;cbfa8EaC2fcbaC;8kbxekaxaQ9RaL6moaoclVcbawEhraQaLfhocbhidna3mbaxao9Rc;Gb6mbcbhlina8FalfhidndndndndndnaQalco4fRbbgqciGarfPDbedibledibkaipxbbbbbbbbbbbbbbbbpklbxlkaiaopbblaopbbbgaclp:meaapmbzeHdOiAlCvXoQrLgacdp:meaapmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9oghpxiiiiiiiiiiiiiiiip8Jgap5b9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbagRb:q:W:cjbggpsaap5e9cjF;8;4;W;G;ab9:9cU1:Ng8Jcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPahaap9spklbagaoclffa8JRb:q:W:cjbfhoxikaiaopbbwaopbbbgaclp:meaapmbzeHdOiAlCvXoQrLpxssssssssssssssssp9oghpxssssssssssssssssp8Jgap5b9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbagRb:q:W:cjbggpsaap5e9cjF;8;4;W;G;ab9:9cU1:Ng8Jcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPahaap9spklbagaocwffa8JRb:q:W:cjbfhoxdkaiaopbbbpklbaoczfhoxekaiaopbbdaoRbbggcitpbi:q:G:cjbagRb:q:W:cjbggpsaoRbeg8Jcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbagaocdffa8JRb:q:W:cjbfhokdndndndndndnaqcd4ciGarfPDbedibledibkaiczfpxbbbbbbbbbbbbbbbbpklbxlkaiczfaopbblaopbbbgaclp:meaapmbzeHdOiAlCvXoQrLgacdp:meaapmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9oghpxiiiiiiiiiiiiiiiip8Jgap5b9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbagRb:q:W:cjbggpsaap5e9cjF;8;4;W;G;ab9:9cU1:Ng8Jcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPahaap9spklbagaoclffa8JRb:q:W:cjbfhoxikaiczfaopbbwaopbbbgaclp:meaapmbzeHdOiAlCvXoQrLpxssssssssssssssssp9oghpxssssssssssssssssp8Jgap5b9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbagRb:q:W:cjbggpsaap5e9cjF;8;4;W;G;ab9:9cU1:Ng8Jcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPahaap9spklbagaocwffa8JRb:q:W:cjbfhoxdkaiczfaopbbbpklbaoczfhoxekaiczfaopbbdaoRbbggcitpbi:q:G:cjbagRb:q:W:cjbggpsaoRbeg8Jcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbagaocdffa8JRb:q:W:cjbfhokdndndndndndnaqcl4ciGarfPDbedibledibkaicafpxbbbbbbbbbbbbbbbbpklbxlkaicafaopbblaopbbbgaclp:meaapmbzeHdOiAlCvXoQrLgacdp:meaapmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9oghpxiiiiiiiiiiiiiiiip8Jgap5b9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbagRb:q:W:cjbggpsaap5e9cjF;8;4;W;G;ab9:9cU1:Ng8Jcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPahaap9spklbagaoclffa8JRb:q:W:cjbfhoxikaicafaopbbwaopbbbgaclp:meaapmbzeHdOiAlCvXoQrLpxssssssssssssssssp9oghpxssssssssssssssssp8Jgap5b9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbagRb:q:W:cjbggpsaap5e9cjF;8;4;W;G;ab9:9cU1:Ng8Jcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPahaap9spklbagaocwffa8JRb:q:W:cjbfhoxdkaicafaopbbbpklbaoczfhoxekaicafaopbbdaoRbbggcitpbi:q:G:cjbagRb:q:W:cjbggpsaoRbeg8Jcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbagaocdffa8JRb:q:W:cjbfhokdndndndndndnaqco4arfPDbedibledibkaic8Wfpxbbbbbbbbbbbbbbbbpklbxlkaic8Wfaopbblaopbbbgaclp:meaapmbzeHdOiAlCvXoQrLgacdp:meaapmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9oghpxiiiiiiiiiiiiiiiip8Jgap5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsaap5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPahaap9spklbaiaoclffaqRb:q:W:cjbfhoxikaic8Wfaopbbwaopbbbgaclp:meaapmbzeHdOiAlCvXoQrLpxssssssssssssssssp9oghpxssssssssssssssssp8Jgap5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsaap5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPahaap9spklbaiaocwffaqRb:q:W:cjbfhoxdkaic8Wfaopbbbpklbaoczfhoxekaic8WfaopbbdaoRbbgicitpbi:q:G:cjbaiRb:q:W:cjbgipsaoRbegqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbaiaocdffaqRb:q:W:cjbfhokalc;abfhialcjefaC0meaihlaxao9Rc;Fb0mbkkdnaiaC9pmbaici4hlinaxao9RcK6mwa8FaifhqdndndndndndnaQaico4fRbbalcoG4ciGarfPDbedibledibkaqpxbbbbbbbbbbbbbbbbpkbbxlkaqaopbblaopbbbgaclp:meaapmbzeHdOiAlCvXoQrLgacdp:meaapmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9oghpxiiiiiiiiiiiiiiiip8Jgap5b9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbagRb:q:W:cjbggpsaap5e9cjF;8;4;W;G;ab9:9cU1:Ng8Jcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPahaap9spkbbagaoclffa8JRb:q:W:cjbfhoxikaqaopbbwaopbbbgaclp:meaapmbzeHdOiAlCvXoQrLpxssssssssssssssssp9oghpxssssssssssssssssp8Jgap5b9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbagRb:q:W:cjbggpsaap5e9cjF;8;4;W;G;ab9:9cU1:Ng8Jcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPahaap9spkbbagaocwffa8JRb:q:W:cjbfhoxdkaqaopbbbpkbbaoczfhoxekaqaopbbdaoRbbggcitpbi:q:G:cjbagRb:q:W:cjbggpsaoRbeg8Jcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpkbbagaocdffa8JRb:q:W:cjbfhokalcdfhlaiczfgiaC6mbkkaohQaoTmoka8FaCfh8Fa8Ecefg8Ecl9hmbkdndndndnawTmbazaEcd4fRbbglciGPlbedwbkaCTmdaXaEfhlavaEfpbdbh8Kcbhoinalavcj;cbfaofpblbg8La8Aaofpblbg8MpmbzeHdOiAlCvXoQrLg8NaKaofpblbgyaYaofpblbg8PpmbzeHdOiAlCvXoQrLgIpmbezHdiOAlvCXorQLgacep9Taapxeeeeeeeeeeeeeeeeghp9op9Hp9rgaa8Kp9Ug8Kp9Abbbaladfgla8Kaaaapmlvorlvorlvorlvorp9Ug8Kp9Abbbaladfgla8KaaaapmwDqkwDqkwDqkwDqkp9Ug8Kp9Abbbaladfgla8KaaaapmxmPsxmPsxmPsxmPsp9Ug8Kp9Abbbaladfgla8Ka8NaIpmwDKYqk8AExm35Ps8E8Fgacep9Taaahp9op9Hp9rgap9Ug8Kp9Abbbaladfgla8Kaaaapmlvorlvorlvorlvorp9Ug8Kp9Abbbaladfgla8KaaaapmwDqkwDqkwDqkwDqkp9Ug8Kp9Abbbaladfgla8KaaaapmxmPsxmPsxmPsxmPsp9Ug8Kp9Abbbaladfgla8Ka8La8MpmwKDYq8AkEx3m5P8Es8Fg8Laya8PpmwKDYq8AkEx3m5P8Es8Fg8MpmbezHdiOAlvCXorQLgacep9Taaahp9op9Hp9rgap9Ug8Kp9Abbbaladfgla8Kaaaapmlvorlvorlvorlvorp9Ug8Kp9Abbbaladfgla8KaaaapmwDqkwDqkwDqkwDqkp9Ug8Kp9Abbbaladfgla8KaaaapmxmPsxmPsxmPsxmPsp9Ug8Kp9Abbbaladfgla8Ka8La8MpmwDKYqk8AExm35Ps8E8Fgacep9Taaahp9op9Hp9rgap9Ughp9Abbbaladfglahaaaapmlvorlvorlvorlvorp9Ughp9AbbbaladfglahaaaapmwDqkwDqkwDqkwDqkp9Ughp9AbbbaladfglahaaaapmxmPsxmPsxmPsxmPsp9Ug8Kp9AbbbaladfhlaoczfgoaC6mbxikkaCTmeaXaEfhlavaEfpbdbh8Kcbhoinalavcj;cbfaofpblbg8La8Aaofpblbg8MpmbzeHdOiAlCvXoQrLg8NaKaofpblbgyaYaofpblbg8PpmbzeHdOiAlCvXoQrLgIpmbezHdiOAlvCXorQLgacep:neaapxebebebebebebebebghp9op:bep9rgaa8Kp:oeg8Kp9Abbbaladfgla8Kaaaapmlvorlvorlvorlvorp:oeg8Kp9Abbbaladfgla8KaaaapmwDqkwDqkwDqkwDqkp:oeg8Kp9Abbbaladfgla8KaaaapmxmPsxmPsxmPsxmPsp:oeg8Kp9Abbbaladfgla8Ka8NaIpmwDKYqk8AExm35Ps8E8Fgacep:neaaahp9op:bep9rgap:oeg8Kp9Abbbaladfgla8Kaaaapmlvorlvorlvorlvorp:oeg8Kp9Abbbaladfgla8KaaaapmwDqkwDqkwDqkwDqkp:oeg8Kp9Abbbaladfgla8KaaaapmxmPsxmPsxmPsxmPsp:oeg8Kp9Abbbaladfgla8Ka8La8MpmwKDYq8AkEx3m5P8Es8Fg8Laya8PpmwKDYq8AkEx3m5P8Es8Fg8MpmbezHdiOAlvCXorQLgacep:neaaahp9op:bep9rgap:oeg8Kp9Abbbaladfgla8Kaaaapmlvorlvorlvorlvorp:oeg8Kp9Abbbaladfgla8KaaaapmwDqkwDqkwDqkwDqkp:oeg8Kp9Abbbaladfgla8KaaaapmxmPsxmPsxmPsxmPsp:oeg8Kp9Abbbaladfgla8Ka8La8MpmwDKYqk8AExm35Ps8E8Fgacep:neaaahp9op:bep9rgap:oeghp9Abbbaladfglahaaaapmlvorlvorlvorlvorp:oeghp9AbbbaladfglahaaaapmwDqkwDqkwDqkwDqkp:oeghp9AbbbaladfglahaaaapmxmPsxmPsxmPsxmPsp:oeg8Kp9AbbbaladfhlaoczfgoaC6mbxdkkaCTmbaXaEfhrcbhocbalcl4gl9Rc8FGhiavaEfpbdbhhinaravcj;cbfaofpblbg8Ka8Aaofpblbg8LpmbzeHdOiAlCvXoQrLg8MaKaofpblbg8NaYaofpblbgypmbzeHdOiAlCvXoQrLg8PpmbezHdiOAlvCXorQLgaaip:Reaaalp:Tep9qgaahp9rghp9Abbbaradfgrahaaaapmlvorlvorlvorlvorp9rghp9AbbbaradfgrahaaaapmwDqkwDqkwDqkwDqkp9rghp9AbbbaradfgrahaaaapmxmPsxmPsxmPsxmPsp9rghp9Abbbaradfgraha8Ma8PpmwDKYqk8AExm35Ps8E8Fgaaip:Reaaalp:Tep9qgap9rghp9Abbbaradfgrahaaaapmlvorlvorlvorlvorp9rghp9AbbbaradfgrahaaaapmwDqkwDqkwDqkwDqkp9rghp9AbbbaradfgrahaaaapmxmPsxmPsxmPsxmPsp9rghp9Abbbaradfgraha8Ka8LpmwKDYq8AkEx3m5P8Es8Fg8Ka8NaypmwKDYq8AkEx3m5P8Es8Fg8LpmbezHdiOAlvCXorQLgaaip:Reaaalp:Tep9qgap9rghp9Abbbaradfgrahaaaapmlvorlvorlvorlvorp9rghp9AbbbaradfgrahaaaapmwDqkwDqkwDqkwDqkp9rghp9AbbbaradfgrahaaaapmxmPsxmPsxmPsxmPsp9rghp9Abbbaradfgraha8Ka8LpmwDKYqk8AExm35Ps8E8Fgaaip:Reaaalp:Tep9qgap9rghp9Abbbaradfgrahaaaapmlvorlvorlvorlvorp9rghp9AbbbaradfgrahaaaapmwDqkwDqkwDqkwDqkp9rghp9AbbbaradfgrahaaaapmxmPsxmPsxmPsxmPsp9rghp9AbbbaradfhraoczfgoaC6mbkkaEclfgEad6mbkdnaXavcjdf9hmbaAad2goTmbaOavcjdfao;8qbbkdnammbavaXaAcufad2fad;8qbbkaAaHfhHc9:hoaQhPaQmbxlkkaeTmbaDalfhrcbhocuhlinaralaD9RglfaD6mdasaeao9Raoasfae6Eaofgoae6mbkaial9RhPkcbc99axaP9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaokwbz:bjjjbkpPesu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgwce0mbavc;abfcFecje;8kbav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhDaicefgiarfhqdndnaeci9pmbaqhexekcmcsawceSEhkcbhxcbhmaqhecbhlcbhoindndnaiRbbgrc;Ve0mbavc;abfaoarcu7gPcl4fcsGcitfgwydlhsawydbhzdndnarcsGgwak9pmbavalaPfcsGcdtfydbaxawEhraxawTgHfhxxekdnaeaD9nmbc9:hoxokdndnawcsSmbcehHamawcetfcWfhrxekaecefhrae8SbbgwcFeGhPdndnawcu9mmbarhexekaecvfheaPcFbGhPcrhwdninar8SbbgHcFbGawtaPVhPaHcu9kmearcefhrawcrfgwc8J9hmbxdkkarcefhekcehHaPce4cbaPceG9R7amfhrkarhmkavc;abfaocitfgwarBdbawasBdlavalcdtfarBdbavc;abfaocefcsGcitfgwazBdbawarBdlaocdfhoaHalfhldnadcd9hmbabar87elabas87edabaz87ebabcofhbxdkabarBdwabasBdlabazBdbabcxfhbxekdnarcpe0mbavalaDarcsGfRbbgwcl4gP9RcsGcdtfydbaxcefgsaPEhravalaw9RcsGcdtfydbasaPTgzfgsawcsGgPEhwaPThPdndnadcd9hmbabaw87elabar87edabax87ebcohHxekabawBdwabarBdlabaxBdbcxhHkavalcdtfaxBdbavc;abfaocitfgOarBdbaOaxBdlavalcefglcsGcdtfarBdbavc;abfaocefcsGcitfgOawBdbaOarBdlavalazfglcsGcdtfawBdbavc;abfaocdfcsGcitfgraxBdbarawBdlaocifhoabaHfhbalaPfhlasaPfhxxekdnaeaD9nmbc9:hoxlkaxcbaeRbbgwEgHarc;:eSgrfhsawcsGhOdndnawcl4gAmbascefhzxekashzavalaA9RcsGcdtfydbhskdndnaOmbazcefhxxekazhxavalaw9RcsGcdtfydbhzkdndnarTmbaecefhrxekaecdfhrae8SbegPcFeGhwdnaPcu9kmbaecofhHawcFbGhwcrhedninar8SbbgPcFbGaetawVhwaPcu9kmearcefhraecrfgec8J9hmbkaHhrxekarcefhrkawce4cbawceG9R7amfgmhHkdndnaAcsSmbarhwxekarcefhwar8SbbgecFeGhPdnaecu9kmbarcvfhsaPcFbGhPcrhedninaw8SbbgrcFbGaetaPVhParcu9kmeawcefhwaecrfgec8J9hmbkashwxekawcefhwkaPce4cbaPceG9R7amfgmhskdndnaOcsSmbawhexekawcefheaw8SbbgrcFeGhPdnarcu9kmbawcvfhzaPcFbGhPcrhrdninae8SbbgwcFbGartaPVhPawcu9kmeaecefhearcrfgrc8J9hmbkazhexekaecefhekaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabaz87elabas87edabaH87ebcohrxekabazBdwabasBdlabaHBdbcxhrkavc;abfaocitfgwasBdbawaHBdlavalcdtfaHBdbavc;abfaocefcsGcitfgwazBdbawasBdlavalcefglcsGcdtfasBdbavc;abfaocdfcsGcitfgwaHBdbawazBdlavalaATaAcsSVfglcsGcdtfazBdbalaOTaOcsSVfhlaocifhoabarfhbkaocsGhoalcsGhlaicefgiaq6mbkkcbc99aeaDSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk;Toio97eue97aec98Ghedndnadcl9hmbaeTmecbhdinababpbbbgicKp:RecKp:Sep;6eglaicwp:RecKp:Sep;6ealp;Geaiczp:RecKp:Sep;6egvp;Gep;Kep;Legopxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgwp9op9rp;Keglpxbb;:9cbb;:9cbb;:9cbb;:9calalp;Meaoaop;Meavaravawp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFbbbFbbbFbbbFbbbp9oaipxbbbFbbbFbbbFbbbFp9op9qalavp;Mearp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaoavp;Mearp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgDaDpbbbgipxbbbbbbFFbbbbbbFFgwp9oabpbbbgoaipmbediwDqkzHOAKY8AEgvczp:Reczp:Sep;6eglaoaipmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eavczp:Sep;6egvp;Gealp;Gep;Kep;Legipxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgqp9op9rp;Keglpxb;:FSb;:FSb;:FSb;:FSalalp;Meaiaip;Meavaravaqp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbp9oaiavp;Mearp;Keczp:Rep9qgialavp;Mearp;KepxFFbbFFbbFFbbFFbbp9oglpmwDKYqk8AExm35Ps8E8Fp9qpkbbabaoawp9oaialpmbezHdiOAlvCXorQLp9qpkbbabcafhbadclfgdae6mbkkk;2ileue97euo97dnaec98GgiTmbcbheinabcKfpx:ji:1S:ji:1S:ji:1S:ji:1SabpbbbglabczfgvpbbbgopmlvorxmPsCXQL358E8Fgrczp:Segwpxibbbibbbibbbibbbp9qp;6egDp;NegqaDaDp;MegDaDp;KealaopmbediwDqkzHOAKY8AEgDczp:Reczp:Sep;6eglalp;MeaDczp:Sep;6egoaop;Mearczp:Reczp:Sep;6egrarp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jep;Mepxbbn0bbn0bbn0bbn0gDp;KepxFFbbFFbbFFbbFFbbgkp9oaqaop;MeaDp;Keczp:Rep9qgoaqalp;MeaDp;Keakp9oaqarp;MeaDp;Keczp:Rep9qgDpmwDKYqk8AExm35Ps8E8Fglp5eawclp:RegqpEi:T:j83ibavalp5baqpEd:T:j83ibabcwfaoaDpmbezHdiOAlvCXorQLgDp5eaqpEe:T:j83ibabaDp5baqpEb:T:j83ibabcafhbaeclfgeai6mbkkkuee97dnadcd4ae2c98GgeTmbcbhdinababpbbbgicwp:Recwp:Sep;6eaicep:SepxbbjFbbjFbbjFbbjFp9opxbbjZbbjZbbjZbbjZp:Uep;Mepkbbabczfhbadclfgdae6mbkkk:Sodw97euaec98Ghedndnadcl9hmbaeTmecbhdinabpxbbuJbbuJbbuJbbuJabpbbbgicKp:TeglaicYp:Tep9qgvcdp:Teavp9qgvclp:Teavp9qgop;6ep;Negvaicwp:RecKp:SegraipxFbbbFbbbFbbbFbbbgwp9ogDp:Uep;6ep;Mepxbbn0bbn0bbn0bbn0gqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9oavaDarp:Xeaiczp:RecKp:Segip:Uep;6ep;Meaqp;Keawp9op9qavaDaraip:Uep:Xep;6ep;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qavaoalcep:Rep9oalpxebbbebbbebbbebbbp9op9qp;6ep;Meaqp;KecKp:Rep9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgkpxbFu9hbFu9hbFu9hbFu9habpbbbglakpbbbgrpmlvorxmPsCXQL358E8Fgvczp:TegqavcHp:Tep9qgicdp:Teaip9qgiclp:Teaip9qgicwp:Teaip9qgop;6ep;NegialarpmbediwDqkzHOAKY8AEgDpxFFbbFFbbFFbbFFbbglp9ograDczp:Segwp:Ueavczp:Reczp:SegDp:Xep;6ep;Mepxbbn0bbn0bbn0bbn0gvp;Kealp9oaiarawaDp:Uep:Xep;6ep;Meavp;Keczp:Rep9qgwaiaoaqcep:Rep9oaqpxebbbebbbebbbebbbp9op9qp;6ep;Meavp;Keczp:ReaiaDarp:Uep;6ep;Meavp;Kealp9op9qgipmwDKYqk8AExm35Ps8E8FpkbbabawaipmbezHdiOAlvCXorQLpkbbabcafhbadclfgdae6mbkkk9teiucbcbydj:G:cjbgeabcifc98GfgbBdj:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkxebcj:Gdklz:zbb",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),a=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var n=WebAssembly.validate(t)?o(e):o(s),i,r=WebAssembly.instantiate(n,{}).then(function(f){i=f.instance,i.exports.__wasm_call_ctors()});function o(f){for(var v=new Uint8Array(f.length),w=0;w<f.length;++w){var m=f.charCodeAt(w);v[w]=m>96?m-97:m>64?m-39:m+4}for(var M=0,w=0;w<f.length;++w)v[M++]=v[w]<60?a[v[w]]:(v[w]-60)*64+v[++w];return v.buffer.slice(0,M)}function c(f,v,w,m,M,A,T){var R=f.exports.sbrk,_=m+3&-4,y=R(_*M),C=R(A.length),O=new Uint8Array(f.exports.memory.buffer);O.set(A,C);var P=v(y,m,M,C,A.length);if(P==0&&T&&T(y,_,M),w.set(O.subarray(y,y+m*M)),R(y-R(0)),P!=0)throw new Error("Malformed buffer data: "+P)}var h={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp",COLOR:"meshopt_decodeFilterColor"},l={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},d=[],u=0;function p(f){var v={object:new Worker(f),pending:0,requests:{}};return v.object.onmessage=function(w){var m=w.data;v.pending-=m.count,v.requests[m.id][m.action](m.value),delete v.requests[m.id]},v}function x(f){for(var v="self.ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(n)+"]), {}).then(function(result) { result.instance.exports.__wasm_call_ctors(); return result.instance; });self.onmessage = "+b.name+";"+c.toString()+b.toString(),w=new Blob([v],{type:"text/javascript"}),m=URL.createObjectURL(w),M=d.length;M<f;++M)d[M]=p(m);for(var M=f;M<d.length;++M)d[M].object.postMessage({});d.length=f,URL.revokeObjectURL(m)}function g(f,v,w,m,M){for(var A=d[0],T=1;T<d.length;++T)d[T].pending<A.pending&&(A=d[T]);return new Promise(function(R,_){var y=new Uint8Array(w),C=++u;A.pending+=f,A.requests[C]={resolve:R,reject:_},A.object.postMessage({id:C,count:f,size:v,source:y,mode:m,filter:M},[y.buffer])})}function b(f){var v=f.data;self.ready.then(function(w){if(!v.id)return self.close();try{var m=new Uint8Array(v.count*v.size);c(w,w.exports[v.mode],m,v.count,v.size,v.source,w.exports[v.filter]),self.postMessage({id:v.id,count:v.count,action:"resolve",value:m},[m.buffer])}catch(M){self.postMessage({id:v.id,count:v.count,action:"reject",value:M})}})}return{ready:r,supported:!0,useWorkers:function(f){x(f)},decodeVertexBuffer:function(f,v,w,m,M){c(i,i.exports.meshopt_decodeVertexBuffer,f,v,w,m,i.exports[h[M]])},decodeIndexBuffer:function(f,v,w,m){c(i,i.exports.meshopt_decodeIndexBuffer,f,v,w,m)},decodeIndexSequence:function(f,v,w,m){c(i,i.exports.meshopt_decodeIndexSequence,f,v,w,m)},decodeGltfBuffer:function(f,v,w,m,M,A){c(i,i.exports[l[M]],f,v,w,m,i.exports[h[A]])},decodeGltfBufferAsync:function(f,v,w,m,M){return d.length>0?g(f,v,w,l[m],h[M]):r.then(function(){var A=new Uint8Array(f*v);return c(i,i.exports[l[m]],A,f,v,w,i.exports[h[M]]),A})}}})();var E_=(function(){var s="b9H79Tebbbe;veC9Geueu9Geub9Gbb9Gsuuuuuuuuuuuu99uueu9Gvuuuuub9Gruuuuuuub9Gouuuuuue999Gvuuuuueu9Gzuuuuuuuuuuu99uuuub9Gquuuuuuu99uueu9GPuuuuuuuuuuu99uueu9Gquuuuuuuu99ueu9Gruuuuuu99eu9Gwuuuuuu99ueu9Giuuue999GDuuuuuuuuueu9Gkuuuuuuuu99uub9Gluuuueu9Gluuuub9Giuuueui3EdilvorlwDiqkrxmPszdHObAAbeAlve9Weiiviebeoweuecj:Gdkr:Sdmo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bbz9TW79O9V9Wt9F79P9T9W29P9M95bw8E9TW79O9V9Wt9F79P9T9W29P9M959x9Pt9OcttV9P9I91tW7bD8A9TW79O9V9Wt9F79P9T9W29P9M959x9Pt9O9v9W9K9HtWbqQ9TW79O9V9Wt9F79P9T9W29P9M959t29V9W9W95bkX9TW79O9V9Wt9F79P9T9W29P9M959qV919UWbmQ9TW79O9V9Wt9F79P9T9W29P9M959q9V9P9Ut7bPX9TW79O9V9Wt9F79P9T9W29P9M959t9J9H2WbsP9TW79O9V9Wt9FVW9TW79Obza9TW79O9V9Wt9F9V9Wt9P9T9P96W9wWVtW94SWt9J9O9sW9T9H9WbA59TW79O9V9Wt9F9NW9UWV9HtW9q9V79Pt9P9V9U9sW9T9H9WbCl79IV9RbXDwebcekdKYq:p:1dElbzOk:Q:tekYue99iuQ99eui99Due99xue9:w998Jjjjjbcj;sb9Rgs8Kjjjjbcbhzasc:Cefcbc;Kbz:xjjjb8AdnabaeSmbabaeadcdtz:wjjjb8AkdnamcdGTmbalcrfci4cbyd;y:L:cjbHjjjjbbhHasc:Cefasyd;8egecdtfaHBdbasaecefBd;8ecbhlcbhednadTmbabheadhOinaHaeydbci4fcb86bbaeclfheaOcufgOmbkcbhlabheadhOinaHaeydbgAci4fgCaCRbbgCceaAcrGgAtV86bbaCcu7aA4ceGalfhlaeclfheaOcufgOmbkcualcdtalcFFFFi0Ehekaecbyd;y:L:cjbHjjjjbbhzasc:Cefasyd;8egecdtfazBdbasaecefBd;8ealcd4alfhOcehHinaHgecethHaeaO6mbkcbhXcuaecdtgOaecFFFFi0Ecbyd;y:L:cjbHjjjjbbhHasc:Cefasyd;8egAcdtfaHBdbasaAcefBd;8eaHcFeaOz:xjjjbhQdnadTmbaecufhLcbhKindndnaQabaKcdtfgYydbgAc:v;t;h;Ev2aLGgOcdtfgCydbgHcuSmbceheinazaHcdtfydbaASmdaOaefhHaecefheaQaHaLGgOcdtfgCydbgHcu9hmbkkazaXcdtfaABdbaCaXBdbaXhHaXcefhXkaYaHBdbaKcefgKad9hmbkkaQcbyd;C:L:cjbH:bjjjbbasasyd;8ecufBd;8ekcbh8AcualcefgecdtaecFFFFi0Ecbyd;y:L:cjbHjjjjbbhKasc:Cefasyd;8egecdtfaKBdbasaKBdNeasaecefBd;8ecuadcitadcFFFFe0Ecbyd;y:L:cjbHjjjjbbhEasc:Cefasyd;8egecdtfaEBdbasaEBd:yeasaecefBd;8eascNefabadalcbz:cjjjbcualcdtgealcFFFFi0Eg3cbyd;y:L:cjbHjjjjbbhHasc:Cefasyd;8egOcdtfaHBdbasaOcefBd;8ea3cbyd;y:L:cjbHjjjjbbhXasc:Cefasyd;8egOcdtfaXBdbasaOcefBd;8eaHaXaialavazasc:Cefz:djjjbalcbyd;y:L:cjbHjjjjbbh5asc:Cefasyd;8egOcdtfa5BdbasaOcefBd;8ea3cbyd;y:L:cjbHjjjjbbhOasc:Cefasyd;8egAcdtfaOBdbasaAcefBd;8ea3cbyd;y:L:cjbHjjjjbbhAasc:Cefasyd;8egCcdtfaABdbasaCcefBd;8eaOcFeaez:xjjjbh8EaAcFeaez:xjjjbh8FdnalTmbindnaKa8AgAcefg8AcdtfydbgCaKaAcdtgefydbgOSmbaCaO9RhYaEaOcitfhaa8Faefhha8EaefhLcbhCindndnaaaCcitfydbgQaA9hmbaLaABdbahaABdbxekdnaKaQcdtggfgeclfydbgOaeydbgeSmbaOae9RhOaEaecitfheinaeydbaASmdaecwfheaOcufgOmbkka8FagfgeaAaQaeydbcuSEBdbaLaQaAaLydbcuSEBdbkaCcefgCaY9hmbkka8Aal9hmbkaHhOaXhAa8EhQa8FhCcbheindndnaeaOydbgL9hmbdnaeaAydbgL9hmbaQydbhLdnaCydbgYcu9hmbaLcu9hmba5aefcb86bbxikdnaYcuSmbaLcuSmbaeaYSmbaHaYcdtfydbaHaLcdtfydb9hmba5aefcd86bbxika5aefhadnaeaYSmbaeaLSmbaace86bbxikaacv86bbxdkdnaeaXaLcdtgYfydb9hmbdnaCydbgacuSmbaeaaSmbaQydbggcuSmbaeagSmba8FaYfydbghcuSmbahaLSmba8EaYfydbgYcuSmbaYaLSmbaHaacdtfydbgLaHaYcdtfydb9hmbaLaHagcdtfydbgYSmbaYaHahcdtfydb9hmba5aefcd86bbxika5aefcv86bbxdka5aefcv86bbxeka5aefa5aLfRbb86bbkaOclfhOaAclfhAaQclfhQaCclfhCalaecefge9hmbkdnamcaGTmbcbh8Jindndna5a8Jfg8KRbbg8Lc9:fPlbeebekdndndnaHa8Jcdtfydbgea8J9hmbcbhYcbh8MaqTmednazTmbcbh8Ma8JheinaqazaecdtgefydbfRbbce4a8MVceGh8MaXaefydbgea8J9hmbxikkcbh8Ma8JheinaqaefRbbce4a8MVceGh8MaXaecdtfydbgea8J9hmbxdkka5aefRbbhexeka8JheindnaKaecdtg8AfgeclfydbgOaeydbgeSmbaOae9RhgaEaecitfhhaHa8AfhacbhLinahaLcitfydbgQhednindnaKaecdtgCfgeclfydbgOaeydbgeSmbaOae9RhOaEaecitfheaaydbhAdninaHaeydbcdtfydbaASmeaecwfheaOcufgOTmdxbkkcbhexdkaXaCfydbgeaQ9hmbkcehekaYaeVhYaLcefgLag9hmbkkaXa8Afydbgea8J9hmbka8LclciaYceGEa8MEheka8Kae86bbka8Jcefg8Jal9hmbkkdnaqTmbdndnazTmbazheaHhOalhAindnaqaeydbfRbbceGTmba5aOydbfcv86bbkaeclfheaOclfhOaAcufgAmbxdkkaqheaHhOalhAindnaeRbbceGTmba5aOydbfcv86bbkaecefheaOclfhOaAcufgAmbkkaHhealhAa5hOindna5aeydbfRbbcv9hmbaOcv86bbkaeclfheaOcefhOaAcufgAmbkkamceGTmba5healhOindndnaeRbbcufPlbeebekaecv86bbkaecefheaOcufgOmbkkcbh8Ncualcx2alc;v:Q;v:Qe0Ecbyd;y:L:cjbHjjjjbbh8Kasc:Cefasyd;8egecdtfa8KBdbasaecefBd;8eascbBd:qeas9cb83i1ea8Kaialavazasc1efz:ejjjbhydndnaDmbcbh8PcbhaxekcbhaawhecbhOindnaeIdbJbbbb9ETmbasaacdtfaOBdbaacefhakaeclfheaDaOcefgO9hmbkcuaaal2gecdtaecFFFFi0Ecbyd;y:L:cjbHjjjjbbh8Pasc:Cefasyd;8egecdtfa8PBdbasaecefBd;8ealTmbdnaambcbhaxekarcd4hgdnazTmbaacdthhcbhLa8PhYinaoazaLcdtfydbag2cdtfhQasheaYhOaahAinaOaQaeydbcdtgCfIdbawaCfIdbNUdbaeclfheaOclfhOaAcufgAmbkaYahfhYaLcefgLal9hmbxdkkaacdthhcbhLa8PhYinaoaLag2cdtfhQasheaYhOaahAinaOaQaeydbcdtgCfIdbawaCfIdbNUdbaeclfheaOclfhOaAcufgAmbkaYahfhYaLcefgLal9hmbkkcualc8S2gOalc;D;O;f8U0EgCcbyd;y:L:cjbHjjjjbbheasc:Cefasyd;8egAcdtfaeBdbasaAcefBd;8eaecbaOz:xjjjbhIcbh8RcbhgdnaaTmbcbh8NaCcbyd;y:L:cjbHjjjjbbhgasc:Cefasyd;8egecdtfagBdbasaecefBd;8eagcbaOz:xjjjb8Acuaaal2gecltgOaecFFFFb0Ecbyd;y:L:cjbHjjjjbbh8Rasc:Cefasyd;8egecdtfa8RBdbasaecefBd;8ea8RcbaOz:xjjjb8AamcjjjjdGTmbcualcltgealcFFFFb0Ecbyd;y:L:cjbHjjjjbbh8Nasc:Cefasyd;8egOcdtfa8NBdbasaOcefBd;8ea8Ncbaez:xjjjb8AkdnadTmbcbhQabhOina8KaOclfydbgLcx2fgeIdba8KaOydbgYcx2fgAIdbg8S:tgRa8KaOcwfydbghcx2fgCIdlaAIdlg8U:tg8VNaeIdla8U:tg8WaCIdba8S:tg8XN:tg8Ya8YNa8WaCIdwaAIdwg8Z:tg80NaeIdwa8Z:tg8Wa8VN:tg81a81Na8Wa8XNaRa80N:tg80a80NMMg8V:rhBa8Yh8Xa80h8Wa81hRdna8VJbbbb9EgATmba8YaB:vh8Xa80aB:vh8Wa81aB:vhRkaIaHaYcdtfydbgCc8S2fgeaRaB:rg8VaRNNg83aeIdbMUdbaea8Wa8Va8WNgUNg85aeIdlMUdlaea8Xa8Va8XNg86Ng87aeIdwMUdwaeaRaUNgUaeIdxMUdxaea86aRNg88aeIdzMUdzaea8Wa86Ng89aeIdCMUdCaeaRa8Va8Xa8ZNaRa8SNa8Ua8WNMM:mg8:Ng86NgRaeIdKMUdKaea8Wa86Ng8WaeId3MUd3aea8Xa86Ng8XaeIdaMUdaaea86a8:Ng86aeId8KMUd8Kaea8VaeIdyMUdyaIaHaLcdtfydbgLc8S2fgea83aeIdbMUdbaea85aeIdlMUdlaea87aeIdwMUdwaeaUaeIdxMUdxaea88aeIdzMUdzaea89aeIdCMUdCaeaRaeIdKMUdKaea8WaeId3MUd3aea8XaeIdaMUdaaea86aeId8KMUd8Kaea8VaeIdyMUdyaIaHahcdtfydbgYc8S2fgea83aeIdbMUdbaea85aeIdlMUdlaea87aeIdwMUdwaeaUaeIdxMUdxaea88aeIdzMUdzaea89aeIdCMUdCaeaRaeIdKMUdKaea8WaeId3MUd3aea8XaeIdaMUdaaea86aeId8KMUd8Kaea8VaeIdyMUdydna8NTmbdnaATmba8YaB:vh8Ya80aB:vh80a81aB:vh81ka8NaCcltfgeaBJbbbZNgRa80Ng8VaeIdlMUdlaeaRa8YNg8WaeIdwMUdwaeaRa81Ng8XaeIdbMUdbaeaRa8S:ma81Na8Ua80N:ta8Za8YN:tNgRaeIdxMUdxa8NaLcltfgea8VaeIdlMUdlaea8WaeIdwMUdwaea8XaeIdbMUdbaeaRaeIdxMUdxa8NaYcltfgea8VaeIdlMUdlaea8WaeIdwMUdwaea8XaeIdbMUdbaeaRaeIdxMUdxkaOcxfhOaQcifgQad6mbkkdnalTmbJq;x8J88J;n;m;m89J:v:;;w8ZamczGEamc;abGEh80cbhOaHhCazhQaIhea8KhAindnaOaCydb9hmbaOhLdnazTmbaQydbhLka80hRdnaqTmbJbbjZa80aqaLfRbbclGEhRkaecxfgLaLIdbJbbbbMUdbaeczfgLaLIdbJbbbbMUdbaecCfgLaLIdbJbbbbMUdbaeaRaecyfgLIdbg8YNgRaeIdbMUdbaeclfgYaRaYIdbMUdbaecwfgYaRaYIdbMUdbaecKfgYaYIdbaAIdbg8WaRN:tUdbaAcwfIdbh8Vaec3fgYaYIdbaRaAclfIdbg8XN:tUdbaecafgYaYIdbaRa8VN:tUdbaec8KfgYIdbh81aLa8YaRMUdbaYa81aRa8Va8VNa8Wa8WNa8Xa8XNMMNMUdbkaCclfhCaQclfhQaec8SfheaAcxfhAalaOcefgO9hmbkkdnadTmbcbh8AabhLinaba8AcdtfhYcbheindna5aLaefydbgCfRbbgOTmba5aYaec:G:G:cjbfydbcdtfydbgQfRbbcFeGgATmbdnaOclSghmbaOci6mbaAclSmbaAcd0mekdnaOcd0mba8EaCcdtfydbaQ9hmekdnaAcd0mba8FaQcdtfydbaC9hmekdndnahmbaAcl9hmekaOciSmeaAciSmekJbbbZJbbbZJbbacaAcdSEaOcdSEhUdna8KaYaec:K:G:cjbfydbcdtfydbcx2fgOIdwa8KaCcx2fgAIdwg86:tg8Sa8KaQcx2fghIdwa86:tg8Xa8XNahIdbaAIdbg8U:tg80a80NahIdlaAIdlg8Z:tg8Va8VNMMg81Na8Xa8Sa8XNaOIdba8U:tg83a80Na8VaOIdla8Z:tg85NMMg8WN:tg8Ya8YNa83a81Na80a8WN:tgRaRNa85a81Na8Va8WN:tg8Wa8WNMMgBJbbbb9ETmba8YaB:rgB:vh8Ya8WaB:vh8WaRaB:vhRkaUa81:rNgBa8Ya86NaRa8UNa8Za8WNMM:mg81Ng87a81Nh88a80a85Na8Va83N:tg81a81Na8Va8SNa8Xa85N:tg8Va8VNa8Xa83Na80a8SN:tg8Xa8XNMMg83:rh80a8Ya87Nh85a8Wa87Nh89aRa87Nh87a8WaBa8YNg8SNh8:a8SaRNhZaRaBa8WNgnNhca8Ya8SNh8Ya8WanNh8WaRaBaRNNh8Sdna83Jbbbb9ETmba81a80:vh81a8Xa80:vh8Xa8Va80:vh8VkaIaHaCcdtfydbc8S2fgOaOIdba8Sa8VaUa80:rNgRa8VNNMg80MUdbaOa8Wa8XaRa8XNg8SNMg83aOIdlMUdlaOa8Ya81aRa81Ng8WNMg8YaOIdwMUdwaOaca8Va8SNMg8SaOIdxMUdxaOaZa8Wa8VNMgUaOIdzMUdzaOa8:a8Xa8WNMg8WaOIdCMUdCaOa87a8VaRa81a86Na8Va8UNa8Za8XNMMg86:mNgRNMg8VaOIdKMUdKaOa89a8XaRNMg8XaOId3MUd3aOa85a81aRNMg81aOIdaMUdaaOa88a86aRN:tgRaOId8KMUd8KaOaBaOIdyMUdyaIaHaQcdtfydbc8S2fgOa80aOIdbMUdbaOa83aOIdlMUdlaOa8YaOIdwMUdwaOa8SaOIdxMUdxaOaUaOIdzMUdzaOa8WaOIdCMUdCaOa8VaOIdKMUdKaOa8XaOId3MUd3aOa81aOIdaMUdaaOaRaOId8KMUd8KaOaBaOIdyMUdykaeclfgecx9hmbkaLcxfhLa8Acifg8Aad6mbkkdnamcjeGTmbalTmbcbh9cindnaKa9cgecdtgOfydbghaKaecefg9ccdtfydbg8M9pmba8Kaecx2fhDaIaHaOfydbgCc8S2fh8AindnaHaEahcitfgeydbgLcdtfydbg8JaC0mbaeydlh8LcuhAaLheindnaKaecdtgYfgeclfydbgOaeydbgeSmbaOae9RhOaEaecitfheindnaHaeydbcdtfydbaC9hmbaAcu9hhQaLhAaQmbaeclfydbhAkaecwfheaOcufgOmbkkaXaYfydbgeaL9hmbkaAaLSmbaAcuSmba8KaLcx2fgeIdbaDIdbg81:tgRa8Ka8Lcx2fgOIdlaDIdlg80:tg8XNaeIdla80:tg8VaOIdba81:tg8YN:tg86a8KaAcx2fgAIdba81:tg8Za8VNaAIdla80:tg83aRN:tg8SNa8VaOIdwaDIdwgB:tg8UNaeIdwaB:tg8Wa8XN:tg85a83a8WNaAIdwaB:tg87a8VN:tgUNa8Wa8YNaRa8UN:tg88a87aRNa8Za8WN:tg89NMMa86a86Na85a85Na88a88NMM:rJ:A:z9z:;Na8Sa8SNaUaUNa89a89NMM:rN9Gmbdna8Ua8Wa8WNaRaRNa8Va8VNMMg8SNa8Wa8Ua8WNa8YaRNa8Va8XNMMg86N:tg8Ua8UNa8Ya8SNaRa86N:tg8Ya8YNa8Xa8SNa8Va86N:tg86a86NMMg8XJbbbb9ETmba8Ua8X:rg8X:vh8Ua86a8X:vh86a8Ya8X:vh8Yka8S:rg8Xa8UaBNa8Ya81Na80a86NMM:mgUNg85aUNhUa8Ua85Nh88a86a85Nh89a8Ya85Nh8:a86a8Xa8UNg85NhZa85a8YNhna8Ya8Xa86NgcNhJa8Ua85Nh8Ua86acNh86a8Ya8Xa8YNNh85dna87a8SNa8Wa87a8WNa8ZaRNa8Va83NMMg8YN:tg8Wa8WNa8Za8SNaRa8YN:tgRaRNa83a8SNa8Va8YN:tg8Va8VNMMg8YJbbbb9ETmba8Wa8Y:rg8Y:vh8Wa8Va8Y:vh8VaRa8Y:vhRka8Aa8AIdba85aRa8XaRNNMg8SMUdba8Aa86a8Va8Xa8VNg8ZNMg86a8AIdlMUdla8Aa8Ua8Wa8Xa8WNg8YNMg8Ua8AIdwMUdwa8AaJaRa8ZNMg8Za8AIdxMUdxa8Aana8YaRNMg83a8AIdzMUdza8AaZa8Va8YNMg85a8AIdCMUdCa8Aa8:aRa8Xa8WaBNaRa81Na80a8VNMMg81:mNg8YNMgRa8AIdKMUdKa8Aa89a8Va8YNMg8Va8AId3MUd3a8Aa88a8Wa8YNMg8Wa8AIdaMUdaa8AaUa81a8YN:tg8Ya8AId8KMUd8Ka8Aa8Xa8XMg8Xa8AIdyMUdyaIa8Jc8S2fgea8SaeIdbMUdbaea86aeIdlMUdlaea8UaeIdwMUdwaea8ZaeIdxMUdxaea83aeIdzMUdzaea85aeIdCMUdCaeaRaeIdKMUdKaea8VaeId3MUd3aea8WaeIdaMUdaaea8YaeId8KMUd8Kaea8XaeIdyMUdykahcefgha8M9hmbkka9cal9hmbkkdnadTmbaaTmbcbhYinJbbbbh80a8KabaYcdtfgeclfydbgLcx2fgOIdwa8Kaeydbghcx2fgAIdwg8Z:tg8Va8VNaOIdbaAIdbg83:tg8Wa8WNaOIdlaAIdlg85:tg8Xa8XNMMg8Sa8Kaecwfydbg8Acx2fgeIdwa8Z:tg8YNa8Va8YNa8WaeIdba83:tg81Na8XaeIdla85:tgBNMMgRa8VN:tJbbbbJbbjZa8Sa8Ya8YNa81a81NaBaBNMMg8UNaRaRN:tg86:va86Jbbbb9BEg86Nh88a8Ua8VNaRa8YN:ta86Nh89a8SaBNaRa8XN:ta86Nh8:a8Ua8XNaRaBN:ta86NhZa8Sa81NaRa8WN:ta86Nhna8Ua8WNaRa81N:ta86Nhca8WaBNa8Xa81N:tgRaRNa8Xa8YNa8VaBN:tgRaRNa8Va81Na8Wa8YN:tgRaRNMM:rJbbbZNhRa8Pahaa2g8JcdtfhOa8Pa8Aaa2g8McdtfhAa8PaLaa2gDcdtfhCa8Z:mhJa85:mh9ea83:mhTascjdfheaahQJbbbbhBJbbbbh86Jbbbbh8SJbbbbh8UJbbbbh8ZJbbbbh83Jbbbbh85Jbbbbh87JbbbbhUinaecwfaRa89aCIdbaOIdbg8Y:tg8XNa88aAIdba8Y:tg81NMg8VNUdbaeclfaRaZa8XNa8:a81NMg8WNUdbaeaRaca8XNana81NMg8XNUdbaecxfaRaJa8VNa9ea8WNa8YaTa8XNMMMg8YNUdbaRa8Va8WNNa8ZMh8ZaRa8Va8XNNa8UMh8UaRa8Wa8XNNa8SMh8SaRa8Ya8YNNaUMhUaRa8Va8YNNa87Mh87aRa8Wa8YNNa85Mh85aRa8Xa8YNNa83Mh83aRa8Va8VNNa86Mh86aRa8Wa8WNNaBMhBaRa8Xa8XNNa80Mh80aOclfhOaCclfhCaAclfhAaeczfheaQcufgQmbkagahc8S2fgea80aeIdbMUdbaeaBaeIdlMUdlaea86aeIdwMUdwaea8SaeIdxMUdxaea8UaeIdzMUdzaea8ZaeIdCMUdCaea83aeIdKMUdKaea85aeId3MUd3aea87aeIdaMUdaaeaUaeId8KMUd8KaeaRaeIdyMUdyagaLc8S2fgea80aeIdbMUdbaeaBaeIdlMUdlaea86aeIdwMUdwaea8SaeIdxMUdxaea8UaeIdzMUdzaea8ZaeIdCMUdCaea83aeIdKMUdKaea85aeId3MUd3aea87aeIdaMUdaaeaUaeId8KMUd8KaeaRaeIdyMUdyaga8Ac8S2fgea80aeIdbMUdbaeaBaeIdlMUdlaea86aeIdwMUdwaea8SaeIdxMUdxaea8UaeIdzMUdzaea8ZaeIdCMUdCaea83aeIdKMUdKaea85aeId3MUd3aea87aeIdaMUdaaeaUaeId8KMUd8KaeaRaeIdyMUdya8Ra8JcltfhLcbhOaahCinaLaOfgeascjdfaOfgAIdbaeIdbMUdbaeclfgQaAclfIdbaQIdbMUdbaecwfgQaAcwfIdbaQIdbMUdbaecxfgeaAcxfIdbaeIdbMUdbaOczfhOaCcufgCmbka8RaDcltfhLcbhOaahCinaLaOfgeascjdfaOfgAIdbaeIdbMUdbaeclfgQaAclfIdbaQIdbMUdbaecwfgQaAcwfIdbaQIdbMUdbaecxfgeaAcxfIdbaeIdbMUdbaOczfhOaCcufgCmbka8Ra8McltfhLcbhOaahCinaLaOfgeascjdfaOfgAIdbaeIdbMUdbaeclfgQaAclfIdbaQIdbMUdbaecwfgQaAcwfIdbaQIdbMUdbaecxfgeaAcxfIdbaeIdbMUdbaOczfhOaCcufgCmbkaYcifgYad6mbkkcbhAdndnamcwGgSmbJbbbbh86cbh9hcbh9icbh6xekcbh9ha3cbyd;y:L:cjbHjjjjbbh6asc:Cefasyd;8egecdtfa6BdbasaecefBd;8ecua6alabadaHz:fjjjbgCcltaCcjjjjiGEcbyd;y:L:cjbHjjjjbbh9iasc:Cefasyd;8egecdtfa9iBdbasaecefBd;8ea9iaCa6a8Kalz:gjjjbJFFuuh86aCTmba9iheaChOinaeIdbgRa86a86aR9EEh86aeclfheaOcufgOmbkaCh9hkdnalTmbaKclfheaKydbhCa5hOalhQcbhAincbaeydbgLaC9RaORbbcpeGEaAfhAaOcefhOaeclfheaLhCaQcufgQmbkaAce4hAkcuadaA9Rcifg9kcx2a9kc;v:Q;v:Qe0Ecbyd;y:L:cjbHjjjjbbh0asc:Cefasyd;8egecdtfa0BdbasaecefBd;8ecua9kcdta9kcFFFFi0Ecbyd;y:L:cjbHjjjjbbh9masc:Cefasyd;8egecdtfa9mBdbasaecefBd;8ea3cbyd;y:L:cjbHjjjjbbh9nasc:Cefasyd;8egecdtfa9nBdbasaecefBd;8ealcbyd;y:L:cjbHjjjjbbh9oasc:Cefasyd;8egecdtfa9oBdbasaecefBd;8eaxaxNayJbbjZamclGEg9pa9pN:vh87JbbbbhUdnadak9nmbdna9kci6mbamcjdGh9qaaclth9ra0cwfh9sJbbbbh85JbbbbhUinascNefabadalaHz:cjjjbabh8Acbh3cbh9tinaba9tcdtfh8McbheindnaHa8AaefydbgAcdtghfydbgCaHa8Maec:W:G:cjbfydbcdtfydbgOcdtg8JfydbgQSmba5aOfRbbgYco2a5aAfRbbgLfRb;a:G:cjbg8LaLco2aYfgDRb;a:G:cjbg9cVcFeGTmbdnaQaC9nmbaDRb;W:G:cjbcFeGmekdnaLcufcFeGce0mbaYTmba8EahfydbaO9hmekdnaLTmbaYcufcFeGce0mba8Fa8JfydbaA9hmeka0a3cx2fgCaOaAa9ccFeGgQEBdlaCaAaOaQEBdbaCaQa8LGcb9hBdwa3cefh3kaeclfgecx9hmbkdna9tcifg9tad9pmba8Acxfh8Aa3cifa9k9nmekka3TmdcbhDinaIaHa0aDcx2fghydbgLcdtgCfydbg8Jc8S2fgeIdwa8KahydlgYcx2fgOIdwg8WNaeIdzaOIdbg8XNaeIdaMgRaRMMa8WNaeIdlaOIdlg8YNaeIdCa8WNaeId3MgRaRMMa8YNaeIdba8XNaeIdxa8YNaeIdKMgRaRMMa8XNaeId8KMMM:lhRJbbbbJbbjZaeIdyg8V:va8VJbbbb9BEh8Vdndnahydwg8MmbJFFuuhBxekJbbbbJbbjZaIaHaYcdtfydbc8S2fgeIdyg81:va81Jbbbb9BEaeIdwa8KaLcx2fgOIdwg81NaeIdzaOIdbg80NaeIdaMgBaBMMa81NaeIdlaOIdlgBNaeIdCa81NaeId3Mg81a81MMaBNaeIdba80NaeIdxaBNaeIdKMg81a81MMa80NaeId8KMMM:lNhBka8VaRNh80dnaaTmbagaLc8S2fgAIdwa8WNaAIdza8XNaAIdaMgRaRMMa8WNaAIdla8YNaAIdCa8WNaAId3MgRaRMMa8YNaAIdba8XNaAIdxa8YNaAIdKMgRaRMMa8XNaAId8KMMMhRa8PaYaa2gQcdtfhOa8RaLaa2g8AcltfheaAIdyh81aahAinaOIdbg8Va8Va81NaecxfIdba8WaecwfIdbNa8XaeIdbNa8YaeclfIdbNMMMg8Va8VM:tNaRMhRaOclfhOaeczfheaAcufgAmbkaR:lgRa81aRa819DEaRa9qEh8Sdndna8MmbJbbbbhRxekagaYc8S2fgAIdwa8KaLcx2fgeIdwg8WNaAIdzaeIdbg8XNaAIdaMgRaRMMa8WNaAIdlaeIdlg8YNaAIdCa8WNaAId3MgRaRMMa8YNaAIdba8XNaAIdxa8YNaAIdKMgRaRMMa8XNaAId8KMMMhRa8Pa8AcdtfhOa8RaQcltfheaAIdyh81aahAinaOIdbg8Va8Va81NaecxfIdba8WaecwfIdbNa8XaeIdbNa8YaeclfIdbNMMMg8Va8VM:tNaRMhRaOclfhOaeczfheaAcufgAmbkaR:lgRa81aRa819DEaRa9qEhRka80a8SMh80aBaRMhBdndndna5aLfRbbc9:fPibeedkdna8Fa8Ea8EaCfydbaYSEaXaCfydbgQcdtfydbgCcu9hmbaXaYcdtfydbhCkagaQc8S2fgAIdwa8KaCcx2fgeIdwg8WNaAIdzaeIdbg8XNaAIdaMgRaRMMa8WNaAIdlaeIdlg8YNaAIdCa8WNaAId3MgRaRMMa8YNaAIdba8XNaAIdxa8YNaAIdKMgRaRMMa8XNaAId8KMMMhRa8PaCaa2g8AcdtfhOa8RaQaa2g8JcltfheaAIdyh81aahAinaOIdbg8Va8Va81NaecxfIdba8WaecwfIdbNa8XaeIdbNa8YaeclfIdbNMMMg8Va8VM:tNaRMhRaOclfhOaeczfheaAcufgAmbkaR:lgRa81aRa819DEaRa9qEh8Sdndna8MmbJbbbbhRxekagaCc8S2fgAIdwa8KaQcx2fgeIdwg8WNaAIdzaeIdbg8XNaAIdaMgRaRMMa8WNaAIdlaeIdlg8YNaAIdCa8WNaAId3MgRaRMMa8YNaAIdba8XNaAIdxa8YNaAIdKMgRaRMMa8XNaAId8KMMMhRa8Pa8JcdtfhOa8Ra8AcltfheaAIdyh81aahAinaOIdbg8Va8Va81NaecxfIdba8WaecwfIdbNa8XaeIdbNa8YaeclfIdbNMMMg8Va8VM:tNaRMhRaOclfhOaeczfheaAcufgAmbkaR:lgRa81aRa819DEaRa9qEhRka80a8SMh80aBaRMhBxdkaXaCfydbgCaLSmbaHaYcdtfydbh8Aindndna8EaCcdtgQfydbgecuSmbaHaecdtfydba8ASmekdna8FaQfydbgecuSmbaHaecdtfydba8ASmekaYhekagaCc8S2fgAIdwa8Kaecx2fgOIdwg8WNaAIdzaOIdbg8XNaAIdaMgRaRMMa8WNaAIdlaOIdlg8YNaAIdCa8WNaAId3MgRaRMMa8YNaAIdba8XNaAIdxa8YNaAIdKMgRaRMMa8XNaAId8KMMMhRa8Paeaa2cdtfhOa8RaCaa2cltfheaAIdyh81aahAinaOIdbg8Va8Va81NaecxfIdba8WaecwfIdbNa8XaeIdbNa8YaeclfIdbNMMMg8Va8VM:tNaRMhRaOclfhOaeczfheaAcufgAmbka80aR:lgRa81aRa819DEaRa9qEMh80aXaQfydbgCaL9hmbkkdna5aYfRbbgeciSmbaecl9hmeka8MTmbaXaYcdtfydbgCaYSmbindndna8EaCcdtgQfydbgecuSmbaHaecdtfydba8JSmekdna8FaQfydbgecuSmbaHaecdtfydba8JSmekaLhekagaCc8S2fgAIdwa8Kaecx2fgOIdwg8WNaAIdzaOIdbg8XNaAIdaMgRaRMMa8WNaAIdlaOIdlg8YNaAIdCa8WNaAId3MgRaRMMa8YNaAIdba8XNaAIdxa8YNaAIdKMgRaRMMa8XNaAId8KMMMhRa8Paeaa2cdtfhOa8RaCaa2cltfheaAIdyh81aahAinaOIdbg8Va8Va81NaecxfIdba8WaecwfIdbNa8XaeIdbNa8YaeclfIdbNMMMg8Va8VM:tNaRMhRaOclfhOaeczfheaAcufgAmbkaBaR:lgRa81aRa819DEaRa9qEMhBaXaQfydbgCaY9hmbkkahaBa80aBa809DgeEUdwahaLaYaea8Mcb9hGgeEBdlahaYaLaeEBdbaDcefgDa39hmbkascjdfcbcj;qbz:xjjjb8Aa9shea3hOinascjdfaeydbcA4cF8FGgAcFAaAcFA6EcdtfgAaAydbcefBdbaecxfheaOcufgOmbkcbhecbhOinascjdfaefgAydbhCaAaOBdbaCaOfhOaeclfgecj;qb9hmbkcbhea9shOinascjdfaOydbcA4cF8FGgAcFAaAcFA6EcdtfgAaAydbgAcefBdba9maAcdtfaeBdbaOcxfhOa3aecefge9hmbkadak9RgAci9Uh9udnalTmbcbhea9nhOinaOaeBdbaOclfhOalaecefge9hmbkkcbh9va9ocbalz:xjjjbh9caAcO9Uh9wa9uce4h9tcbh8Lcbh8Mdnina0a9ma8Mcdtfydbcx2fg8JIdwgRa879Emea8La9u9pmeJFFuuh8Vdna9ta39pmba0a9ma9tcdtfydbcx2fIdwJbb;aZNh8VkdnaRa8V9ETmbaRaU9ETmba8La9w0mdkdna9caHa8JydlgDcdtg9xfg8AydbgAfg9yRbba9caHa8Jydbghcdtg9zfydbgefg9ARbbVmba5ahfRbbh9BdndnaKaecdtfgOclfydbgCaOydbgOSmbaCaO9RhCa8KaAcx2fhLa8Kaecx2fhYaEaOcitfheindna9naeydbcdtfydbgOaASmba9naeclfydbcdtfydbgQaASmbaOaQSmba8KaQcx2fgQIdba8KaOcx2fgOIdbg8W:tgRaYIdlaOIdlg8X:tg80NaQIdla8X:tg8VaYIdba8W:tgBN:tg8YaRaLIdla8X:tg8SNa8VaLIdba8W:tg8UN:tg8XNa8VaYIdwaOIdwg81:tg8ZNaQIdwa81:tg8Wa80N:tg80a8VaLIdwa81:tg83Na8Wa8SN:tg8VNa8WaBNaRa8ZN:tg81a8Wa8UNaRa83N:tgRNMMa8Ya8YNa80a80Na81a81NMMa8Xa8XNa8Va8VNaRaRNMMN:rJbbj8:N9FmikaecwfheaCcufgCmbkkdndna9Bc99fcFeGce0mba9na9zfaDBdbaXa9zfydbgeahSmeina8AydbhAdndna8EaecdtgOfydbgecuSmbaHaecdtfydbaASmekdna8FaOfydbgecuSmbaHaecdtfydbaASmekaDheka9naOfaeBdbaXaOfydbgeah9hmbxdkkdndna9BcFeGcdSmbaDhexekdna8Fa8Ea8Ea9zfydbaDSEaXa9zfydbghcdtfydbgecu9hmbaXa9xfydbheka9na9zfaDBdbka9nahcdtfaeBdbka9Ace86bba9yce86bba8JIdwgRaUaUaR9DEhUa9vcefh9vcecda9BcFeGceSEa8Lfh8Lxeka9tcefh9tka8Mcefg8Ma39hmbkka9vTmddnalTmbcbhLcbhhindna9nahcdtgefydbgAahSmbaHaAcdtfydbh8AdnahaHaefydb9hg8JmbaIa8Ac8S2fgeaIahc8S2fgOIdbaeIdbMUdbaeaOIdlaeIdlMUdlaeaOIdwaeIdwMUdwaeaOIdxaeIdxMUdxaeaOIdzaeIdzMUdzaeaOIdCaeIdCMUdCaeaOIdKaeIdKMUdKaeaOId3aeId3MUd3aeaOIdaaeIdaMUdaaeaOId8KaeId8KMUd8KaeaOIdyaeIdyMUdya8NTmba8Na8Acltfgea8NahcltfgOIdbaeIdbMUdbaeaOIdlaeIdlMUdlaeaOIdwaeIdwMUdwaeaOIdxaeIdxMUdxkaaTmbagaAc8S2fgeagahc8S2g8MfgOIdbaeIdbMUdbaeaOIdlaeIdlMUdlaeaOIdwaeIdwMUdwaeaOIdxaeIdxMUdxaeaOIdzaeIdzMUdzaeaOIdCaeIdCMUdCaeaOIdKaeIdKMUdKaeaOId3aeId3MUd3aeaOIdaaeIdaMUdaaeaOId8KaeId8KMUd8KaeaOIdyaeIdyMUdya9raA2hYa8RhOaahCinaOaYfgeaOaLfgAIdbaeIdbMUdbaeclfgQaAclfIdbaQIdbMUdbaecwfgQaAcwfIdbaQIdbMUdbaecxfgeaAcxfIdbaeIdbMUdbaOczfhOaCcufgCmbka8JmbJbbbbJbbjZaIa8MfgeIdygR:vaRJbbbb9BEaeIdwa8Ka8Acx2fgOIdwgRNaeIdzaOIdbg8VNaeIdaMg8Wa8WMMaRNaeIdlaOIdlg8WNaeIdCaRNaeId3MgRaRMMa8WNaeIdba8VNaeIdxa8WNaeIdKMgRaRMMa8VNaeId8KMMM:lNgRa85a85aR9DEh85kaLa9rfhLahcefghal9hmbkcbhOa8EheindnaeydbgAcuSmbdnaOa9naAcdtgCfydbgA9hmbcuhAa8EaCfydbgCcuSmba9naCcdtfydbhAkaeaABdbkaeclfhealaOcefgO9hmbkcbhOa8FheindnaeydbgAcuSmbdnaOa9naAcdtgCfydbgA9hmbcuhAa8FaCfydbgCcuSmba9naCcdtfydbhAkaeaABdbkaeclfhealaOcefgO9hmbkka85aUaaEh85cbhOabhecbhAindnaHa9naeydbcdtfydbgLcdtfydbgCaHa9naeclfydbcdtfydbgYcdtfydbgQSmbaCaHa9naecwfydbcdtfydbg8AcdtfydbghSmbaQahSmbabaOcdtfgCaLBdbaCcwfa8ABdbaCclfaYBdbaOcifhOkaecxfheaAcifgAad6mbkdndnaSmbaOhdxekdnaOak0mbaOhdxekdna86a859FmbaOhdxekJFFuuh86cbhdabhecbhAindna9ia6aeydbgCcdtfydbcdtfIdbgRa859ETmbaeclf8Pdbh9CabadcdtfgQaCBdbaQclfa9C83dbaRa86a86aR9EEh86adcifhdkaecxfheaAcifgAaO6mbkkadak0mbxdkkascNefabadalaHz:cjjjbkdndnadak0mbadhYxekdnaSmbadhYxekdna86a879FmbadhYxekcehQina86Jbb;aZNgRa87aRa879DEh8WJbbbbhRdna9hTmba9ihea9hhOinaeIdbg8VaRa8Va8W9FEaRa8VaR9EEhRaeclfheaOcufgOmbkkJFFuuh86cbhYabhecbhOindna9ia6aeydbgAcdtfydbcdtfIdbg8Va8W9ETmbaeclf8Pdbh9CabaYcdtfgCaABdbaCclfa9C83dba8Va86a86a8V9EEh86aYcifhYkaecxfheaOcifgOad6mbkdnaQaYad9hVceGmbadhYxdkaRaUaUaR9DEhUaYak9nmecbhQaYhda86a879FmbkkdnamcjjjjdGTmba9ocbalz:xjjjbh8AdnaYTmbabheaYhOina8AaeydbgAfce86bba8AaHaAcdtfydbfce86bbaeclfheaOcufgOmbkkascNefabaYalaHz:cjjjbdndnalTmbcbhCindna8AaCfRbbTmbdna5aCfRbbPlbeebekdnaHaCcdtgLfydbgeaCSmba8KaCcx2fgOa8Kaecx2fgeydwBdwaOae8Pdb83dbxekaIaCc8S2fgQIdygnanJL:3;rUNgRMh87aQIdwgxaRMh8SaQIdlg9DaRMh8UaQIdbg9EaRMh81aQIdag9FaRa8KaCcx2fg8JIdwg88N:th8ZaQId3g9GaRa8JIdlg89N:th83aQIdKg9Ha8JIdbg8:aRN:th80JbbbbhZaQIdCg9IJbbbbMh85aQIdzg9JJbbbbMhBaQIdxg9KJbbbbMh86dndnaaTmbaChAinJbbbba87agaAc8S2fgOIdygR:vaRJbbbb9BEhRa8RaAaa2cltfheaOIdaa87Na8ZMh8ZaOId3a87Na83Mh83aOIdKa87Na80Mh80aOIdCa87Na85Mh85aOIdza87NaBMhBaOIdxa87Na86Mh86aOIdwa87Na8SMh8SaOIdla87Na8UMh8UaOIdba87Na81Mh81aahOina8ZaecwfIdbg8VaecxfIdbg8YNaRN:th8Za83aeclfIdbg8Wa8YNaRN:th83a85a8Wa8VNaRN:th85a81aeIdbg8Xa8XNaRN:th81a80a8Xa8YNaRN:th80aBa8Xa8VNaRN:thBa86a8Xa8WNaRN:th86a8Sa8Va8VNaRN:th8Sa8Ua8Wa8WNaRN:th8UaeczfheaOcufgOmbkaXaAcdtfydbgAaC9hmbka8NTmba8NaCcltfgeIdxhTaeIdwhcaeIdlhJaeIdbhRxekJbbbbhTJbbbbhcJbbbbhJJbbbbhRkaBa81:vg8Wa80Na8Z:ta85aBa86a81:vg8VN:tg8Za8Ua86a8VN:tg8Y:vg8Xa8Va80Na83:tg8UN:th83acaRa8WN:taJaRa8VN:tg86a8XN:tg85a8SaBa8WN:ta8Za8XN:tgB:vg8S:mh8Za86a8Y:vgc:mhJdnJbbbbaRaRa81:vg9eN:ta86acN:ta85a8SN:tg86:la87J:983:g81NgR9ETmba8Za83NaJa8UNa9ea80NaT:tMMa86:vhZka81:laR9ETmba8Y:laR9ETmbaB:laR9ETmba9e:maZNa8W:ma8ZaZNa83aB:vMgBNa8V:maJaZNa8X:maBNa8Ua8Y:vMMg85Na80:ma81:vMMMh87aKaLfgeclfydbgOaeydbge9RhhaEaecitfhLJbbbbhRdnaOaeSg8MmbJbbbbhRaLheahhAina8Kaeclfydbcx2fgOIdwa88:tg8Va8VNaOIdba8::tg8Va8VNaOIdla89:tg8Va8VNMMg8Va8Kaeydbcx2fgOIdwa88:tg8Wa8WNaOIdba8::tg8Wa8WNaOIdla89:tg8Wa8WNMMg8WaRaRa8W9DEgRaRa8V9DEhRaecwfheaAcufgAmbkaR:rgRaRNhRkaBa88:tg8Va8VNa87a8::tg8Va8VNa85a89:tg8Va8VNMMaR9EmbaQId8KhZdna8Mmbina8KaLclfydbcx2fgeIdba8KaLydbcx2fgOIdbg8W:tgRa89aOIdlg8X:tg80NaeIdla8X:tg8Va8:a8W:tg86N:tg8YaRa85a8X:tg8SNa8Va87a8W:tg8UN:tg8XNa8Va88aOIdwg81:tg8ZNaeIdwa81:tg8Wa80N:tg80a8VaBa81:tg83Na8Wa8SN:tg8VNa8Wa86NaRa8ZN:tg81a8Wa8UNaRa83N:tgRNMMa8Ya8YNa80a80Na81a81NMMa8Xa8XNa8Va8VNaRaRNMMN:rJbbj8:N9FmdaLcwfhLahcufghmbkkJbbbbJbbjZan:vanJbbbb9BEgRaxaBNa9Ja87Na9FMg8Va8VMMaBNa9Da85Na9IaBNa9GMg8Va8VMMa85Na9Ea87Na9Ka85Na9HMg8Va8VMMa87NaZMMM:lNaRaxa88Na9Ja8:Na9FMg8Va8VMMa88Na9Da89Na9Ia88Na9GMg8Va8VMMa89Na9Ea8:Na9Ka89Na9HMg8Va8VMMa8:NaZMMM:lNJbb;aZNJ:983:g81M9Emba8JaBUdwa8Ja85Udla8Ja87UdbkaCcefgCal9hmbkdnaambcbhaxdkcbhQindna8AaQfRbbTmbaHaQcdtgefydbaQ9hmba5aQfhhaXaefh8Ja8KaQcx2fhAa8PaQaa2cdtfh8McbhEincuhCdnahRbbc99fcFeGce0mbaQhCa8JydbgeaQSmba8PaEcdtgOfhLa8MaOfIdbhRaQhCinaChOcuhCdnaLaeaa2cdtfIdbaR9CmbaOcuSmbaOhCagaec8S2fIdyagaOc8S2fIdy9ETmbaehCkaXaecdtfydbgeaQ9hmbkka8PaEcdtfhLa8RaEcltfhKaQheinaLaeaa2cdtfJbbbbJbbjZagaeaCaCcuSEgOc8S2fIdygR:vaRJbbbb9BEaKaOaa2cltfgOIdwaAIdwNaOIdbaAIdbNaOIdlaAIdlNMMaOIdxMNUdbaXaecdtfydbgeaQ9hmbkaEcefgEaa9hmbkkaQcefgQal9hmbxdkkaambcbhakaiavaoarawaaala8Ka8Pazasayasc1efa5a8Aaqz:hjjjbkdnamcjjjjlGTmbazmbaYTmbabhecbhLina5aeydbgAfRbbc3thQaecwfgXydbhHcjjjj94hCdna8EaAcdtgEfydbaeclfgKydbgOSmbcjjjj94cba8FaOcdtfydbaASEhCkaeaQaCVaAVBdba5aOfRbbc3thacjjjj94hCcjjjj94hQdna8EaOcdtfydbaHSmbcjjjj94cba8FaHcdtfydbaOSEhQkaKaaaQVaOVBdba5aHfRbbc3thOdna8EaHcdtfydbaASmbcjjjj94cba8FaEfydbaHSEhCkaXaOaCVaHVBdbaecxfheaLcifgLaY6mbkkdnazTmbaYTmbaYheinabazabydbcdtfydbBdbabclfhbaecufgembkkdnaPTmbaPa9paU:rNUdbkdnasyd;8egHTmbaHcdtasc:Ceffc98fheinaeydbcbyd;C:L:cjbH:bjjjbbaec98fheaHcufgHmbkkascj;sbf8KjjjjbaYk;Yieouabydlhvabydbclfcbaicdtz:xjjjbhoadci9UhrdnadTmbdnalTmbaehwadhDinaoalawydbcdtfydbcdtfgqaqydbcefBdbawclfhwaDcufgDmbxdkkaehwadhDinaoawydbcdtfgqaqydbcefBdbawclfhwaDcufgDmbkkdnaiTmbcbhDaohwinawydbhqawaDBdbawclfhwaqaDfhDaicufgimbkkdnadci6mbinaecwfydbhwaeclfydbhDaeydbhidnalTmbalawcdtfydbhwalaDcdtfydbhDalaicdtfydbhikavaoaicdtfgqydbcitfaDBdbavaqydbcitfawBdlaqaqydbcefBdbavaoaDcdtfgqydbcitfawBdbavaqydbcitfaiBdlaqaqydbcefBdbavaoawcdtfgwydbcitfaiBdbavawydbcitfaDBdlawawydbcefBdbaecxfhearcufgrmbkkabydbcbBdbk:todDue99aicd4aifhrcehwinawgDcethwaDar6mbkcuaDcdtgraDcFFFFi0Ecbyd;y:L:cjbHjjjjbbhwaoaoyd9GgqcefBd9GaoaqcdtfawBdbawcFearz:xjjjbhkdnaiTmbalcd4hlaDcufhxcbhminamhDdnavTmbavamcdtfydbhDkcbadaDal2cdtfgDydlgwawcjjjj94SEgwcH4aw7c:F:b:DD2cbaDydbgwawcjjjj94SEgwcH4aw7c;D;O:B8J27cbaDydwgDaDcjjjj94SEgDcH4aD7c:3F;N8N27axGhwamcdthPdndndnavTmbakawcdtfgrydbgDcuSmeadavaPfydbal2cdtfgsIdbhzcehqinaqhrdnadavaDcdtfydbal2cdtfgqIdbaz9CmbaqIdlasIdl9CmbaqIdwasIdw9BmlkarcefhqakawarfaxGgwcdtfgrydbgDcu9hmbxdkkakawcdtfgrydbgDcuSmbadamal2cdtfgsIdbhzcehqinaqhrdnadaDal2cdtfgqIdbaz9CmbaqIdlasIdl9CmbaqIdwasIdw9BmikarcefhqakawarfaxGgwcdtfgrydbgDcu9hmbkkaramBdbamhDkabaPfaDBdbamcefgmai9hmbkkakcbyd;C:L:cjbH:bjjjbbaoaoyd9GcufBd9GdnaeTmbaiTmbcbhDaehwinawaDBdbawclfhwaiaDcefgD9hmbkcbhDaehwindnaDabydbgrSmbawaearcdtfgrydbBdbaraDBdbkabclfhbawclfhwaiaDcefgD9hmbkkk;:odvuv998Jjjjjbca9Rgocbyd1:G:cjbBdKaocb8Pdj:G:cjb83izaocbydN:G:cjbBdwaocb8Pd:m:G:cjb83ibdnadTmbaicd4hrdnabmbdnalTmbcbhwinaealawcdtfydbar2cdtfhDcbhiinaoczfaifgqaDaifIdbgkaqIdbgxaxak9EEUdbaoaifgqakaqIdbgxaxak9DEUdbaiclfgicx9hmbkawcefgwad9hmbxikkarcdthwcbhDincbhiinaoczfaifgqaeaifIdbgkaqIdbgxaxak9EEUdbaoaifgqakaqIdbgxaxak9DEUdbaiclfgicx9hmbkaeawfheaDcefgDad9hmbxdkkdnalTmbcbhwinabawcx2fgiaealawcdtfydbar2cdtfgDIdbUdbaiaDIdlUdlaiaDIdwUdwcbhiinaoczfaifgqaDaifIdbgkaqIdbgxaxak9EEUdbaoaifgqakaqIdbgxaxak9DEUdbaiclfgicx9hmbkawcefgwad9hmbxdkkarcdthlcbhwaehDinabawcx2fgiaeawar2cdtfgqIdbUdbaiaqIdlUdlaiaqIdwUdwcbhiinaoczfaifgqaDaifIdbgkaqIdbgxaxak9EEUdbaoaifgqakaqIdbgxaxak9DEUdbaiclfgicx9hmbkaDalfhDawcefgwad9hmbkkJbbbbaoIdbaoIdzgx:tgkakJbbbb9DEgkaoIdlaoIdCgm:tgPaPak9DEgkaoIdwaoIdKgP:tgsasak9DEhsdnabTmbadTmbJbbbbJbbjZas:vasJbbbb9BEhkinabakabIdbax:tNUdbabclfgoakaoIdbam:tNUdbabcwfgoakaoIdbaP:tNUdbabcxfhbadcufgdmbkkdnavTmbavaPUdwavamUdlavaxUdbkask:WlewudnaeTmbcbhvabhoinaoavBdbaoclfhoaeavcefgv9hmbkkdnaiTmbcbhrinadarcdtfhwcbhDinalawaDcdtgvyd:G:G:cjbcdtfydbcdtfydbhodnalawavfydbcdtfydbgqabaqcdtfgkydbgvSmbinakabavgqcdtfgxydbgvBdbaxhkaqav9hmbkkdnaoabaocdtfgkydbgvSmbinakabavgocdtfgxydbgvBdbaxhkaoav9hmbkkdnaqaoSmbabaqaoaqao0Ecdtfaqaoaqao6EBdbkaDcefgDci9hmbkarcifgrai6mbkkdnaembcbskcbhxindnalaxcdtgvfydbax9hmbaxhodnaxabavfgDydbgvSmbaDhqinaqabavgocdtfgkydbgvBdbakhqaoav9hmbkkaDaoBdbkaxcefgxae9hmbkcbhkabhvcbhoindndnaoalydbgq9hmbdnaoavydbgq9hmbavakBdbakcefhkxdkavabaqcdtfydbBdbxekavabaqcdtfydbBdbkalclfhlavclfhvaeaocefgo9hmbkakk;jiilud99euabcbaecltz:xjjjbhvdnalTmbadhoaihralhwinarcwfIdbhDarclfIdbhqavaoydbcltfgkarIdbakIdbMUdbakaqakIdlMUdlakaDakIdwMUdwakakIdxJbbjZMUdxaoclfhoarcxfhrawcufgwmbkkdnaeTmbavhkaehrinakcxfgoIdbhDaocbBdbakakIdbJbbbbJbbjZaD:vaDJbbbb9BEgDNUdbakclfgoaDaoIdbNUdbakcwfgoaDaoIdbNUdbakczfhkarcufgrmbkkdnalTmbinavadydbcltfgkaicwfIdbakIdw:tgDaDNaiIdbakIdb:tgDaDNaiclfIdbakIdl:tgDaDNMMgDakIdxgqaqaD9DEUdxadclfhdaicxfhialcufglmbkkdnaeTmbavcxfhkinabakIdbUdbakczfhkabclfhbaecufgembkkk:moerudnaoTmbaecd4hzdnavTmbaicd4hHavcdthOcbhAindnaPaAfRbbTmbaAhednaDTmbaDaAcdtfydbhekdnasTmbasaefRbbceGmekdnamaAfRbbcvSmbabaeaz2cdtfgiaraAcx2fgCIdbakNaxIdbMUdbaiaCIdlakNaxIdlMUdlaiaCIdwakNaxIdwMUdwkadaeaH2cdtfhXaqheawhiavhCinaXaeydbcdtgQfaiIdbalaQfIdb:vUdbaeclfheaiclfhiaCcufgCmbkkawaOfhwaAcefgAao9hmbxdkkdnasmbcbheaDhiindnaPaefRbbTmbaehCdnaDTmbaiydbhCkamaefRbbcvSmbabaCaz2cdtfgCarIdbakNaxIdbMUdbaCarclfIdbakNaxIdlMUdlaCarcwfIdbakNaxIdwMUdwkaiclfhiarcxfhraoaecefge9hmbxdkkdnaDTmbindnaPRbbTmbasaDydbgefRbbceGmbamRbbcvSmbabaeaz2cdtfgearIdbakNaxIdbMUdbaearclfIdbakNaxIdlMUdlaearcwfIdbakNaxIdwMUdwkaPcefhPaDclfhDamcefhmarcxfhraocufgombxdkkazcdthicbheindnaPaefRbbTmbasaefRbbceGmbamaefRbbcvSmbabarIdbakNaxIdbMUdbabclfarclfIdbakNaxIdlMUdbabcwfarcwfIdbakNaxIdwMUdbkarcxfhrabaifhbaoaecefge9hmbkkk8MbabaeadaialavcbcbcbcbcbaoarawaDz:bjjjbk8MbabaeadaialavaoarawaDaqakaxamaPz:bjjjbkRbababaeadaialavaoarawaDaqakaxcjjjjdVamz:bjjjbk:vgoque99due99duq998Jjjjjbc;Wb9Rgq8Kjjjjbcbhkaqcxfcbc;Kbz:xjjjb8Aaqcualcx2alc;v:Q;v:Qe0Ecbyd;y:L:cjbHjjjjbbgxBdxaqceBd2axaialavcbcbz:ejjjb8AaqcualcdtalcFFFFi0Egmcbyd;y:L:cjbHjjjjbbgiBdzaqcdBd2dndnJFF959eJbbjZawJbbjZawJbbjZ9DE:vawJ9VO:d869DEgw:lJbbb9p9DTmbaw:OhPxekcjjjj94hPkadci9Uhsarco9UhzdndnaombaPcd9imekdnalTmbaPcuf:YhwdnaoTmbcbhvaihHaxhOindndnaoavfRbbceGTmbavcjjjjlVhAxekdndnaOclfIdbawNJbbbZMgC:lJbbb9p9DTmbaC:OhAxekcjjjj94hAkaAcqthAdndnaOcwfIdbawNJbbbZMgC:lJbbb9p9DTmbaC:OhXxekcjjjj94hXkaAaXVhAdndnaOIdbawNJbbbZMgC:lJbbb9p9DTmbaC:OhXxekcjjjj94hXkaAaXcCtVhAkaHaABdbaHclfhHaOcxfhOalavcefgv9hmbxdkkaxhvaihOalhHindndnavIdbawNJbbbZMgC:lJbbb9p9DTmbaC:OhAxekcjjjj94hAkaAcCthAdndnavclfIdbawNJbbbZMgC:lJbbb9p9DTmbaC:OhXxekcjjjj94hXkaXcqtaAVhAdndnavcwfIdbawNJbbbZMgC:lJbbb9p9DTmbaC:OhXxekcjjjj94hXkaOaAaXVBdbavcxfhvaOclfhOaHcufgHmbkkadTmbcbhkaehvcbhOinakaiavclfydbcdtfydbgHaiavcwfydbcdtfydbgA9haiavydbcdtfydbgXaH9haXaA9hGGfhkavcxfhvaOcifgOad6mbkkarci9UhQdndnaz:Z:rJbbbZMgw:lJbbb9p9DTmbaw:Ohvxekcjjjj94hvkaQ:ZhLcbhKc:bwhzdninakaQ9pmeazaP9Rcd9imeavazcufgOavaO9iEaPcefavaP9kEhYdnalTmbaYcuf:YhwdnaoTmbcbhOaihHaxhvindndnaoaOfRbbceGTmbaOcjjjjlVhAxekdndnavclfIdbawNJbbbZMgC:lJbbb9p9DTmbaC:OhAxekcjjjj94hAkaAcqthAdndnavcwfIdbawNJbbbZMgC:lJbbb9p9DTmbaC:OhXxekcjjjj94hXkaAaXVhAdndnavIdbawNJbbbZMgC:lJbbb9p9DTmbaC:OhXxekcjjjj94hXkaAaXcCtVhAkaHaABdbaHclfhHavcxfhvalaOcefgO9hmbxdkkaxhvaihOalhHindndnavIdbawNJbbbZMgC:lJbbb9p9DTmbaC:OhAxekcjjjj94hAkaAcCthAdndnavclfIdbawNJbbbZMgC:lJbbb9p9DTmbaC:OhXxekcjjjj94hXkaXcqtaAVhAdndnavcwfIdbawNJbbbZMgC:lJbbb9p9DTmbaC:OhXxekcjjjj94hXkaOaAaXVBdbavcxfhvaOclfhOaHcufgHmbkkcbhOdnadTmbaehvcbhHinaOaiavclfydbcdtfydbgAaiavcwfydbcdtfydbgX9haiavydbcdtfydbgraA9haraX9hGGfhOavcxfhvaHcifgHad6mbkkdnas:ZgCaL:taY:Ygwaz:Y:tg8ANak:ZgEaO:Zg3:tNaEaL:tawaP:Y:tg5Na3aC:tNMg8EJbbbb9BmbaCaE:ta5a8Aa3aL:tNNNa8E:vawMhwkdndnaOaQ0mbaOhkaYhPxekaOhsaYhzkdndnaKcl0mbdnawJbbbZMgw:lJbbb9p9DTmbaw:Ohvxdkcjjjj94hvxekaPazfcd9ThvkaKcefgKcs9hmbkkdndndnakmbJbbjZhwcbhOcdhvaDmexdkalcd4alfhHcehOinaOgvcethOavaH6mbkaqcuavcdtavcFFFFi0Ecbyd;y:L:cjbHjjjjbbgYBdCaqciBd2aqamcbyd;y:L:cjbHjjjjbbgzBdKaqclBd2dnalTmbaPcuf:YhwdnaoTmbcbhOaihAaxhHindndnaoaOfRbbceGTmbaOcjjjjlVhXxekdndnaHclfIdbawNJbbbZMgC:lJbbb9p9DTmbaC:OhXxekcjjjj94hXkaXcqthXdndnaHcwfIdbawNJbbbZMgC:lJbbb9p9DTmbaC:Ohrxekcjjjj94hrkaXarVhXdndnaHIdbawNJbbbZMgC:lJbbb9p9DTmbaC:Ohrxekcjjjj94hrkaXarcCtVhXkaAaXBdbaAclfhAaHcxfhHalaOcefgO9hmbxdkkaxhOaihHalhAindndnaOIdbawNJbbbZMgC:lJbbb9p9DTmbaC:OhXxekcjjjj94hXkaXcCthXdndnaOclfIdbawNJbbbZMgC:lJbbb9p9DTmbaC:Ohrxekcjjjj94hrkarcqtaXVhXdndnaOcwfIdbawNJbbbZMgC:lJbbb9p9DTmbaC:Ohrxekcjjjj94hrkaHaXarVBdbaOcxfhOaHclfhHaAcufgAmbkkaqcuaYavazaialz:mjjjbgXc8S2gvaXc;D;O;f8U0Ecbyd;y:L:cjbHjjjjbbgiBd3aqcvBd2aicbavz:xjjjbhOdnadTmbcbhraehiinaxaiclfydbgocx2fgvIdbaxaiydbgPcx2fgHIdbg3:tgCaxaicwfydbgYcx2fgAIdlaHIdlg8A:tgwNavIdla8A:tgEaAIdba3:tg8EN:tgLaLNaEaAIdwaHIdwg5:tg8FNavIdwa5:tgEawN:tgwawNaEa8ENaCa8FN:tgCaCNMMg8E:rhEJbbnnJbbjZazaPcdtfydbgvazaocdtfydbgASavazaYcdtfydbgoSGgHEh8Fdna8EJbbbb9ETmbaLaE:vhLaCaE:vhCawaE:vhwkaOavc8S2fgvavIdbawa8FaE:rNgEawNNg8FMUdbavaCaEaCNgaNghavIdlMUdlavaLaEaLNg8ENggavIdwMUdwavawaaNgaavIdxMUdxava8EawNg8JavIdzMUdzavaCa8ENg8EavIdCMUdCavawaEaLa5Nawa3Na8AaCNMM:mg8ANg3NgwavIdKMUdKavaCa3NgCavId3MUd3avaLa3NgLavIdaMUdaava3a8ANg3avId8KMUd8KavaEavIdyMUdydnaHmbaOaAc8S2fgva8FavIdbMUdbavahavIdlMUdlavagavIdwMUdwavaaavIdxMUdxava8JavIdzMUdzava8EavIdCMUdCavawavIdKMUdKavaCavId3MUd3avaLavIdaMUdaava3avId8KMUd8KavaEavIdyMUdyaOaoc8S2fgva8FavIdbMUdbavahavIdlMUdlavagavIdwMUdwavaaavIdxMUdxava8JavIdzMUdzava8EavIdCMUdCavawavIdKMUdKavaCavId3MUd3avaLavIdaMUdaava3avId8KMUd8KavaEavIdyMUdykaicxfhiarcifgrad6mbkkcbhAaqcuaXcdtgvaXcFFFFi0Egicbyd;y:L:cjbHjjjjbbgHBdaaqcoBd2aqaicbyd;y:L:cjbHjjjjbbgiBd8KaqcrBd2aHcFeavz:xjjjbhPdnalTmbazhHinJbbbbJbbjZaOaHydbgrc8S2fgvIdygw:vawJbbbb9BEavIdwaxcwfIdbgwNavIdzaxIdbgCNavIdaMgLaLMMawNavIdlaxclfIdbgLNavIdCawNavId3MgwawMMaLNavIdbaCNavIdxaLNavIdKMgwawMMaCNavId8KMMM:lNhwdndnaParcdtgvfgrydbcuSmbaiavfIdbaw9ETmekaraABdbaiavfawUdbkaHclfhHaxcxfhxalaAcefgA9hmbkkdndnaXmbJbbbbhwxekJbbbbhwinaiIdbgCawawaC9DEhwaiclfhiaXcufgXmbkaw:rhwkakcd4akfhOcehiinaigvcethiavaO6mbkcbhOaqcuavcdtgiavcFFFFi0Ecbyd;y:L:cjbHjjjjbbgHBdyaHcFeaiz:xjjjbhXdnadTmbavcufhrcbhkcbhxindnazaeaxcdtfgvydbcdtfydbgiazavclfydbcdtfydbgOSmbaiazavcwfydbcdtfydbgvSmbaOavSmbaPavcdtfydbhAdndnaPaOcdtfydbgvaPaicdtfydbgi9pmbavaA9pmbaAhlaihoavhAxekdnaAai9pmbaAav9pmbaihlavhoxekavhlaAhoaihAkabakcx2fgvaABdbavcwfaoBdbavclfalBdbdnaXaoc:3F;N8N2alc:F:b:DD27aAc;D;O:B8J27arGgOcdtfgvydbgicuSmbcehHinaHhvdnabaicx2fgiydbaA9hmbaiydlal9hmbaiydwaoSmikavcefhHaXaOavfarGgOcdtfgvydbgicu9hmbkkavakBdbakcefhkkaxcifgxad6mbkakci2hOkcwhvaDTmekaDawUdbkavcdthvaqcxfc98fhiinaiavfydbcbyd;C:L:cjbH:bjjjbbavc98fgvmbkaqc;Wbf8KjjjjbaOk:0iewuabcFeaecdtz:xjjjbhbdnalmbcbskaecufhvdndnaiTmbcbhocbhrindndndnabaiarcdtgwfydbgDcm4aD7c:v;t;h;Ev2gecs4ae7avGgqcdtfgkydbgxcuSmbceheinaiaxcdtgxfydbaDSmdaqaefhxaecefheabaxavGgqcdtfgkydbgxcu9hmbkkakarBdbaoheaocefhoxekadaxfydbhekadawfaeBdbarcefgral9hmbxdkkcbhocbhDindnabaDcm4aD7c:v;t;h;Ev2gecs4ae7avGgqcdtfgkydbgxcuSmbaxaDSmbceheinabaqaefavGgqcdtfgkydbgxcuSmeaecefheaxaD9hmbkkdndnaxcu9hmbakaDBdbaoheaocefhoxekadaxcdtfydbhekadaDcdtfaeBdbaDcefgDal9hmbkkaok:3ldrue9:8Jjjjjbc;Wb9Rgr8Kjjjjbcbhwarcxfcbc;Kbz:xjjjb8AdnabaeSmbabaeadcdtz:wjjjb8AkarcualcdtalcFFFFi0EgDcbyd;y:L:cjbHjjjjbbgqBdxarceBd2aqcbaialavcbarcxfz:djjjbcualcx2alc;v:Q;v:Qe0Ecbyd;y:L:cjbHjjjjbbhkarcxfaryd2gxcdtfakBdbaraxcefgmBd2akaialavcbcbz:ejjjb8AarcxfamcdtfaDcbyd;y:L:cjbHjjjjbbgiBdbaraxcdfgvBd2arcxfavcdtfcuaialaeadaqz:fjjjbgecltaecjjjjiGEcbyd;y:L:cjbHjjjjbbgqBdbaqaeaiakalz:gjjjbaxcifhkdnadTmbaoaoNhocbhwabhlcbheindnaqaialydbgvcdtfydbcdtfIdbao9ETmbalclf8PdbhPabawcdtfgDavBdbaDclfaP83dbawcifhwkalcxfhlaecifgead6mbkkdnakTmbaxcdtarcxffcwfhlinalydbcbyd;C:L:cjbH:bjjjbbalc98fhlakcufgkmbkkarc;Wbf8Kjjjjbawk;lOoDud99oue99vuv998Jjjjjbc;Wb9Rgw8KjjjjbdndnarmbcbhDxekawcxfcbc;Kbz:xjjjb8Aawcuadcx2adc;v:Q;v:Qe0Ecbyd;y:L:cjbHjjjjbbgqBdxawceBd2aqaeadaicbcbz:ejjjb8AawcuadcdtadcFFFFi0Egkcbyd;y:L:cjbHjjjjbbgxBdzawcdBd2adcd4adfhecehiinaigmcethiamae6mbkcbhPawcuamcdtgsamcFFFFi0Ecbyd;y:L:cjbHjjjjbbgzBdCawciBd2dndnar:ZgH:rJbbbZMgO:lJbbb9p9DTmbaO:Ohixekcjjjj94hikamcufhAc:bwhCcbhXadhQcbhLinaiaCcufgeaiae9iEaPcefaiaP9kEhDdndnadTmbaDcuf:YhOaqhiaxheadhKindndnaiIdbaONJbbbZMgY:lJbbb9p9DTmbaY:Oh8Axekcjjjj94h8Aka8AcCth8AdndnaiclfIdbaONJbbbZMgY:lJbbb9p9DTmbaY:OhExekcjjjj94hEkaEcqta8AVh8AdndnaicwfIdbaONJbbbZMgY:lJbbb9p9DTmbaY:OhExekcjjjj94hEkaea8AaEVBdbaicxfhiaeclfheaKcufgKmbkazcFeasz:xjjjbh3cbh5cbh8Eindna3axa8Ecdtfydbg8Acm4a8A7c:v;t;h;Ev2gics4ai7aAGgKcdtfgEydbgecuSmbaea8ASmbcehiina3aKaifaAGgKcdtfgEydbgecuSmeaicefhiaea8A9hmbkkaEa8ABdba5aecuSfh5a8Ecefg8Ead9hmbxdkkazcFeasz:xjjjb8Acbh5kdnaQ:ZgYaH:taD:YgOaC:Y:tg8FNaX:Zgaa5:Zgh:tNaaaH:taOaP:Y:tggNahaY:tNMg8JJbbbb9BmbaYaa:taga8FahaH:tNNNa8J:vaOMhOkaPaDa5ar0geEhPaXa5aeEhXdna5arSmbaDaCaeEgCaP9Rcd9imbdndnaLcl0mbdnaOJbbbZMgO:lJbbb9p9DTmbaO:Ohixdkcjjjj94hixekaPaCfcd9Thika5aQaeEhQaLcefgLcs9hmekkdndnaXmbcihicbhDxekawakcbyd;y:L:cjbHjjjjbbg8ABdKawclBd2aPcuf:YhYdnadTmbaqhiaxheadhKindndnaiIdbaYNJbbbZMgO:lJbbb9p9DTmbaO:OhExekcjjjj94hEkaEcCthEdndnaiclfIdbaYNJbbbZMgO:lJbbb9p9DTmbaO:Oh3xekcjjjj94h3ka3cqtaEVhEdndnaicwfIdbaYNJbbbZMgO:lJbbb9p9DTmbaO:Oh3xekcjjjj94h3kaeaEa3VBdbaicxfhiaeclfheaKcufgKmbkkawcuazama8Aaxadz:mjjjbgDc32giaDc;j:KM;jb0Ecbyd;y:L:cjbHjjjjbbgeBd3awcvBd2aecbaiz:xjjjbh3avcd4hxdnadTmbdnalTmbaxcdth8Ea8AhEaqhealhKadhAina3aEydbc32fgiaeIdbaiIdbMUdbaiaeclfIdbaiIdlMUdlaiaecwfIdbaiIdwMUdwaiaKIdbaiIdxMUdxaiaKclfIdbaiIdzMUdzaiaKcwfIdbaiIdCMUdCaiaiIdKJbbjZMUdKaEclfhEaecxfheaKa8EfhKaAcufgAmbxdkka8AhKaqheadhEina3aKydbc32fgiaeIdbaiIdbMUdbaiaeclfIdbaiIdlMUdlaiaecwfIdbaiIdwMUdwaiaiIdxJbbbbMUdxaiaiIdzJbbbbMUdzaiaiIdCJbbbbMUdCaiaiIdKJbbjZMUdKaKclfhKaecxfheaEcufgEmbkkdnaDTmba3hiaDheinaiaiIdbJbbbbJbbjZaicKfIdbgO:vaOJbbbb9BEgONUdbaiclfgKaOaKIdbNUdbaicwfgKaOaKIdbNUdbaicxfgKaOaKIdbNUdbaiczfgKaOaKIdbNUdbaicCfgKaOaKIdbNUdbaic3fhiaecufgembkkcbhEawcuaDcdtgCaDcFFFFi0Egicbyd;y:L:cjbHjjjjbbgeBdaawcoBd2awaicbyd;y:L:cjbHjjjjbbg8EBd8KaecFeaCz:xjjjbh5dnadTmbaoJbbjZJbbjZaY:vaPceSENgOaONhYaxcdthxalheinaYaecN:H:cjbalEgKIdwa3a8AydbgAc32fgiIdC:tgOaONaKIdbaiIdx:tgOaONaKIdlaiIdz:tgOaONMMNaqcwfIdbaiIdw:tgOaONaqIdbaiIdb:tgOaONaqclfIdbaiIdl:tgOaONMMMhOdndna5aAcdtgifgKydbcuSmba8EaifIdbaO9ETmekaKaEBdba8EaifaOUdbka8Aclfh8AaqcxfhqaeaxfheadaEcefgE9hmbkkaba5aCz:wjjjb8Acrhikaicdthiawcxfc98fheinaeaifydbcbyd;C:L:cjbH:bjjjbbaic98fgimbkkawc;Wbf8KjjjjbaDk:Pdidui99ducbhi8Jjjjjbca9Rglcbyd1:G:cjbBdKalcb8Pdj:G:cjb83izalcbydN:G:cjbBdwalcb8Pd:m:G:cjb83ibdndnaembJbbjFhvJbbjFhoJbbjFhrxekadcd4cdthwincbhdinalczfadfgDabadfIdbgvaDIdbgoaoav9EEUdbaladfgDavaDIdbgoaoav9DEUdbadclfgdcx9hmbkabawfhbaicefgiae9hmbkalIdwalIdK:thralIdlalIdC:thoalIdbalIdz:thvkJbbbbavavJbbbb9DEgvaoaoav9DEgvararav9DEk:H8Modui99lud99Aus998Jjjjjbcji9RgD8KjjjjbcbhqaDcxfcbc;Kbz:xjjjb8AaDcbBdwaD9cb83ibaDcbyd;i:L:cjbBd1eaDcb8Pd;a:L:cjb83ijeaDcbyd;u:L:cjbBd94aDcb8Pd;m:L:cjb83i9WdndnavmbJbbjFhkJbbjFhxJbbjFhmxekaocd4cdthPalhsincbhzinaDcjefazfgHasazfIdbgkaHIdbgxaxak9EEUdbaDc;WbfazfgHakaHIdbgxaxak9DEUdbazclfgzcx9hmbkasaPfhsaqcefgqav9hmbkaDId94aDId1e:thmaDIdtaDId:ee:thxaDId9WaDIdje:thkkJbbbbhOdnar:YgAJq;x8J88MaA:vJbbbbakakJbbbb9DEgkaxaxak9DEgkamamak9DENgxJbbbb9Bmbarc9:f:Yax:vhOkaDcCfhCaDcxfcxfhXcbhzinaDazfaDcjefazfIdbgkaxaDc;WbfazfIdbak:t:tJbbb:;NMUdbazclfgzcx9hmbkcbhQaDarar2gLar2gzcbyd;y:L:cjbHjjjjbbgHBdxaDceBd2aHcbazz:xjjjbgKcbcbadaialaoaraOaDawz:rjjjbcdhYaDcuaLcdtaLcFFFFi0Eg8Acbyd;y:L:cjbHjjjjbbgEBdzaDcdBd2aDcjefcbarz:xjjjb8Acbh3dnaLTmbdnarcb9kmbaKhzaEhHaLhsincbh3aHcbcuazaDcjefarz:AjjjbEBdbazarfhzaHclfhHascufgsmbxdkkaKhPcbh3cbhvindndnaKavar2faDcjefarz:AjjjbTmbcbhHaPhzarhsinazaHazRbbgqfgHcbaqE86bbazcefhzascufgsmbkaEavcdtfa3BdbaHa3fh3xekaEavcdtfcuBdbkaParfhPavcefgvaL9hmbkkdnabTmbaDcua3cotgza3cFFF8F0Ecbyd;y:L:cjbHjjjjbbgQBdCcihYaDciBd2aQcbazz:xjjjb8AaXhCkdnawceGmbaCa8Acbyd;y:L:cjbHjjjjbbg5BdbaDaYcefgzBd2aDcxfazcdtfaLcbyd;y:L:cjbHjjjjbbgzBdbaDaYcdfgYBd2azcbaLz:xjjjbh8EarcufhXdnarci9imbarc9:fhCararcef2aKfcefh8Aceh8Fina8Far2hPa8AhvcehqindnaEaqaPfcdtfydbcuSmbavhzaChHinazazRbbgscuasE86bbazcefhzaHcufgHmbkkavarfhvaqcefgqaX9hmbka8AaLfh8Aa8Fcefg8FaX9hmbkkarce9imbcbh8Acbhqcbhvina8EaqfhscbhzindnasazfgHRbbmbaHce86bba5a8AcdtfaqazfBdba8Acefh8Akarazcefgz9hmbkaqarfhqavcefgvar9hmbka8ATmbaKcefhaaKc9:fhharc9:fhgarci9ih8Jina8Ea5a8Acufg8Acdtfydbgvfcb86bbavar2hPdna8JmbaEavcdtfydbcuSmbaKaPfhHaghqindnaHcefgzRbbgscFe9hmbaHRbbmbcbhskazas86bbazhHaqcufgqmbkaharavcef2fhzaXhsindnazRbbgHcFe9hmbazcefRbbmbcbhHkazaH86bbazcufhzascufgsce9kmbkkaaaPfh8Kavavar9Ug8Lar29Rh8FcbhCindnaCceScuaCEa8Ffgzce9imbazaX9ombcuaCciSaCcdSEa8LfgHce9imbaHaX9ombaEaHar2azfg8McdtfydbcuSmba8Jmbaaa8Mar2fhzcbhqa8KhsaghvinazazRbbgHcbaHaHcFeSEasRbbEgP86bbascefhsazcefhzaPaH7aqVhqavcufgvmbkaqcFeGTmba8Ea8MfgzRbbmbazce86bba5a8Acdtfa8MBdba8Acefh8AkaCcefgCcl9hmbka8AmbkkdnaQTmbaKaEaQadaialaoaraOaDawz:rjjjba3TmbJbbjZaO:vhkawcjjjjlGhPdnawcdGTmbJbbnnaOaON:vh8NakJbbbZNhyaQhzinazczfgsIdbg8PazcCfIdbgx:vhmazcxfgqIdbgIax:vhAazcwfgvIdbg8Rax:vh8SakazydbgHcFrG:ZNhRakaHcq4cFrG:ZNh8UakaHcC4cFrG:ZNh8VdnaxJ:p;c;188Ng8WazcKfIdbMg8X:laxJ:983:g81Ngx9ETmba8Wazc3fIdbMazc8KfIdbg8Ya8Ya8X:vg8YN:tg8Z:lax9ETmba8WazcafIdbMazcyfIdbg8Wa8Wa8X:vg80N:tazc8SfIdba8Wa8YN:tg8Wa8Wa8Z:vg8WN:tg81:lax9ETmba8PJ:p;c;188NazcUfIdb:ta80a8RJ:p;c;188Nazc8WfIdb:tg8PN:ta8WaIJ:p;c;188Nazc80fIdb:ta8Ya8PN:tgIN:ta81:vgxam:tg8Ra8RNa8Pa8X:va8YaIa8Z:va8WaxN:tg8XN:ta80axN:tg8Wa8S:tg8Ya8YNa8XaA:tg8Ya8YNMMa8N9DTmbaxaRaxaR9EEgxakaRMgmaxam9DEhma8Xa8Ua8Xa8U9EEgxaka8UMgAaxaA9DEhAa8Wa8Va8Wa8V9EEgxaka8VMg8Saxa8S9DEh8SkdnaPTmbayaRMhmaya8UMhAaya8VMh8SkasamUdbaqaAUdbava8SUdbazc;abfhza3cufg3mbxdkkdnaPTmbakJbbbZNhxaQhzinazczfaxakazydbgHcFrG:ZNMUdbazcxfaxakaHcq4cFrG:ZNMUdbazcwfaxakaHcC4cFrG:ZNMUdbazc;abfhza3cufg3mbxdkkaQcCfhzinazc98fgHaHIdbazIdbgk:vUdbazc94fgHaHIdbak:vUdbazctfgHaHIdbak:vUdbazc;abfhza3cufg3mbkkcbhsdndnarcd9imbarcufh3aEarcdtfhadnabmbaKcefg8Mararcefgz2fh8JaKazfhba8MaLfh8Ecbhscbh8Kina8Kar2h8La8Mheabh8Aa8Eh8Fa8Jh5cbhXindnaEaXa8LfgqcdtgzfgHclfydbaHydbGaaazfgzydbGazclfydbGcuSmbclcbaKaqar2fgzarfRbbEazRbbcb9hVczcbazaLfgzRbbEVc;abcbazarfRbbEVhPaehza8AhHa8Fhqa5hva3hQindnaPclcbaHRbbEazRbbcb9hVczcbaqRbbEVc;abcbavRbbEVgPcetVgCTmbaCcFeSmbasaCRb;W;p:cjbfhskazcefhzaHcefhHaqcefhqavcefhvaQcufgQmbkkaearfhea8Aarfh8Aa8Farfh8Fa5arfh5aXcefgXa39hmbka8MaLfh8MabaLfhba8EaLfh8Ea8JaLfh8Ja8Kcefg8Ka39hmbxdkkJbbjZaO:vgkakJk;x8J88NNh8RawcdGh8EaDIdwhkaDIdlhxaDIdbhmcbhscbhPinaPar2h8KcbhvindnaEava8KfgqcdtgzfgHclfydbaHydbGaaazfgzydbGazclfydbGcuSmbcbh8AclcbaKaqar2fgYarfRbbEaYRbbcb9hVczcbaYaLfg8JRbbEVc;abcba8JarfRbbEVh8Lindna8LclcbaYa8Ag8Mcefg8AfgzarfRbbEazRbbcb9hVczcba8Ja8AfgzRbbEVc;abcbazarfRbbEVg8LcetVgCTmbaCcFeSmbcbhqdndndnaCRb;W;n:cjbcufPdebdka8ETmeaCcC2gz8Ve;W:L:cjbcltaz8Ve;Y:L:cjbcsGVh8FaKa8Mfh5cxhzaDcjefhHinaHaQaEa8Faz4gqce4ceGavfaqcd4ceGaPfar2fgXcdtfydbcotfa5aqceGfaXar2fRbbcotfcnfBdbaHclfhHazc98fgzc989hmbkaDydjegzIdyaDyd:megHIdyMaDyd:eegqIdyaDyd1egXIdyMMg8XaqIdwaXIdwMJbbbZNgANazIdUaHIdUMaqIdUaXIdUMMg8WMg8Sa8SMazIdaaHIdaMaqIdaaXIdaMMg8YaqIdzaXIdzMJbbbZNg8SNMa8SNazId8SaHId8SMaqId8SaXId8SMMgRa8SNazId80aHId80MaqId80aXId80MMg8UMg8Sa8SMazId3aHId3MaqId3aXId3MMg8VaqIdxaXIdxMJbbbZNg8SNMa8SNazId8KaHId8KMaqId8KaXId8KMMg8Za8SNazId8WaHId8WMaqId8WaXId8WMMg80Mg8Sa8SMazIdKaHIdKMaqIdKaXIdKMMgyaANMaANazId88aHId88MaqId88aXId88MMg8PMMM:lgIa8RazIdCaHIdCMaqIdCaXIdCMMN9Ea8XazIdwaHIdwMJbbbZNgANa8WMg8Sa8SMa8YazIdzaHIdzMJbbbZNg8SNMa8SNaRa8SNa8UMg8Sa8SMa8VazIdxaHIdxMJbbbZNg8SNMa8SNa8Za8SNa80Mg8Sa8SMayaANMaANa8PMMM:laIJ;d;1UZN9DGhqxekaKa8Mfh8FcbhzcrhHindnaCaz4ceGTmba8FazceGfazce4ceGavfazcd4aPfar2fgqar2fRbbgXcFeSmbaQaEaqcdtfydbcotfaXcotfc9efRbbaH4ceGTmbcbhqxdkaHcufhHcehqazcefgzcw9hmbkkaCcC2aqcq2fgH8Ve;W:L:cjbgzTmbaHc;Y:L:cjbfhqaKa8MfhCabasc8K2fhHindnasae9pmbaHaQaEazcD4ceGavfazcq4ceGaPfar2fgXcdtfydbcotfaCazcw4ceGfaXar2fRbbcotfgXc9ifIdbamMUdbaHclfaXc9mfIdbaxMUdbaHcwfaXc9qfIdbakMUdbaHcxfamaQaEazcv4ceGavfazco4ceGaPfar2fgXcdtfydbcotfaCazcl4ceGfaXar2fRbbcotfgXc9ifIdbMUdbaHczfaxaXc9mfIdbMUdbaHcCfakaXc9qfIdbMUdbaHcKfamaQaEazce4ceGavfazcd4ceGaPfar2fgXcdtfydbcotfaCazceGfaXar2fRbbcotfgzc9ifIdbMUdbaHc3faxazc9mfIdbMUdbaHcafakazc9qfIdbMUdbkaHc8KfhHascefhsaq8Vebhzaqcdfhqazmbkka8Aa39hmbkkavcefgva39hmbkaPcefgPa39hmbkaDyd2gYTmekaYcdtaDcxffc98fhzinazydbcbyd;C:L:cjbH:bjjjbbazc98fhzaYcufgYmbkkaDcjif8Kjjjjbask;Kxmiue99due99euz99eui99eud99dud99oudnalTmbaocd4hkaqcdGhxarc99fhqarcethmawawMhPcbhsindndnawavaiascdtfgoclfydbak2cdtfgzIdwgHavaoydbak2cdtfgOIdwgA:tgCaCNazIdbgXaOIdbgQ:tgLaLNazIdlgKaOIdlgY:tg8Aa8ANMMgEavaocwfydbak2cdtfgoIdwg3aA:tg5a5NaoIdbg8EaQ:tg8Fa8FNaoIdlgaaY:tghahNMMggaEag9EEgEa3aH:tgHaHNa8EaX:tgHaHNaaaK:tgHaHNMMgHaEaH9EE:rNgHaHMgH:lJbbb9p9DTmbaH:Ohoxekcjjjj94hokdnaLahNa8Aa8FN:tgHaHNa8Aa5NaCahN:tgXaXNaCa8FNaLa5N:tgKaKNMMg3Jbbbb9BmbJbbjZhEdnaoceaoce9kEgoamaoam9iEg8Jcd9imbJbbjZa8J:Z:vhEkarcb9imbaAaDIdw:th8KaYaDIdl:th8LaQaDIdb:th8Ma8Jcba8Jcb9kEh8NdnadTmbaHJbbjZa3:rgA:vgQNg3aAa8Jcefa8Jcdf2:Y:vgANh8EaKaQNgKaANhyaXaQNgXaXaANNh8PcbhIina8Jcba8Jcb9kEcefh8RaEaI:ZNgQaCNa8KMhgaQa8ANa8LMh8SaQaLNa8MMhRcbhzindndnaPaEaz:ZNgQahNa8SMgYNgH:lJbbb9p9DTmbaH:OhOxekcjjjj94hOkaOce91goaqaoaq6Eh8UdndnaPaQa5NagMgHNga:lJbbb9p9DTmbaa:Oh8Vxekcjjjj94h8Vka8Ua8Vce91goaqaoaq6Eg8Wcefar2fcefgoar2h8XdndnaPaQa8FNaRMgQNga:lJbbb9p9DTmbaa:Oh8Yxekcjjjj94h8Ykadaeaocdtfydbcotfaba8Yce91goaqaoaq6Eg8Zfa8XfcefRbbcotfgocnfa8Ucqta8ZcCtVa8WVBdbaoc9efg8Ua8URbbcea8YceGaOcetcdGVa8VcdtclGVtV86bbaoc9ifgOaQaANaOIdbMUdbaoc9mfgOaYaANaOIdbMUdbaoc9qfgOaHaANaOIdbMUdbaoc9ufgOaAaOIdbMUdbdnaxTmbaoc9yfgOa8PaOIdbMUdbaoc9CfgOaKayNaOIdbMUdbaoc9GfgOa3a8ENaOIdbMUdbaoc9KfgOaXayNaOIdbMUdbaoc9OfgOaXa8ENaOIdbMUdbaoc2fgOaKa8ENaOIdbMUdbaoc9WfgOaXaAa3aHNaXaQNaKaYNMMgY:mNgQNaOIdbMUdbaoctfgOaKaQNaOIdbMUdbaoc94fgOa3aQNaOIdbMUdbaoc98fgoaoIdbaYaQN:tUdbka8Razcefgz9hmbka8Jcufh8JaIa8NShoaIcefhIaoTmbxdkkcbh8Vina8Jcba8Jcb9kEcefh8UaEa8V:ZNgAaCNa8KMhYaAa8ANa8LMhHaAaLNa8MMhXcbhoindndnaPaEao:ZNgAahNaHMNgQ:lJbbb9p9DTmbaQ:Ohzxekcjjjj94hzkazce91gzaqazaq6EhzdndnaPaAa5NaYMNgQ:lJbbb9p9DTmbaQ:OhOxekcjjjj94hOkazaOce91gOaqaOaq6Ecefar2fcefar2hzdndnaPaAa8FNaXMNgA:lJbbb9p9DTmbaA:OhOxekcjjjj94hOkabaOce91gOaqaOaq6Efazfcefce86bba8Uaocefgo9hmbka8Jcufh8Ja8Va8NShoa8Vcefh8VaoTmbkkascifgsal6mbkkk:Nvezu8Jjjjjbcjd9Rgb8Kjjjjbcbheabcbcjdz:xjjjbhdc:W:H:cjbhbinabRbbgicC2glabcqf8Veb87e;4:L:cjbalabcdfgv8Peb83e;W:L:cjbaiabcefRbb86b;W;n:cjbadaifce86bbalavabcxfceaetc:F:d;avGEgi8Peb83e;6:L:cjbalai8Vew87e:c:M:cjbabcQfhbaecefgecK9hmbkcbhoinc;Y:L:cjbhrcbhvindnadavfgwRbbce9hmbavcC2c;W:L:cjbfhDcbhbcehqavc;W;n:cjbfhkinabcitc:G:H:cjbfhlcbhbcbheinaeavab4ceGalabfRbbtVheabcefgbcw9hmbkdnadaecFeGgxfgmRbbmbaxcC2c;W:L:cjbfhPcbhbcehsindnaDabcq2gif8VebgbTmbaraifheaPaifhiinaialabcl4csGfRbbcltalabcw4csGfRbbcwtValabcsGfRbbV87ebaicdfhiae8VebhbaecdfheabmbkkcehbasceGhecbhsaembkamce86bbaxakRbb86b;W;n:cjbkcehbaqceGhlcbhqalmbkawcd86bbkarcCfhravcefgvcjd9hmbkaocefgoci9hmbkcbhic;W:L:cjbhvincuhlavhbinalcefhlab8Vebheabcdfhbaembkaial86b;W;p:cjbavcCfhvaicefgicjd9hmbkadcjdf8Kjjjjbk9DeeuabcFeaicdtz:xjjjbhlcbhbdnadTmbindnalaeydbcdtfgiydbcu9hmbaiabBdbabcefhbkaeclfheadcufgdmbkkabk;Bidqui998Jjjjjbc;Wb9Rgl8Kjjjjbalcxfcbc;Kbz:xjjjb8Aadcd4adfhvcehoinaogrcethoarav6mbkalcuarcdtgoarcFFFFi0Ecbyd;y:L:cjbHjjjjbbgvBdxavcFeaoz:xjjjbhwdnadTmbaicd4hDarcufhqcbhkindndnawcbaeakaD2cdtfgrydlgiaicjjjj94SEgocH4ao7c:F:b:DD2cbarydbgxaxcjjjj94SEgocH4ao7c;D;O:B8J27cbarydwgmamcjjjj94SEgrcH4ar7c:3F;N8N27aqGgvcdtfgrydbgocuSmbam::hPai::hsax::hzcehiinaihrdnaeaoaD2cdtfgiIdbaz9CmbaiIdlas9CmbaiIdwaP9BmikarcefhiawavarfaqGgvcdtfgrydbgocu9hmbkkarakBdbakhokabakcdtfaoBdbakcefgkad9hmbkkalydxcbyd;C:L:cjbH:bjjjbbalc;Wbf8Kjjjjbk9teiucbcbyd;G:L:cjbgeabcifc98GfgbBd;G:L:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaeczfheaiczfhiadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabk9teiucbcbyd;G:L:cjbgeabcrfc94GfgbBd;G:L:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikTeeucbabcbyd;G:L:cjbge9Rcifc98GaefgbBd;G:L:cjbdnabZbcztge9nmbabae9RcFFifcz4nb8Akk6eiucbhidnadTmbdninabRbbglaeRbbgv9hmeaecefheabcefhbadcufgdmbxdkkalav9Rhikaikk;0vdbcj:Gdk;yvFFuuFFuuFFuuFFuFFFuFFFuFbbbbbbbbebbbdbbbbbbbebbbebbbdbbbbbbbbbbbeeeeeebebbeebbebbebbbeeebbbbebbbbbbbbbbbbbbbbbbbeeeeeeebebbbeeebbeebbbbbebbbbbebebbbbbbbbbbbbbbbdiorbelvlbodveribbbbbbbbbbbbbbbbbbbbbbebbbbbbbbbbbbbbbbbbbbbibbbbbbbbbbbbbbbbbbbbbobbbbbbbbbbbbbbbbbbbbbrbaebbbbbbbbbbbbbbbbbbsd8We8YbbbbbbbhiaebbbbbbQe8Ke9cebbbbbbbbbbbbbbbbLb8KebbbbbbbbbbbbbbbbbbKbbbbbbbbbbbbbbbbbbbbbYeJbilbbbbbbbbbbbbbbbbEe80e8WlbbbbbbzlAbbbbbbb5eJdnibbbbbbai8Kbbbbbbb8Ee9ce8Ylcibbbb8Yebbbbbbbb8FdOlAdbbbbbb80e8Ylbbbbbb88eTi8KiJv8Jlbbbbbbbbbbbb89e9td8Kv9qibbbbndlvaibbbbZd8Li8KvbbbbbbJdTibbbbbb9Pe81b9GvoiBvbbbbbbbbbbbb9Re9JbvoWibbbbvibbbbbbbb9VeWi9Gvbbbbbb8WvBbbbbbbb9:b9ceBvbbbbbbbbbbbbbbbbubWibbbbbbbbbbbbbbbbbb;Wd9hvSrbbbbbbWl9NvbbbbbbFbbbbbbbbbbbbbbbbbbbbbFFuuFFuuFFuuFFuFFFuFFFuFbc;y:Ldkxebbbdbbb;W:Obb",e=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var t,a=WebAssembly.instantiate(n(s),{}).then(function(m){t=m.instance,t.exports.__wasm_call_ctors()});function n(m){for(var M=new Uint8Array(m.length),A=0;A<m.length;++A){var T=m.charCodeAt(A);M[A]=T>96?T-97:T>64?T-39:T+4}for(var R=0,A=0;A<m.length;++A)M[R++]=M[A]<60?e[M[A]]:(M[A]-60)*64+M[++A];return M.buffer.slice(0,R)}function i(m){if(!m)throw new Error("Assertion failed")}function r(m){return new Uint8Array(m.buffer,m.byteOffset,m.byteLength)}function o(m,M,A,T){var R=t.exports.sbrk,_=R(A*4),y=R(A*T*4),C=new Uint8Array(t.exports.memory.buffer);C.set(r(M),y),m(_,y,A,T*4),C=new Uint8Array(t.exports.memory.buffer);var O=new Uint32Array(A);return new Uint8Array(O.buffer).set(C.subarray(_,_+A*4)),R(_-R(0)),O}function c(m,M,A){var T=t.exports.sbrk,R=T(M.length*4),_=T(A*4),y=new Uint8Array(t.exports.memory.buffer),C=r(M);y.set(C,R);var O=m(_,R,M.length,A);y=new Uint8Array(t.exports.memory.buffer);var P=new Uint32Array(A);new Uint8Array(P.buffer).set(y.subarray(_,_+A*4)),T(R-T(0));for(var U=0;U<M.length;++U)M[U]=P[M[U]];return[P,O]}function h(m){for(var M=0,A=0;A<m.length;++A){var T=m[A];M=M<T?T:M}return M}function l(m,M,A,T,R,_,y,C,O){var P=t.exports.sbrk,U=P(4),q=P(A*4),B=P(R*_),V=P(A*4),z=new Uint8Array(t.exports.memory.buffer);z.set(r(T),B),z.set(r(M),V);var Z=m(q,V,A,B,R,_,y,C,O,U);z=new Uint8Array(t.exports.memory.buffer);var ae=new Uint32Array(Z);r(ae).set(z.subarray(q,q+Z*4));var le=new Float32Array(1);return r(le).set(z.subarray(U,U+4)),P(U-P(0)),[ae,le[0]]}function d(m,M,A,T,R,_,y,C,O,P,U,q,B){var V=t.exports.sbrk,z=V(4),Z=V(A*4),ae=V(R*_),le=V(R*C),Ae=V(O.length*4),Be=V(A*4),W=P?V(R):0,$=new Uint8Array(t.exports.memory.buffer);$.set(r(T),ae),$.set(r(y),le),$.set(r(O),Ae),$.set(r(M),Be),P&&$.set(r(P),W);var de=m(Z,Be,A,ae,R,_,le,C,Ae,O.length,W,U,q,B,z);$=new Uint8Array(t.exports.memory.buffer);var ie=new Uint32Array(de);r(ie).set($.subarray(Z,Z+de*4));var Ee=new Float32Array(1);return r(Ee).set($.subarray(z,z+4)),V(z-V(0)),[ie,Ee[0]]}function u(m,M,A,T,R,_,y,C,O,P,U,q,B){var V=t.exports.sbrk,z=V(4),Z=V(R*_),ae=V(R*C),le=V(O.length*4),Ae=V(A*4),Be=P?V(R):0,W=new Uint8Array(t.exports.memory.buffer);W.set(r(T),Z),W.set(r(y),ae),W.set(r(O),le),W.set(r(M),Ae),P&&W.set(r(P),Be);var $=m(Ae,A,Z,R,_,ae,C,le,O.length,Be,U,q,B,z);W=new Uint8Array(t.exports.memory.buffer),r(M).set(W.subarray(Ae,Ae+$*4)),r(T).set(W.subarray(Z,Z+R*_)),r(y).set(W.subarray(ae,ae+R*C));var de=new Float32Array(1);return r(de).set(W.subarray(z,z+4)),V(z-V(0)),[$,de[0]]}function p(m,M,A,T){var R=t.exports.sbrk,_=R(A*T),y=new Uint8Array(t.exports.memory.buffer);y.set(r(M),_);var C=m(_,A,T);return R(_-R(0)),C}function x(m,M,A,T,R,_,y,C){var O=t.exports.sbrk,P=O(C*4),U=O(A*T),q=R?O(A*_):0,B=new Uint8Array(t.exports.memory.buffer);B.set(r(M),U),R&&B.set(r(R),q);var V=m(P,U,A,T,q,_,y,C);B=new Uint8Array(t.exports.memory.buffer);var z=new Uint32Array(V);return r(z).set(B.subarray(P,P+V*4)),O(P-O(0)),z}function g(m,M,A,T,R,_,y,C,O){var P=t.exports.sbrk,U=P(4),q=P(A*4),B=P(R*_),V=P(A*4),z=y?P(R):0,Z=new Uint8Array(t.exports.memory.buffer);Z.set(r(T),B),Z.set(r(M),V),y&&Z.set(r(y),z);var ae=m(q,V,A,B,R,_,z,C,O,U);Z=new Uint8Array(t.exports.memory.buffer);var le=new Uint32Array(ae);r(le).set(Z.subarray(q,q+ae*4));var Ae=new Float32Array(1);return r(Ae).set(Z.subarray(U,U+4)),P(U-P(0)),[le,Ae[0]]}function b(m,M,A,T,R,_,y){var C=t.exports.sbrk,O=C(A*4),P=C(R*_),U=C(A*4),q=new Uint8Array(t.exports.memory.buffer);q.set(r(T),P),q.set(r(M),U);var B=m(O,U,A,P,R,_,y);q=new Uint8Array(t.exports.memory.buffer);var V=new Uint32Array(B);return r(V).set(q.subarray(O,O+B*4)),C(O-C(0)),V}function f(m,M,A,T,R,_){var y=t.exports.sbrk,C=y(A.byteLength),O=y(M.byteLength),P=new Uint8Array(t.exports.memory.buffer);P.set(r(A),C),P.set(r(M),O);var U=A.byteLength/T,q=m(0,0,O,M.length,C,U,T,R,_),B=y(q*9*4),V=m(B,q,O,M.length,C,U,T,R,_);i(V<=q),P=new Uint8Array(t.exports.memory.buffer);var z=new Float32Array(V*9);return r(z).set(P.subarray(B,B+z.byteLength)),y(C-y(0)),z}var v={LockBorder:1,Sparse:2,ErrorAbsolute:4,Prune:8,Regularize:16,Permissive:32,RegularizeLight:64,PreserveFolds:128,ErrorClamped:256,_InternalDebug:1<<30},w={Shell:1,Solve:2,Thicken:0,_InternalDebug:1<<30};return{ready:a,supported:!0,compactMesh:function(m){i(m instanceof Uint32Array||m instanceof Int32Array||m instanceof Uint16Array||m instanceof Int16Array),i(m.length%3==0);var M=m.BYTES_PER_ELEMENT==4?m:new Uint32Array(m),A=c(t.exports.meshopt_optimizeVertexFetchRemap,M,h(m)+1);if(m!==M)for(var T=0;T<M.length;++T)m[T]=M[T];return A},generatePositionRemap:function(m,M){return i(m instanceof Float32Array),i(m.length%M==0),i(M>=3),o(t.exports.meshopt_generatePositionRemap,m,m.length/M,M)},simplify:function(m,M,A,T,R,_){i(m instanceof Uint32Array||m instanceof Int32Array||m instanceof Uint16Array||m instanceof Int16Array),i(m.length%3==0),i(M instanceof Float32Array),i(M.length%A==0),i(A>=3),i(T>=0&&T<=m.length),i(T%3==0),i(R>=0);for(var y=0,C=0;C<(_?_.length:0);++C)i(_[C]in v),y|=v[_[C]];var O=m.BYTES_PER_ELEMENT==4?m:new Uint32Array(m),P=l(t.exports.meshopt_simplify,O,m.length,M,M.length/A,A*4,T,R,y);return P[0]=m instanceof Uint32Array?P[0]:new m.constructor(P[0]),P},simplifyWithAttributes:function(m,M,A,T,R,_,y,C,O,P){i(m instanceof Uint32Array||m instanceof Int32Array||m instanceof Uint16Array||m instanceof Int16Array),i(m.length%3==0),i(M instanceof Float32Array),i(M.length%A==0),i(A>=3),i(T instanceof Float32Array),i(T.length==R*(M.length/A)),i(R>=0),i(y==null||y instanceof Uint8Array),i(y==null||y.length==M.length/A),i(C>=0&&C<=m.length),i(C%3==0),i(O>=0),i(Array.isArray(_)),i(R>=_.length),i(_.length<=32);for(var U=0;U<_.length;++U)i(_[U]>=0);for(var q=0,U=0;U<(P?P.length:0);++U)i(P[U]in v),q|=v[P[U]];var B=m.BYTES_PER_ELEMENT==4?m:new Uint32Array(m),V=d(t.exports.meshopt_simplifyWithAttributes,B,m.length,M,M.length/A,A*4,T,R*4,new Float32Array(_),y,C,O,q);return V[0]=m instanceof Uint32Array?V[0]:new m.constructor(V[0]),V},simplifyWithUpdate:function(m,M,A,T,R,_,y,C,O,P){i(m instanceof Uint32Array||m instanceof Int32Array||m instanceof Uint16Array||m instanceof Int16Array),i(m.length%3==0),i(M instanceof Float32Array),i(M.length%A==0),i(A>=3),i(T instanceof Float32Array),i(T.length==R*(M.length/A)),i(R>=0),i(y==null||y instanceof Uint8Array),i(y==null||y.length==M.length/A),i(C>=0&&C<=m.length),i(C%3==0),i(O>=0),i(Array.isArray(_)),i(R>=_.length),i(_.length<=32);for(var U=0;U<_.length;++U)i(_[U]>=0);for(var q=0,U=0;U<(P?P.length:0);++U)i(P[U]in v),q|=v[P[U]];var B=m.BYTES_PER_ELEMENT==4?m:new Uint32Array(m),V=u(t.exports.meshopt_simplifyWithUpdate,B,m.length,M,M.length/A,A*4,T,R*4,new Float32Array(_),y,C,O,q);if(m!==B)for(var U=0;U<V[0];++U)m[U]=B[U];return V},getScale:function(m,M){return i(m instanceof Float32Array),i(m.length%M==0),i(M>=3),p(t.exports.meshopt_simplifyScale,m,m.length/M,M*4)},simplifyPoints:function(m,M,A,T,R,_){return i(m instanceof Float32Array),i(m.length%M==0),i(M>=3),i(A>=0&&A<=m.length/M),T?(i(T instanceof Float32Array),i(T.length%R==0),i(R>=3),i(m.length/M==T.length/R),x(t.exports.meshopt_simplifyPoints,m,m.length/M,M*4,T,R*4,_||0,A)):x(t.exports.meshopt_simplifyPoints,m,m.length/M,M*4,void 0,0,0,A)},simplifySloppy:function(m,M,A,T,R,_){i(m instanceof Uint32Array||m instanceof Int32Array||m instanceof Uint16Array||m instanceof Int16Array),i(m.length%3==0),i(M instanceof Float32Array),i(M.length%A==0),i(A>=3),i(T==null||T instanceof Uint8Array),i(T==null||T.length==M.length/A),i(R>=0&&R<=m.length),i(R%3==0),i(_>=0);var y=m.BYTES_PER_ELEMENT==4?m:new Uint32Array(m),C=g(t.exports.meshopt_simplifySloppy,y,m.length,M,M.length/A,A*4,T,R,_);return C[0]=m instanceof Uint32Array?C[0]:new m.constructor(C[0]),C},simplifyPrune:function(m,M,A,T){i(m instanceof Uint32Array||m instanceof Int32Array||m instanceof Uint16Array||m instanceof Int16Array),i(m.length%3==0),i(M instanceof Float32Array),i(M.length%A==0),i(A>=3),i(T>=0);var R=m.BYTES_PER_ELEMENT==4?m:new Uint32Array(m),_=b(t.exports.meshopt_simplifyPrune,R,m.length,M,M.length/A,A*4,T);return _=m instanceof Uint32Array?_:new m.constructor(_),_},remesh:function(m,M,A,T,R){i(m instanceof Uint32Array||m instanceof Int32Array||m instanceof Uint16Array||m instanceof Int16Array),i(m.length%3==0),i(M instanceof Float32Array),i(M.length%A==0),i(A>=3),i(T>=4&&T<=256);for(var _=0,y=0;y<(R?R.length:0);++y)i(R[y]in w),_|=w[R[y]];var C=m.BYTES_PER_ELEMENT==4?m:new Uint32Array(m);return f(t.exports.meshopt_remesh,C,M,A*4,T,_)}}})();var T_=(function(){var s="b9H79Tebbbe:neP9Geueu9Geub9Gbb9Giuuueu9Gmuuuuuuuuuuu9999eu9Gouuuuuueu9Gruuuuuuub9Gxuuuuuuuuuuuueu9Gxuuuuuuuuuuu99eu9GPuuuuuuuuuuuuu99b9Gouuuuuub9Gwuuuuuuuub9Gvuuuuub9GluuuubiQXdilvorwDqokoqxmbiibeilve9Weiiviebeoweuecj:Gdkr;Zeqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9I919P29K9nW79O2Wt79c9V919U9KbeY9TW79O9V9Wt9F9I919P29K9nW79O2Wt7S2W94bd39TW79O9V9Wt9F9I919P29K9nW79O2Wt79t9W9Ht9P9H2bo39TW79O9V9Wt9F9J9V9T9W91tWJ2917tWV9c9V919U9K7bw39TW79O9V9Wt9F9J9V9T9W91tW9nW79O2Wt9c9V919U9K7bkE9TW79O9V9Wt9F9J9V9T9W91tW9t9W9OWVW9c9V919U9K7bxL9TW79O9V9Wt9F9V9Wt9P9T9P96W9nW79O2WtbPl79IV9RbsDwebcekdOAq;W:leXdbkIbabaec9:fgefcufae9Ugeabci9Uadfcufad9Ugbaeab0Ek:88JDPue99eux99due99euo99iu8Jjjjjbc:WD9Rgm8KjjjjbdndnalmbcbhPxekamc:Cwfcbc;Kbz:rjjjb8AcuaocdtgsaocFFFFi0Ehzcbyd;0:G:cjbhHdndnalcb9imbaoal9nmbamazaHHjjjjbbgHBd:CwamceBd;8wamazcbyd;0:G:cjbHjjjjbbgOBd:GwamcdBd;8wamcualcdtalcFFFFi0Ecbyd;0:G:cjbHjjjjbbgABd:KwamciBd;8waihzalhsinaHazydbcdtfcbBdbazclfhzascufgsmbkaihzalhsinaHazydbcdtfgCaCydbcefBdbazclfhzascufgsmbkaihzalhCcbhXindnaHazydbcdtgQfgsydbcb9imbaOaQfaXBdbasasydbgQcjjjj94VBdbaQaXfhXkazclfhzaCcufgCmbkalci9UhLdnalci6mbcbhzaihsinascwfydbhCasclfydbhXaOasydbcdtfgQaQydbgQcefBdbaAaQcdtfazBdbaOaXcdtfgXaXydbgXcefBdbaAaXcdtfazBdbaOaCcdtfgCaCydbgCcefBdbaAaCcdtfazBdbascxfhsaLazcefgz9hmbkkaihzalhsindnaHazydbcdtgCfgXydbgQcu9kmbaXaQcFFFFrGgQBdbaOaCfgCaCydbaQ9RBdbkazclfhzascufgsmbxdkkamazaHHjjjjbbgHBd:CwamceBd;8wamazcbyd;0:G:cjbHjjjjbbgOBd:GwamcdBd;8wamcualcdtalcFFFFi0Ecbyd;0:G:cjbHjjjjbbgABd:KwamciBd;8waHcbasz:rjjjbhXaihzalhsinaXazydbcdtfgCaCydbcefBdbazclfhzascufgsmbkalci9UhLdnaoTmbcbhzaOhsaXhCaohQinasazBdbasclfhsaCydbazfhzaCclfhCaQcufgQmbkkdnalci6mbcbhzaihsinascwfydbhCasclfydbhQaOasydbcdtfgKaKydbgKcefBdbaAaKcdtfazBdbaOaQcdtfgQaQydbgQcefBdbaAaQcdtfazBdbaOaCcdtfgCaCydbgCcefBdbaAaCcdtfazBdbascxfhsaLazcefgz9hmbkkaoTmbcbhzaohsinaOazfgCaCydbaXazfydb9RBdbazclfhzascufgsmbkkamaLcbyd;0:G:cjbHjjjjbbgzBd:OwamclBd;8wazcbaLz:rjjjbhYamcuaLcK2alcjjjjd0Ecbyd;0:G:cjbHjjjjbbg8ABd:SwamcvBd;8wJbbbbhEdnalci6g3mbarcd4hKaihsa8AhzaLhrJbbbbh5inavasclfydbaK2cdtfgCIdlh8EavasydbaK2cdtfgXIdlhEavascwfydbaK2cdtfgQIdlh8FaCIdwhaaXIdwhhaQIdwhgazaCIdbg8JaXIdbg8KMaQIdbg8LMJbbnn:vUdbazclfaXIdlaCIdlMaQIdlMJbbnn:vUdbaQIdwh8MaCIdwh8NaXIdwhyazcxfa8EaE:tg8Eagah:tggNaaah:tgaa8FaE:tghN:tgEJbbbbJbbjZa8Ja8K:tg8FahNa8Ea8La8K:tg8KN:tghahNaEaENaaa8KNa8FagN:tgEaENMMg8K:rg8E:va8KJbbbb9BEg8KNUdbazczfaEa8KNUdbazcCfaha8KNUdbazcwfa8Maya8NMMJbbnn:vUdba5a8EMh5ascxfhsazcKfhzarcufgrmbka5aL:Z:vJbbbZNhEkamcuaLcdtalcFFFF970Ecbyd;0:G:cjbHjjjjbbgCBd:WwamcoBd;8waq:Zhhdna3mbcbhzaChsinasazBdbasclfhsaLazcefgz9hmbkkaEahNhhamcuaLcltalcFFFFd0Ecbyd;0:G:cjbHjjjjbbg8PBd:0wamcrBd;8wcba8Pa8AaCaLcbz:djjjb8AJFFuuh8MJFFuuh8NJFFuuhydnalci6mbJFFuuhya8AhzaLhsJFFuuh8NJFFuuh8MinazcwfIdbgEa8Ma8MaE9EEh8MazclfIdbgEa8Na8NaE9EEh8NazIdbgEayayaE9EEhyazcKfhzascufgsmbkkah:rhEamaocetgzcuaocu9kEcbyd;0:G:cjbHjjjjbbgCBd:4wdndnaoal9nmbaihzalhsinaCazydbcetfcFFi87ebazclfhzascufgsmbxdkkaCcFeazz:rjjjb8AkaEJbbbZNh8JcuhIdnalci6mbcbhsJFFuuhEa8AhzcuhIinazcwfIdba8M:tghahNazIdbay:tghahNazclfIdba8N:tghahNMM:rghaEaIcuSahaE9DVgXEhEasaIaXEhIazcKfhzaLascefgs9hmbkkamczfcbcjwz:rjjjb8Aam9cb83iwam9cb83ibaxa8JNh8RJbbjZak:th8Lcbh8SJbbbbhRJbbbbh8UJbbbbh8VJbbbbh8WJbbbbh8XJbbbbh8Ycbh8ZcbhPinJbbbbhEdna8STmbJbbjZa8S:Z:vhEkJbbbbhhdna8Ya8YNa8Wa8WNa8Xa8XNMMg8KJbbbb9BmbJbbjZa8K:r:vhhka8VaENh8Ka8UaENh5aRaENh8EaIhLdndndndndna8SaPVTmbamydwg80Tmea8YahNh8Fa8XahNhaa8WahNhgaeamydbcdtfh81cbh3JFFuuhEcvhQcuhLindnaHa81a3cdtfydbcdtgzfydbgvTmbaAaOazfydbcdtfhsindndnaCaiasydbgKcx2fgzclfydbgrcetf8Vebcs4aCazydbgXcetf8Vebcs4faCazcwfydbglcetf8Vebcs4fgombcbhzxekcehzaHaXcdtfydbgXceSmbcehzaHarcdtfydbgrceSmbcehzaHalcdtfydbglceSmbdnarcdSaXcdSfalcdSfcd6mbaocefhzxekaocdfhzkdnazaQ9kmba8AaKcK2fgXIdwa8K:tghahNaXIdba8E:tghahNaXIdla5:tghahNMM:ra8J:va8LNJbbjZMJ9VO:d86JbbjZaXIdCa8FNaXIdxagNaaaXIdzNMMakN:tghahJ9VO:d869DENghaEazaQ6ahaE9DVgXEhEaKaLaXEhLazaQaXEhQkasclfhsavcufgvmbkka3cefg3a809hmbkkaLcu9hmekama8KUd:ODama5Ud:KDama8EUd:GDamcuBd:qDamcFFF;7rBdjDa8Pcba8AaYamc:GDfamc:qDfamcjDfz:ejjjbamyd:qDhLdndnaxJbbbb9ETmba8SaD6mbaLcuSmeceh3amIdjDa8R9EmixdkaLcu9hmekdna8STmbabaPcltfgHam8Piw83dwaHam8Pib83dbaPcefhPkc3hHinamc:CwfaHfydbcbyd;4:G:cjbH:bjjjbbaHc98fgHc989hmbxvkkcbh3a8Saq9pmbamydwaCaiaLcx2fgzydbcetf8Vebcs4aCazcwfydbcetf8Vebcs4faCazclfydbcetf8Vebcs4ffaw9nmekcbhzcbhsdna8ZTmbcbhsamczfhXinamczfascdtfaXydbgQBdbaXclfhXasaYaQfRbbTfhsa8Zcufg8ZmbkkamydwhlamydbhXam9cu83i:GDam9cu83i:ODam9cu83i:qDam9cu83i:yDinamcjDfazfcFFF;7rBdbazclfgzcz9hmbkasc;8easclfc:bd6Eg8Zcdth80dnalTmbaeaXcdtfhocbhrindnaHaoarcdtfydbcdtgzfydbgvTmbaAaOazfydbcdtfhscuhQcuhzinaHaiasydbgKcx2fgXclfydbcdtfydbaHaXydbcdtfydbfaHaXcwfydbcdtfydbfgXazaXaz6gXEhzaKaQaXEhQasclfhsavcufgvmbkaQcuSmba8AaQcK2fgsIdwa8M:tgEaENasIdbay:tgEaENasIdla8N:tgEaENMM:rhEcbhsindndnazamc:qDfasfgvydbgX6mbazaX9hmeaEamcjDfasfIdb9FTmekavazBdbamc:GDfasfaQBdbamcjDfasfaEUdbxdkasclfgscz9hmbkkarcefgral9hmbkkamczfa80fhQcbhzcbhsindnamc:GDfazfydbgXcuSmbaQascdtfaXBdbascefhskazclfgzcz9hmbkasa8Zfg8ZTmbJFFuuhhcuhKamczfhza8ZhvcuhQina8AazydbgXcK2fgsIdwa8M:tgEaENasIdbay:tgEaENasIdla8N:tgEaENMM:rhEdndnaHaiaXcx2fgsclfydbcdtfydbaHasydbcdtfydbfaHascwfydbcdtfydbfgsaQ6mbasaQ9hmeaEah9DTmekaEhhashQaXhKkazclfhzavcufgvmbkaKcuSmbaKhLkdnamaiaLcx2fgrydbarclfydbarcwfydbaCabaeadaPawaqa3z:fjjjbTmbaPcefhPJbbbbhRJbbbbh8UJbbbbh8VJbbbbh8WJbbbbh8XJbbbbh8YkcbhXinaAaOaraXcdtfydbcdtgsfydbcdtfgKhzaHasfgvydbgQhsdnaQTmbdninazydbaLSmeazclfhzascufgsTmdxbkkazaKaQcdtfc98fydbBdbavavydbcufBdbkaXcefgXci9hmbka8AaLcK2fgzIdbhEazIdlhhazIdwh8KazIdxh5azIdzh8EazIdCh8FaYaLfce86bba8Ya8FMh8Ya8Xa8EMh8Xa8Wa5Mh8Wa8Va8KMh8Va8UahMh8UaRaEMhRamydxh8Sxbkkamc:WDf8KjjjjbaPkjoivuv99lu8Jjjjjbca9Rgo8Kjjjjbdndnalcw0mbaiydbhraeabcitfgwalcdtciVBdlawarBdbdnalcd6mbaiclfhralcufhDawcxfhwinarydbhqawcuBdbawc98faqBdbawcwfhwarclfhraDcufgDmbkkalabfhwxekcbhqaocbBdKao9cb83izaocbBdwao9cb83ibJbbjZhkJbbjZhxinadaiaqcdtfydbcK2fhDcbhwinaoczfawfgraDawfIdbgmarIdbgP:tgsaxNaPMgPUdbaoawfgrasamaP:tNarIdbMUdbawclfgwcx9hmbkJbbjZakJbbjZMgk:vhxaqcefgqal9hmbkcbhradcbcecdaoIdlgmaoIdwgP9GEgwaoIdbgsaP9GEawasam9GEgzcdtgwfhHaoczfawfIdbhmaihwalhDinaiarcdtfgqydbhOaqawydbgABdbawaOBdbawclfhwaraHaAcK2fIdbam9DfhraDcufgDmbkdndnarcv6mbavc8X9kmbaralc98f6mekaiydbhraeabcitfgwalcdtciVBdlawarBdbaiclfhralcufhDawcxfhwinarydbhqawcuBdbawc98faqBdbawcwfhwarclfhraDcufgDmbkalabfhwxekaeabcitfgwamUdbawawydlc98GazVBdlabcefaeadaiaravcefgqz:djjjbhDawawydlciGaDabcu7fcdtVBdlaDaeadaiarcdtfalar9Raqz:djjjbhwkaocaf8Kjjjjbawk;Oddvue99dninabaecitfgrydlgwcd4gDTmednawciGgqci9hmbcihqdnawcl6mbabaecitfhbcbheawhqcehkindnaiabydbgDfRbbmbcbhkadaDcK2fgwIdwalIdw:tgxaxNawIdbalIdb:tgxaxNawIdlalIdl:tgxaxNMM:rgxaoIdb9DTmbaoaxUdbavaDBdbarydlhqkabcwfhbaecefgeaqcd46mbkakceGTmikaraqciGBdlskdnabcbaDalaqcdtfIdbarIdb:tgxJbbbb9FEgwaD7aecefgDfgecitfydlabawaDfgDcitfydlVci0mbaraqBdlkabaDadaialavaoz:ejjjbax:laoIdb9Fmbkkkjlevudndnabydwgxaladcetfgm8Vebcs4alaecetfgP8Vebgscs4falaicetfgz8Vebcs4ffaD0mbakmbcbhDabydxaq6mekavawcltfgxab8Pdw83dwaxab8Pdb83dbabydbhDdnabydwgwTmbaoaDcdtfhxawhsinalaxydbcetfcFFi87ebaxclfhxascufgsmbkkabaDawfBdbabydxhxab9cb83dwababydlaxci2fBdlaP8VebhscehDcbhxkdnascztcz91cu9kmbabaxcefBdwaPax87ebaoabydbcdtfaxcdtfaeBdbkdnam8Uebcu9kmbababydwgxcefBdwamax87ebaoabydbcdtfaxcdtfadBdbkdnaz8Uebcu9kmbababydwgxcefBdwazax87ebaoabydbcdtfaxcdtfaiBdbkarabydlfabydxci2faPRbb86bbarabydlfabydxci2fcefamRbb86bbarabydlfabydxci2fcdfazRbb86bbababydxcefBdxaDk:mPrHue99eue99eue99iu8Jjjjjbc;W;Gb9Rgx8KjjjjbdndnalmbcbhmxekcbhPaxc:m;Gbfcbc;Kbz:rjjjb8Aaxcualci9UgscltascjjjjiGEcbyd;0:G:cjbHjjjjbbgzBd:m9GaxceBd;S9GaxcuascK2gHcKfalcpFFFe0Ecbyd;0:G:cjbHjjjjbbgOBd:q9GaxcdBd;S9Gdnalci6gAmbarcd4hCascdthXaOhQazhLinavaiaPcx2fgrydwaC2cdtfhKavarydlaC2cdtfhYavarydbaC2cdtfh8AcbhraLhEinaQarfgma8Aarfg3Idbg5aYarfg8EIdbg8Fa5a8F9DEg5UdbamaKarfgaIdbg8Fa5a8Fa59DEg8FUdbamcxfgma3Idbg5a8EIdbgha5ah9EEg5UdbamaaIdbgha5aha59EEg5UdbaEa8Fa5MJbbbZNUdbaEaXfhEarclfgrcx9hmbkaQcKfhQaLclfhLaPcefgPas9hmbkkaOaHfgr9cb83dbar9cb83dzar9cb83dwaxcuascx2gralc:bjjjl0Ecbyd;0:G:cjbHjjjjbbgHBdN9GaxciBd;S9GascdthgazarfhvaxcwVhPaxclVhCaHh8Jazh8KcbhLinaxcbcj;Gbz:rjjjbhEaLas2cdthadnaAmba8Khrash3inaEarydbgmc8F91cjjjj94Vam7gmcQ4cx2fg8Ea8EydwcefBdwaEamcd4cFrGcx2fg8Ea8EydbcefBdbaEamcx4cFrGcx2fgmamydlcefBdlarclfhra3cufg3mbkkazaafh8AaHaafhXcbhmcbh3cbh8EcbhainaEamfgrydbhQara3BdbarcwfgKydbhYaKaaBdbarclfgrydbhKara8EBdbaQa3fh3aYaafhaaKa8Efh8Eamcxfgmcj;Gb9hmbkdnaAmbcbhravhminamarBdbamclfhmasarcefgr9hmbkavhrashminaEa8Aarydbg3cdtfydbg8Ec8F91a8E7cd4cFrGcx2fg8Ea8Eydbg8EcefBdbaXa8Ecdtfa3Bdbarclfhramcufgmmbka8JhrashminaCa8Aarydbg3cdtfydbg8Ec8F91a8E7cx4cFrGcx2fg8Ea8Eydbg8EcefBdbava8Ecdtfa3BdbarclfhramcufgmmbkavhrashminaPa8Aarydbg3cdtfydbg8Ec8F91cjjjj94Va8E7cQ4cx2fg8Ea8Eydbg8EcefBdbaXa8Ecdtfa3Bdbarclfhramcufgmmbkka8Jagfh8Ja8Kagfh8KaLcefgLci9hmbkaEaocetgrcuaocu9kEcbyd;0:G:cjbHjjjjbbgKBd:y9GaEclBd;S9Gdndnaoal9nmbaihralhminaKarydbcetfcFFi87ebarclfhramcufgmmbxdkkaKcFearz:rjjjb8Akcbh8EaEascbyd;0:G:cjbHjjjjbbg8ABd:C9GaOaHaHascdtfaHascitfa8AascbazaKaiawaDaqakz:hjjjbdndnalci6mba8Ahrashmina8EarRbbfh8EarcefhramcufgmmbkaE9cb83iwaE9cb83ibalawc9:fgrfcufar9UgrasaDfcufaD9Ugmaram0EhYcbhmcbhra8Ehaincbh3dnarTmba8AarfRbbceSh3kamaEaiaHydbcx2fgQydbaQclfydbaQcwfydbaKabaeadamawaqa3a3ce7a8EaY9nVaaamfaY6VGz:fjjjbfhmaHclfhHaaa8AarfRbb9Rhaasarcefgr9hmbkaEydxTmeabamcltfgraE8Piw83dwaraE8Pib83dbamcefhmxekaE9cb83iwaE9cb83ibcbhmkczhrinaEc:m;Gbfarfydbcbyd;4:G:cjbH:bjjjbbarc98fgrc989hmbkkaxc;W;Gbf8Kjjjjbamk:wKDQue99iue99iul9:euw99iu8Jjjjjbc;qb9RgP8Kjjjjbaxhsaxhzdndnavax0gHmbdnavTmbcbhOaehzavhAinawaDazydbcx2fgCcwfydbcetfgX8VebhQawaCclfydbcetfgL8VebhKawaCydbcetfgC8VebhYaXce87ebaLce87ebaCce87ebaOaKcs4aYcs4faQcs4ffhOazclfhzaAcufgAmbkaehzavhAinawaDazydbcx2fgCcwfydbcetfcFFi87ebawaCclfydbcetfcFFi87ebawaCydbcetfcFFi87ebazclfhzaAcufgAmbkcehzaqhsaOaq0mekalce86bbalcefcbavcufz:rjjjb8AxekaPaiBdxaPadBdwaPaeBdlavakaqci9Ug8Aaka8Aak6EaHEgK9RhEaxaK9Rh3aKcufh5aKceth8EaKcdtgCc98fh8FavcitgOaC9Rarfc98fhaascufhhavcufhgaraOfh8JJbbjZas:Y:vh8KcbazceakaxSEg8Lcdtg8M9Rh8NJFFuuhycuh8PcbhIcbh8RinaPclfa8RcdtfydbhQaPcb8Pd:y:G:cjbg8S83i9iaPcb8Pd:q:G:cjbgR83inaPcb8Pd1:G:cjbg8U83iUaPcb8Pdj:G:cjbg8V83i8WaPa8S83iyaPaR83iaaPa8U83iKaPa8V83izaQavcdtgYfh8WcbhXinabaQaXcdtgLfydbcK2fhAcbhzinaPc8WfazfgCaAazfgOIdbg8XaCIdbg8Ya8Xa8Y9DEUdbaCczfgCaOcxfIdbg8XaCIdbg8Ya8Xa8Y9EEUdbazclfgzcx9hmbkaba8WaXcu7cdtfydbcK2fhAcbhzaPIdUh8ZaPId9ih80aPId80h81aPId9ehBaPId8Wh83aPIdnhUinaPczfazfgCaAazfgOIdbg8XaCIdbg8Ya8Xa8Y9DEUdbaCczfgCaOcxfIdbg8XaCIdbg8Ya8Xa8Y9EEUdbazclfgzcx9hmbkaraLfgza80a8Z:tg8XaUa83:tg8YNa8YaBa81:tg8ZNa8Za8XNMMUdbazaYfaPIdyaPIdK:tg8XaPIdaaPIdz:tg8YNa8YaPId8KaPIdC:tg8ZNa8Za8XNMMUdbaXcefgXav9hmbkcbh85dnaHmbcbhAaQhza8JhCavhXinawaDazydbcx2fgOcwfydbcetfgL8Vebh8WawaOclfydbcetfg858Vebh86awaOydbcetfgO8Vebh87aLce87eba85ce87ebaOce87ebaCaAa86cs4a87cs4fa8Wcs4ffgABdbazclfhzaCclfhCaXcufgXmbkavhCinawaDaQydbcx2fgzcwfydbcetfcFFi87ebawazclfydbcetfcFFi87ebawazydbcetfcFFi87ebaQclfhQaCcufgCmbka8Jh85kdndndndndndndndndndndnava8E6mba8Eax9nmeavavaK9UgzaK29Raza320mda5aE9pmqa85Th87ceh8WaEhQxwka5ag9pmDa8Eax9nmixokavaK6mea5aE9pmwcehQaEhXa85Tmixlka5ag6mlxrka5ag9pmokcbhQaghXa85mekJFFuuh8XcbhLa5hzindnazcefgCaK6mbaQavaC9RgOaK6GmbarazcdtfIdbg8YaC:YNaravaz9RcdtfaYfc94fIdbg8ZaO:YNMg80a8X9Embdndna8KaOahf:YNg81:lJbbb9p9DTmba81:OhAxekcjjjj94hAka8ZasaA2aO9R:YNh8Zdndna8Kazasf:YNg81:lJbbb9p9DTmba81:OhOxekcjjjj94hOkamasaO2aC9R:Ya8YNa8ZMNa80Mg8Ya8Xa8Ya8X9DgOEh8XaCaLaOEhLkaza8LfgzaX6mbxlkkJFFuuh8XcbhLaEhCaahAa8FhOaKhzindnazaK6mbaQaCaK6GmbaraOfIdbg8Yaz:YNaAIdbg8ZaC:YNMg80a8X9Embdndna8Ka85aOfydbgYahf:YNg81:lJbbb9p9DTmba81:Oh8Wxekcjjjj94h8Wkamasa8W2aY9R:Yg81a8YNa8Za81NMNa80Mg8Ya8Xa8Ya8X9DgYEh8XazaLaYEhLkaCa8L9RhCaAa8NfhAaOa8MfhOaza8LfgzcufaX6mbxikka85Th87cbh8WaghQkJFFuuh8XcbhLaEhCaahAa8FhOaKhzindnazazaK9UgXaK29RaXa320mbdna8WTmbaCaCaK9UgXaK29RaXa320mekaraOfIdbg8Yaz:YNaAIdbg8ZaC:YNMg80a8X9EmbazhXaChYdna87mba85aOfydbgXhYkdndna8KaYahf:YNg81:lJbbb9p9DTmba81:Oh86xekcjjjj94h86ka8Zasa862aY9R:YNh8Zdndna8KaXahf:YNg81:lJbbb9p9DTmba81:OhYxekcjjjj94hYkamasaY2aX9R:Ya8YNa8ZMNa80Mg8Ya8Xa8Ya8X9DgXEh8XazaLaXEhLkaCa8L9RhCaAa8NfhAaOa8MfhOaza8LfgzcufaQ6mbkkaLTmba8Xay9DTmba8XhyaLhIa8Rh8Pka8Rcefg8Rci9hmbkdndnaoc8X9kmba8Pcb9omeka8Acufh85cbhYindndndnavaY9RaxaYaxfav0Eg8WTmbcbhAaeaYcdtfgzhCa8WhXinawaDaCydbcx2fgOcwfydbcetfgQ8VebhbawaOclfydbcetfgL8VebhrawaOydbcetfgO8VebhKaQce87ebaLce87ebaOce87ebaAarcs4aKcs4fabcs4ffhAaCclfhCaXcufgXmbka8WhOinawaDazydbcx2fgCcwfydbcetfcFFi87ebawaCclfydbcetfcFFi87ebawaCydbcetfcFFi87ebazclfhzaOcufgOmbkaAaq0mekalaYfgzce86bbazcefcba8Wcufz:rjjjb8AxekalaYfgzce86bbazcefcba85z:rjjjb8Aa8Ah8Wka8WaYfgYav9pmdxbkkaravcdtg8WfhLdnaITmbaPclfa8PcdtfydbhzaIhCinaLazydbfcb86bbazclfhzaCcufgCmbkkdnavaI9nmbaPclfa8PcdtfydbaIcdtfhzavaI9RhCinaLazydbfce86bbazclfhzaCcufgCmbkkcbhYindnaYa8PSmbcbhzaraPclfaYcdtfydbgKa8Wz:qjjjbhCavhXaIhOinaKaOazaLaCydbgQfRbbgAEcdtfaQBdbaCclfhCaOaAfhOazaA9RcefhzaXcufgXmbkkaYcefgYci9hmbkabaeadaialaIaocefgCarawaDaqakaxamz:hjjjbabaeaIcdtgzfadazfaiazfalaIfavaI9RaCarawaDaqakaxamz:hjjjbkaPc;qbf8Kjjjjbk:Seeru8Jjjjjbc:q;ab9Rgo8Kjjjjbaoc:q8WfcFecjzz:rjjjb8AcbhrdnadTmbaehwadhDinaoarcdtfawydbgqBdbaoc:q8WfaqcFiGcdtfgkydbhxakaqBdbawclfhwaraxaq9hfhraDcufgDmbkkabaeadaoaraiavz:jjjjbaoc:q;abf8Kjjjjbk;Sqloud99euD998Jjjjjbc:W;ab9Rgr8KjjjjbdndnadTmbaocd4hwcbhDcbhqindnavaeclfydbaw2cdtfgkIdbavaeydbaw2cdtfgxIdbgm:tgPavaecwfydbaw2cdtfgsIdlaxIdlgz:tgHNakIdlaz:tgOasIdbam:tgAN:tgCaCNaOasIdwaxIdwgX:tgQNakIdwaX:tgOaHN:tgHaHNaOaANaPaQN:tgPaPNMMgOJbbbb9Bmbarc8WfaDcltfgkaCaO:rgO:vgCUdwakaPaO:vgPUdlakaHaO:vgHUdbakaCaXNaHamNazaPNMM:mUdxaDcefhDkaecxfheaqcifgqad6mbkab9cb83dyab9cb83daab9cb83dKab9cb83dzab9cb83dwab9cb83dbaDTmearcbBd8Sar9cb83iKar9cb83izarczfavalaoarc8Sfcbcraiz:kjjjbarIdKhQarIdChLarIdzhKar9cb83iwar9cb83ibararc8WfaDczarc8Sfcbcicbz:kjjjbJbbbbhmdnarIdwgzazNarIdbgHaHNarIdlgXaXNMMgCJbbbb9BmbJbbjZaC:r:vhmkazamNhCaXamNhXaHamNhHJbbjZhmarc8WfheaDhvinaecwfIdbaCNaeIdbaHNaXaeclfIdbNMMgzamazam9DEhmaeczfheavcufgvmbkabaQUdwabaLUdlabaKUdbabarId3UdxdndnamJ;n;m;m899FmbJbbbbhzarc8WfheinaecxfIdbaQaecwfIdbgPNaKaeIdbgONaLaeclfIdbgANMMMaCaPNaHaONaXaANMM:vgPazaPaz9EEhzaeczfheaDcufgDmbkabaCUd8KabaXUdaabaHUd3abaQaCazN:tUdKabaLaXazN:tUdCabaKaHazN:tUdzabJbbjZamamN:t:rgmUdydndnaCJbbj:;aCJbbj:;9GEgzJbbjZazJbbjZ9FEJbb;:9cNJbbbZJbbb:;aCJbbbb9GEMgz:lJbbb9p9DTmbaz:Ohexekcjjjj94hekabae86b8UdndnaXJbbj:;aXJbbj:;9GEgzJbbjZazJbbjZ9FEJbb;:9cNJbbbZJbbb:;aXJbbbb9GEMgz:lJbbb9p9DTmbaz:Ohvxekcjjjj94hvkabav86bRdndnaHJbbj:;aHJbbj:;9GEgzJbbjZazJbbjZ9FEJbb;:9cNJbbbZJbbb:;aHJbbbb9GEMgz:lJbbb9p9DTmbaz:Ohwxekcjjjj94hwkabaw86b8SdndnaecKtcK91:YJbb;:9c:vaC:t:lavcKtcK91:YJbb;:9c:vaX:t:lawcKtcK91:YJbb;:9c:vaH:t:lamMMMJbb;:9cNJbbjZMgm:lJbbb9p9DTmbam:Ohexekcjjjj94hekaecFbaecFb9iEhexekabcjjj;8iBdycFbhekabae86b8Vxekab9cb83dyab9cb83daab9cb83dKab9cb83dzab9cb83dwab9cb83dbkarc:W;abf8Kjjjjbk;7woDuo99eue99euv998Jjjjjbcje9Rgw8Kjjjjbawc;abfcbaocdtgDz:rjjjb8Aawc;GbfcbaDz:rjjjb8AawcafhDawhqaohkinaqcFFF97BdbaDcFFF;7rBdbaqclfhqaDclfhDakcufgkmbkavcd4hxaicd4hmdnadTmbaocx2hPcbhsinashzdnarTmbarascdtfydbhzkaeazam2cdtfgDIdwhHaDIdlhOaDIdbhAalazax2cdtfIdbhCcbhDawcafhqawc;Gbfhvawhkawc;abfhiinaCaDc:O:G:cjbfIdbaHNaDc:G:G:cjbfIdbaANaDc:K:G:cjbfIdbaONMMgXMhQazhLdnaXaC:tgXaqIdbgK9DgYmbavydbhLkavaLBdbazhLdnaQakIdbg8A9EmbaiydbhLa8AhQkaiaLBdbakaQUdbaqaXaKaYEUdbaiclfhiakclfhkavclfhvaqclfhqaPaDcxfgD9hmbkascefgsad9hmbkkJbbbbhQcbhLawc;GbfhDawc;abfhqcbhkinalaqydbgvax2cdtfIdbalaDydbgiax2cdtfIdbaeavam2cdtfgvIdwaeaiam2cdtfgiIdw:tgCaCNavIdbaiIdb:tgCaCNavIdlaiIdl:tgCaCNMM:rMMgCaQaCaQ9EgvEhQakaLavEhLaqclfhqaDclfhDaoakcefgk9hmbkJbbbbhCdnaeawc;abfaLcdtgqfydbgkam2cdtfgDIdwaeawc;Gbfaqfydbgvam2cdtfgqIdwgH:tgXaXNaDIdbaqIdbgA:tg8Aa8ANaDIdlaqIdlgE:tgOaONMMgKJbbbb9ETmbaK:rgCalakax2cdtfIdbMalavax2cdtfIdb:taCaCM:vhCkaQJbbbZNhKaXaCNaHMhHaOaCNaEMhOa8AaCNaAMhAdnadTmbcbhqarhkinaqhDdnarTmbakydbhDkdnalaDax2cdtfIdbg3aeaDam2cdtfgDIdwaH:tgQaQNaDIdbaA:tgCaCNaDIdlaO:tgXaXNMMg5:rgEMg8EaK9ETmbJbbbbh8Adna5Jbbbb9ETmba8EaK:taEaEM:vh8Aka8AaQNaHMhHa8AaXNaOMhOa8AaCNaAMhAa3aKaEMMJbbbZNhKkakclfhkadaqcefgq9hmbkkabaKUdxabaHUdwabaOUdlabaAUdbawcjef8Kjjjjbk:reevu8Jjjjjbcj8W9Rgr8Kjjjjbaici2hwcbhDdnaiTmbarhiawhqinaiaeadRbbgkcdtfydbBdbaDakcefgkaDak0EhDaiclfhiadcefhdaqcufgqmbkkabarawaeaDalaoz:jjjjbarcj8Wf8Kjjjjbk:Eeeeu8Jjjjjbca9Rgo8Kjjjjbab9cb83dyab9cb83daab9cb83dKab9cb83dzab9cb83dwab9cb83dbdnadTmbaocbBd3ao9cb83iwao9cb83ibaoaeadaialaoc3falEavcbalEcrcbz:kjjjbabao8Pib83dbabao8Piw83dwkaocaf8Kjjjjbk::meQu8Jjjjjbcjz9Rgv8KjjjjbcbhoavcjPfcbaez:rjjjb8Aavcjxfcbaez:rjjjb8AdnaiTmbadhoaihrinavcjxfaoRbbfgwawRbbcef86bbavcjxfaocefRbbfgwawRbbcef86bbavcjxfaocdfRbbfgwawRbbcef86bbaocifhoarcufgrmbkcbhDcjehoadhqcehkindndnalTmbcbhxcuhmaqhrakhwcuhPinawcufamaoavcjPfarcefRbbgsfRbb9RcFeGgzci6aoavcjPfarRbbgHfRbb9RcFeGgOci6faoavcjPfarcdfRbbgAfRbb9RcFeGgCci6fgXcOtaOcFr7azaCf9RcwtVavcjxfaAfRbbgzavcjxfaHfRbbgHavcjxfasfRbbgsaHas6Egsazas6EcFe7VgsaP9kgzEhmaXcd6gHaxcefgOal9iVce9hmdasaPazEhPaxaOaHEhxarcifhrawai6hsawcefhwasmbxdkkcuhmaqhrakhwcuhxinawcufamaoavcjPfarcefRbbfRbb9RcFeGci6aoavcjPfarRbbfRbb9RcFeGci6faoavcjPfarcdfRbbfRbb9RcFeGci6fgPax9kgsEhmaPce0meaPaxasEhxarcifhrawai6hPawcefhwaPmbkkadamci2fgrcdfRbbhwarcefRbbhxarRbbhPadaDci2fgrcifaramaD9Rci2zNjjjb8AaPavcjPffaocefgo86bbaPavcjxffgmamRbbcuf86bbaxavcjPffao86bbaxavcjxffgmamRbbcuf86bbarcdfaw86bbarcefax86bbaraP86bbawavcjPffao86bbawavcjxffgrarRbbcuf86bbaqcifhqakcefhkaDcefgDai9hmbkcbhzdnalcb9mmbcbhsavcjPfcbaez:rjjjb8Aadcvfhlinadasci2fgxcefgDRbbhoaxcdfgqRbbhrdndnavcjPfaxRbbgmfRbbmbavcjPfarfRbbhwdndndnavcjPfaofRbbTmbawcFeGTmexikawcFeGmdascefgAai9pmdasc980mdascifhQcbhLarcFeGhCamcFeGhXalhwcbhKcbhYinawcufRbbhPawRbbhOcehkdndnawc9:fRbbgHao9hmbaPcFeGamSmekdnaPcFeGao9hmbaOcFeGamSmekaHamSaOcFeGaoSGhkkceh8AaYceGhYdndnaHar9hmbaPcFeGaoSmekdnaPcFeGar9hmbaOcFeGaoSmekaHaoSaOcFeGarSGh8AkakaYVhYaLaHcFeGgHaXSaPcFeGgPaCSGaPaXSaOcFeGgPaCSGVaHaCSaPaXSGVVhLa8AaKceGVhKdnaAcefgPai9pmbawcifhwaAaQ6hHaPhAaHmekkaYTmeaKmekarhwaohPaohHarhOamhrxdkdnaYTaLVceGTmbaYaKTVaLVceGmekamhwarhParhHamhOaohrxekaohwamhPamhHaohOkavcjPfarfce86bbavcjPfawfce86bbaxaH86bbaqar86bbaDaO86bbavcjPfaPfce86bbalcifhlascefgsai9hmbkkavcFeaecetz:rjjjbhwaici2hrindnawadRbbgmcetfgx8Uebgocu9kmbaxaz87ebawcjlfazcdtfabamcdtfydbBdbazhoazcefhzkadao86bbadcefhdarcufgrmbkazcdthokabavcjlfaoz:qjjjb8Aavcjzf8KjjjjbkObabaiaeadcbz:njjjbk9teiucbcbyd;8:G:cjbgeabcifc98GfgbBd;8:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaeczfheaiczfhiadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabk9teiucbcbyd;8:G:cjbgeabcrfc94GfgbBd;8:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikTeeucbabcbyd;8:G:cjbge9Rcifc98GaefgbBd;8:G:cjbdnabZbcztge9nmbabae9RcFFifcz4nb8Akk:3qeludndnadch6mbadTmeabaead;8qbbabskabaeSmbdnaeadabfgi9Rcbadcet9R0mbadTmeabaead;8qbbabskaeab7ciGhldndndnabae9pmbdnalTmbadhvabhixikdnabciGmbadhvabhixdkadTmiabaeRbb86bbadcufhvdnabcefgiciGmbaecefhexdkavTmiabaeRbe86beadc9:fhvdnabcdfgiciGmbaecdfhexdkavTmiabaeRbd86bdadc99fhvdnabcifgiciGmbaecifhexdkavTmiabaeRbi86biabclfhiaeclfheadc98fhvxekdnalmbdnaiciGTmbadTmlabadcufgifglaeaifRbb86bbdnalciGmbaihdxekaiTmlabadc9:fgifglaeaifRbb86bbdnalciGmbaihdxekaiTmlabadc99fgifglaeaifRbb86bbdnalciGmbaihdxekaiTmlabadc98fgdfaeadfRbb86bbkadcl6mbdnadc98fgocxGcxSmbaocd4cefciGhiaec98fhlabc98fhvinavadfaladfydbBdbadc98fhdaicufgimbkkaocx6mbaec9Wfhvabc9WfhoinaoadfgicxfavadfglcxfydbBdbaicwfalcwfydbBdbaiclfalclfydbBdbaialydbBdbadc9Wfgdci0mbkkadTmdadhidnadciGglTmbaecufhvabcufhoadhiinaoaifavaifRbb86bbaicufhialcufglmbkkadcl6mdaec98fhlabc98fhvinavaifgecifalaifgdcifRbb86bbaecdfadcdfRbb86bbaecefadcefRbb86bbaeadRbb86bbaic98fgimbxikkavcl6mbdnavc98fglc3Gc3Smbavalcd4cefcrGgdcdt9RhvinaiaeydbBdbaeclfheaiclfhiadcufgdmbkkalc36mbinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaiczfaeczfydbBdbaicCfaecCfydbBdbaicKfaecKfydbBdbaic3faec3fydbBdbaecafheaicafhiavc9Gfgvci0mbkkavTmbdndnavcrGgdmbavhlxekavc94GhlinaiaeRbb86bbaicefhiaecefheadcufgdmbkkavcw6mbinaiaeRbb86bbaicefaecefRbb86bbaicdfaecdfRbb86bbaicifaecifRbb86bbaiclfaeclfRbb86bbaicvfaecvfRbb86bbaicofaecofRbb86bbaicrfaecrfRbb86bbaicwfhiaecwfhealc94fglmbkkabkk:pedbcj:GdktFFuuFFuuFFuubbbbFFuFFFuFFFuFbbbbbbjZbbbbbbbbbbbbbbjZbbbbbbbbbbbbbbjZ86;nAZ86;nAZ86;nAZ86;nA:;86;nAZ86;nAZ86;nAZ86;nA:;86;nAZ86;nAZ86;nAZ86;nA:;bc;0:Gdkxebbbdbbbj:qbb",e=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var t,a=WebAssembly.instantiate(n(s),{}).then(function(g){t=g.instance,t.exports.__wasm_call_ctors()});function n(g){for(var b=new Uint8Array(g.length),f=0;f<g.length;++f){var v=g.charCodeAt(f);b[f]=v>96?v-97:v>64?v-39:v+4}for(var w=0,f=0;f<g.length;++f)b[w++]=b[f]<60?e[b[f]]:(b[f]-60)*64+b[++f];return b.buffer.slice(0,w)}function i(g){if(!g)throw new Error("Assertion failed")}function r(g){return new Uint8Array(g.buffer,g.byteOffset,g.byteLength)}var o=48,c=16;function h(g,b){var f=g.meshlets[b*4+0],v=g.meshlets[b*4+1],w=g.meshlets[b*4+2],m=g.meshlets[b*4+3];return{vertices:g.vertices.subarray(f,f+w),triangles:g.triangles.subarray(v,v+m*3)}}function l(g,b,f,v,w,m,M,A,T,R){var _=t.exports.sbrk,y=t.exports.meshopt_buildMeshletsBound(b.length,m,M),C=_(y*c),O=_(b.length*4),P=_(b.length),U=_(b.byteLength),q=_(f.byteLength),B=new Uint8Array(t.exports.memory.buffer);B.set(r(b),U),B.set(r(f),q);var V=g(C,O,P,U,b.length,q,v,w,m,M,A,T,R);B=new Uint8Array(t.exports.memory.buffer);for(var z=B.subarray(C,C+V*c),Z=new Uint32Array(z.buffer,z.byteOffset,z.byteLength/4).slice(),ae=0;ae<V;++ae){var le=Z[ae*4+0],Ae=Z[ae*4+1],v=Z[ae*4+2],Be=Z[ae*4+3];t.exports.meshopt_optimizeMeshlet(O+le*4,P+Ae,Be,v)}var W=V?Z[(V-1)*4+0]+Z[(V-1)*4+2]:0,$=V?Z[(V-1)*4+1]+Z[(V-1)*4+3]*3:0,de={meshlets:Z,vertices:new Uint32Array(B.buffer,O,W).slice(),triangles:new Uint8Array(B.buffer,P,$).slice(),meshletCount:V};return _(C-_(0)),de}function d(g){var b=new Float32Array(t.exports.memory.buffer,g,o/4);return{centerX:b[0],centerY:b[1],centerZ:b[2],radius:b[3],coneApexX:b[4],coneApexY:b[5],coneApexZ:b[6],coneAxisX:b[7],coneAxisY:b[8],coneAxisZ:b[9],coneCutoff:b[10]}}function u(g,b,f,v){var w=t.exports.sbrk,m=[],M=w(b.byteLength),A=w(g.vertices.byteLength),T=w(g.triangles.byteLength),R=w(o),_=new Uint8Array(t.exports.memory.buffer);_.set(r(b),M),_.set(r(g.vertices),A),_.set(r(g.triangles),T);for(var y=0;y<g.meshletCount;++y){var C=g.meshlets[y*4+0],O=g.meshlets[y*4+1],P=g.meshlets[y*4+3];t.exports.meshopt_computeMeshletBounds(R,A+C*4,T+O,P,M,f,v),m.push(d(R))}return w(M-w(0)),m}function p(g,b,f,v){var w=t.exports.sbrk,m=w(o),M=w(g.byteLength),A=w(b.byteLength),T=new Uint8Array(t.exports.memory.buffer);T.set(r(g),M),T.set(r(b),A),t.exports.meshopt_computeClusterBounds(m,M,g.length,A,f,v);var R=d(m);return w(m-w(0)),R}function x(g,b,f,v,w){var m=t.exports.sbrk,M=m(o),A=m(g.byteLength),T=v?m(v.byteLength):0,R=new Uint8Array(t.exports.memory.buffer);R.set(r(g),A),v&&R.set(r(v),T),t.exports.meshopt_computeSphereBounds(M,A,b,f,T,v?w:0);var _=d(M);return m(M-m(0)),_}return{ready:a,supported:!0,buildMeshlets:function(g,b,f,v,w,m){i(g.length%3==0),i(b instanceof Float32Array),i(b.length%f==0),i(f>=3),i(v>=3&&v<=256),i(w>=1&&w<=512),m=m||0;var M=g.BYTES_PER_ELEMENT==4?g:new Uint32Array(g);return l(t.exports.meshopt_buildMeshletsFlex,M,b,b.length/f,f*4,v,w,w,m,0)},buildMeshletsFlex:function(g,b,f,v,w,m,M,A){i(g.length%3==0),i(b instanceof Float32Array),i(b.length%f==0),i(f>=3),i(v>=3&&v<=256),i(w>=1&&m<=512),i(w<=m),M=M||0,A=A||0;var T=g.BYTES_PER_ELEMENT==4?g:new Uint32Array(g);return l(t.exports.meshopt_buildMeshletsFlex,T,b,b.length/f,f*4,v,w,m,M,A)},buildMeshletsSpatial:function(g,b,f,v,w,m,M){i(g.length%3==0),i(b instanceof Float32Array),i(b.length%f==0),i(f>=3),i(v>=3&&v<=256),i(w>=1&&m<=512),i(w<=m),M=M||0;var A=g.BYTES_PER_ELEMENT==4?g:new Uint32Array(g);return l(t.exports.meshopt_buildMeshletsSpatial,A,b,b.length/f,f*4,v,w,m,M)},extractMeshlet:function(g,b){return i(b>=0&&b<g.meshletCount),h(g,b)},computeClusterBounds:function(g,b,f){i(g.length%3==0),i(g.length/3<=512),i(b instanceof Float32Array),i(b.length%f==0),i(f>=3);var v=g.BYTES_PER_ELEMENT==4?g:new Uint32Array(g);return p(v,b,b.length/f,f*4)},computeMeshletBounds:function(g,b,f){return i(b instanceof Float32Array),i(b.length%f==0),i(f>=3),u(g,b,b.length/f,f*4)},computeSphereBounds:function(g,b,f,v){return i(g instanceof Float32Array),i(g.length%b==0),i(b>=3),i(!f||f instanceof Float32Array),i(!f||f.length%v==0),i(!f||v>=1),i(!f||g.length/b==f.length/v),v=v||0,x(g,g.length/b,b*4,f,v*4)}}})();var I_=(function(){var s="b9H79Tebbbe9vx9Geueu9Geub9Gbb9Gkuuuuuuuuuuub9Gouuuuuub9Gwuuuuuu9999b9Giuuueu9Ge98e999Gvuuuuueu9Gd99ueu9Ge99e999Gd98ue98isPdilvboberrwDqklve9Weiiviebeoweuecj:Gdkr9Avo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bbK9TW79O9V9Wt9F9NW9UWV9HtW9u9H9U9NW9Ut7beL9TW79O9V9Wt9F9NW9UWV9HtW9o9VV9T9H27bil79IV9RblDwebcekdorq;X9PPdbk;e8EvHuw99euv99wu8Jjjjjbc;Wb9Rgk8Kjjjjbakcxfcbc;Kbz:fjjjb8AakcualcdtalcFFFFi0Ecbyd:W:2:cjbHjjjjbbgxBdxakceBd2adci9Uhmalcd4alfhPcehsinasgzcethsazaP6mbkakcuazcdtgsazcFFFFi0Ecbyd:W:2:cjbHjjjjbbgPBdzakcdBd2aPcFeasz:fjjjbhHaDcd4hOarcd4hAavcd4hCdnalTmbazcufhrcbhvindndnaHcbaiavaC2cdtfgzydlgDaDcjjjj94SEgPcH4cbaoavaA2cdtfgsydlgXcs4aXcjjjj94SE7aP7c:F:b:DD2cbazydbgQaQcjjjj94SEgPcH4cbasydbgLcs4aLcjjjj94SE7aP7c;D;O:B8J27cbazydwgKaKcjjjj94SEgzcH4cbasydwgYcs4aYcjjjj94SE7az7c:3F;N8N27awavaO2cdtfgzydlg8AazydbgE7cFFFFrGgzcm4az7c:fjjK27arGgPcdtfgzydbgscuSmba8A::h3aE::h5aY::h8EaX::h8FaL::haaK::hhaD::hgaQ::h8JcehDinaDhzdnaiasaC2cdtfgDIdba8J9CmbaDIdlag9CmbaDIdwah9CmbaoasaA2cdtfgDIdbaa9CmbaDIdla8F9CmbaDIdwa8E9CmbawasaO2cdtfgDIdba59CmbaDIdla39BmikazcefhDaHaPazfarGgPcdtfgzydbgscu9hmbkkazavBdbavhskaxavcdtfasBdbavcefgval9hmbkkcbhPaHcbyd:0:2:cjbH:bjjjbbakceBd2ak9cb83ibakaeadaxalakcxfz:cjjjbcuamcltadcFFFFd0Ecbyd:W:2:cjbHjjjjbbh8Kakcxfakyd2gKcdtfa8KBdbakaKcefgYBd2dnadci6mbaehsa8KhzamhvindndnaeTmbascwfydbhDasclfydbhHasydbhrxekaPcdfhDaPcefhHaPhrkJbbbbh8JJbbbbJbbbbJbbbbJbbbbJbbjZJbbj:;awaHaO2cdtfgXIdbawaraO2cdtfgQIdbga:tawaDaO2cdtfgLIdlaQIdlgh:tggNaXIdlah:tghaLIdbaa:tN:tgaJbbbb9EEaaJbbbb9BEg5aiaraC2cdtfgrIdwgaaiaHaC2cdtfgHIdwg39BEa5arIdlg8FaHIdlg8L9BEa5arIdbg8EaHIdbg8M9BEg5aaaiaDaC2cdtfgDIdwg8N9BEa5a8FaDIdlgy9BEa5a8EaDIdbg8P9BEg5a3a8N9BEa5a8Lay9BEa5a8Ma8P9BEh5dnaga3aa:tNaha8Naa:tN:tgaaaNaga8Ma8E:tNaha8Pa8E:tN:tg8Ea8ENaga8La8F:tNahaya8F:tN:tggagNMMghJbbbb9Bmba5ah:r:vh8Jkazcxfa5Udbazcwfaaa8JNUdbazclfaga8JNUdbaza8Ea8JNUdbascxfhsazczfhzaPcifhPavcufgvmbkkcbhzakcxfaYcdtfcuadcdtadcFFFFi0Ecbyd:W:2:cjbHjjjjbbgDBdbakaKcdfgPBd2dnadTmbaDhsinasazBdbasclfhsadazcefgz9hmbkkakcxfaPcdtfcuamcdtadcFFFF970Ecbyd:W:2:cjbHjjjjbbgvBdbakaKcifgzBd2akcxfazcdtfamcbyd:W:2:cjbHjjjjbbgYBdbakaKclfBd2dnadci6mba8KcxfhsavhPcbhzinaPazBdbaYazfcdcbasIdbg8JJbbbb9DEa8JJbbbb9EV86bbaPclfhPasczfhsamazcefgz9hmbkkdnalTmbcbhIakydlh8Rakydbh8SinaIcdthzdna8SaIcefgIcdtfydbgsa8SazfydbgzSmbasaz9RhQa8RazcdtfhLcbhRinaLaRcdtfg8Uydbgzcd4g8Vci2g8WazciGcdtgsyd:e:G:cjbfhza8Wasydj:G:cjbfhsdnaeTmbaeazcdtfydbhzaeascdtfydbhskdnaRcefgRaQ9pmbaxazcdtfydbhKaxascdtfydbhEaYa8Vfh8Aava8Vcdtfh8XaRhwinaLawcdtfgXydbgzcd4gsci2gOazciGcdtgzyd:e:G:cjbfhPaOazydj:G:cjbfhzdnaeTmbaeaPcdtfydbhPaeazcdtfydbhzkdndnaxazcdtfydbaKSmbaxaPcdtfydbaE9hmekaYasfRbbgza8ARbbgPVciSmbdnazaPGmba8VhPdna8Va8XydbgzSmba8XhHinaHavazgPcdtfgrydbgzBdbarhHaPaz9hmbkkdnasavascdtfgHydbgzSmbinaHavazgscdtfgrydbgzBdbarhHasaz9hmbkkaPasSmbaYasfgHRbbaYaPfgzRbbVciSmeavascdtfaPBdbazazRbbaHRbbV86bbkdna8UydbciGa8WfgsaDascdtfgPydbgzSmbinaPaDazgscdtfgHydbgzBdbaHhPasaz9hmbkkdnaXydbciGaOfgPaDaPcdtfgHydbgzSmbinaHaDazgPcdtfgrydbgzBdbarhHaPaz9hmbkkasaPSmbaDaPcdtfasBdbkawcefgwaQ9hmbkkaRaQ9hmbkkaIal9hmbkkdnadTmbcbhrinarhsdnaraDarcdtfgwydbgzSmbawhPinaPaDazgscdtfgHydbgzBdbaHhPasaz9hmbkkawasBdbarcefgrad9hmbkcbh8Vabcbadcltz:fjjjbhQdnadci6mbaqceGhKaDhLaeh8Acbh8Windna8Ka8WcltfgPIdxJbbbb9Bmbaea8Wci2gEcdtfhXcbhsa8VhwinaQaLasfydbcltfhzdndnaeTmba8AasfydbhHaXasc:e:G:cjbfydbcdtfydbhOaXascj:G:cjbfydbcdtfydbhxxekasc:e:G:cjbfydbaEfhOascj:G:cjbfydbaEfhxawhHkazaPIdbghaoaHaA2cdtfgrIdbg8JaPIdwg8EarIdwggNaha8JNaPIdlg5arIdlghNMMgaN:tg8FJbbbbJbbjZa8EagaaN:tg8Ea8ENa8Fa8FNa5ahaaN:tgaaaNMMg8F:r:va8FJbbbb9BEJ;As6nJbbjZaiaxaC2cdtfgrIdwaiaHaC2cdtfgHIdwg3:tg8Faga8FagNarIdbaHIdbg8L:tg8Ma8JNaharIdlaHIdlg8N:tgyNMMg8FN:tg5aiaOaC2cdtfgHIdwa3:tg3aga3agNaHIdba8L:tg8Pa8JNahaHIdla8N:tg8NNMMg3N:tggNa8Ma8Ja8FN:tg8La8Pa8Ja3N:tg8JNayaha8FN:tg8Fa8Naha3N:tghNMMJbbbbJbbjZa5a5Na8La8LNa8Fa8FNMMagagNa8Ja8JNahahNMMNg8J:rgg:va8JJbbbb9BENgh:lg8Ja8JJbbjZ9EEg8Ja8JJ7;A9s89NJ:L9t9s::MNJ;ob;jZMJbbjZa8J:t:rNg8J:ta8JahJbbbb9DENg8Jaga8JNaKEg8JNazIdbMUdbazaaa8JNazIdlMUdlaza8Ea8JNazIdwMUdwawcefhwasclfgscx9hmbkkaLcxfhLa8Acxfh8Aa8Vcifh8Va8Wcefg8Wam9hmbkcbhrinarhsdnaravarcdtfgPydbgzSmbinaPavazgscdtfgHydbgzBdbaHhPasaz9hmbkkaQarc8W2fgzc3fJbbjZJbbj:;aYasfRbbceGEg8JUdbazc8Sfa8JUdbaza8JUdxarcefgram9hmbkkaqcdGhvcbhsaDhPaQhzindnasaPydb9hmbdndnazcwfgHIdbg8Ja8JNazIdbggagNazclfgrIdbghahNMMgaJbbbb9BmbaHa8JJbbjZaa:r:vgaNUdbarahaaNUdbazagaaNg8JUdbxekaHa8JJbbbbNUdbarahJbbbbNUdbazagJbbbbNg8JUdba8JJbbjZavEh8Jkaza8JUdbkaPclfhPazczfhzadascefgs9hmbkcbhzaQhsindnazaDydbgPSmbasaQaPcltfgPydwBdwasaP8Pdb83dbkaDclfhDasczfhsadazcefgz9hmbkkdnakyd2gsTmbascdtakcxffc98fhzinazydbcbyd:0:2:cjbH:bjjjbbazc98fhzascufgsmbkkakc;Wbf8Kjjjjbk;:levucualcefgocdtaocFFFFi0Ecbyd:W:2:cjbHjjjjbbhoavavyd9GgrcdtfaoBdbavarcefBd9GabaoBdbcuadcdtadcFFFFi0Ecbyd:W:2:cjbHjjjjbbhoavavyd9GgrcdtfaoBdbavarcefBd9GabaoBdlabydbclfcbalcdtz:fjjjbhoadci9UhwdnadTmbdnaeTmbaehvadhrinaoaiavydbcdtfydbcdtfgDaDydbcefBdbavclfhvarcufgrmbxdkkadhraihvinaoavydbcdtfgDaDydbcefBdbavclfhvarcufgrmbkkdnalTmbcbhraohvinavydbhDavarBdbavclfhvaDarfhralcufglmbkkdnadci6mbabydlhrcbhlcdhvindndnaeTmbaiaealfgqydbcdtfhDaiaqcwfydbcdtfhdaiaqclfydbcdtfhqxekaialfgDcwfhdaDclfhqkadydbhdaqydbhqaoaDydbcdtfgDaDydbgDcefBdbaraDcdtfavc9:fBdbaoaqcdtfgDaDydbgDcefBdbaraDcdtfavcufBdbaoadcdtfgDaDydbgDcefBdbaraDcdtfavBdbalcxfhlavclfhvawcufgwmbkkabydbcbBdbk:SEvxui99duv99xu8Jjjjjbc;Wb9Rgw8Kjjjjbawcxfcbc;Kbz:fjjjb8AawcualcdtalcFFFFi0Ecbyd:W:2:cjbHjjjjbbgDBdxawceBd2adci9Uhqalcd4alfhkaoz:mjjjbhocehxinaxgmcethxamak6mbkawcuamcdtgxamcFFFFi0Ecbyd:W:2:cjbHjjjjbbgkBdzawcdBd2akcFeaxz:fjjjbhPavcd4hsdnalTmbamcufhzcbhHindndnaPcbaiaHas2cdtfgmydlgvavcjjjj94SEgxcH4ax7c:F:b:DD2cbamydbgOaOcjjjj94SEgxcH4ax7c;D;O:B8J27cbamydwgAaAcjjjj94SEgmcH4am7c:3F;N8N27azGgkcdtfgmydbgxcuSmbaA::hCav::hXaO::hQcehvinavhmdnaiaxas2cdtfgvIdbaQ9CmbavIdlaX9CmbavIdwaC9BmikamcefhvaPakamfazGgkcdtfgmydbgxcu9hmbkkamaHBdbaHhxkaDaHcdtfaxBdbaHcefgHal9hmbkkcbhkaPcbyd:0:2:cjbH:bjjjbbawceBd2aw9cb83ibawaeadaDalawcxfz:cjjjbcuaqcltadcFFFFd0Ecbyd:W:2:cjbHjjjjbbhLawcxfawyd2gKcdtfaLBdbawaKcefgOBd2dnadci6mbaehxaLhmaqhHindndnaeTmbaxcwfydbhzaxclfydbhvaxydbhPxekakcdfhzakcefhvakhPkJbbbbhQdnaiavas2cdtfgvIdbaiaPas2cdtfgPIdbgX:tgYaiazas2cdtfgzIdlaPIdlgC:tg8ANavIdlaC:tgCazIdbaX:tgEN:tgXaXNaCazIdwaPIdwg3:tg5NavIdwa3:tg3a8AN:tgCaCNa3aENaYa5N:tgYaYNMMg8AJbbbb9BmbJbbjZa8A:r:vhQkamcxfa8AJbbbb9CBdbamcwfaXaQNUdbamclfaYaQNUdbamaCaQNUdbaxcxfhxamczfhmakcifhkaHcufgHmbkkcbhmawcxfaOcdtfcuadcdtg8EadcFFFFi0Ecbyd:W:2:cjbHjjjjbbgvBdbawaKcdfg8FBd2dnadTmbavhxinaxamBdbaxclfhxadamcefgm9hmbkkdnalTmbcbhaawydlhhawydbhginaacdthmdnagaacefgacdtfydbgxagamfydbgmSmbaxam9RhAahamcdtfh8Jcbh8Kina8Ja8Kcdtfg8Lydbgmcd4gkci2g8MamciGcdtgxyd:e:G:cjbfhma8Maxydj:G:cjbfhxdnaeTmbaeamcdtfydbhmaeaxcdtfydbhxkdna8Kcefg8KaA9pmbaLakcltfhOaDamcdtfydbh8NaDaxcdtfydbhya8KhHina8JaHcdtfg8Pydbgmcd4gkci2gzamciGgPcdtgmyd:e:G:cjbfhxazamydj:G:cjbfhmdnaeTmbaeaxcdtfydbhxaeamcdtfydbhmkdndnaDamcdtfydba8NSmbaDaxcdtfydbay9hmekaOIdwaLakcltfgmIdwNaOIdbamIdbNaOIdlamIdlNMMao9ETmbaOydxamydx9hmbdna8LydbciGa8MfgxavaxcdtfgkydbgmSmbinakavamgxcdtfgPydbgmBdbaPhkaxam9hmbka8PydbciGhPkdnaPazfgkavakcdtfgPydbgmSmbinaPavamgkcdtfgzydbgmBdbazhPakam9hmbkkaxakSmbavakcdtfaxBdbkaHcefgHaA9hmbkka8KaA9hmbkkaaal9hmbkkdndndnadTmbcbhzinazhxdnazavazcdtfgHydbgmSmbaHhkinakavamgxcdtfgPydbgmBdbaPhkaxam9hmbkkaHaxBdbazcefgzad9hmbkcbh8Mabcbadcx2z:fjjjbh8Padcd9nmeavhAaeh8NcbhyinaLaycltfhkaeayci2g8JcdtfhDcbhxa8MhHina8PaAaxfydbcx2fhmdndnaeTmba8NaxfydbhzaDaxc:e:G:cjbfydbcdtfydbhOaDaxcj:G:cjbfydbcdtfydbhPxekaxc:e:G:cjbfydba8JfhOaxcj:G:cjbfydba8JfhPaHhzkamakIdbaiaPas2cdtfgPIdwaiazas2cdtfgzIdwgC:tgoaoNaPIdbazIdbgY:tgQaQNaPIdlazIdlg8A:tgXaXNMMaiaOas2cdtfgPIdwaC:tgCaCNaPIdbaY:tgYaYNaPIdla8A:tg8Aa8ANMMNgE:rg3J;As6nJbbjZaoaCNaQaYNaXa8ANMMJbbbbJbbjZa3:vaEJbbbb9BENgQ:lgoaoJbbjZ9EEgoaoJ7;A9s89NJ:L9t9s::MNJ;ob;jZMJbbjZao:t:rNgo:taoaQJbbbb9DENgoNamIdbMUdbamakIdlaoNamIdlMUdlamakIdwaoNamIdwMUdwaHcefhHaxclfgxcx9hmbkaAcxfhAa8Ncxfh8Na8Mcifh8MaycefgyaqSmdxbkkabcbadcx2z:fjjjb8Axekcbhxavhka8Phmindnaxakydb9hmbJbbbbhodnamcwfgPIdbgQaQNamIdbgXaXNamclfgzIdbgCaCNMMgYJbbbb9BmbJbbjZaY:r:vhokaPaQaoNUdbazaCaoNUdbamaXaoNUdbkakclfhkamcxfhmadaxcefgx9hmbkkdnarJbbbb9ETmbawcxfa8Fcdtfcuadcltg8Pa8EcFFFFi0Ecbyd:W:2:cjbHjjjjbbg8JBdbdndnar:ngo:lJbbb9p9DTmbao:Ohmxekcjjjj94hmkaKcifh8Famce9imbamcqamcq9iEh8Nadci6hLcbhAina8Jcba8Pz:fjjjbhPdnaLmbcbhDavhOinavaDcx2fhecbhxinabaOaxfydbgzcx2fgmIdwhoabaeaxcj:G:cjbfydbcdtfydbgHcx2fgkIdwhQamIdbhXakIdbhCamIdlhYakIdlh8AaPazcltfgmamIdxJbbjZMUdxamamIdbaCaX:taoaQNaXaCNaYa8ANMMgXaXNJbbbbaXJbbbb9EEgXNgCMUdbamamIdla8AaY:taXNgYMUdlamaQao:taXNgoamIdwMUdwaPaHcltfgmamIdxJbbjZMUdxamamIdbaC:tUdbamamIdlaY:tUdlamamIdwao:tUdwaxclfgxcx9hmbkaOcxfhOaDcefgDaq9hmbkkdnadTmbaraA:Z:tgoJbbjZaoJbbjZ9DEJbbbZNh8AcbhxavhkabhzaPhmindnaxakydb9hmbamcxfIdbgQJbbbb9ETmbJbbbbhodnamcwfIdba8AaQ:vgQNazcwfgPIdbMgXaXNamIdbaQNazIdbMgCaCNamclfIdbaQNazclfgHIdbMgQaQNMMgYJbbbb9BmbJbbjZaY:r:vhokaPaXaoNUdbaHaQaoNUdbazaCaoNUdbkakclfhkazcxfhzamczfhmadaxcefgx9hmbkkaAcefgAa8N9hmbkkdnadTmbcbhmabhxindnamavydbgkSmbaxabakcx2fgkydwBdwaxak8Pdb83dbkavclfhvaxcxfhxadamcefgm9hmbkkdna8FTmba8Fcdtawcxffc98fhminamydbcbyd:0:2:cjbH:bjjjbbamc98fhma8Fcufg8Fmbkkawc;Wbf8Kjjjjbk9teiucbcbyd:4:2:cjbgeabcifc98GfgbBd:4:2:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabk9teiucbcbyd:4:2:cjbgeabcrfc94GfgbBd:4:2:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikTeeucbabcbyd:4:2:cjbge9Rcifc98GaefgbBd:4:2:cjbdnabZbcztge9nmbabae9RcFFifcz4nb8Akk9pee98abab:Igbabab:Ige:Iab9e9P9q;U;G9c:t;58::I9e8N8Es;O:h;a9w:;:G:Iae9e9c86v;H9t9v:LZ:Iab9e:b9ExpFF;F:;:I9ebbbbbb;WZ:G:G:G:2k0ed98ababab:Ige:Igdaeae:I:Iae9e:NS87:m:h;n;g8::I9et;N;k;I;5bI:;:G:Iadae9e:Y;79U:jzH:bZ:I9e93:S;l9u9v9v;f:;:G:Iab:G:G:2k:K8Flqud98zul988Jjjjjbc:Wl9Rgv8Kjjjjbcbhoadc99fcK9Tgrcbarcb9kEgwc9O2adfhDdnalcdtc:q:G:cjbfydbgqaicufgkfgdcb9imbawak9RhxdnadTmbaqaifgdceGhmawcdtaicdt9Rc:O:G:cjbfhradc9:GhPavc;adfhdcbhoin9ebbbbbbbbhs9ebbbbbbbbhzdnaxaofgHcb9imbarc98fydb:3hzkadaz85ibdnaHcu9imbarydb:3hskadcwfas85ibadczfhdarcwfhraPaocdfgo9hmbkamTmeaxaofhxkdndnaxcb9omb9ebbbbbbbbhzxekaxcdtyd:G:G:cjb:3hzkavc;adfaocitfaz85ibkaDc9OfhOcbhdaqcbaqcb9kEhmaic;:FFFrGhHaiceGhAaicitavc;adffc9WfhPinadhxdndnaice9omb9ebbbbbbbbhzxekcbhr9ebbbbbbbbhzdnakTmbaPhdabhoinaocwf8Ribad8Rib:Iao8Ribadcwf8Rib:Iaz:G:Ghzadc9WfhdaoczfhoaHarcdfgr9hmbkaATmekabarcitf8Ribavc;adfaxakfar9Rcitf8Rib:Iaz:Ghzkavaxcitfaz85ibaPcwfhPaxcefhdaxam9hmbkaic;:FFFrGhHaiceGhCc8VaD9RhXc8WaD9RhQavc;Gifc98fgLaqcdtfhKawcdtc:G:G:cjbfhwavc;adfc94fhYavc;Gifc9Wfh8Aavc9WfhEaDc9Nfh3aqhxdninavaxcitgdf8Ribhzdnaxce9imbcbhrdndnaxce9hmbaxhdxekaxceGhmaxc;:FFFrGhPaEadfhdcbhravc;Gifhoinaoaz9ebbbbbb9W8::I;8d:3gs9ebbbbbb9W;b:Iaz:G;8dBdbaoclfadcwf8Ribas:Ggz9ebbbbbb9W8::I;8d:3gs9ebbbbbb9W;b:Iaz:G;8dBdbad8Ribas:Ghzaocwfhoadc9WfhdaParcdfgr9hmbkamTmeaxar9Rhdkavc;Gifarcdtfaz9ebbbbbb9W8::I;8d:3gs9ebbbbbb9W;b:Iaz:G;8dBdbavadcitfc94f8Ribas:GhzkazaOz:njjjbgz9ebbbbbb;aZ:I:C9ebbbbbba;a:Iaz:Ggzaz;8dg5:3:HhzdndndndndnaOce9ig8Embavc;Gifaxcdtfc98fgdadydbgdadaQ91gdaQt9RgoBdbaoaX91h8Fada5fh5xekaOmeavc;Gifaxcdtfc98fydbcL91h8Fka8Fce9imdxekcdh8Faz9ebbbbbb;GZ9Mmbcbh8Fxekcehodnaxce9imbcbhrcbhPdnaxceSmbaxceGhaaxc;:FFFrGhAcbhravc;GifhdcbhPinadydbhodndndndnaPTmbcFFFrhPxekaoTmecjjjwhPkadaPao9RBdbcbhPxekcehPkadclfgmydbhodndndndnaPmbcFFFrhPxekaoTmecjjjwhPkamaPao9RBdbcehPcbhoxekcbhPcehokadcwfhdaAarcdfgr9hmbkaaTmekavc;GifarcdtfgrydbhddndnaPTmbcFFFrhoxekcehoadTmecjjjwhokaraoad9RBdbcbhokdna8EmbcFFFihddndna3PdebdkcFFFehdkavc;Gifaxcdtfc98fgrarydbadGBdbka5cefh5a8Fcd9hmb9ebbbbbb;WZaz:Hhzcdh8Faombaz9ebbbbbb;WZaOz:njjjb:Hhzkdnaz9ebbbbbbbb9Imbdnaxaq9mmbaxaq9RgdciGhrcbhoaxhPdndnaqax9Rc980mbadc98Ghma8AaxcdtfhdcbhoaxhPinadydbadclfydbadcwfydbadcxfydbaoVVVVhoadc9WfhdaPc98fhPamc98fgmmbkarTmekaLaPcdtfhdinadydbaoVhoadc98fhdarcufgrmbkkaoTmbavc;Gifaxcdtfc98fhdinaxcufhxaOc9OfhOadydbhoadc98fhdaoTmbxlkkaKhdaxhPinaPcefhPadydbhoadc98fhdaoTmbkaYaiaxfcitfhminavc;adfaxaifgAcitfawaxcefgxcdtfydb:385ibdndnaice9omb9ebbbbbbbbhzxekcbhr9ebbbbbbbbhzdnakTmbamhdabhoinaocwf8Ribad8Rib:Iao8Ribadcwf8Rib:Iaz:G:Ghzadc9WfhdaoczfhoaHarcdfgr9hmbkaCTmekabarcitf8Ribavc;adfaAar9Rcitf8Rib:Iaz:Ghzkavaxcitfaz85ibamcwfhmaxaP9imbkaPhxxekkdndnazcKaD9Rz:njjjbgz9ebbbbbb9Wc9MTmbavc;Gifaxcdtfaz9ebbbbbb9W8::I;8dgd:39ebbbbbb9W;b:Iaz:G;8dBdbaxcefhxaDhOxekaz;8dhdkavc;GifaxcdtfadBdbkdnaxcb9imb9ebbbbbb;WZaOz:njjjbhzdndnaxceGTmbaxhoxekavaxcitfazavc;Gifaxcdtfydb:3:I85ibaxcufhoaz9ebbbbbb9W8::IhzkdnaxTmbaocefhraocdtavc;Giffc98fhdaocitavfc94fhoinaoaz9ebbbbbb9W8::Igsadydb:3:I85ibaocwfazadclfydb:3:I85ibadc94fhdaoc9Wfhoas9ebbbbbb9W8::Ihzarc9:fgrmbkkavaxcitfhHaxhdindndnaqaxadgi9RgAaqaA9iEgdcb9omb9ebbbbbbbbhzxekadcefgociGhrdndnadci9pmbcbhd9ebbbbbbbbhzxekcbhPcbaoc98G9Rhm9ebbbbbbbbhzcbhdinadc1:2:cjbf8RibaHadfgocKf8Rib:Iadcj:2:cjbf8Ribaoczf8Rib:Iadc;4:1:cjbf8Ribaocwf8Rib:Iadc;W:1:cjbf8Ribao8Rib:Iaz:G:G:G:GhzadcafhdamaPc98fgP9hmbkarTmecbaP9Rhdkadcithdinadc;W:1:cjbf8RibaHadf8Rib:Iaz:Ghzadcwfhdarcufgrmbkkavc:GefaAcitfaz85ibaHc94fhHaicufhdaicb9kmbkkdndndndndnalPleddblk9ebbbbbbbbhhdnaxce9imbaxhddnaxceGTmbavc:Gefaxcitfgdc94fgoao8Ribgzad8Ribgs:Ggg85ibadasazag:H:G85ibaxcufhdkaxceSmbadcdfhoadcitavc:Geffc9Wfhdinadad8Ribgsadcwfgr8RibggadczfgH8Ribg8J:Ggz:Gg8K85ibaHa8Jagaz:H:G85ibarazasa8K:H:G85ibadc9Wfhdaoc9:fgocd9kmbkaxceSmbaxcefhoaxcitavc:Geffc94fhdinadad8Ribgzadcwfgr8Ribgs:Ggg85ibarasazag:H:G85ibadc94fhdaocufgocd0mbkaxcefhoavc:Gefaxcitfhd9ebbbbbbbbhhinahad8Rib:Ghhadc94fhdaocufgocd0mbkkav8Ri:Gehza8Fmdaeaz85ibaeah85izaeav8Ri:Oe85iwxikdndnaxcb9omb9ebbbbbbbbhzxekdndnaxciGci9hmb9ebbbbbbbbhzaxhoxekaxcefciGhravc:Gefaxcitfhd9ebbbbbbbbhzaxhoinaocufhoazad8Rib:Ghzadc94fhdarcufgrmbkkaxci6mbaocefhraocitavc:Geffc9OfhdinazadcKf8Rib:Gadczf8Rib:Gadcwf8Rib:Gad8Rib:Ghzadc9Gfhdarc98fgrmbkkaeaz:Aaza8FE85ibxdkdndnaxcb9omb9ebbbbbbbbhzxekdndnaxciGci9hmb9ebbbbbbbbhzaxhoxekaxcefciGhravc:Gefaxcitfhd9ebbbbbbbbhzaxhoinaocufhoazad8Rib:Ghzadc94fhdarcufgrmbkkaxci6mbaocefhraocitavc:Geffc9OfhdinazadcKf8Rib:Gadczf8Rib:Gadcwf8Rib:Gad8Rib:Ghzadc9Gfhdarc98fgrmbkkaeaz:Aaza8FE85ibav8Ri:Geaz:Hhzcehddnaxce9imbaxciGhodnaxcufci6mbaxc;8FFFrGhHavc:Gefcafhdcbhrinazadc9Of8Rib:Gadc9Wf8Rib:Gadc94f8Rib:Gad8Rib:GhzadcafhdaHarclfgr9hmbkaoTmearcefhdkavc:Gefadcitfhdinazad8Rib:Ghzadcwfhdaocufgombkkaeaz:Aaza8FE85iwxekaeaz:A85ibaeah:A85izaeav8Ri:Oe:A85iwkavc:Wlf8Kjjjjba5crGk:ediiue98eu8Jjjjjbcz9Rgd8Kjjjjbdndnab:8gicFFFFrGglc;A:F:K;Ul0mbaeab:7gvav9e:d;i;j9T8W9F;KZ:I9ebbbbbbUJ:G9ebbbbbbU;d:Ggv9ebbb9q;7h;5:;:I:Gav9e9J9I8A9H:0z9r:::I:G85ibav;8dhlxekdnalcjjj;8r6mbaeabab:t:785ibcbhlxekadalalcL4c;Q9:fgocLt9R:::785iwadcwfadaocecbz:kjjjbhlad8Ribhvdnaicu9kmbaeav:A85ibcbal9Rhlxekaeav85ibkadczf8Kjjjjbalk;piiiue99e988Jjjjjbcz9Rge8Kjjjjbdndnab:8gdcFFFFrGgic;A:F:K;6i0mbJbbjZhlaicjjj;mi6meab:7z1jjjbhlxekdnaic;r:N;T:dl0mbdnaic;K:x;Bjl6mb9eKR9e9u;7hDn9eKR9e9u;7hD;aadcb9iEab:7:Gz1jjjb:mhlxdkab:7hvdnadcu9kmbav9eKR9e9u;7h;5Z:Gz:jjjjbhlxdk9eKR9e9u;7h;5Zav:Hz:jjjjbhlxekdnaic;v;J1:hl0mbdnaic;G;B:;:fl6mb9eKR9e9u;7hYn9eKR9e9u;7hY;aadcb9iEab:7:Gz1jjjbhlxdkdnadcu9kmb9e;sh8Zu98;zO;aab:7:Hz:jjjjbhlxdkab:79e;sh8Zu98;zO;a:Gz:jjjjbhlxekdnaicjjj;8r6mbabab:thlxekabaecwfz:ljjjbhiae8RiwhvdndndndnaiciGPlbedibkavz1jjjbhlxikav:Az:jjjjbhlxdkavz1jjjb:mhlxekavz:jjjjbhlkaeczf8Kjjjjbalk:Uebdndnaecjw9imbab9ebbbbbb;Gu:IhbdnaecFs9pmbaec:b94fhexdkab9ebbbbbb;Gu:IhbaecpLaecpL6Ec:c9Wfhexekaec:b949kmbab9ebbbbbb9Gi:Ihbdnaec:49W9nmbaec;jrfhexekab9ebbbbbb9Gi:Ihbaec;W9Oaec;W9O0EcMsfhekabaecFrf:T9c80:g:;:Ikk;mQdbcj:Gdk:WQebbbdbbbbbbbebbbibbblbbblbbbobbb:d;5:Ib9e9o9Ub;88PXb;r9x8Nb;D80;1b9I;B;ab88:z:vbc:qJb9J9r;:b:7;E:Rb:39H;fb869U8Kb;s9n9cb6o;GbD;Q8Ub3M;rb;R5;:b8P:X3b;O8::Nb;181:cb9e:78Ub:C;P:eb:08M9Wbc9:9Fb;w:r85b9t:d85b:C;085b:l9F:eby;5:9b;48F87b;EF:xbs:yvbH8V;Vbq9A:lb9T8F9Tb;p9:BbD;l8NbS9p:3b:E9MZbR;Q9Fb:68N91b;L;R;hb8997;Xb;385rbM9s:kb;79R;Qb8F:X9Fbw9D:nb8Wi9wb97;8Sb;W:R9Rba:8;pbB;0:Ab;J:P5b9E9H:rbwE;Mb:f:zWb:GC9Fb:nn9Obj;yFb8N79nboo8Xb;k9wXb;j:O7b97;I9Gb9R:m;abY;e9hb;n9N;dbD;O;Cb9z:dIb:l4;eb:M3:wb9e:V;DbY9x;rb:L8:vbvrFb8Z9:Zb;c8Y;Ob:y9p;Eb:7998Yb8M89;db8E9R;Vb:F;49Eb818F86bu;Y;kb;X:h5b98:qhbf8K98b;v9U;6b8WR93bX87Jb:1C;gb;dY:Db:T;e;cb8S9ncbxb9Db:g99Sb;JGRb:B;g:Ab8Z9Ibb:0;s98b:0:N:xb839v;vb;x8:;2b:JzKb9n4;8b9K:DIb9W;x:Rb9J98;4b96:W9xbLX;Nb;a69wb87;w;zb:N:eUb8K8J;lb;w:k93b9A9u8Jbb8F:5b;XqEbY;o;Fb:F8XFb9M8Efb:z9x9Hb:S;79hb9:u;ybgW:3b8Y;O:jb;M:;9Gb;V;e;nb2BDb9DZ;ubQ;E;xb9y87;Eb;E:BMb;sgyby:g;Ob;I9y9nb;g;k8Ybw;JQb;G99;lbL;a9qb;Z5:NbK;G9Bb8UA80b:dO9Ib:d9ieb;1:o9Bb:T:Wub8E;P;Yb9i9kJbz9N;tb:Q;D;yb:U9F9cbf9H;obqy:Kb;t:z:0bo:M;Yb9C93ub:J;c:db9H881b:k794b:V:m9Ab9V;x:9bR:M9Jb;0:;;lb:n:b;Vb8M;b9Nb9v;kTb;k;zBby:O;sb;c9H:nbO;j93bl8MCbOS:Bb;e9z;eb;i;f9eb9n:Y:rbbL;Zb;uJ:Tb8P6;Lbp;vzbb::;8b8EN;mb9W;o;UbA8:;1b;S;Xjb:Z;N;db;h;4yb:tvNb;bG8:b8UD:ZbkT;Zb1O:Cb:Ra97b8U:1:Fb9hM;cb978Y8Vbx9v9TbV:N:qb9R;N8Fb8X;l:wb95Q9kbc95;Ib;0;F:jb;ON:xb;I;M:eb:z8X:xb1;T9Rb9F9FBb:7pPb9i:A:0b9N:K2bGV9cb:n9D8Yb:FX:4b:8;LDb:n8X8Lb;3t85b8Wv3bmxeb0w9Ob8S;U9yb9h:Q:qbt;Ndb:9;w8Kb;399:Mb9U9iVb:FQ;Vb:oN:Mb:0:r;2b;r9t9rb;pq;Yba:y8Zb;109:b:Y9J9Ob;D8:9Fbn9Dib:f:jub9v9s8Pb839K;ab9T;yzb8Y9i8Yb9B9m91b9oG;ubT9u9UbkD;bbI;19PbC9M;vb8Nr:Db9Dl9qb:087;Bb;Q4;fb:h;5Lb69R99b58N:6b:w9P8Pb;g;m:Sb:TC9ub:q;Ifb1;z:jb8SV9qbl:K::b93rNb;Z8W9Wbb;88Nb;QG:Ob9M;c6b9K;G89b:x;D:db:JZ:xbJNpbm:g:mb8Xc;EbM85:Db;D9W:mbL:3;Nbw;F87bX838Rb9Cj:Gb9Aj:tbzHMbs;O;yb2j:Vb;BF0bU:qsb9zK4b9I:LXb9H;l:7b;h:j:5bzn:9b;s;Ylb6918Nb;R:2;2b;Bg:7bqC:Qb:j8M8Vb9K:d4bD878ZbPN8Ab9r86:Qb5:J;cb:V;T:Ub9C8MOb9T;c9nbR96:Cb;a9w:xbiZ:dbD;W;2b8Rn:mb9T8X:zb85:0rbxaXb;y;d9Bb;1M;eb;g:T0b9o;k:Lb:N83;nb;M:PBb:RMNb;D9c9ObY9J;Eb4:m;Vb9O:l9sb;8;B83b:U:H:Rb;FX8Xbb:U:Hbx;7;Ab9K9n9Mb;Tv:3b8PW8Wb9x9w:;b9hF86bf;5:5b91::;Zby:t;Fb:Rj8Wb9M:m;2bl;lXb;6gob;z;K5b89:Z:Kb9xE:pbB;nDb9o9c;PbA:::Kb8Z8J:1b;W:Q8Ab9pW:Ob;s;b:LbkZsb9B94;nb8J;54b97:llb:jLVb;g:M9tb9V9U;Ib;V;Rbb:B9k9yb;e;A:3b:Q9M:6b4;p;pb;rd5b:X;XRb:m:z;bb;d:T93b:g9i;Ab;39D:Gb;gj;0b:S;W8Vb;D;S:AbZ9C:8b;q;E9Tb:q;h8FbI;B:2b:J8L86bb:V:Ab:T9t:tb:29xlb8PR:0b0j9:b;Ar:Nb4:QPb979z:HbQOIb;C:3Rb;6;Lpb:j;B;:b:j::pb;K42bo:P;8b8:j9Wb:f9UXbp:hFby8:rb9H9N8ZbIK:gb9n:9;Qb:Z;N:Vb:p9T9Ub:v9N85b8X:;9Bb:e;x9ib8W;FQb;hRJb8L9H81b;j9W;ob8W;l:4b:;2pb:Kb:Ibv2;Kb9A;D:Gbh9V9hb9IO;sb:59C:eb9W9H6b9R9w;Gb:z9seb9q9v83b8E;v:3b8Z;X;ebA9U9Fb9D8W;Kb:f8U:Pb5:Y;db:H8YBbw:3:Kb;Q:X;ubQ;3hb:p9P;Kb8NF93bxijb:nnRb9p;n:Gba:L:zb:Z:I;tb8V9Dqb:0;59cbH;A;lb99::;qb:B;B;bb:RL:9b;k:I:bbwf9Cb8U9vLb8Nb9vbuC;Wb;Hr:gbCk9Kb:wc:nb:h::;Eb;ApIb9R8L:2b97:j80bv;Z;:b:5:;:Eb9Of9pb9kI:Ob9p;e9AbR;4:8b;x9A:yb;0;h:vbm9n:nba86:Mb:K9x9FbCZ:XbjU:vb;maebG;D:gb;j;E:2b:;9G;1b9nWHber9Rb:m:W:Sb:Y;a;qb9r9v9ib8E;7Pb:vV;db:Jo87b;an81bo;C97b;GT;mb9o8P;6b;w;k;ib;O;Zcb989K;Eb:B9K;yb;z::8Xb:K:x;db939y;ub9P;J;fb;W;AAb:68688bSKSb9v919Fb;s:9;1b9UM;gb:S8U9DbP9e;Tb38:9cb9H;e:hb8Pp;Pb;N;w;Zbg98;kb9V:r81bw;G;fbF;x:nb9Uf;Ib:Wp;gb:tw;bb989Dtb9R:T:Yb;n9U:Db8:V97b;gHfb;3;p:Pb8P7;Fb:1;j:6b:3b9rb;I:Ymbt:68Kb;L999Gbt;y:kbmX8Sb:bKxb9:9MNbe8PQb:F964bpp::b9wT;Vb;z9:Bb;S;zAb:l:6:5b;e:x;8b8X:O8Nb;X9U;dbN;fBb;y:O9wb:0:O:1b;p;mPbO:jRb9V9x80b8S9w:jb:z;o;Jb;wa:5b9R9E:Qb8:I:CbH9F;mbpk9kb;H;0;7b:o879Tb;I:g8Sb;P;u:eb;8:0:Pb;V;U;rb8U81;jb8V859HbUh9ebE;z;ib:b;8qb;79kfb8V3;yb9t:0:eb9o:z:mb9ug;mbI9v;Cb;a;g;wbkY:wb8A9W:4b9P:v9Kb8M9A9GbZ9s;UbuHsb;0:1Hb;8;l;1b80:8Rb80:8;Ub;O9D;mb;D9E9Gb9N:o:BbM8Z;Vb;jL:4b9H9y:Bb;H9x:8b9r:d;gb;y8:zb;DG9ibR3;Db:VK:Hbh8SSb9z;Z;xb;z96:yb:E9u;ab9p:g;6b9wo;8b;L95:Ub:jgBbU:Tgb9N:t;Cb9v;O:Qb:c8MUb;k;N:Bb9rm:Kb:z8Z:Xb:P;xPb9Pv9ibW:Y;Wbu1:Nb19m:xb;5;rBbhM:Zb97:c9kb:y;phbn:F;Cb;C9h9vb;Ht86b9N;R9cb;::D;Fb9E;u9Fb979N:Kb:6:S96b9v;2:Ib8R18Jbc:69vb9z9UwbhI:gb859h:db:j;J;Mb;L:E;ub6;7nbF9w;Pb3s;kb;f9z:kbN;68Rb;t;b;fbs;f;pb;B9A:Ub9h;f:gb:fJ9Ibh:g87b8S95Nbz9H:hbI9m97bj8S8AbJ:;Ob18M:qb9488:jb:O;e;Kb;L;B97b;e86;cb8M;0;Qb;39N:kbmM:;bW:J8Rb89:t:Xb:998kb:K9r;Cb8N;D9Jb9P;H;Db:ANYb:O8P:vb9O;oybD;T:0b9e:Fab9o:y;kb9W:c9Jb9:988Jbs:58Yb:N;1:obC9w;Nbh;Xwb:1:DIb9V9:9nb:LY9rb:1;5:Rb:c;F;wb:w;D9HbQBdb;e86:Fb:d:I:HbV;T9Tb85:n96b:c:4:Pb9R8Y9CbS8N9Bbb80;Tb;sb93b;8;09vbe9z9nb;GGjbbbbbbbbbbbbn;7h;5ZbbbbR9et8:bbbj:yS;488bbb9G9r;m9487bbbj:dE;W85bbbna8L96Ubbbjg:c;JBbbbb5;Z9P81bc:W:2dkxebbbdbbbn:Bbb",e=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var t,a=WebAssembly.instantiate(n(s),{}).then(function(l){t=l.instance,t.exports.__wasm_call_ctors()});function n(l){for(var d=new Uint8Array(l.length),u=0;u<l.length;++u){var p=l.charCodeAt(u);d[u]=p>96?p-97:p>64?p-39:p+4}for(var x=0,u=0;u<l.length;++u)d[x++]=d[u]<60?e[d[u]]:(d[u]-60)*64+d[++u];return d.buffer.slice(0,x)}function i(l){if(!l)throw new Error("Assertion failed")}function r(l){return new Uint8Array(l.buffer,l.byteOffset,l.byteLength)}function o(l,d,u,p,x,g,b,f,v,w){var m=t.exports.sbrk,M=m(d*16),A=l?m(l.byteLength):0,T=m(u.byteLength),R=m(g.byteLength),_=m(f.byteLength),y=new Uint8Array(t.exports.memory.buffer);l&&y.set(r(l),A),y.set(r(u),T),y.set(r(g),R),y.set(r(f),_),t.exports.meshopt_generateTangents(M,A,d,T,p,x*4,R,b*4,_,v*4,w),y=new Uint8Array(t.exports.memory.buffer);var C=new Float32Array(y.buffer,M,d*4).slice();return m(M-m(0)),C}function c(l,d,u,p,x,g,b){var f=t.exports.sbrk,v=f(d*12),w=l?f(l.byteLength):0,m=f(u.byteLength),M=new Uint8Array(t.exports.memory.buffer);l&&M.set(r(l),w),M.set(r(u),m),t.exports.meshopt_generateNormals(v,w,d,m,p,x*4,g,b),M=new Uint8Array(t.exports.memory.buffer);var A=new Float32Array(M.buffer,v,d*3).slice();return f(v-f(0)),A}var h={Compatible:1,ZeroFallback:2};return{ready:a,supported:!0,generateTangents:function(l,d,u,p,x,g,b,f){i(l===null||l instanceof Uint32Array||l instanceof Int32Array||l instanceof Uint16Array||l instanceof Int16Array),i(l===null||l.length%3==0),i(d instanceof Float32Array),i(d.length%u==0),i(u>=3),i(p instanceof Float32Array),i(p.length%x==0),i(x>=3),i(g instanceof Float32Array),i(g.length%b==0),i(b>=2),i(d.length/u==p.length/x),i(d.length/u==g.length/b),i(l!==null||d.length/u%3==0);for(var v=0,w=0;w<(f?f.length:0);++w)i(f[w]in h),v|=h[f[w]];var m=d.length/u,M=l?l.length:m,A=l===null||l.BYTES_PER_ELEMENT==4?l:new Uint32Array(l);return o(A,M,d,m,u,p,x,g,b,v)},generateNormals:function(l,d,u,p,x){i(l===null||l instanceof Uint32Array||l instanceof Int32Array||l instanceof Uint16Array||l instanceof Int16Array),i(l===null||l.length%3==0),i(d instanceof Float32Array),i(d.length%u==0),i(u>=3),i(l!==null||d.length/u%3==0),i(p>=0&&p<=Math.PI),x=x||0;var g=d.length/u,b=l?l.length:g,f=l===null||l.BYTES_PER_ELEMENT==4?l:new Uint32Array(l);return c(f,b,d,g,u,p,x)}}})();var Zx=(s,e,t)=>{let a=Math.max(0,Math.min(1,(t-s)/(e-s)));return a*a*(3-2*a)},tc=class{constructor(e){this.records=[],this.time=0,this.warm=new ge("#ff7428");let t=new Set;e.traverse(a=>{let n=a.userData?.sparkIgnition;if(!n?.energy?.length)return;let i=[];if(a.traverse(c=>{c.isMesh&&!t.has(c)&&(t.add(c),i.push(c))}),!i.length)return;let r=[],o=[];for(let c of i){let h=c.material,l=(Array.isArray(h)?h:[h]).map(d=>{let u=d.clone();return u.transparent=!0,u.depthWrite=!1,u.alphaTest=.002,o.push({material:u,color:d.color.clone(),emissive:d.emissive?.clone()||new ge(0)}),u});r.push({object:c,material:h}),c.material=Array.isArray(h)?l:l[0]}this.records.push({object:a,data:n,originals:r,materials:o,energy:0})}),this.update(0)}update(e){this.time=Number.isFinite(e)?e:0;for(let t of this.records){let a=t.data,n=(this.time%a.duration+a.duration)%a.duration/a.duration*(a.energy.length-1),i=Math.floor(n),r=n-i,o=Math.max(0,Math.min(1,a.energy[i]*(1-r)+a.energy[Math.min(i+1,a.energy.length-1)]*r));t.energy=o,t.object.visible=o>.015;let c=Zx(0,.16,o)*(.35+.65*o),h=.35+.65*Math.sqrt(o);for(let l of t.materials){let d=l.material;d.opacity=c,d.color.copy(l.color).multiplyScalar(h),d.emissive?.setRGB(l.emissive.r+this.warm.r*.025*o,l.emissive.g+this.warm.g*.025*o,l.emissive.b+this.warm.b*.025*o)}}}getState(){return this.records.map(e=>({name:e.object.name,energy:e.energy,visible:e.object.visible,opacity:e.materials[0].material.opacity,brightness:e.materials[0].material.color.r,kind:e.data.kind}))}dispose(){for(let e of this.records){for(let t of e.originals)t.object.material=t.material;e.object.visible=!0;for(let t of e.materials)t.material.dispose()}this.records=[]}};var ac=class{constructor(e){this.rigidLimbs=!!e.getObjectByName("Sparky_L_DetachedFlameLimb"),this.object=new $t,this.object.name="Sparky_Interactive_Float",this.object.add(e),this.position=[0,0,0],this.velocity=[0,0,0],this.target=[0,0,0],this.lag=[0,0,0],this.lagVelocity=[0,0,0],this.lastOffset=[0,0,0],this.halo=e.getObjectByName("Sparky_Flame_Follow"),this.crown=e.getObjectByName("Sparky_Crown_Follow"),this.frequencyHz=4.2,this.damping=.76}beforeAnimation(){for(let e=0;e<3;e++)this.halo&&this.halo.position.setComponent(e,this.halo.position.getComponent(e)-this.lastOffset[e]),this.crown&&this.crown.position.setComponent(e,this.crown.position.getComponent(e)-this.lastOffset[e]*.35);this.lastOffset=[0,0,0]}setTarget(e,t,a=0){this.target=[e,t,a].map(n=>Math.max(-.2,Math.min(.2,n)))}release(){this.target=[0,0,0]}impulse(e=0,t=.3,a=0){for(let n=0;n<3;n++)this.velocity[n]=Math.max(-.4,Math.min(.4,this.velocity[n]+[e,t,a][n]))}integrate(e,t,a,n,i,r){let o=2*Math.PI*i,c=o*Math.sqrt(1-r*r),h=Math.exp(-r*o*n),l=Math.cos(c*n),d=Math.sin(c*n),u=h*(l+r*o*d/c),p=h*d/c,x=-h*o*o*d/c,g=h*(l-r*o*d/c);for(let b=0;b<3;b++){let f=e[b]-a[b],v=u*f+p*t[b]+a[b];t[b]=x*f+g*t[b],e[b]=v}}update(e){e=Math.max(0,Math.min(e,.05)),this.integrate(this.position,this.velocity,this.target,e,this.frequencyHz,this.damping),this.integrate(this.lag,this.lagVelocity,this.position,e,3.4,.74),this.object.position.set(...this.position);let t=this.rigidLimbs?1:Math.max(.985,Math.min(1.015,1-this.velocity[1]*.04));this.object.scale.set(1/Math.sqrt(t),t,1/Math.sqrt(t));let a=this.lag.map((i,r)=>i-this.position[r]),n=Math.hypot(...a);n>.018&&(a=a.map(i=>i*.018/n));for(let i=0;i<3;i++)this.halo&&this.halo.position.setComponent(i,this.halo.position.getComponent(i)+a[i]),this.crown&&this.crown.position.setComponent(i,this.crown.position.getComponent(i)+a[i]*.35);this.lastOffset=a}reset(){this.beforeAnimation(),this.position=[0,0,0],this.velocity=[0,0,0],this.target=[0,0,0],this.lag=[0,0,0],this.lagVelocity=[0,0,0],this.object.position.set(0,0,0),this.object.scale.set(1,1,1)}};var nc=class{constructor(e,t){this.spring=new ac(e.scene),this.object=this.spring.object,this.mixer=new Rs(this.object),this.spark=new tc(e.scene),this.object.traverse(a=>{if(a.isMesh)for(let n of Array.isArray(a.material)?a.material:[a.material])n.transparent&&n.side===Xt&&(n.forceSinglePass=!0)}),this.animations=new Map(e.animations.map(a=>[a.name,a])),this.manifest=t,this.active=null,this.ambient=null,this.playing=!0,this.ended=!1,this.mixer.addEventListener("finished",a=>{a.action===this.active&&(this.ended=!0)})}play(e,{fade:t=.15,loop:a}={}){let n=this.animations.get(e);if(!n)throw new Error("Unknown animation: "+e);let i=this.active;this.spring.beforeAnimation(),e!=="Idle_Blink"&&e!=="Fire_Ambient"?(this.ambient=this.mixer.clipAction(this.animations.get("Fire_Ambient")),this.ambient.setLoop(Us,1/0).setEffectiveWeight(1).play()):this.ambient&&(this.ambient.stop(),this.ambient=null);let r=this.manifest.find(h=>h.name===e),o=a??r?.loop??e.endsWith("-loop"),c=this.mixer.clipAction(n);return c.reset().setLoop(o?Us:Oo,o?1/0:1),c.clampWhenFinished=!0,c.setEffectiveWeight(1).fadeIn(i&&i!==c?t:0).play(),i&&i!==c&&i!==this.ambient&&(i.fadeOut(t),setTimeout(()=>{i!==this.active&&i!==this.ambient&&i.stop()},(t+.08)*1e3)),this.active=c,this.name=e,this.playing=!0,this.ended=!1,c}update(e){this.spring.beforeAnimation(),this.playing&&this.mixer.update(Math.min(e,.05)),this.spring.update(e),this.spark.update(this.ambient?.isRunning()?this.ambient.time:this.active?.time||0)}seek(e){this.spring.reset(),this.mixer.stopAllAction(),this.active.reset().stopFading().setEffectiveWeight(1).play(),this.ambient&&this.ambient!==this.active&&this.ambient.reset().stopFading().setEffectiveWeight(1).play(),this.mixer.setTime(e),this.spark.update(this.ambient?.isRunning()?this.ambient.time:this.active?.time||0),this.object.updateMatrixWorld(!0),this.object.traverse(t=>{t.isSkinnedMesh&&t.skeleton.update()})}dispose(){this.spark.dispose(),this.mixer.stopAllAction(),this.mixer.uncacheRoot(this.object);let e=new Set;this.object.traverse(t=>{if(t.isMesh){e.has(t.geometry)||(e.add(t.geometry),t.geometry.dispose());for(let a of Array.isArray(t.material)?t.material:[t.material])if(!e.has(a)){e.add(a);for(let n of["map","roughnessMap","metalnessMap","normalMap","emissiveMap"])a[n]?.dispose();a.dispose()}}}),this.object.removeFromParent()}};var Gs=48,ic=s=>{let e=Math.sin(s*91.345+47.853)*43758.5453;return e-Math.floor(e)},sc=class{constructor(e,t,a){this.body=e;let n=e.skeleton.bones,i=e.skeleton.boneInverses,r=t.clone().invert();this.emitters=[],a.forEach((h,l)=>{let d=n.findIndex(x=>x.name==="Sparky_Flame_"+h.name+"_B");if(d<0)return;let u=(x,g,b)=>{let f=rc(x).applyMatrix4(r).applyMatrix4(e.bindMatrix).applyMatrix4(i[d]);this.emitters.push({k:l,bone:n[d],local:f,size:g,delay:b,last:null})},p=h.spine[h.spine.length-1];u(p,h.name==="Main"?1:.8,0)});let o=new Ci;o.copy(new un(1,1)),o.instanceCount=Gs,this.aPos=new ha(new Float32Array(Gs*3),3),this.aPar=new ha(new Float32Array(Gs*4),4),o.setAttribute("aPos",this.aPos),o.setAttribute("aPar",this.aPar),this.time={value:0},this.material=new rt({transparent:!0,depthWrite:!1,blending:_a,uniforms:{uTime:this.time},vertexShader:`attribute vec3 aPos;attribute vec4 aPar;varying vec2 vUv;varying vec4 vPar;
        void main(){vPar=aPar;vUv=vec2(position.x,position.y+.5);
          vec3 up=vec3(0.,1.,0.);vec3 toCam=normalize(cameraPosition-aPos);vec3 right=normalize(cross(up,toCam));
          vec3 p=aPos+right*position.x*aPar.y+up*(position.y+.5)*aPar.x;
          if(aPar.z<=0.||aPar.z>=1.)p=vec3(0.,-99.,0.);
          gl_Position=projectionMatrix*viewMatrix*vec4(p,1.);}`,fragmentShader:`uniform float uTime;varying vec2 vUv;varying vec4 vPar;
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
          gl_FragColor=vec4(c*a*1.25,a);}`}),this.mesh=new st(o,this.material),this.mesh.frustumCulled=!1,this.mesh.renderOrder=7,this.mesh.name="FireTipFlames",this.pieces=[],this.scale=1;let c=n.findIndex(h=>h.name==="Sparky_Body");c>=0&&(this.bodyBone={bone:n[c],chain:new Te().multiplyMatrices(i[c],e.bindMatrix).multiply(r)}),this._v=new k,this._m=new Te}tipWorld(e,t){return this._m.multiplyMatrices(this.body.matrixWorld,this.body.bindMatrixInverse).multiply(e.bone.matrixWorld),t.copy(e.local).applyMatrix4(this._m)}update(e,t,a,n=!0){if(this.time.value=e,this.mesh.visible=n,!a)return;this.body.updateMatrixWorld(!0);let i=this.bodyBone;i&&(this.scale=this._m.multiplyMatrices(this.body.matrixWorld,this.body.bindMatrixInverse).multiply(i.bone.matrixWorld).multiply(i.chain).getMaxScaleOnAxis());for(let c=0;c<this.emitters.length;c++){let h=this.emitters[c],l=a[h.k];if(!l)continue;let d=l.f+l.cycle-h.delay,u=Math.floor(d-.56),p=u;if(h.last===null){h.last=p;continue}if(p!==h.last&&(h.last=p,ic(c*13.1+p*7.7)<(h.delay?.18:.5))){let x=ic(c*3.3+p*1.9);this.pieces.push({p:this.tipWorld(h,new k),born:e,life:.75+.35*x,size:h.size*(.8+.45*x),seed:ic(p*5.1+c),drift:(ic(p+c*2.2)-.5)*.1})}}this.pieces=this.pieces.filter(c=>e-c.born<c.life&&e>=c.born).slice(-Gs);let r=this.aPos.array,o=this.aPar.array;for(let c=0;c<Gs;c++){let h=this.pieces[c];if(!h){o[c*4+2]=0;continue}let l=e-h.born,d=l/h.life,u=this.scale;r[c*3]=h.p.x+(h.drift*l+.01*Math.sin(l*6.5+h.seed*9))*u,r[c*3+1]=h.p.y+(.07*l+.1*l*l)*u-.045*h.size*u,r[c*3+2]=h.p.z+.6*h.drift*l*u,o[c*4]=(.13+.03*d)*h.size*u*(1-.35*d),o[c*4+1]=(.11-.035*d)*h.size*u*(1-.35*d),o[c*4+2]=Math.max(1e-4,d),o[c*4+3]=h.seed}this.aPos.needsUpdate=!0,this.aPar.needsUpdate=!0}dispose(){this.mesh.removeFromParent(),this.mesh.geometry.dispose(),this.material.dispose()}};var Vs=`float hash(vec3 p){p=fract(p*.3183099+vec3(.1,.2,.3));p*=17.;return fract(p.x*p.y*p.z*(p.x+p.y+p.z));}
float noise3(vec3 p){vec3 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(mix(hash(i),hash(i+vec3(1,0,0)),f.x),mix(hash(i+vec3(0,1,0)),hash(i+vec3(1,1,0)),f.x),f.y),mix(mix(hash(i+vec3(0,0,1)),hash(i+vec3(1,0,1)),f.x),mix(hash(i+vec3(0,1,1)),hash(i+vec3(1,1,1)),f.x),f.y),f.z);}
float fbm(vec3 p){return .62*noise3(p)+.27*noise3(p*2.03)+.11*noise3(p*4.01);}`,Hf=s=>{let e=Math.floor(s),t=s-e,a=t*t*(3-2*t),n=i=>{let r=Math.sin(i*127.1+311.7)*43758.5453;return r-Math.floor(r)};return n(e)*(1-a)+n(e+1)*a};function fl(s){return 1+.045*Math.sin(s*1.7)*.6+.035*(Hf(s*1.9)-.5)*2+.012*(Hf(s*4.3+17)-.5)*2}function Qx(s,e){let t=(n,i,r)=>{let o=Math.min(1,Math.max(0,(r-n)/(i-n)));return o*o*(3-2*o)},a=[];for(let n=0;n<e;n++){let i=.55+.3*(n*.618%1),r=s*i+n*.37+.2*Math.sin(s*.53+n*1.9),o=r-Math.floor(r),c=Math.max(0,(o-.5)/.5),h=o<.5?t(0,.5,o):1-t(0,.62,c)-.22*Math.sin(Math.PI*t(.45,1,c))*(1-c*.3);a.push({cycle:Math.floor(r),f:o,stretch:h})}return a}function rc(s){return new k(s[0],s[2],-s[1])}function $x(s,e,t){let a=[];t.forEach((p,x)=>{let g=p.spine.map(rc),b=f=>{let v=f*(g.length-1),w=Math.min(Math.floor(v),g.length-2);return g[w].clone().lerp(g[w+1],v-w)};for(let f=0;f<=40;f++){let v=f/40;a.push([b(v),v,1.25*Math.max(.005,p.r0*Math.pow(1-Math.pow(v,1.35),.85)),x])}for(let f of p.licks||[]){let v=f.spine.map(rc);for(let w=0;w<=20;w++){let m=w/20,M=m*(v.length-1),A=Math.min(Math.floor(M),v.length-2);a.push([v[A].clone().lerp(v[A+1],M-A),f.t+(.95-f.t)*m,1.25*Math.max(.004,f.r0*Math.pow(1-Math.pow(m,1.35),.85)),x])}}});let n=s.geometry.getAttribute("position"),i=n.count,r=new Float32Array(i*4),o=new Float32Array(i),c=new k,h=(p,x,g)=>{let b=Math.min(1,Math.max(0,(g-p)/(x-p)));return b*b*(3-2*b)},l=Math.max(1,t.length),d=new Float32Array(l),u=new Float32Array(l);for(let p=0;p<i;p++){if(c.fromBufferAttribute(n,p).applyMatrix4(e),d.fill(0),u.fill(0),c.y>-.06)for(let[m,M,A,T]of a){let R=c.distanceTo(m);if(R>A*1.6+.05)continue;let _=h(.06,.3,M)*(1-h(A+.006,A*1.6+.05,R));_>d[T]&&(d[T]=_,u[T]=M)}let x=0,g=0;for(let m=0;m<l;m++)d[m]>d[x]&&(x=m);g=x===0&&l>1?1:0;for(let m=0;m<l;m++)m!==x&&d[m]>d[g]&&(g=m);let b=d[x],f=g===x?0:d[g],v=b+f,w=v>1e-5?f/v:0;r[p*4]=v>1e-5?(u[x]*b+u[g]*f)/v:0,r[p*4+1]=Math.min(1,b+f*.5),r[p*4+2]=x,r[p*4+3]=g,o[p]=w}return s.geometry.setAttribute("aFlameB",new it(o,1)),s.geometry.setAttribute("aFlame",new it(r,4)),r}var Gf=`float fireHeat(vec3 p,float t){float hgt=clamp((p.y+.444)/.944,0.,1.);float ang=atan(p.x,abs(p.z));   // symmetric front/back: one fireball
 float nA=fbm(vec3(ang*1.6,p.y*3.2-t*.85,1.7));float nB=fbm(vec3(ang*3.1+4.,p.y*6.5-t*1.6,3.1));
 float tongues=.5+.5*sin(ang*7.+nA*5.+p.y*4.-t*.4);float heat=1.05-hgt*.95+(tongues-.5)*.55+(nB-.5)*.45;
 return heat;}
float fireFace(vec3 p){float hgt=clamp((p.y+.444)/.944,0.,1.);return (p.z>0.?1.:.45)*smoothstep(.05,.16,abs(p.z))*(1.-smoothstep(.20,.30,abs(p.x)))*smoothstep(.10,.18,hgt)*(1.-smoothstep(.62,.72,hgt));}`,Vf=`uniform sampler2D uArtF,uArtB;
vec2 artUV(vec3 p){return vec2(1.15160*p.x+.49258,1.05241*p.y+.50066);}
vec3 artAt(vec3 p,vec3 n){
 float faceK=smoothstep(.0,.12,p.z)*(1.-smoothstep(.20,.30,abs(p.x)))*smoothstep(-.36,-.28,p.y)*(1.-smoothstep(.02,.10,p.y));
 float wf=pow(max(n.z,0.),2.)+faceK*6.,wb=pow(max(-n.z,0.),2.),ws=pow(abs(n.x),2.)*1.2;float sw=wf+wb+ws+1e-4;
 vec3 cf=texture2D(uArtF,artUV(p)).rgb;
 vec3 cb=texture2D(uArtB,vec2(-1.12177*p.x+.46821,.94361*p.y+.45150)).rgb;
 vec3 cs=texture2D(uArtB,vec2(1.12177*p.z*sign(p.x)+.46821,.94361*p.y+.45150)).rgb;
 return (cf*wf+cb*wb+cs*ws)/sw;}
vec3 artFlow(vec3 p,vec3 n,float t){float ph1=fract(t*.42),ph2=fract(t*.42+.5);float w1=1.-abs(2.*ph1-1.);
 vec3 fl=vec3(.012*sin(p.y*9.+t*1.3),.085,0.);
 float fk=smoothstep(.0,.12,p.z)*(1.-smoothstep(.20,.30,abs(p.x)))*smoothstep(-.36,-.28,p.y)*(1.-smoothstep(.02,.10,p.y));
 fl*=1.-fk;
 return artAt(p-fl*ph1,n)*w1+artAt(p-fl*ph2,n)*(1.-w1);}`,oc=class{constructor(e,t=[]){this.tongues=t,this.stretch={value:new Float32Array(8)},this.flick={value:1},this.time={value:0},this.enabled=!0,this.records=[],this.volumes=[],this.lids=[],this.root=e.scene,this.fireTexture=new bn().load("textures/living-fire-wrap-v1.webp"),this.fireTexture.colorSpace=ft,this.fireTexture.wrapS=this.fireTexture.wrapT=Ra,this.fireTexture.anisotropy=4;let a=e.scene.getObjectByName("Sparky_Body")||e.scene,n=null;if(e.scene.traverse(i=>{i.isMesh&&i.name.startsWith("geometry_0")&&(n=i)}),this.body=n,n&&/v5/i.test(n.material.name||"")){let i=n.material.clone();n.material=i,i.metalness=0,i.roughness=.62,i.emissive.set(16777215),i.emissiveMap=i.map,i.emissiveIntensity=.42,this.blinkL={value:0},this.blinkR={value:0},this.mouthOpen={value:0},this.mouthO={value:0},this.mouthSrc=null,this.lidSrc={L:null,R:null};let r={value:n.skeleton.boneInverses[n.skeleton.bones.findIndex(d=>d.name==="Sparky_Body")].clone()};this.root.traverse(d=>{d.isMesh&&d.name.startsWith("Eyelid_")&&(d.name.startsWith("Eyelid_L_Upper")&&(this.lidSrc.L=d),d.name.startsWith("Eyelid_R_Upper")&&(this.lidSrc.R=d),d.visible=!1,d.userData.hiddenLid=!0),d.isMesh&&d.name.startsWith("Mouth_")&&(d.name.startsWith("Mouth_Interior")&&(this.mouthSrc=d),d.visible=!1,d.userData.hiddenLid=!0)}),this.flameData=$x(n,r.value,t),this.restMatrix=r.value,this.tipFlames=new sc(n,r.value,t);let o=new bn,c=o.load("textures/front-art-padded.png"),h=o.load("textures/back-art-v2.png");for(let d of[c,h])d.colorSpace=ft,d.wrapS=d.wrapT=ca;i.onBeforeCompile=d=>{d.uniforms.uFireTime=this.time,d.uniforms.uRest=r,d.uniforms.uArtF={value:c},d.uniforms.uArtB={value:h},d.uniforms.uBlinkL=this.blinkL,d.uniforms.uBlinkR=this.blinkR,d.uniforms.uMouthOpen=this.mouthOpen,d.uniforms.uMouthO=this.mouthO,d.uniforms.uStretch=this.stretch,d.uniforms.uFlick=this.flick,d.vertexShader=`uniform float uFireTime;uniform mat4 uRest;varying vec3 vRest;varying vec3 vRN;attribute vec4 aFlame;attribute float aFlameB;varying vec4 vFlame;uniform float uStretch[8];
`+Vs+`
`+Gf+`
vec3 gN=vec3(0.,0.,1.);
`+Vf+`
float fireLayers(vec3 p){vec3 c=artFlow(p,gN,uFireTime);return 2.2*smoothstep(.45,.85,dot(c,vec3(.25,.6,.15)))*(1.-(p.z>0.?fireFace(p):0.))*smoothstep(-.44,-.32,p.y);}
`+d.vertexShader.replace("#include <beginnormal_vertex>",`#include <beginnormal_vertex>
 {vec3 rp=(uRest*vec4(position,1.)).xyz;gN=normalize(mat3(uRest)*objectNormal);float eps=.008;float l0=fireLayers(rp);
  vec3 g=vec3(fireLayers(rp+vec3(eps,0,0))-l0,fireLayers(rp+vec3(0,eps,0))-l0,fireLayers(rp+vec3(0,0,eps))-l0)/eps*.012;
  vec3 nn=normalize(objectNormal);objectNormal=normalize(nn-(g-nn*dot(g,nn)));}`).replace("#include <begin_vertex>",`#include <begin_vertex>
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
 float stK=mix(uStretch[fI1],uStretch[fI2],aFlameB);
 float fAng=atan(vRest.x,vRest.z+.001);
 float fSeed=.5+.28*sin(fAng*2.+.7)+.18*cos(fAng*3.-1.1);
 vFlame=vec4(fS,fW,fSeed,stK);
 float tipA=fW*pow(fS,1.6);
 float ph=fS*4.6-uFireTime*3.0+fSeed*7.;
 float lick=sin(ph+.8*sin(fS*2.2-uFireTime*1.3+fSeed*4.))*.7+sin(ph*1.6-uFireTime*1.1+2.)*.3;
 float drift=noise3(vec3(fS*2.,fSeed*5.,uFireTime*.9))-.5;
 vec3 sideD=vec3(cos(fAng+1.5708),0.,sin(fAng+1.5708))*-1.,outD=vec3(sin(fAng),0.,cos(fAng));
 vec3 offR=(sideD*(.018*lick+.006*drift)+outD*(.006*sin(ph*1.2+1.)))*tipA;
 offR.y+=fW*pow(fS,2.0)*.050*stK;
 offR.xz*=1.-.30*stK*fW*smoothstep(.45,1.,fS);
 float cwT=smoothstep(.10,.48,vRest.y)*(1.-fW);
 offR+=vec3(.004*cwT*sin(uFireTime*2.2+vRest.y*9.+vRest.x*6.),.003*cwT*sin(uFireTime*1.9+vRest.x*7.+vRest.z*5.),.003*cwT*cos(uFireTime*2.0+vRest.y*8.));
 transformed+=inverse(mat3(uRest))*offR;`),d.fragmentShader=`uniform float uFireTime,uBlinkL,uBlinkR,uMouthOpen,uMouthO,uFlick;varying vec3 vRest;varying vec3 vRN;varying vec4 vFlame;
`+Vs+`
`+Gf+`
`+Vf+`
`+d.fragmentShader.replace("#include <opaque_fragment>",`
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
  float faceZ=(vRest.z>0.?1.:.45)*smoothstep(.05,.16,abs(vRest.z))*(1.-smoothstep(.20,.30,abs(vRest.x)))*smoothstep(.10,.18,hgt)*(1.-smoothstep(.62,.72,hgt));
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
  outgoingLight=mix(outgoingLight,outgoingLight*1.12+vec3(1.,.80,.36)*.22,pulse*fW*(1.-.5*fS)*.6);
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
 outgoingLight*=uFlick;
 // cute face finish: glossy eye sparkles, rosy blush (replaces the tear-like marks), fuller smile
 {
  float fF=smoothstep(.02,.10,vRest.z);
  for(int e=0;e<2;e++){
   vec2 c=e==0?vec2(-.1228,-.1306):vec2(.0951,-.1306); float bl=e==0?uBlinkL:uBlinkR; float open_=1.-smoothstep(.15,.35,bl);
   float sp1=1.-smoothstep(.010,.016,length((vRest.xy-(c+vec2(.020,.026)))*vec2(1.,.85)));
   float sp2=1.-smoothstep(.004,.008,length(vRest.xy-(c+vec2(-.020,-.022))));
   outgoingLight=mix(outgoingLight,vec3(1.),max(sp1,sp2*.9)*open_*fF);
   vec2 bc=e==0?vec2(-.168,-.218):vec2(.124,-.218);
   float blush=1.-smoothstep(.50,1.,length((vRest.xy-bc)/vec2(.046,.027)));
   outgoingLight=mix(outgoingLight,vec3(1.,.42,.40),blush*.62*fF);
  }
  vec2 m=vRest.xy-vec2(-.0124,-.2084);
  float curve=-.010+.030*pow(m.x/.058,2.);
  float smile=(1.-smoothstep(.0035,.0060,abs(m.y-curve)))*(1.-smoothstep(.050,.060,abs(m.x)));
  // (no extra smile line: the painted smile is the one mouth)
 }
  // rig-driven mouth shapes (jaw / Mouth_* morph weights): open laugh "D" with teeth + tongue, surprised "O"
  {
   vec2 mm=vRest.xy-vec2(-.0124,-.2084);float fF2=smoothstep(.02,.10,vRest.z);float e=.0018;
   float curve0=-.010+.030*pow(mm.x/.058,2.);
   float lineBand=(1.-smoothstep(.070,.085,abs(mm.x)))*(1.-smoothstep(.030,.040,abs(mm.y-.004)))*smoothstep(.92,.62,lumD/max(dot(skinC,vec3(.3,.59,.11)),.05));
   outgoingLight=mix(outgoingLight,skinC,lineBand*clamp(uMouthO*3.,0.,1.)*fF2);
   if(uMouthOpen>.02){
    float op=uMouthOpen;float w=.052+.008*op;float xn=mm.x/w;float sx=sqrt(max(0.,1.-xn*xn));
    float top=-.012+.026*xn*xn;float bot=top-.058*op*sx;
    float d=min(min(top-mm.y,mm.y-bot),(1.-abs(xn))*w*.5);
    float inner=smoothstep(-e,e,d),outer=smoothstep(-e,e,d+.0045);
    vec3 cav=mix(vec3(.22,.02,.03),vec3(.42,.06,.05),smoothstep(top-.03,top,mm.y));
    float tongue=1.-smoothstep(.85,1.,length((mm-vec2(0.,bot+.016*op))/vec2(.034*op+.004,.018*op+.002)));
    cav=mix(cav,vec3(1.,.42,.40),tongue*.95);
    float teeth=smoothstep(top-.0075*op-e,top-.0075*op+e,mm.y)*smoothstep(.9,.6,abs(xn));
    cav=mix(cav,vec3(1.,.97,.92),teeth);
    outgoingLight=mix(outgoingLight,vec3(.20,.06,.02),outer*fF2);
    outgoingLight=mix(outgoingLight,cav,inner*fF2);
   }
   if(uMouthO>.02){
    vec2 q=(mm-vec2(0.,-.006))/(vec2(.016,.021)*(.4+.6*uMouthO));float r=length(q);
    float inner=1.-smoothstep(1.-.12,1.,r),outer=1.-smoothstep(1.25,1.37,r);
    vec3 cav=mix(vec3(.42,.06,.05),vec3(.18,.02,.03),smoothstep(-1.,.6,q.y));
    outgoingLight=mix(outgoingLight,vec3(.20,.06,.02),outer*fF2);
    outgoingLight=mix(outgoingLight,cav,inner*fF2);
   }
  }
 // eyelids: ellipse of each painted eye; upper lid sweeps down, lower lid lifts a little
 float frontF=smoothstep(.02,.10,vRest.z);
 for(int e=0;e<2;e++){
  vec2 c=e==0?vec2(-.1228,-.1306):vec2(.0951,-.1306); float bl=e==0?uBlinkL:uBlinkR;
  vec2 q=(vRest.xy-c)/vec2(.084,.091); float inside=1.-smoothstep(.84,1.02,length(q));
  float meet=-.30;                                            // where the lids meet when fully closed
  float arch=.42*(1.-q.x*q.x);                                // closed-eye curve
  float edge=mix(1.05,meet-.04,bl)+arch*bl;                    // upper lid comes down along the arch
  float lidBot=mix(-1.05,meet,bl)+arch*bl;                     // lower lid rises to meet it -> fully closed at bl=1
  float cover=max(smoothstep(edge-.05,edge+.03,q.y),1.-smoothstep(lidBot-.03,lidBot+.05,q.y))*smoothstep(.02,.08,bl);
  float lash=(1.-smoothstep(.02,.12,abs(q.y-edge)))*smoothstep(.35,.7,bl)*(1.-smoothstep(.80,.98,abs(q.x)));
  vec3 skin=skinC;
  outgoingLight=mix(outgoingLight,skin,inside*cover*frontF);
  outgoingLight=mix(outgoingLight,vec3(.16,.05,.01),inside*lash*frontF*.9);
 }
 float rimV=1.-abs(dot(normalize(normal),normalize(vViewPosition)));
 outgoingLight+=vec3(1.,.30,.04)*pow(rimV,2.5)*.45;
 #include <opaque_fragment>`)},i.customProgramCacheKey=()=>"sparky-vflame-cute1",this.bodyMaterial=i,this.shells=[];let l=(d,u,p,x,g,b)=>{let f=new It({color:16777215,transparent:!0,depthWrite:!1,blending:_a});f.onBeforeCompile=w=>{w.uniforms.uFireTime=this.time,w.uniforms.uRest=r,w.vertexShader=`uniform float uFireTime;uniform mat4 uRest;varying vec3 vRest;varying vec3 vN;varying vec3 vV;
`+Vs+`
`+w.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
   vRest=(uRest*vec4(position,1.)).xyz;float cw=smoothstep(-0.34,0.30,vRest.y);
   float n=fbm(vec3(vRest.x*${x.toFixed(2)},vRest.y*${(x*.8).toFixed(2)}-uFireTime*${g.toFixed(2)},vRest.z*${x.toFixed(2)}));
   transformed+=objectNormal*(${d.toFixed(3)}*(.35+.65*cw)+.03*cw*n);transformed.y+=${u.toFixed(3)}*cw*cw*(n+.2);`).replace("#include <project_vertex>",`#include <project_vertex>
 vN=normalize(normalMatrix*objectNormal);vV=-mvPosition.xyz;`),w.fragmentShader=`uniform float uFireTime;varying vec3 vRest;varying vec3 vN;varying vec3 vV;
`+Vs+`
`+w.fragmentShader.replace("#include <opaque_fragment>",`
   float fres=1.-abs(dot(normalize(vN),normalize(vV)));
   float cw=smoothstep(-0.36,0.28,vRest.y);
   float n=fbm(vec3(vRest.x*${(x*1.4).toFixed(2)},vRest.y*${(x*1.1).toFixed(2)}-uFireTime*${(g*1.15).toFixed(2)},vRest.z*${(x*1.4).toFixed(2)}));
   float face=smoothstep(.04,.16,vRest.z)*(1.-smoothstep(-.02,.10,vRest.y));
   float tongue=smoothstep(.50,.78,n+fres*.30-(1.-cw)*.45);
   float a=tongue*(.20+.80*fres)*cw*(1.-face)*${p.toFixed(2)};
   vec3 col=mix(vec3(1.,.16,.02),vec3(1.,.62,.14),smoothstep(.55,.90,n));col=mix(col,vec3(1.,.90,.55),smoothstep(.82,.98,n)*.6);
   outgoingLight=col;diffuseColor.a=a;
   #include <opaque_fragment>`)},f.customProgramCacheKey=()=>"sparky-flame-shell-"+b;let v=new Un(n.geometry,f);v.name="FireShell_"+b,v.bind(n.skeleton,n.bindMatrix),v.morphTargetInfluences=n.morphTargetInfluences,v.morphTargetDictionary=n.morphTargetDictionary,v.frustumCulled=!1,v.renderOrder=5,n.parent.add(v),v.position.copy(n.position),v.quaternion.copy(n.quaternion),v.scale.copy(n.scale),this.shells.push(v)};n=null}if(n){let i=n.geometry.getAttribute("skinIndex"),r=n.geometry.getAttribute("skinWeight"),o=new Float32Array(i.count);for(let d=0;d<i.count;d++){let u=0;for(let p=0;p<4;p++){let x=i.getComponent(d,p);n.skeleton.bones[x]?.name.includes("_Brow_")&&(u+=r.getComponent(d,p))}o[d]=Math.min(1,u*1.6)}n.geometry.setAttribute("featureWeight",new it(o,1));let c=n.geometry.attributes,h=d=>Object.keys(c).find(u=>u.toLowerCase()===d);for(let[d,u]of[["_spike","spikeMask"],["_core","spikeCore"]]){let p=h(d);n.geometry.setAttribute(u,p?c[p]:new it(new Float32Array(i.count),1))}let l=n.material.clone();n.material=l,l.emissive.set(0),l.roughnessMap=null,l.roughness=1,l.metalness=0,l.transparent=!0,l.side=Gt,l.onBeforeCompile=d=>{d.uniforms.uFireTime=this.time,d.uniforms.uFireArt={value:this.fireTexture},d.uniforms.uFireRest={value:n.skeleton.boneInverses[n.skeleton.bones.findIndex(u=>u.name==="Sparky_Body")].clone()},d.vertexShader=`attribute float featureWeight;attribute float spikeMask;attribute float spikeCore;varying float vSpike;varying float vCore;uniform mat4 uFireRest;varying float vFeatureWeight;varying vec3 vFirePos;uniform float uFireTime;
`+d.vertexShader,d.vertexShader=d.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
 vFirePos=(uFireRest*vec4(position,1.)).xyz;vFeatureWeight=featureWeight;vSpike=spikeMask;vCore=spikeCore;
 float crown=smoothstep(.0,.42,vFirePos.y);
 float edgeFlame=smoothstep(.27,.40,abs(vFirePos.x))*smoothstep(-.27,-.04,vFirePos.y);
 float flameMove=max(crown,edgeFlame);
 transformed.x+=.004*flameMove*sin(vFirePos.y*13.-uFireTime*1.3+vFirePos.x*11.);
 transformed.y+=.005*flameMove*sin(vFirePos.x*12.+uFireTime*1.5+vFirePos.z*8.);`),d.fragmentShader=`uniform sampler2D uFireArt;varying float vSpike;varying float vCore;varying float vFeatureWeight;varying vec3 vFirePos;uniform float uFireTime;
`+Vs+`
float wrapDistance(float a,float b){return abs(atan(sin(a-b),cos(a-b)));}
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
}
`+d.fragmentShader,d.fragmentShader=d.fragmentShader.replace("#include <opaque_fragment>",`
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
 `)},l.customProgramCacheKey=()=>"sparky-v4-spike-paint-v1",this.bodyMaterial=l}this.root.traverse(i=>{if(!(!i.isMesh||!i.name.includes("ArmMesh")&&!i.name.includes("ShoulderCap")))if(i.material=i.material.clone(),i.material.roughnessMap=null,i.material.roughness=.92,i.material.metalness=0,/mitten/i.test(i.material.name||"")){let r=i.material;r.vertexColors=!1,r.color.set(16777215),r.map=null,r.emissive.set(0),r.onBeforeCompile=o=>{o.uniforms.uFireTime=this.time,o.fragmentShader=`uniform float uFireTime;
`+o.fragmentShader.replace("#include <opaque_fragment>",`float rimM=1.-abs(dot(normalize(normal),normalize(vViewPosition)));
   vec3 cM=mix(vec3(1.,.58,.10),vec3(1.,.16,.015),smoothstep(.15,.85,rimM));cM=mix(cM,vec3(1.,.82,.30),(1.-smoothstep(.0,.35,rimM))*.55);
   outgoingLight=cM*(.95+.05*sin(uFireTime*6.+vViewPosition.y*30.));
   #include <opaque_fragment>`)},r.customProgramCacheKey=()=>"sparky-fire-mitten"}else i.material.color.multiplyScalar(1.08)}),this.backLayers=[],this.root.traverse(i=>{if(!i.isMesh||!i.name.startsWith("BackFlame_"))return;let r=i.material.clone();i.material=r,r.roughness=1,r.metalness=0,r.transparent=!0,r.depthWrite=!0,r.side=Gt,r.onBeforeCompile=o=>{o.uniforms.uFireTime=this.time,o.vertexShader=`varying vec3 vFlameW;
`+o.vertexShader.replace("#include <project_vertex>",`vFlameW=(modelMatrix*vec4(transformed,1.)).xyz;
#include <project_vertex>`),o.fragmentShader=`uniform float uFireTime;varying vec3 vFlameW;
`+o.fragmentShader.replace("#include <opaque_fragment>",`float facing=abs(dot(normalize(normal),normalize(vViewPosition)));float rise=.5+.5*sin(vFlameW.y*24.-uFireTime*4.0+vFlameW.x*9.+vFlameW.z*6.);float flick=.5+.5*sin(vFlameW.y*9.-uFireTime*2.1+vFlameW.x*4.);outgoingLight=diffuseColor.rgb*(.90+.14*facing+.16*rise*flick);diffuseColor.a*=.97-.18*pow(1.-facing,4.);
#include <opaque_fragment>`)},r.customProgramCacheKey=()=>"back-flame-rising-tongues-v3",this.backLayers.push(i)}),this.root.updateMatrixWorld(!0),this.root.traverse(i=>{if(!i.isMesh||!i.name.startsWith("Eyelid_")||i.name.includes("Lash"))return;let r={value:new Te},o=i.material.clone();i.material=o,o.onBeforeCompile=c=>{c.uniforms.uLidRest=r,c.vertexShader=`uniform mat4 uLidRest;varying vec3 vLidPos;
`+c.vertexShader,c.vertexShader=c.vertexShader.replace("#include <project_vertex>",`vLidPos=(uLidRest*vec4(transformed,1.)).xyz;
#include <project_vertex>`),c.fragmentShader=`varying vec3 vLidPos;
`+c.fragmentShader,c.fragmentShader=c.fragmentShader.replace("#include <opaque_fragment>",`float core=1.-smoothstep(.45,1.1,length(vec2((vLidPos.x+.02)/.39,(vLidPos.y+.20)/.32)));float edge=1.-abs(dot(normalize(normal),normalize(vViewPosition)));outgoingLight=vec3(1.,.66,.022)*(.88+.34*(1.-edge)+.14*core)*1.04;
#include <opaque_fragment>`)},o.customProgramCacheKey=()=>"sparky-lid-core-match-v1",this.lids.push({object:i,uniform:r})}),this.wisps={update(){},dispose(){}},this.sparks=[],this.root.traverse(i=>{if(!i.isMesh||!i.name.startsWith("Spark_"))return;i.material=i.material.clone(),i.material.transparent=!0,i.geometry.computeBoundingSphere();let r=i.geometry.boundingSphere.center.clone().applyMatrix4(i.matrixWorld).sub(a.getWorldPosition(new k));this.sparks.push({o:i,rest:r,base:i.material.opacity})}),this._v1=new k,this._v2=new k,this._v3=new k}fadeSparks(e){let t=this.root.getObjectByName("Sparky_Body");if(!t||!this.sparks.length)return;let a=t.getWorldPosition(this._v1),n=this._v2.copy(e.position).sub(a);n.y=0,n.normalize();for(let i of this.sparks){let r=this._v3.copy(i.rest),o=r.y;if(r.y=0,r.lengthSq()<1e-6)continue;r.normalize();let c=Math.abs(r.dot(n)),h=xn.smoothstep(c,.45,.8)*(1-xn.smoothstep(o,.3,.42));i.o.material.opacity=i.base*(1-h),i.o.visible=h<.98}}update(e,t){this.time.value=e;let a=Qx(e,this.tongues.length);for(let r=0;r<a.length;r++)this.stretch.value[r]=a[r].stretch;if(this.cycles=a,this.flick.value=fl(e),this.tipFlames?.update(e,t,a,this.enabled),this.fadeSparks(t),this.lidSrc){let r=o=>{if(!o||!o.morphTargetInfluences)return 0;let c=o.morphTargetInfluences;return Math.min(1,.25*c[0]+.5*c[1]+.75*c[2]+1*c[3])};this.blinkL.value=r(this.lidSrc.L),this.blinkR.value=r(this.lidSrc.R)}if(this.mouthSrc&&this.mouthSrc.morphTargetInfluences){let r=this.mouthSrc.morphTargetInfluences;this.mouthOpen.value=Math.min(1,.25*r[0]+.5*r[1]+.75*r[2]+r[3]),this.mouthO.value=r[4]||0}for(let r of this.shells||[])r.visible=this.enabled;this.surfaceFlames?.update(this.enabled),this.wisps.update(e,t,this.enabled);let n=this.root.getObjectByName("Sparky_Body");n.updateWorldMatrix(!0,!1);let i=n.matrixWorld.clone().invert();for(let r of this.lids)r.object.updateWorldMatrix(!0,!1),r.uniform.value.multiplyMatrices(i,r.object.matrixWorld);for(let r of this.volumes)r.visible=this.enabled,r.updateWorldMatrix(!0,!1),r.material.uniforms.uCamera.value.copy(t.position),r.worldToLocal(r.material.uniforms.uCamera.value);for(let r of this.records)r.visible=this.enabled}dispose(){this.wisps.dispose();for(let e of[...this.records,...this.volumes])e.removeFromParent(),e.material.dispose();this.volumes[0]?.geometry.dispose()}};var Wi=document.querySelector("canvas"),yn=new Vo({canvas:Wi,antialias:!0,preserveDrawingBuffer:!0});yn.setPixelRatio(Math.min(devicePixelRatio,1.5));yn.toneMapping=Pi;yn.toneMappingExposure=1;var Sa=new bs;Sa.background=new ge("#18222e");var Jt=new gt(30,1,.01,30),Aa=new Jo(Jt,Wi);Aa.enableDamping=!0;Aa.enablePan=!1;Aa.minDistance=1.1;Aa.maxDistance=5;Aa.target.set(0,.08,0);Jt.position.set(1.2,.1,2.85);Sa.add(new As(16774621,9069425,2));for(let[s,e,t]of[[[-2,3,3],2,16771529],[[3,2,1],.6,13428223],[[1,2,-3],1,16747568]]){let a=new Gn(t,e);a.position.set(...s),Sa.add(a)}var Ua=new Zo(yn);Ua.addPass(new Qo(Sa,Jt));var hc=new xt(1,1,{type:Ft});Ua.addPass(new $o(hc));var pl=new Vi(new ue(600,600),.32,.45,.82);Ua.addPass(pl);var Ws=new Gi({uniforms:{tDiffuse:{value:null},tBase:{value:hc.texture},uFace:{value:new ue(.5,.4)},uRadius:{value:new ue(.15,.18)},uVisible:{value:1}},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"uniform sampler2D tDiffuse,tBase;uniform vec2 uFace,uRadius;uniform float uVisible;varying vec2 vUv;void main(){vec4 a=texture2D(tDiffuse,vUv),b=texture2D(tBase,vUv);float d=length((vUv-uFace)/uRadius);float protect=(1.-smoothstep(.72,1.30,d))*uVisible;gl_FragColor=mix(a,b,protect*.97);}"});Ws.uniforms.tBase.value=hc.texture;Ua.addPass(Ws);Ua.addPass(new ec);function ul(){let s=Ea?.root.getObjectByName("Sparky_Body");if(!s)return;s.updateWorldMatrix(!0,!1);let e=new k(-.02,-.17,.35).applyMatrix4(s.matrixWorld).project(Jt),t=new k(.28,-.17,.35).applyMatrix4(s.matrixWorld).project(Jt),a=new k(-.02,.07,.35).applyMatrix4(s.matrixWorld).project(Jt);Ws.uniforms.uFace.value.set(e.x*.5+.5,e.y*.5+.5),Ws.uniforms.uRadius.value.set(Math.max(.025,Math.abs(t.x-e.x)*.5),Math.max(.04,Math.abs(a.y-e.y)*.5)),Ws.uniforms.uVisible.value=Math.max(0,Math.min(1,(Jt.position.z+.2)*3))}var Ct,Ea,qi,ai=0;function ev(){let s=Wi.clientWidth,e=Wi.clientHeight;yn.setSize(s,e,!1),Ua.setSize(s,e),hc.setSize(yn.domElement.width,yn.domElement.height),Jt.aspect=s/e,Jt.updateProjectionMatrix()}new ResizeObserver(ev).observe(Wi);var tv=new Vn;function qf(){requestAnimationFrame(qf);let s=Math.min(tv.getDelta(),.05);Ct&&Ea&&(Ct.playing&&(ai+=s),Ct.update(s),Ea.update(ai,Jt),Kf(ai),qi.updateMatrixWorld(!0)),Aa.update(),ul(),Ua.render()}qf();var ml=await new qo().setMeshoptDecoder(jf).loadAsync("assets/sparky.glb"),gl=await(await fetch("data/animations.json")).json(),av=await(await fetch("data/flame-tongues.json")).json();Ct=new nc(ml,gl);Sa.add(Ct.object);Ea=new oc(ml,av);Ea.tipFlames&&Sa.add(Ea.tipFlames.mesh);qi=new Is(Ct.object);qi.visible=!1;Sa.add(qi);var bl=new Hn(16747054,2.2,3.2,1.6);Sa.add(bl);var nv=new zt().setFromObject(Ct.object),qs=document.createElement("canvas");qs.width=qs.height=256;var xl=qs.getContext("2d"),lc=xl.createRadialGradient(128,128,0,128,128,128);lc.addColorStop(0,"#fff");lc.addColorStop(.55,"#888");lc.addColorStop(1,"#000");xl.fillStyle=lc;xl.fillRect(0,0,256,256);var Ks=new st(new Ri(1.25,64),new Ka({color:1840402,roughness:.95,metalness:0,transparent:!0,alphaMap:new Ti(qs),depthWrite:!1}));Ks.rotation.x=-Math.PI/2;Ks.position.y=nv.min.y-.07;Ks.renderOrder=-1;Sa.add(Ks);var Xf=new It({color:16742946,transparent:!0,blending:_a,depthWrite:!1,alphaMap:new Ti(qs)}),vl=new st(new Ri(.75,48),Xf);vl.rotation.x=-Math.PI/2;vl.position.y=Ks.position.y+.002;Sa.add(vl);var iv=new k(0,.4,0),cc=new k;function Kf(s){let e=Ct.object.getObjectByName("Sparky_Body");if(!e)return;let t=fl(s),a=Ea.enabled;e.updateWorldMatrix(!0,!1),cc.copy(iv).applyMatrix4(e.matrixWorld),bl.position.set(cc.x+.025*Math.sin(s*1.7),cc.y+.015*Math.sin(s*2.3+1),cc.z+.025*Math.cos(s*1.4)),bl.intensity=a?2.2*t*t:0,Xf.opacity=a?.15*t*t:0,pl.strength=a?.32*(.85+.15*t*t):0}var Xs=document.getElementById("animation");for(let s of gl){let e=document.createElement("option");e.value=s.name,e.textContent=s.label,Xs.append(e)}Xs.onchange=()=>{Ct.play(Xs.value),Ct.playing=!0};for(let s of document.querySelectorAll("[data-pose]"))s.onclick=()=>{Xs.value=s.dataset.pose,Xs.onchange()};Ct.play("Idle_Blink");document.getElementById("loading").hidden=!0;document.getElementById("pause").onclick=()=>{Ct.playing=!Ct.playing,document.getElementById("pause").textContent=Ct.playing?"Pause":"Play"};document.getElementById("fire").onchange=s=>{Ea.enabled=s.target.checked,pl.enabled=s.target.checked};document.getElementById("rig").onchange=s=>qi.visible=s.target.checked;document.getElementById("wire").onchange=s=>{ml.scene.traverse(e=>{e.isMesh&&!e.name.startsWith("Fire")&&e.material?.wireframe!==void 0&&(e.material.wireframe=s.target.checked)})};function yl(s){let e={front:[0,.09,3.05],quarter:[1.5,.1,2.8],side:[3.05,.09,0],back:[0,.09,-3.05]};Jt.position.set(...e[s]),Aa.target.set(0,.08,0),Aa.update()}for(let s of document.querySelectorAll("[data-view]"))s.onclick=()=>yl(s.dataset.view);window.sparkyFireball={renderer:yn,scene:Sa,camera:Jt,controls:Aa,composer:Ua,player:Ct,fx:Ea,rig:qi,manifest:gl,view:yl,render(){Aa.update(),Ea.update(ai,Jt),ul(),Ua.render()},frame(s,e){return Ct.playing=!1,ai=s,Ct.seek(e?s%e:s),Ea.update(ai,Jt),Kf(ai),Aa.update(),ul(),Ua.render(),Wi.toDataURL("image/jpeg",.9)}};var Wf=new URLSearchParams(location.search).get("view");["front","quarter","side","back"].includes(Wf)&&yl(Wf);
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
