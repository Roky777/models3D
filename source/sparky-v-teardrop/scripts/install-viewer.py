"""Install the freshly built model + viewer textures (last pipeline step).
python install-viewer.py
- Outputs/sparky-vnext.glb      -> viewer/assets/sparky.glb and model/<folder>.glb (raw GLB too)
- data/flame-tongues.json       -> viewer/data/
- viewer textures as WebP: the smile-free body bake (the viewer draws the smile), the skin bake (read under the
  eyelids), and the projection art used by the fire / face shader"""
import os, shutil
from PIL import Image
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__))).replace('\\', '/') + '/'
name = os.path.basename(ROOT.rstrip('/'))
shutil.copy(ROOT + 'Outputs/sparky-vnext.glb', ROOT + 'viewer/assets/sparky.glb')
shutil.copy(ROOT + 'Outputs/sparky-vnext.glb', ROOT + f'model/{name}.glb')
shutil.copy(ROOT + 'Outputs/sparky-vnext-raw.glb', ROOT + f'model/{name}-raw.glb')
shutil.copy(ROOT + 'data/flame-tongues.json', ROOT + 'viewer/data/flame-tongues.json')
for src, dst, q in [('v5-basecolor-nosmile', 'v5-basecolor-nosmile', 92), ('v5-basecolor-skin', 'v5-basecolor-skin', 92),
                    ('front-art-padded', 'front-art-padded', 90), ('front-art-nosmile', 'front-art-nosmile', 90), ('front-art-skin', 'front-art-skin', 90), ('front-art-flow', 'front-art-flow', 90), ('back-art-v2', 'back-art-v2', 90)]:
    im = Image.open(ROOT + f'textures/{src}.png').convert('RGB')
    if im.width > 2048:   # 4096 viewer bakes: -hd for desktop, 2048 copy for phones
        im.save(ROOT + f'viewer/textures/{dst}-hd.webp', 'WEBP', quality=q, method=6)
        im = im.resize((2048, 2048), Image.LANCZOS)
    im.save(ROOT + f'viewer/textures/{dst}.webp', 'WEBP', quality=q, method=6)
print('VIEWER_INSTALLED', name)
