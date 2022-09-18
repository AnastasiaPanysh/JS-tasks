/*13. Найдите минимальное значение в массиве используя цикл*/

const arr = [1, 2, -10, 10]
let a = arr[0]
for (let i = 0; i < arr.length; i++) {
    if (a > arr[i]) {
        a = arr[i]
    }
}
console.log(a);