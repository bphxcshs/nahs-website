// Navbar scroll effect
const navbar = document.getElementById('navbar');
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');
const menuSpan = menuToggle.querySelector('span');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Mobile menu toggle
menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('open');
  menuSpan.classList.toggle('open');
});

// Close menu when clicking a link
navMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('open');
    menuSpan.classList.remove('open');
  });
});

// Three.js Scene
const container = document.getElementById('three-container');
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
container.appendChild(renderer.domElement);

// Create floating art-themed geometric shapes
const shapes = [];
const geometries = [
  new THREE.IcosahedronGeometry(0.8, 0),
  new THREE.OctahedronGeometry(0.7, 0),
  new THREE.TetrahedronGeometry(0.6, 0),
  new THREE.DodecahedronGeometry(0.5, 0),
  new THREE.TorusGeometry(0.4, 0.2, 16, 32),
  new THREE.TorusKnotGeometry(0.3, 0.1, 64, 8)
];

const colors = [0xe94560, 0xd4af37, 0x4a90a4, 0x9b59b6, 0x2ecc71];

for (let i = 0; i < 25; i++) {
  const geometry = geometries[Math.floor(Math.random() * geometries.length)];
  const material = new THREE.MeshPhongMaterial({
    color: colors[Math.floor(Math.random() * colors.length)],
    transparent: true,
    opacity: 0.7,
    shininess: 100
  });
  
  const mesh = new THREE.Mesh(geometry, material);
  mesh.position.set(
    (Math.random() - 0.5) * 20,
    (Math.random() - 0.5) * 20,
    (Math.random() - 0.5) * 15 - 5
  );
  mesh.rotation.set(
    Math.random() * Math.PI,
    Math.random() * Math.PI,
    Math.random() * Math.PI
  );
  mesh.userData = {
    rotationSpeed: {
      x: (Math.random() - 0.5) * 0.02,
      y: (Math.random() - 0.5) * 0.02,
      z: (Math.random() - 0.5) * 0.02
    },
    floatSpeed: Math.random() * 0.5 + 0.5,
    floatOffset: Math.random() * Math.PI * 2
  };
  shapes.push(mesh);
  scene.add(mesh);
}

// Lighting
const ambientLight = new THREE.AmbientLight(0x404040, 0.5);
scene.add(ambientLight);

const pointLight1 = new THREE.PointLight(0xe94560, 1, 100);
pointLight1.position.set(10, 10, 10);
scene.add(pointLight1);

const pointLight2 = new THREE.PointLight(0xd4af37, 1, 100);
pointLight2.position.set(-10, -10, 10);
scene.add(pointLight2);

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
directionalLight.position.set(0, 5, 5);
scene.add(directionalLight);

camera.position.z = 8;

// Mouse interaction
let mouseX = 0;
let mouseY = 0;

window.addEventListener('mousemove', (event) => {
  mouseX = (event.clientX / window.innerWidth) * 2 - 1;
  mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
});

// Animation loop
function animate() {
  requestAnimationFrame(animate);
  const time = Date.now() * 0.001;

  shapes.forEach((shape) => {
    shape.rotation.x += shape.userData.rotationSpeed.x;
    shape.rotation.y += shape.userData.rotationSpeed.y;
    shape.rotation.z += shape.userData.rotationSpeed.z;
    shape.position.y += Math.sin(time * shape.userData.floatSpeed + shape.userData.floatOffset) * 0.003;
  });

  camera.position.x += (mouseX * 2 - camera.position.x) * 0.02;
  camera.position.y += (mouseY * 2 - camera.position.y) * 0.02;
  camera.lookAt(scene.position);

  renderer.render(scene, camera);
}
animate();

// Handle resize
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
