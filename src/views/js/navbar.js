const navbarToggler = document.querySelector(".navbar-toggler");
const navbarMenu = document.querySelector(".navbar__menu");
const navbarSubmenu = document.querySelector(".submenu")

navbarToggler.addEventListener("click", () => {
  navbarMenu.classList.toggle("show-menu");
});

document.addEventListener("scroll", () => {
  navbarMenu.classList.remove("show-menu");
});
