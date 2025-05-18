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
/*
This script watches the scroll and underlines the current section in the nav bar. 
Only needed on the index page
*/
const sections = document.querySelectorAll("section");
const navA = document.querySelectorAll("nav #navbar-hamburger ul li a");
window.onscroll = () => {
	var current = "";

	sections.forEach((section) => {
		const sectionTop = section.offsetTop;
		if (pageYOffset >= sectionTop - 60) {
			current = section.getAttribute("id");
		}
	});

	navA.forEach((a) => {
		const href = a.getAttribute("href");
		if (href.includes(current)) {
			if (!a.classList.contains("underline")) {
				a.classList.add("underline");
			}
		} else {
			a.classList.remove("underline");
		}
	});
};
/*
Reveal animation for each content section.
Learned from the youtube tutorial - by Coding Snow - https://www.youtube.com/watch?v=VplDlwLTR50
*/
window.addEventListener("scroll", reveal);

function reveal() {
	var reveals = document.querySelectorAll(".reveal");

	for (var i = 0; i < reveals.length; i++) {
		var windowheight = window.innerHeight;
		var revealtop = reveals[i].getBoundingClientRect().top;
		var revealpoint = 150;

		if (revealtop < windowheight - revealpoint) {
			reveals[i].classList.add("active");
		} else {
			reveals[i].classList.remove("active");
		}
	}
}