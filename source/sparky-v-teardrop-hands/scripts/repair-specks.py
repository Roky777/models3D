"""Remove small dark specks from the body projection arts (they show up as dark spots on the back / sides).
python repair-specks.py       (originals kept as *.orig.png; re-bake + install-viewer afterwards)
A speck = a small (< 3000 px) group of dark pixels (brightest channel < 150) inside the art; filled from the
surrounding flame colours. Large dark areas (deliberate flame shading) are left alone."""
import os, shutil
import numpy as np
from PIL import Image
from scipy import ndimage
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__))).replace('\\', '/')
T = ROOT + '/textures/'
src = open(ROOT + '/scripts/repair-art.py', encoding='utf-8').read()
ns = {'__file__': ROOT + '/scripts/repair-art.py'}; exec(src[:src.index('# ---------- front art')], ns)
inpaint = ns['inpaint']
for name in ['back-art-v2.png', 'side-left-art-v2.png', 'side-right-art-v2.png', 'back-from-front-noface.png']:
    cur = T + name
    if not os.path.exists(cur.replace('.png', '.orig.png')): shutil.copy(cur, cur.replace('.png', '.orig.png'))
    a = np.asarray(Image.open(cur).convert('RGB')).astype(np.float32)
    inside = ndimage.binary_erosion(a.max(-1) > 40, iterations=6)
    dark = (a.max(-1) < 150) & inside
    lab, n = ndimage.label(dark)
    sz = ndimage.sum(dark, lab, range(1, n + 1)) if n else np.array([])
    specks = np.isin(lab, 1 + np.where((sz > 8) & (sz < 3000))[0])
    if specks.any():
        a = inpaint(a, ndimage.binary_dilation(specks, iterations=5), 10)
        Image.fromarray(np.clip(a, 0, 255).astype(np.uint8)).save(cur)
    print(name, 'specks removed:', int((sz > 8).sum() - ((sz >= 3000).sum())), 'groups')
