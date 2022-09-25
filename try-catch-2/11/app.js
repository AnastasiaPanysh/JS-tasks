//11. Реализуйте функцию, принимающую 2 строки и возвращающую, true, если часть
// одной строки можно переставить так, чтобы она соответствовала 2 строке, и false в
// противном случае, если совпадений нет
// “rkqodlw”, “world” –> true (rkqodlw содержит world)
// “katas”, “steak” –> false (katas не включает steak после перестановки символов)

const str = 'rkqodlw'.split('').sort().join();
const word = 'world'.split('').sort().join();

function checkWord(str, word) {
    let wordLength = 0
    for (let i = 0; i < word.length; i++) {
        if (str.includes(word[i])) {
            wordLength++
        }
    }
    if (wordLength === word.length) true
    else false
}
console.log(checkWord(str, word));