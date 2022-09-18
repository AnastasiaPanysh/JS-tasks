// 3. Найти максимальное и минимальное число динамичного массива. forEach

let n = +prompt('')
const arr = []
for (let i = 0; i < n; i++) {
     let input = prompt('')
     if (!isNaN(input)) {
          arr.push(+input)
     }
}
let a = arr[0]
let b = arr[0]
arr.forEach(elem => {
     if (elem > a) {
          a = elem
     }
     if (elem < b) {
          b = elem
     }
})
console.log(a);
console.log(b);
