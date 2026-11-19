import os as _os  # handoff: paths relative to this script
ROOT = _os.path.dirname(_os.path.dirname(_os.path.abspath(__file__))).replace('\\', '/')
EXT = _os.path.join(_os.path.dirname(ROOT), 'external').replace('\\', '/')
"""Sparky body as a signed-distance sculpt (smooth unions = organic fillets between flame tongues and the body).

python sdf-body.py            (numpy + scikit-image)
- Ball: round ellipsoid; the front half is deeper (upright round face); the back is a plain round ball.
- Nose: small round sphere blended into the face just above the smile (side-profile reference).
- Fire mass: a round cone smoothly rising out of the ball top (teardrop fire body).
- Flame tongues: tapered, S-curved tubes along bezier spines (tall curling centre flame + front / side / back
  tongues), smooth-unioned into the fire mass so every tongue grows out of the body with a soft fillet.
Out: work/sdf-body-raw.ply (Blender Z-up, face -Y) + data/flame-tongues.json (spines for the rig)
"""
import numpy as np, json, math, sys
from skimage.measure import marching_cubes
OUT = ROOT + '/'
LEGACY = '--legacy' in sys.argv   # old tube tongues (for before/after comparison)
ZMIN, ZMAX = -0.444, 0.50
A, B, C = 0.31, 0.30, 0.30
CZ = ZMIN + C
BF = 0.355
H = 0.006 if '--preview' in sys.argv else 0.003
xs = np.arange(-0.37, 0.37 + H, H, dtype=np.float32)
ys = np.arange(-0.43, 0.34 + H, H, dtype=np.float32)
zs = np.arange(ZMIN - 0.02, ZMAX + 0.07 + H, H, dtype=np.float32)
X, Y, Z = np.meshgrid(xs, ys, zs, indexing='ij')
print('grid', X.shape)


def smin(a, b, k):
    h = np.clip(0.5 + 0.5 * (b - a) / k, 0.0, 1.0)
    return b * (1 - h) + a * h - k * h * (1 - h)


def sd_ellipsoid(px, py, pz, rx, ry, rz):
    k0 = np.sqrt((px / rx) ** 2 + (py / ry) ** 2 + (pz / rz) ** 2)
    k1 = np.sqrt((px / rx ** 2) ** 2 + (py / ry ** 2) ** 2 + (pz / rz ** 2) ** 2)
    return k0 * (k0 - 1.0) / np.maximum(k1, 1e-6)


def sd_round_cone(px, py, pz, a, b, r1, r2):
    ba = np.subtract(b, a); l2 = float(ba @ ba); rr = r1 - r2; a2 = l2 - rr * rr; il2 = 1.0 / l2
    pax, pay, paz = px - a[0], py - a[1], pz - a[2]
    y = pax * ba[0] + pay * ba[1] + paz * ba[2]; z = y - l2
    qx, qy, qz = pax * l2 - ba[0] * y, pay * l2 - ba[1] * y, paz * l2 - ba[2] * y
    x2 = qx * qx + qy * qy + qz * qz
    y2 = y * y * l2; z2 = z * z * l2
    k = math.copysign(1.0, rr) * rr * rr * x2
    d3 = (np.sqrt(np.maximum(x2 * a2 * il2, 0)) + y * rr) * il2 - r1
    d1 = np.sqrt(x2 + z2) * il2 - r2
    d2 = np.sqrt(x2 + y2) * il2 - r1
    return np.where(np.sign(z) * a2 * z2 > k, d1, np.where(np.sign(y) * a2 * y2 < k, d2, d3))


