// 9. На входе массив. Реализуйте 2 функции. Первая для проверки, что в массиве
// только числа. Вторая для получения только четных элементов массива. Если
// результат функции проверки – true, то вызывать новую функцию, возвращающую
// массив с четными элементами массива

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function checkArr(newArr) {
    const res = newArr.filter(el => !isNaN(el))
    return newArr.length === res.length ? getEvenArr(newArr) : false
}

function getEvenArr(arrOfValues) {
    const evenArr = arrOfValues.filter(el => el % 2 === 0)
    return evenArr
}

console.log(checkArr(arr));