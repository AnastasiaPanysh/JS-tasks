/*1. Написать функцию с использованием TypeScript которая принимает 2 числа и
возводит 1 во 2 степень. Добавить необходимые проверки.
Написать тест для функции*/


// function doPow(a, b) {
//     if (isNaN(a) || isNaN(b)) return false
//     if (typeof a === 'string' || typeof b === 'string') return false
//         return a ** b
// }


// describe('test doPow function', () => {
//     test('test toBe success', () => {
//         const pow = doPow(2, 2)
//         expect(pow).toBe(4)
//     })

//     test('test toBe false', () => {
//         const pow = doPow('o', 'p')
//         expect(pow).toBeFalsy()
//     })

//     test('test toBe error', () => {
//         const pow = doPow('2', '3')
//         expect(pow).toBeFalsy()
//     })

// })


/*2. Написать функцию с использованием TypeScript которая принимает 2 числа и
возвращает результат произведения 2 множителей. Добавить необходимые
проверки.
Написать тест для функции*/

// function doMultiply(a, b) {
//     if (!a || !b) return false
//     if (isNaN(a) || isNaN(b)) return false
//     return a * b
// }

// describe('doMultiply', () => {
//     test('return number', () => {
//         const res = doMultiply(2, 2)
//         expect(res).toBe(4)
//     })

//     test('return false', () => {
//         const res = doMultiply()
//         expect(res).toBeFalsy()
//     })

//     test('return false', () => {
//         const res = doMultiply('a', 'b')
//         expect(res).toBeFalsy()
//     })
// })



/*3. Написать функцию с использованием TypeScript которая принимает массив
чисел и находит сумму всех элементов. Добавить необходимые проверки.
Написать тест для функции*/

// function doSum(arr) {

//     let sum = 0
//     for (let i = 0; i < arr.length; i++) {
//         if (isNaN(arr[i])) return false
//         if (!arr.length) return false
//         sum += arr[i]
//     }
//     return sum
// }

// function doArray(b) {
//     // const b = Math.floor(Math.random() * 10)
//     const arr = []
//     for (let i = 0; i < b; i++) {
//         arr.push(Math.floor(Math.random() * 100))
//     }
//     return arr
// }

// describe('test function', () => {
//     test('return sum', () => {
//         const res = doSum([1, 2, 3, 4])
//         expect(res).toBe(10)
//     })

//     test('return false', () => {
//         const res = doSum([1, 2, 3, 4, 'hello'])
//         expect(res).toBeFalsy()
//     })

//     test('return false', () => {
//         const res = doSum([])
//         expect(res).toBeFalsy()
//     })

//     test('return false', () => {
//         const b = Math.floor(Math.random() * 10)
//         const arr = doArray(b)
//         const res = doSum(arr)

//         expect(arr).toBeTruthy()
//         expect(arr).toHaveLength(b)
//         expect(res).toBeTruthy()
//     })
// })

/*4. У вас есть массив объектов вида приведенного в приложении. Необходимо
вывести все товары, количество которых больше 10 и произведены в Германии
Написать тест для функции*/

// function getData(arr) {
//     const filtered = arr.filter(el => el.count > 10 && el.producer === 'Германия')
//     if (!filtered) return false
//     return filtered
// }

// describe('test', () => {
//     const arr = [
//         { id: 1, title: 'Часы', count: 10, price: 500, producer: 'Германия' },
//         { id: 2, title: 'Смартфон', count: 33, price: 1500, producer: 'Германия' },
//         { id: 3, title: 'Моноблок', count: 6, price: 2200, producer: 'Германия' },
//         { id: 4, title: 'Ноутбук', count: 13, price: 3000, producer: 'Китай' },
//         { id: 5, title: 'Планшет', count: 22, price: 2100, producer: 'Китай' },
//         { id: 6, title: 'Телевизор', count: 4, price: 4100, producer: 'Германия' },
//         { id: 7, title: 'Холодильник', count: 11, price: 2400, producer: 'Германия' }
//     ]

//     test('Test getData toHaveLength, toEqual', () => {
//         const res = getData(arr)
//         expect(res).toHaveLength(2)

//         const equal = [{ id: 2, title: 'Смартфон', count: 33, price: 1500, producer: 'Германия' }, { id: 7, title: 'Холодильник', count: 11, price: 2400, producer: 'Германия' }]
//         expect(res).toEqual(equal)
//     })

//     test('Test getData toBeFalsy', () => {
//         const res = getData([])
//         expect(res).toBeFalsy()
//     })

// })


/*5. У вас есть массив строковых значений, состоящий из номеров телефонов.
Необходимо вывести значения массива без дубликатов. Добавить необходимые
проверки.
Написать тест для функции*/

