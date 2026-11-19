"""Cute fire arm + hand for Sparky v-teardrop-hands: one smooth sculpt (signed distance) + the matching bone layout.
python hand-rig.py [--preview]
Left arm is built; the right one is its mirror (done in Blender). Blender coordinates: metres, Z up, face toward -Y.
- chubby upper arm (shoulder sits inside the body side) -> forearm -> wrist
- rounded palm, thumb (2 segments), index / middle / pinky (2 segments each), soft round fingertips
- palm faces the body, fingers hang down, thumb toward the front
Out: work/hand-L.ply, data/arm-rig.json (bones: name, parent, head, tail, radius; curl axes for the hand clips)"""
import numpy as np, json, math, sys
from skimage.measure import marching_cubes
import os as _os
ROOT = _os.path.dirname(_os.path.dirname(_os.path.abspath(__file__))).replace('\\', '/')
PREV = '--preview' in sys.argv
STYLE = next((a.split('=')[1] for a in sys.argv if a.startswith('--style=')), 'cartoon')   # cartoon (used) | round | flame | float
CARTOON = STYLE == 'cartoon'   # brown cartoon hand from the emotion sheet: flat palm, 3 rounded fingers + thumb, slim arm
OUTNAME = next((a.split('=')[1] for a in sys.argv if a.startswith('--out=')), 'hand-L')
V = lambda *a: np.array(a, dtype=float)
nrm = lambda v: v / np.linalg.norm(v)

# ---- joint layout (left side, x < 0)
HS = 1.5 if CARTOON else 1.75                              # hand scale: round cute mitten, sized to sit nicely next to the face
S = V(-0.258, -0.095, -0.125)          # shoulder: just under the body surface, a little forward (arms grow out of the side)
E = V(-0.310, -0.112, -0.163)          # elbow  -- short, chubby arm
W = V(-0.343, -0.124, -0.200)          # wrist
if CARTOON: E = S + (E - S) * 0.85; W = E + (W - E) * 0.75   # short stubby cartoon arm
d = nrm(V(-0.45, -0.18, -1.0))         # hand points down and out, a little forward
_pn = nrm(V(1, 0, 0) * 0.77 + V(0, 1, 0) * 0.64) if STYLE == 'cartoon' else V(1, 0, 0)   # cartoon: palm turned ~40 deg toward the viewer (back of hand faces front-out)
n = nrm(_pn - d * np.dot(_pn, d))   # palm normal
w = nrm(np.cross(d, n))                # across the palm (front <-> back)
if w[1] > 0: w = -w                    # +w = toward the front (-Y)
K = W + d * 0.046 * HS                 # knuckle line
C = W + d * 0.024 * HS                 # palm centre
if CARTOON: K = W + d * 0.044 * HS; C = W + d * 0.025 * HS
FINGERS = [  # name, offset across palm, fan, length, radius
    ('Index', 0.0150 * HS, 0.12, 0.010 * HS, 0.0125 * HS), ('Middle', 0.0, 0.0, 0.012 * HS, 0.0130 * HS), ('Pinky', -0.0150 * HS, -0.12, 0.009 * HS, 0.0118 * HS)]
if CARTOON:   # chunky cartoon fingers: clearly separate, rounded tips, slight fan (index toward the front)
    FINGERS = [(nm, o * HS, f, L * HS, r * HS) for nm, o, f, L, r in [('Index', 0.0215, 0.42, 0.031, 0.0090), ('Middle', 0.0072, 0.14, 0.035, 0.0095), ('Ring', -0.0072, -0.14, 0.033, 0.0092), ('Pinky', -0.0215, -0.42, 0.027, 0.0085)]]
bones = []
def bone(name, parent, head, tail, r):
    bones.append({'name': name, 'parent': parent, 'head': [float(c) for c in head], 'tail': [float(c) for c in tail], 'radius': r})
