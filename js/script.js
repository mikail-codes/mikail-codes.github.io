let Main = document.getElementById("main");
let Portfolio = document.getElementById("portfolio");
let About = document.getElementById("about");
let menuMain = document.getElementById("menu-main");
let menuPortfolio = document.getElementById("menu-portfolio");
let menuAbout = document.getElementById("menu-about");

function main() {
	Main.classList.add("active");
	Portfolio.classList.remove("active");
	About.classList.remove("active");
	menuMain.classList.add("yellow");
	menuPortfolio.classList.remove("yellow");
	menuAbout.classList.remove("yellow");
}

function portfolio() {
	Main.classList.remove("active");
	Portfolio.classList.add("active");
	About.classList.remove("active");
	menuMain.classList.remove("yellow");
	menuPortfolio.classList.add("yellow");
	menuAbout.classList.remove("yellow");
}

function about() {
	Main.classList.remove("active");
	Portfolio.classList.remove("active");
	About.classList.add("active");
	menuMain.classList.remove("yellow");
	menuPortfolio.classList.remove("yellow");
	menuAbout.classList.add("yellow");
}