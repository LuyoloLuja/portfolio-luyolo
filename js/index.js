const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');
const myImage = document.querySelector('.my-image');
const scrollUpBtn = document.querySelector(".scrollUpBtn");
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const message = document.getElementById('message');
const formBtn = document.querySelector(".formBtn");
const firstNameErrorMsg = document.querySelector('.firstNameErrorMsg');
const lastNameErrorMsg = document.querySelector('.lastNameErrorMsg');
const emailErrorMsg = document.querySelector('.emailErrorMsg');
const messageError = document.querySelector('.messageError');

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

function preventErrorsFromBeingActive() {

  firstName.addEventListener('click', () => {
    firstName.style.borderBottomColor = "white";
    firstNameErrorMsg.style.display = "none";
  })

  lastName.addEventListener('click', () => {
    lastName.style.borderBottomColor = "white";
    lastNameErrorMsg.style.display = "none";
  })

  email.addEventListener('click', () => {
    email.style.borderBottomColor = "white";
    emailErrorMsg.style.display = "none";
  })

  message.addEventListener('click', () => {
    message.style.borderBottomColor = "white";
    messageError.style.display = "none";
  })

}

function addColorsOnErrors() {

  if (firstName.value === "") {
    firstNameErrorMsg.style.display = "block";
    firstName.style.borderBottomColor = "red";
  }
  if (lastName.value === "") {
    lastNameErrorMsg.style.display = "block";
    lastName.style.borderBottomColor = "red";
  }
  if (email.value === "") {
    emailErrorMsg.style.display = "block";
    email.style.borderBottomColor = "red";
  }
  if (message.value === "") {
    messageError.style.display = "block";
    message.style.borderColor = "red";
  }

  preventErrorsFromBeingActive();
}
formBtn.addEventListener('click', addColorsOnErrors);

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