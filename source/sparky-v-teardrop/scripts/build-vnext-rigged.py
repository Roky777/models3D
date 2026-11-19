import os as _os  # handoff: paths relative to this script
ROOT = _os.path.dirname(_os.path.dirname(_os.path.abspath(__file__))).replace('\\', '/')
EXT = _os.path.join(_os.path.dirname(ROOT), 'external').replace('\\', '/')
"""Sparky v5: put the new textured body on the approved rig; refit eyelids + mouth to the new face; new flame-wave morphs.
blender -b --factory-startup --python build-v5-rigged.py
In : sparky-fireball-v2/Outputs/sparky-fireball-rounded-raw.glb (approved rig, face parts, hands, sparks, 16 clips)
     work/v5-textured.glb (new body, UV + baked texture)
Out: work/v5-rigged-scene.glb (armature + body + eyelids + mouth parts), source/sparky-v5-rigged.blend, data/v5-rig.json
"""
import bpy, bmesh, math, json
from mathutils import Vector
from mathutils.bvhtree import BVHTree
V2 = EXT + '/approved-rig/'
V4 = ROOT + '/'
bake = json.load(open(V4 + 'data/v5-bake.json'))
NEW_EYES = [Vector((e[0], 0, e[2])) for e in bake['mesh_eyes']]
NEW_MOUTH = Vector((-0.0124, 0, -0.2084)); NEW_MOUTH_W = 0.125


def smooth(a, b, x):
    t = max(0.0, min(1.0, (x - a) / (b - a))); return t * t * (3 - 2 * t)


bpy.ops.wm.read_factory_settings(use_empty=True)
bpy.ops.import_scene.gltf(filepath=V2 + 'Outputs/sparky-fireball-rounded-raw.glb')
sc = bpy.context.scene
rig = next(o for o in sc.objects if o.type == 'ARMATURE')
old = next(o for o in sc.objects if o.type == 'MESH' and o.name.startswith('geometry_0'))
rig.data.pose_position = 'REST'
before = set(sc.objects)
bpy.ops.import_scene.gltf(filepath=V4 + 'work/v5-textured.glb')
new = next(o for o in sc.objects if o not in before and o.type == 'MESH')
new.name = 'Sparky_Body_V5'
bpy.context.view_layer.update()


def bounds(objs):
    pts = [o.matrix_world @ v.co for o in objs for v in o.data.vertices]
    return Vector([min(p[i] for p in pts) for i in range(3)]), Vector([max(p[i] for p in pts) for i in range(3)])


def bvh(o):
    me = o.data; me.calc_loop_triangles()
    return BVHTree.FromPolygons([o.matrix_world @ v.co for v in me.vertices], [list(t.vertices) for t in me.loop_triangles], all_triangles=True)


old_t, new_t = bvh(old), bvh(new)


def front_y(tree, x, z):
    hit = tree.ray_cast(Vector((x, -3, z)), Vector((0, 1, 0)))[0]
    return hit.y if hit else 0.0


# ---- refit eyelids per eye
report = {}
for side, tag in ((0, 'L'), (1, 'R')):
    parts = [o for o in sc.objects if o.type == 'MESH' and o.name.startswith('Eyelid_' + tag)]
    mn, mx = bounds(parts)
    c_old = Vector(((mn.x + mx.x) / 2, 0, (mn.z + mx.z) / 2))
    c_new = NEW_EYES[side]
    s = (NEW_EYES[1].x - NEW_EYES[0].x) / 0.2515 * 1.25     # spacing ratio, enlarged so a blink covers the painted eye
    dy = front_y(new_t, c_new.x, c_new.z) - front_y(old_t, c_old.x, c_old.z) - 0.008
    for o in parts:
        inv = o.matrix_world.inverted()
        blocks = (list(o.data.shape_keys.key_blocks) if o.data.shape_keys else []) + [None]
        for kb in blocks:
            data = kb.data if kb else o.data.vertices
            for d in data:
                w = o.matrix_world @ d.co
                w2 = Vector((c_new.x + (w.x - c_old.x) * s, w.y + dy, c_new.z + (w.z - c_old.z) * s))
                d.co = inv @ w2
        if not o.data.shape_keys:
            pass
        o.data.update()
    report['eye_' + tag] = {'old': list(c_old), 'new': list(c_new), 'scale': s, 'dy': dy}

