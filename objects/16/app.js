// 16. На входе объект из 5 свойств. Значения вводим с клавиатуры. Необходимо
// проитерировать значения объекта и сформировать на основе этих чисел массив

const obj = {
    0: prompt(''),
    1: prompt(''),
    2: prompt(''),
    3: prompt(''),
    4: prompt(''),
}
const arr = [];

for (const key in obj) {
    arr.push(obj[key])
}
console.log(arr);