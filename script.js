const brand = document.querySelector('.brand');
const checkbox = document.querySelector('.toggler');
const intro = document.querySelector('.bio-section');
const hamburger = document.querySelector('.hamburger');
const works = document.querySelector('.works');
const aboutMyself = document.querySelector('.about-section');

checkbox.addEventListener('click', () => {
  brand.classList.toggle('blur');
  intro.classList.toggle('blur');
  works.classList.toggle('blur');
  aboutMyself.classList.toggle('blur');

  navlinks.addEventListener('click', () => {
    document.getElementsByClassName('toggler').checked = false;
    brand.classList.remove('blur');
    intro.classList.remove('blur');
    works.classList.remove('blur');
    aboutMyself.classList.remove('blur');
    hamburger.style.position = 'fixed';
  });

  if (checkbox.checked) {
    hamburger.style.position = 'fixed';
    brand.classList.remove('blur');
    intro.classList.remove('blur');
    works.classList.remove('blur');
    aboutMyself.classList.remove('blur');
  } else {
    hamburger.style.position = 'absolute';
  }
});

let w = 0;
window.onresize = () => {
  w = window.innerWidth;
  if (w > 768) {
    document.getElementsByClassName('toggler').checked = false;
    brand.classList.remove('blur');
    intro.classList.remove('blur');
    works.classList.remove('blur');
    aboutMyself.classList.remove('blur');
  }
};
