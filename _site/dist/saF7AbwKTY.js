/* Responsive navbar hamburger menu for mobile screens */

let navbarButton = document.getElementById("navbar-hamburger-button");
navbarButton.addEventListener("click", function () {
	var navMenu = document.getElementById("navbar-hamburger");
	if (navMenu.style.display === "block") {
		navMenu.style.display = "none";
	} else {
		navMenu.style.display = "block";
	}
});
/* Post filtering by tag */

filterSelection("All");

function filterSelection(type) {
	let filterables = document.getElementsByClassName("filterable");
	for (let i = 0; i < filterables.length; i++) {
		let element = filterables[i];
		if (type == "All" || element.classList.contains(type)) {
			element.style.display = "block";
		} else {
			element.style.display = "none";
		}
	}
}

var btnContainer = document.getElementById("filterBtnContainer");
var btns = btnContainer.getElementsByClassName("filterBtn");
for (var i = 0; i < btns.length; i++) {
	// Add active class to the current control button (highlight it)
	btns[i].addEventListener("click", function () {
		let current = document.getElementsByClassName("active-btn");
		current[0].classList.replace("active-btn", "inactive-btn");
		this.classList.replace("inactive-btn", "active-btn");
	});
	// Filter posts by the tag in the current button
	btns[i].addEventListener("click", function (e) {
		let tag = e.target.textContent.trim();
		filterSelection(tag);
	});
}