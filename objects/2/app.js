// 2. На входе статичный объект. Необходимо вывести все числовые ключи.

const obj = {
     a: 1,
     10: 'привет',
     c: 2,
     3: 'пока'
}
for (const elem in obj) {
     if (!isNaN(elem)) {
          console.log(elem);
     }
}

