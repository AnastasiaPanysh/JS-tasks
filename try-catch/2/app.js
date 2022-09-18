// 2. На входе массив значений. Необходимо его обработать. Если в массиве есть хотя
// бы 1 строка, бросить исключение.

const arr = [1, 2, 3, 4, 5, 6, 'hello']

function checkArr(x) {
    try {
        let bool = x.every(el => !isNaN(el))
        if (!bool) {
            throw new Error('одно знач не чмисло')
        }
        return x
    } catch (error) {
        return error.message
    }
}
console.log(checkArr(arr));