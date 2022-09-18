// 6. Напишите функцию, принимающую в качестве параметра статичный объект.
// Функция возвращает количество пар ключ / знаечение. IIFE

const obj ={
     name: 'Nastya',
     lastname:'Panysh',
     age:21
}

function checkObj(newObj) {
    return Object.values(obj).length;
}

console.log(checkObj(obj));