# ---- refit mouth parts
mparts = [o for o in sc.objects if o.type == 'MESH' and o.name.startswith('Mouth_')]
mn, mx = bounds([o for o in mparts if o.name == 'Mouth_Interior'])
c_old = Vector(((mn.x + mx.x) / 2, 0, (mn.z + mx.z) / 2)); ms = NEW_MOUTH_W / (mx.x - mn.x)
dy = front_y(new_t, NEW_MOUTH.x, NEW_MOUTH.z) - front_y(old_t, c_old.x, c_old.z)
for o in mparts:
    inv = o.matrix_world.inverted()
    for kb in (o.data.shape_keys.key_blocks if o.data.shape_keys else []):
        for d in kb.data:
            w = o.matrix_world @ d.co
            d.co = inv @ Vector((NEW_MOUTH.x + (w.x - c_old.x) * ms, w.y + dy, NEW_MOUTH.z + (w.z - c_old.z) * ms))
    for v in o.data.vertices:
        w = o.matrix_world @ v.co
        v.co = inv @ Vector((NEW_MOUTH.x + (w.x - c_old.x) * ms, w.y + dy, NEW_MOUTH.z + (w.z - c_old.z) * ms))
    o.data.update()
report['mouth'] = {'old': list(c_old), 'scale': ms, 'dy': dy}

# ---- skin weights: transfer from a face-aligned copy of the approved body
src = old.copy(); src.data = old.data.copy(); sc.collection.objects.link(src)
src.shape_key_clear() if src.data.shape_keys else None
for m in list(src.modifiers): src.modifiers.remove(m)
c_oldf = Vector(((-0.1545 + 0.0965) / 2, 0, -0.137)); c_newf = (NEW_EYES[0] + NEW_EYES[1]) / 2; s = (NEW_EYES[1].x - NEW_EYES[0].x) / 0.2515
for v in src.data.vertices:
    w = src.matrix_world @ v.co
    face = 1 - smooth(0.25, 0.40, (Vector((w.x, 0, w.z)) - c_oldf).length)
    tgt = Vector((c_newf.x + (w.x - c_oldf.x) * s, w.y, c_newf.z + (w.z - c_oldf.z) * s))
    v.co = src.matrix_world.inverted() @ w.lerp(tgt, face)
src.data.update()
new.parent = None
for g in old.vertex_groups: new.vertex_groups.new(name=g.name)
dt = new.modifiers.new('dt', 'DATA_TRANSFER'); dt.object = src
dt.use_vert_data = True; dt.data_types_verts = {'VGROUP_WEIGHTS'}; dt.vert_mapping = 'POLYINTERP_NEAREST'
dt.layers_vgroup_select_src = 'ALL'; dt.layers_vgroup_select_dst = 'NAME'
bpy.context.view_layer.objects.active = new; bpy.ops.object.modifier_apply(modifier='dt')
bpy.data.objects.remove(src)
# brows must not drag the top of the eye (the surprised brow-raise folded the skin over the eye): brow weights fade out
# between the top of the eye and the brows; the removed weight goes to the body
_eyez = (NEW_EYES[0].z + NEW_EYES[1].z) / 2
_brow = {g.index for g in new.vertex_groups if 'Brow' in g.name}
_body = new.vertex_groups.get('Sparky_Body') or new.vertex_groups.new(name='Sparky_Body')
_trim = 0
for v in new.data.vertices:
    k = smooth(_eyez + 0.065, _eyez + 0.092, (new.matrix_world @ v.co).z)
    if k >= 1: continue
    mv_ = 0.0
    for g in v.groups:
        if g.group in _brow and g.weight > 0: mv_ += g.weight * (1 - k); g.weight *= k
    if mv_ > 0:
        _trim += 1; cur = next((g.weight for g in v.groups if g.group == _body.index), 0.0); _body.add([v.index], min(1.0, cur + mv_), 'REPLACE')
