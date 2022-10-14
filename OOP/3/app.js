// 3. Реализуйте класс WordString, который будет иметь следующие методы: метод
// reverseString, переворачивающий строку, метод upperFirst, возвращающий строку,
// где первая буква заглавная и метод upperEvery, который делает заглавной
// первую букву каждого слова этой строки.

class WordString {

    reverseString(str) {
        return str.split('').reverse().join('')

    }

    upperFirst(str) {
        return str[0].toUpperCase() + str.slice(1)
    }

    upperEvery(str) {
        return str.toUpperCase()
    }


}

const wordString = new WordString()
console.log(wordString.reverseString('hschool'));
console.log(wordString.upperFirst('hschool'));
console.log(wordString.upperEvery('hschool'));