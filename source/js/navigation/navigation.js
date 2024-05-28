const navigation = document.querySelector('.navigation');
const button = navigation.querySelector('.navigation__button');

const toggleExpanded = (element) => element.getAttribute('aria-expanded') === 'false'
  ? element.setAttribute('aria-expanded', 'true')
  : element.setAttribute('aria-expanded', 'false');

const closeNavigation = () => {
  if (button.getAttribute('aria-expanded') === 'true') {
    button.click();
  }
};

navigation.addEventListener('click', (event) => {
  if (event.target.classList.contains('navigation__button') || event.target.classList.contains('menu__link--expanded')) {
    toggleExpanded(event.target);
  }

  if (event.target.classList.contains('navigation__link')) {
    closeNavigation();
  }
});

document.addEventListener('click', (event) => {
  if (!navigation.contains(event.target)) {
    closeNavigation();
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key.startsWith('Esc')) {
    closeNavigation();
  }
});
