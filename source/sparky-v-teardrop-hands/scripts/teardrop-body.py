import os as _os  # handoff: paths relative to this script
ROOT = _os.path.dirname(_os.path.dirname(_os.path.abspath(__file__))).replace('\\', '/')
EXT = _os.path.join(_os.path.dirname(ROOT), 'external').replace('\\', '/')
"""Teardrop Sparky body (shape from the user's turnaround sheet), as a signed-distance sculpt.
python teardrop-body.py [--preview]
1. Loft: front silhouette gives the width at every height, the left-side silhouette the depth and the front/back
   centre; profiles are smoothed up the height (the drawn outline is jagged) and every slice is an ellipse.
2. Occupancy -> signed distance (distance transforms), so flame licks can be blended in with smooth unions.
3. Main flame = the curled top tip (its spine is read from the loft profiles); 5 small flame licks along the upper
   outline like the sheet (two on each side, one at the back), modelled as soft ribbons (reuses sdf-body.py ideas).
Units/axes like the pipeline: metres, Blender Z up, face toward -Y; lower body 0.62 wide; the painted face stays at
its old place, so the floor is lowered to put the eyes at the sheet's height (~54% of the body height).
Out: work/sdf-body-raw.ply (-> finish-sdf-body.py), data/flame-tongues.json (rig + viewer), data/teardrop-body.json"""
import numpy as np, json, sys, math
from PIL import Image
from scipy import ndimage
from skimage.measure import marching_cubes
R = ROOT + '/'
PREV = '--preview' in sys.argv
EYE_Z = -0.1306                 # painted eye centres (fixed by the face art / shader)
EYE_FRAC = 0.30                 # eye height as a fraction of the body height (measured on the sheet front view)
BALL_W = 0.60


def mask(name):
    a = np.asarray(Image.open(R + f'reference/teardrop/{name}.png'))[:, :, 3] > 128
    ys, xs = np.where(a)
    return a[ys.min():ys.max() + 1, xs.min():xs.max() + 1]


def profile(m):
    """per row (bottom -> top): left, right edge (outermost), smoothed along the height"""
    h = m.shape[0]; L = np.zeros(h); Rr = np.zeros(h); ok = np.zeros(h, bool)
    for i in range(h):
        r = m[h - 1 - i]; xs = np.where(r)[0]
        if len(xs): L[i], Rr[i], ok[i] = xs.min(), xs.max() + 1, True
    idx = np.arange(h); L = np.interp(idx, idx[ok], L[ok]); Rr = np.interp(idx, idx[ok], Rr[ok])
    w = np.clip((idx / (h - 1) - 0.50) / 0.15, 0, 1)            # round lower body: heavy smoothing; flame part: keep detail
    sm = lambda a: ndimage.gaussian_filter1d(a, 22.0) * (1 - w) + ndimage.gaussian_filter1d(a, 5.0) * w
    return sm(L), sm(Rr)


F = mask('front'); S = mask('left')
Hf, Wf = F.shape; Hs, Ws = S.shape
fL, fR = profile(F); sL, sR = profile(S)
band = slice(int(.15 * Hf), int(.45 * Hf))
bw = (fR - fL)[band].max()
k = BALL_W / bw                                   # metres per front-sheet pixel
fcx = ((fL + fR) / 2)[band].mean()
ks = k * Hf / Hs                                  # side sheet scaled to the same body height
scy = ((sL + sR) / 2)[int(.15 * Hs):int(.45 * Hs)].mean()
HEIGHT = Hf * k
ZMIN = EYE_Z - EYE_FRAC * HEIGHT                  # floor so that the painted eyes land at the sheet's eye height
print('height', HEIGHT, 'floor', ZMIN)


def at(arr, frac):
    x = frac * (len(arr) - 1); i = int(np.clip(np.floor(x), 0, len(arr) - 2)); t = x - i
    return arr[i] * (1 - t) + arr[i + 1] * t


