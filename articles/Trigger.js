const drawer = document.querySelector(".drawer");
const chevron = document.querySelector(".chevron");
const header = document.querySelector("header");
const navWrapper = document.querySelector(".navWrapper");
var tocWrapper = document.querySelector(".tocWrapper");
var x = window.matchMedia("(min-width: 1200px)");


// Drawer button opens Table of Contents

drawer.addEventListener("click", () => {
	if (drawer.classList.contains("isOpen")) {
		drawer.classList.remove("isOpen");
	}

	else {
		drawer.classList.add("isOpen");
	}
});

tocWrapper.addEventListener("click", () => {
	drawer.classList.remove("isOpen");
});

document.addEventListener("keydown", (e) => {
	if (e.key == "Escape" && drawer.classList.contains("isOpen")) {
		drawer.click();
	}
});


// To-top button appears on scroll

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
	if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
		chevron.classList.add("show");
	}

	else {
		chevron.classList.remove("show");
	}
};


// Displace List of Contents at window size change

function setParent(x, tocWrapper) {
	if (x.matches) {
		header.appendChild(tocWrapper);
	}

	else {
		navWrapper.appendChild(tocWrapper);
	}
};

x.addEventListener("change", function() {
	setParent(x, tocWrapper);
});

setParent(x, tocWrapper);


// Scrollspy

document.addEventListener('DOMContentLoaded', function(){

	const sections = document.querySelectorAll("h2");
	const links = document.querySelectorAll(".toc a");
	const makeActive = (link) => links[link].classList.add("active");
	const removeActive = (link) => links[link].classList.remove("active");
	const removeAllActive = () => [...Array(sections.length).keys()].forEach((link) => removeActive(link));
	const sectionMargin = 200;
	let currentActive = 0;

	window.addEventListener("scroll", () => {
    
	    const current = sections.length - [...sections].reverse().findIndex((section) => window.scrollY >= section.offsetTop - sectionMargin ) - 1

		if (current !== currentActive) {
			removeAllActive();
			currentActive = current;
			makeActive(current);
		}
	});
}, false);