// 12. На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Необходимо создать новый массив из отфильтрованных
// значений, где строка начинается на [a, h]. Проверка на ввод только текстовых
// значений на заполнение массива. filter
// [“ann”, “school”, “hschool”, “borabora”] -> [“ann”, “hschool”]

const arr = [];
let n = +prompt('')
let res = 1;

for (let i = 0; i < n; i++) {
    let input = prompt('');
    if (isNaN(input)) {
        arr.push(input);
    }
}

let arr2 = arr.filter(elem => {
    if (elem[0] === 'a' || elem[0] === 'h') {
        return true;
    }
});
console.log(arr2);