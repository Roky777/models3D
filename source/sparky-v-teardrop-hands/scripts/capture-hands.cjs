// Close-ups of the fiery hands on the GPU (Electron): idle + a few emotions, front and 3/4, camera on the right hand.
//   electron capture-hands.cjs <port> <outDir>
const {app, BrowserWindow, session} = require('electron');
const fs = require('fs'), path = require('path');
const [port = '8960', outDir = path.resolve(__dirname, '../work/hands')] = process.argv.slice(2).filter(a => !a.endsWith('.cjs'));
const SHOTS = [['Idle_Blink', 1.0, 0, 'idle', 1.2], ['Idle_Blink', 1.0, 35, 'idle-34', 1.2], ['Emotion_Excited', 1.2, 0, 'excited', 1.6],
  ['Hands_Wave', 1.45, 20, 'wave', 1.3], ['Emotion_Happy', 1.35, 0, 'happy', 1.2], ['Idle_Blink', 1.0, 0, 'hand-close', .55]];
app.commandLine.appendSwitch('ignore-gpu-blocklist');
app.on('window-all-closed', () => {});
app.whenReady().then(async () => {
  await session.defaultSession.clearCache(); fs.mkdirSync(outDir, {recursive: true});
  const w = new BrowserWindow({width: 900, height: 900, show: false, webPreferences: {backgroundThrottling: false}});
  await w.loadURL(`http://127.0.0.1:${port}/?view=front`);
  for (let i = 0; i < 160; i++) { if (await w.webContents.executeJavaScript('!!(window.sparkyFireball&&window.sparkyFireball.fx)').catch(() => false)) break; await new Promise(r => setTimeout(r, 250)); }
  await new Promise(r => setTimeout(r, 2500));
  for (const [clip, t, ang, label, dist] of SHOTS) {
    const d = await w.webContents.executeJavaScript(`(()=>{const v=sparkyFireball;v.controls.enableDamping=false;
      const nm=${JSON.stringify(clip)};v.player.play(v.player.animations.has(nm)?nm:'Idle_Blink');v.frame(${t});
      const V=v.camera.position.constructor;const hb=v.player.object.getObjectByName('Sparky_R_Hand');const b=v.player.object.getObjectByName('Sparky_Body');
      const tg=${label === 'hand-close'} ? hb.getWorldPosition(new V()) : b.getWorldPosition(new V()).add(new V(0,-.05,0));
      const a=${ang}*Math.PI/180;v.controls.target.copy(tg);v.camera.position.set(tg.x+Math.sin(a)*${dist},tg.y+.05,tg.z+Math.cos(a)*${dist});v.controls.update();
      return v.frame(${t});})()`);
    fs.writeFileSync(path.join(outDir, `${label}.jpg`), Buffer.from(d.split(',')[1], 'base64'));
  }
  console.log('HANDS_DONE', outDir); app.quit();
}).catch(e => { console.error(e); app.exit(1); });
