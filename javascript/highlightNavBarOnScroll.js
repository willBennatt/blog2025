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
