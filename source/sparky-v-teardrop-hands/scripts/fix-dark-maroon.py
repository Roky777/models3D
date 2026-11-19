"""Lift the deep maroon areas at the bottom corners of the front art to the normal flame red.
The viewer's rising fire paint samples ~8.5 cm below each point, so low on the body sides it read these corners and
mixed near-black maroon into the yellow-orange -> dark olive smudges. python fix-dark-maroon.py  (then re-bake)
The face (eyes, brows, smile are brown on purpose) is excluded."""
import os
import numpy as np
from PIL import Image
from scipy import ndimage
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__))).replace('\\', '/')
T = ROOT + '/textures/'
for name in ['front-art-padded.png', 'front-art-nosmile.png', 'front-art-skin.png', 'front-art-flow.png', 'back-from-front-noface.png']:
    if not os.path.exists(T + name): continue
    a = np.asarray(Image.open(T + name).convert('RGB')).astype(np.float32); H, W, _ = a.shape
    yy, xx = np.mgrid[0:H, 0:W]
    face = np.sqrt(((xx - 565) / 340.) ** 2 + ((yy - 815) / 260.) ** 2) < 1.0
    deep = (a[..., 0] < 205) & (a[..., 1] < 45) & ~face                    # near-black maroon (not the bright flame red)
    deep = ndimage.binary_opening(deep, iterations=1)
    if not deep.any(): print(name, 'clean'); continue
    m = ndimage.binary_dilation(deep, iterations=3)
    idx = ndimage.distance_transform_edt(m, return_distances=False, return_indices=True)
    ext = a[idx[0], idx[1]]                                                  # nearest normal flame colour
    soft = np.stack([ndimage.gaussian_filter(ext[..., c], 8) for c in range(3)], -1)
    w = np.clip(ndimage.gaussian_filter(m.astype(np.float32), 3), 0, 1)[..., None]
    out = a * (1 - w) + soft * w
    Image.fromarray(np.clip(out, 0, 255).astype(np.uint8)).save(T + name)
    print(name, 'deep maroon lifted: %.2f%%' % (100 * deep.mean()))
