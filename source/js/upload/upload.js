import { setButtonDisabled } from '../utilities';
import { checkValidity } from './validation';

const form = document.querySelector('.form');
const button = form.querySelector('.form__button');


form.addEventListener('submit', (event) => {
  event.preventDefault();

  if (checkValidity()) {
    setButtonDisabled(button, true);

    setTimeout(() => {
      form.submit();
      form.reset();
    }, 1500);
  }
});
