const header = document.querySelector('.header');
const navigation = header.querySelector('.header__navigation ');
const button = header.querySelector('.header__button');
const clue = button.querySelector('.header__clue');
const content = document.querySelector('.page__content');
const DESKTOP_WIDTH = 1023;

const onHeaderClick = (event) => {
  if (event.target.classList.contains('navigation__link')) {
    button.click();
  }
};

const onDocumentClick = (event) => {
  if (header.classList.contains('header--with-menu') && !header.contains(event.target)) {
    button.click();
  }
};

const openMenu = () => {
  header.classList.add('header--with-menu');
  header.classList.add('page__header--with-menu');
  clue.textContent = 'Закрыть меню.';
  header.addEventListener('click', onHeaderClick);
  document.addEventListener('click', onDocumentClick);
};

const closeMenu = () => {
  header.classList.remove('header--with-menu');
  header.classList.remove('page__header--with-menu');
  clue.textContent = 'Открыть меню.';
  header.removeEventListener('click', onHeaderClick);
  document.removeEventListener('click', onDocumentClick);
};

const toggleMenu = () => {
  if (!header.classList.contains('header--with-menu')) {
    openMenu();
  } else {
    closeMenu();
  }
};

const setContentIndent = () => {
  let headerHeight;
  if (header.classList.contains('header--with-menu') || window.innerWidth <= DESKTOP_WIDTH) {
    headerHeight = header.offsetHeight - navigation.offsetHeight;
  } else {
    headerHeight = header.offsetHeight;
  }
  content.style.setProperty('--top', `${headerHeight}px`);
};

setContentIndent();

button.addEventListener('click', () => {
  toggleMenu();
});

export { setContentIndent };
