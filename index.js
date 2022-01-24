let menuButton = document.querySelector(".mobile_menu_btn");
let mobileMenu = document.querySelector(".mobile_menu");
const menuLinks = document.querySelector(".menu_link");
let remButton = document.querySelector(".fa-times");
// transition style

mobileMenu.style.right = "-800px";
mobileMenu.style.transition = "right 800ms";

// listen for a click on the menu button and X button
menuButton.addEventListener("click", (e) => {
  e.target.style.display = "none";
  mobileMenu.style.display = "block";
  setTimeout(() => {
    mobileMenu.style.right = "0px";
  }, 1);
});

remButton.addEventListener("click", (e) => {
  mobileMenu.style.right = "-800px";
  setTimeout(() => {
    mobileMenu.style.display = "none";
  }, 900);
  menuButton.style.display = "block";
});

menuLinks.addEventListener("click", (e) => {
  e.target.style.right = "-800px";
  setTimeout(() => {
    mobileMenu.style.display = "none";
  }, 900);
  menuButton.style.display = "block";
});
