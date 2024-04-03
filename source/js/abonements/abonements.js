import { renderTabs } from '../tabs/tabs';

const tabsContainer = document.querySelector('.inline-tabs');
const tabs = tabsContainer.querySelectorAll('.inline-tabs__tab');
const abonements = document.querySelectorAll('.subscription-card');

const prices = {
  'price-tab-1': {
    0: '5000',
    1: '1700',
    2: '2700',
  },

  'price-tab-2': {
    0: '30 000',
    1: '10 200',
    2: '16 200',
  },

  'price-tab-3': {
    0: '60 000',
    1: '20 400',
    2: '32 400',
  },
};

renderTabs(tabsContainer, tabs);

document.addEventListener('inline-tabs', (event) => {
  abonements.forEach((abonement, index) => {
    abonement.querySelector('.subscription-card__price').innerHTML =
      `
      <span class="subscription-card__shadow" aria-hidden="true">${prices[event.detail]?.[index]}</span>
      <span class="visually-hidden">Стоимость (рублей):</span>
      <span class="subscription-card__number">${prices[event.detail]?.[index]}</span>
      `;
  });
});

renderTabs(tabsContainer, tabs);
