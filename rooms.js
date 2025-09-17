// Navbar scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Hero slider
const heroSlides = document.querySelectorAll('.hero-slider img');
let heroIndex = 0;

function changeHeroSlide() {
  heroSlides[heroIndex].classList.remove('active');
  heroIndex = (heroIndex + 1) % heroSlides.length;
  heroSlides[heroIndex].classList.add('active');
}
setInterval(changeHeroSlide, 6000);

// Fade-up on scroll
const fadeUps = document.querySelectorAll('.fade-up');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.2 });
fadeUps.forEach(el => observer.observe(el));

// Sidebar toggle
const hamburger = document.getElementById('hamburger');
const sidebar = document.getElementById('sidebar');
const closeBtn = document.getElementById('close-btn');

hamburger.addEventListener('click', () => {
  sidebar.classList.add('active');
});
closeBtn.addEventListener('click', () => {
  sidebar.classList.remove('active');
});







// Reusable Carousel Function
document.querySelectorAll('.carousel').forEach(carousel => {
  const images = carousel.querySelectorAll('.carousel-images img');
  const prevBtn = carousel.querySelector('.carousel-btn.prev');
  const nextBtn = carousel.querySelector('.carousel-btn.next');
  const dotsContainer = carousel.querySelector('.carousel-dots');
  let currentIndex = 0;

  // Create dots
  images.forEach((_, index) => {
    const dot = document.createElement('span');
    if (index === 0) dot.classList.add('active');
    dotsContainer.appendChild(dot);
    dot.addEventListener('click', () => showSlide(index));
  });

  const dots = dotsContainer.querySelectorAll('span');

  function showSlide(index) {
    images[currentIndex].classList.remove('active');
    dots[currentIndex].classList.remove('active');
    currentIndex = (index + images.length) % images.length;
    images[currentIndex].classList.add('active');
    dots[currentIndex].classList.add('active');
  }

  prevBtn.addEventListener('click', () => showSlide(currentIndex - 1));
  nextBtn.addEventListener('click', () => showSlide(currentIndex + 1));

  // Auto slide
  setInterval(() => showSlide(currentIndex + 1), 5000);
});




// Flip cards on click for amenities section
document.querySelectorAll('.amenity-card').forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('flipped');
  });
});
