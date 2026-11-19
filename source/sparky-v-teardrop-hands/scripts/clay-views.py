"""Render front/quarter/side/back clay views of a mesh into one contact sheet.
blender -b --factory-startup --python clay-views.py -- <mesh.ply|glb> <out.png>"""
import bpy, sys, math
from mathutils import Vector
argv = sys.argv[sys.argv.index('--') + 1:]
src, out = argv[0], argv[1]
bpy.ops.wm.read_factory_settings(use_empty=True)
if src.lower().endswith('.ply'):
    bpy.ops.wm.ply_import(filepath=src, forward_axis='Y', up_axis='Z')
else:
    bpy.ops.import_scene.gltf(filepath=src)
s = bpy.context.scene
s.render.engine = 'BLENDER_WORKBENCH'
s.display.shading.light = 'STUDIO'; s.display.shading.color_type = 'SINGLE'
s.display.shading.single_color = (0.85, 0.85, 0.85); s.display.shading.show_cavity = True
s.display.shading.show_shadows = False
s.render.resolution_x = 600; s.render.resolution_y = 600; s.render.film_transparent = False
s.world = bpy.data.worlds.new('w'); s.world.color = (0.03, 0.04, 0.05)
for o in s.objects:
    if o.type == 'MESH':
        for p in o.data.polygons: p.use_smooth = True
cam = bpy.data.objects.new('cam', bpy.data.cameras.new('cam')); s.collection.objects.link(cam); s.camera = cam
cam.data.type = 'ORTHO'; cam.data.ortho_scale = 1.25
import os
tiles = []
for name, ang in [('front', 0), ('quarter', 45), ('side', 90), ('backq', 135), ('back', 180), ('backq2', 225)]:
    a = math.radians(ang)
    # front = looking from -Y toward +Y; quarter/side rotate toward +X
    cam.location = Vector((3 * math.sin(a), -3 * math.cos(a), 0.0))
    cam.rotation_euler = (math.radians(90), 0, a)
    p = out[:-4] + '-' + name + '.png'
    s.render.filepath = p; bpy.ops.render.render(write_still=True); tiles.append(p)
# contact sheet
imgs = [bpy.data.images.load(p) for p in tiles]
W = 600; sheet = bpy.data.images.new('sheet', W * len(tiles), W)
px = [0.0] * (W * len(tiles) * W * 4)
for i, im in enumerate(imgs):
    src_px = list(im.pixels)
    for y in range(W):
        row = src_px[y * W * 4:(y + 1) * W * 4]
        start = (y * W * len(tiles) + i * W) * 4
        px[start:start + W * 4] = row
sheet.pixels = px; sheet.filepath_raw = out; sheet.file_format = 'PNG'; sheet.save()
for p in tiles: os.remove(p)
print('CLAY_DONE', out)
