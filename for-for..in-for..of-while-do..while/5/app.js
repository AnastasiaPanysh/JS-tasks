/*5. Выведите столбец четных чисел в промежутке от 0 до 100 (for)*/

// const a = 100;
// for (let i = 0; i <= a; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }

const a = 100;
let i = 0
do {
    if (i % 2 === 0) {
        console.log(i);
    }
    i++
} while (i <= a)
