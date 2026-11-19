# Sparky — 3D character versions

A cute fire character, in five versions. Open `index.html` for the gallery: GPU-rendered turntables on black, with
the fire animation running. Click a version to see it large, or open its live 3D viewer.

| Version | What it is |
|---|---|
| `v-ultimate` | Approved fireball rebuild: tall single curl, original crown |
| `v-paltimate` | Sculpted flame crown, nose and full face rig |
| `v-paltimate2` | Flame-ribbon crown, cute eased fire motion, burning tips, fire light |
| `v-teardrop` | Teardrop shape from the turnaround sheet, flame tongues around the upper body, finished face |
| `v-teardrop-hands` | v-teardrop with cartoon caramel hands and emotion clips, incl. **Angry** (power-up, golden aura) and **Sad** (dim blue flame, shrinks) |

## Contents
- `index.html` + `media/` — the gallery (turntable videos and front stills, 1080×1350)
- `versions/<name>/` — live 3D viewer of each version (drag to turn, play the animations; phones get a light mobile mode)
- `models/` — the .glb files (rig + all animation clips)
- `source/sparky-v-teardrop*/` — build scripts (Blender / Python / Node), viewer source and rig data of the teardrop versions

### Moods (v-teardrop-hands)
`Emotion_Angry` and `Emotion_Sad` animate two empty nodes, `Mood_Anger` and `Mood_Sad`: their scale (0 to 1) says how angry or
sad Sparky is, so any engine can read it. The live viewer drives the fire from them (fast golden flames and aura / dim blue
flame). Face, hands, body and the sad shrink are ordinary bone and morph animation in the clip.
- `models/<name>.glb` — final rigged models (22 animation clips each except v-ultimate with 16; meshopt-compressed)

The viewers load their files with `fetch`, so serve the folder rather than opening it as a file, for example
`python -m http.server` in the repository root, then open http://localhost:8000/.
