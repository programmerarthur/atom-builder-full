
import * as THREE from 'three';

let scene, camera, renderer, electrons=[], mode='bohr';
const canvas = document.getElementById('atom-canvas');

export function initViewer() {
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x111111);

  camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight,0.1,1000);
  camera.position.z=10;

  renderer = new THREE.WebGLRenderer({canvas, antialias:true});
  renderer.setSize(window.innerWidth, window.innerHeight);

  const nucleusGeo = new THREE.SphereGeometry(0.5,32,32);
  const nucleusMat = new THREE.MeshStandardMaterial({color:0x0ff,emissive:0x0ff,emissiveIntensity:0.5});
  const nucleus = new THREE.Mesh(nucleusGeo,nucleusMat);
  scene.add(nucleus);

  const light = new THREE.PointLight(0x0ff,2,50);
  light.position.set(10,10,10);
  scene.add(light);
  scene.add(new THREE.AmbientLight(0x0f0,0.2));

  createElectrons(3);

  animate();
}

function createElectrons(count){
  electrons.forEach(e=>scene.remove(e.mesh));
  electrons=[];
  for(let i=0;i<count;i++){
    const geo=new THREE.SphereGeometry(0.1,16,16);
    const mat=new THREE.MeshStandardMaterial({color:0x0ff,emissive:0x0ff});
    const mesh=new THREE.Mesh(geo,mat);
    electrons.push({mesh,angle:Math.random()*Math.PI*2,radius:1+i});
    scene.add(mesh);
  }
}

function animate(){
  requestAnimationFrame(animate);
  electrons.forEach((e,idx)=>{
    if(mode==='bohr'){
      e.angle+=0.02+idx*0.005;
      e.mesh.position.set(Math.cos(e.angle)*e.radius,Math.sin(e.angle)*e.radius,0);
    } else {
      e.mesh.position.set(Math.sin(Date.now()*0.001+idx)*e.radius,Math.cos(Date.now()*0.001+idx)*e.radius,Math.sin(Date.now()*0.002+idx)*e.radius);
    }
  });
  renderer.render(scene,camera);
}

window.addEventListener('resize',()=>{
  camera.aspect=window.innerWidth/window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth,window.innerHeight);
});

export function setMode(m){ mode=m; }
export function setElectrons(c){ createElectrons(c); }
