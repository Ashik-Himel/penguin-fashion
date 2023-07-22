const toggler = document.querySelector("header nav .fa-bars");
const navClose = document.querySelector("header nav .fa-xmark");
const navMenu = document.querySelector("header nav ul");
const navLinks = document.querySelectorAll("header nav ul a");

toggler.addEventListener("click", ()=> {
  navMenu.classList.remove("-right-full");
  navMenu.classList.add("right-0");
})
navClose.addEventListener("click", ()=> {
  navMenu.classList.add("-right-full");
  navMenu.classList.remove("right-0");
})
navLinks.forEach(n => n.addEventListener("click", ()=> {
  navMenu.classList.add("-right-full");
  navMenu.classList.remove("right-0");
}))