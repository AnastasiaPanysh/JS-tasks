/*11. Задача на анаграмму. На входе 2 строки, необходимо выявить являются ли
введенные значения анаграммами*/

const a = 'пила'
const b = 'липа'
let result = ''
for (let i = 0; i < a.length; i++) {
    if (a.length = b.length && b.includes(a[i])) {
        result = 'true'
    } else {
        result = 'false'
    }
}
console.log(result);