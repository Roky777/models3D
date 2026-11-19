"""Repair the projection art (finishing pass). Originals are kept as *.orig.png.
python repair-art.py
front-art-padded.png
  - left eye: its lower half was damaged (blocky pink pixels, missing lower rim) -> rebuilt from the clean right eye
    (same design, same gaze), blended in with a soft elliptical mask
  - white tear-drop smudges under both eyes -> filled from the surrounding skin (normalised-convolution inpainting)
back-from-front-noface.png (baked onto the back)
  - ghost marks of the painted-out brows / eyes -> smoothed out of the ball area
Then re-run the bake (bake-vnext-texture.py) and refresh viewer/textures (WebP)."""
import os, shutil
import numpy as np
from PIL import Image
from scipy import ndimage
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__))).replace('\\', '/')
T = ROOT + '/textures/'


def backup(name):
    if not os.path.exists(T + name.replace('.png', '.orig.png')): shutil.copy(T + name, T + name.replace('.png', '.orig.png'))
    return np.asarray(Image.open(T + name.replace('.png', '.orig.png')).convert('RGB')).astype(np.float32)


def soft_ellipse(shape, cx, cy, rx, ry, feather):
    yy, xx = np.mgrid[0:shape[0], 0:shape[1]]
    d = np.sqrt(((xx - cx) / rx) ** 2 + ((yy - cy) / ry) ** 2)
    return np.clip((1 + feather - d) / feather, 0, 1)


def inpaint(img, mask, sigma):
    """smooth fill of masked pixels from their surroundings: wide normalised-convolution start, then a harmonic
    (Laplace) relaxation so the hole takes on the surrounding colours evenly, however large it is"""
    out = img.copy(); m = mask.astype(bool)
    ys, xs = np.where(m); y0, y1 = max(0, ys.min() - 60), ys.max() + 61; x0, x1 = max(0, xs.min() - 60), xs.max() + 61
    sub = out[y0:y1, x0:x1].astype(np.float64); mm = m[y0:y1, x0:x1]
    known = (~mm).astype(np.float64)
    for s in (80, 40, 20):   # start: wide weighted blur, refined
        w = ndimage.gaussian_filter(known, s)
        f = np.stack([ndimage.gaussian_filter(sub[..., c] * known, s) for c in range(3)], -1) / np.maximum(w, 1e-12)[..., None]
        sub[mm] = f[mm]
    for _ in range(600):     # harmonic relaxation inside the hole
        avg = (np.roll(sub, 1, 0) + np.roll(sub, -1, 0) + np.roll(sub, 1, 1) + np.roll(sub, -1, 1)) / 4
        sub[mm] = avg[mm]
    # keep a touch of the art's fine grain so the patch is not plastic-smooth
    out[y0:y1, x0:x1] = sub.astype(np.float32)
    return out


# ---------- front art
a = backup('front-art-padded.png'); H, W, _ = a.shape
# eyes from the dark outline + iris components (measured): left x 320-505 y 716-883 (damaged bottom), right x 642-821 y 715-888
RC = (731.5, 801.0); LC = (412.5, 802.0); DX, DY = LC[0] - RC[0], LC[1] - RC[1]
src = ndimage.shift(a, (DY, DX, 0), order=1, mode='nearest')            # right eye moved onto the left eye
m_eye = soft_ellipse(a.shape[:2], LC[0], LC[1], 104, 101, 0.16)[..., None]
a = a * (1 - m_eye) + src * m_eye
# tear smudges: inside the under-eye areas, refill every pixel that is too white / pink / bluish for the yellow skin;
# each eye is protected by its exact shape (convex hull of its dark outline + iris)
from skimage.morphology import convex_hull_image
yy, xx = np.mgrid[0:H, 0:W]
eyes = np.zeros(a.shape[:2], bool)
for (x0, x1, y0, y1) in [(300, 525, 700, 905), (625, 840, 700, 905)]:
    dark = a[y0:y1, x0:x1].sum(-1) < 200
    lab, n = ndimage.label(dark); sz = ndimage.sum(dark, lab, range(1, n + 1))
    eyes[y0:y1, x0:x1] = convex_hull_image(lab == 1 + int(np.argmax(sz)))
eyes = ndimage.binary_dilation(eyes, iterations=2)
mask = np.zeros(a.shape[:2], bool)
for (x0, x1, y0, y1) in [(285, 520, 820, 990), (705, 870, 820, 970)]:
    reg = a[y0:y1, x0:x1]
    off = (reg[..., 2] > 105) | ((reg[..., 0] - reg[..., 1]) < 30) & (reg[..., 2] > 80)   # not the yellow-orange skin
    mask[y0:y1, x0:x1] = off
mask = ndimage.binary_dilation(mask, iterations=6) & ~eyes
a = inpaint(a, mask, 16)
Image.fromarray(np.clip(a, 0, 255).astype(np.uint8)).save(T + 'front-art-padded.png')
print('front art repaired: eye rebuilt, smudge pixels filled', int(mask.sum()))

# ---------- back art (mirror of the front with the face painted out): remove the ghost brows / eyes
b = backup('back-from-front-noface.png'); Hb, Wb, _ = b.shape
# the face area of the ball (same registration as the front art): smooth it, keep the ball's broad shading
face = soft_ellipse(b.shape[:2], 590, 800, 300, 230, 0.35)
smooth = np.stack([ndimage.gaussian_filter(b[..., c], 26) for c in range(3)], -1)
b = b * (1 - face[..., None]) + smooth * face[..., None]
Image.fromarray(np.clip(b, 0, 255).astype(np.uint8)).save(T + 'back-from-front-noface.png')
print('back art: ghost face marks smoothed')
