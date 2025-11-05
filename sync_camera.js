/*******************************************************************************
 * SPINE Camera Synchronization Script
 * -----------------------------------------------------------------------------
 * Author: Muhammad Bilal Azam
 * Affiliation: Illinois Institute of Technology / DUNE Collaboration
 * Date: November 2025
 *
 * Description:
 *   This lightweight JavaScript patch enables synchronized camera motion
 *   between multiple 3D Plotly scenes (e.g., 'scene' and 'scene2') within
 *   SPINE-generated event display HTML files.
 *
 * Usage:
 *   1. A working demonstration is provided in the accompanying notebook:
 *        print_and_display_single_event.ipynb
 *   2. The script can be used as a standalone visualization utility or
 *      directly included in SPINE-generated HTML files:
 *        <script src="sync_camera.js"></script>
 *
 * Note:
 *   This is a user-level extension written for convenience when the built-in
 *   synchronization option in the SPINE Drawer class is not active or supported.
 *   It does not modify SPINE itself and can be safely included or removed.
 ******************************************************************************/

const graph = document.querySelector('.plotly-graph-div');
const scenes = ['scene', 'scene2'];
let isSyncing = false;

graph.on('plotly_relayout', (eventdata) => {
  if (isSyncing) return;
  let camScene = null;
  let camData = null;
  for (const sceneName of scenes) {
    const key = sceneName + '.camera';
    if (eventdata.hasOwnProperty(key)) {
      camScene = sceneName;
      camData = eventdata[key];
      break;
    }
  }
  if (!camScene) return; // No camera update found
  isSyncing = true;
  // Update all other scenes with the same camera
  scenes.forEach(sceneName => {
    if (sceneName !== camScene) {
      let update = {};
      update[sceneName + '.camera'] = camData;
      Plotly.relayout(graph, update).catch(() => {}).then(() => {
        isSyncing = false;
      });
    }
  });
});

console.log("Camera synchronization enabled safely for scenes in one plot.");
