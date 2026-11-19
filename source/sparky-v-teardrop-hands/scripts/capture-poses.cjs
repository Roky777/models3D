// GPU check of the hand rig: render clips at chosen times from front and 3/4 (Electron, ELECTRON_RUN_AS_NODE unset).
//   electron capture-poses.cjs <port> <outDir>
const {app, BrowserWindow, session} = require('electron');
const fs = require('fs'), path = require('path');
const [port = '8960', outDir = path.resolve(__dirname, '../work/poses')] = process.argv.slice(2).filter(a => !a.endsWith('.cjs'));
const SHOTS = (process.env.ONLY ? process.env.ONLY.split(',').map(x => [x.split(':')[0], +x.split(':')[1]]) : null) || [['Idle_Blink', 1.0], ['Emotion_Happy', 1.35], ['Emotion_Excited', 1.3], ['Emotion_Shy', 1.5], ['Emotion_Sad', 1.6], ['Emotion_Surprised', 1.2], ['Hands_Wave', 1.45]];
app.commandLine.appendSwitch('ignore-gpu-blocklist');
app.on('window-all-closed', () => {});
app.whenReady().then(async () => {
  await session.defaultSession.clearCache();
  fs.mkdirSync(outDir, {recursive: true});
  const w = new BrowserWindow({width: 760, height: 900, show: false, webPreferences: {backgroundThrottling: false}});
  await w.loadURL(`http://127.0.0.1:${port}/?view=front`);
  for (let i = 0; i < 160; i++) { if (await w.webContents.executeJavaScript('!!(window.sparkyFireball&&window.sparkyFireball.fx)').catch(() => false)) break; await new Promise(r => setTimeout(r, 250)); }
  await new Promise(r => setTimeout(r, 2500));
  for (const [clip, t] of SHOTS) for (const [view, ang] of [['front', 0], ['q34', 38]]) {
    const d = await w.webContents.executeJavaScript(`(()=>{const v=sparkyFireball;v.controls.enableDamping=false;v.player.play(${JSON.stringify(clip)});
      const a=${ang}*Math.PI/180;v.controls.target.set(0,.02,0);v.camera.position.set(Math.sin(a)*2.5,.12,Math.cos(a)*2.5);v.controls.update();
      return v.frame(${t});})()`);
    fs.writeFileSync(path.join(outDir, `${clip}-${view}.jpg`), Buffer.from(d.split(',')[1], 'base64'));
  }
  console.log('POSES_DONE', outDir); app.quit();
}).catch(e => { console.error(e); app.exit(1); });
