// 6. На входе статичный объект. Необходимо числовые значения удвоить на выходе.

const obj = {
     1: 'a',
     2: 'b',
     3: 'c',
     4: 'd',
     name: 'udemy',
     id: 'hschool'
}
const arr = []

for (const key in obj) {
     if (!isNaN(obj[key])) {
          arr.push(obj[key] * 2)
     }
}
console.log(arr);


