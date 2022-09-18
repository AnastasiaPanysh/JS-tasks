/*5. Найдите максимальное значение в статичном массиве используя цикл.*/

const arr = [-1, -2, -3, -4, -5, -1, -2];
let a = arr[0];
for (let i = 0; i < a.lenght; i++) {
    if (arr[i] > a) {
        a = arr[i]
    }
}
console.log(a);