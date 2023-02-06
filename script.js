const ham = document.querySelector(".hamburger");
const menulinks = document.querySelector(".nav-links");

ham.addEventListener("click", () => {
    ham.classList.toggle("active");
    menulinks.classList.toggle("active");
})


//document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
//ham.classList.remove("active");
  menulinks.classList.remove("active");
//}))











