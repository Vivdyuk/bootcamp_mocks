/**
 *
 * @param message
 * @return
 */
const makeSmthWithStgring = (message) => {
    return message.split('-').map(word => word[0].toUpperCase() + word.slice(1).toLocaleLowerCase()).join('')
}

console.log(makeSmthWithStgring('helLo-woRld-guys'))
makeSmthWithStgring('goodbye-miniWorld-guys')