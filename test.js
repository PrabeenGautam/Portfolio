const navLinks = document.querySelectorAll("nav ul li a"),
  sections = document.querySelectorAll("main section"),
  preloader = document.querySelector(".preloader");
function toggleFill(elem) {
  let prevSvg = elem.firstElementChild,
    key = elem.classList[0];
  elem.removeChild(prevSvg),
    (elem.innerHTML = filledMap[key] + elem.innerHTML),
    (filledMap[key] = prevSvg.outerHTML);
}
function fillNavLink(elem) {
  let prevActive = document.querySelector("nav ul li a.active"),
    navText = prevActive.children[1];
  prevActive !== elem &&
    (prevActive &&
      (prevActive.classList.remove("active"),
      navText.classList.remove("active"),
      toggleFill(prevActive)),
    elem.classList.add("active"),
    elem.children[1].classList.add("active"),
    toggleFill(elem));
}
filledMap = {
  "home-nav":
    '<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">\n            <g id="Home">\n            <path id="Vector" d="M33.71 17.29L18.71 2.29C18.5226 2.10375 18.2692 1.99921 18.005 1.99921C17.7408 1.99921 17.4874 2.10375 17.3 2.29L2.3 17.29C2.13617 17.4813 2.05056 17.7274 2.06029 17.9791C2.07001 18.2307 2.17434 18.4695 2.35243 18.6476C2.53053 18.8257 2.76927 18.93 3.02094 18.9397C3.27262 18.9494 3.5187 18.8638 3.71 18.7L18 4.41L32.29 18.71C32.4813 18.8738 32.7274 18.9594 32.979 18.9497C33.2307 18.94 33.4695 18.8357 33.6476 18.6576C33.8257 18.4795 33.93 18.2407 33.9397 17.9891C33.9494 17.7374 33.8638 17.4913 33.7 17.3L33.71 17.29Z" fill="black" />\n            <path id="Vector_2" d="M28 32H23V22H13V32H8V18L6 20V32C6 32.5304 6.21071 33.0392 6.58579 33.4142C6.96086 33.7893 7.46957 34 8 34H15V24H21V34H28C28.5304 34 29.0391 33.7893 29.4142 33.4142C29.7893 33.0392 30 32.5304 30 32V19.76L28 17.76V32Z" fill="black" />\n            </g>\n            </svg>',
  "about-nav":
    '<svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">\n            <path id="about-fill" d="M2.375 28.5C2.375 28.5 0 28.5 0 26.125C0 23.75 2.375 16.625 14.25 16.625C26.125 16.625 28.5 23.75 28.5 26.125C28.5 28.5 26.125 28.5 26.125 28.5H2.375ZM14.25 14.25C16.1397 14.25 17.9519 13.4993 19.2881 12.1631C20.6243 10.8269 21.375 9.01467 21.375 7.125C21.375 5.23533 20.6243 3.42306 19.2881 2.08686C17.9519 0.750668 16.1397 0 14.25 0C12.3603 0 10.5481 0.750668 9.21186 2.08686C7.87567 3.42306 7.125 5.23533 7.125 7.125C7.125 9.01467 7.87567 10.8269 9.21186 12.1631C10.5481 13.4993 12.3603 14.25 14.25 14.25Z" fill="black"/>\n            </svg>',
  "projects-nav":
    '<svg width="27" height="36" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 26 35">\n            <g id="projects-fill">\n            <path xmlns="http://www.w3.org/2000/svg" d="M25.4,8.8l-8-8.1c-0.4-0.4-1-0.6-1.5-0.6H4.3C3.2,0,2.1,0.5,1.3,1.3C0.5,2.1,0,3.2,0,4.4v26.2c0,1.2,0.5,2.3,1.3,3.1 C2.1,34.5,3.2,35,4.3,35h17.3c1.2,0,2.3-0.5,3.1-1.3c0.8-0.8,1.3-1.9,1.3-3.1V10.3C26,9.7,25.8,9.2,25.4,8.8z M11.5,25.1 c0.2,0.2,0.3,0.5,0.3,0.8c0,0.3-0.1,0.6-0.3,0.8C11.3,26.9,11,27,10.7,27c-0.3,0-0.6-0.1-0.8-0.3l-4.6-4.4 c-0.1-0.1-0.2-0.2-0.3-0.4C5,21.8,5,21.6,5,21.5s0-0.3,0.1-0.4c0-0.1,0.1-0.3,0.3-0.4l4.6-4.4c0.1-0.1,0.2-0.2,0.4-0.2 c0.1,0,0.3-0.1,0.4-0.1c0.2,0,0.3,0,0.4,0.1c0.1,0.1,0.3,0.1,0.4,0.2c0.1,0.1,0.2,0.2,0.3,0.4s0.1,0.3,0.1,0.4c0,0.2,0,0.3-0.1,0.4 c-0.1,0.1-0.1,0.3-0.3,0.4l-3.8,3.6L11.5,25.1z M20.9,21.9c0,0.1-0.1,0.3-0.3,0.4l-4.6,4.4c-0.2,0.2-0.5,0.3-0.8,0.3 c-0.3,0-0.6-0.1-0.8-0.3c-0.2-0.2-0.3-0.5-0.3-0.8c0-0.3,0.1-0.6,0.3-0.8l3.8-3.6l-3.8-3.6c-0.1-0.1-0.2-0.2-0.3-0.4 c-0.1-0.1-0.1-0.3-0.1-0.4c0-0.1,0-0.3,0.1-0.4s0.1-0.3,0.3-0.4c0.1-0.1,0.2-0.2,0.4-0.2c0.1,0,0.3-0.1,0.4-0.1 c0.2,0,0.3,0,0.4,0.1c0.1,0.1,0.3,0.1,0.4,0.2l4.6,4.4c0.1,0.1,0.2,0.2,0.3,0.4c0.1,0.1,0.1,0.3,0.1,0.4S21,21.8,20.9,21.9z M18.3,10c-0.6,0-1.2-0.3-1.7-0.7c-0.4-0.4-0.7-1-0.7-1.7V3l7,7H18.3z"/>\n            </g>\n            </svg>',
  "contact-nav":
    '<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">\n            <g id="contact-fill">\n            <path id="Vector" d="M32.33 5.99997C32.1937 5.98593 32.0563 5.98593 31.92 5.99997H3.92001C3.74056 6.00274 3.56229 6.02965 3.39001 6.07997L17.84 20.47L32.33 5.99997Z" fill="black"/>\n            <path id="Vector_2" d="M33.81 7.39001L19.25 21.89C18.8753 22.2625 18.3684 22.4716 17.84 22.4716C17.3116 22.4716 16.8047 22.2625 16.43 21.89L1.99999 7.50001C1.95563 7.66306 1.93211 7.83106 1.92999 8.00001V28C1.92999 28.5304 2.14071 29.0392 2.51578 29.4142C2.89085 29.7893 3.39956 30 3.92999 30H31.93C32.4604 30 32.9691 29.7893 33.3442 29.4142C33.7193 29.0392 33.93 28.5304 33.93 28V8.00001C33.922 7.79167 33.8815 7.58585 33.81 7.39001ZM5.29999 28H3.90999V26.57L11.18 19.36L12.59 20.77L5.29999 28ZM31.91 28H30.51L23.22 20.77L24.63 19.36L31.9 26.57L31.91 28Z" fill="black"/>\n            </g>\n            </svg>',
};
for (let i = 0; i < navLinks.length; i++)
  navLinks[i].onclick = function () {
    fillNavLink(this);
  };

