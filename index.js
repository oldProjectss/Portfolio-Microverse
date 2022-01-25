const menuButton = document.querySelector('.mobile_menu_btn');
const mobileMenu = document.querySelector('.mobile_menu');
const remButton = document.querySelector('.fa-times');

// transition style

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

// project popup
const popupCloseBtn = document.querySelector('.popup_close');
const projectPopup = document.querySelector('.project_pop');

popupCloseBtn.addEventListener('click', () => {
  projectPopup.style.display = 'none';
  popupCloseBtn.style.display = 'none';
});

document.querySelectorAll('.project_btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    projectPopup.style.display = 'flex';
    popupCloseBtn.style.display = 'block';

    // setTimeout(() => {
    //   projectPopup.style.display = 'flex';
    // }, 900);
  });
});
