/*4. На вход подаются 2 строки. Если исходная 1 строка зкаканчивается на 2 строку
вывести true, в противном случае false*/

const a = 'hschool.com'.split('.');
const b = 'com'
if (a[a.length - 1] === b) {
    console.log(true);
} else {
    console.log(false);
}