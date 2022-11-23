const toggleButtons = document.querySelector(".toggle-buttons");
const tabsButton = document.querySelectorAll(".tabs");
const tabsContent = document.querySelectorAll(".tab-content");
const scrollUp = document.querySelector(".scroll-up");
const themeSwitcher = document.querySelector(".theme-switcher");
const headerSections = document.querySelector(".header");
const projectItems = document.querySelectorAll(".project-item");

const navContainer = document.querySelector(".nav_links");

const sectionCounter = document.querySelectorAll(".section-ref");
const sideNavLinks = document.querySelectorAll(".nav-menu li");
const sideNavContainer = document.querySelector(".nav-menu");

const statusContainer = document.querySelector(".status-container");
const statusFill = document.querySelector(".status-fill");

navContainer.addEventListener("click", function (e) {
  e.preventDefault();
  const element = e.target.closest(".nav_items");
  if (!element) return;
  const href = element.querySelector("a").getAttribute("href");
  const section = document.querySelector(href);
  section.scrollIntoView({ behavior: "smooth" });
});

toggleButtons &&
  toggleButtons.addEventListener("click", function (e) {
    if (!e.target.closest(".tabs")) return;
    tabsButton.forEach((tab) => tab.classList.remove("tab-active"));
    tabsContent.forEach((tab) => tab.classList.remove("tab-content-active"));

    e.target.classList.add("tab-active");

    document
      .querySelector(`.tab-content-${e.target.dataset.tab}`)
      .classList.add("tab-content-active");
  });
if (headerSections) {
  const headerObserver = new ObserverCreator(
    headerSections,
    (entries) => {
      entries.forEach((entry) => {
        scrollUp.classList.toggle("show", !entry.isIntersecting);
        sideNavContainer
          .closest(".side-navbar")
          .classList.toggle("show", !entry.isIntersecting);
      });
    },
    { threshold: 0.2 }
  );
  headerObserver.createObserver();
  headerObserver.observeElement();
}

scrollUp.addEventListener("click", function (e) {
  window.scrollTo(0, 0);
});

const sunSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-sun" viewBox="0 0 16 16">
  <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/>
</svg>`;

const moonSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-moon-stars" viewBox="0 0 16 16">
  <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278zM4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z"/>
  <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z"/>
</svg>`;

const themeLocal = localStorage.getItem("theme");
if (themeLocal) {
  if (themeLocal === "light") {
    document.body.classList.remove("dark");
    document.body.classList.add("light");
    themeSwitcher.innerHTML = moonSVG;
    themeSwitcher.setAttribute("title", "Light Theme");
  } else {
    document.body.classList.remove("light");
    document.body.classList.add("dark");
    themeSwitcher.innerHTML = sunSVG;
    themeSwitcher.setAttribute("title", "Dark Theme");
  }
} else {
  themeSwitcher.innerHTML = sunSVG;
}

themeSwitcher.addEventListener("click", function (e) {
  if (document.body.classList.contains("dark")) {
    document.body.classList.remove("dark");
    document.body.classList.add("light");
    themeSwitcher.innerHTML = moonSVG;
    themeSwitcher.setAttribute("title", "Light Theme");
    localStorage.setItem("theme", "light");
    return;
  }

  if (document.body.classList.contains("light")) {
    document.body.classList.remove("light");
    document.body.classList.add("dark");
    themeSwitcher.innerHTML = sunSVG;
    themeSwitcher.setAttribute("title", "Dark Theme");
    localStorage.setItem("theme", "dark");
    return;
  }
});

sideNavContainer &&
  sideNavContainer.addEventListener("click", function (e) {
    e.preventDefault();
    if (!e.target.closest("li")) return;
    sideNavLinks.forEach((link) => link.classList.remove("active"));
    e.target.closest("li").classList.add("active");
    const id = e.target.closest("li").querySelector("a").getAttribute("href");
    const section = Array.from(sectionCounter).find((element) =>
      id.includes(element.id)
    );
    section.scrollIntoView({ behavior: "smooth" });
  });

sectionCounter &&
  window.addEventListener("scroll", function (e) {
    checkSideActivation(e);
  });

function checkSideActivation(e) {
  let scrollTop = this.window.scrollY;
  sectionCounter.forEach((section) => {
    const id = section.getAttribute("id");
    const offset = section.offsetTop - 60;
    const height = Number.parseFloat(
      this.window.getComputedStyle(section).getPropertyValue("height")
    );

    if (scrollTop >= offset && scrollTop < offset + height) {
      sideNavLinks.forEach((link) => link.classList.remove("active"));
      const link = this.document.querySelector(`[data-scroll='${id}']`);
      link && link.closest("li").classList.add("active");
    }
  });
}
