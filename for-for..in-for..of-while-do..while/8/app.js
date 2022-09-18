/*8. Дан массив с элементами [1, 2, 2, 3, 4, 4, 3, 4, 5]. Выведите каждый элемент массива
без повторений -> [1, 2, 3, 4, 5] (for, for of)*/

// const arr = [1, 2, 2, 3, 4, 4, 3, 4, 5];
// let arr1 = [];
// for (let i = 0; i < arr.length; i++) {
//     if (arr1.includes(arr[i])) {
//         continue
//     } else {
//         arr1.push(arr[i]);
//     }
// }
// console.log(arr1);


const arr = [1, 2, 2, 3, 4, 4, 3, 4, 5];
let arr1 = [];
for (const item of arr) {
    if (!arr1.includes(item)) {
        arr1.push(item)
    }
}
console.log(arr1);