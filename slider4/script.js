document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll(".slide");
    const nextSlide = () => {
        const current = document.querySelector(".current");
        current.classList.remove("current");
        if (current.nextElementSibling && current.nextElementSibling.classList.contains("slide")) {
            current.nextElementSibling.classList.add("current");
        } else {
            slides[0].classList.add("current");
        }
    };

    const prevSlide = () => {
        const current = document.querySelector(".current");
        current.classList.remove("current");
        if (current.previousElementSibling && current.previousElementSibling.classList.contains("slide")) {
            current.previousElementSibling.classList.add("current");
        } else {
            slides[slides.length - 1].classList.add("current");
        }
    };

    document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".slide");
    const dotsContainer = document.querySelector(".dots");
    let currentIndex = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove("current");
            slide.style.opacity = "0";
        });
        
        slides[index].classList.add("current");
        slides[index].style.opacity = "1";

        const dots = document.querySelectorAll(".dot");
        dots.forEach(dot => dot.classList.remove("active"));
        dots[index].classList.add("active");
    }

    slides.forEach((_, index) => {
        const dot = document.createElement("div");
        dot.classList.add("dot");
        dot.addEventListener("click", () => {
            currentIndex = index;
            showSlide(currentIndex);
        });
        dotsContainer.appendChild(dot);
    });
    showSlide(currentIndex);
});
});
