// For navigation 

const navigation = document.querySelector('.navigation__list');
const burgerMenuBtn = document.querySelector('.navigation__burger-menu');
const closeMenuBtn = document.querySelector('.navigation__close');
const navigationSection = document.querySelector('.navigation')
const overlay = document.createElement('div')

const openMenu = () => {
  overlay.classList.add('overlay')
  navigationSection.appendChild(overlay);
  navigation.classList.remove('none');
  navigation.classList.add('active');
  closeMenuBtn.classList.remove('none');

};

const closeMenu = () => {
  overlay.classList.remove('overlay')
  navigationSection.removeChild(overlay);
  navigation.classList.add('none');
  closeMenuBtn.classList.add('none');
  navigation.classList.remove('active');
};

const handleResponsiveMenu = () => {
  if (window.innerWidth < 600) {
    navigation.classList.add('none');
    burgerMenuBtn.classList.remove('none');
  } else {
    navigation.classList.remove('none');
    navigation.classList.remove('active');
    burgerMenuBtn.classList.add('none');
    closeMenuBtn.classList.add('none');
    console.log('hello')
  }
};

window.addEventListener('click', (event) => {
  console.log(event)
})

burgerMenuBtn.addEventListener('click', openMenu);
closeMenuBtn.addEventListener('click', closeMenu);
window.addEventListener('resize', handleResponsiveMenu);
window.addEventListener('resize', () => {
  console.log(window.innerWidth)
});

handleResponsiveMenu();