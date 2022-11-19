class ObserverCreator {
  observer;
  constructor(elements, callbackFunc, options) {
    this.callbackFunc = callbackFunc;
    this.options = options;
    this.elements = elements;
  }

  createObserver() {
    this.observer ||
      (this.observer = new IntersectionObserver(
        this.callbackFunc,
        this.options
      ));
  }

  observeElement() {
    this.elements &&
      this.elements.forEach((element) => {
        this.observer.observe(element);
      });
  }

  unobserveElement() {
    this.elements &&
      this.elements.forEach((element) => {
        this.observer.unobserve(element);
      });
  }
}
