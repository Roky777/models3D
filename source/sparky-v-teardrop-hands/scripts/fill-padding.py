"""Fill the black padding around every projection art with the nearest flame colour (edge colours extended outward,
then softened). Projections and the viewer's fire paint sample near the image edges low on the body sides; black there
showed up as dark olive smudges. python fill-padding.py   (run before baking; idempotent)"""
import os
import numpy as np
from PIL import Image
from scipy import ndimage
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__))).replace('\\', '/')
T = ROOT + '/textures/'
ARTS = ['back-art-v2.png', 'side-left-art-v2.png', 'side-right-art-v2.png', 'back-from-front-noface.png',
        'front-art-padded.png', 'front-art-nosmile.png', 'front-art-skin.png', 'front-art-flow.png']
for name in ARTS:
    if not os.path.exists(T + name): continue
    a = np.asarray(Image.open(T + name).convert('RGB')).astype(np.float32)
    pad = a.max(-1) < 40
    pad = ndimage.binary_dilation(pad, iterations=2)                  # include the dark anti-aliased rim of the padding
    if not pad.any(): print(name, 'no padding'); continue
    idx = ndimage.distance_transform_edt(pad, return_distances=False, return_indices=True)
    ext = a[idx[0], idx[1]]                                           # nearest real colour, pulled outward
    soft = np.stack([ndimage.gaussian_filter(ext[..., c], 6) for c in range(3)], -1)
    out = np.where(pad[..., None], soft, a)
    Image.fromarray(np.clip(out, 0, 255).astype(np.uint8)).save(T + name)
    print(name, 'padding filled: %.1f%%' % (100 * pad.mean()))
