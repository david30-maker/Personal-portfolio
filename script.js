/*const brand = document.querySelector('.brand');
const checkbox = document.querySelector('.toggler');
const intro = document.querySelector('.bio-section');
const hamburger = document.querySelector('.hamburger');
const works = document.querySelector('.works');
const aboutMyself = document.querySelector('.about-section');
const navlinks = document.querySelectorAll('.nav-links');
checkbox.addEventListener('click', () => {
  brand.classList.toggle('blur');
  intro.classList.toggle('blur');
  works.classList.toggle('blur');
  aboutMyself.classList.toggle('blur');

  $(".nav-links").click(function () {
    $(".toggler").prop("checked", false);
    brand.classList.remove("blur");
    intro.classList.remove("blur");
    works.classList.remove("blur");
    aboutMyself.classList.remove("blur");
    hamburger.style.position = "absolute";
  });

   navlinks.addEventListener('click', () => {
    document.querySelector('.toggler').checked = false;
    brand.classList.remove('blur');
    intro.classList.remove('blur');
    works.classList.remove('blur');
    aboutMyself.classList.remove('blur');
    hamburger.style.position = 'absolute';
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
    document.querySelector('.toggler').checked = false;
    brand.classList.remove('blur');
    intro.classList.remove('blur');
    works.classList.remove('blur');
    aboutMyself.classList.remove('blur');
  }
}; */


/*const brand = document.querySelector(".brand");
const checkbox = document.querySelector(".toggler");
const intro = document.querySelector(".intro");
const hamburger = document.querySelector(".hamburger");
const works = document.querySelector(".works");
const aboutMyself = document.querySelector(".about_myself");
checkbox.addEventListener("click", function (e) {
  brand.classList.toggle("blur");
  intro.classList.toggle("blur");
  works.classList.toggle("blur");
  aboutMyself.classList.toggle("blur");
  $(".nav-links").click(function () {
    $(".toggler").prop("checked", false);
    brand.classList.remove("blur");
    intro.classList.remove("blur");
    works.classList.remove("blur");
    aboutMyself.classList.remove("blur");
    hamburger.style.position = "absolute";
  });
  if (checkbox.checked) {
    hamburger.style.position = "fixed";
  } else {
    hamburger.style.position = "absolute";
  }
});

let w = 0;
window.onresize = function () {
  w = window.innerWidth;
  if (w > 768) {
    $(".toggler").prop("checked", false);
    brand.classList.remove("blur");
    intro.classList.remove("blur");
    works.classList.remove("blur");
    aboutMyself.classList.remove("blur");
  }
}; */


/*const brand = document.querySelector('.brand');
const checkbox = document.querySelector('.toggler');
const intro = document.querySelector('.intro');
const hamburger = document.querySelector('.hamburger');
const works = document.querySelector('.works');
const aboutMyself = document.querySelector('.about_myself');
const navlinks = document.querySelectorAll('.nav-links');
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
};*/


/*const brand = document.querySelector(".brand");
const checkbox = document.querySelector(".toggler");
const intro = document.querySelector(".intro");
const hamburger = document.querySelector(".hamburger");
const works = document.querySelector(".works");
const aboutMyself = document.querySelector(".about_myself");
checkbox.addEventListener("click", function (e) {
  brand.classList.toggle("blur");
  intro.classList.toggle("blur");
  works.classList.toggle("blur");
  aboutMyself.classList.toggle("blur");
  $(".nav-links").click(function () {
    $(".toggler").prop("checked", false);
    brand.classList.remove("blur");
    intro.classList.remove("blur");
    works.classList.remove("blur");
    aboutMyself.classList.remove("blur");
    hamburger.style.position = "absolute";
  });
  if (checkbox.checked) {
    hamburger.style.position = "fixed";
  } else {
    hamburger.style.position = "absolute";
  }
});

let w = 0;
window.onresize = function () {
  w = window.innerWidth;
  if (w > 768) {
    $(".toggler").prop("checked", false);
    brand.classList.remove("blur");
    intro.classList.remove("blur");
    works.classList.remove("blur");
    aboutMyself.classList.remove("blur");
  }
}; */


/*const brand = document.querySelector('.brand');
const checkbox = document.querySelector('#toggle');
const intro = document.querySelector('.intro');
const hamburger = document.querySelector('.hamburger');
const works = document.querySelector('.works');
const aboutMyself = document.querySelector('.about_myself');
function remove() {
  document.getElementById('toggle').checked = false;
  brand.classList.remove('blur');
  intro.classList.remove('blur');
  works.classList.remove('blur');
  aboutMyself.classList.remove('blur');
  hamburger.style.position = 'absolute';
}

function toggle() {
  if (checkbox.checked) {
    hamburger.style.position = 'fixed';
    brand.classList.toggle('blur');
    intro.classList.toggle('blur');
    works.classList.toggle('blur');
    aboutMyself.classList.toggle('blur');
  } else {
    hamburger.style.position = 'absolute';
    remove();
  }
}

let w = 0;
window.onresize = () => {
  w = window.innerWidth;
  if (w > 768) {
    toggle();
  }
};*/


const brand = document.querySelector('.brand');
const checkbox = document.querySelector('#toggle');
const intro = document.querySelector('.intro');
const hamburger = document.querySelector('.hamburger');
const works = document.querySelector('.works');
const aboutMyself = document.querySelector('.about_myself');

function remove() {
  document.getElementById('toggle').checked = false;
  brand.classList.remove('blur');
  intro.classList.remove('blur');
  works.classList.remove('blur');
  aboutMyself.classList.remove('blur');
  hamburger.style.position = 'absolute';
}

function toggle() {
  if (checkbox.checked) {
    hamburger.style.position = 'fixed';
    brand.classList.toggle('blur');
    intro.classList.toggle('blur');
    works.classList.toggle('blur');
    aboutMyself.classList.toggle('blur');
  } else {
    hamburger.style.position = 'absolute';
    remove();
  }
}

let w = 0;
window.onresize = () => {
  w = window.innerWidth;
  if (w > 768) {
    toggle();
  }
};
