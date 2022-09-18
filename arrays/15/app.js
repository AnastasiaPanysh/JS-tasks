// 15. Пользователь вводит 6 значений и распределяет их поровну между 2 массивами.
// Cоздать новый массив, добавить туда значения всех массивов. Spread, rest

const arr = [];
const arr2 = [];

for (let i = 0; i < 3; i++) {
    let input = prompt('Введите эл массива');
    arr.push(input);
}

for (let i = 3; i < 6; i++) {
    let input = prompt('Введите эл массива');
    arr2.push(input);
}

const res = [...arr, ...arr2];
console.log(res);