/*9. На входе n – количество элементов массива. Далее производится заполнение
массива с клавиатуры. Выведите сумму всех элементов массива. Проверки на
ввод только чисел. Использовать forEach, reduce*/

const arr = [];
let n = +prompt('')
let res = 0;

for (let i = 0; i < n; i++) {
    let input = prompt('');
    if (!isNaN(input)) {
        arr.push(+input)
    }
}

arr.forEach(elem => {
    res += elem
})

const result = arr.reduce(function (sum, elem) {
    return sum + elem
}, 0)
console.log(res);