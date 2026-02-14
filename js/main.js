// Navbar scroll effect
const navbar = document.getElementById('navbar');
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');
const menuSpan = menuToggle.querySelector('span');

const prefersReducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
let prefersReducedMotion = prefersReducedMotionQuery.matches;

prefersReducedMotionQuery.addEventListener('change', (event) => {
  prefersReducedMotion = event.matches;
  if (prefersReducedMotion) {
    stopThreeAnimation();
  } else {
    startThreeAnimation();
  }
});

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Mobile menu toggle
function getIsMenuOpen() {
  return navMenu.classList.contains('open');
}

function setMenuOpen(isOpen) {
  navMenu.classList.toggle('open', isOpen);
  menuSpan.classList.toggle('open', isOpen);
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  document.body.classList.toggle('menu-open', isOpen);

  if (isOpen) {
    const firstLink = navMenu.querySelector('a');
    if (firstLink) firstLink.focus();
  } else {
    menuToggle.focus();
  }
}

menuToggle.addEventListener('click', () => {
  setMenuOpen(!getIsMenuOpen());
});

// Close menu when clicking a link
navMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    setMenuOpen(false);
  });
});

// Close menu on Escape + basic focus trap when open
document.addEventListener('keydown', (event) => {
  if (!getIsMenuOpen()) return;

  if (event.key === 'Escape') {
    event.preventDefault();
    setMenuOpen(false);
    return;
  }

  if (event.key !== 'Tab') return;

  const focusables = [
    menuToggle,
    ...Array.from(navMenu.querySelectorAll('a')),
  ].filter((el) => el && !el.hasAttribute('disabled'));

  if (focusables.length === 0) return;

  const first = focusables[0];
  const last = focusables[focusables.length - 1];
  const active = document.activeElement;

  if (event.shiftKey) {
    if (active === first || active === document.body) {
      event.preventDefault();
      last.focus();
    }
  } else {
    if (active === last) {
      event.preventDefault();
      first.focus();
    }
  }
});

// Three.js Scene (skips animation for reduced motion, and pauses when tab is hidden)
const container = document.getElementById('three-container');

let scene;
let camera;
let renderer;
let composer;
let bloomPass;
let shapes = [];
let mouseX = 0;
let mouseY = 0;
let animationFrameId = null;

