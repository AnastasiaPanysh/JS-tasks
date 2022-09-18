// 19. На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры (хотя бы один элемент массива – 0). Необходимо вывести
// сумму всех значений массива до первого 0. Добавить проверки на ввод чисел.

let n = +prompt('кол-во эл в массиве')
const arr = []
for (let i = 0; i < n; i++) {
    let input = prompt('');
    if (!isNaN(input)) {
        arr.push(+input)
    }
}

let res = 0
for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
        break;
    } else {
        res += arr[i]
    }
}
console.log(res);