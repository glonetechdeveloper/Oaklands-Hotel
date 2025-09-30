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
