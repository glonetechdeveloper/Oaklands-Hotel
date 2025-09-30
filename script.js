

// Navbar scroll effect
window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Hero slideshow
let currentSlide = 0;
function showSlides() {
  const slides = document.querySelectorAll(
    window.innerWidth <= 768 ? ".portrait .bw-slide" : ".landscape .bw-slide"
  );
  slides.forEach(slide => slide.classList.remove("active"));
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add("active");
}
setInterval(showSlides, 5000);

// Sidebar toggle
const hamburger = document.getElementById("hamburger");
const sidebar = document.getElementById("sidebar");
const closeSidebar = document.getElementById("closeSidebar");

hamburger.addEventListener("click", () => {
  sidebar.classList.add("active");
});

closeSidebar.addEventListener("click", () => {
  sidebar.classList.remove("active");
});



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





// Wellness image slider
const wellnessSlides = document.querySelectorAll('.image-slider img');
let wellnessIndex = 0;

function changeWellnessSlide() {
  wellnessSlides[wellnessIndex].classList.remove('active');
  wellnessIndex = (wellnessIndex + 1) % wellnessSlides.length;
  wellnessSlides[wellnessIndex].classList.add('active');
}

setInterval(changeWellnessSlide, 5000); // every 5 seconds






// News carousel
const newsSlides = document.querySelectorAll('.news-slide');
const prevBtn = document.querySelector('.news-prev');
const nextBtn = document.querySelector('.news-next');
let newsIndex = 0;
let newsTimer;

// Show slide
function showNewsSlide(index) {
  newsSlides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === index) {
      slide.classList.add('active');
    }
  });
}

// Next slide
function nextNewsSlide() {
  newsIndex = (newsIndex + 1) % newsSlides.length;
  showNewsSlide(newsIndex);
}

// Prev slide
function prevNewsSlide() {
  newsIndex = (newsIndex - 1 + newsSlides.length) % newsSlides.length;
  showNewsSlide(newsIndex);
}

// Auto play
function startNewsAuto() {
  newsTimer = setInterval(nextNewsSlide, 6000);
}

// Event listeners
nextBtn.addEventListener('click', () => {
  nextNewsSlide();
  clearInterval(newsTimer);
  startNewsAuto();
});

prevBtn.addEventListener('click', () => {
  prevNewsSlide();
  clearInterval(newsTimer);
  startNewsAuto();
});

// Init
showNewsSlide(newsIndex);
startNewsAuto();





// ==========================
// Diner & Bar Carousel
// ==========================
document.addEventListener("DOMContentLoaded", () => {
  const dinerCarousel = document.querySelector('.diner-bar-carousel');

  if (dinerCarousel) {
    const images = dinerCarousel.querySelectorAll('.carousel-images img');
    const prevBtn = dinerCarousel.querySelector('.carousel-btn.prev');
    const nextBtn = dinerCarousel.querySelector('.carousel-btn.next');
    let currentIndex = 0;
    let autoSlide;

    // Show slide by index
    function showSlide(index) {
      images.forEach(img => img.classList.remove('active'));
      currentIndex = (index + images.length) % images.length;
      images[currentIndex].classList.add('active');
    }

    // Manual controls
    prevBtn.addEventListener('click', () => {
      showSlide(currentIndex - 1);
      resetAutoSlide();
    });

    nextBtn.addEventListener('click', () => {
      showSlide(currentIndex + 1);
      resetAutoSlide();
    });

    // Auto slide every 5 seconds
    function startAutoSlide() {
      autoSlide = setInterval(() => {
        showSlide(currentIndex + 1);
      }, 5000);
    }

    function resetAutoSlide() {
      clearInterval(autoSlide);
      startAutoSlide();
    }

    // Initialize
    showSlide(currentIndex); // make sure first image shows
    startAutoSlide();
  }
});






