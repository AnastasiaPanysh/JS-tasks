// 3. На вход подается строка из 2 и более слов. Необходимо все пробелы заменить на
// “!”. Если же длина исходной строки изменилась, вывести true, в противном случае
// бросить исключение и обработать

const str = 'Nastya Panysh Hello';

function changeArr(str) {
    try {
        const strChanged = str.replaceAll(/ /g, "!")
        if (strChanged.includes(' ')) throw new error('не изменился пробел')
        return strChanged
    } catch (err) {
        return err.message
    }
}
console.log(changeArr(str));