H = 0.0045 if PREV else 0.003
xs = np.arange(-0.42, 0.42 + H, H, dtype=np.float32); ys = np.arange(-0.40, 0.40 + H, H, dtype=np.float32)
zs = np.arange(ZMIN - 0.03, ZMIN + HEIGHT + 0.16 + H, H, dtype=np.float32)
X, Y = np.meshgrid(xs, ys, indexing='ij')
D = np.full((len(xs), len(ys), len(zs)), 0.5, dtype=np.float32)
spine = []
for iz, z in enumerate(zs):
    fr = (z - ZMIN) / HEIGHT
    if fr < 0 or fr > 1: continue
    l, r = at(fL, fr), at(fR, fr); sl, sr = at(sL, fr), at(sR, fr)
    cx = ((l + r) / 2 - fcx) * k; hx = (r - l) / 2 * k
    cy = ((sl + sr) / 2 - scy) * ks; hy = (sr - sl) / 2 * ks
    cap = math.sqrt(max(0.0, 1 - (1 - min(fr / 0.20, 1.0)) ** 2))   # round bottom (the sheet has no flat base)
    hx *= cap; hy *= cap
    if hx < 0.003 or hy < 0.003: continue
    hy = min(hy, 0.95 * hx + 0.012)               # thin top flame stays a soft sheet, not a cone
    p = 2.0 + 0.6 * max(0.0, fr - 0.6) / 0.4      # slightly squarer slices up in the flame (fuller flame body)
    q = (np.abs((X - cx) / hx) ** p + np.abs((Y - cy) / hy) ** p) ** (1.0 / p)
    D[:, :, iz] = (q - 1.0) * min(hx, hy)          # smooth per-slice distance (no voxel steps)
    if fr > 0.55: spine.append([float(cx), float(cy), float(z), float(hx)])
D = np.minimum(D, 0.5)
D = ndimage.gaussian_filter(D, (0.8, 0.8, 2.0))   # rounds the floor / tip closures
Z = None


def smin(a, b, kk):
    h = np.clip(0.5 + 0.5 * (b - a) / kk, 0.0, 1.0)
    return b * (1 - h) + a * h - kk * h * (1 - h)


def sd_round_cone(px, py, pz, a, b, r1, r2):
    ba = np.subtract(b, a); l2 = float(ba @ ba); rr = r1 - r2; a2 = l2 - rr * rr; il2 = 1.0 / l2
    pax, pay, paz = px - a[0], py - a[1], pz - a[2]
    y = pax * ba[0] + pay * ba[1] + paz * ba[2]; zz = y - l2
    qx, qy, qz = pax * l2 - ba[0] * y, pay * l2 - ba[1] * y, paz * l2 - ba[2] * y
    x2 = qx * qx + qy * qy + qz * qz; y2 = y * y * l2; z2 = zz * zz * l2
    kq = math.copysign(1.0, rr) * rr * rr * x2
    d3 = (np.sqrt(np.maximum(x2 * a2 * il2, 0)) + y * rr) * il2 - r1
    d1 = np.sqrt(x2 + z2) * il2 - r2; d2 = np.sqrt(x2 + y2) * il2 - r1
    return np.where(np.sign(zz) * a2 * z2 > kq, d1, np.where(np.sign(y) * a2 * y2 < kq, d2, d3))


def bez(p0, p1, p2, p3, t):
    u = 1 - t
    return tuple(p0[i] * u ** 3 + p1[i] * 3 * u * u * t + p2[i] * 3 * u * t * t + p3[i] * t ** 3 for i in range(3))


def surface_point(theta, z):
    """outermost point of the body at height z in horizontal direction theta (0 = +X, 90 = -Y front)"""
    iz = int(round((z - zs[0]) / H)); d = (math.cos(math.radians(theta)), -math.sin(math.radians(theta)))
    best = None
    for rr in np.arange(0.0, 0.42, H * 0.5):
        x, y = d[0] * rr, d[1] * rr
        ix, iy = int(round((x - xs[0]) / H)), int(round((y - ys[0]) / H))
        if 0 <= ix < len(xs) and 0 <= iy < len(ys) and D[ix, iy, iz] < 0: best = (x, y, z)
    return best


