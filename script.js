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
    toggle();
  }
};

navLinks.forEach((link) => link.addEventListener('click', remove));


// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// eventlistener for open click
btn.addEventListener("click", openModal);

//eventlistener for close
span.addEventListener("click", closeModal);
//eventlistener for window
window.addEventListener("click", outsideClick);
// When the user clicks the button, open the modal 
  function openModal() {
   modal.style.display = "block";
 }

 //When the user clicks on <span> (x), close the modal
  function closeModal() {
   modal.style.display = "none";
 }

// When the user clicks anywhere outside of the modal, close it
function outsideClick(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


window.onload = () => {
  const cards = [
  {
    
      title: 'Library',
      information:
        'A daily selection of privately personalized reads sit amet consectetur adipisicing elit.',
      image: 'portfolio_1.png',
      technologies: ['html', 'css', 'javascript'],
      live: "https://david30-maker.github.io/",
      source: "https://github.com/david30-maker/david30-maker.github.io/application-deploy/",
    },

    {
    
      title: 'Library',
      information:
        'A daily selection of privately personalized reads sit amet consectetur adipisicing elit.',
      image: 'portfolio_2.png',
      technologies: ['html', 'css', 'javascript'],
      live: "https://david30-maker.github.io/",
      source: "https://github.com/david30-maker/david30-maker.github.io/application-deploy/",
    },

    {
    
      title: 'Library',
      information:
        'A daily selection of privately personalized reads sit amet consectetur adipisicing elit.',
      image: 'portfolio_3.png',
      technologies: ['html', 'css', 'javascript'],
      live: "https://david30-maker.github.io/",
      source: "https://github.com/david30-maker/david30-maker.github.io/application-deploy/",
    },

    {
    
      title: 'Library',
      information:
        'A daily selection of privately personalized reads sit amet consectetur adipisicing elit.',
      image: 'portfolio_4.png',
      technologies: ['html', 'css', 'javascript'],
      live: "https://david30-maker.github.io/",
      source: "https://github.com/david30-maker/david30-maker.github.io/application-deploy/",
    },


]

// cards.forEach(function (card, index, arr) {
//   console.log(`Index: ${index}, Name: ${card.title}`);
// });

const projectSection = document.querySelector(".works")
cards.forEach((card) => {
  cardHtml = `
      <div class="card" class="modal-content">
        <header>
          <img class="portfolio" src="./images/${card.image}" alt="Portfolio">
        </header>
        <div class="card_body">
          <span class="close">&times;</span>
          <h2 class="title">
            ${card.title}
          </h2>
          <div class="experience">
          <span class="subtitle">Canopy</span>
          <ul class="block">
            <li>Back End Dev</li>
            <li>2015</li>
          </ul>
          </div>
          </div>
          <p class="content">  
            ${card.information}
          </p>
          <ul class="skills card_${index}">
           
          </ul>
          <div class="modal-buttons">
            <a href="${card.live}"><button class="button"><p class="bmr-14">See Live</p> <img  src="img/Icon.png" alt="live icon"></button></a>
            <a href="${card.source}"><button class="button"><p class="bmr-14">See Source</p> <a class="icons" href="https://github.com/david30-maker">
            <ion-icon name="logo-github"></ion-icon></button></a>
          </div>
        </div>
      </div>`

  // console.log(projectSection)
  // console.log(cardHtml)
  projectSection.innerHTML += cardHtml
})

}
