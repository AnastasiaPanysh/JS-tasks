// 8. Дана строка состоящая из чисел, букв, специальных символов. Необходимо
// оставить в строке только буквенные символы используя регулярные выражения.
// Если же длина исходной строки изменилась, вывести true, в противном случае
// бросить исключение и обработать

const str ='hello5$'.split('')


function checkStr(str) {
    try {
        const errorStr = /[0-9_\-\.!@#$&*]/;
        if (str.includes(errorStr)) throw new Error('error. have numbers');
        return true;
    } catch (error) {
        return error.message;
    }
}

console.log(checkStr(str));