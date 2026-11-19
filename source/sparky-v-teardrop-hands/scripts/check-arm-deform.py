"""Rig check in Blender: play clips on the final GLB and measure how far the arm meshes stretch.
blender -b --factory-startup --python check-arm-deform.py -- <file.glb>
For each clip: frame in the middle, evaluated bounding-box size of each arm mesh + the joint each stray vertex follows."""
import bpy, sys, json
from mathutils import Vector
src = sys.argv[sys.argv.index('--') + 1]
bpy.ops.wm.read_factory_settings(use_empty=True)
bpy.ops.import_scene.gltf(filepath=src)
sc = bpy.context.scene
rig = next(o for o in sc.objects if o.type == 'ARMATURE')
arms = [o for o in sc.objects if o.type == 'MESH' and 'ArmMesh' in o.name]
out = {}
for clip in ['Idle_Blink', 'Emotion_Happy', 'Emotion_Excited', 'Emotion_Shy', 'Emotion_Sad', 'Emotion_Surprised', 'Hands_Wave', 'Hank_IslandActions_Celebrate1']:
    act = bpy.data.actions.get(clip) or next((a for a in bpy.data.actions if a.name.startswith(clip)), None)
    if not act: out[clip] = 'missing'; continue
    rig.animation_data_create(); rig.animation_data.action = act
    f = int((act.frame_range[0] + act.frame_range[1]) / 2); sc.frame_set(f)
    dg = bpy.context.evaluated_depsgraph_get(); res = {}
    for o in arms:
        ev = o.evaluated_get(dg); me = ev.to_mesh()
        ps = [o.matrix_world @ v.co for v in me.vertices]
        lo = Vector([min(p[i] for p in ps) for i in range(3)]); hi = Vector([max(p[i] for p in ps) for i in range(3)])
        res[o.name] = [round(hi[i] - lo[i], 3) for i in range(3)]
        ev.to_mesh_clear()
    out[clip] = res
# which joints do the arm vertices use?
o = arms[0]; used = {}
for v in o.data.vertices:
    for g in v.groups:
        if g.weight > 0.05: used[o.vertex_groups[g.group].name] = used.get(o.vertex_groups[g.group].name, 0) + 1
out['groups_' + o.name] = used
print('ARM_CHECK', json.dumps(out))
