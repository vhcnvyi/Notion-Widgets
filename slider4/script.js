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

document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll(".slide");
    const dotsContainer = document.querySelector(".carousel-dots");
    let currentIndex = 0;

    // Function to create the dots
    function createDots() {
        slides.forEach((_, index) => {
            const dot = document.createElement('div');
            dot.classList.add('dot');
            dot.addEventListener('click', () => {
                currentIndex = index;
                updateSlides();
            });
            dotsContainer.appendChild(dot);
        });
    }

    // Function to update the slides and dots
    function updateSlides() {
        slides.forEach((slide, index) => {
            slide.classList.toggle('current', index === currentIndex);
        });

        const dots = dotsContainer.querySelectorAll('.dot');
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }

    // Initialize the dots and set the first slide to be active
    createDots();
    updateSlides();
});
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const carouselElement = document.querySelector('.carousel');
  new Carousel(carouselElement);
});
