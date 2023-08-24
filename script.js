const brand = document.querySelector('.brand');
const checkbox = document.querySelector('#toggle');
const intro = document.querySelector('.intro');
const hamburger = document.querySelector('.hamburger');
const works = document.querySelector('.works');
const aboutMyself = document.querySelector('.about_myself');
const navLinks = document.querySelectorAll('.nav-links');

window.addEventListener('scroll', function() {
  const nav = document.querySelector('.sticky-nav');
  const scrollPosition = window.scrollY;

  if (scrollPosition >= 100) {
      nav.classList.add('sticky');
  } else {
      nav.classList.remove('sticky');
  }
});


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

// Modal
const overlayModal = document.getElementById('overlayModal');
function openModal(modal) {
  if (modal == null) return;
  modal.classList.add('active');
  window.scrollTo(0, 0);
  overlayModal.classList.add('active');
  navLinks.forEach((link) => {
    link.style.color = '#6070ff';
  });
}

function closeModal(modal) {
  if (modal == null) return;
  modal.classList.remove('active');
  modal.innerHTML = '';

  overlayModal.classList.remove('active');
  navLinks.forEach((link) => {
    if (w > 768) {
      link.style.color = '#6070ff';
    } else {
      link.style.color = '#fff';
    }
  });
}

function createCard(project, index) {
  const dataStr = encodeURIComponent(JSON.stringify(project));
  const projectTemplate = `<div class="card">
        <header id="header_${(index += 1)}" >
          <img class="portfolio" src="./images/${project.featureImage}" 
          alt="Portfolio">
         </header>
         <div class="card_body cb_${index}">
          <h2 class="title">${project.name}</h2>
          <div class="experience">
          <span class="subtitle">Canopy</span>
          <ul class="block">
            <li>Back End Dev</li>
            <li>2015</li>
          </ul>
          </div>
          <p class="content">${project.description}
          </p>              
          <ul class="skills project_${index}">
          </ul>
          <div class="links">
            <a href="${project.liveLink}" target="_blank">Live Demo</a>
            <a href="${project.sourceLink}" target="_blank">Source Code</a>
          </div>
         </div>
        </div>`;

  works.innerHTML += projectTemplate;
  project.techStack.forEach((item) => {
    const list = document.createElement('li');
    list.innerText = item;
    document.querySelector(`.project_${index}`).appendChild(list);
  });

  if (index % 2 === 0) {
    const header = document.querySelector(`#header_${index}`);
    const cardBody = document.querySelector(`.cb_${index}`);
    header.classList.toggle('flip1');
    cardBody.classList.toggle('flip2');
  }
}

navLinks.forEach((link) => link.addEventListener('click', remove));

