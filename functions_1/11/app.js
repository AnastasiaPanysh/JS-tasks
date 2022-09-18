// 11. На входе строка. Необходимо создать функцию, возвращающую true, если это
// слово палиндром и false в противном случае
// const str = 'anna'

function getPalindrom(newStr) {
    const newStrRev = newStr.split().reverse().join()
    return newStr === newStrRev ? true : false
}
console.log(getPalindrom(str));