function initThreeScene() {
  if (!container) return false;
  if (typeof THREE === 'undefined') return false;
  if (scene || renderer || camera) return true;

  scene = new THREE.Scene();
  scene.fog = new THREE.Fog(0x0a0a14, 9, 44);
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

  renderer.outputEncoding = THREE.sRGBEncoding;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.0;

  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;

  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  container.appendChild(renderer.domElement);

  // Procedural environment for richer materials (no external assets).
  const pmrem = new THREE.PMREMGenerator(renderer);
  const envScene = new THREE.Scene();
  envScene.background = new THREE.Color(0x0a0a14);

  const envLight1 = new THREE.PointLight(0xe94560, 2.0, 20);
  envLight1.position.set(3, 2, 2);
  envScene.add(envLight1);

  const envLight2 = new THREE.PointLight(0xd4af37, 2.0, 20);
  envLight2.position.set(-3, -2, 2);
  envScene.add(envLight2);

  const envLight3 = new THREE.PointLight(0x4a90a4, 1.8, 20);
  envLight3.position.set(0, 3, -2);
  envScene.add(envLight3);

  const envRT = pmrem.fromScene(envScene, 0.04);
  scene.environment = envRT.texture;
  pmrem.dispose();

  shapes = [];
  const geometries = [
    new THREE.IcosahedronGeometry(0.8, 0),
    new THREE.IcosahedronGeometry(0.75, 1),
    new THREE.OctahedronGeometry(0.7, 0),
    new THREE.TetrahedronGeometry(0.6, 0),
    new THREE.DodecahedronGeometry(0.5, 0),
    new THREE.SphereGeometry(0.55, 12, 12),
    new THREE.ConeGeometry(0.55, 1.1, 7),
    new THREE.CylinderGeometry(0.35, 0.55, 1.0, 8),
    new THREE.BoxGeometry(0.7, 0.7, 0.7),
    new THREE.TorusGeometry(0.4, 0.2, 16, 32),
    new THREE.TorusKnotGeometry(0.3, 0.1, 64, 8)
  ];

  const colors = [0xe94560, 0xd4af37, 0x4a90a4, 0x9b59b6, 0x2ecc71];

  // Center-clear composition to keep text readable.
  const isMobile = window.innerWidth < 768;
  const shapeCount = isMobile ? 34 : 52;
  const minRadius = isMobile ? 6.5 : 8.0;
  const maxRadius = isMobile ? 22 : 28;

  for (let i = 0; i < shapeCount; i++) {
    const geometry = geometries[Math.floor(Math.random() * geometries.length)];
    const baseColor = new THREE.Color(colors[Math.floor(Math.random() * colors.length)]);
    const hsl = { h: 0, s: 0, l: 0 };
    baseColor.getHSL(hsl);
    const hueJitter = (Math.random() - 0.5) * 0.08;
    const satBoost = 1.2 + Math.random() * 0.25;
    const lightAdjust = 0.9 + Math.random() * 0.2;
    const color = new THREE.Color().setHSL(
      (hsl.h + hueJitter + 1) % 1,
      Math.min(1, hsl.s * satBoost),
      Math.min(0.65, Math.max(0.32, hsl.l * lightAdjust))
    );
    const material = new THREE.MeshStandardMaterial({
      color,
      emissive: new THREE.Color(color),
      emissiveIntensity: 0.22,
      metalness: 0.28,
      roughness: 0.36,
      transparent: true,
      opacity: 0.8
    });

    const mesh = new THREE.Mesh(geometry, material);

    const angle = Math.random() * Math.PI * 2;
    const radius = minRadius + Math.random() * (maxRadius - minRadius);
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;
    const z = -6 - Math.random() * 18;
    mesh.position.set(x, y, z);

    const scale = 1.1 + Math.random() * 1.1;
    mesh.scale.setScalar(scale);

    mesh.castShadow = true;

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

  // Transparent receiver plane so shadows read on the background.
  const shadowPlane = new THREE.Mesh(
    new THREE.PlaneGeometry(200, 200),
    new THREE.ShadowMaterial({ opacity: 0.18 })
  );
  shadowPlane.position.set(0, 0, -22);
  shadowPlane.receiveShadow = true;
  scene.add(shadowPlane);

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
  directionalLight.castShadow = true;
  directionalLight.shadow.mapSize.width = 1024;
  directionalLight.shadow.mapSize.height = 1024;
  directionalLight.shadow.camera.near = 1;
  directionalLight.shadow.camera.far = 60;
  directionalLight.shadow.camera.left = -25;
  directionalLight.shadow.camera.right = 25;
  directionalLight.shadow.camera.top = 25;
  directionalLight.shadow.camera.bottom = -25;
  scene.add(directionalLight);

  camera.position.z = 8.8;

  // Premium post-processing (bloom + subtle DOF), with safe fallbacks.
  composer = null;
  bloomPass = null;

  if (typeof THREE.EffectComposer !== 'undefined' && typeof THREE.RenderPass !== 'undefined') {
    composer = new THREE.EffectComposer(renderer);
    composer.addPass(new THREE.RenderPass(scene, camera));

    if (typeof THREE.UnrealBloomPass !== 'undefined') {
      const resolution = new THREE.Vector2(window.innerWidth, window.innerHeight);
      // Subtle bloom only (avoid neon look)
      bloomPass = new THREE.UnrealBloomPass(resolution, 0.45, 0.25, 0.22);
      composer.addPass(bloomPass);
    }
  }

  return true;
}

function renderThreeFrame(timeSeconds) {
  if (!scene || !camera || !renderer) return;

  shapes.forEach((shape) => {
    shape.rotation.x += shape.userData.rotationSpeed.x;
    shape.rotation.y += shape.userData.rotationSpeed.y;
    shape.rotation.z += shape.userData.rotationSpeed.z;
    shape.position.y += Math.sin(timeSeconds * shape.userData.floatSpeed + shape.userData.floatOffset) * 0.003;
  });

  camera.position.x += (mouseX * 2 - camera.position.x) * 0.02;
  camera.position.y += (mouseY * 2 - camera.position.y) * 0.02;
  camera.lookAt(scene.position);

  if (composer) {
    composer.render();
  } else {
    renderer.render(scene, camera);
  }
}

function animateThree() {
  if (animationFrameId !== null) return;
  const loop = () => {
    if (document.hidden || prefersReducedMotion) {
      animationFrameId = null;
      return;
    }
    const time = Date.now() * 0.001;
    renderThreeFrame(time);
    animationFrameId = requestAnimationFrame(loop);
  };
  animationFrameId = requestAnimationFrame(loop);
}

function stopThreeAnimation() {
  if (animationFrameId !== null) {
    cancelAnimationFrame(animationFrameId);
    animationFrameId = null;
  }
}

function startThreeAnimation() {
  const ok = initThreeScene();
  if (!ok) return;

  if (prefersReducedMotion) {
    // Render once and stop.
    renderThreeFrame(Date.now() * 0.001);
    stopThreeAnimation();
    return;
  }

  if (!document.hidden) {
    animateThree();
  }
}

// Mouse interaction (skip for reduced motion)
window.addEventListener('mousemove', (event) => {
  if (prefersReducedMotion) return;
  mouseX = (event.clientX / window.innerWidth) * 2 - 1;
  mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
});

// Pause/resume on visibility change
document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    stopThreeAnimation();
  } else {
    startThreeAnimation();
  }
});

// Handle resize
window.addEventListener('resize', () => {
  if (!camera || !renderer) return;
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  if (composer) composer.setSize(window.innerWidth, window.innerHeight);
});

startThreeAnimation();
