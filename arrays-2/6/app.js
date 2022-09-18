// 6. Посчитать количество согласных в строке. В задаче необходимо хоть как-то
// затронуть forEach

let n = +prompt('введите кол-во элементов')
const arr = []
const arr2 = ['а', 'у', 'о', 'и', 'э', 'ы', 'я', 'ю', 'е', 'ё']
for (let i = 0; i < n; i++) {
     let input = prompt('введите элемент массива')
     arr.push(input)
}
let res = 0
arr.forEach(elem => {
     if (!arr2.includes(elem)) {
          res += 1
     }
})
console.log(res);