window.onload = () => {
  const projects = [
    {
      name: 'Budget App',
      description:
      'Discover the BudgetApp - your partner in smarter spending. Created using Ruby on Rails and PostgreSQL, it"s designed to help you organize expenses effortlessly.',
      featureImage: 'ror-capstone.png',
      techStack: ['CSS', 'Ruby', 'Ruby on Rails'],
      liveLink: 'https://okpah.onrender.com/',
      sourceLink: 'https://github.com/david-oganization/rails-capstone-project',
    },
    {
      name: 'Space Hub',
      description:
      'Space Travelers Hub consists of Rockets, Missions, and the My Profile section. It allows users to make reservation and join mission. It is built with React and Redux',
      featureImage: 'space.png',
      techStack: ['css','react', 'redux'],
      liveLink: 'https://space-travelers-hub-2zo8.onrender.com/',
      sourceLink: 'https://github.com/evillaz/space-hub',
    },
   
    {
      name: 'CryptoCurrency Data Explorer',
      description:
      'The cryptocurrency data Explorer app is an application that allows users to search out and buy any digital currencies. It is built with React and Redux.',
      featureImage: 'crypto.png',
      techStack: ['CSS', 'React', 'Redux'],
      liveLink: 'https://david30-maker.github.io/react-capstone1/',
      sourceLink: 'https://github.com/david30-maker/react-capstone1',
    },
    {
      name: 'Leaderboard',
      description:
      'This is a leaderboard application built with JavaScript. It allows users to add their scores and view the scores of other players.',
      featureImage: 'image_2.png',
      techStack: ['CSS', 'Webpack', 'JavaScript'],
      liveLink: 'https://david30-maker.github.io/leaderboard-project/dist/',
      sourceLink: 'https://github.com/david30-maker/leaderboard-project',
    },
  ];
  
  projects.forEach((project, index) => {
    createCard(project, index);
  });

  const openModalButtons = document.querySelectorAll('[data-modal-target]');

  openModalButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const modal = document.querySelector(button.dataset.modalTarget);
      const project = JSON.parse(decodeURIComponent(button.dataset.project));

      const projectModalTemplate = `
         <header class="modal-header">
          <div><h2 id="modal-title">${project.name}</h2></div>
          <button data-close-button class="close-button">&times;</button>
         </header>
          <div class="wrap">
         <div class="modal-body">
          <ul class="modal-exp">
            <li class="canopy">CANOPY</li>
            <li>Back End Dev</li>
            <li>2015</li>
          </ul>
          <img class="portfolio" src="./images/${project.featureImage}" alt="Portfolio">
          <div class="project-wrapper">
            <div class="description">
              <p>${project.description}
              </p>
            </div>
            <div class="modal-btn">
              <ul class="modal-skills" id="modal-skills">
              </ul>
              <div class="modal-buttons">
                <a href="${project.liveLink}"><button class="button mr12"><p class="bmr-14">See Live</p> <img  src="images/icon.png" alt="live icon"></button></a>
                <a href="${project.sourceLink}"><button class="button"><p class="bmr-14">See Source</p> <ion-icon class="github"  name="logo-github"></ion-icon></button></a>
              </div>
            </div>
          </div>
         </div>
       </div>`;

      modal.innerHTML += projectModalTemplate;
      project.techStack.forEach((item) => {
        const listSkills = document.createElement('li');
        listSkills.innerText = item;
        document.querySelector('.modal-skills').appendChild(listSkills);
      });
      hamburger.style.display = 'none';
      openModal(modal);
      const closeModalButton = document.querySelector('[data-close-button]');
      closeModalButton.addEventListener('click', () => {
        const modal = closeModalButton.closest('.modal');
        hamburger.style.display = 'flex';
        closeModal(modal);
      });
    });
  });

  overlayModal.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal.active');
    modals.forEach((modal) => {
      closeModal(modal);
    });
  });
};

// form validation

function validation() {
  const email = document.getElementById('email').value;
  const errorMessage = document.getElementById('error');
  errorMessage.style.display = 'block';
  if (email !== String(email).toLowerCase()) {
    const text = 'Please enter a valid email!';
    errorMessage.innerText = text;
    errorMessage.style.background = 'red';
    errorMessage.style.color = 'black';
  } else {
    errorMessage.innerText = 'The form is sent';
    errorMessage.style.background = 'green';
    errorMessage.style.color = 'white';
  } 
} 

//  save objects to LocalStorage

const form = document.querySelector('form');
const formEls = ['input[type=text]', 'input[type=email]', 'textarea'];

function getAllFormEls() {
  const els = formEls.map((el) => Array.from(form.querySelectorAll(el)));
  return els.flat();
}

function persistForm() {
  const els = getAllFormEls();
  els.forEach((el) => {
    el.addEventListener('change', () => {
      localStorage.setItem(el.name, el.value);
    });
  });
}

function restoreForm() {
  const els = getAllFormEls();
  els.forEach((el) => {
    el.value = localStorage.getItem(el.name);
  });
}

restoreForm();
persistForm();

const submit = document.getElementById('submit');
submit.addEventListener('click', () => {
  validation();
});
