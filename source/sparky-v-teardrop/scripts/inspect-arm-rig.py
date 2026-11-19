"""Inspect the arm / hand part of the rig and the mittens (Blender).
blender -b --factory-startup --python inspect-arm-rig.py -- <rigged.blend>"""
import bpy, sys, json
src = sys.argv[sys.argv.index('--') + 1]
bpy.ops.wm.open_mainfile(filepath=src)
rig = next(o for o in bpy.data.objects if o.type == 'ARMATURE')
mw = rig.matrix_world
out = {'bones': [], 'meshes': []}
for b in rig.data.bones:
    n = b.name
    if any(k in n for k in ('Arm', 'Hand', 'Shoulder', 'Elbow', 'Wrist', 'Finger', 'Thumb', 'Clav', 'Forearm', 'Palm')) or n in ('Sparky_Body', 'Sparky_Root'):
        out['bones'].append({'name': n, 'parent': b.parent.name if b.parent else None, 'head': [round(c, 4) for c in mw @ b.head_local],
                             'tail': [round(c, 4) for c in mw @ b.tail_local], 'deform': b.use_deform})
for o in bpy.data.objects:
    if o.type == 'MESH':
        vg = [g.name for g in o.vertex_groups][:12]
        out['meshes'].append({'name': o.name, 'verts': len(o.data.vertices), 'groups': vg, 'parent': o.parent.name if o.parent else None})
print('ARM_RIG', json.dumps(out))
print('ALL_BONES', len(rig.data.bones), [b.name for b in rig.data.bones])
