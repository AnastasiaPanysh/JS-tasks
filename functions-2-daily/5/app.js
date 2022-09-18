// 5. На входе строка в виде пароля. Необходимо написать функцию на проверку, что
// пароль является надежным (содержит хотя бы 1 букву в большом регистре, числа,
// буквы, символ, длина не менее 8 символов)

const str = "password123N@".split("")

function checkPassword(newArr) {
     // const symbol = '!@#$%^&*()-+'.split('');
     let upperValue = newArr.some(elem => elem.toUpperCase() ? true : false) //хотя бы 1 буква верхний регистр
     let numValue = newArr.some(elem => !isNaN(elem) ? true : false) //числа
     let strValue = newArr.some(elem => isNaN(elem) ? true : false) //буквы
     // let symValue = newArr.some(elem => elem.includes(symbol[elem]) ? true : false) //символы

     return upperValue && numValue && strValue /*&& symValue*/ && newArr.length >= 8 ? true : false
}

console.log(checkPassword(str));