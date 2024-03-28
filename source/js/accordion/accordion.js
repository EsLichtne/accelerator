import { renderTabs } from '../tabs/tabs';

const tabsContainer = document.querySelector('.block-tabs');
const tabs = tabsContainer.querySelectorAll('.block-tabs__button');
const accordions = document.querySelectorAll('.accordion');
const accordionButtons = document.querySelectorAll('.accordion button');

accordionButtons.forEach((button) => {
  button.setAttribute('aria-expanded', false);
});

tabs[0].setAttribute('aria-selected', true);
accordionButtons[0].setAttribute('aria-expanded', true);

renderTabs(tabsContainer, tabs);

document.addEventListener('block-tabs', (event) => {
  accordions.forEach((content) => {
    content.classList.toggle('accordion--show', content.id === event.detail);
  });
});

accordionButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const expanded = button.getAttribute('aria-expanded') === 'true';
    button.setAttribute('aria-expanded', !expanded);
  });
});
