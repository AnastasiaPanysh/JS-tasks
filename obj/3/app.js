// 3. На входе статичный объект и строка str. Написать функцию на поиск в объекте
// значения str. Values

const obj = {
     id: 1,
     name: 'Nastya',
     age: 21
}

const str = 'Nastya';

function check(str, obj) {
     const arrValues = Object.values(obj)
     let flag = false
     for (const item of arrValues) {
          if (item === str) {
               flag = true
               break
          }
     }
     return flag
}

console.log(check(str, obj));