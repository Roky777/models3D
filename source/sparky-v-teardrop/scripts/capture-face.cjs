// Face finishing check on the GPU: close-ups of mouth shapes, blinks / wink, and the back (Electron).
//   electron capture-face.cjs <port> <outDir>
const {app, BrowserWindow, session} = require('electron');
const fs = require('fs'), path = require('path');
const [port = '8960', outDir = path.resolve(__dirname, '../work/face')] = process.argv.slice(2).filter(a => !a.endsWith('.cjs'));
// [clip, time, camera angle (deg), label]
const SHOTS = [['Idle_Blink', 0.5, 0, 'smile'], ['Emotion_Excited', 1.2, 0, 'laugh'], ['Emotion_Excited', 1.2, 30, 'laugh-34'], ['Emotion_Surprised', 1.2, 0, 'o-mouth'],
  ['Emotion_Shy', 1.4, 0, 'wink'], ['Face_Laugh', 1.2, 0, 'closed-eyes'], ['Emotion_Sad', 1.6, 0, 'sad'], ['Idle_Blink', 0.5, 180, 'back']];
app.commandLine.appendSwitch('ignore-gpu-blocklist');
app.on('window-all-closed', () => {});
app.whenReady().then(async () => {
  await session.defaultSession.clearCache();
  fs.mkdirSync(outDir, {recursive: true});
  const w = new BrowserWindow({width: 900, height: 900, show: false, webPreferences: {backgroundThrottling: false}});
  await w.loadURL(`http://127.0.0.1:${port}/?view=front`);
  for (let i = 0; i < 160; i++) { if (await w.webContents.executeJavaScript('!!(window.sparkyFireball&&window.sparkyFireball.fx)').catch(() => false)) break; await new Promise(r => setTimeout(r, 250)); }
  await new Promise(r => setTimeout(r, 2500));
  for (const [clip, t, ang, label] of SHOTS) {
    const back = ang === 180;
    const d = await w.webContents.executeJavaScript(`(()=>{const v=sparkyFireball;v.controls.enableDamping=false;const FB={Emotion_Excited:'Face_Laugh',Emotion_Surprised:'Face_Surprised',Emotion_Shy:'Face_Wink',Emotion_Sad:'Face_Sad',Emotion_Happy:'Face_Happy'};const nm=${JSON.stringify(clip)};v.player.play(v.player.animations.has(nm)?nm:FB[nm]);
      const b=v.player.object.getObjectByName('Sparky_Body');b.updateWorldMatrix(true,false);const p=b.getWorldPosition(new (v.camera.position.constructor)());
      const tg=p.clone();tg.y+=${back ? 0.0 : -0.17};const a=${ang}*Math.PI/180,dist=${back ? 2.2 : 1.05};
      v.controls.target.copy(tg);v.camera.position.set(tg.x+Math.sin(a)*dist,tg.y+.02,tg.z+Math.cos(a)*dist);v.controls.update();
      return v.frame(${t});})()`);
    fs.writeFileSync(path.join(outDir, `${label}.jpg`), Buffer.from(d.split(',')[1], 'base64'));
  }
  console.log('FACE_DONE', outDir); app.quit();
}).catch(e => { console.error(e); app.exit(1); });
