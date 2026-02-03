<script lang="ts">
  import '../app.css';
  import ThreeScene from '$lib/components/ThreeScene.svelte';
  import Navbar from '$lib/components/Navbar.svelte';
</script>

<svelte:head>
  <title>NJAHS | BASIS Phoenix</title>
  <meta name="description" content="National Junior Art Honor Society at BASIS Phoenix - Celebrating creativity, scholarship, and artistic excellence." />
</svelte:head>

<ThreeScene />
<Navbar />

<main>
  <!-- Hero Section -->
  <section id="home" class="hero">
    <div class="hero-content">
      <h1 class="hero-title">
        <span class="title-line">National Junior</span>
        <span class="title-line accent">Art Honor Society</span>
      </h1>
      <p class="hero-subtitle">BASIS Phoenix Chapter</p>
      <p class="hero-description">
        Inspiring young artists to achieve excellence through creativity, 
        scholarship, character, and service.
      </p>
      <div class="hero-buttons">
        <a href="#about" class="btn">Learn More</a>
        <a href="#join" class="btn btn-outline">Join Us</a>
      </div>
    </div>
    <div class="scroll-indicator">
      <span>Scroll</span>
      <div class="scroll-arrow"></div>
    </div>
  </section>

  <!-- About Section -->
  <section id="about" class="about">
    <div class="container">
      <div class="section-header">
        <h2>About NJAHS</h2>
        <div class="underline"></div>
      </div>
      <div class="about-content">
        <div class="about-text">
          <p>
            The <strong>National Junior Art Honor Society</strong> is a prestigious organization 
            that recognizes students in grades 6-8 who have demonstrated outstanding ability 
            and achievement in art.
          </p>
          <p>
            At <strong>BASIS Phoenix</strong>, our NJAHS chapter brings together talented young 
            artists who share a passion for creativity and artistic growth. We provide 
            opportunities for members to develop their skills, participate in community 
            service projects, and showcase their work.
          </p>
          <p>
            Our mission is to inspire and recognize students who have shown an outstanding 
            ability and interest in art, fostering their continued involvement in the visual arts.
          </p>
        </div>
        <div class="about-stats">
          <div class="stat">
            <span class="stat-number">50+</span>
            <span class="stat-label">Active Members</span>
          </div>
          <div class="stat">
            <span class="stat-number">20+</span>
            <span class="stat-label">Annual Events</span>
          </div>
          <div class="stat">
            <span class="stat-number">100+</span>
            <span class="stat-label">Service Hours</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Pillars Section -->
  <section id="pillars" class="pillars">
    <div class="container">
      <div class="section-header">
        <h2>Our Five Pillars</h2>
        <div class="underline"></div>
      </div>
      <div class="pillars-grid">
        <div class="pillar-card">
          <div class="pillar-icon">🎨</div>
          <h3>Art</h3>
          <p>Developing artistic skills and exploring diverse mediums of creative expression.</p>
        </div>
        <div class="pillar-card">
          <div class="pillar-icon">📚</div>
          <h3>Scholarship</h3>
          <p>Maintaining academic excellence while pursuing artistic endeavors.</p>
        </div>
        <div class="pillar-card">
          <div class="pillar-icon">⭐</div>
          <h3>Character</h3>
          <p>Demonstrating integrity, responsibility, and respect in all activities.</p>
        </div>
        <div class="pillar-card">
          <div class="pillar-icon">🤝</div>
          <h3>Service</h3>
          <p>Giving back to our community through art-based volunteer work.</p>
        </div>
        <div class="pillar-card">
          <div class="pillar-icon">🏆</div>
          <h3>Leadership</h3>
          <p>Inspiring and mentoring fellow students in their artistic journey.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Gallery Section -->
  <section id="gallery" class="gallery">
    <div class="container">
      <div class="section-header">
        <h2>Member Gallery</h2>
        <div class="underline"></div>
      </div>
      <div class="gallery-grid">
        <div class="gallery-item">
          <div class="gallery-placeholder">
            <span>🖼️</span>
            <p>Student Artwork</p>
          </div>
        </div>
        <div class="gallery-item">
          <div class="gallery-placeholder">
            <span>🎭</span>
            <p>Mixed Media</p>
          </div>
        </div>
        <div class="gallery-item">
          <div class="gallery-placeholder">
            <span>✏️</span>
            <p>Sketches</p>
          </div>
        </div>
        <div class="gallery-item">
          <div class="gallery-placeholder">
            <span>🖌️</span>
            <p>Paintings</p>
          </div>
        </div>
        <div class="gallery-item">
          <div class="gallery-placeholder">
            <span>📷</span>
            <p>Photography</p>
          </div>
        </div>
        <div class="gallery-item">
          <div class="gallery-placeholder">
            <span>🏺</span>
            <p>Sculptures</p>
          </div>
        </div>
      </div>
      <p class="gallery-note">Gallery coming soon! Check back for member artwork submissions.</p>
    </div>
  </section>

  <!-- Join Section -->
  <section id="join" class="join">
    <div class="container">
      <div class="section-header">
        <h2>Join NJAHS</h2>
        <div class="underline"></div>
      </div>
      <div class="join-content">
        <div class="requirements">
          <h3>Membership Requirements</h3>
          <ul>
            <li>Be in grades 6-8 at BASIS Phoenix</li>
            <li>Maintain a minimum GPA of 3.0</li>
            <li>Demonstrate artistic ability through portfolio submission</li>
            <li>Show a commitment to art and creativity</li>
            <li>Complete an application during the open enrollment period</li>
          </ul>
        </div>
        <div class="join-cta">
          <h3>Ready to Apply?</h3>
          <p>
            Applications open each fall semester. Stay tuned for announcements 
            about the next enrollment period!
          </p>
          <a href="mailto:njahs@basisphoenix.org" class="btn">Contact Us</a>
        </div>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer>
    <div class="container">
      <div class="footer-content">
        <div class="footer-brand">
          <span class="logo-icon">🎨</span>
          <span class="logo-text">NJAHS</span>
          <p>BASIS Phoenix Chapter</p>
        </div>
        <div class="footer-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#pillars">Pillars</a>
          <a href="#gallery">Gallery</a>
          <a href="#join">Join</a>
        </div>
        <div class="footer-info">
          <p>© 2026 National Junior Art Honor Society</p>
          <p>BASIS Phoenix</p>
        </div>
      </div>
    </div>
  </footer>
