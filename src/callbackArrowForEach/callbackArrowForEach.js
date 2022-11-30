import { fruits } from '../variables.js'
/*
function forEach(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i], i, arr)
    }
}
*/

/**
 * !! використати forEach
 * @param arr - масив довільної довжини
 * @return масив з фруктами, в яких кількість сиволів парна
 */
/*function isEven (arr) {
    const result = [];

    const callback = (item) => {

        if (item.length % 2) {
            return;
        }

        result.push(item);
    }

    arr.forEach(callback)

    return result;
}

console.log(isEven(fruits));
*/
console.log(fruits)
/**
 *
 * @param arr - масив довільної довжини
 * @param type - true | false
 * @param cb1 - перший колбек
 * @param cb2 - другий колбек
 *
 * ф-я приймає масив, тип перебору і два можливих колбеки. В залежності від типу до нашого масиву
 * має застосуватись один з наданих колбеків.
 * Ф-я нічого не повертає
 *
 * @return void;
 */
function chooseMeACallback(arr, type, cb1, cb2) {

    if (type) {
        arr.forEach(cb1)
    } else {
        arr.forEach(cb2)
    }

    arr.forEach(type ? cb1 : cb2)
}


const simpleConsole = (el) => {
    console.log(el)
}

function doubleConsole(el) {
    console.log(el + el);
}

function upperConsole(el, i) {
    if (i % 2) {
        console.log(el);
    } else {
        console.log(el.toUpperCase());
    }
}
/*
chooseMeACallback(fruits, true, simpleConsole, doubleConsole)
console.log('=================================');
chooseMeACallback(fruits, true, upperConsole, simpleConsole)
console.log('=================================');
chooseMeACallback(fruits, true, doubleConsole, upperConsole)*/

function makeObjKeysFromString(string) {
    return string.split(', ').sort();
}

class User {
    constructor(name, surname) {
        this.name = name;
        this.surname= surname;
    }
}


const Andriy = new User('Andriy', 'Zaimak');


class Admin extends User {
    #status;

    constructor(name, surname, status) {
        super(name, surname);
        this.#status = status;
    }
}
