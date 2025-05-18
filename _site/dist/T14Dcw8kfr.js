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