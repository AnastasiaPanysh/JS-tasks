/* 10. Дан массив с элементами [1, 2, 2, 3, 4, 4, 3, 4, 5]. Выведите только уникальные
 значения массива -> [1, 5] (for)*/

// const arr = [1, 2, 2, 3, 4, 4, 3, 4, 5].sort();
// const arr2 = [];
// for (let i = 0; i < arr.length; i++) {
//     if (!(arr[i - 1] === arr[i] || arr[i] === arr[i + 1])) {
//         arr2.push(arr[i])
//     }
// }
// console.log(arr2);


const arr = [1, 2, 2, 3, 4, 4, 3, 4, 5].sort();
const arr2 = [];
let i = 0
do {
    if (!(arr[i - 1] === arr[i] || arr[i] === arr[i + 1])) {
        arr2.push(arr[i])
    }
    i++
} while (i < arr.length);
console.log(arr2);