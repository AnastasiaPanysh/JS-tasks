// 7. На входе массив. Реализуйте 2 функции. Первая для проверки, что в массиве
// только строки. Вторая для получения суммы всех строчных элементов массива.
// Если результат функции проверки – true, то вызывать новую функцию,
// возвращающую конкатенацию всех строчных элементов массива

const arr = ['п', 'р', 'и', 'в', 'е', 'т'];

function checkArr(newArr) {
     const res = newArr.filter(el => isNaN(el))
     return newArr.length === res.length ? getSumOfArr(newArr) : false
}

function getSumOfArr(arrOfValues) {
     const sum = arrOfValues.reduce((sum, el) => sum + el)
     return sum
}

console.log(checkArr(arr));
