// script.js
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
let currentIndex = 0;

function moveToSlide(index) {
  if (index < 0) index = slides.length - 1;
  if (index >= slides.length) index = 0;

  const translateX = -index * 100;
  slider.style.transform = `translateX(${translateX}%)`;
  currentIndex = index;
}

function nextSlide() {
  moveToSlide(currentIndex + 1);
}

function prevSlide() {
  moveToSlide(currentIndex - 1);
}

setInterval(nextSlide, 5000); // Auto slide change every 5 seconds

// Add event listeners for next and previous buttons if needed
// nextButton.addEventListener('click', nextSlide);
// prevButton.addEventListener('click', prevSlide);
