const toggler = document.querySelector("header nav .fa-bars");
const navClose = document.querySelector("header nav .fa-xmark");
const navMenu = document.querySelector("header nav ul");
const navLinks = document.querySelectorAll("header nav ul a");

toggler.addEventListener("click", ()=> {
  navMenu.classList.remove("hidden");
  navMenu.classList.add("flex");
})
navClose.addEventListener("click", ()=> {
  navMenu.classList.add("hidden");
  navMenu.classList.remove("flex");
})
navLinks.forEach(n => n.addEventListener("click", ()=> {
  navMenu.classList.add("hidden");
  navMenu.classList.remove("flex");
}))