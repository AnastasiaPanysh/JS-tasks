// 2. Найти максимальное число динамичного массива. filter

let n = +prompt('')
const arr = []
for (let i = 0; i < n; i++) {
     let input = prompt('')
     if (!isNaN(input)) {
          arr.push(+input)
     }
}
let a = arr[0]

let res = arr.filter(function (elem) {
     if (a < elem) {
          a = elem
          return true
     }
})
console.log(res[res.length - 1]);