import os as _os  # handoff: paths relative to this script
ROOT = _os.path.dirname(_os.path.dirname(_os.path.abspath(__file__))).replace('\\', '/')
EXT = _os.path.join(_os.path.dirname(ROOT), 'external').replace('\\', '/')
"""Finish the SDF body in Blender: outward normals, light polish, decimate, export the pipeline body.
blender -b --factory-startup --python finish-sdf-body.py
In : work/sdf-body-raw.ply   Out: work/v5-body.ply, data/v5-body.json"""
import bpy, bmesh, json
OUT = ROOT + '/'
bpy.ops.wm.read_factory_settings(use_empty=True)
bpy.ops.wm.ply_import(filepath=OUT + 'work/sdf-body-raw.ply', forward_axis='Y', up_axis='Z')
o = bpy.context.selected_objects[0]; bpy.context.view_layer.objects.active = o
bm = bmesh.new(); bm.from_mesh(o.data)
bmesh.ops.remove_doubles(bm, verts=bm.verts, dist=1e-6)
bmesh.ops.recalc_face_normals(bm, faces=bm.faces)
bm.to_mesh(o.data); bm.free()
m = o.modifiers.new('cs', 'CORRECTIVE_SMOOTH'); m.iterations = 3; m.use_only_smooth = True; bpy.ops.object.modifier_apply(modifier='cs')
m = o.modifiers.new('d', 'DECIMATE'); m.ratio = min(1.0, 170000 / len(o.data.polygons)); bpy.ops.object.modifier_apply(modifier='d')
for f in o.data.polygons: f.use_smooth = True
bpy.ops.wm.ply_export(filepath=OUT + 'work/v5-body.ply', export_selected_objects=True, export_normals=False, export_uv=False, export_colors='NONE', forward_axis='Y', up_axis='Z')
pts = [v.co for v in o.data.vertices]
json.dump({'verts': len(pts), 'min': [min(p[k] for p in pts) for k in range(3)], 'max': [max(p[k] for p in pts) for k in range(3)]}, open(OUT + 'data/v5-body.json', 'w'), indent=2)
print('V5_BODY_READY', len(pts))
