import * as _ from 'lodash';

function setValuesFromLocalStorage(form, key) {
  const localStorageObj = JSON.parse(localStorage.getItem(key)) || {};
  const inputNames = ['input', 'textarea'];
  inputNames.map(inputName => form.querySelector(inputName))
    .forEach(input => {
      input.value = localStorageObj[input.name] || '';
    });
}

function handleForm() {
  const form = document.querySelector('.feedback-form');
  const localStorageKey = 'feedback-form-state';

  setValuesFromLocalStorage(form, localStorageKey);

  form.addEventListener('input', _.throttle((event) => {
    const localStorageObj = JSON.parse(localStorage.getItem(localStorageKey)) || {};
    console.log(JSON.parse(undefined));

    const {name, value} = event.target;
    const formInputObj = {
      ...localStorageObj,
      [name]: value
    };

    localStorage.setItem(localStorageKey, JSON.stringify(formInputObj));
  }, 500));

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const {elements: {email, message}} = event.currentTarget;
    console.log(JSON.parse(localStorage.getItem(localStorageKey)));

    localStorage.removeItem(localStorageKey);
    email.value = '';
    message.value = '';
  });
}

handleForm();
console.log('here');
