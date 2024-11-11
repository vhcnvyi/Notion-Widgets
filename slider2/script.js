document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll(".slide");
    const nextButton = document.getElementById("next");
    const prevButton = document.getElementById("prev");

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

    // Only add click event listeners, no auto-sliding
    nextButton.addEventListener("click", nextSlide);
    prevButton.addEventListener("click", prevSlide);
});

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentIndex = index;
            showSlide(currentIndex);
        });
    });

    showSlide(currentIndex);
});
