/*const promise = fetch('https://jsonplacedfdholder.typicode.com/comments')
  .then(response => response.json())
  .catch((error) => {
    return [];
  })
  .then(setSubEmail)
  .then(setComments);
// .then(console.log)
console.log(promise);

/!* goit@gmail.com -> subEmail: gmail.com *!/

function setSubEmail(data) {
  return data.map(el => ({
    ...el,
    // const indexOfDog = el.email.indexOf('@');
    subEmail: el.email.split('@')[1]
  }));
}
console.log(setSubEmail)
/!**
 *!! якщо коментів немає, то рендеримо "SRY"
 * @param comments
 * @return {*}
 *!/
function setComments(comments) {
  console.log(comments);
  const container = document.querySelector('.container');

  container.insertAdjacentHTML('beforeend', comments.length?  comments.map(({subEmail, email, body}) => `
      <div class="comment">
        <p>${subEmail}</p>
        <p>${email}</p>
        <p>${body}</p>
      </div>
  `).join('') : "<p>SRY</p>");
}*/

const newPromise = new Promise((res, rej) => {
  res(1);
});

newPromise
  .then(() => {
    throw 2;
  })
  .catch(() => {
    throw 5;
  })
  .catch(() => {
    throw  4;
  })
  .finally((d) => {
    console.log(d, "d");
    return 48;
  })
  // .then(() => {
  //   return 7;
  // })
  .catch((d) => {
    throw d;
  })
  .then(console.log)
  .catch(console.warn);