// 3. На входе статичный объект. Необходимо вывести все числовые значения.

const obj = {
     a: 1,
     10: 'привет',
     c: 2,
     3: 'пока'
}
for (const elem in obj) {
     if (!isNaN(obj[elem])) {
          console.log(obj[elem]);
     }
}
