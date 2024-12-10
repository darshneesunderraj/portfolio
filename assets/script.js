'use strict';

// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }

// filter variables
const filterButtons = document.querySelectorAll("[data-filter-btn]");
const projectItems = document.querySelectorAll("[data-filter-item]");

// Add event listener to each filter button
filterButtons.forEach(button => {
  button.addEventListener("click", function() {
    // Remove 'active' class from all buttons
    filterButtons.forEach(btn => btn.classList.remove("active"));
    // Add 'active' class to the clicked button
    this.classList.add("active");

    // Get the category to filter
    const category = this.textContent.trim().toLowerCase();

    // Filter project items based on the selected category
    projectItems.forEach(item => {
      const itemCategory = item.getAttribute("data-category").toLowerCase();
      if (category === "all" || category === itemCategory) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
});
