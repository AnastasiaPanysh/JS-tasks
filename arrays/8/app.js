/*8. На входе n – количество элементов массива. Далее производится заполнение
массива с клавиатуры. Если все элементы массива – числа, то вывести логическое
true, в противном случае false. Every, forEach*/


// const arr = [];
// let n = +prompt('введите кол-во эл массива')
// for (let i = 0; i < n; i++) {
//     let input = +prompt('введите знач массива')
//     arr.push(+input)

// }
// let result = arr.every(elem => {
//     if (!isNaN(elem)) {
//         return true;
//     } else {
//         return false;
//     }
// })

// arr.forEach(elem => {
//     console.log(!isNaN(elem) ? true : false);
// })


const arr = [];
let n = +prompt('введите кол-во эл массива');
arr.forEach(elem => {
    console.log(!isNaN(elem) ? true : false);
})