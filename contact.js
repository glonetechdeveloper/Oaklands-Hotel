const hamburger = document.getElementById('hamburger');
const sidebar = document.getElementById('sidebar');
const closeBtn = document.getElementById('close-btn');

// Navbar scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Toggle sidebar
hamburger.addEventListener('click', () => {
  sidebar.classList.toggle('active');
  hamburger.classList.toggle('open');

  const spans = hamburger.querySelectorAll('span');
  if (hamburger.classList.contains('open')) {
    spans[0].style.transform = 'rotate(45deg) translateY(8px)';
    spans[1].style.opacity = '0';
    spans[2].style.transform = 'rotate(-45deg) translateY(-8px)';
  } else {
    spans.forEach(span => {
      span.style.transform = '';
      span.style.opacity = '1';
    });
  }
});

// Close sidebar
closeBtn.addEventListener('click', () => {
  sidebar.classList.remove('active');
  hamburger.classList.remove('open');
  hamburger.querySelectorAll('span').forEach(span => {
    span.style.transform = '';
    span.style.opacity = '1';
  });
});

// Hero Slideshow
const slides = document.querySelectorAll('.hero-slideshow img');
let currentSlide = 0;

function showNextSlide() {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('active');
}

setInterval(showNextSlide, 6000);

// Fade-up on scroll
const fadeElems = document.querySelectorAll('.fade-up');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.2 });

fadeElems.forEach(el => observer.observe(el));


// Fade-up on scroll (already exists)


fadeElems.forEach(el => observer.observe(el));


