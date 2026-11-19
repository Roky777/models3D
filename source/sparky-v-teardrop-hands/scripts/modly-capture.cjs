// GPU capture through Modly's Electron runtime (real GPU, unlike headless swiftshader).
//   tools/modly/node_modules/electron/dist/electron.exe modly-capture.cjs <mode> <outDir>
//   mode "closeup": crown close-ups at several times from 4 angles (crack check)
//   mode "clip":    4 s of the idle fire, front + 3/4, 30 fps
const {app, BrowserWindow} = require('electron');
const fs = require('fs'), path = require('path');
const [mode = 'closeup', outDir = path.resolve(__dirname, '../work/modly')] = process.argv.slice(-2)[0].endsWith('.cjs') ? [] : process.argv.slice(-2);
app.commandLine.appendSwitch('ignore-gpu-blocklist');
app.whenReady().then(async () => {
  const w = new BrowserWindow({width: 900, height: 1000, show: false, webPreferences: {contextIsolation: true, backgroundThrottling: false}});
  await w.loadURL('http://127.0.0.1:8960/?view=quarter');
  for (let i = 0; i < 160; i++) { if (await w.webContents.executeJavaScript('!!(window.sparkyFireball&&window.sparkyFireball.fx)')) break; await new Promise(r => setTimeout(r, 250)); }
  const gpu = await w.webContents.executeJavaScript(`(()=>{const gl=sparkyFireball.renderer.getContext();const e=gl.getExtension('WEBGL_debug_renderer_info');return e?gl.getParameter(e.UNMASKED_RENDERER_WEBGL):'?'})()`);
  console.log('GPU', gpu);
  fs.mkdirSync(outDir, {recursive: true});
  const shot = async (file, t, cam) => {
    const d = await w.webContents.executeJavaScript(`(()=>{const v=sparkyFireball;v.controls.enableDamping=false;
      const b=v.player.object.getObjectByName('Sparky_Body');b.updateWorldMatrix(true,false);const c=b.getWorldPosition(new (v.camera.position.constructor)());
      const tg=c.clone();tg.y+=${cam.ty};v.controls.target.copy(tg);const a=${cam.ang}*Math.PI/180;
      v.camera.position.set(tg.x+Math.sin(a)*${cam.dist},tg.y+${cam.up},tg.z+Math.cos(a)*${cam.dist});v.controls.update();
      return v.frame(${t});})()`);
    fs.writeFileSync(path.join(outDir, file), Buffer.from(d.split(',')[1], 'base64'));
  };
  if (mode === 'closeup') {
    for (const [ang, nm] of [[0, 'front'], [45, 'quarter'], [90, 'side'], [180, 'back']])
      for (const t of [2.0, 2.7, 3.4, 4.1]) await shot(`crown-${nm}-${t.toFixed(1)}.jpg`, t, {ty: 0.30, ang, dist: 1.25, up: 0.10});
  } else {
    for (const [ang, nm] of [[0, 'front'], [40, 'quarter']])
      for (let i = 0; i < 120; i++) await shot(`${nm}-${String(i).padStart(4, '0')}.jpg`, 2 + i / 30, {ty: 0.10, ang, dist: 2.6, up: 0.08});
  }
  console.log('MODLY_CAPTURE_DONE', mode, outDir);
  app.quit();
}).catch(e => { console.error(e); app.exit(1); });
