// 1. Пользователь вводит имя фамилию. Необходимо создать функцию
// возвращающую строку вида «Привет, {имя} {фамилия}»

const yourname = prompt('enter name');
const surname = prompt('enter surname ');

function getName(yourName, surname) {
     return `Привет, ${yourName} ${surname}`
}
// console.log(getName(yourname, surname));
console.log(getName(prompt('enter name'), prompt('enter name')));