bone('Sparky_L_UpperArm', 'Sparky_Body', S, E, 0.040)
bone('Sparky_L_Elbow', 'Sparky_L_UpperArm', E, W, 0.034)
bone('Sparky_L_Hand', 'Sparky_L_Elbow', W, K, 0.030 * HS)
caps = []   # (a, b, ra, rb, smooth k) pieces of the sculpt
if CARTOON: caps += [(S, E, 0.023, 0.020, 0.016), (E, W, 0.020, 0.018, 0.012)]   # thin noodle arm (cartoon: big hand, thin arm)
elif STYLE != 'float': caps += [(S, E, 0.040, 0.033, 0.024), (E, W, 0.033, 0.030, 0.024)]   # soft stub arm (floating style: none)
for nm, off, fan, L, r in FINGERS:
    base = K + w * off - d * 0.004 * HS
    fd = nrm(d + w * fan)
    mid = base + fd * L * 0.55; tip = base + fd * L
    if nm != 'Ring': bone(f'Sparky_L_{nm}', 'Sparky_L_Hand', base, tip, r)   # ring finger: no bone, skinned to its neighbours
    if CARTOON: caps += [(base, tip, r, r * 1.04, 0.0028 * HS)]   # rounded, slightly fuller tips; fingers stay apart   # fat sausage fingers, puffy blend            # small blend: fingers stay separate
    else: caps += [(base, tip, r, r * 0.92, 0.010 * HS)]                # big smoothing: bumps melt into one mitten
T0 = W + (d * 0.020 + w * 0.024 + n * 0.006) * HS
td = nrm(w * 0.75 + d * 0.45 + n * 0.35)
T2 = T0 + td * 0.020 * HS
if CARTOON:   # proper cartoon thumb: from the palm heel, toward the front and a little down
    T0 = W + (d * 0.016 + w * 0.024 + n * 0.004) * HS; td = nrm(w * 0.95 + d * 0.18 + n * 0.20); T2 = T0 + td * 0.026 * HS   # thumb sticks out to the side
bone('Sparky_L_Thumb', 'Sparky_L_Hand', T0, T2, (0.0100 * HS if CARTOON else 0.0125 * HS))       # thumb
caps += [(T0, T2, 0.0100 * HS, 0.0102 * HS, 0.004 * HS)] if CARTOON else [(T0, T2, 0.0130 * HS, 0.0118 * HS, 0.008 * HS)]
# fire: two little flame flicks on the back of the hand, rising up (own bone -> flickers with the crown flames)
up = V(0, 0, 1)
# one soft flame tuft on the back of the wrist: a mini version of Sparky's head flame (fat round base, S-curve,
# soft curled tip leaning back along the arm) -- not a spike
tuft_base = W + d * 0.006 * HS - n * 0.016 * HS
tuft_dir = nrm(up * 0.9 - d * 0.55 - n * 0.35)
tuft_tip = tuft_base + tuft_dir * 0.038 * HS
if STYLE in ('flame', 'float'): bone('Sparky_Flame_L_Hand_B', 'Sparky_L_Hand', tuft_base, tuft_tip, 0.014 * HS)

# ---- signed distance sculpt
H = 0.0028 if PREV else 0.0018
lo = np.minimum.reduce([S, E, W, K + d * 0.07 * HS, T2, tuft_tip]) - 0.06; hi = np.maximum.reduce([S, E, W, K + d * 0.07 * HS, T2, tuft_tip]) + 0.06
xs = np.arange(lo[0], hi[0], H); ys = np.arange(lo[1], hi[1], H); zs = np.arange(lo[2], hi[2], H)
X, Y, Z = np.meshgrid(xs, ys, zs, indexing='ij')
P = np.stack([X, Y, Z], -1)


def smin(a, b, k):
    h = np.clip(0.5 + 0.5 * (b - a) / k, 0, 1)
    return b * (1 - h) + a * h - k * h * (1 - h)


def capsule(a, b, ra, rb):
    ba = b - a; pa = P - a
    t = np.clip((pa @ ba) / (ba @ ba), 0, 1)
    return np.linalg.norm(pa - t[..., None] * ba, axis=-1) - (ra + (rb - ra) * t)


# palm: rounded slab (ellipsoid in the hand frame), slightly cupped toward the body
R3 = np.stack([d, w, n])               # rows: hand axes
q = (P - C) @ R3.T
pa, pw, pn = (0.025 * HS, 0.031 * HS, 0.016 * HS) if CARTOON else (0.033 * HS, 0.031 * HS, 0.027 * HS)   # flat cartoon palm / puffy ball mitten
palm = (np.sqrt((q[..., 0] / pa) ** 2 + (q[..., 1] / pw) ** 2 + ((q[..., 2] + 0.004 * HS * (q[..., 1] / pw) ** 2) / pn) ** 2) - 1) * pn
D = palm
for a, b, ra, rb, k in caps:
    D = smin(D, capsule(a, b, ra, rb), k)
