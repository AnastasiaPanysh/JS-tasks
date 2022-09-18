// 1. Сумма элементов массива динамичного массива. reduce

let n = +prompt('')
const arr = []
for (let i = 0; i < n; i++) {
     let input = prompt('')
     if (!isNaN(input)) {
          arr.push(+input)
     }
}

let res = arr.reduce((sum, elem) => {
     return sum + elem
}, 0)
console.log(res);