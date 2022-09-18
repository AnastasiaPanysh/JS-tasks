// 2. На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Напишите функцию, которая принимает массив строк и
// находим там наибольшее по длине текстовое значение. Добавить проверки

const n = +prompt('enter quantity element');

function doArr(value) {
     let arr = []
     for (let i = 0; i < value; i++) {
          arr.push(prompt('enter value'))
     }
     return arr
}

const checkValue = (newArr) => {
     const error = newArr.filter(el => isNaN(el))
     return newArr.length === error.length ? true : false
}

const findValue = (arr) => {
     if (checkValue(arr)) {
          let total = arr[0]
          arr.forEach(el => el.length > total.length) ? total = el : null
          return total
     } else {
          return 'error'
     }
}
console.log(findValue(doArr(n)));