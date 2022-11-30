export const fruits = ['Apple', 'Sea Buckthorn', 'Mango', 'Cherry', 'Strawberry', 'Papaya', 'Pear', 'Lemon', 'oRange', 'Bananas', 'Without', 'p', 'is', 'Pineapple'];

/**
 * Потрабно імплементувати наступний функціонал
 * 1. відмалювати ліст фруктів
 * 2. Прик кліку на фрукт він має додаватись в список "saved"
 * 3. при повторному кліці він має видалятись
 * 4. При перезавантаженні сторінки ліст "saved"  має зберігатись
 */
const KEY = 'localKey';
const list = document.querySelector('.list');
const saved = document.querySelector('.saved');

let localStorageObj = getLocalStorage();
// console.log(localStorageObj)
createMarkup(list, fruits);

list.addEventListener('click', (event) => {
  const {outerHTML, tagName, textContent} = event.target;

  if (tagName !== 'LI') {
    return;
  }

  if (localStorageObj.includes(textContent)) {
    localStorageObj = localStorageObj.filter(el => el !== textContent);
    saved.innerHTML = '';
    createMarkup(saved, localStorageObj);
    return;
  }

  saved.insertAdjacentHTML('beforeend', outerHTML);
  localStorageObj.push(textContent);
  localStorage.setItem(KEY, JSON.stringify(localStorageObj));

});

createMarkup(saved, localStorageObj);

function createMarkup(parent, arr) {
  const markup = arr.map(el => (
    `
    <li>${el}</li>
  `
  )).join('');

  parent.insertAdjacentHTML('beforeend', markup);
}

function getLocalStorage() {
  return JSON.parse(localStorage.getItem(KEY)) || [];
}