# ---- ball (front half deeper)
ry = np.where(Y < 0, BF, B).astype(np.float32)
D = sd_ellipsoid(X, Y, Z - CZ, A, ry, C).astype(np.float32)
# ---- muzzle: cheeks + mouth come forward a little (side reference: the eye sits back from the profile)
mz = -0.195; mlz = mz - CZ
my = -BF * math.sqrt(max(0.0, 1 - (0.012 / A) ** 2 - (mlz / C) ** 2))
muzzle = sd_ellipsoid(X - (-0.012), Y - (my + 0.100), Z - mz, 0.215, 0.122, 0.135)
D = smin(D, muzzle, 0.085)
# ---- nose: round, blended into the face just above the smile
NX_, NZ_ = -0.012, -0.172
lz = NZ_ - CZ
ny = -BF * math.sqrt(max(0.0, 1 - (NX_ / A) ** 2 - (lz / C) ** 2))
nose = np.sqrt((X - NX_) ** 2 + (Y - (ny + 0.006)) ** 2 + ((Z - NZ_) * 1.12) ** 2) - 0.034
D = smin(D, nose, 0.026)
# ---- fire mass: round cone rising out of the ball top (teardrop)
mass = sd_round_cone(X, Y, Z, (0.0, 0.02, -0.06), (0.045, 0.02, 0.30), 0.272, 0.110)
D = smin(D, mass, 0.10)


# ---- flame tongues
def bez(p0, p1, p2, p3, t):
    u = 1 - t
    return tuple(p0[k] * u ** 3 + p1[k] * 3 * u * u * t + p2[k] * 3 * u * t * t + p3[k] * t ** 3 for k in range(3))


TONGUES = [  # name, base, tip, root radius, curl (sideways push of the upper half -> S curve / hooked tip)
    ('Main',   (0.02, 0.02, 0.16),  (0.085, 0.02, 0.535), 0.140, (0.070, 0.0, 0.0)),
    ('FrontL', (-0.07, -0.07, 0.10), (-0.175, -0.10, 0.430), 0.112, (-0.055, -0.02, 0.0)),
    ('FrontR', (0.09, -0.06, 0.09),  (0.200, -0.09, 0.385), 0.104, (0.055, -0.02, 0.0)),
    ('BackL',  (-0.06, 0.09, 0.10),  (-0.125, 0.130, 0.445), 0.112, (-0.045, 0.02, 0.0)),
    ('BackR',  (0.08, 0.09, 0.09),   (0.155, 0.125, 0.405), 0.106, (0.050, 0.02, 0.0)),
    ('LowL',   (-0.15, 0.00, -0.02), (-0.255, 0.02, 0.285), 0.088, (-0.035, 0.0, 0.0)),
    ('LowR',   (0.16, 0.02, -0.03),  (0.262, 0.03, 0.250), 0.084, (0.035, 0.0, 0.0)),
]
CROWN_C = (0.02, 0.02)
spines = []
NSEG = 22


def nrm(v):
    l = math.sqrt(sum(c * c for c in v)) or 1.0
    return tuple(c / l for c in v)


def box(pts, pad):
    lo = np.min(pts, axis=0) - pad; hi = np.max(pts, axis=0) + pad
    return (slice(max(0, np.searchsorted(xs, lo[0])), np.searchsorted(xs, hi[0])),
            slice(max(0, np.searchsorted(ys, lo[1])), np.searchsorted(ys, hi[1])),
            slice(max(0, np.searchsorted(zs, lo[2])), np.searchsorted(zs, hi[2])))


def flame_profile(t):
    """Flame tongue radius along its length (0 = root, 1 = tip): full belly low down, then a quick pinch into a
    thin licking wisp -- a flame, not the straight taper of a horn."""
    belly = 1.0 + 0.10 * math.sin(math.pi * min(t / 0.5, 1.0))
    return (1 - t ** 1.35) ** 0.85 * (1 + 0.06 * math.sin(math.pi * min(t / 0.5, 1.0)))   # the centre flame's proven taper, slight belly


