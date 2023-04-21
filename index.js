const carousel = document.querySelector('.carousel');
const container = document.querySelector('.carousel-container');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let slideIndex = 0;
const slideWidth = carousel.clientWidth;
const slides = container.querySelectorAll('img');
const totalSlides = slides.length;

container.style.width = `${slideWidth * totalSlides}px`;

prevBtn.addEventListener('click', () => {
  slideIndex--;
  if (slideIndex < 0) {
    slideIndex = totalSlides - 1;
  }
  container.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
});

nextBtn.addEventListener('click', () => {
  slideIndex++;
  if (slideIndex > totalSlides - 1) {
    slideIndex = 0;
  }
  container.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
});