//строка для курсора

import Notiflix from 'notiflix';
import { apiFetch } from './api';
console.log('async await');

const BASE_URL = 'https://jsonplaceholder.typicodes.com';

const userEl = document.querySelector('.list');
const buttonEl = document.querySelector('button');

// const markup = fetch(`${BASE_URL}/users`) => async
const markup = async () => {

 
        const markup = await apiFetch();
        userEl.insertAdjacentHTML("beforeend", markup)
   
  
}

buttonEl.addEventListener('click', markup)


// const asyncFunction  = async () => {

// }

// async function fDasync () {

// }

/**
 * Потрібно при кліці на кнопку "Click me" завантажити юзерів (endPoint users).
 * ВАЖЛИВО: потрібно використати async/await синтаксис
 */


