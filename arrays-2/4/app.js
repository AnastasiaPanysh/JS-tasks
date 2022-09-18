// 4. Палиндром. Сравнить с развернутой строкой не используя reverse. For


const str = 'milan'.toLowerCase().trim().split('');
const str2 = 'nalim'.toLowerCase().trim().split('');
let s = [];
if (str.length === str2.length) {
     for (let i = str.length - 1; i >= 0; i--) {
          s1.push(str[i]);
     }
     console.log((str2.join('') === s.join('')) ? true : false);
}
