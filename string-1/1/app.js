/*1. Ввести строку. Если эта равна “hschool”, вывести true. В противном случае false.
Добавить проверки для строк. Удалить лишние пробелы*/

let str = prompt("введите строку").trim();
console.log(isNaN(str) && str.toLowerCase() === 'hschool') ? true : false;