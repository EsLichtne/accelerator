import { throttle } from '../utilities';

const form = document.querySelector('.proposal');
const fields = form.querySelectorAll('.field__input');
const userName = form.querySelector('#name');
const userPhone = form.querySelector('#phone');

const setError = (element, message) => {
  const elementParent = element.parentElement;
  const error = elementParent.querySelector('.field__error');

  error.textContent = message;
  element.classList.add('field__input--error');
};

const setSuccess = (element) => {
  const elementParent = element.parentElement;
  const error = elementParent.querySelector('.field__error');

  error.textContent = '';
  element.classList.remove('field__input--error');
};

const checkNameValid = (name) => {
  const pattern = /^[a-zа-яё][a-zа-яё]*$/i;
  return pattern.test(String(name).toLowerCase());
};

const checkPhoneValid = (phone) => {
  const pattern = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
  return pattern.test(String(phone));
};

const checkFieldsValidity = (field) => {
  if (field === userName) {
    const fieldValue = field.value.trim();
    if (fieldValue === '') {
      setError(userName, 'Поле обязательно к заполнению');
    } else if (!checkNameValid(fieldValue)) {
      setError(userName, 'Имя должно состоять из букв');
    } else {
      setSuccess(userName);
    }
  }

  if (field === userPhone) {
    const fieldValue = field.value.trim();
    if (fieldValue === '') {
      setError(userPhone, 'Поле обязательно к заполнению');
    } else if (!checkPhoneValid(fieldValue)) {
      setError(userPhone, 'Введите номер в правильном формате');
    } else {
      setSuccess(userPhone);
    }
  }
};

userName.addEventListener('input', throttle((event) => {
  checkFieldsValidity(event.target);
}, 1500));

userPhone.addEventListener('input', throttle((event) => {
  checkFieldsValidity(event.target);
}, 1500));

const checkValidity = () => {
  fields.forEach((field) => {
    checkFieldsValidity(field);
  });

  return Array.from(fields).every((field) => !field.classList.contains('field__input--error'));
};

export { checkValidity };
