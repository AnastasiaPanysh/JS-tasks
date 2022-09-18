// 14. На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Реализуйте 3 функции. Первая для формирования
// массива. Вторая для проверки, что в массиве только числа. Третья для получения
// произведения всех элементов массива. Если результат функции проверки – true,
// то вызывать новую функцию, возвращающую произведение всех элементов
// массива

// const n = +prompt('enter quantity element');

// function doArr(value) {
//      let arr = []
//      for (let i = 0; i < value; i++) {
//           arr.push(prompt('enter value'))
//      }
//      return checkArr(arr);
// }

// function checkArr(newArr) {
//      const res = newArr.filter(el => !isNaN(el))
//      return newArr.length === res.length ? doConvert(newArr) : false
// }

// function doConvert(arrConvert) {
//      return arrConvert.map(el => +el)
// }

// function getMultiOfArr(arrOfValues) {
//      const multiRes = arrOfValues.reduce((multi, el) => multi * el, 1)
//      return multiRes
// }

// const arrayInput = doArr(n);
// console.log(getMultiOfArr(arrayInput));



const n = +prompt('enter quantity element');

function doArr(value) {
    let arr = []
    for (let i = 0; i < value; i++) {
        arr.push(prompt('enter value'))
    }
    return arr; // [1, 'test', 44, 0, null]
}

function checkArr(newArr) { //  [1, 'test', 44, 0, null]
    const res = newArr.filter(el => !isNaN(el))
    return newArr.length === res.length ? true : false
}

function doConvert(arrConvert) {
    return arrConvert.map(el => +el)
}

function getMultiOfArr(arrOfValues) {
    if (checkArr(arrOfValues)) return doConvert(arrOfValues).reduce((multi, el) => multi * el, 1)
    else return 'ERROR'
}

console.log(getMultiOfArr(doArr(n)));