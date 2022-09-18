/*16. Дано число 7, найдите все числа кратные 7 до 100*/
let arr = []
for (let i = 7; i <= 100; i++) {
    if (i % 7 === 0) {
        arr.push(i)
    }
}
console.log(arr);