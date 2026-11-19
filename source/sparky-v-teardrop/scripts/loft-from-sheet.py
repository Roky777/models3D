import os as _os  # handoff: paths relative to this script
ROOT = _os.path.dirname(_os.path.dirname(_os.path.abspath(__file__))).replace('\\', '/')
EXT = _os.path.join(_os.path.dirname(ROOT), 'external').replace('\\', '/')
"""Teardrop Sparky body lofted from the turnaround sheet silhouettes (front + left side), in numpy.
python loft-from-sheet.py [--preview]
- front silhouette (X-Z): at every height, one or more filled intervals (body, curling top flame, side licks)
- side silhouette  (Y-Z): depth and front/back centre at every height (round face, tip leaning back)
- each front interval becomes an ellipse in that slice: half-width from the front view, half-depth from the side
  view but never deeper than ~0.9x its own half-width (thin flame parts stay thin sheets of fire)
- occupancy is blurred and contoured -> soft, rounded volume; scaled so the lower body is 0.62 wide, floor z=-0.444
Out: work/loft-raw.ply (Blender Z-up, face -Y), data/loft.json"""
import numpy as np, json, sys
from PIL import Image
from scipy import ndimage
from skimage.measure import marching_cubes
R = ROOT + '/'
PREV = '--preview' in sys.argv


def mask(name):
    a = np.asarray(Image.open(R + f'reference/teardrop/{name}.png'))[:, :, 3] > 128
    ys, xs = np.where(a)
    return a[ys.min():ys.max() + 1, xs.min():xs.max() + 1]


F = mask('front'); S = mask('left')               # left side view: face on image-left -> -Y
# common height grid: both views are scaled to the same height (they share the floor and the flame tip)
N = 220 if PREV else 360                          # slices
def rows(m):
    h = m.shape[0]
    return [m[int(round((N - 1 - k) / (N - 1) * (h - 1)))] for k in range(N)]   # k = 0 bottom ... N-1 top
FR, SR = rows(F), rows(S)
Hf, Wf = F.shape; Hs, Ws = S.shape
# units: 1 = sheet height. front x in [-Wf/2, Wf/2]/Hf, side y likewise
def intervals(r):
    d = np.diff(np.concatenate([[0], r.astype(np.int8), [0]]))
    st = np.where(d == 1)[0]; en = np.where(d == -1)[0]
    return list(zip(st, en))
# lower-body width (15-45% height band) for scaling
bw = max((max(e for _, e in intervals(FR[k])) - min(s for s, _ in intervals(FR[k]))) for k in range(int(.15 * N), int(.45 * N)) if intervals(FR[k]))
scale = 0.62 / (bw / Hf)                          # metres per sheet-height
fcx = None
k0, k1 = int(.15 * N), int(.45 * N)
cxs = [(min(s for s, _ in intervals(FR[k])) + max(e for _, e in intervals(FR[k]))) / 2 for k in range(k0, k1) if intervals(FR[k])]
fcx = np.mean(cxs)
scy = np.mean([(min(s for s, _ in intervals(SR[k])) + max(e for _, e in intervals(SR[k]))) / 2 for k in range(k0, k1) if intervals(SR[k])])
# grid
H = 0.0045 if PREV else 0.003
top = scale * 1.0
xs = np.arange(-0.45, 0.45 + H, H, dtype=np.float32); ys = np.arange(-0.45, 0.45 + H, H, dtype=np.float32)
zs = np.arange(-0.02, top + 0.02 + H, H, dtype=np.float32)
X, Y = np.meshgrid(xs, ys, indexing='ij')
occ = np.zeros((len(xs), len(ys), len(zs)), dtype=np.float32)
for iz, z in enumerate(zs):
    k = int(round(z / top * (N - 1)))
    if k < 0 or k >= N: continue
    fi = intervals(FR[k]); si = intervals(SR[k])
    if not fi or not si: continue
    s0 = min(s for s, _ in si); s1 = max(e for _, e in si)
    ycen = ((s0 + s1) / 2 - scy) / Hf * scale; yhalf = (s1 - s0) / 2 / Hf * scale
    sl = np.zeros_like(X)
    for a, b in fi:
        cx = ((a + b) / 2 - fcx) / Hf * scale; hx = (b - a) / 2 / Hf * scale
        if hx < 0.004: continue
        hy = min(yhalf, 0.92 * hx + 0.01)          # thin flames stay thin sheets
        # side licks sit back toward the middle of the side silhouette; body uses the side-view centre
        e = ((X - cx) / hx) ** 2 + ((Y - ycen) / hy) ** 2
        sl = np.maximum(sl, (e <= 1).astype(np.float32))
    occ[:, :, iz] = sl
occ = ndimage.gaussian_filter(occ, 1.6 if PREV else 2.2)
verts, faces, _, _ = marching_cubes(occ, level=0.5, spacing=(H, H, H))
verts += np.array([xs[0], ys[0], zs[0] - 0.444], dtype=np.float32)
vz = verts[:, 2]; verts[:, 2] += -0.444 - vz.min()          # floor exactly at z = -0.444
with open(R + 'work/loft-raw.ply', 'wb') as f:
    f.write(('ply\nformat binary_little_endian 1.0\nelement vertex %d\nproperty float x\nproperty float y\nproperty float z\n'
             'element face %d\nproperty list uchar int vertex_indices\nend_header\n' % (len(verts), len(faces))).encode())
    f.write(verts.astype('<f4').tobytes())
    fa = np.empty((len(faces),), dtype=[('n', 'u1'), ('i', '<i4', 3)]); fa['n'] = 3; fa['i'] = faces; f.write(fa.tobytes())
info = {'scale_m_per_sheet_height': float(scale), 'height': float(verts[:, 2].max() - verts[:, 2].min()),
        'bbox_min': verts.min(0).tolist(), 'bbox_max': verts.max(0).tolist(), 'verts': len(verts)}
json.dump(info, open(R + 'data/loft.json', 'w'), indent=2)
print('LOFT_READY', json.dumps(info))
