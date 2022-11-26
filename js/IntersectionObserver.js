class SliderCreator {
  currentSlide = 0;
  constructor(element, dotElement) {
    this.element = element;
    this.dotElement = dotElement;
    this.nextBtn = nextBtn;
    this.prevBtn = prevBtn;
  }

  set CurrentSlide(index) {
    this.currentSlide = index;
  }

  dotCreator() {
    let html = "";
    for (let i = 0; i < this.element.length; i++) {
      html += `<div class="dot" data-dot='${i}'></div>`;
    }
    this.dotElement.insertAdjacentHTML("afterbegin", html);
  }

  goToSlide() {
    this.element.forEach(
      (slide, index) =>
        (slide.style.transform = `translateX(${
          (index - this.currentSlide) * 100
        }%)`)
    );

    const dotSlide = document.querySelectorAll(".dot");
    const element = dotSlide[this.currentSlide];
    dotSlide.forEach((dot) => dot.classList.remove("active"));
    element.classList.add("active");
  }

  prevSlide() {
    if (this.currentSlide === 0) this.currentSlide = this.element.length - 1;
    else this.currentSlide--;
    this.goToSlide(this.currentSlide);
  }

  nextSlide() {
    if (this.currentSlide === this.element.length - 1) this.currentSlide = 0;
    else this.currentSlide++;
    this.goToSlide(this.currentSlide);
  }
}

/* Scripts */
