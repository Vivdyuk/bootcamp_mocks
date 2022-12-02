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
const fetchUsers = () => {
  return fetch(`${BASE_URL}users`)
    .then(response => {
      console.log(response);

      return response.json();
    })
    .catch(error => {
      console.log(error);
      return error.message;
    });
};

const fetchPosts = (id) => {

  return fetch(`${BASE_URL}posts?userId=${id}&_limit=3`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Sry cannot find any posts');
      }

      return response.json();
    })
    .catch(error => {
      console.log(error);
      return error.message;
    });
  ;
};

const createMarkUp = (users) => {
  console.log(users);

  const markup = Array.isArray(users)
    ? users.map(user => (
      `
        <li data-id="${user.id}"><p style="pointer-events: none">${user.name}</p></li>
      `
    )).join('')
    : `<p>${users}</p>`;

  list.insertAdjacentHTML('beforeend', markup);
};

const createPostMarkup = (targetelement, posts) => {
  console.log(posts);

  const markup = Array.isArray(posts)
    ? posts.map(post => (
      `
        <div>
            <p style="pointer-events: none">${post.title}</p>
            <p style="pointer-events: none">${post.body}</p>
        </div>
      `
    )).join('')
    : `<p>${posts}</p>`;

  targetelement.insertAdjacentHTML('beforeend', markup);
};

fetchUsers()
  .then(createMarkUp);

list.addEventListener('click', (event) => {

  if (event.target.tagName !== 'LI') {
    return;
  }
  console.dir(event.target);
  console.dir(event.target.dataset.id);

  fetchPosts(event.target.dataset.id)
    .then(posts => {
      createPostMarkup(event.target, posts);
    });
});


