// 1. На входе число n. Напишите функцию, которая переворачивает число.

const n = 127;

const doRevers = (number) => {
     return String(n).split('').reverse().join('')
}
console.log(doRevers(n));
