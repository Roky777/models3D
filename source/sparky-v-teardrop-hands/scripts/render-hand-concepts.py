import os as _os  # handoff: paths relative to this script
ROOT = _os.path.dirname(_os.path.dirname(_os.path.abspath(__file__))).replace('\\', '/')
EXT = _os.path.join(_os.path.dirname(ROOT), 'external').replace('\\', '/')
"""Render hand style concepts on the textured body (Blender, Eevee): front + 3/4 for each style.
blender -b --factory-startup --python render-hand-concepts.py -- round flame float"""
import bpy, sys, math
from mathutils import Vector, Matrix
R = ROOT + '/'
styles = sys.argv[sys.argv.index('--') + 1:]
for st in styles:
    bpy.ops.wm.read_factory_settings(use_empty=True)
    sc = bpy.context.scene; sc.render.engine = 'BLENDER_EEVEE_NEXT'; sc.render.resolution_x = 700; sc.render.resolution_y = 760
    sc.world = bpy.data.worlds.new('w'); sc.world.color = (0.0, 0.0, 0.0)
    sc.view_settings.view_transform = 'Standard'
    bpy.ops.import_scene.gltf(filepath=R + 'work/v5-textured.glb')
    body = [o for o in sc.objects if o.type == 'MESH'][0]
    for m in body.data.materials:   # show the baked fire texture as is (emission)
        nt = m.node_tree; tex = next(n for n in nt.nodes if n.type == 'TEX_IMAGE'); em = nt.nodes.new('ShaderNodeEmission')
        nt.links.new(tex.outputs['Color'], em.inputs['Color']); nt.links.new(em.outputs[0], nt.nodes['Material Output'].inputs['Surface'])
    # fiery hand material: hot yellow core, orange rim (facing ratio)
    mat = bpy.data.materials.new('fire hand'); mat.use_nodes = True; nt = mat.node_tree
    for n in list(nt.nodes): nt.nodes.remove(n)
    out = nt.nodes.new('ShaderNodeOutputMaterial'); em = nt.nodes.new('ShaderNodeEmission'); lw = nt.nodes.new('ShaderNodeLayerWeight'); ramp = nt.nodes.new('ShaderNodeValToRGB')
    lw.inputs['Blend'].default_value = 0.45
    ramp.color_ramp.elements[0].color = (1.0, 0.80, 0.25, 1); ramp.color_ramp.elements[1].color = (1.0, 0.28, 0.03, 1)
    nt.links.new(lw.outputs['Facing'], ramp.inputs['Fac']); nt.links.new(ramp.outputs['Color'], em.inputs['Color']); nt.links.new(em.outputs[0], out.inputs[0])
    bpy.ops.wm.ply_import(filepath=R + f'work/hand-{st}.ply', forward_axis='Y', up_axis='Z')
    hl = bpy.context.selected_objects[0]
    hr = hl.copy(); hr.data = hl.data.copy(); sc.collection.objects.link(hr); hr.data.transform(Matrix.Scale(-1, 4, (1, 0, 0))); hr.data.flip_normals()
    for h in (hl, hr):
        h.data.materials.append(mat)
        for p in h.data.polygons: p.use_smooth = True
    cam = bpy.data.objects.new('c', bpy.data.cameras.new('c')); sc.collection.objects.link(cam); sc.camera = cam
    cam.data.type = 'ORTHO'; cam.data.ortho_scale = 0.95
    for nm, ang in [('front', 0), ('q34', 35)]:
        a = math.radians(ang); cam.location = Vector((3 * math.sin(a), -3 * math.cos(a), -0.02)); cam.rotation_euler = (math.radians(90), 0, a)
        sc.render.filepath = R + f'work/concept-{st}-{nm}.png'; bpy.ops.render.render(write_still=True)
    print('CONCEPT_DONE', st)
