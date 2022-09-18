// 7. Найти значение массива, повторяющееся в нем наибольшее количество раз

const arr = [1, 2, 3, 3, 3, 4, 5].sort();
const a = [];
const obj = {};

arr.forEach(elem => {
    if (a.includes(elem)) {
        obj[elem] += '1'
    } else {
        a.push(elem)
        obj[elem] = '1'
    }
})

for (const key in obj) {
     if () {

     }
       

