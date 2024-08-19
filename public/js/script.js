const nav = document.querySelector("#navList");
const navBtn = document.querySelector("#menuBtn");
const closeNavBtn = document.querySelector("#closeNav");

navBtn.addEventListener("click", toggleNav)
closeNavBtn.addEventListener("click", toggleNav)

function toggleNav() {
    nav.classList.toggle("translate-x-full");
}