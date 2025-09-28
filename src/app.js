
import { initSidebar } from './sidebar.js';
import { initViewer } from './viewer.js';

document.getElementById("start-btn").onclick = () => {
  document.getElementById("start-btn").style.display = "none";
};

initViewer();
initSidebar();
