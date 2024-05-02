// ----------image slider---------------------------

let slideIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.transform = `translateX(-${index * 100}%)`;
  });
}

function prevSlide() {
  slideIndex = (slideIndex - 1 + slides.length) % slides.length;
  showSlide(slideIndex);
}

function nextSlide() {
  slideIndex = (slideIndex + 1) % slides.length;
  showSlide(slideIndex); 
}

showSlide(slideIndex);


const intervalTime = 5000; 

function autoSlide() {
  nextSlide();
}

setInterval(autoSlide, intervalTime);



 

