"""Remove the side-profile face (eye, brow, smile line, blush) from the two side-view projection arts.
They are baked onto the left / right of the body, where those features showed up as dark spots.
python repair-side-art.py      (originals kept as *.orig.png; then re-bake)"""
import os, shutil
import numpy as np
from PIL import Image
from scipy import ndimage
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__))).replace('\\', '/')
T = ROOT + '/textures/'
src = open(ROOT + '/scripts/repair-art.py', encoding='utf-8').read()
ns = {'__file__': ROOT + '/scripts/repair-art.py'}; exec(src[:src.index('# ---------- front art')], ns)
inpaint = ns['inpaint']
# face area of each side view (pixels, 1024 art): eye + brow + smile + blush all lie inside this box
BOXES = {'side-left-art-v2.png': (60, 760, 400, 900), 'side-right-art-v2.png': (265, 965, 400, 900)}   # face + the stretched smile streak
for name, (x0, x1, y0, y1) in BOXES.items():
    if not os.path.exists(T + name.replace('.png', '.orig.png')): shutil.copy(T + name, T + name.replace('.png', '.orig.png'))
    a = np.asarray(Image.open(T + name.replace('.png', '.orig.png')).convert('RGB')).astype(np.float32)
    reg = a[y0:y1, x0:x1]
    dark = reg.sum(-1) < 360                                                  # eye outline, iris, brow, smile line
    white = (reg.min(-1) > 175) & ((reg.max(-1) - reg.min(-1)) < 95)            # eye white, highlights
    blush = (reg[..., 0] > 200) & (reg[..., 2] > 115) & (reg[..., 1] < 205)      # pink cheek
    m = np.zeros(a.shape[:2], bool); m[y0:y1, x0:x1] = dark | white | blush
    # keep only the face features (drop tiny specks in the flame art): components near the eye / mouth area
    lab, n = ndimage.label(ndimage.binary_dilation(m, iterations=3))
    sz = ndimage.sum(m, lab, range(1, n + 1))
    keep = np.isin(lab, 1 + np.where(sz > 40)[0])
    mask = ndimage.binary_dilation(keep, iterations=7)
    out = inpaint(a, mask, 16)
    Image.fromarray(np.clip(out, 0, 255).astype(np.uint8)).save(T + name)
    print(name, 'face removed, pixels', int(mask.sum()))
