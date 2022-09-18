// 14. На входе статичный объект с повторяющимися значениями. Необходимо
// отфильтровать значения объекта и оставить только уникальные значения
// { {
// 1 : 1, 1 : 1,
// 2 : 2, 2 : 2,
// 3 : 2, 4 : 3,
// 4 : 3, -> 5 : 4,
// 5 : 4, 7 : 5
// 6 : 4 }
// 7 : 5
// }



const obj = {
     1: 1,
     2: 2,
     3: 2,
     4: 3,
     5: 4,
     6: 4,
     7: 5
}

const value = []

const obj_2 = {}
for (const key in obj) {
     if (!value.includes(obj[key])) {
          value.push(obj[key])
     }
}
value.forEach((elem, index) => {
     obj_2[index] = elem
})
console.log(obj_2);
