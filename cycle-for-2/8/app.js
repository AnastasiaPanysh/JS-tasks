/*8. Преобразуйте первую букву каждого слова строки в верхний регистр.*/

const str = 'я люблю кушать'
let result = ''
for (let i = 0; i < str.length; i++) {
    if (i === 0 || str[i - 1] === ' ') {
        result += str[i].toUpperCase();
    }else{
        result+=str[i]
    }
}
console.log(result);