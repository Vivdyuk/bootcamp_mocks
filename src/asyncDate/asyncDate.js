/*
let number = 3;

setTimeout(() => {
  console.log('first value: ', number);
  number += 1;

}, 0);

number++;

console.log('second value: ', number);*/

/*
for (let i = 0; i < 5 ; i++) {
  setTimeout(() => {
    console.log(i);
  },100);
}
*/

/*
setInterval(() => {
  setTimeout(() => {
    console.log('timeout');
  }, 150);
  console.log('interval');

}, 150);
*/

/*
setTimeout(() => {
    setInterval(() => {
      console.log('interval');
    }, 0);
    console.log('timeout');
  },
  150
);
*/

/*
const date = new Date();
console.log(date);

const oldDate = new Date(2021, 6, 23, 23, 45, 56);
console.dir(oldDate);
const dateNow = Date.now();
console.log(dateNow);
console.log(date.getTime());
const diff = date.getTime() + oldDate.getTime();
console.log(diff.toLocaleString());
console.log(diff > 0 ? date : oldDate);
*/
