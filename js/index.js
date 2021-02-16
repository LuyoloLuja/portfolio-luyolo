const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');
const myImage = document.querySelector('.my-image');
const scrollUpBtn = document.querySelector(".scrollUpBtn");

// call the scroll function on scroll
window.onscroll = () => { scrollFunction() };
// show button on 50px scroll
function scrollFunction(){
    if(document.body.scrollTop > 200 || document.documentElement.scrollTop > 200){
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

hamburger.addEventListener("click", () => {
    toggleAnimation();
})