print('BROW_TRIM', _trim)

# ---- flame-wave morphs: the approved crown's HeatWave motion copied onto the new crown (nearest approved points)
from mathutils.kdtree import KDTree
okeys = old.data.shape_keys.key_blocks
obase = [v.co.copy() for v in okeys['Basis'].data]
kd = KDTree(len(obase))
for i2, p2 in enumerate(obase): kd.insert(old.matrix_world @ p2, i2)
kd.balance()
pts = [v.co.copy() for v in new.data.vertices]
new.shape_key_add(name='Basis')
names = ['HeatWave_Sin', 'HeatWave_Sin_Opposite', 'HeatWave_Cos', 'HeatWave_Cos_Opposite']
near = [kd.find_n(new.matrix_world @ p, 4) for p in pts]
GAIN = 0.35   # the modelled tongues now have their own bones; keep only a light heat shimmer
for nm in names:
    k = new.shape_key_add(name=nm); src = okeys[nm].data
    for vi, p in enumerate(pts):
        acc = Vector(); ws = 0.0
        for co, idx, dist in near[vi]:
            w = 1.0 / (dist + 1e-4); acc += (src[idx].co - obase[idx]) * w; ws += w
        k.data[vi].co = p + acc / ws * GAIN

# ---- cute fire mittens replace the long brown arms (rigid on each hand bone, so every gesture still drives them)
from mathutils import Matrix, Quaternion
mittens = []
for tag in ('L', 'R'):
    arm = sc.objects.get('Sparky_%s_ArmMesh' % tag)
    bone = rig.data.bones['Sparky_%s_Hand' % tag]
    head = rig.matrix_world @ bone.head_local; tail = rig.matrix_world @ bone.tail_local
    axis = (tail - head).normalized()
    side = Vector((1 if tag == 'L' else -1, 0, 0)) if False else Vector((-1 if head.x < 0 else 1, 0, 0))
    q = Vector((0, 0, 1)).rotation_difference(axis)
    bmm = bmesh.new()
    def blob(center, radii, segs=40):
        res = bmesh.ops.create_uvsphere(bmm, u_segments=segs, v_segments=segs // 2, radius=1.0)
        for v in res['verts']:
            c = Vector((v.co.x * radii[0], v.co.y * radii[1], v.co.z * radii[2]))
            v.co = center + (q @ c)
    base = Vector((math.copysign(0.262, head.x), -0.075, -0.215))                  # resting on the lower side of the round ball (visible like the reference)
    blob(base, (0.062, 0.050, 0.070))                                                # mitten
    blob(base + Vector((0, -0.040, 0.020)) + side * -0.038, (0.026, 0.024, 0.032), 24)   # thumb toward the front/body
    me = bpy.data.meshes.new('mitten_' + tag); bmm.to_mesh(me); bmm.free()
    mo = bpy.data.objects.new('mitten_' + tag, me); sc.collection.objects.link(mo)
    m = mo.modifiers.new('v', 'REMESH'); m.mode = 'VOXEL'; m.voxel_size = 0.004; bpy.context.view_layer.objects.active = mo; bpy.ops.object.modifier_apply(modifier='v')
    m = mo.modifiers.new('s', 'CORRECTIVE_SMOOTH'); m.iterations = 10; m.use_only_smooth = True; bpy.ops.object.modifier_apply(modifier='s')
    for f in mo.data.polygons: f.use_smooth = True
    cen = base
    col = mo.data.color_attributes.new('FireColor', 'FLOAT_COLOR', 'POINT')
    for v in mo.data.vertices:
        d = min(1.0, (v.co - cen).length / 0.075)
        a = (1.0, 0.38 - 0.30 * d, 0.03 - 0.025 * d, 1.0); col.data[v.index].color = a
    mat = bpy.data.materials.new('Sparky fire mitten'); mat.use_nodes = True
    bs = mat.node_tree.nodes['Principled BSDF']; vc = mat.node_tree.nodes.new('ShaderNodeVertexColor'); vc.layer_name = 'FireColor'
    mat.node_tree.links.new(vc.outputs['Color'], bs.inputs['Base Color']); mat.node_tree.links.new(vc.outputs['Color'], bs.inputs['Emission Color'])
    bs.inputs['Emission Strength'].default_value = 0.45; bs.inputs['Roughness'].default_value = 0.6
    mo.data.materials.append(mat)
    for g in rig.data.bones: mo.vertex_groups.new(name=g.name) if g.use_deform else None
    vg = mo.vertex_groups.get('Sparky_%s_Hand' % tag) or mo.vertex_groups.new(name='Sparky_%s_Hand' % tag)
    vg.add([v.index for v in mo.data.vertices], 1.0, 'REPLACE')
    mo.parent = rig; am2 = mo.modifiers.new('Armature', 'ARMATURE'); am2.object = rig
    if arm: armname = arm.name; bpy.data.objects.remove(arm); mo.name = armname
    else: mo.name = 'Sparky_%s_ArmMesh' % tag
    mittens.append(mo)
print('MITTENS', [m.name for m in mittens])

# ---- face rig points: jaw, mouth corners, upper lip, cheeks, nose (snout) -> more facial expression
# each bone sits just under the face surface, points out of the face, and owns a soft round patch of skin
MX, MZ = NEW_MOUTH.x, NEW_MOUTH.z
FACE_BONES = [  # name, (x, z) on the face, radius, depth under surface
    ('Sparky_Jaw',          (MX, MZ - 0.040), 0.060),
    ('Sparky_L_MouthCorner', (MX - 0.062, MZ + 0.004), 0.034),
    ('Sparky_R_MouthCorner', (MX + 0.062, MZ + 0.004), 0.034),
    ('Sparky_UpperLip',     (MX, MZ + 0.022), 0.030),
    ('Sparky_L_Cheek',      (-0.168, -0.212), 0.046),
    ('Sparky_R_Cheek',      (0.124, -0.212), 0.046),
    ('Sparky_Nose',         (MX, MZ + 0.045), 0.040),
]
bpy.context.view_layer.objects.active = rig; bpy.ops.object.mode_set(mode='EDIT')
eb = rig.data.edit_bones; inv = rig.matrix_world.inverted(); centres = {}
for nm, (x, z), r in FACE_BONES:
    fy = front_y(new_t, x, z); c = Vector((x, fy, z)); centres[nm] = (c, r)
    b = eb.new(nm); b.head = inv @ (c + Vector((0, 0.02, 0))); b.tail = inv @ (c + Vector((0, -0.02, 0)))
    b.parent = eb['Sparky_Body']; b.use_deform = True
bpy.ops.object.mode_set(mode='OBJECT')
groups = {nm: new.vertex_groups.new(name=nm) for nm, _, _ in FACE_BONES}
mw = new.matrix_world; face_stats = {}
for v in new.data.vertices:
    p = mw @ v.co
    if p.y > 0.0: continue
    ws = {}
    for nm, (c, r) in centres.items():
        d = (p - c).length
        if d < r * 1.8: ws[nm] = math.exp(-(d / r) ** 2 * 1.6)
    tot = sum(ws.values())
    if tot < 1e-3: continue
    if tot > 0.92: ws = {k: w * 0.92 / tot for k, w in ws.items()}; tot = 0.92
    for g in v.groups:
        if g.group < len(new.vertex_groups) and new.vertex_groups[g.group].name not in groups: g.weight *= (1 - tot)
    for k, w in ws.items(): groups[k].add([v.index], w, 'REPLACE'); face_stats[k] = face_stats.get(k, 0) + 1
report['face_bones'] = face_stats
print('FACE_BONES', face_stats)

# ---- flame tongue rig: two bones per modelled flame tongue (root -> mid, mid -> tip), parented to the crown follow bone
TONG = json.load(open(V4 + 'data/flame-tongues.json'))
def sp_at(sp, s):
    f = s * (len(sp) - 1); i = min(int(f), len(sp) - 2); t = f - i
    return Vector(sp[i]).lerp(Vector(sp[i + 1]), t)
crown_parent = 'Sparky_Crown_Follow' if 'Sparky_Crown_Follow' in rig.data.bones else 'Sparky_Body'
bpy.context.view_layer.objects.active = rig; bpy.ops.object.mode_set(mode='EDIT')
eb = rig.data.edit_bones; inv = rig.matrix_world.inverted()
for t in TONG:
    sp = t['spine']
    a = eb.new('Sparky_Flame_%s_A' % t['name']); a.head = inv @ sp_at(sp, 0.22); a.tail = inv @ sp_at(sp, 0.60); a.parent = eb[crown_parent]; a.use_deform = True
    b = eb.new('Sparky_Flame_%s_B' % t['name']); b.head = inv @ sp_at(sp, 0.60); b.tail = inv @ sp_at(sp, 1.0); b.parent = a; b.use_deform = True
bpy.ops.object.mode_set(mode='OBJECT')
fgA = {t['name']: new.vertex_groups.new(name='Sparky_Flame_%s_A' % t['name']) for t in TONG}
fgB = {t['name']: new.vertex_groups.new(name='Sparky_Flame_%s_B' % t['name']) for t in TONG}
flame_groups = set(g.name for g in list(fgA.values()) + list(fgB.values()))
samples = []
for t in TONG:
    for k in range(41):   # ribbons are ~1.2x wider across than the old round tongues
        s_ = k / 40; samples.append((t['name'], s_, sp_at(t['spine'], s_), 1.2 * max(0.005, t['r0'] * (1 - s_ ** 1.35) ** 0.85)))
    for lk in t.get('licks', []):   # side licks ride on their parent tongue (root bone low down, tip bone toward their tip)
        for k in range(21):
            s_ = k / 20; samples.append((t['name'], lk['t'] + (0.9 - lk['t']) * s_, sp_at(lk['spine'], s_), 1.2 * max(0.004, lk['r0'] * (1 - s_ ** 1.35) ** 0.85)))
from mathutils.kdtree import KDTree as _KD
kdf = _KD(len(samples))
for i_, (_, _, p_, _) in enumerate(samples): kdf.insert(p_, i_)
kdf.balance()
fstat = {}
for v in new.data.vertices:
    p = mw @ v.co
    if p.z < -0.08: continue
    best = 0.0; bn = None; bs = 0.0
    for co, i_, d in kdf.find_n(p, 6):
        nm, s_, _, rad = samples[i_]
        w = smooth(0.18, 0.42, s_) * (1 - smooth(rad + 0.008, rad * 1.5 + 0.025, d))
        if w > best: best, bn, bs = w, nm, s_
    if best < 0.02: continue
    wb = best * smooth(0.50, 0.75, bs); wa = best - wb
    for g in v.groups:
        if new.vertex_groups[g.group].name not in flame_groups: g.weight *= (1 - best)
    if wa > 0.005: fgA[bn].add([v.index], wa, 'REPLACE')
    if wb > 0.005: fgB[bn].add([v.index], wb, 'REPLACE')
    fstat[bn] = fstat.get(bn, 0) + 1
report['flame_bones'] = fstat
print('FLAME_BONES', fstat)

# ---- bind to rig, replace old body
new.parent = rig
am = new.modifiers.new('Armature', 'ARMATURE'); am.object = rig
oldname = old.name; bpy.data.objects.remove(old); new.name = oldname
rig.data.pose_position = 'POSE'
keep = [new, rig] + mittens + [o for o in sc.objects if o.type == 'MESH' and (o.name.startswith('Eyelid_') or o.name.startswith('Mouth_'))]
bpy.ops.object.select_all(action='DESELECT')
for o in keep: o.select_set(True)
bpy.ops.export_scene.gltf(filepath=V4 + 'work/v5-rigged-scene.glb', export_format='GLB', use_selection=True, export_animations=False,
                          export_skins=True, export_morph=True, export_yup=True, export_apply=False)
bpy.ops.wm.save_as_mainfile(filepath=V4 + 'source/sparky-v5-rigged.blend')
json.dump(report, open(V4 + 'data/v5-rig.json', 'w'), indent=2, default=list)
print('V5_RIGGED', json.dumps(report, default=list)[:600])
