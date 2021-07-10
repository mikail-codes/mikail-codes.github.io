var element = document.getElementById("mobile-menu");
var overlay = document.getElementById("overlay");

function active() {
	element.classList.toggle("mobile-menu-active");
	overlay.classList.toggle("absolute");
}

function deactive() {
	element.classList.remove("mobile-menu-active");
	overlay.classList.remove("absolute");
}