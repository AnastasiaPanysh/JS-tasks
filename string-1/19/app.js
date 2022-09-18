/*19. На вход программе подается строка. Преобразуйте первую букву каждого слова
строки в верхний регистр (for)*/

const str = 'привет я настя';
let result = ''
for (let i = 0; i < str.length; i++) {
    if (i === 0 || str[i - 1] === ' ') {
        result = result + str[i].toUpperCase();
    } else {
        result += str[i];
    }
}
console.log(result);