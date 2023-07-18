// Show aside
const body = document.querySelector("body");
const header = document.querySelector(".header");
const navbarToggle = document.querySelector(".navbar-toggle");
const nav = document.querySelector(".aside");

navbarToggle.onclick = function(){
  body.classList.toggle("no-scroll");
  header.classList.toggle("bb");
  navbarToggle.classList.toggle("active");
  nav.classList.toggle("open");
}