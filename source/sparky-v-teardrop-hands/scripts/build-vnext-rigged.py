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

# ---- arms + hands. ARM_STYLE 'orig' (used): the approved rig's own brown arms + hands (the hand from the reference sheet),
# moved as one piece onto the teardrop body: lifted so the hands rest at the lower sides, shoulder tucked just inside the
# body surface. Bones and meshes move together (same rest shape, same weights); data/arm-rig.json is written from the result
# so swap-vnext.mjs / the emotion clips use these exact joints.  ARM_STYLE 'sculpted': hand-rig.py's sculpted arms.
ARM_STYLE = 'orig'
LIFT, INSET, ARM_SCALE = 0.060, 0.012, 0.74   # lift onto the teardrop's lower sides; 0.74 = slimmer, smaller arm + hand
if ARM_STYLE == 'orig':
    dg = bpy.context.evaluated_depsgraph_get()
    bvh = BVHTree.FromObject(new, dg); mw = new.matrix_world; mwi = mw.inverted()
    ARMB = ['UpperArm', 'Elbow', 'Hand', 'Index', 'Middle', 'Pinky', 'Thumb']
    deltas = {}; SH = {}
    for tag in ('L', 'R'):
        sgn = -1.0 if tag == 'L' else 1.0
        S0 = rig.matrix_world @ rig.data.bones['Sparky_%s_UpperArm' % tag].head_local
        z = S0.z + LIFT
        hit = bvh.ray_cast(mwi @ Vector((0.0, S0.y, z)), (mwi.to_3x3() @ Vector((sgn, 0, 0))).normalized())
        xs = (mw @ hit[0]).x if hit[0] is not None else S0.x
        deltas[tag] = Vector((xs - sgn * INSET, S0.y, z)) - S0; SH[tag] = S0 + deltas[tag]
    bpy.context.view_layer.objects.active = rig; bpy.ops.object.mode_set(mode='EDIT')
    rw = rig.matrix_world; rwi = rw.inverted()
    def mv(p, tag): return SH[tag] + (p + deltas[tag] - SH[tag]) * ARM_SCALE   # move, then scale about the new shoulder
    for tag in ('L', 'R'):
        for nm in ARMB:
            e = rig.data.edit_bones['Sparky_%s_%s' % (tag, nm)]
            e.head = rwi @ mv(rw @ e.head, tag); e.tail = rwi @ mv(rw @ e.tail, tag)
    bpy.ops.object.mode_set(mode='OBJECT')
    mittens = []
    for tag in ('L', 'R'):
        for on in ('Sparky_%s_ArmMesh' % tag, 'Sparky_%s_ShoulderCap' % tag):
            ob = sc.objects.get(on)
            if not ob: continue
            M = ob.matrix_world; Mi = M.inverted()
            for v in ob.data.vertices: v.co = Mi @ mv(M @ v.co, tag)
            # warm toasted-caramel brown (goes with the fire): lighter on the hand, deeper toward the shoulder; the viewer adds
            # soft cartoon shading, the orange firelight rim and the outline ('Sparky brown hand')
            pcen = mv(rig.matrix_world @ rig.data.bones['Sparky_%s_Hand' % tag].tail_local, tag) * 0.5 + mv(rig.matrix_world @ rig.data.bones['Sparky_%s_Hand' % tag].head_local, tag) * 0.5
            col = ob.data.color_attributes.new('FireColor', 'FLOAT_COLOR', 'POINT')
            span = max(1e-6, (SH[tag] - pcen).length)
            for v in ob.data.vertices:
                t = min(1.0, max(0.0, ((M @ v.co) - pcen).length / span))
                col.data[v.index].color = (0.431 - 0.169 * t, 0.117 - 0.063 * t, 0.025 - 0.012 * t, 1.0)   # sRGB (176,96,44) -> (140,66,30)
            mat = bpy.data.materials.new('Sparky brown hand'); mat.use_nodes = True
            bs = mat.node_tree.nodes['Principled BSDF']; vc = mat.node_tree.nodes.new('ShaderNodeVertexColor'); vc.layer_name = 'FireColor'
            mat.node_tree.links.new(vc.outputs['Color'], bs.inputs['Base Color']); bs.inputs['Roughness'].default_value = 0.55
            ob.data.materials.clear(); ob.data.materials.append(mat)
            mittens.append(ob)
    def W(n): return rig.matrix_world @ rig.data.bones[n].head_local
    def WT(n): return rig.matrix_world @ rig.data.bones[n].tail_local
    bones = []
    for tag in ('L', 'R'):
        for nm in ARMB:
            bn = 'Sparky_%s_%s' % (tag, nm); bb = rig.data.bones[bn]
            bones.append({'name': bn, 'parent': bb.parent.name, 'head': list(W(bn)), 'tail': list(WT(bn)), 'radius': 0.03})
    nrm = lambda v: v.normalized()
    S, Wr, K = W('Sparky_L_UpperArm'), W('Sparky_L_Hand'), WT('Sparky_L_Hand')
    d = nrm(K - Wr); n = nrm(Vector((1, 0, 0)) - d * d.dot(Vector((1, 0, 0)))); C = (Wr + K) / 2
    T0, T2 = W('Sparky_L_Thumb'), WT('Sparky_L_Thumb'); td = nrm(T2 - T0)
    armdir = nrm(Wr - S)
    ax = {'curl': nrm(d.cross(n)), 'thumb_curl': nrm(td.cross(C - T0)), 'raise_side': nrm(armdir.cross(Vector((0, 0, 1)))),
          'raise_front': nrm(armdir.cross(Vector((0, -1, 0)))), 'inward': Vector((0, 0, 1)), 'twist': d}
    mir = lambda a: [a[0], -a[1], -a[2]]
    ARM = {'bones': bones, 'axes': {'L': {k: list(v) for k, v in ax.items()}, 'R': {k: mir(list(v)) for k, v in ax.items()}},
           'palm_center': {'L': list(C), 'R': [-C[0], C[1], C[2]]}, 'style': 'orig', 'deltas': {k: list(v) for k, v in deltas.items()}}
    json.dump(ARM, open(V4 + 'data/arm-rig.json', 'w'), indent=1)
    print('ORIG_ARMS moved', {k: [round(c, 3) for c in v] for k, v in deltas.items()})
