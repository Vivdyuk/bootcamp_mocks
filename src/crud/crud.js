import axios from 'axios';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

const usersEl = document.querySelector('.users');

const usersList = axios.get(`${BASE_URL}/users`)
    .then(response => {
        const { data } = response;
        const markup = data.map(({ name, email, id }) => `
        <li class="user">
            <span>${name}</span>
            <span>${email}</span>
            <button data-id="${id}">X</button>
        </li>
    `).join('')

        usersEl.insertAdjacentHTML('beforeend', markup)
        // const usersDel = axios.delete(`${BASE_URL}/users`)


        /*
    const response = {
        data: {
            data: []
        }
    }  */
    })

console.log(usersList);


usersEl.addEventListener('click', onButtonClick);

function onButtonClick(event) {
    if (event.target.nodeName !== 'BUTTON') {
        return
    }

    console.dir(event.target)
    const usersDelete = axios.delete(`${BASE_URL}/users/${event.target.dataset.id}`);
    console.log(usersDelete)
    console.log(axios.get(`${BASE_URL}/users/`))


    axios.get(`${BASE_URL}/users`)
        .then(response => {
            const { data } = response;

            const markup = data
                .filter(el => el.id !== Number(event.target.dataset.id))
                .map(({ name, email, id }) => {
                    // console.log(id, event.target.dataset.id);
                    //  if (id !== Number(event.target.dataset.id)) {
                    return `<li class="user">
            <span>${name}</span>
            <span>${email}</span>
            <button data-id="${id}">X</button>
        </li>
    `}
                )

            console.log(markup);

            usersEl.innerHTML = ""
            usersEl.insertAdjacentHTML('beforeend', markup.join(''))

        })

}