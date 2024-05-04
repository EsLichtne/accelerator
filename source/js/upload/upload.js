const form = document.querySelector('.form');
const fields = form.querySelectorAll('.form__input');

fields.forEach((field) => {
  field.addEventListener('input', (event) => {
    if (event.target.value === '') {
      field.dataset.empty = '';
    } else {
      delete field.dataset.empty;
    }
  });
});
