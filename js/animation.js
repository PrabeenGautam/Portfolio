const navItems = document.querySelectorAll(".navitems");
const animationRef = document.querySelectorAll(".has_animation");

animationRef.forEach((element) => {
  element.classList.add("prefetch");
  element.dataset.delay &&
    (element.style.transitionDelay = element.dataset.delay + "s");
});

const animationCallback = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("viewfetch");
      entry.target.matches(".prefetch") &&
        entry.target.classList.remove("prefetch");
      animationObserver.unobserveElement(entry.target);
    }
  });
};

const animationObserver = new ObserverCreator(animationRef, animationCallback, {
  threshold: 0.5,
  root: null,
});

window.addEventListener("load", function () {
  setTimeout(() => {
    const element = this.document.querySelector(".loader");
    element && element.classList.add("hidden");
    this.document.body.style.overflow = "auto";
    animationObserver.createObserver();
    animationObserver.observeElement();
  }, 4000);
});
