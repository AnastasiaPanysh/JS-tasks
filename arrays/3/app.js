//     3. На входе n – количество элементов массива. Далее производится заполнение
//     массива с клавиатуры. Необходимо вывести значения массива без дублирования.
//     Если длина массива равна 0, то вывести ‘Массив пуст’. Добавить проверку на ввод
//     только чисел после каждого введенного элемента.
//     1, 1, 3, 4, 4, 4, 2, 5 -> 1, 2, 3, 4, 5

const arr = [];
const arr2 = []
let n = +prompt()

for (let i = 0; i < n; i++) {
    let input = prompt('')
    if (!isNaN(input))
        arr.push(input)
}

arr.forEach(elem => {
    if (!arr2.includes(elem)) {
        arr2.push(elem)
    }
})
console.log(arr2);

for (let elem of arr) {
    if (!arr2.includes(elem)) {
        arr2.push(elem)
    }
}

console.log(arr2.length === 0 ? 'массив пуст' : arr2);