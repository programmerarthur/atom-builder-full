
import { setMode, setElectrons } from './viewer.js';
export function initSidebar() {
  document.getElementById("advanced-toggle").onclick = ()=>{
    const adv = document.getElementById("advanced-controls");
    adv.style.display = adv.style.display==="block"?"none":"block";
  };
  document.getElementById("view-mode").onchange = e=>setMode(e.target.value);
  document.getElementById("electrons").oninput = e=>setElectrons(parseInt(e.target.value));
}
