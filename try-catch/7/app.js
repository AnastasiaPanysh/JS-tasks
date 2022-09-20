// 7. Реализуйте функцию, которая принимает число и возвращает возвенную в
// квадрат каждую цифру числа соединяя их. Добавить проверки
// 9119 -> 811181 (9
// 2 === 81, 1
// 2=== 1)

const num = '9119'.split('')

function checkNum(newNum) {
    const newArr = newNum.filter(el => !isNaN(el))
    if (!newArr.length) throw new Error('not a number')
    return true
}

function doNumberSquared(newNum) {
    try {
        if (checkNum(newNum)) {
            const numSquared = newNum.map(el => el ** 2).join('')
            return numSquared
        }
    } catch (error) {
        return error.message
    }
}

console.log(doNumberSquared(num));


//не работает 