def add_lick(base, tip, curl, r0, nseg=14):
    global D
    L = math.dist(base, tip)
    p1 = (base[0] - curl[0] * .4, base[1] - curl[1] * .4, base[2] + L * .40); p2 = (tip[0] + curl[0], tip[1] + curl[1], tip[2] - L * .30)
    pts = [bez(base, p1, p2, tip, i / nseg) for i in range(nseg + 1)]
    rad = [max(0.003, r0 * (1 - (i / nseg) ** 1.35) ** .85) for i in range(nseg + 1)]
    lo = np.min(pts, 0) - r0 - .05; hi = np.max(pts, 0) + r0 + .05
    ix = slice(max(0, np.searchsorted(xs, lo[0])), np.searchsorted(xs, hi[0])); iy = slice(max(0, np.searchsorted(ys, lo[1])), np.searchsorted(ys, hi[1]))
    iz = slice(max(0, np.searchsorted(zs, lo[2])), np.searchsorted(zs, hi[2]))
    px, py, pz = np.meshgrid(xs[ix], ys[iy], zs[iz], indexing='ij')
    T = np.full(px.shape, 9.0, np.float32)
    for i in range(nseg):
        r1, r2 = rad[i], rad[i + 1]; sl = math.dist(pts[i], pts[i + 1])
        if abs(r1 - r2) > .85 * sl: r2 = r1 - .85 * sl
        T = np.minimum(T, sd_round_cone(px, py, pz, pts[i], pts[i + 1], r1, max(r2, 1e-3)))
    D[ix, iy, iz] = smin(D[ix, iy, iz], T, 0.05)
    return pts


def nrm(v):
    l = math.sqrt(sum(c * c for c in v)) or 1.0
    return tuple(c / l for c in v)


def ribbon(base, tip, curl, r0, thin_n, wob, phase, nseg=20, flick=0.25):
    """flame tongue spine: S-curve (bezier + curl), licking wobble growing to the tip, tip flicks toward the curl"""
    L = math.dist(base, tip)
    p1 = (base[0] - curl[0] * .4, base[1] - curl[1] * .4, base[2] + L * .40); p2 = (tip[0] + curl[0], tip[1] + curl[1], tip[2] - L * .32)
    side = nrm((-thin_n[1], thin_n[0], 0.0)); cl = math.hypot(curl[0], curl[1]) or 1.0
    pts = []
    for i in range(nseg + 1):
        t = i / nseg; q = bez(base, p1, p2, tip, t)
        w = wob * t ** 1.3 * math.sin(math.pi * 1.7 * t + phase); fk = max(0.0, (t - .55) / .45) ** 2 * flick
        pts.append((q[0] + side[0] * w + curl[0] / cl * fk * L * .18, q[1] + side[1] * w + curl[1] / cl * fk * L * .18, q[2] - fk * L * .05))
    rad = [max(0.004, r0 * (1 - (i / nseg) ** 1.35) ** .85 * (1 + .06 * math.sin(math.pi * min(i / nseg / .5, 1.0)))) for i in range(nseg + 1)]
    return pts, rad


def add_ribbon(pts, rad, thin_n, flat, k):
    """flat flame ribbon: ellipse cross-section, wide across, thin through (reads as a sheet of fire, not a horn)"""
    global D
    fs = math.sqrt(flat); pad = max(rad) * fs + k + .04
    lo = np.min(pts, 0) - pad; hi = np.max(pts, 0) + pad
    ix = slice(max(0, np.searchsorted(xs, lo[0])), np.searchsorted(xs, hi[0])); iy = slice(max(0, np.searchsorted(ys, lo[1])), np.searchsorted(ys, hi[1]))
    iz = slice(max(0, np.searchsorted(zs, lo[2])), np.searchsorted(zs, hi[2]))
    px, py, pz = np.meshgrid(xs[ix], ys[iy], zs[iz], indexing='ij')
    n = np.array(thin_n, np.float32); o = np.array(pts[0], np.float32)
    def sq(ax, ay, az):
        d = (ax - o[0]) * n[0] + (ay - o[1]) * n[1] + (az - o[2]) * n[2]
        return ax + (flat - 1) * d * n[0], ay + (flat - 1) * d * n[1], az + (flat - 1) * d * n[2]
    qx, qy, qz = sq(px, py, pz)
    sp = [tuple(float(c) for c in sq(np.float32(p[0]), np.float32(p[1]), np.float32(p[2]))) for p in pts]
    T = np.full(px.shape, 9.0, np.float32)
    for i in range(len(sp) - 1):
        r1, r2 = rad[i] * fs, rad[i + 1] * fs; sl = math.dist(sp[i], sp[i + 1])
        if abs(r1 - r2) > .85 * sl:
            if r1 > r2: r2 = r1 - .85 * sl
            else: r1 = r2 - .85 * sl
        T = np.minimum(T, sd_round_cone(qx, qy, qz, sp[i], sp[i + 1], max(r1, 1e-3), max(r2, 1e-3)))
    T /= fs
    D[ix, iy, iz] = smin(D[ix, iy, iz], T, k)


