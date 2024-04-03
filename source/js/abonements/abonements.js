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
    0: '30000',
    1: '10200',
    2: '16200',
  },

  'price-tab-3': {
    0: '60000',
    1: '20400',
    2: '32400',
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
