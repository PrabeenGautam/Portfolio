var iso = new Isotope(".grid", {
  itemSelector: ".project-item",
  percentPosition: true,
  masonry: {
    columnWidth: ".project-item",
  },
});

// filter functions
var filterFns = {
  // show if name ends with -ium
  ium: function (itemElem) {
    var name = itemElem.querySelector(".name").textContent;
    return name.match(/ium$/);
  },
};

// bind filter button click
var filtersElem = document.querySelector(".filters-button-group");
filtersElem.addEventListener("click", function (event) {
  if (!matchesSelector(event.target, ".filter-list")) return;
  var filterValue = event.target.getAttribute("data-filter");
  filterValue = filterFns[filterValue] || filterValue;
  iso.arrange({ filter: filterValue });
});

// change active class on list
var filterGroups = document.querySelector(".filter-group");
radioButtonGroup(filterGroups);

function radioButtonGroup(filterGroup) {
  filterGroup.addEventListener("click", function (event) {
    if (!matchesSelector(event.target, ".filter-list")) return;
    filterGroup.querySelector(".active").classList.remove("active");
    event.target.classList.add("active");
  });
}
