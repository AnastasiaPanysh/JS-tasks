/*24.На вход программе подается строка. Напишите программу, которая подсчитывает
количество буквенных символов в нижнем регистре.
abcABCD12345 => 3*/

const str = 'abcABCD12345';
let count = 0;
for (let i = 0; i < str.length; i++) {
    if (str[i] == str[i].toLowerCase() && str[i] !== 0 || str[i] !== 1 || str[i] !== 2 || str[i] !== 3 || str[i] !== 4 || str[i] !== 5 || str[i] !== 6 || str[i] !== 7 || str[i] !== 8 || str[i] !== 9) {
        count += 1
    }
}
console.log(count);