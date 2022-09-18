// 8. На входе массив. Реализуйте 2 функции. Первая для проверки, что в массиве
// только числа. Вторая для получения массива с удоенными значенями каждого
// элемента. Если результат функции проверки – true, то вызывать новую функцию,
// возвращающую массив с удвоенными элементами

const arr = [1, 2, 3];

function checkArr(newArr) {
     const res = newArr.filter(el => !isNaN(el))
     return newArr.length === res.length ? getDoubleArr(newArr) : false
}

function getDoubleArr(arrOfValues) {
     const double = arrOfValues.map(el => el ** 2)
     return double
}

console.log(checkArr(arr));
