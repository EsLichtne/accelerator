import { throttle } from '../utilities';

const form = document.querySelector('.proposal');
const userName = form.querySelector('#name');
const userPhone = form.querySelector('#phone');

const setError = (element, message) => {
  const elementParent = element.parentElement;
  const error = elementParent.querySelector('.field__error');

  error.textContent = message;
  element.classList.add('.field__input--error');
};

const setSuccess = (element) => {
  const elementParent = element.parentElement;
  const error = elementParent.querySelector('.field__error');

  error.textContent = '';
  elementParent.classList.remove('.field__input--error');
};

const checkNameValid = (name) => {
  const pattern = /[a-zа-яё]+$/;
  return pattern.test(String(name).toLowerCase());
};

const checkPhoneValid = (phone) => {
  const pattern = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
  return pattern.test(String(phone));
};

const checkValidity = () => {
  const userNameValue = userName.value.trim();
  const userPhoneValue = userPhone.value.trim();

  if (userNameValue === '') {
    setError(userName, 'Поле обязательно к заполнению');
  } else if (!checkNameValid(userNameValue)) {
    setError(userName, 'Имя должно состоять из букв');
  } else {
    setSuccess(userName);
  }

  if (userPhoneValue === '') {
    setError(userPhone, 'Поле обязательно к заполнению');
  } else if (!checkPhoneValid(userPhoneValue)) {
    setError(userPhone, 'Введите номер в правильном формате');
  } else {
    setSuccess(userPhone);
  }
};

const onFormSubmit = (event) => {
  event.preventDefault();
  checkValidity();
};

userName.addEventListener('input', throttle((event) => {
  const userNameValue = event.target.value.trim();

  if (userNameValue === '') {
    setError(userName, 'Поле обязательно к заполнению');
  } else if (!checkNameValid(userNameValue)) {
    setError(userName, 'Имя должно состоять из букв');
  } else {
    setSuccess(userName);
  }
}, 1500));

userPhone.addEventListener('input', throttle((event) => {
  const userPhoneValue = event.target.value.trim();

  if (userPhoneValue === '') {
    setError(userPhone, 'Поле обязательно к заполнению');
  } else if (!checkPhoneValid(userPhoneValue)) {
    setError(userPhone, 'Введите номер в правильном формате');
  } else {
    setSuccess(userPhone);
  }
}, 1500));

form.addEventListener('submit', onFormSubmit);
