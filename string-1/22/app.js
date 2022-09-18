/*22. На вход программе подается строка. Напишите программу, которая меняет
регистр символов, другими словами замените все строчные символы заглавными
и наоборот.
Swap Case => sWAP cASE*/

const str = 'мЕНЯ зОВУТ нАСТЯ';
let result = '';
for (let i = 0; i < str.length; i++) {
    if (str[i] == str[i].toLowerCase()) {
        result += str[i].toUpperCase();
    } else if (str[i] == str[i].toUpperCase()) {
        result += str[i].toLowerCase();
    }
}
console.log(result);