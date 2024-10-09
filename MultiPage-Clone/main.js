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

function openPage(buttonId){
  if(buttonId === 'btn-resume'){
    window.location.href = "resume.html";
  }else if(buttonId === 'btn-project'){
    window.location.href ='project.html'
  }
}