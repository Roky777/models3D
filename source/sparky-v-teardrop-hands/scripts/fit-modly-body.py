import os as _os  # handoff: paths relative to this script
ROOT = _os.path.dirname(_os.path.dirname(_os.path.abspath(__file__))).replace('\\', '/')
EXT = _os.path.join(_os.path.dirname(ROOT), 'external').replace('\\', '/')
"""Fit the Modly (Hunyuan3D) teardrop mesh into the Sparky pipeline, in Blender.
blender -b --factory-startup --python fit-modly-body.py -- <modly.glb> <yaw_degrees> [--preview]
 1. import, join, apply transforms; turn by yaw so the face looks down -Y (pipeline convention, Z up)
 2. scale so the round lower body is as wide as the current ball (0.62) and sits on the same floor (z = -0.444),
    centred in X/Y -> painted face, eyelids, mouth, mittens and rig keep their places
 3. union with a smooth face ellipsoid (covers any eye / mouth relief the generator sculpted), voxel remesh into
    one clean closed surface, smooth
Out: work/sdf-body-raw.ply (input of finish-sdf-body.py), work/modly-fit.blend, data/modly-fit.json"""
import bpy, bmesh, sys, json, math
from mathutils import Vector, Matrix
R = ROOT + '/'
argv = sys.argv[sys.argv.index('--') + 1:]
src, yaw = argv[0], float(argv[1])
ZMIN, BALL_W = -0.444, 0.62
bpy.ops.wm.read_factory_settings(use_empty=True)
bpy.ops.import_scene.gltf(filepath=src)
meshes = [o for o in bpy.context.scene.objects if o.type == 'MESH']
bpy.ops.object.select_all(action='DESELECT')
for o in meshes: o.select_set(True)
bpy.context.view_layer.objects.active = meshes[0]
if len(meshes) > 1: bpy.ops.object.join()
o = bpy.context.view_layer.objects.active
o.parent = None
bpy.ops.object.transform_apply(location=True, rotation=True, scale=True)
o.data.transform(Matrix.Rotation(math.radians(yaw), 4, 'Z'))
pts = [v.co.copy() for v in o.data.vertices]
lo = Vector([min(p[i] for p in pts) for i in range(3)]); hi = Vector([max(p[i] for p in pts) for i in range(3)])
H = hi.z - lo.z
# width of the lower round body: widest X span in the band 15-45% of the height (below the side flame licks)
band = [p for p in pts if lo.z + 0.15 * H < p.z < lo.z + 0.45 * H]
bw = max(p.x for p in band) - min(p.x for p in band)
cx = (max(p.x for p in band) + min(p.x for p in band)) / 2
cy = (max(p.y for p in band) + min(p.y for p in band)) / 2
s = BALL_W / bw
o.data.transform(Matrix.Translation((-cx, -cy, -lo.z)))
o.data.transform(Matrix.Scale(s, 4))
o.data.transform(Matrix.Translation((0, 0, ZMIN)))
pts = [v.co.copy() for v in o.data.vertices]
lo2 = Vector([min(p[i] for p in pts) for i in range(3)]); hi2 = Vector([max(p[i] for p in pts) for i in range(3)])
rep = {'source': src, 'yaw': yaw, 'scale': s, 'raw_height': H, 'ball_width_raw': bw, 'bbox_min': list(lo2), 'bbox_max': list(hi2)}
# smooth face shell: same ellipsoid the face paint was registered on (front half of the old ball), slightly inset
bpy.ops.mesh.primitive_uv_sphere_add(segments=96, ring_count=64, radius=1.0, location=(0, -0.005, ZMIN + 0.30))
face = bpy.context.active_object
face.scale = (0.295, 0.335, 0.285)
bpy.ops.object.transform_apply(scale=True)
# keep only its front (face) half so the back/top shape stays the generator's
bm = bmesh.new(); bm.from_mesh(face.data)
bmesh.ops.delete(bm, geom=[v for v in bm.verts if v.co.y > -0.02 or v.co.z > ZMIN + 0.46], context='VERTS')
bmesh.ops.contextual_create(bm, geom=[e for e in bm.edges if e.is_boundary])
bm.to_mesh(face.data); bm.free()
bpy.ops.object.select_all(action='DESELECT'); o.select_set(True); face.select_set(True); bpy.context.view_layer.objects.active = o
bpy.ops.object.join()
o = bpy.context.view_layer.objects.active
# union + clean closed surface
o.data.remesh_voxel_size = 0.006 if '--preview' in argv else 0.0035
o.data.use_remesh_fix_poles = True
bpy.ops.object.voxel_remesh()
m = o.modifiers.new('cs', 'CORRECTIVE_SMOOTH'); m.iterations = 12; m.factor = 0.7; m.use_only_smooth = True
bpy.ops.object.modifier_apply(modifier='cs')
m = o.modifiers.new('sm', 'SMOOTH'); m.iterations = 4; m.factor = 0.5
bpy.ops.object.modifier_apply(modifier='sm')
o.name = 'Sparky_Teardrop_Body'
rep['faces'] = len(o.data.polygons)
bpy.ops.object.select_all(action='DESELECT'); o.select_set(True)
bpy.ops.wm.ply_export(filepath=R + 'work/sdf-body-raw.ply', export_selected_objects=True, export_normals=False, export_uv=False,
                      export_colors='NONE', forward_axis='Y', up_axis='Z')
bpy.ops.wm.save_as_mainfile(filepath=R + 'work/modly-fit.blend')
json.dump(rep, open(R + 'data/modly-fit.json', 'w'), indent=2, default=list)
print('MODLY_FIT', json.dumps(rep, default=list))
