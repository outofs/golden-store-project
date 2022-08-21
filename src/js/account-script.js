const navList = document.querySelector(".nav__list");
const menuBtn = document.querySelector(".menu-icon");
const loginForm = document.querySelector(".login-form");
const registerForm = document.querySelector(".register-form");
const indicator = document.querySelector(".indicator");
const loginBtn = document.querySelector(".loginBtn");
const registerBtn = document.querySelector(".registerBtn");

///Toggle Menu
menuBtn.addEventListener("click", function (e) {
  navList.classList.toggle("hidden");
});

///Toggle Form

registerBtn.addEventListener("click", function (e) {
  registerForm.style.transform = "translateX(0px)";
  loginForm.style.transform = "translateX(0px)";
  indicator.style.transform = "translateX(100px)";
});

loginBtn.addEventListener("click", function (e) {
  registerForm.style.transform = "translateX(300px)";
  loginForm.style.transform = "translateX(300px)";
  indicator.style.transform = "translateX(0px)";
});
