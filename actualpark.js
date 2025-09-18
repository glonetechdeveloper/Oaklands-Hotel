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


//omo i just dey add am
document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".slide");
  let currentIndex = 0;

  function showNextSlide() {
    slides[currentIndex].classList.remove("active");
    currentIndex = (currentIndex + 1) % slides.length;
    slides[currentIndex].classList.add("active");
  }

  setInterval(showNextSlide, 5000); // change every 5s
});

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




// Diner & Bar Carousel
document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.querySelector(".diner-bar-carousel");
  if (!carousel) return;

  const images = carousel.querySelectorAll(".carousel-images img");
  const prevBtn = carousel.querySelector(".carousel-btn.prev");
  const nextBtn = carousel.querySelector(".carousel-btn.next");
  const dotsContainer = carousel.querySelector(".carousel-dots");
  let currentIndex = 0;
  let autoSlide;

  // Create navigation dots
  images.forEach((_, i) => {
    const dot = document.createElement("button");
    if (i === 0) dot.classList.add("active");
    dot.addEventListener("click", () => {
      showSlide(i);
      resetAutoSlide();
    });
    dotsContainer.appendChild(dot);
  });
  const dots = dotsContainer.querySelectorAll("button");

  function showSlide(index) {
    images[currentIndex].classList.remove("active");
    dots[currentIndex].classList.remove("active");
    currentIndex = (index + images.length) % images.length;
    images[currentIndex].classList.add("active");
    dots[currentIndex].classList.add("active");
  }

  function nextSlide() {
    showSlide(currentIndex + 1);
  }

  function prevSlide() {
    showSlide(currentIndex - 1);
  }

  // Auto slide
  function startAutoSlide() {
    autoSlide = setInterval(nextSlide, 5000);
  }

  function resetAutoSlide() {
    clearInterval(autoSlide);
    startAutoSlide();
  }

  // Event listeners
  nextBtn.addEventListener("click", () => {
    nextSlide();
    resetAutoSlide();
  });

  prevBtn.addEventListener("click", () => {
    prevSlide();
    resetAutoSlide();
  });

  // Initialize
  showSlide(currentIndex);
  startAutoSlide();
});





// ==========================
// Gym Carousel
// ==========================
document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.querySelector(".gym-carousel");
  if (!carousel) return;

  const images = carousel.querySelectorAll(".carousel-images img");
  const prevBtn = carousel.querySelector(".carousel-btn.prev");
  const nextBtn = carousel.querySelector(".carousel-btn.next");
  const dotsContainer = carousel.querySelector(".carousel-dots");
  let currentIndex = 0;
  let autoSlide;

  // Create navigation dots
  images.forEach((_, i) => {
    const dot = document.createElement("button");
    if (i === 0) dot.classList.add("active");
    dot.addEventListener("click", () => {
      showSlide(i);
      resetAutoSlide();
    });
    dotsContainer.appendChild(dot);
  });
  const dots = dotsContainer.querySelectorAll("button");

  function showSlide(index) {
    images[currentIndex].classList.remove("active");
    dots[currentIndex].classList.remove("active");
    currentIndex = (index + images.length) % images.length;
    images[currentIndex].classList.add("active");
    dots[currentIndex].classList.add("active");
  }

  function nextSlide() {
    showSlide(currentIndex + 1);
  }

  function prevSlide() {
    showSlide(currentIndex - 1);
  }

  function startAutoSlide() {
    autoSlide = setInterval(nextSlide, 5000);
  }

  function resetAutoSlide() {
    clearInterval(autoSlide);
    startAutoSlide();
  }

  nextBtn.addEventListener("click", () => {
    nextSlide();
    resetAutoSlide();
  });

  prevBtn.addEventListener("click", () => {
    prevSlide();
    resetAutoSlide();
  });

  showSlide(currentIndex);
  startAutoSlide();
});



// ==========================
// Park Carousel
// ==========================
document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.querySelector(".park-carousel");
  if (!carousel) return;

  const images = carousel.querySelectorAll(".carousel-images img");
  const prevBtn = carousel.querySelector(".carousel-btn.prev");
  const nextBtn = carousel.querySelector(".carousel-btn.next");
  const dotsContainer = carousel.querySelector(".carousel-dots");
  let currentIndex = 0;
  let autoSlide;

  // Create navigation dots
  images.forEach((_, i) => {
    const dot = document.createElement("button");
    if (i === 0) dot.classList.add("active");
    dot.addEventListener("click", () => {
      showSlide(i);
      resetAutoSlide();
    });
    dotsContainer.appendChild(dot);
  });
  const dots = dotsContainer.querySelectorAll("button");

  function showSlide(index) {
    images[currentIndex].classList.remove("active");
    dots[currentIndex].classList.remove("active");
    currentIndex = (index + images.length) % images.length;
    images[currentIndex].classList.add("active");
    dots[currentIndex].classList.add("active");
  }

  function nextSlide() { showSlide(currentIndex + 1); }
  function prevSlide() { showSlide(currentIndex - 1); }

  function startAutoSlide() {
    autoSlide = setInterval(nextSlide, 5000);
  }

  function resetAutoSlide() {
    clearInterval(autoSlide);
    startAutoSlide();
  }

  nextBtn.addEventListener("click", () => { nextSlide(); resetAutoSlide(); });
  prevBtn.addEventListener("click", () => { prevSlide(); resetAutoSlide(); });

  showSlide(currentIndex);
  startAutoSlide();
});




// ==========================
// Conference Carousel
// ==========================
document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.querySelector(".conference-carousel");
  if (!carousel) return;

  const images = carousel.querySelectorAll(".carousel-images img");
  const prevBtn = carousel.querySelector(".carousel-btn.prev");
  const nextBtn = carousel.querySelector(".carousel-btn.next");
  const dotsContainer = carousel.querySelector(".carousel-dots");
  let currentIndex = 0;
  let autoSlide;

  // Create navigation dots
  images.forEach((_, i) => {
    const dot = document.createElement("button");
    if (i === 0) dot.classList.add("active");
    dot.addEventListener("click", () => {
      showSlide(i);
      resetAutoSlide();
    });
    dotsContainer.appendChild(dot);
  });
  const dots = dotsContainer.querySelectorAll("button");

  function showSlide(index) {
    images[currentIndex].classList.remove("active");
    dots[currentIndex].classList.remove("active");
    currentIndex = (index + images.length) % images.length;
    images[currentIndex].classList.add("active");
    dots[currentIndex].classList.add("active");
  }

  function nextSlide() { showSlide(currentIndex + 1); }
  function prevSlide() { showSlide(currentIndex - 1); }

  function startAutoSlide() {
    autoSlide = setInterval(nextSlide, 5000);
  }

  function resetAutoSlide() {
    clearInterval(autoSlide);
    startAutoSlide();
  }

  nextBtn.addEventListener("click", () => { nextSlide(); resetAutoSlide(); });
  prevBtn.addEventListener("click", () => { prevSlide(); resetAutoSlide(); });

  showSlide(currentIndex);
  startAutoSlide();
});