def pack(nm, r0, pts):
    return {'name': nm, 'r0': r0, 'spine': [list(map(float, p)) for p in pts[::2]] + ([list(map(float, pts[-1]))] if (len(pts) - 1) % 2 else []), 'licks': []}


tongues = []
# MAIN flame: a big, tall flame rising out of the upper body, curling over to the right and back like the sheet
sp = np.array(spine)
mb = sp[0]                                           # loft centre at 55% height
top = sp[-1]
mbase = (float(mb[0]), float(mb[1]), float(mb[2]) - 0.02)
mtip = (float(top[0]) + 0.035, float(top[1]) + 0.05, float(top[2]) + 0.11)
pts, rad = ribbon(mbase, mtip, (0.075, 0.035, 0.0), 0.15, (0.0, 1.0, 0.0), 0.012, 0.4, flick=0.35)
add_ribbon(pts, rad, (0.0, 1.0, 0.0), 1.35, 0.06)
tongues.append(pack('Main', 0.15, pts))
# flame TONGUES around the upper body -- the points along the sheet's outline (front: two each side; back: three)
FLAMES = [  # name, direction (deg: 0 right, 90 front, 180 left, 270 back), height frac, length, root radius, sideways curl sign
    ('R_Low', 8, 0.50, 0.185, 0.070, 1), ('R_High', 25, 0.68, 0.195, 0.072, 1),
    ('L_Low', 172, 0.48, 0.175, 0.068, -1), ('L_High', 158, 0.66, 0.195, 0.072, -1),
    ('BackR', 305, 0.58, 0.205, 0.075, 1), ('BackL', 238, 0.60, 0.205, 0.075, -1), ('Back', 272, 0.76, 0.185, 0.070, 1),
]
for i, (nm, th, fr, L, r0, cs) in enumerate(FLAMES):
    z = ZMIN + fr * HEIGHT; b = surface_point(th, z)
    if b is None: print('no surface for', nm); continue
    d = (math.cos(math.radians(th)), -math.sin(math.radians(th)), 0.0)
    tg = (-d[1] * cs, d[0] * cs, 0.0)                                         # sideways, around the body
    bt = surface_point(th, min(z + L * 0.85, ZMIN + 0.97 * HEIGHT)) or b
    base = (b[0] - d[0] * 0.05, b[1] - d[1] * 0.05, z - 0.03)                    # rooted in the body
    tip = (bt[0] + d[0] * 0.05 + tg[0] * 0.03, bt[1] + d[1] * 0.05 + tg[1] * 0.03, z + L)
    curl = (d[0] * 0.035 + tg[0] * 0.03, d[1] * 0.035 + tg[1] * 0.03, 0.0)
    pts, rad = ribbon(base, tip, curl, r0, d, 0.010, i * 1.9, flick=0.25)
    add_ribbon(pts, rad, d, 1.45, 0.045)
    tongues.append(pack(nm, r0, pts))
    print('flame', nm)
verts, faces, _, _ = marching_cubes(D, level=0.0, spacing=(H, H, H))
verts += np.array([xs[0], ys[0], zs[0]], dtype=np.float32)
with open(R + 'work/sdf-body-raw.ply', 'wb') as f:
    f.write(('ply\nformat binary_little_endian 1.0\nelement vertex %d\nproperty float x\nproperty float y\nproperty float z\n'
             'element face %d\nproperty list uchar int vertex_indices\nend_header\n' % (len(verts), len(faces))).encode())
    f.write(verts.astype('<f4').tobytes())
    fa = np.empty((len(faces),), dtype=[('n', 'u1'), ('i', '<i4', 3)]); fa['n'] = 3; fa['i'] = faces; f.write(fa.tobytes())
json.dump(tongues, open(R + 'data/flame-tongues.json', 'w'), indent=1)
info = {'height': float(HEIGHT), 'floor': float(ZMIN), 'scale_m_per_px': float(k), 'bbox_min': verts.min(0).tolist(), 'bbox_max': verts.max(0).tolist(),
        'tongues': [t['name'] for t in tongues]}
json.dump(info, open(R + 'data/teardrop-body.json', 'w'), indent=2)
print('TEARDROP_READY', json.dumps(info))
