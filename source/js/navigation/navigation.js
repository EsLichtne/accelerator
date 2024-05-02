const header = document.querySelector('.header');
const button = header.querySelector('.header__button');

button.addEventListener('click', () => {
  header.classList.toggle('header--with-menu');
  header.classList.toggle('page__header--with-menu');
});

header.addEventListener('click', (event) => {
  if (event.target.classList.contains('navigation__link')) {
    header.classList.remove('header--with-menu');
    header.classList.remove('page__header--with-menu');
  }
});
