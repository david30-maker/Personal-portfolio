const brand = document.querySelector('.brand');
const checkbox = document.querySelector('#toggle');
const intro = document.querySelector('.intro');
const hamburger = document.querySelector('.hamburger');
const works = document.querySelector('.works');
const aboutMyself = document.querySelector('.about_myself');
const navLinks = document.querySelectorAll('.nav-links');

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

// Model
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
          <button class="button" data-project=${dataStr} data-toggle="modal" data-modal-target="#modal" > See project </button>
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
      name: 'Library',
      description:
        'A daily selection of privately personalized reads sit amet consectetur adipisicing elit.',
      featureImage: 'portfolio_1.png',
      techStack: ['html', 'css', 'javascript'],
      liveLink: 'https://david30-maker.github.io/application-deploy/',
      sourceLink: 'https://github.com/david30-maker/personal-portfolio',
    },
    {
      name: 'Job Agency',
      description:
        'A daily selection of privately personalized readsr sit amet consectetur adipisicing elit.',
      featureImage: 'portfolio_2.png',
      techStack: ['html', 'css', 'javascript'],
      liveLink: 'https://david30-maker.github.io/application-deploy/',
      sourceLink: 'https://github.com/david30-maker/personal-portfolio',
    },
    {
      name: 'Songs Library',
      description:
        'A daily selection of privately personalized reads dolor sit amet consectetur adipisicing elit. ',
      featureImage: 'portfolio_3.png',
      techStack: ['html', 'react', 'Ruby on Rails'],
      liveLink: 'https://david30-maker.github.io/application-deploy/',
      sourceLink: 'https://github.com/david30-maker/personal-portfolio',
    },
    {
      name: 'Portal',
      description:
        'A daily selection of privately personalized reads sit amet consectetur adipisicing elit. ',
      featureImage: 'portfolio_4.png',
      techStack: ['html', 'react', 'Ruby on Rails'],
      liveLink: 'https://david30-maker.github.io/application-deploy/',
      sourceLink: 'https://github.com/david30-maker/personal-portfolio',
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
            <div>
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