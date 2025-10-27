// ========================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// ========================================
// PARALLAX EFFECT FOR FLOATING PARTICLES
// ========================================
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const particles = document.querySelectorAll('.particle');
  
  particles.forEach((particle, index) => {
    const speed = (index + 1) * 0.5;
    particle.style.transform = `translateY(${scrolled * speed}px)`;
  });
});

// ========================================
// FADE IN ANIMATION ON SCROLL
// ========================================
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observe all feature cards and stat cards
document.querySelectorAll('.feature-card, .stat-card').forEach(card => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(20px)';
  card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(card);
});

// ========================================
// ADD ACTIVE STATE TO NAV LINKS
// ========================================
const currentLocation = window.location.pathname;
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
  if (link.getAttribute('href') === currentLocation) {
    link.style.background = 'rgba(255, 255, 255, 0.2)';
  }
});

// ========================================
// LOADING ANIMATION (Optional)
// ========================================
window.addEventListener('load', () => {
  document.body.style.opacity = '0';
  setTimeout(() => {
    document.body.style.transition = 'opacity 0.5s ease';
    document.body.style.opacity = '1';
  }, 100);
});