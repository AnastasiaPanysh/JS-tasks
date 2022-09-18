// 4. Напишите функцию, которая принимает массив чисел и находит минимальное и
// максимальное числа соответственно. Добавить проверки на ввод и если
// значения массива не соответствуют условию задания, вывести сообщение об
// ошибке.

const n = +prompt('enter quantity element');

function doArr(value) {
    let arr = []
    for (let i = 0; i < value; i++) {
        arr.push(prompt('enter value'))
    }
    return arr
}

function checkArray(newArr) {
    let res = newArr.filter(el => !isNaN(el))
    return newArr.length === res.length ? true : false
}

function getResult(arr) {
    return checkArray(arr) ? `max${Math.max(...arr)}, min ${Math.min(...arr)}` : 'error'

}
const arr = doArr(n)
console.log(getResult(arr));