else:
    # ---- proper arms + hands (sculpted by hand-rig.py): arm bones moved onto the teardrop body, two-segment fingers and
    # thumb, smooth skin weights along shoulder -> elbow -> wrist -> knuckles -> finger joints (no rigid mittens)
    from mathutils import Matrix, Quaternion
    ARM = json.load(open(V4 + 'data/arm-rig.json'))
    bpy.context.view_layer.objects.active = rig; bpy.ops.object.mode_set(mode='EDIT')
    eb = rig.data.edit_bones; inv_r = rig.matrix_world.inverted()
    for bd in ARM['bones']:
        e = eb.get(bd['name']) or eb.new(bd['name'])
        e.head = inv_r @ Vector(bd['head']); e.tail = inv_r @ Vector(bd['tail'])
        e.parent = eb[bd['parent']]; e.use_connect = False; e.use_deform = True
    bpy.ops.object.mode_set(mode='OBJECT')
    mittens = []
    bpy.ops.object.select_all(action='DESELECT')
    bpy.ops.wm.ply_import(filepath=V4 + 'work/hand-L.ply', forward_axis='Y', up_axis='Z')
    srcL = bpy.context.selected_objects[0]
    # right arm = mirror of the CLEAN sculpt, made before the left one gets weights / modifiers / material
    srcR = srcL.copy(); srcR.data = srcL.data.copy(); sc.collection.objects.link(srcR)
    srcR.data.transform(Matrix.Scale(-1, 4, (1, 0, 0))); srcR.data.flip_normals()
    for tag in ('L', 'R'):
        oldarm = sc.objects.get('Sparky_%s_ArmMesh' % tag)
        mo = srcL if tag == 'L' else srcR
        assert len(mo.vertex_groups) == 0 and len(mo.modifiers) == 0
        mo.name = 'hand_' + tag
        bpy.context.view_layer.objects.active = mo
        m = mo.modifiers.new('d', 'DECIMATE'); m.ratio = min(1.0, 9000 / max(1, len(mo.data.polygons))); bpy.ops.object.modifier_apply(modifier='d')
        m = mo.modifiers.new('s', 'CORRECTIVE_SMOOTH'); m.iterations = 6; m.use_only_smooth = True; bpy.ops.object.modifier_apply(modifier='s')
        for f in mo.data.polygons: f.use_smooth = True
        # brown cartoon hands (like the emotion sheet): warm chocolate brown, a touch lighter on the hand than up the arm
        # (the viewer adds the orange firelight rim)
        segs = [(Vector(bd['head']), Vector(bd['tail']), bd['radius'], bd['name']) for bd in ARM['bones'] if ('_%s_' % tag) in bd['name']]
        pc = Vector(ARM['palm_center'][tag])
        col = mo.data.color_attributes.new('FireColor', 'FLOAT_COLOR', 'POINT')
        sh = Vector(next(bd['head'] for bd in ARM['bones'] if bd['name'] == 'Sparky_%s_UpperArm' % tag))
        for v in mo.data.vertices:
            t = min(1.0, (v.co - pc).length / max(1e-6, (sh - pc).length))
            col.data[v.index].color = (0.300 - 0.115 * t, 0.092 - 0.042 * t, 0.028 - 0.013 * t, 1.0)   # linear; sRGB ~ (149,85,47) hand -> (120,63,33) shoulder
        mat = bpy.data.materials.new('Sparky brown hand'); mat.use_nodes = True
        bs = mat.node_tree.nodes['Principled BSDF']; vc = mat.node_tree.nodes.new('ShaderNodeVertexColor'); vc.layer_name = 'FireColor'
        mat.node_tree.links.new(vc.outputs['Color'], bs.inputs['Base Color']); bs.inputs['Roughness'].default_value = 0.55
        mo.data.materials.clear(); mo.data.materials.append(mat)
        # smooth skin: inverse-distance to each bone's capsule, top 3, normalised
        groups = {nm: mo.vertex_groups.new(name=nm) for _, _, _, nm in segs}
        for v in mo.data.vertices:
            ws = []
            for a_, b_, r_, nm in segs:
                ab = b_ - a_; t = max(0.0, min(1.0, (v.co - a_).dot(ab) / ab.length_squared))
                dd = max(0.0, (v.co - (a_ + ab * t)).length - r_) + 0.0035
                ws.append((1.0 / dd ** 4, nm))
            ws.sort(reverse=True); ws = ws[:3]; tot = sum(w for w, _ in ws)
            for w, nm in ws:
                if w / tot > 0.01: groups[nm].add([v.index], w / tot, 'REPLACE')
        mo.parent = rig; am2 = mo.modifiers.new('Armature', 'ARMATURE'); am2.object = rig
        if oldarm: armname = oldarm.name; bpy.data.objects.remove(oldarm); mo.name = armname
        else: mo.name = 'Sparky_%s_ArmMesh' % tag
        mittens.append(mo)
# the body no longer follows the arm bones (old weights sat where the old long arms were): give them to Sparky_Body
armset = {bd['name'] for bd in ARM['bones']}
gb = new.vertex_groups.get('Sparky_Body') or new.vertex_groups.new(name='Sparky_Body')
idx = {g.index: g.name for g in new.vertex_groups}; moved = 0
for v in new.data.vertices:
    extra = 0.0
    for g in list(v.groups):
        if idx.get(g.group) in armset and g.weight > 0: extra += g.weight; g.weight = 0.0; moved += 1
    if extra > 0:
        cur = next((g.weight for g in v.groups if g.group == gb.index), 0.0); gb.add([v.index], min(1.0, cur + extra), 'REPLACE')
report['body_arm_weights_moved'] = moved
report['arm_bones'] = [bd['name'] for bd in ARM['bones']]
print('HANDS', [(m.name, len(m.data.vertices)) for m in mittens])

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
