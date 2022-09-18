/*запиши массив без повторений*/

const arr = [1, 2, 1, 3, 4, 3, 1]
let arr2 = []
for (let i = 0; i < arr.length; i++) {
    if (arr2.includes(arr[i])) {
        continue
    } else {
        arr2.push(arr[i])
    }
}
console.log(arr2);