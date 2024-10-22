<script src="vogue.html"></script>
let slideIndex = 0;

function showSlides() {
    const slides = document.querySelectorAll(".carousel-slide");
    slides.forEach((slide, index) => {
        slide.style.display = index === slideIndex ? "block" : "none";
    });
}

function moveSlide(n) {
    const slides = document.querySelectorAll(".carousel-slide");
    slideIndex = (slideIndex + n + slides.length) % slides.length;
    showSlides();
}

document.addEventListener("DOMContentLoaded", () => {
    showSlides();
    // Cambia de slide automáticamente cada 5 segundos
    setInterval(() => moveSlide(1), 5000);
});
