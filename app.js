const navToggle = document.querySelector(".nav-toggle");
const hamburger = document.querySelector(".hamburger")
navToggle.addEventListener("click",()=>{
    document.body.classList.toggle("nav-open");
    hamburger.classList.toggle("nav")
})