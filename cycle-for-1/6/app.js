/*6. На вход подается строка в виде электронной почты. Если строка содержит “@” и
оканчивается на .com, .ru, то вывести true, иначе false*/

const a = '@hschool.com'.split('.');
const b = '@';
const c = 'com';
const d = 'ru';
if (a[a.length - 1] === b && a[a.length - 1] === c || a[a.length - 1] === d) {
    console.log(true);
} else {
    console.log(false);
}