"""Close-up studio render of a .ply part (quick look at the hand sculpt), in Blender.
blender -b --factory-startup --python render-part.py -- <part.ply> <out-prefix> [ortho_scale]
Writes <out-prefix>-side.png, -front.png, -back.png (warm clay colour, cavity shading)."""
import bpy, math, sys
from mathutils import Vector
argv = sys.argv[sys.argv.index('--') + 1:]
src, out = argv[0], argv[1]; scale = float(argv[2]) if len(argv) > 2 else 0.2
bpy.ops.wm.read_factory_settings(use_empty=True)
bpy.ops.wm.ply_import(filepath=src, forward_axis='Y', up_axis='Z')
o = bpy.context.selected_objects[0]
for p in o.data.polygons: p.use_smooth = True
s = bpy.context.scene; s.render.engine = 'BLENDER_WORKBENCH'; s.display.shading.light = 'STUDIO'; s.display.shading.color_type = 'SINGLE'
s.display.shading.single_color = (1.0, 0.62, 0.25); s.display.shading.show_cavity = True
s.render.resolution_x = s.render.resolution_y = 700; s.world = bpy.data.worlds.new('w'); s.world.color = (0.02, 0.02, 0.03)
c = bpy.data.objects.new('c', bpy.data.cameras.new('c')); s.collection.objects.link(c); s.camera = c; c.data.type = 'ORTHO'; c.data.ortho_scale = scale
cen = sum((o.matrix_world @ v.co for v in o.data.vertices), Vector()) / len(o.data.vertices)
for nm, ang in [('side', -90), ('front', 0), ('back', 180)]:
    a = math.radians(ang); c.location = cen + Vector((3 * math.sin(a), -3 * math.cos(a), 0)); c.rotation_euler = (math.radians(90), 0, a)
    s.render.filepath = f'{out}-{nm}.png'; bpy.ops.render.render(write_still=True)
print('PART_RENDER_DONE')
