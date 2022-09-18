// 5. На входе статичный объект. Необходимо сформировать массив из всех нечетных
// ключей объекта.

const obj = {
     1: 'a',
     2: 'b',
     3: 'c',
     4: 'd'
}
const arr = []
for (const key in obj) {
     if (key % 2 !== 0) {
          arr.push(key)
     }
}
console.log(arr);
