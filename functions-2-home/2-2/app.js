// 2. *Вычислите сумму массива целых чисел статичного массива используя рекурсию
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

function doSum(newArr) {
    return newArr.reduce((sum, elem) => {
        return sum + elem;
    }, 0)
}
console.log(doSum(arr));