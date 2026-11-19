// Record deterministic viewer frames through headless Chrome (CDP).  node capture-frames.mjs <url> <outDir> <seconds> [fps] [w] [h]
import {spawn} from 'node:child_process';
import fs from 'node:fs';
const [url, outDir, secs = '3', fps = '24', W = '640', H = '760'] = process.argv.slice(2);
fs.mkdirSync(outDir, {recursive: true});
const port = 9300 + Math.floor(Math.random() * 500);
const chrome = spawn('C:/Program Files/Google/Chrome/Application/chrome.exe', ['--headless=new', '--use-angle=swiftshader', '--enable-unsafe-swiftshader',
  '--hide-scrollbars', `--window-size=${W},${H}`, `--remote-debugging-port=${port}`, `--user-data-dir=${process.env.TEMP}/cdp-${port}`, 'about:blank'], {stdio: 'ignore'});
const sleep = ms => new Promise(r => setTimeout(r, ms));
let ws;
for (let i = 0; i < 60 && !ws; i++) {
  try { const list = await (await fetch(`http://127.0.0.1:${port}/json`)).json(); const pg = list.find(p => p.type === 'page'); if (pg) ws = new WebSocket(pg.webSocketDebuggerUrl); } catch {}
  if (!ws) await sleep(250);
}
await new Promise(r => ws.addEventListener('open', r));
let id = 0; const pending = new Map();
ws.addEventListener('message', ev => {
  const m = JSON.parse(ev.data);
  if (m.id && pending.has(m.id)) { pending.get(m.id)(m); pending.delete(m.id); }
  if (m.method === 'Runtime.exceptionThrown') console.log('PAGE EXCEPTION', JSON.stringify(m.params.exceptionDetails).slice(0, 600));
  if (m.method === 'Runtime.consoleAPICalled' && ['error', 'warning'].includes(m.params.type)) console.log('PAGE', m.params.type, m.params.args.map(a => a.value ?? a.description).join(' ').slice(0, 400));
});
const send = (method, params = {}) => new Promise(r => { const i = ++id; pending.set(i, r); ws.send(JSON.stringify({id: i, method, params})); });
await send('Runtime.enable'); await send('Page.enable');
await send('Page.navigate', {url});
let ready = false;
for (let i = 0; i < 240 && !ready; i++) { await sleep(500); const r = await send('Runtime.evaluate', {expression: '!!(window.sparkyFireball&&window.sparkyFireball.fx)', returnByValue: true}); ready = r.result?.result?.value; }
if (!ready) { console.log('viewer never became ready'); chrome.kill(); process.exit(1); }
const n = Math.round(+secs * +fps);
for (let i = 0; i < n; i++) {
  const r = await send('Runtime.evaluate', {expression: `sparkyFireball.frame(${(2 + i / +fps).toFixed(4)})`, returnByValue: true});
  const d = r.result?.result?.value; if (!d) { console.log('frame failed', JSON.stringify(r).slice(0, 300)); break; }
  fs.writeFileSync(`${outDir}/f${String(i).padStart(4, '0')}.jpg`, Buffer.from(d.split(',')[1], 'base64'));
}
console.log('FRAMES', n, outDir);
ws.close(); chrome.kill();
