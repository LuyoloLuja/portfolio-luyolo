const harmburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');
const myImage = document.querySelector('.my-image');

function removeImageInMobile(screenSize){
    if(screenSize.matches){
        myImage.parentNode.removeChild(myImage);
    }
}

let screen = window.matchMedia("(max-width: 768px)");
removeImageInMobile(screen);
screen.addEventListener(removeImageInMobile);

// harmburger.addEventListener('click', () => {
//     navLinks.classList.toggle("open");

//     links.forEach(link => {
//         link.classList.toggle("fade");
//     });
// })