def ribbon(base, tip, curl, r0, thin_n, flat, wob, phase, nseg=NSEG, flick=0.28):
    """Flame ribbon along an S-curved, wobbling spine. Cross-section is an ellipse squashed by `flat` along thin_n
    (a petal / ribbon, wide across, thin through) -> reads as a sheet of fire instead of a round horn."""
    L = math.dist(base, tip)
    p1 = (base[0] - curl[0] * 0.4, base[1] - curl[1] * 0.4, base[2] + L * 0.40)
    p2 = (tip[0] + curl[0], tip[1] + curl[1], tip[2] - L * 0.32)
    side = nrm((-thin_n[1], thin_n[0], 0.0))            # across the ribbon, horizontal
    pts = []
    for i in range(nseg + 1):
        t = i / nseg; b = bez(base, p1, p2, tip, t)
        w = wob * t ** 1.3 * math.sin(math.pi * 1.7 * t + phase)          # licking S-wobble, stronger toward the tip
        fk = max(0.0, (t - 0.55) / 0.45) ** 2 * flick                      # tip flicks over toward the curl (flame lick)
        cl = math.hypot(curl[0], curl[1]) or 1.0
        pts.append((b[0] + side[0] * w + curl[0] / cl * fk * L * 0.18, b[1] + side[1] * w + curl[1] / cl * fk * L * 0.18, b[2] - fk * L * 0.05))
    rad = [max(0.004, r0 * flame_profile(i / nseg)) for i in range(nseg + 1)]
    return pts, rad


def add_ribbon(pts, rad, thin_n, flat, k):
    global D
    ix, iy, iz = box(pts, max(rad) * math.sqrt(flat) + k + 0.04)
    px, py, pz = X[ix, iy, iz], Y[ix, iy, iz], Z[ix, iy, iz]
    n = np.array(thin_n, dtype=np.float32); o = np.array(pts[0], dtype=np.float32)
    def sq(ax, ay, az):   # stretch space along n by `flat` about the root plane
        d = (ax - o[0]) * n[0] + (ay - o[1]) * n[1] + (az - o[2]) * n[2]
        return ax + (flat - 1) * d * n[0], ay + (flat - 1) * d * n[1], az + (flat - 1) * d * n[2]
    qx, qy, qz = sq(px, py, pz)
    sp = [tuple(float(c) for c in sq(np.float32(p[0]), np.float32(p[1]), np.float32(p[2]))) for p in pts]
    fs = math.sqrt(flat)   # across = r*sqrt(flat), through = r/sqrt(flat)
    T = np.full(px.shape, 9.0, dtype=np.float32)
    for i in range(len(sp) - 1):
        r1, r2 = rad[i] * fs, rad[i + 1] * fs; sl = math.dist(sp[i], sp[i + 1])
        if abs(r1 - r2) > 0.85 * sl:   # round cone is undefined when the radius changes faster than the segment length
            if r1 > r2: r2 = r1 - 0.85 * sl
            else: r1 = r2 - 0.85 * sl
        T = np.minimum(T, sd_round_cone(qx, qy, qz, sp[i], sp[i + 1], max(r1, 1e-3), max(r2, 1e-3)))
    T /= math.sqrt(flat)
    D[ix, iy, iz] = smin(D[ix, iy, iz], T, k)


