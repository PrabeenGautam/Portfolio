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
    }
  });
};

const animationObserver = new ObserverCreator(animationRef, animationCallback, {
  threshold: 0.15,
  root: null,
});

const element = document.querySelector(".loader");
window.addEventListener("load", function () {
  setTimeout(
    () => {
      element && element.classList.add("hidden");
      this.document.body.style.overflow = "auto";
      animationObserver.createObserver();
      animationObserver.observeElement();
    },
    element ? 2500 : 200
  );
});
