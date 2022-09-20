// 8. Реализуйте функцию, которая принимает массив последовательных
// (возрастающих) букв и возвращает отсутствующую в массиве. Добавить проверки
// ["a","b","c","d","f"] -> "e"
// ["O","Q","R","S"] -> "P"

const alphabet = 'abcdefghijklmnopqrstuvwxyz';
const testStr = 'acde';
const first = alphabet.indexOf(testStr[0]);
let indexStr = 0;

for (let i = first; i < testStr.length; i++) {
    if (testStr[indexStr] === alphabet[i]) {
        indexStr++
    } else {
        console.log(alphabet[i]);
        break
    }
}