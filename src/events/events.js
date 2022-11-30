/*
import { fruits } from '/variables.js';

console.log(fruits);

function createLi(fruits) {
    return fruits.map((fruit) =>
        `
            <li data-fruit="${fruit}">${fruit}</li>
        `
    ).join('');
}


const list = document.querySelector('.fruits');
list.insertAdjacentHTML('beforeend', createLi(fruits));
const clickHandler = (event) => {
    if (event.target.tagName === 'LI') {
        console.log(event.target.textContent);
    }
}

list.addEventListener('click', clickHandler);

document.querySelector('button')
    .addEventListener('click', whyAmIHere, {once: true})

function whyAmIHere(event) {
    console.log('clicked');
    // console.dir(event);
   list.removeEventListener('click', clickHandler)
}

*/

function submitFrorm(event) {
    event.preventDefault();
    console.dir(event);
    const {elements} = event.target;
    const result =  Object.keys(elements).reduce((acc, key) => {
        if (isNaN(+key)) {
            return {
                ...acc,
                [key]: elements[key].value
            }
        }

        return acc;

        }, {});

    console.log(result);
}

const form = document.querySelector('form');

form.addEventListener('submit', submitFrorm)

let value = 4;

console.log(length);