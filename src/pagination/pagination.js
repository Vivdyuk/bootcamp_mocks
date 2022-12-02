console.log('here');
const BASE_URL = 'https://jsonplaceholder.typicode.com/';
/**
 *  створити на початку список наших юзерів. (Нам буде достатньо просто імʼя)  endpoint = users
 *  По кліку під цим юзером ми захочемо побачити список постів, якій створив саме він endpoint = posts
 *  Якщо ми клікнули ще раз по нашому юзеру, то наші пости мають ховатись\видалятись
 *
 */

const list = document.querySelector('.users');
//-----------------------------------------------------------------------------------------------
const fetchData = (endpoint, params /*обʼєкт*/) => {
  const query = params ? Object.keys(params).reduce((acc, key) => {
    return `${acc}${key}=${params[key]}&`;
  }, '?') : '';

  return fetch(`${BASE_URL}${endpoint}${query}`)
    .then(response => {
      console.log(response);

      if (!response.ok) {
        throw new Error(`Sry cannot find any ${endpoint}`);
      }
      return response.json();
    })
    .catch(error => {
      console.log(error);
      return error.message;
    });
};
//-----------------------------------------------------------------------------------------------



const createMarkup = (target, elements, endpoint) => {
  const possibleCallbacks = {
    users: (user) => (
      `
        <li data-id="${user.id}"><p style="pointer-events: none">${user.name}</p></li>
      `
    ),
    posts: (post) => (
      `
        <div>
            <p style="pointer-events: none">${post.title}</p>
            <p style="pointer-events: none">${post.body}</p>
        </div>
      `
    ),
  };

  const result = Array.isArray(elements)
    ? elements.map(possibleCallbacks[endpoint]).join('')
    : `<p>${elements}</p>`;

  target.insertAdjacentHTML('beforeend', result);
};
//-----------------------------------------------------------------------------------------------


fetchData('users')
  .then((data) => createMarkup(list, data, 'users'));

list.addEventListener('click', (event) => {

  if (event.target.tagName !== 'LI') {
    return;
  }

  fetchData('posts', {
    userId: event.target.dataset.id,
    _limit: 3,
  })
    .then(posts => {
      createMarkup(event.target, posts, 'posts');
    });
});


