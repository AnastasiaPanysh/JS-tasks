// 1. На вход подается строка в виде числа. Необходимо написать регулярное
// выражение. Если строка состоит только из чисел, то вывести булевое true, в
// противном случае бросить исключение и обработать

const num = '123987456'

function checkArr(str) {
    try {
        if (!/^[\d]+$/g.test(str)) throw new error('не подходит под RegEx')
        return true
    } catch (err) {
        return err.message
    }
}
console.log(checkArr(num));