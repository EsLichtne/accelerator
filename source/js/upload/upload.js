const form = document.querySelector('.form');
const fields = form.querySelectorAll('.form__input');
const button = form.querySelector('.form__button');

const renderEmptyState = (field) => {
  if (field.value === '') {
    field.dataset.empty = '';
  } else {
    delete field.dataset.empty;
  }
};

const clearFields = () => {
  fields.forEach((field) => {
    field.value = '';
  });
};

button.addEventListener('click', () => {
  fields.forEach((field) => {
    renderEmptyState(field);
  });
});

fields.forEach((field) => {
  field.addEventListener('input', (event) => {
    renderEmptyState(event.target);
  });
});

form.addEventListener('submit', () => {
  clearFields();
});
