/*1. Дана строка в виде числа. Необходимо просуммировать все элементы числа
‘123’ -> 6
‘111111111111’ -> 12*/

const a = '123'
let b = 0
for (let i = 0; i < a.length; i++) {
    b += a[i]
}
console.log(b);