</main>

<style>
  /* Hero Section */
  .hero {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    position: relative;
    padding: 2rem;
  }

  .hero-content {
    max-width: 800px;
  }

  .hero-title {
    font-size: clamp(2.5rem, 8vw, 5rem);
    line-height: 1.1;
    margin-bottom: 1rem;
  }

  .title-line {
    display: block;
  }

  .title-line.accent {
    background: linear-gradient(135deg, var(--accent), var(--accent-gold));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .hero-subtitle {
    font-size: 1.5rem;
    color: var(--accent-gold);
    margin-bottom: 1.5rem;
    font-weight: 600;
  }

  .hero-description {
    font-size: 1.2rem;
    color: var(--text-muted);
    max-width: 600px;
    margin: 0 auto 2rem;
    line-height: 1.6;
  }

  .hero-buttons {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
  }

  .btn-outline {
    background: transparent;
    border: 2px solid var(--accent);
    color: var(--accent);
  }

  .btn-outline:hover {
    background: var(--accent);
    color: white;
  }

  .scroll-indicator {
    position: absolute;
    bottom: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    color: var(--text-muted);
    font-size: 0.875rem;
    animation: bounce 2s infinite;
  }

  .scroll-arrow {
    width: 20px;
    height: 20px;
    border-right: 2px solid var(--accent);
    border-bottom: 2px solid var(--accent);
    transform: rotate(45deg);
  }

  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
    40% { transform: translateY(-10px); }
    60% { transform: translateY(-5px); }
  }

  /* Section Styling */
  .section-header {
    text-align: center;
    margin-bottom: 3rem;
  }

  .section-header h2 {
    font-size: clamp(2rem, 5vw, 3rem);
    margin-bottom: 1rem;
  }

  .underline {
    width: 100px;
    height: 4px;
    background: linear-gradient(90deg, var(--accent), var(--accent-gold));
    margin: 0 auto;
    border-radius: 2px;
  }

  /* About Section */
  .about {
    background: rgba(22, 33, 62, 0.5);
  }

  .about-content {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 3rem;
    align-items: center;
  }

  .about-text p {
    margin-bottom: 1.5rem;
    line-height: 1.8;
    color: var(--text-muted);
  }

  .about-text strong {
    color: var(--text);
  }

  .about-stats {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .stat {
    text-align: center;
    padding: 1.5rem;
    background: rgba(233, 69, 96, 0.1);
    border-radius: 15px;
    border: 1px solid rgba(233, 69, 96, 0.2);
  }

  .stat-number {
    display: block;
    font-size: 2.5rem;
    font-weight: 700;
    color: var(--accent);
    font-family: 'Playfair Display', serif;
  }

  .stat-label {
    color: var(--text-muted);
  }

  /* Pillars Section */
  .pillars-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
  }

  .pillar-card {
    background: rgba(26, 26, 46, 0.8);
    padding: 2rem;
    border-radius: 20px;
    text-align: center;
    border: 1px solid rgba(212, 175, 55, 0.2);
    transition: transform 0.3s, box-shadow 0.3s;
  }

  .pillar-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
    border-color: var(--accent-gold);
  }

  .pillar-icon {
    font-size: 3rem;
    margin-bottom: 1rem;
  }

  .pillar-card h3 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    color: var(--accent-gold);
  }

  .pillar-card p {
    color: var(--text-muted);
    line-height: 1.6;
  }

  /* Gallery Section */
  .gallery {
    background: rgba(22, 33, 62, 0.5);
  }

  .gallery-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1.5rem;
    margin-bottom: 2rem;
  }

  .gallery-item {
    aspect-ratio: 1;
    border-radius: 15px;
    overflow: hidden;
  }

  .gallery-placeholder {
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(233, 69, 96, 0.2), rgba(212, 175, 55, 0.2));
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 2px dashed rgba(212, 175, 55, 0.3);
    border-radius: 15px;
    transition: transform 0.3s;
  }

  .gallery-placeholder:hover {
    transform: scale(1.05);
    background: linear-gradient(135deg, rgba(233, 69, 96, 0.3), rgba(212, 175, 55, 0.3));
  }

  .gallery-placeholder span {
    font-size: 3rem;
    margin-bottom: 0.5rem;
  }

  .gallery-placeholder p {
    color: var(--text-muted);
  }

  .gallery-note {
    text-align: center;
    color: var(--text-muted);
    font-style: italic;
  }

  /* Join Section */
  .join-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
  }

  .requirements, .join-cta {
    background: rgba(26, 26, 46, 0.8);
    padding: 2.5rem;
    border-radius: 20px;
    border: 1px solid rgba(212, 175, 55, 0.2);
  }

  .requirements h3, .join-cta h3 {
    color: var(--accent-gold);
    margin-bottom: 1.5rem;
    font-size: 1.5rem;
  }

  .requirements ul {
    list-style: none;
  }

  .requirements li {
    padding: 0.75rem 0;
    padding-left: 2rem;
    position: relative;
    color: var(--text-muted);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }

  .requirements li:last-child {
    border-bottom: none;
  }

  .requirements li::before {
    content: '✓';
    position: absolute;
    left: 0;
    color: var(--accent);
  }

  .join-cta {
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .join-cta p {
    color: var(--text-muted);
    margin-bottom: 2rem;
    line-height: 1.6;
  }

  /* Footer */
  footer {
    background: var(--secondary);
    padding: 3rem 0;
    margin-top: 4rem;
  }

  .footer-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 2rem;
  }

  .footer-brand {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    flex-wrap: wrap;
  }

  .footer-brand .logo-icon {
    font-size: 2rem;
  }

  .footer-brand .logo-text {
    font-family: 'Playfair Display', serif;
    font-size: 1.5rem;
    font-weight: 700;
  }

  .footer-brand p {
    width: 100%;
    color: var(--text-muted);
    margin-top: 0.5rem;
  }

  .footer-links {
    display: flex;
    gap: 2rem;
  }

  .footer-links a {
    color: var(--text-muted);
    text-decoration: none;
    transition: color 0.3s;
  }

  .footer-links a:hover {
    color: var(--accent);
  }

  .footer-info {
    text-align: right;
    color: var(--text-muted);
    font-size: 0.875rem;
  }

  /* Responsive */
  @media (max-width: 768px) {
    .about-content {
      grid-template-columns: 1fr;
    }

    .about-stats {
      flex-direction: row;
      justify-content: center;
      flex-wrap: wrap;
    }

    .stat {
      flex: 1;
      min-width: 120px;
    }

    .join-content {
      grid-template-columns: 1fr;
    }

    .footer-content {
      flex-direction: column;
      text-align: center;
    }

    .footer-info {
      text-align: center;
    }

    .footer-brand {
      justify-content: center;
    }

    .footer-brand p {
      text-align: center;
    }
  }
</style>
