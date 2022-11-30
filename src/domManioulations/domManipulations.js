import { fruits, users } from '/src/variables.js'
/*

const  ul = document.querySelector('ul')
const li = document.createElement('li');
li.innerText = 'hello';
ul.append(li);

// document.after(li);

// ul.innerHTML = `<li>I' m a li</li>`;

ul.insertAdjacentHTML('beforeend', '<li>I\' m a li</li><p>Thanks</p>');
*/


/**
 *
 * @param arr - масив з назвами наших лішок
 *
 * Ф-я має створити розмітку в другій ul з класом "fruits",
 * де кожен елемент масиву - це значення тегу <li>
 *
 * @return void
 *
 * !! не використовути метод querySelectorAll
 */
/*function createLis(arr) {
    const mainUl = document.querySelector('.fruits .fruits');

    const listFruits = fruits.map(fruit => {
        const listLi = document.createElement('li');
        listLi.textContent = fruit;
        listLi.style.color = 'green';
        listLi.classList.add('fruit');

        return listLi;
    })

    mainUl.append(...listFruits);
}*/


/**
 *
 * @param arr - масив з назвами наших лішок
 *
 * Ф-я має створити розмітку в перший ul з класом "fruits",
 * де кожен елемент масиву - це значення тегу <li>
 *
 * @return void
 *
 * !! не використовути метод append
 * !! лі мають бути червоного кольору
 */
/*
function createOutterLis(arr) {
    const list = document.querySelector('ul');

    const markup = arr.map(el => (
        `
            <li class="fruit" style="color: red">${el}</li>
        `
    ));

    list.insertAdjacentHTML('beforeend', markup.join(''));
}
*/

/*
createLis(fruits);
createOutterLis(fruits)
*/

console.dir(users[0]);

/**
 *
 * @param users - масив обʼєктів юзерів
 * Ми хочемо створити новий список на сторінці, перед яким ми матимемо заголовок
 * з назвою users.
 *  У списка ми хочемо вимкнути маркери і створити картки наших юзерів.
 *  В картці мають бути присутні імʼя, імейл, телефон і назва компанії, де юзер працює.
 *  Побудова картки довільна.
 *  Обмежень немкає
 *
 *
 * @return void
 */
function createUsersList(users) {
    const initialAcc = '<h1>Users</h1>\n<ul style="list-style: none">';
    const result = users.reduce((acc, { name, email, phone, company }) => {
      return `
             ${acc}
            <li class="user">
                  <p>${name}</p>
                  <p>${email}</p>
                  <p>${phone}</p>
                  <p>${company.name}</p>
            </li>
        `
    }, initialAcc) + '</ul>'

    document.body.insertAdjacentHTML('beforeend', result)
}


createUsersList(users)