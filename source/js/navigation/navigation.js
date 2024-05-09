const header = document.querySelector('.header');
const button = header.querySelector('.header__button');
const clue = button.querySelector('.header__clue');
const content = document.querySelector('.page__content');

const openMenu = () => {
  header.classList.add('header--with-menu');
  header.classList.add('page__header--with-menu');
  clue.textContent = 'Закрыть меню.';
};

const closeMenu = () => {
  header.classList.remove('header--with-menu');
  header.classList.remove('page__header--with-menu');
  clue.textContent = 'Открыть меню.';
};

const toggleMenu = () => {
  if (!header.classList.contains('header--with-menu')) {
    openMenu();
  } else {
    closeMenu();
  }
};

const setContentIndent = () => {
  const headerHeight = header.offsetHeight;
  content.style.setProperty('--top', `${headerHeight}px`);
};

setContentIndent();

button.addEventListener('click', () => {
  toggleMenu();
});

header.addEventListener('click', (event) => {
  if (event.target.classList.contains('navigation__link')) {
    closeMenu();
  }
});

document.addEventListener('click', (event) => {
  if (header.classList.contains('header--with-menu') && !header.contains(event.target)) {
    closeMenu();
  }
});

export { setContentIndent };
