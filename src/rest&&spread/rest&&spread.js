import { users, fruits } from '../variables.js';


const obj = {
    test: {
        value: {
            length: 6,
            skip: true,
            skip2: true,
            skip3: true,
            skip4: true,
            skip5: true,
        }
    }
}

// const {length, skip, skip2, skip3, skip4, skip5} = obj.test.value
// ===
const length = obj.test.value.length;
const skip = obj.test.value.skip;
const skip2 = obj.test.value.skip2;
const skip3 = obj.test.value.skip3;
const skip4 = obj.test.value.skip4;
const skip5= obj.test.value.skip5;

const test = ['first', 'second', 'third'];

const first = test[0];
const second = test[1];
const third = test[2];

// const [skip, foo, bar] = test;
/*
{
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  }
 */

/**
 *
 * @param user
 * @return повернути масив з іменем юзера, міcтом його проживання і назвою компанії, де він працює
 */
function  getNeededFields ({name: userName, address: {city}, company: {name}}) {

  return  [
      userName,
      city,
      name
  ]
}
// const firstUser = users[0];
// const secondUser = users[1];
// const thirdUser = users[2];

const [maslo, moloko, yaycya, ...holodylnyk] = users;
const {name, address} = maslo;

function doSmth(users) {
    // const bob = users[0];
    // const jeremy = users[1];
    // const vasya = users[2];
    // const stepan = users[3];

    if (bob.name.includes('')) {
        console.log('here');
    } else if (stepan.company.name.includes('')) {

    }  else if (vasya.address.city.includes('')) {

}

    /**
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     */
    return bob
}

// function snth(user, ...args) {
//     // console.log(arguments);
//     // console.log(user);
//     // console.log(args);
//
//     return [
//         user,
//         ...args
//     ]
// }



// console.log(getNeededFields(user));
// console.log(user);
                        /* 1,  undefined*/   /* 2 */
function helpMePlease([arg1, arg2], [arg3]) {
    // console.log(arg1);
    return [
        arg1,   /* 1 */
        arg2,   /* undefined */
        arg3    /* 2 */
    ];
}


/*const first = [[1], [2, 3]];
const second = [['f', 't'], ['s']]*/
// console.log(helpMePlease(first, second));
// console.log(helpMePlease(...first, second));
// console.log(helpMePlease(first, ...second));
// console.log(helpMePlease(...first, ...second));
// console.log(helpMePlease(first, second));
// console.log(helpMePlease(first, second));
// console.log(helpMePlease(first, second));








// helpMePlease(first, second)
// console.log(helpMePlease(...first, second));
// console.log(helpMePlease(first, second));
// console.log(helpMePlease(first, ...second)); /* ([1, 2], 'f', 's') */
