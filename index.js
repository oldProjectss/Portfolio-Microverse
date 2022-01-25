const menuButton = document.querySelector('.mobile_menu_btn');
const mobileMenu = document.querySelector('.mobile_menu');
const remButton = document.querySelector('.fa-times');

// transition styles
mobileMenu.style.right = '-800px';
mobileMenu.style.transition = 'right 800ms';

// listen for a click on the menu button and X button
menuButton.addEventListener('click', (e) => {
  e.target.style.display = 'none';
  mobileMenu.style.display = 'block';
  setTimeout(() => {
    mobileMenu.style.right = '0px';
  }, 1);
});

remButton.addEventListener('click', () => {
  mobileMenu.style.right = '-800px';
  setTimeout(() => {
    mobileMenu.style.display = 'none';
  }, 900);
  menuButton.style.display = 'block';
});

document.querySelectorAll('.menu_link').forEach((link) => {
  link.addEventListener('click', () => {
    mobileMenu.style.right = '-800px';
    setTimeout(() => {
      mobileMenu.style.display = 'none';
    }, 900);
    menuButton.style.display = 'block';
  });
});

// Project popup

// Create project object
const projectPop = {
  name: 'Project name goes here',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
  featuredImage: 'img/project1.svg',
  technologiesOne: 'HTML/CSS',
  technologiesTwo: 'Ruby on Rails',
  technologiesThree: 'JavaScript',
  linkToLiveVersion: 'https://ismailcourr.ml',
  linkToSource: 'https://ismailcourr.ml',
};

// create html elements
const projectPopup = document.createElement('div');
const closeBtn = document.createElement('i');
const projectName = document.createElement('h3');
const list = document.createElement('ul');
const listItemOne = document.createElement('li');
const listItemTwo = document.createElement('li');
const listItemThree = document.createElement('li');
const imageContainer = document.createElement('div');
const sliderCountainer = document.createElement('div');
const slider = document.createElement('div');
const image = document.createElement('img');

const miniImageCountainer = document.createElement('div');
const miniImage = document.createElement('img');
const description = document.createElement('p');
const buttonContainer = document.createElement('div');
const liveDemo = document.createElement('button');
const sourceCode = document.createElement('button');

// create content
closeBtn.classList.add('fas', 'fa-times', 'popup_close');

projectName.textContent = projectPop.name;
projectName.classList.add('popup_name');

listItemOne.textContent = projectPop.technologiesOne;
listItemOne.classList.add('popup_language');
listItemTwo.textContent = projectPop.technologiesTwo;
listItemTwo.classList.add('popup_language');
listItemThree.textContent = projectPop.technologiesThree;
listItemThree.classList.add('popup_language');
list.classList.add('popup_languages');
list.append(listItemOne, listItemTwo, listItemThree);

image.setAttribute('src', projectPop.featuredImage);
image.classList.add('popup_img');
slider.appendChild(image);

slider.classList.add('slider');
sliderCountainer.appendChild(slider);

sliderCountainer.classList.add('slider_container');

miniImage.setAttribute('src', projectPop.featuredImage);
miniImage.classList.add('popup_mini_img');
const miniImageTwo = miniImage.cloneNode(true);
const miniImageThree = miniImageTwo.cloneNode(true);
const miniImageFoor = miniImageThree.cloneNode(true);
miniImageCountainer.append(miniImage, miniImageTwo, miniImageThree, miniImageFoor);
miniImageCountainer.classList.add('mini_img');

imageContainer.append(sliderCountainer, miniImageCountainer);
imageContainer.classList.add('img_slider');

description.classList.add('popup_text');
description.textContent = projectPop.description;

liveDemo.classList.add('popup_btn');
liveDemo.innerHTML = `<a href = "${projectPop.linkToLiveVersion}">See live <i class="fa fa-arrow-right"></i></a>`;

sourceCode.classList.add('popup_btn');
sourceCode.innerHTML = `<a href = "${projectPop.linkToSource}">See source <i class="fab fa-github"></i></a>`;

buttonContainer.classList.add('popup_buttons');
buttonContainer.append(liveDemo, sourceCode);

projectPopup.classList.add('project_pop');
projectPopup.append(closeBtn, projectName, list, imageContainer, description, buttonContainer);

document.body.appendChild(projectPopup);

// Listen for a click on the projects links or close button
closeBtn.addEventListener('click', () => {
  projectPopup.style.display = 'none';
  closeBtn.style.display = 'none';
});

const projectLinks = document.querySelectorAll('.project_btn');
projectLinks.forEach((btn) => {
  btn.addEventListener('click', () => {
    projectPopup.style.display = 'flex';
    closeBtn.style.display = 'block';
  });
});
