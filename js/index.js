const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');
const myImage = document.querySelector('.my-image');
// const projects = document.querySelector(".projects");
// const contact = document.querySelector(".contact");

// got to top button
const scrollUpBtn = document.querySelector(".scrollUpBtn");
// call the scroll function on scroll
window.onscroll = () => { scrollFunction() };
// show button on 50px scroll
function scrollFunction(){
    if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
        scrollUpBtn.style.display = "block";
    }else {
        scrollUpBtn.style.display = "none";
    }
}

// page to go on top if button is clicked
function topFunction(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
scrollUpBtn.addEventListener('click', topFunction);

// adds animations
function toggleAnimation() {
    navLinks.classList.toggle("open");

    links.forEach(link => {
        link.classList.toggle("fade");
    })
}

// adds style for nav after hamburger is clicked
// function addStyleOnClick(){}

hamburger.addEventListener("click", () => {
    toggleAnimation();
    // addStyleOnClick();
})

// function changeBgColors(screenSize){
//     if(screenSize.matches){
//         projects.style.backgroundColor = "#17b978";
//         projects.style.color = "#086972";

//         contact.style.backgroundColor = "#a7ff83";
//         contact.style.color = "#086972";
//     }
// }
// let screen = window.matchMedia("(max-width: 768px)");
// changeBgColors(screen);
// screen.addEventListener(changeBgColors);