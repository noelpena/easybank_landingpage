const mobileMenu = document.getElementById("mobile__nav__icon");
const hero = document.getElementById("hero");

mobileMenu.addEventListener("click", (e) => {
	let imgSrc = mobileMenu.children[0].src;
	if (imgSrc.includes("icon-hamburger")) {
		mobileMenu.children[0].src = "/images/icon-close.svg";
		hero.classList.add("set__overlay");
	} else if (imgSrc.includes("icon-close")) {
		mobileMenu.children[0].src = "/images/icon-hamburger.svg";
		hero.classList.remove("set__overlay");
	}
});
