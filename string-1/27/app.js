/*27. На вход подается url. Если он начинается с http, содержит хотя бы один “/” и
заканчивается подстрокой .com или .ru, то вывести true, в противном случае false*/

const a = 'hschool.com'.split('.');
const b = 'com';
const c = 'ru';
const d = 'http';


if (a[0] === d && a[a.length - 1] === b || a[0] === d && a[a.length - 1] === c) {
    console.log(true);
} else {
    console.log(false);
}