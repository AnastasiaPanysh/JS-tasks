// 6. На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Необходимо вывести true, если хотя бы 1 элемент массива –
// число. Some, forEach

let n = prompt('')
const arr = []

for (let i = 0; i < n; i++) {
    arr.push(+prompt(''))
}

let check = arr.some(elem => {
    if (Number.isInteger(elem)) {
        return true
    }
})
console.log(check);