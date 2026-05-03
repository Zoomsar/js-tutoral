const slides = document.querySelectorAll(".slides img");
let currentSlide = 0;
let interval = null;

initializeSlider();

function initializeSlider() {
    slides[currentSlide].classList.add("active");
    interval = setInterval(nextSlide, 5000);
    
}

function showSlide(index) {
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    }

    slides.forEach(slide => slide.classList.remove("active"));
    slides[index].classList.add("active");
}

function nextSlide() {
    currentSlide++;
    showSlide(currentSlide);
}

function prevSlide() {
    clearInterval(interval);
    currentSlide--;
    showSlide(currentSlide);
}
