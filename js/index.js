const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');
const myImage = document.querySelector('.my-image');
const scrollUpBtn = document.querySelector(".scrollUpBtn");

const message = document.getElementById('message');
const formBtn = document.querySelectorAll(".formBtn");
const inputElements = document.querySelectorAll('.inputElement');
const errorMessage = document.querySelectorAll('.errorMessage');

const popupContainer = document.querySelector('.pop-up-container');
const emailPopupButton = document.querySelector('.emailPopup');
const popupInfo = document.querySelector('.pop-up');
const closeBtn = document.querySelector('.close');

function popupFunctionality() {
  emailPopupButton.addEventListener('click', (e) => {
    popupContainer.style.display = 'block';

    popupContainer.classList.add('animate__animated', 'animate__bounceInLeft');
    popupInfo.classList.add('animate__animated', 'animate__bounceInRight');

    e.preventDefault();
  })

  closeBtn.addEventListener('click', () => {
    popupContainer.style.display = 'none';
  })

  window.addEventListener('click', (clicking) => {
    if (clicking.target === popupContainer) {
      popupContainer.style.display = 'none';
    }
  })
}
popupFunctionality();

// call the scroll function on scroll
window.onscroll = () => { scrollFunction() };
// show button on 50px scroll
function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    scrollUpBtn.style.display = "block";
  } else {
    scrollUpBtn.style.display = "none";
  }
}

// page to go on top if button is clicked
function topFunction() {
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

function addColorsOnErrors() {

  inputElements.forEach((inputElement, errorElement) => {
    let error = errorMessage[errorElement];

    if (inputElement.value === "") {
      error.textContent = "Please fill in this field!";
      error.classList.add('errorStyle');
      error.classList.add('animate__animated', 'animate__flash');
      inputElement.style.borderBottomColor = "red";

      setTimeout(() => {
        error.textContent = "";
        inputElement.style.borderBottomColor = "white";
      }, 5000);
    }
  })

}
formBtn.forEach(formButton => {
  formButton.addEventListener('click', addColorsOnErrors);
})

document.addEventListener('invalid', (function () {
  return function (e) {
    e.preventDefault();
    inputElements.forEach(element => { 
      element.focus();
     })
  }
})(), true);

// the form spree API
window.addEventListener("DOMContentLoaded", function () {

  // get the form elements defined in your form HTML
  var form = document.getElementById("my-form");
  var status = document.getElementById("status");

  // Success and Error functions for after the form is submitted
  function success() {
    form.reset();
    status.classList.add('success');
    status.innerHTML = "Thanks! Submission successful.";
  }
  function error() {
    status.classList.add('error');
    status.innerHTML = "Oops! There was a problem!";
  }

  // handle the form submission event
  form.addEventListener("submit", function (ev) {
    ev.preventDefault();
    var data = new FormData(form);
    ajax(form.method, form.action, data, success, error);
  });
});

// helper function for sending an AJAX request
function ajax(method, url, data, success, error) {
  var xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.onreadystatechange = function () {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    if (xhr.status === 200) {
      success(xhr.response, xhr.responseType);
    } else {
      error(xhr.status, xhr.response, xhr.responseType);
    }
  };
  xhr.send(data);
}