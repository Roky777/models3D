import os as _os  # handoff: paths relative to this script
ROOT = _os.path.dirname(_os.path.dirname(_os.path.abspath(__file__))).replace('\\', '/')
EXT = _os.path.join(_os.path.dirname(ROOT), 'external').replace('\\', '/')
"""Blender check: is there a crack in the mesh or the baked texture itself (independent of the viewer shader)?
blender -b --factory-startup --python blender-crack-check.py
Reports holes / non-manifold edges on the body and renders the textured crown close up (Eevee, emission only)."""
import bpy, bmesh, math, json
from mathutils import Vector
R = ROOT + '/'
bpy.ops.wm.read_factory_settings(use_empty=True)
bpy.ops.import_scene.gltf(filepath=R + 'work/v5-textured.glb')
o = next(x for x in bpy.context.scene.objects if x.type == 'MESH')
bm = bmesh.new(); bm.from_mesh(o.data)
boundary = [e for e in bm.edges if e.is_boundary]; nonman = [e for e in bm.edges if not e.is_manifold]
rep = {'verts': len(bm.verts), 'faces': len(bm.faces), 'boundary_edges': len(boundary), 'non_manifold_edges': len(nonman)}
bm.free()
# UV seams on the crown: how many UV islands touch the crown area (bake seams can show as thin lines)
me = o.data; uv = me.uv_layers.active.data
seam_edges = 0
from collections import defaultdict
loops_by_edge = defaultdict(list)
for poly in me.polygons:
    for li in poly.loop_indices:
        l = me.loops[li]; loops_by_edge[l.edge_index].append(li)
crown = 0
for ei, lis in loops_by_edge.items():
    e = me.edges[ei]
    if (o.matrix_world @ me.vertices[e.vertices[0]].co).z < 0.05: continue
    crown += 1
    if len(lis) == 2:
        a = [tuple(round(c, 5) for c in uv[li].uv) for li in lis]
        # the two loops of an edge store uv for different vertices; compare sets of both ends
        l0, l1 = me.loops[lis[0]], me.loops[lis[1]]
        pts0 = {l0.vertex_index: uv[lis[0]].uv.copy()}; pts1 = {l1.vertex_index: uv[lis[1]].uv.copy()}
        v = l0.vertex_index
        if v in pts1 and (pts0[v] - pts1[v]).length > 1e-4: seam_edges += 1
rep['crown_edges'] = crown; rep['crown_uv_seam_edges_sampled'] = seam_edges
# close-up render of the baked texture on the crown, unlit
sc = bpy.context.scene; sc.render.engine = 'BLENDER_EEVEE_NEXT'
sc.render.resolution_x = sc.render.resolution_y = 900
sc.world = bpy.data.worlds.new('w'); sc.world.color = (0.02, 0.03, 0.05)
for m in o.data.materials:
    nt = m.node_tree; bs = nt.nodes.get('Principled BSDF'); tex = next(n for n in nt.nodes if n.type == 'TEX_IMAGE')
    em = nt.nodes.new('ShaderNodeEmission'); nt.links.new(tex.outputs['Color'], em.inputs['Color'])
    nt.links.new(em.outputs[0], nt.nodes['Material Output'].inputs['Surface'])
cam = bpy.data.objects.new('cam', bpy.data.cameras.new('cam')); sc.collection.objects.link(cam); sc.camera = cam
cam.data.type = 'ORTHO'; cam.data.ortho_scale = 0.62
outs = []
for name, ang in [('front', 0), ('quarter', 45), ('side', 90), ('back', 180)]:
    a = math.radians(ang); cam.location = Vector((3 * math.sin(a), -3 * math.cos(a), 0.27)); cam.rotation_euler = (math.radians(90), 0, a)
    sc.render.filepath = R + 'work/blender-crown-%s.png' % name; bpy.ops.render.render(write_still=True); outs.append(sc.render.filepath)
rep['renders'] = outs
json.dump(rep, open(R + 'data/crack-check.json', 'w'), indent=2)
print('CRACK_CHECK', json.dumps(rep))
