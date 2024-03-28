import { renderTabs } from './tabs';

const tabsContent = document.querySelectorAll('.accordion');
const accordionButtons = document.querySelectorAll('.accordion button');

renderTabs(tabsContent, 'accordion--show');

accordionButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const expanded = button.getAttribute('aria-expanded') === 'true';
    button.setAttribute('aria-expanded', !expanded);
  });
});