side_t = nrm(np.cross(tuft_dir, n))
pts = []
for i in range(9):   # S-curved spine, curling over at the tip
    t = i / 8; pts.append(tuft_base + tuft_dir * 0.038 * HS * t + side_t * 0.006 * HS * math.sin(math.pi * 1.4 * t) - d * 0.006 * HS * t * t)
rad = [0.0135 * HS * (1 - t ** 1.5) ** 0.8 + 0.0022 * HS for t in [i / 8 for i in range(9)]]
if STYLE == 'flame':   # the wrist trails into a soft, rounded flame swirl (blunt round tip, lies along the arm)
    fb = W - n * 0.010 * HS; fd = nrm(-d * 0.75 + up * 0.55 - n * 0.25)
    sw = [fb + fd * 0.045 * HS * t + nrm(np.cross(fd, n)) * 0.010 * HS * math.sin(math.pi * 1.6 * t) for t in [i / 10 for i in range(11)]]
    rr = [0.020 * HS * (1 - 0.72 * t ** 1.2) for t in [i / 10 for i in range(11)]]
    for i in range(10): D = smin(D, capsule(sw[i], sw[i + 1], rr[i], rr[i + 1]), 0.012 * HS if i == 0 else 0.004 * HS)
elif STYLE == 'float':   # floating mitten: a little flame wisp at the open wrist, no arm
    fb = W + d * 0.004 * HS; fd = nrm(-d * 0.8 + up * 0.5)
    sw = [fb + fd * 0.030 * HS * t + nrm(np.cross(fd, n)) * 0.007 * HS * math.sin(math.pi * 1.6 * t) for t in [i / 8 for i in range(9)]]
    rr = [0.017 * HS * (1 - 0.75 * t ** 1.2) for t in [i / 8 for i in range(9)]]
    for i in range(8): D = smin(D, capsule(sw[i], sw[i + 1], rr[i], rr[i + 1]), 0.010 * HS if i == 0 else 0.004 * HS)
verts, faces, _, _ = marching_cubes(D.astype(np.float32), 0.0, spacing=(H, H, H))
verts += np.array([xs[0], ys[0], zs[0]])
with open(ROOT + f'/work/{OUTNAME}.ply', 'wb') as f:
    f.write(('ply\nformat binary_little_endian 1.0\nelement vertex %d\nproperty float x\nproperty float y\nproperty float z\n'
             'element face %d\nproperty list uchar int vertex_indices\nend_header\n' % (len(verts), len(faces))).encode())
    f.write(verts.astype('<f4').tobytes())
    fa = np.empty((len(faces),), dtype=[('n', 'u1'), ('i', '<i4', 3)]); fa['n'] = 3; fa['i'] = faces; f.write(fa.tobytes())


def mirror(b):
    m = dict(b); m['name'] = b['name'].replace('_L_', '_R_'); m['parent'] = b['parent'].replace('_L_', '_R_')
    m['head'] = [-b['head'][0], b['head'][1], b['head'][2]]; m['tail'] = [-b['tail'][0], b['tail'][1], b['tail'][2]]
    return m


# rotation axes for the hand clips (Blender coords; positive angle = curl toward the palm / raise the arm)
curl = nrm(np.cross(d, n)); tcurl = nrm(np.cross(td, C - T0)); armdir = nrm(W - S)
raise_side = nrm(np.cross(armdir, V(0, 0, 1))); raise_front = nrm(np.cross(armdir, V(0, -1, 0)))
axes = {'curl': curl, 'thumb_curl': tcurl, 'raise_side': raise_side, 'raise_front': raise_front, 'inward': V(0, 0, 1), 'twist': d}   # twist: roll the hand about its own length
def mir_axis(a): return [float(a[0]), float(-a[1]), float(-a[2])]   # mirror in X flips the sense of rotation axes (pseudo-vectors)
rig = {'bones': bones + [mirror(b) for b in bones],
       'axes': {'L': {k: [float(c) for c in v] for k, v in axes.items()}, 'R': {k: mir_axis(v) for k, v in axes.items()}},
       'palm_center': {'L': [float(c) for c in C], 'R': [float(-C[0]), float(C[1]), float(C[2])]}}
json.dump(rig, open(ROOT + '/data/arm-rig.json', 'w'), indent=1)
print('HAND_READY', len(verts), 'verts', len(rig['bones']), 'bones')
