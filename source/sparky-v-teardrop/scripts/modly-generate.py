import os as _os  # handoff: paths relative to this script
ROOT = _os.path.dirname(_os.path.dirname(_os.path.abspath(__file__))).replace('\\', '/')
EXT = _os.path.join(_os.path.dirname(ROOT), 'external').replace('\\', '/')
"""Generate meshes from the teardrop reference views through Modly's Hunyuan3D Mini (local API on :8765).
python modly-generate.py <view> [<view> ...]      views: front q34left q34right left right back
Writes the returned GLB to work/modly/<view>.glb and the job record to data/modly-<view>.json"""
import json, sys, time, uuid, urllib.request, shutil, os
R = ROOT + '/'
API = 'http://127.0.0.1:8765'
os.makedirs(R + 'work/modly', exist_ok=True)


def post_image(path, fields):
    b = uuid.uuid4().hex; body = b''
    for k, v in fields.items():
        body += f'--{b}\r\nContent-Disposition: form-data; name="{k}"\r\n\r\n{v}\r\n'.encode()
    body += (f'--{b}\r\nContent-Disposition: form-data; name="image"; filename="{os.path.basename(path)}"\r\n'
             'Content-Type: image/png\r\n\r\n').encode() + open(path, 'rb').read() + f'\r\n--{b}--\r\n'.encode()
    req = urllib.request.Request(API + '/generate/from-image', data=body, headers={'Content-Type': f'multipart/form-data; boundary={b}'})
    return json.load(urllib.request.urlopen(req, timeout=60))


for view in sys.argv[1:]:
    params = {'num_inference_steps': 50, 'octree_resolution': 380, 'guidance_scale': 7.0, 'seed': 7}
    job = post_image(R + f'reference/teardrop/{view}.png', {'model_id': 'hunyuan3d-mini/generate', 'collection': 'SparkyTeardrop',
                                                            'remesh': 'none', 'enable_texture': 'false', 'params': json.dumps(params)})
    jid = job['job_id']; print(view, 'job', jid, flush=True)
    t0 = time.time(); st = {}
    while time.time() - t0 < 1500:
        st = json.load(urllib.request.urlopen(f'{API}/generate/status/{jid}', timeout=30))
        if st.get('status') in ('done', 'error', 'cancelled', 'failed'): break
        time.sleep(4)
    print(view, st.get('status'), st.get('error'), st.get('output_url') or st.get('output_path'), flush=True)
    json.dump({'view': view, 'params': params, 'status': st, 'seconds': round(time.time() - t0)}, open(R + f'data/modly-{view}.json', 'w'), indent=2)
    out = st.get('output_url') or st.get('output_path') or ''
    if st.get('status') == 'done' and out:
        if out.startswith('http') or out.startswith('/'):
            url = out if out.startswith('http') else API + out
            try:
                with urllib.request.urlopen(url, timeout=120) as r, open(R + f'work/modly/{view}.glb', 'wb') as f: shutil.copyfileobj(r, f)
            except Exception as e:
                print('download failed', e)
        if os.path.exists(out): shutil.copy(out, R + f'work/modly/{view}.glb')
        print(view, 'saved', os.path.exists(R + f'work/modly/{view}.glb'), flush=True)
