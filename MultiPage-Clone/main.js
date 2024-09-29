const burgerr = document.querySelector('.navimage');
const nav = document.querySelector('.nav-links');

burgerr.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
    burgerr.classList.toggle('toggle');
});