# secondary licks: (parent, t on parent spine, outward push, rise, root radius ratio, curl sign)
LICKS = [   # small flames splitting off low on the side tongues -> their own separate tips (no notched ends)
    ('FrontL', 0.34, 0.050, 0.150, 0.70, -1), ('FrontR', 0.34, 0.050, 0.140, 0.70, 1),
    ('BackL', 0.34, 0.050, 0.150, 0.70, -1), ('BackR', 0.34, 0.050, 0.145, 0.70, 1),
    ('LowL', 0.40, 0.040, 0.115, 0.72, 1), ('LowR', 0.40, 0.040, 0.110, 0.72, -1),
]
for ti, (nm, base, tip, r0, curl) in enumerate(TONGUES):
    if LEGACY:
        L = math.dist(base, tip)
        p1 = (base[0] - curl[0] * 0.4, base[1] - curl[1] * 0.4, base[2] + L * 0.40)
        p2 = (tip[0] + curl[0], tip[1] + curl[1], tip[2] - L * 0.32)
        pts = [bez(base, p1, p2, tip, i / NSEG) for i in range(NSEG + 1)]
        rad = [max(0.005, r0 * (1 - (i / NSEG) ** 1.35) ** 0.85) for i in range(NSEG + 1)]
        add_ribbon(pts, rad, (1.0, 0.0, 0.0), 1.0, 0.045)
    else:
        # thin axis = radial from the crown centre (petals around the crown); the centre flame is thin front-to-back
        rv = (base[0] - CROWN_C[0], base[1] - CROWN_C[1], 0.0)
        thin = (1.0, 0.0, 0.0) if nm == 'Main' else nrm(rv)   # centre flame: slim from the front (keeps its S), broad from the side (no needle)
        main = nm == 'Main'
        cm = 1.0 if main else 1.5
        fl = 1.3 if main else 1.45
        pts, rad = ribbon(base, tip, (curl[0] * cm, curl[1] * cm, 0.0), r0, thin, fl, 0.006 if main else 0.010, ti * 1.9, flick=0.12 if main else 0.06)
        add_ribbon(pts, rad, thin, fl, 0.045)
        licks = []
        for (pn, tt, push, rise, rr, cs) in LICKS:
            if pn != nm: continue
            j = int(round(tt * NSEG)); sb = pts[j]
            out = nrm((sb[0] - CROWN_C[0] + 1e-3 * cs, sb[1] - CROWN_C[1], 0.0))
            side = nrm((-thin[1], thin[0], 0.0))
            dirv = tuple(out[k] * 0.45 + side[k] * cs * 0.55 for k in range(3))
            ltip = (sb[0] + dirv[0] * push, sb[1] + dirv[1] * push, sb[2] + rise)
            lp, lr = ribbon(sb, ltip, (dirv[0] * 0.05, dirv[1] * 0.05, 0.0), rad[j] * rr, thin, 1.4, 0.004, ti + tt * 5, nseg=12, flick=0.0)
            add_ribbon(lp, lr, thin, 1.4, 0.026)
            licks.append({'t': tt, 'spine': [list(q) for q in lp], 'r0': lr[0]})
    spines.append({'name': nm, 'r0': r0, 'licks': [] if LEGACY else licks, 'spine': [list(pts[j]) for j in range(0, NSEG + 1, 2)] + ([list(pts[-1])] if NSEG % 2 else [])})
    print('tongue', nm)

if not LEGACY:
    # rising flow grooves over the crown: shallow wavy channels that make the surface read as moving fire
    crown = np.clip((Z - 0.02) / 0.18, 0, 1).astype(np.float32)
    ang = np.arctan2(X - CROWN_C[0], Y - CROWN_C[1])
    g = np.sin(ang * 9.0 + 7.0 * Z + 2.2 * np.sin(Z * 21.0 + ang * 2.0))
    D += (0.0030 * crown * g).astype(np.float32)

verts, faces, _, _ = marching_cubes(D, level=0.0, spacing=(H, H, H))
verts += np.array([xs[0], ys[0], zs[0]], dtype=np.float32)
print('mesh', len(verts), len(faces))
with open(OUT + ('work/sdf-body-legacy.ply' if LEGACY else 'work/sdf-body-raw.ply'), 'wb') as f:
    f.write(('ply\nformat binary_little_endian 1.0\nelement vertex %d\nproperty float x\nproperty float y\nproperty float z\n'
             'element face %d\nproperty list uchar int vertex_indices\nend_header\n' % (len(verts), len(faces))).encode())
    f.write(verts.astype('<f4').tobytes())
    fa = np.empty((len(faces),), dtype=[('n', 'u1'), ('i', '<i4', 3)]); fa['n'] = 3; fa['i'] = faces
    f.write(fa.tobytes())
if not LEGACY: json.dump(spines, open(OUT + 'data/flame-tongues.json', 'w'), indent=1)
print('SDF_BODY_READY')
