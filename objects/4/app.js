// 4. На входе статичный объект. Необходимо вывести все четные значения объекта.

const obj = {
    a: 1,
    b: 2,
    c: 3,
    d: 4
}
for (const elem in obj) {
    if (obj[elem] % 2 === 0) {
        console.log(obj[elem]);
    }
}