# Sparky — 3D character versions

A cute fire character, in four versions. Open `index.html` for the gallery: GPU-rendered turntables on black, with
the fire animation running. Click a version to see it large, or open its live 3D viewer.

| Version | What it is |
|---|---|
| `v-ultimate` | Approved fireball rebuild: tall single curl, original crown |
| `v-paltimate` | Sculpted flame crown, nose and full face rig |
| `v-paltimate2` | Flame-ribbon crown, cute eased fire motion, burning tips, fire light |
| `v-teardrop` | New teardrop shape from the turnaround sheet, flame tongues around the upper body |

## Contents
- `index.html` + `media/` — the gallery (turntable videos and front stills, 1080×1350)
- `versions/<name>/` — live 3D viewer of each version (drag to turn, play the animations)
- `models/<name>.glb` — final rigged models (22 animation clips each except v-ultimate with 16; meshopt-compressed)

The viewers load their files with `fetch`, so serve the folder rather than opening it as a file, for example
`python -m http.server` in the repository root, then open http://localhost:8000/.
