const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');
const myImage = document.querySelector('.my-image');

// adds animations
function toggleAnimation() {
    navLinks.classList.toggle("open");

    links.forEach(link => {
        link.classList.toggle("fade");
    })
}

// adds style for nav after hamburger is clicked
function addStyleOnClick(){
        
        // navLinks.style.backgroundColor = "#5D5C6199";
        // navLinks.style.color = "#313036";


        // myImage.style.opacity = "0.5";
        // if (hamburger === true) {
        //     navLinks.style.backgroundColor = "white";
        //     navLinks.style.opacity = "0.5";
        // } else {
        //     navLinks.parentNode.removeChild(navLinks);
        // }
}

hamburger.addEventListener("click", () => {
    toggleAnimation();
    addStyleOnClick();
})

// function removeImageInMobile(screenSize){
//     if(screenSize.matches){
//         myImage.parentNode.removeChild(myImage);
//     }
// }

// let screen = window.matchMedia("(max-width: 768px)");
// removeImageInMobile(screen);
// screen.addEventListener(removeImageInMobile);