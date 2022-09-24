const head = document.getElementById("header");
console.log(head);
const menu = document.getElementById("menu_bar");
const nav_menu = document.getElementById("nav_menu");

window.addEventListener("scroll", () => {
  head.classList.toggle("active", scrollY > 0);
});

menu.addEventListener("click", () => {
  menu.classList.toggle("fa-times");
  nav_menu.classList.toggle("menu_active");
});

window.addEventListener("scroll", () => {
  menu.classList.remove("fa-times");
  nav_menu.classList.remove("menu_active");
});

// window.addEventListener("scroll", () => {
//   menu.classList.remove("fa-times");
//   nav_menu.classList.remove("menu_active");
// });
