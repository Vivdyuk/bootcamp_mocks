import { throttle, debounce } from 'lodash/function';

const input = document.querySelector('.input');

/*
input.addEventListener('input', (event) => {
  console.log(event.target.value, 'normal');
});
*/
const KEY = 'test';
export const localStrorageObj = {};
const inputs = document.querySelectorAll('.input');
console.log(inputs.length);

export function eventHandler(event)  {
  console.dir(event.target.name);

  localStorage.setItem(KEY, JSON.stringify({
    ...JSON.parse(localStorage.getItem(KEY)),
    [event.target.name]: event.target.value
  }))

}

inputs.forEach(input => {
  input.addEventListener('input', eventHandler)
})

export const number = 4;

