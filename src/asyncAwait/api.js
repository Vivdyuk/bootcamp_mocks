export async function apiFetch() {
    try {
        const fetchRes = await fetch(`${BASE_URL}/users`);
        //!DANGER ZONE
        console.log('not ok');

        if (!fetchRes.ok) {
            console.log('not ok');
            throw new Error(fetchRes.status)
        }
        // console.log(fetchRes.status);
        const data = await fetchRes.json();

        return data;
    //    return data.map(({ name, email }) =>
    //         `<li class="user">
    //             <span>${name}</span>
    //             <span>${email}</span>
    //             </li>`)
    //         .join("")


    //     console.log(markup)
    } catch (err) {
        return [];
        return '<span>Sorry. There is nothing!</span>'
        // Notiflix.Notify.warning(err.message)
        console.dir(err)
    }

}
