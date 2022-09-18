// 18. На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Необходимосоздать новый массив, где каждый элемент
// возведен в квадрат. map

let n = +prompt('кол-во эл в массиве')
const arr = []
for (let i = 0; i < n; i++) {
    let input = prompt('');
    if (!isNaN(input)) {
        arr.push(input)
    }
}
let arr_res = arr.map(function (elem) {
    return elem ** 2
})
console.log(arr_res);