<script lang="ts">
  import { onMount } from 'svelte';
  
  let scrolled = $state(false);
  let menuOpen = $state(false);

  onMount(() => {
    const handleScroll = () => {
      scrolled = window.scrollY > 50;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  function toggleMenu() {
    menuOpen = !menuOpen;
  }

  function closeMenu() {
    menuOpen = false;
  }
</script>

<nav class:scrolled>
  <div class="nav-content">
    <a href="#home" class="logo" onclick={closeMenu}>
      <span class="logo-icon">🎨</span>
      <span class="logo-text">NJAHS</span>
    </a>
    
    <button class="menu-toggle" onclick={toggleMenu} aria-label="Toggle menu">
      <span class:open={menuOpen}></span>
    </button>

    <ul class:open={menuOpen}>
      <li><a href="#home" onclick={closeMenu}>Home</a></li>
      <li><a href="#about" onclick={closeMenu}>About</a></li>
      <li><a href="#pillars" onclick={closeMenu}>Pillars</a></li>
      <li><a href="#gallery" onclick={closeMenu}>Gallery</a></li>
      <li><a href="#join" onclick={closeMenu}>Join</a></li>
    </ul>
  </div>
</nav>

<style>
  nav {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    padding: 1rem 2rem;
    transition: all 0.3s ease;
  }

  nav.scrolled {
    background: rgba(26, 26, 46, 0.95);
    backdrop-filter: blur(10px);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);
  }

  .nav-content {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    text-decoration: none;
    color: var(--text);
    font-size: 1.5rem;
    font-weight: 700;
    font-family: 'Playfair Display', serif;
  }

  .logo-icon {
    font-size: 2rem;
  }

  ul {
    display: flex;
    list-style: none;
    gap: 2rem;
  }

  a {
    color: var(--text);
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s;
    position: relative;
  }

  ul a::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, var(--accent), var(--accent-gold));
    transition: width 0.3s;
  }

  ul a:hover::after {
    width: 100%;
  }

  .menu-toggle {
    display: none;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0.5rem;
  }

  .menu-toggle span {
    display: block;
    width: 25px;
    height: 3px;
    background: var(--text);
    position: relative;
    transition: all 0.3s;
  }

  .menu-toggle span::before,
  .menu-toggle span::after {
    content: '';
    position: absolute;
    width: 25px;
    height: 3px;
    background: var(--text);
    transition: all 0.3s;
  }

  .menu-toggle span::before {
    top: -8px;
  }

  .menu-toggle span::after {
    top: 8px;
  }

  .menu-toggle span.open {
    background: transparent;
  }

  .menu-toggle span.open::before {
    top: 0;
    transform: rotate(45deg);
  }

  .menu-toggle span.open::after {
    top: 0;
    transform: rotate(-45deg);
  }

  @media (max-width: 768px) {
    .menu-toggle {
      display: block;
    }

    ul {
      position: fixed;
      top: 70px;
      left: 0;
      right: 0;
      background: rgba(26, 26, 46, 0.98);
      flex-direction: column;
      align-items: center;
      padding: 2rem;
      gap: 1.5rem;
      transform: translateY(-150%);
      transition: transform 0.3s ease;
    }

    ul.open {
      transform: translateY(0);
    }
  }
</style>
