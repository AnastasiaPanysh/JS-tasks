/* 13. Дан массив с числами. Числа могут быть положительными и отрицательными.
 Найдите сумму всех положительных элементов массива циклом for of*/

// const arr = [1, 2, -2, 3, -3, 4, -4];
// let res = 0;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 0) {
//         res += arr[i]
//     }
// }
// console.log(res);


const arr = [1, 2, -2, 3, -3, 4, -4];
let res = 0;
for (const i of arr) {
    if (i > 0) {
        res += i
    }
}
console.log(res);