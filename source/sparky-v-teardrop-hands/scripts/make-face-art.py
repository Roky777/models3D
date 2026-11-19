"""Face art for the bakes and the viewer (run after repair-art.py / repair-side-art.py, then re-bake).
python make-face-art.py [--no-gaze]   (--no-gaze: keep the eyes exactly as painted; used)
1. gaze: both irises (with pupil + highlights) moved to the centre of their eyes -> he looks straight at you
   (front-art-padded.png; the version before this step is kept as front-art-padded.pregaze.png)
2. front-art-nosmile.png : painted smile removed (viewer body bake; the viewer draws the smile)
3. front-art-skin.png    : eyes + smile removed (skin bake read under the eyelids)
4. front-art-flow.png    : eyes, brows + smile removed (the viewer's rising fire paint samples it -> no ghost eyes
                           drifting up into the forehead)"""
import os, shutil
import numpy as np
from PIL import Image
from scipy import ndimage
from skimage.morphology import convex_hull_image
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__))).replace('\\', '/')
T = ROOT + '/textures/'
src = open(ROOT + '/scripts/repair-art.py', encoding='utf-8').read()
ns = {'__file__': ROOT + '/scripts/repair-art.py'}; exec(src[:src.index('# ---------- front art')], ns)
inpaint = ns['inpaint']
if not os.path.exists(T + 'front-art-padded.pregaze.png'): shutil.copy(T + 'front-art-padded.png', T + 'front-art-padded.pregaze.png')
a = np.asarray(Image.open(T + 'front-art-padded.pregaze.png').convert('RGB')).astype(np.float32)
import sys
NOGAZE = '--no-gaze' in sys.argv; A0 = a.copy()
H, W, _ = a.shape
yy, xx = np.mgrid[0:H, 0:W]
EYES = {'L': (300, 525, 700, 905), 'R': (625, 840, 700, 905)}
IRIS = {'L': (384.0, 818.0, 62.0, 73.0), 'R': (702.0, 818.0, 62.0, 73.0)}   # iris ellipse (centre x, y, rx, ry), measured
hulls = {}; ovals = {}
for k, (x0, x1, y0, y1) in EYES.items():
    dark = a[y0:y1, x0:x1].sum(-1) < 200
    lab, n = ndimage.label(dark); sz = ndimage.sum(dark, lab, range(1, n + 1))
    h = np.zeros(a.shape[:2], bool); h[y0:y1, x0:x1] = convex_hull_image(lab == 1 + int(np.argmax(sz)))
    comp = np.zeros(a.shape[:2], bool); comp[y0:y1, x0:x1] = lab == 1 + int(np.argmax(sz))
    ey, ex = np.where(comp)                                    # eye = upright oval spanning the dark outline
    xc, yc = (ex.min() + ex.max()) / 2, (ey.min() + ey.max()) / 2
    ea, eb = (ex.max() - ex.min()) / 2, (ey.max() - ey.min()) / 2
    hulls[k] = ((xx - xc) / ea) ** 2 + ((yy - yc) / eb) ** 2 <= 1.0
    ovals[k] = (xc, yc, ea, eb)
    print(k, 'eye oval', round(float(xc), 1), round(float(yc), 1), round(float(ea), 1), round(float(eb), 1))

