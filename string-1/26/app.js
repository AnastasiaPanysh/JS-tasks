/*26. На вход программе подается строка текста. Напишите программу, которая
проверяет, что строка заканчивается подстрокой .com или .ru. Если
заканчивается, то вывести true, в противном случае false*/

const a = 'hschool.com'.split('.');
const b = 'com';
const c = 'ru';
if (a[a.length - 1] === b || a[a.length - 1] === c) {
    console.log(true);
} else {
    console.log(false);
}