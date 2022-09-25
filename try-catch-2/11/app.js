//11. Реализуйте функцию, принимающую 2 строки и возвращающую, true, если часть
// одной строки можно переставить так, чтобы она соответствовала 2 строке, и false в
// противном случае, если совпадений нет
// “rkqodlw”, “world” –> true (rkqodlw содержит world)
// “katas”, “steak” –> false (katas не включает steak после перестановки символов)

const str = 'rkqodlw'.split('').sort().join();
const word = 'world'.split('').sort().join();

function checkWord(str, word) {
    if (str.includes(word)) {
        return true
    } else {
        false
    }
}
console.log(checkWord(str, word));
не работает