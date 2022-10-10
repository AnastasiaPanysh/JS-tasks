
// 1. На входе статичный объект и строка str. Необходимо найти в объекте ключ str и
// вывести true при наличии совпадения, false в противном случае

const obj = {
    id: 1,
    name: 'nastya',
    age: 21
}

const str = 'age';

function check(str, obj) {
    const arr = Object.keys(obj);
    let flag = false
    for (const item of arr) {
        flag = (item === str) ? true : false
    }
    return flag
}

console.log(check(str, obj));

//альтернативное короткое решение
console.log(obj.hasOwnProperty(str));