class IOCreator {
  observer;
  constructor(callback, options, observees) {
    (this.callback = callback),
      (this.options = options),
      (this.observees = observees);
  }
  createIO() {
    this.observer ||
      (this.observer = new IntersectionObserver(this.callback, this.options));
  }
  observe() {
    this.observer && this.observees.length > 1
      ? this.observees.forEach((observee) => {
          this.observer.observe(observee);
        })
      : this.observer.observe(this.observees);
  }
  unobserve() {
    this.observer && this.observees.length > 1
      ? this.observees.forEach((observee) => {
          this.observer.unobserve(observee);
        })
      : this.observer.unobserve(this.observees);
  }
  disconnect() {
    this.observer && this.observer.disconnect();
  }
}

const sectionOptions = { root: null, threshold: 0.1, rootMargin: "-100px" },
  sectionObserverCallback = (entries) => {
    entries.forEach((entry) => {
      entry.isIntersecting && fillNavLink(navLinks[entry.target.dataset.num]);
    });
  },
  sectionObserver = new IOCreator(
    sectionObserverCallback,
    sectionOptions,
    sections
  );
sectionObserver.createIO(), sectionObserver.observe();

const animatedElements = document.querySelectorAll(".animation-on");
animatedElements.forEach((elem) => {
  elem.classList.add("pre-animation");
  let delay = elem.dataset.delay;
  elem.style.transitionDelay = delay + "ms";
});

const animationObserverOptions = { root: null, threshold: 0.45 },
  animationObserverCallback = (entries) => {
    entries.forEach((entry) => {
      entry.isIntersecting && entry.target.classList.add("inview");
    });
  },
  animationObserver = new IOCreator(
    animationObserverCallback,
    animationObserverOptions,
    animatedElements
  );
function loadPreloader() {
  setTimeout(() => {
    preloader.classList.add("hide"),
      animationObserver.createIO(),
      animationObserver.observe();
  }, 3500);
}
window.addEventListener("load", loadPreloader);
