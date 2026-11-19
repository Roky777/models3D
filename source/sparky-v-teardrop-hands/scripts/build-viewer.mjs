import {fileURLToPath as __toPath} from 'node:url'; import __path from 'node:path';  // handoff: paths relative to this script
const ROOT = __path.resolve(__path.dirname(__toPath(import.meta.url)), '..').replace(/\\/g, '/');
const EXT = __path.resolve(ROOT, '..', 'external').replace(/\\/g, '/');
// Bundle viewer-src/ -> viewer/viewer.js   (node scripts/build-viewer.mjs)
import {build} from 'esbuild';
await build({entryPoints:[ROOT+'/viewer-src/main.js'],bundle:true,minify:true,format:'esm',platform:'browser',target:['es2022'],
  outfile:ROOT+'/viewer/viewer.js',legalComments:'eof'});
console.log('VIEWER_BUILT');
