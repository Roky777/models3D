import os as _os  # handoff: paths relative to this script
ROOT = _os.path.dirname(_os.path.dirname(_os.path.abspath(__file__))).replace('\\', '/')
EXT = _os.path.join(_os.path.dirname(ROOT), 'external').replace('\\', '/')
"""VIEWER VARIANT of bake-vnext-texture.py: same bake, front art with eyes + smile painted out -> textures/v5-basecolor-skin.png
(read by the body material wherever an eyelid covers the eye, so the lid is real, identically lit skin).
(The viewer draws the closed smile itself, so mouth shapes never need to cover a baked line.)
Bake Sparky v5 colour texture by projecting the reference art (front art on the front, back view on the back).
blender -b --factory-startup --python bake-v5-texture.py
In : work/v5-body.ply, textures/front-art-padded.png (1199x1312), textures/back-art-padded.png (1024)
Out: work/v5-textured.blend, textures/v5-basecolor.png, work/v5-textured.glb, data/v5-bake.json
"""
import bpy, bmesh, json
from mathutils import Vector
V4 = ROOT + '/'
FRONT_EYES_PX = None  # computed below from the art
bpy.ops.wm.read_factory_settings(use_empty=True)
bpy.ops.wm.ply_import(filepath=V4 + 'work/v5-body.ply', forward_axis='Y', up_axis='Z')
o = bpy.context.selected_objects[0]; o.name = 'Sparky_Body_V5'
bpy.context.view_layer.objects.active = o
m = o.modifiers.new('d', 'DECIMATE'); m.ratio = 90000 / len(o.data.polygons); bpy.ops.object.modifier_apply(modifier='d')
for f in o.data.polygons: f.use_smooth = True

# --- registration: front by eye centres, back by silhouette bbox
front_img = bpy.data.images.load(V4 + 'textures/front-art-skin.png')   # viewer variant: eyes + smile painted out (skin under the eyelids)
orig = bpy.data.images.load(EXT + '/face-registration/sparky-sculpted-fire-front-v1.png')
W, H = orig.size; px = orig.pixels[:]
def white(x, y):
    i = ((H - 1 - y) * W + x) * 4
    return px[i + 3] > 0.8 and px[i] > 0.88 and px[i + 1] > 0.88 and px[i + 2] > 0.84
