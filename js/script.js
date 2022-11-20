const toggleButtons = document.querySelector(".toggle-buttons");
const tabsButton = document.querySelectorAll(".tabs");
const tabsContent = document.querySelectorAll(".tab-content");

toggleButtons.addEventListener("click", function (e) {
  if (!e.target.closest(".tabs")) return;
  tabsButton.forEach((tab) => tab.classList.remove("tab-active"));
  tabsContent.forEach((tab) => tab.classList.remove("tab-content-active"));

  e.target.classList.add("tab-active");

  document
    .querySelector(`.tab-content-${e.target.dataset.tab}`)
    .classList.add("tab-content-active");
});
