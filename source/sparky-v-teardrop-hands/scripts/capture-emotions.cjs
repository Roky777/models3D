// Emotion clips for the gallery (Angry, Sad on v-teardrop-hands): presentation mode like the turntables (no UI, black,
// 2x pixels), fixed front 3/4 camera, the clip stepped frame by frame (30 fps) with the live fire.
//   tools/modly/node_modules/electron/dist/electron.exe capture-emotions.cjs   (ELECTRON_RUN_AS_NODE unset)
// Frames -> emotions/<clip>/f####.jpg
const {app, BrowserWindow, session} = require('electron');
const fs = require('fs'), path = require('path');
const OUT = path.join(__dirname, 'emotions');
const PORT = 8960, W = 900, H = 1100, PR = 2;
const CLIPS = [['Emotion_Angry', 4.2], ['Emotion_Sad', 4.6]];
app.commandLine.appendSwitch('ignore-gpu-blocklist');
app.on('window-all-closed', () => {});
const wait = ms => new Promise(r => setTimeout(r, ms));
app.whenReady().then(async () => {
  await session.defaultSession.clearCache();
  const w = new BrowserWindow({width: W, height: H, useContentSize: true, show: false, webPreferences: {backgroundThrottling: false}});
  await w.loadURL(`http://127.0.0.1:${PORT}/?view=front`);
  let ok = false;
  for (let i = 0; i < 160 && !ok; i++) { ok = await w.webContents.executeJavaScript('!!(window.sparkyFireball&&window.sparkyFireball.fx&&document.getElementById("loading").hidden)').catch(() => false); if (!ok) await wait(250); }
  await w.webContents.executeJavaScript(`(()=>{const v=window.sparkyFireball;
    document.querySelector('header').style.display='none';document.querySelector('footer').style.display='none';
    document.body.style.background='#000';document.querySelector('main').style.gridTemplateRows='1fr';
    v.renderer.setPixelRatio(${PR});v.scene.background.set(0x000000);v.controls.enableDamping=false;v.controls.autoRotate=false;})()`);
  await wait(4000);
  for (const [clip, dur] of CLIPS) {
    const dir = path.join(OUT, clip); fs.mkdirSync(dir, {recursive: true});
    const N = Math.round((dur + .6) * 30);   // the clip + a short calm tail
    for (let i = 0; i < N; i++) {
      const t = i / 30;
      const d = await w.webContents.executeJavaScript(`(()=>{const v=window.sparkyFireball;if(${i}===0)v.player.play('${clip}');
        const b=v.player.object.getObjectByName('Sparky_Body');const V=v.camera.position.constructor;const tg=new V(0,0,0);b.getWorldPosition(tg);tg.y+=.12;
        const a=14*Math.PI/180,dist=2.35;v.controls.target.copy(tg);v.camera.position.set(tg.x+Math.sin(a)*dist,tg.y+.10,tg.z+Math.cos(a)*dist);v.controls.update();
        return v.frame(${t.toFixed(4)});})()`);
      fs.writeFileSync(path.join(dir, `f${String(i).padStart(4, '0')}.jpg`), Buffer.from(d.split(',')[1], 'base64'));
    }
    console.log('done', clip, N);
  }
  app.quit();
}).catch(e => { console.error(e); app.exit(1); });
