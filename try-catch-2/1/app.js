// 1. Реализуйте функцию, которая принимает динамичный массив и находит сумму
// всех положительных чисел. Добавить проверки

const n = +prompt('enter quantity element');

function doArr(value) {
     const arr = []
     for (let i = 0; i < value; i++) {
          arr.push(+prompt('enter value'))
     }
     return arr
}

function getSum(arr) {
     let newArr = arr.reduce((sum, el) => {
          if (el > 0) return sum + el
          else return sum + 0
     }, 0)
     return newArr
}

console.log(getSum(doArr(n)));