eyes = []
for side in (0, 1):
    xs = range(200, W // 2) if side == 0 else range(W // 2, 1000)
    pts = [(x, y) for y in range(500, 1000, 2) for x in xs if white(x, y)]
    x0, x1 = min(p[0] for p in pts), max(p[0] for p in pts); y0, y1 = min(p[1] for p in pts), max(p[1] for p in pts)
    eyes.append(((x0 + x1) / 2, (y0 + y1) / 2))
verts = [v.co.copy() for v in o.data.vertices]
mesh_eyes = []
for side in (-1, 1):
    cand = [p for p in verts if 0.05 < p.x * side < 0.20 and -0.17 < p.z < -0.02 and p.y < 0]
    apex = min(cand, key=lambda p: p.y)
    near = [p for p in cand if p.y < apex.y + 0.008 and (p - apex).length < 0.06]
    mesh_eyes.append(Vector((sum(p.x for p in near) / len(near), 0, sum(p.z for p in near) / len(near))))
# eye centres measured on the unbulged Hunyuan sculpt (the face bulge changes depth only, not x/z)
mesh_eyes = [Vector((-0.12501, 0, -0.13044)), Vector((0.10059, 0, -0.13081))]
k = (eyes[1][0] - eyes[0][0]) / (mesh_eyes[1].x - mesh_eyes[0].x)          # px per metre
ecx = (eyes[0][0] + eyes[1][0]) / 2; ecy = (eyes[0][1] + eyes[1][1]) / 2
mcx = (mesh_eyes[0].x + mesh_eyes[1].x) / 2; mcz = (mesh_eyes[0].z + mesh_eyes[1].z) / 2
# u = (ecx + (x - mcx) * k) / W ; v = 1 - (ecy - (z - mcz) * k) / H
fu_a = k / W; fu_b = (ecx - mcx * k) / W
fv_a = k / H; fv_b = 1 - (ecy + mcz * k) / H
xmin = min(p.x for p in verts); xmax = max(p.x for p in verts); zmin = min(p.z for p in verts); zmax = max(p.z for p in verts)
BB = (130, 100, 872, 946); BW = 1024   # back mask bbox in back-art pixels
# back view is seen from behind: image left = +X
bu_a = -(BB[2] - BB[0]) / (xmax - xmin) / BW; bu_b = (BB[0] + xmax * (BB[2] - BB[0]) / (xmax - xmin)) / BW
bv_a = (BB[3] - BB[1]) / (zmax - zmin) / BW; bv_b = 1 - (BB[1] + zmax * (BB[3] - BB[1]) / (zmax - zmin)) / BW
back_img = bpy.data.images.load(V4 + 'textures/back-from-front-noface.png')   # back = mirror of the front (same fireball), face painted out
side_img = bpy.data.images.load(V4 + 'textures/side-art-padded.png')
ymin = min(p.y for p in verts); ymax = max(p.y for p in verts)
SB = (179, 56, 719, 812); SW = 1024    # side mask bbox in side-art pixels (face toward image-left = -Y)
su_a = (SB[2] - SB[0]) / (ymax - ymin) / SW; su_b = (SB[0] - ymin * (SB[2] - SB[0]) / (ymax - ymin)) / SW
sv_a = (SB[3] - SB[1]) / (zmax - zmin) / SW; sv_b = 1 - (SB[1] + zmax * (SB[3] - SB[1]) / (zmax - zmin)) / SW

# --- UVs
bpy.ops.object.mode_set(mode='EDIT'); bpy.ops.mesh.select_all(action='SELECT')
bpy.ops.uv.smart_project(angle_limit=1.15, island_margin=0.004); bpy.ops.object.mode_set(mode='OBJECT')

# --- projection material (emission) for baking
mat = bpy.data.materials.new('v5_projection'); mat.use_nodes = True; nt = mat.node_tree; N = nt.nodes; L = nt.links
for n in list(N): N.remove(n)
out = N.new('ShaderNodeOutputMaterial'); em = N.new('ShaderNodeEmission'); L.new(em.outputs[0], out.inputs[0])
tc = N.new('ShaderNodeTexCoord'); sep = N.new('ShaderNodeSeparateXYZ'); L.new(tc.outputs['Object'], sep.inputs[0])
def lin(src, a, b):
    m1 = N.new('ShaderNodeMath'); m1.operation = 'MULTIPLY_ADD'; L.new(src, m1.inputs[0]); m1.inputs[1].default_value = a; m1.inputs[2].default_value = b; return m1.outputs[0]
def proj(img, ua, ub, va, vb):
    c = N.new('ShaderNodeCombineXYZ'); L.new(lin(sep.outputs['X'], ua, ub), c.inputs['X']); L.new(lin(sep.outputs['Z'], va, vb), c.inputs['Y'])
    t = N.new('ShaderNodeTexImage'); t.image = img; t.extension = 'EXTEND'; t.interpolation = 'Cubic'; L.new(c.outputs[0], t.inputs[0]); return t.outputs['Color']
fcol = proj(front_img, fu_a, fu_b, fv_a, fv_b); bcol = proj(back_img, fu_a, fu_b, fv_a, fv_b)   # mirrored geometry: back point (x,+y,z) takes the front colour at (x,-y,z)
# side view: u from depth (y), v from height
cs = N.new('ShaderNodeCombineXYZ'); L.new(lin(sep.outputs['Y'], su_a, su_b), cs.inputs['X']); L.new(lin(sep.outputs['Z'], sv_a, sv_b), cs.inputs['Y'])
# sides: the user's LEFT SIDE view (seen from +X, face on image-left) and RIGHT SIDE view (seen from -X, face on image-right)
def side_proj(path, bb, mirror):
    img = bpy.data.images.load(V4 + 'textures/' + path)
    if not mirror: ua = (bb[2] - bb[0]) / (ymax - ymin) / 1024; ub = (bb[0] - ymin * (bb[2] - bb[0]) / (ymax - ymin)) / 1024
    else: ua = -(bb[2] - bb[0]) / (ymax - ymin) / 1024; ub = (bb[0] + ymax * (bb[2] - bb[0]) / (ymax - ymin)) / 1024
    va = (bb[3] - bb[1]) / (zmax - zmin) / 1024; vb = 1 - (bb[1] + zmax * (bb[3] - bb[1]) / (zmax - zmin)) / 1024
    c = N.new('ShaderNodeCombineXYZ'); L.new(lin(sep.outputs['Y'], ua, ub), c.inputs['X']); L.new(lin(sep.outputs['Z'], va, vb), c.inputs['Y'])
    t = N.new('ShaderNodeTexImage'); t.image = img; t.extension = 'EXTEND'; t.interpolation = 'Cubic'; L.new(c.outputs[0], t.inputs[0]); return t.outputs['Color']
spos = side_proj('side-left-art-v2.png', (296, 102, 968, 946), False)
sneg = side_proj('side-right-art-v2.png', (42, 102, 718, 938), True)
gx_ = N.new('ShaderNodeNewGeometry'); sx_ = N.new('ShaderNodeSeparateXYZ'); L.new(gx_.outputs['Normal'], sx_.inputs[0])
sideMix = N.new('ShaderNodeMix'); sideMix.data_type = 'RGBA'
mrx = N.new('ShaderNodeMapRange'); L.new(sx_.outputs['X'], mrx.inputs['Value']); mrx.inputs['From Min'].default_value = -0.05; mrx.inputs['From Max'].default_value = 0.05
L.new(mrx.outputs[0], sideMix.inputs['Factor']); L.new(sneg, sideMix.inputs[6]); L.new(spos, sideMix.inputs[7])
scol = sideMix.outputs[2]
# triplanar weights from the surface normal: front (-Y), back (+Y), sides (|X|); face zone stays front
geo = N.new('ShaderNodeNewGeometry'); sn = N.new('ShaderNodeSeparateXYZ'); L.new(geo.outputs['Normal'], sn.inputs[0])
def op(kind, a, b=None, val=None):
    m = N.new('ShaderNodeMath'); m.operation = kind; L.new(a, m.inputs[0])
    if b is not None: L.new(b, m.inputs[1])
    elif val is not None: m.inputs[1].default_value = val
    return m.outputs[0]
wf = op('POWER', op('MAXIMUM', op('MULTIPLY', sn.outputs['Y'], val=-1.0), val=0.0), val=1.6)
wb = op('POWER', op('MAXIMUM', sn.outputs['Y'], val=0.0), val=1.6)
fz = N.new('ShaderNodeMapRange'); L.new(sep.outputs['Y'], fz.inputs['Value']); fz.inputs['From Min'].default_value = -0.02; fz.inputs['From Max'].default_value = -0.14; fz.interpolation_type = 'SMOOTHSTEP'
front_zone = op('MULTIPLY', fz.outputs[0], val=0.85)
ws = op('MULTIPLY', op('POWER', op('ABSOLUTE', sn.outputs['X']), val=4.0), op('SUBTRACT', N.new('ShaderNodeValue').outputs[0], front_zone))
N[-1].outputs[0].default_value = 1.0 if False else 1.0
vsum = op('ADD', op('ADD', wf, wb), op('ADD', ws, val=0.0001))
def sc_(col, w):
    v = N.new('ShaderNodeVectorMath'); v.operation = 'SCALE'; L.new(col, v.inputs[0]); L.new(w, v.inputs['Scale']); return v.outputs[0]
def vadd(a, b):
    v = N.new('ShaderNodeVectorMath'); v.operation = 'ADD'; L.new(a, v.inputs[0]); L.new(b, v.inputs[1]); return v.outputs[0]
tot = vadd(vadd(sc_(fcol, wf), sc_(bcol, wb)), sc_(scol, ws))
inv = op('DIVIDE', N.new('ShaderNodeValue').outputs[0], vsum)
L.new(sc_(tot, inv), em.inputs['Color'])
for n in N:
    if n.bl_idname == 'ShaderNodeValue': n.outputs[0].default_value = 1.0
bake = N.new('ShaderNodeTexImage'); bimg = bpy.data.images.new('v5-basecolor', 4096, 4096); bake.image = bimg; N.active = bake   # viewer bake: 4096 for a sharp face on desktop
o.data.materials.clear(); o.data.materials.append(mat)

sc = bpy.context.scene; sc.render.engine = 'CYCLES'; sc.cycles.samples = 4
try:
    prefs = bpy.context.preferences.addons['cycles'].preferences; prefs.compute_device_type = 'CUDA'; prefs.get_devices()
    for d in prefs.devices: d.use = True
    sc.cycles.device = 'GPU'
except Exception as e: print('GPU fallback', e)
sc.render.bake.margin = 12
bpy.ops.object.select_all(action='DESELECT'); o.select_set(True)
bpy.ops.object.bake(type='EMIT')
bimg.filepath_raw = V4 + 'textures/v5-basecolor-skin.png'; bimg.file_format = 'PNG'; bimg.save()
print('V5_BAKED_SKIN')
