"""Automatic dark-spot check on the QA renders (work/qa/*.jpg from capture-qa.cjs).
python qa-spots.py <qa folder> <out sheet.jpg>
On the body (warm, bright pixels), any patch 12-35% darker than its local surroundings (25-3000 px) is circled red.
Very dark pixels (eyes, brows, mouth, lash: real features) are not counted. Prints the count per view."""
import sys, glob, os
import numpy as np
from PIL import Image, ImageDraw
from scipy import ndimage
qa, out = sys.argv[1], sys.argv[2]
fs = sorted(glob.glob(os.path.join(qa, 'az*.jpg')))
tiles, total = [], 0
for f in fs:
    im = Image.open(f).convert('RGB'); a = np.asarray(im).astype(float) / 255
    L = a @ np.array([.3, .59, .11])
    warm = (a[..., 0] > .45) & (a[..., 0] - a[..., 2] > .25) & (L > .32)            # fire body (not the dark background / floor)
    body = ndimage.binary_erosion(warm, iterations=6)
    med = ndimage.median_filter(np.where(warm, L, np.nan_to_num(L)), size=41)
    ratio = L / np.maximum(med, 1e-3)
    cand = body & (ratio < .88) & (ratio > .55) & (L > .30)
    cand = ndimage.binary_opening(cand, iterations=1)
    lab, n = ndimage.label(cand); sz = ndimage.sum(cand, lab, range(1, n + 1)) if n else np.array([])
    keep = [i + 1 for i in range(n) if 25 <= sz[i] <= 3000]
    d = ImageDraw.Draw(im)
    for k in keep:
        ys, xs = np.where(lab == k); d.ellipse([xs.min() - 12, ys.min() - 12, xs.max() + 12, ys.max() + 12], outline=(255, 0, 0), width=3)
    total += len(keep)
    print(os.path.basename(f), 'spots:', len(keep))
    W, H = im.size; tiles.append(im.crop((int(W * .18), int(H * .05), int(W * .82), int(H * .95))).resize((300, 380)))
s = Image.new('RGB', (300 * 12, 380 * ((len(tiles) + 11) // 12)))
for i, t in enumerate(tiles): s.paste(t, ((i % 12) * 300, (i // 12) * 380))
s.save(out, quality=90)
print('TOTAL_SPOTS', total)
