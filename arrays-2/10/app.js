// 10. На вход программе подается число n. Составить массив элементов от 1 до n.
// Найти факториал числа. reduce

let n = +prompt("enter n");
const arr = [];
for (let i = 0; i < n; i++) {
    arr.push(i + 1)
}
let res = arr.reduce((elem, i) => {
    return elem * i
}, 1)
console.log(res);