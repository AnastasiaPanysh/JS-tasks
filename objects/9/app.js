// 9. На входе статичный объект. Необходимо посчитать количество пар (ключ:
// значение) где значение число и вывести количество 

const obj = {
     name: 'Nastya',
     a: 1,
     b: 2,
     c: 3,
     d: 4
}
let counter = 0;
for (const key in obj) {
     if (!isNaN(obj[key])) {
          counter++;
     }
}
console.log(counter);
