const brand = document.querySelector('.brand');
const checkbox = document.querySelector('.toggler');
const intro = document.querySelector('.intro-center');
const hamburger = document.querySelector('.hamburger');
const works = document.querySelector('.works');
const aboutMyself = document.querySelector('.about_myself');
const form = document.querySelector('.contact_form');
const navLinks = document.querySelectorAll('.nav-links');

function remove() {
  document.getElementById('toggle').checked = false;
  brand.classList.remove('blur');
  intro.classList.remove('blur');
  works.classList.remove('blur');
  aboutMyself.classList.remove('blur');
  form.classList.remove('blur');
  hamburger.style.position = 'absolute';
}

function toggle() {
  if (checkbox.checked) {
    hamburger.style.position = 'fixed';
    brand.classList.add('blur');
    intro.classList.add('blur');
    works.classList.add('blur');
    aboutMyself.classList.add('blur');
    form.classList.add('blur');
  } else {
    hamburger.style.position = 'absolute';
    remove();
  }
}

let w = 0;
window.onresize = () => {
  w = window.innerWidth;
  if (w > 768) {
    remove();
  }
};

navLinks.forEach((link) => link.addEventListener('click', remove));