// function checkUniq(arr) {
//     if (isValid(arr)) {
//         const uniqArr = []
//         for (let i = 0; i < arr.length; i++) {
//             if (!uniqArr.includes(arr[i])) uniqArr.push(arr[i])
//         }
//         return uniqArr
//     } else {
//         return false
//     }
// }

// function isValid(arr) {
//     if (!arr.length) return false
//     let errors = 0
//     arr.forEach(element => !/^\+[0-9]+$/gm.test(element) ? errors++ : null);
//     return errors > 0 ? false : true;
// }

// describe('Test checkUniq', () => {
//     const arr = ['+375297608447', '+375291111111','+375291111111']

//     test('Test checkUniq toHaveLength', () => {

//         const res = checkUniq(arr)
//         const equal = ['+375297608447', '+375291111111']

//         expect(res).toEqual(equal)
//         expect(res).toHaveLength(2)
//     })

//     test('Test checkUniq return false',()=>{
//         const res = checkUniq([])
//         expect(res).toBeFalsy()
//     })

//     test('Test checkUniq return false',()=>{
//         const res = checkUniq(['25866663'])
//         expect(res).toBeFalsy()
//     })
// })


/*6. На входе статичный объект. Необходимо посчитать количество пар (ключ:
значение) где значение число и вывести количество. Добавить необходимые
проверки.
Написать тест для функции*/

// function findCount(obj) {
//     if(!Object.keys(obj).length) return false
//     let count = 0
//     for (const key in obj) {
//         if (!isNaN(obj[key])) count++;
//     }
//     return count 
// }

// describe('Test function',()=>{
//     const obj = { 1: 1, 2: 'pribt', 3: "true" }
//     test('test',()=>{
//         const res = findCount(obj)
//         expect(res).toBe(1)
//     })
//     test('test',()=>{
//         const res = findCount({})
//         expect(res).toBeFalsy()
//     })
// })


/*7. На входе статичный объект. Необходимо числовые значения удвоить на выходе.
Написать тест для функции*/

// function doDouble(obj) {
//     const arr = []
//     for (const key in obj) {
//         if (!isNaN(obj[key])) {
//             arr.push(obj[key] * 2)
//         } else {
//             return false
//         }
//     }
//     return arr
// }

// describe('Test function', () => {
//     const obj = { 1: 5, 2: 2 }
//     test('test toBe', () => {
//         const res = doDouble(obj)
//         expect(res).toEqual([10, 4])
//     }) 

//     test('test toHaveLength', () => {
//         const res = doDouble(obj)
//         expect(res).toHaveLength(2)
//     })

//     test('test toBeFalsy', () => {
//         const res = doDouble({ 1: 'hello', 2: 'hello' })
//         expect(res).toBeFalsy()
//     })
// })


/*8. На входе статичный объект. Необходимо сформировать массив из всх четных
значений объекта.
Написать тест для функции*/

function checkEvenValues(obj) {
    const arr = []
    for (const key in obj) {
        if (key % 2 == 0) arr.push(key)
    }
    return arr
}

describe('Test checkEvenValues', () => {
    const obj = { 1: 1, 2: 2, 3: 3, 4: 4 }

    test('test toBe', () => {
        const res = checkEvenValues(obj)
        expect(res).toEqual(['2', '4'])
    })
})

/*9. На входе статичный массив [1, 2, 3, 4, 5, 6] и динамическое значение n. Необходимо
разбить данный одномерный массив на маленькие массивы в зависимости от
того, какого число ввел пользователь. Добавить необходимые проверки.
1 -> [[1], [2], [3], [4], [5], [6]]
2 -> [[1, 2], [3, 4], [5, 6]]
3 -> [[1, 2, 3], [4, 5, 6]]
4 -> [[1, 2, 3, 4], [5, 6]
5 -> [[1, 2, 3, 4, 5], [6]]
6 -> [[1, 2, 3, 4, 5, 6]]
Написать тест для функции*/

/*10. На входе статичный вложенный массив чисел. Необходимо посчитать сумму всех
чисел. Добавить необходимые проверки.
Написать тест для функции
[1,2,3,[4,5],6] -> 21
[1,2,[[3,4],5],6] -> 21*/

/*11. На входе число. Необходимо перевести число в двоичную систему счисления.
Добавить необходимые проверки.
Написать тест для функции*/

/*12. Реализуйте функцию, которая принимает в качестве параметра строку и
возвращает список элементов без каких-либо элементов с одинаковым
значением рядом друг с другом.
Написать тест для функции
'AAAABBBCCDAABBB -> ['A', 'B', 'C', 'D', 'A', 'B’]
'ABBCcAD’ -> ['A', 'B', 'C', 'c', 'A', 'D’]
'12233’ -> [1, 2, 3]
Написать тест для функции*/