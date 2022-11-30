import { throttle } from 'lodash/function';

const input = document.querySelector('.input');
input.addEventListener('input', throttle((event) => {
    console.log(event.target.value);
}, 1000))