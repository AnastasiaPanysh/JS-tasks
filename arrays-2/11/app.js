// 11. Разбить динамичный массив чисел на 2 массива: из четных и нечетных элементов.
// forEach

const arr = [];
let arrEvenNum = [];
let arrOddNum = [];

let n = +prompt('введите кол-во эл массива')
for (let i = 0; i < n; i++) {
    let input = +prompt('введите знач массива');
    arr.push(+input);
}

arr.forEach(elem => {
    if (elem % 2 === 0) {
        arrEvenNum += elem
    } else {
        arrOddNum += elem
    }
})
console.log(`четные: ${arrEvenNum}`);
console.log(`нечетные ${arrOddNum}`);