# ---- 1. gaze to the centre
g = a.copy()
for k in ('L', 'R'):
    hull = hulls[k]; inner = ndimage.binary_erosion(hull, iterations=5)
    hy, hx = np.where(hull); ecx, ecy = hx.mean(), hy.mean()
    cx, cy, rx, ry = IRIS[k]; dx = ecx - cx; dy = (ecy - cy) * .8      # centre it (and lift it clear of the lower rim)
    d0 = np.sqrt(((xx - cx) / (rx + 3)) ** 2 + ((yy - cy) / (ry + 3)) ** 2)
    old_iris = (d0 <= 1.0) & inner
    # eye white per row (keeps the soft shadow under the upper lid)
    sclera = inner & (a.min(-1) > 200) & ~old_iris
    rows = {}
    for y in range(int(hy.min()), int(hy.max()) + 1):
        px = a[y][sclera[y]]
        if len(px) > 3: rows[y] = np.median(px, 0)
    keys = np.array(sorted(rows))
    for y, x in zip(*np.where(old_iris)):
        g[y, x] = rows[keys[np.argmin(abs(keys - y))]]
    near = ndimage.binary_dilation(hull, iterations=30) & ~ndimage.binary_dilation(hull, iterations=1)
    glow = near & (g.min(-1) > 150) & ((g.max(-1) - g.min(-1)) < 120)
    glow |= ndimage.binary_dilation(hull, iterations=16) & ~ndimage.binary_dilation(hull, iterations=1) & (g.sum(-1) < 430)   # old iris left outside the oval
    if glow.any(): g = inpaint(g, ndimage.binary_dilation(glow, iterations=4) & ~hull, 12)
    # the iris piece, moved; soft edge, kept inside the eye outline
    shifted = ndimage.shift(a, (dy, dx, 0), order=1, mode='nearest')
    d1 = np.sqrt(((xx - (cx + dx)) / rx) ** 2 + ((yy - (cy + dy)) / ry) ** 2)
    oxc, oyc, oa, ob = ovals[k]
    dist = (1 - np.sqrt(((xx - oxc) / oa) ** 2 + ((yy - oyc) / ob) ** 2)) * min(oa, ob)   # smooth distance inside the oval
    m = np.clip((1.03 - d1) / 0.05, 0, 1) * np.clip((dist - 4.5) / 1.5, 0, 1)
    g = g * (1 - m[..., None]) + shifted * m[..., None]
    # redraw the eye's dark outline all the way round (the iris used to stand in for it on one side)
    ringc = np.median(a[(dist > .5) & (dist < 3) & (a.sum(-1) < 200)], 0)
    ra = np.clip((5.8 - dist) / 1.4, 0, 1) * np.clip(dist + .8, 0, 1)   # anti-aliased on both sides
    g = g * (1 - ra[..., None]) + ringc * ra[..., None]
    print(k, 'iris moved by', round(float(dx), 1), round(float(dy), 1), 'px, outline redrawn')
if NOGAZE: g = A0; print('gaze kept as painted (--no-gaze)')
Image.fromarray(np.clip(g, 0, 255).astype(np.uint8)).save(T + 'front-art-padded.png')
a = g

# ---- helpers for the derived arts
def smile_mask(img):
    box = (460, 690, 900, 990); m = np.zeros(img.shape[:2], bool)
    dk = img[box[2]:box[3], box[0]:box[1]].sum(-1) < 430; m[box[2]:box[3], box[0]:box[1]] = dk
    lab, n = ndimage.label(m); sz = ndimage.sum(m, lab, range(1, n + 1))
    return ndimage.binary_dilation(lab == 1 + int(np.argmax(sz)), iterations=9)

def brow_mask(img):
    band = np.zeros(img.shape[:2], bool); band[600:705, 300:850] = (img.sum(-1) < 330)[600:705, 300:850]
    lab, n = ndimage.label(band); sz = ndimage.sum(band, lab, range(1, n + 1))
    return np.isin(lab, 1 + np.argsort(sz)[::-1][:2])

sm = smile_mask(a)
nosmile = inpaint(a, sm, 16)
Image.fromarray(np.clip(nosmile, 0, 255).astype(np.uint8)).save(T + 'front-art-nosmile.png')
brows = brow_mask(a); keep = ndimage.binary_dilation(brows, iterations=4)
eyes = ndimage.binary_dilation(hulls['L'] | hulls['R'], iterations=32) & ~keep
skin = inpaint(nosmile, eyes, 16)
Image.fromarray(np.clip(skin, 0, 255).astype(np.uint8)).save(T + 'front-art-skin.png')
# only the brows still need painting out (eyes + smile are already gone in the skin art); keep the flame detail sharp
# (an earlier version blurred the whole face area here, which showed as a blurry forehead)
bm = ndimage.binary_dilation(brows, iterations=20) | ndimage.binary_dilation(hulls['L'] | hulls['R'], iterations=44)
flow = inpaint(skin, bm, 16)
fe = np.clip(ndimage.gaussian_filter(bm.astype(np.float32), 6) * 1.5, 0, 1)[..., None]
flow = skin * (1 - fe) + flow * fe
Image.fromarray(np.clip(flow, 0, 255).astype(np.uint8)).save(T + 'front-art-flow.png')
print('FACE_ART_READY')
