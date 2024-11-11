class Carousel {
  constructor(element) {
    this.carousel = element;
    this.slides = Array.from(this.carousel.querySelectorAll('.carousel-slide'));
    this.dotsContainer = this.carousel.querySelector('.carousel-dots');
    this.currentIndex = 0;

    // Create dots
    this.createDots();

    // Add event listeners
    this.carousel.querySelector('.prev').addEventListener('click', (e) => {
      e.stopPropagation();
      this.prev();
    });
    this.carousel.querySelector('.next').addEventListener('click', (e) => {
      e.stopPropagation();
      this.next();
    });

    // Initial display
    this.updateSlides();
  }

  createDots() {
    this.slides.forEach((_, index) => {
      const dot = document.createElement('div');
      dot.classList.add('dot');
      dot.addEventListener('click', (e) => {
        e.stopPropagation();
        this.goToSlide(index);
      });
      this.dotsContainer.appendChild(dot);
    });
  }

  updateSlides() {
    this.slides.forEach((slide, index) => {
      slide.classList.toggle('active', index === this.currentIndex);
    });

    const dots = this.dotsContainer.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
      dot.classList.toggle('active', index === this.currentIndex);
    });
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
    this.updateSlides();
  }

  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
    this.updateSlides();
  }

  goToSlide(index) {
    this.currentIndex = index;
    this.updateSlides();
  }
}

// Initialize the carousel
document.addEventListener('DOMContentLoaded', () => {
  const carouselElement = document.querySelector('.carousel');
  new Carousel(carouselElement);
});
