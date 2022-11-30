import { fruits, users, makeTwoDimArray, secondUser } from '../variables.js';

const newArr = users.reduce((acc, user) => {
    if ((user.id % 2 === 0)) {
        return {
            ...acc,
            [user.username]: user.name
        };
    }

    return acc;
}, {});

// console.log(newArr);

// console.log(makeTwoDimArray());

/**
 *
 * @param arr - масив масивів
 * @param edgeNumber - число, за яке мають бути більші всі значення у внутрішньому масиві
 *
 * @return масив ЛИШЕ з масивами, в яких всі значення більші за наш edgeNumber
 */
function getGreaterThan(arr, edgeNumber) {
    console.log(arr);
    return arr
        .filter(item => item.length)
        .map(item => item.filter(el => el > edgeNumber));

    /* return arr.reduce((acc, item) => {

         if (item) {
             acc.push(item.filter(el => el > edgeNumber));
         }

         return acc;
     }, []);*/
}

// console.log(getGreaterThan(makeTwoDimArray(), 4))

/**
 *
 * @param users
 *
 * @return має повертати маисв юзерів, у яких парні id;
 * в кожного юзера треба додати властивість fullName, яка буде конкатинацією полів name i username (через пробіл);
 * в кожному юзері бути бути ЛИШЕ поля  id, name, username, fullName, city ==> address.city
 * і відсортованою за імʼям (fullName) і містом
 */
function makeSomeWithUsers(users) {
    return users.filter(user => user.id % 2 === 0)
        .map(({ id, name, username, address: {city} }) => ({
            id,
            city,
            name,
            username,
            fullName: `${name} ${username}`,
        })).sort((firstUser, secondUser) => {
            if (firstUser.city.localeCompare(secondUser.city) === 0) {
                return firstUser.fullName.localeCompare(secondUser.fullName);
            }

            return firstUser.city.localeCompare(secondUser.city);
        });
}

console.log(users[0]);
console.log(makeSomeWithUsers(users));

/*
function deepCopyObj(obj, resultObj) {
   const result = {}
    Object.keys(obj).forEach(key => {
        if (typeof obj[key] !== 'object' ) {
           resultObj[key] = obj[key]

           return;
        }
        resultObj[key] = {};
        deepCopyObj(obj[key], resultObj[key])
    })
}

deepCopyObj(obj, {});
*/

