// 11. На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Выведите произведение всех элементов массива.
// Проверки на ввод только чисел. Использовать forEach, reduce

const arr = [];
let n = +prompt('')
let res = 1;

for (let i = 0; i < n; i++) {
    let input = prompt('');
    if (!isNaN(input)) {
        arr.push(+input)
    }
}

arr.forEach(elem => {
    res *= elem
})

const result = arr.reduce(function (multi, elem) {
    return multi * elem
}, 1)
console.log(result);