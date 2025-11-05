# SPINE-Camera-Synchronization-Patch

This repository provides a lightweight JavaScript patch for synchronizing camera motion between reconstructed and truth 3D scenes in SPINE/Plotly visualizations. It also includes a demonstration notebook and integration guide.

---

## Overview

The SPINE framework provides interactive 3D event displays for reconstructed and truth-level particle data. In some cases, the built-in camera synchronization option may not be active or supported.  

This patch introduces a simple JavaScript utility that synchronizes camera motion between the two 3D scenes (`scene` and `scene2`) — allowing both views to **rotate, zoom, and pan together** for a smoother, more intuitive visualization.

---

## Repository Contents

| File | Description |
|------|--------------|
| `sync_camera.js` | JavaScript patch for synchronized camera motion between 3D scenes. |
| `print_and_display_single_event.ipynb` | Example notebook demonstrating integration with SPINE event displays. |
| `MR6p1_0000492_entry_28_reco_0_truth_0.html` | Example event saved in HTML to see the patch in action. |
| `README.md` | Documentation and usage guide. |

---

## Usage

### Option 1 — Use directly in SPINE-generated HTML

1. Place `sync_camera.js` in the same directory as your event display HTML file.  
2. Add the following line **before the closing `</body>` tag**:

```html
<script src="sync_camera.js"></script>
```

When you open the HTML file, both 3D scenes (reconstructed and truth) will move together automatically.

---

### Option 2 — Integrate in your workflow

A ready-to-run example is provided in `print_and_display_single_event.ipynb`, which demonstrates how to generate an interactive event display and automatically link the camera synchronization script.

---

## Example

After integration, both 3D scenes behave as a single synchronized view:

- Rotating one scene rotates the other.
- Zoom and pan actions are mirrored.

---

## Acknowledgment

This script was developed as a user-level extension for the DUNE [SPINE](https://github.com/DeepLearnPhysics/spine) visualization framework. It does not modify SPINE itself and can be safely included or removed as needed.
