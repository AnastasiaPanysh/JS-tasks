/* 1. Найти максимальное число из 2 введенных (2 способа)*/

let a = +prompt('enter value');
let b = +prompt('enter value');
console.log(Math.max(a, b));

if (a > b) {
    console.log(a);
} else {
    console.log(b);
}