/* Responsive navbar hamburger menu for mobile screens */

function toggleMenu() {
	var navMenu = document.getElementById("navbar-hamburger");
	if (navMenu.style.display === "block") {
		navMenu.style.display = "none";
	} else {
		navMenu.style.display = "block";
	}
}
