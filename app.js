let slideIndex = 0;
const slides = document.querySelectorAll('.slides img');
const totalSlides = slides.length;

function showSlides() {
    slides.forEach((slide) => {
        slide.style.transform = `translateX(-${slideIndex * 80}%)`;
    });
}

function plusSlides(n) {
    slideIndex = (slideIndex + n + totalSlides) % totalSlides;
    showSlides();
}

let slideInterval = setInterval(() => {
    plusSlides(1);
}, 2000);

const prevButton = document.querySelector('.prevBtn');
const nextButton = document.querySelector('.nextBtn');

prevButton.addEventListener('click', () => {
    clearInterval(slideInterval);
    slideInterval = setInterval(() => {
        plusSlides(1);
    }, 2000);
});

nextButton.addEventListener('click', () => {
    clearInterval(slideInterval);
    slideInterval = setInterval(() => {
        plusSlides(1);
    }, 2000);
});
