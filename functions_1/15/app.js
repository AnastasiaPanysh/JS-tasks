// 15. На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Реализуйте 3 функции. Первая для формирования
// массива. Вторая для проверки, что в массиве только числа. Третья для
// формирования массива из всех четных чисел, возведенных в квадрат. Если
// результат функции проверки – true, то вызывать новую функцию, возвращающую
// массив из всех четных чисел, возведенных в квадрат


const n = +prompt('enter quantity element');

function doArr(value) {
    let arr = []
    for (let i = 0; i < value; i++) {
        arr.push(prompt('enter value'))
    }
    return arr;
}

function checkArr(newArr) {
    const res = newArr.filter(el => !isNaN(el))
    return newArr.length === res.length ? true : false
}

function doConvert(arrConvert) {
    return arrConvert.map(el => +el)
}

function getEvenDoubleArr(arrOfValues) {
    if (checkArr(arrOfValues)) arrOfValues.filter(el => el % 2 === 0)
    else 'ERROR'
    return arrOfValues.map(el => el ** 2)
}

console.log(getEvenDoubleArr(doArr(n)));