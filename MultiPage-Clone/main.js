const burgerr = document.querySelector(".navimage");
const nav = document.querySelector(".nav-links");
const body = document.querySelector("body");

burgerr.addEventListener("click", () => {
  nav.classList.toggle("nav-active");
  burgerr.classList.toggle("toggle");

  if (nav.classList.contains("nav-active")) {
    body.style.overflow = "hidden";
  } else {
    body.style.overflow = "auto";
  }
});
