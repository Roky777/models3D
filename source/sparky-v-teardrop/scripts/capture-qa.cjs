// QA sweep on the GPU: 24 views all round the character (every 30 deg, level + from above) and a forehead close-up.
//   electron capture-qa.cjs <port> <outDir>
const {app, BrowserWindow, session} = require('electron');
const fs = require('fs'), path = require('path');
const [port = '8960', outDir = path.resolve(__dirname, '../work/qa')] = process.argv.slice(2).filter(a => !a.endsWith('.cjs'));
app.commandLine.appendSwitch('ignore-gpu-blocklist');
app.on('window-all-closed', () => {});
app.whenReady().then(async () => {
  await session.defaultSession.clearCache(); fs.mkdirSync(outDir, {recursive: true});
  const w = new BrowserWindow({width: 760, height: 900, show: false, webPreferences: {backgroundThrottling: false}});
  await w.loadURL(`http://127.0.0.1:${port}/?view=front`);
  for (let i = 0; i < 160; i++) { if (await w.webContents.executeJavaScript('!!(window.sparkyFireball&&window.sparkyFireball.fx)').catch(() => false)) break; await new Promise(r => setTimeout(r, 250)); }
  await new Promise(r => setTimeout(r, 2500));
  const shots = [];
  for (const el of [0, 30]) for (let az = 0; az < 360; az += 30) shots.push([`az${String(az).padStart(3, '0')}-el${el}`, az, el, 1.9, 0]);
  shots.push(['forehead', 0, 8, .75, .12], ['forehead-34', 35, 8, .8, .12]);
  for (const [label, az, el, dist, ty] of shots) {
    const d = await w.webContents.executeJavaScript(`(()=>{const v=sparkyFireball;v.controls.enableDamping=false;v.player.play('Idle_Blink');v.frame(1.0);
      const V=v.camera.position.constructor;const b=v.player.object.getObjectByName('Sparky_Body');const tg=b.getWorldPosition(new V());tg.y+=${ty};
      const a=${az}*Math.PI/180,e=${el}*Math.PI/180;v.controls.target.copy(tg);
      v.camera.position.set(tg.x+Math.sin(a)*Math.cos(e)*${dist},tg.y+Math.sin(e)*${dist},tg.z+Math.cos(a)*Math.cos(e)*${dist});v.controls.update();
      return v.frame(1.0);})()`);
    fs.writeFileSync(path.join(outDir, `${label}.jpg`), Buffer.from(d.split(',')[1], 'base64'));
  }
  console.log('QA_DONE', shots.length, outDir); app.quit();
}).catch(e => { console.error(e); app.exit(1); });
