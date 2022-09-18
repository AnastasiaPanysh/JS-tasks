//     4. Заполнять массив числами бесконечно до тех пор, пока длина массива не будет
//     равна 5. Вывести массив в консоль (цикл for, while)

// let arr = []
// while (arr.length != 5) {
//     let someDate = prompt('enter some data')
//     if (isNaN(someData) || someDate == '') {
//         arr.push(+someDate)
//     }
// }
// console.log(arr);

let arr = []
for (;;) {
    let someDate = prompt('enter some data')
    if (isNaN(someData) || someDate == '') {
        arr.push(+someDate)
    }
    if (arr.length === 5) break;
}

console.log(arr);