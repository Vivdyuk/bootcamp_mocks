const promise = fetch('https://jsonplaceholder.typicode.com/todos/')
.then((response) => response.json())
.then(data => {
  data.forEach((todo => {
    console.log(todo)
  }))
})


// console.log(promise);


// promise.forEach((todo => {
  // console.log(todo)
// }))