// 7. Реализуйте функцию, принимающую строку. Ваша задача – вернуть средний
// символ слова. Если длина слова нечетная, вернуть средний символ. Если длина
// слова четная, верните средние 2 символа. Добавить проверки
// test –> es
// testing –> t

const str = 'test'.split('')

function checkStr(str) {
    let bool = str.some(el => (isNaN(el) ? true : false))
    if (!bool) throw new Error('не строка')
    return true
}

function getMiddleSymbol(str) {
    try {
        checkStr(str)
        if ((str.length) % 2 !== 0) {
            return str[Math.round(str.length / 2)]
        } else {
            return str[(Math.round(str.length / 2)) - 1] + str[Math.round(str.length / 2)]
        }
    } catch (error) {
        error.message
    }

}
console.log(getMiddleSymbol(str));