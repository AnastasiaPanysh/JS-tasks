/*1. У вас есть массив объектов вида приведенного в приложении. Необходимо
вывести все товары, количество которых больше 10*/

// interface iObj {
//     id: number;
//     title: string;
//     count: number;
//     price: number;
// }

// const array: iObj[] = [
//     { id: 1, title: 'Часы', count: 10, price: 500 },
//     { id: 2, title: 'Смартфон', count: 33, price: 1500 },
//     { id: 3, title: 'Моноблок', count: 6, price: 2200 },
//     { id: 4, title: 'Ноутбук', count: 13, price: 3000 },
//     { id: 5, title: 'Планшет', count: 22, price: 2100 },
// ]

// function filter(array: iObj[]): iObj[] {
//     const filtered = array.filter((elem) => elem.count > 10)
//     return filtered
// }
// const result = filter(array)
// console.log(result);

/*2. У вас есть массив объектов вида приведенного в приложении. Необходимо
вывести все товары в обратном порядке*/

// interface iObj {
//     id: number;
//     title: string;
//     count: number;
//     price: number;
// }

// const array: iObj[] = [
//     { id: 1, title: 'Часы', count: 10, price: 500 },
//     { id: 2, title: 'Смартфон', count: 33, price: 1500 },
//     { id: 3, title: 'Моноблок', count: 6, price: 2200 },
//     { id: 4, title: 'Ноутбук', count: 13, price: 3000 },
//     { id: 5, title: 'Планшет', count: 22, price: 2100 },
// ]


// const reverse = (array: iObj[]): iObj[]=> {
// const result = array.reverse()
// return result
// }


// console.log(reverse(array));


/*3. У вас есть массив объектов вида приведенного в приложении. Необходимо
вывести только те товары, количество которых внутри массива кратно 3*/


// interface iProduct {
//     id: number;
//     title: string;
//     count: number;
//     price: number;
// }

// const array: iProduct[] = [
//     { id: 1, title: 'Часы', count: 10, price: 500 },
//     { id: 2, title: 'Смартфон', count: 33, price: 1500 },
//     { id: 3, title: 'Моноблок', count: 6, price: 2200 },
//     { id: 4, title: 'Ноутбук', count: 13, price: 3000 },
//     { id: 5, title: 'Планшет', count: 22, price: 2100 },
// ]


// function filter(array: iProduct[]): iProduct[] {
//     const filtered = array.filter((elem) => elem.count % 3 === 0)
//     return filtered
// }

// console.log(filter(array));

/*4. У вас есть массив объектов вида приведенного в приложении. Необходимо
вывести итоговую стоимость на складе.
Итоговая стоимость = количество * цена + ...*/

// interface iProduct {
//     id: number;
//     title: string;
//     count: number;
//     price: number
// }

// const array: iProduct[] = [
//     { id: 1, title: 'Часы', count: 10, price: 500 },
//     { id: 2, title: 'Смартфон', count: 33, price: 1500 },
//     { id: 3, title: 'Моноблок', count: 6, price: 2200 },
//     { id: 4, title: 'Ноутбук', count: 13, price: 3000 },
//     { id: 5, title: 'Планшет', count: 22, price: 2100 },
// ]

// function result(array: iProduct[]): number {
//     const result = array.reduce((sum, elem) => sum + elem.count * elem.price, 0)
//     return result
// }

// console.log(result(array));


/*5.У вас есть массив объектов вида приведенного в приложении. Необходимо
вывести товар с максимальным прайсом*/


// interface iProduct {
//     id: number;
//     title: string;
//     count: number;
//     price: number
// }

// const array: iProduct[] = [
//     { id: 1, title: 'Часы', count: 10, price: 500 },
//     { id: 2, title: 'Смартфон', count: 33, price: 1500 },
//     { id: 3, title: 'Моноблок', count: 6, price: 2200 },
//     { id: 4, title: 'Ноутбук', count: 13, price: 3000 },
//     { id: 5, title: 'Планшет', count: 22, price: 2100 },
// ]

// function getMaxPrice(array: iProduct[]): number {
//     let max = 0
//     for (let i = 0; i < array.length; i++) {
//         array[i].price > max ? max = array[i].price : null
//     }
//     return max
// }

// console.log(getMaxPrice(array));

/*6. У вас есть массив объектов вида приведенного в приложении. Необходимо
вывести средний прайс среди всех продуктов*/


// interface iProduct {
//     id: number;
//     title: string;
//     count: number;
//     price: number;
// }

// const array: iProduct[] = [
//     { id: 1, title: 'Часы', count: 10, price: 500 },
//     { id: 2, title: 'Смартфон', count: 33, price: 1500 },
//     { id: 3, title: 'Моноблок', count: 6, price: 2200 },
//     { id: 4, title: 'Ноутбук', count: 13, price: 3000 },
//     { id: 5, title: 'Планшет', count: 22, price: 2100 },
// ]

// function getAveragePrice(array: iProduct[]): number {
//     const sum = array.reduce((sum, elem) => sum + elem.price, 0)
//     return sum/array.length
// }

// console.log(getAveragePrice(array));

/*7. У вас есть массив объектов вида приведенного в приложении. Необходимо
вывести тот товар, где количество * прайс является наибольшим значением*/

// interface iProduct {
//     id: number;
//     title: string;
//     count: number;
//     price: number;
// }

// const array: iProduct[] = [
//     { id: 1, title: 'Часы', count: 10, price: 500 },
//     { id: 2, title: 'Смартфон', count: 33, price: 1500 },
//     { id: 3, title: 'Моноблок', count: 6, price: 2200 },
//     { id: 4, title: 'Ноутбук', count: 13, price: 3000 },
//     { id: 5, title: 'Планшет', count: 22, price: 2100 },
// ]

// function getMax(array: iProduct[]): number {
//     let max = 0;
//     for (let i = 0; i < array.length; i++) {
//         let prod = array[i].count * array[i].price
//         prod > max ? max = prod : null
//     }
//     return max
// }

// console.log(getMax(array));

/*8. У вас есть массив строковых значений. Необходимо вывести значения массива
без дубликатов. Добавить проверки на тип данных, почту*/

// const emails: string[] = ['test@gmail.com', 'test@gmail.com', 'nasy@gmail.com', 'hanna@gmail.com']

// function isValid(emails: string[]): never | void {

//     for (let i = 0; i < emails.length; i++) {
//         if (typeof emails[i] !== 'string') throw new Error(`email not a string ${emails[i]}`)
//         if (!/^[a-z0-9]+@[a-z]+\.[a-z]+$/g.test(emails[i])) throw new Error(`email is invalid ${emails[i]}`)
//     }
// }

// function getUniqEmail(emails: string[]): any {
//     try {
//         isValid(emails)
//         const uniqEmails: string[] = [];
//         for (let i = 0; i < emails.length; i++) {
//             // if (!uniqEmails.includes(emails[i])) uniqEmails.push(emails[i])
//             if (uniqEmails.indexOf(emails[i]) === -1) { uniqEmails.push(emails[i]) }
//         }
//         return uniqEmails
//     } catch (error: any) {
//         return error.message
//     }
// }

// console.log(getUniqEmail(emails));

/*9. У вас есть массив объектов вида приведенного в приложении. Необходимо
посчитать количество вызовов функции, которая находит минимальный прайс*/

// interface iProduct {
//     id: number;
//     title: string;
//     count: number;
//     price: number;
// }

// const array: iProduct[] = [
//     { id: 1, title: 'Часы', count: 10, price: 500 },
//     { id: 2, title: 'Смартфон', count: 33, price: 1500 },
//     { id: 3, title: 'Моноблок', count: 6, price: 2200 },
//     { id: 4, title: 'Ноутбук', count: 13, price: 3000 },
//     { id: 5, title: 'Планшет', count: 22, price: 2100 },
// ]

// function wrapper(array: iProduct[]) {
//     let count = 0
//     let min = array[0].price
//     return function (elem: iProduct) {
//         count++
//         console.log(`количество:${count}`);
//         elem.price < min ? min = elem.price : null
//         console.log(`минимальная цена:${min}`);
//     }
// }

// const wrap = wrapper(array)
// for (let i = 0; i < array.length; i++) {
//     wrap(array[i])
// }


/*10. У вас есть массив объектов вида приведенного в приложении. Пользователь
вводит значение id: например, 1. Необходимо отобразить в консоль найденный
объект используя алгоритм бинарного поиска.*/

// interface iProduct {
//     id: number;
//     title: string;
//     count: number;
//     price: number
// }

// const array: iProduct[] = [
//     { id: 1, title: 'Часы', count: 10, price: 500 },
//     { id: 2, title: 'Смартфон', count: 33, price: 1500 },
//     { id: 3, title: 'Моноблок', count: 6, price: 2200 },
//     { id: 4, title: 'Ноутбук', count: 13, price: 3000 },
//     { id: 5, title: 'Планшет', count: 22, price: 2100 },
// ]

// let idFromClient: number = 6

// function doBinary(array: iProduct[], idFromClient: number): iProduct {

//     let first: number = 0;
//     let last: number = array.length;
//     let middle: number = Math.floor((first + last) / 2)
//     for (; ;) {
//         if (array[middle].id == idFromClient) return array[middle]
//         else if (array[middle].id > idFromClient) last = middle
//         else if (array[middle].id < idFromClient) first = middle
//         middle = Math.floor((first + last) / 2)

//    }
// }
// console.log(doBinary(array, idFromClient));


/*11. У вас есть массив строковых значений. Необходимо вывести количество
дубликатов в массиве:
[1, 2, 1, 2, 3, 4, 5, 1] -> 3*/

// const emails: string[] = ['test@gmail.com', 'test@gmail.com', 'nasy@gmail.com', 'test@gmail.com']

// function countDublicateEmail(emails: string[]): number {
//     const dublicateEmails: string[] = [];
//     let count: number = 0;
//     for (let i = 0; i < emails.length; i++) {
//         if (dublicateEmails.indexOf(emails[i]) === -1) { dublicateEmails.push(emails[i]) }
//     }

//     return emails.length - dublicateEmails.length + 1
// }

// console.log(countDublicateEmail(emails));

/* 12. Напишите программу для вывода чисел Фибоначчи используя рекурсию*/

// const n: number = 7

// function fibonaci(n: number): number {
//     if (n <= 1) return n
//     return fibonaci(n - 2) + fibonaci(n - 1)
// }
// console.log(fibonaci(n));

/*13.Напишите программу для сортировки массива объектов из приложения по id,
использующую метод пузырька.*/

// interface iProduct {
//     id: number;
//     title: string;
//     count: number;
//     price: number;
// }

// const array: iProduct[] = [
//     { id: 1, title: 'Часы', count: 10, price: 500 },
//     { id: 3, title: 'Моноблок', count: 6, price: 2200 },
//     { id: 4, title: 'Ноутбук', count: 13, price: 3000 },
//     { id: 5, title: 'Планшет', count: 22, price: 2100 },
//     { id: 2, title: 'Смартфон', count: 33, price: 1500 },
// ]

// function bubbleSort(array: iProduct[]): iProduct[] {
//     for (let j = array.length - 1; j > 0; j--) {
//         for (let i = 0; i < j; i++) {
//             if (array[i].id > array[i + 1].id) {
//                 let middle = array[i]
//                 array[i] = array[i + 1]
//                 array[i + 1] = middle
//             }
//         }
//     }
//     return array
// }

// console.log(bubbleSort(array));

/*14. Реализовать функцию f: при вызове f(2, 3) -> вернет 5, при вызове f(2)(3), тоже
вернет 5. Использовать каррирование*/

// function doSum(a:number):any{
//     return(b:number) =>{
//         return a+b
//     }
// }

// console.log(doSum(1)(2));


/*15. Более сложный вариант. Реализовать функцию f: при вызове f(1, 2, 3) -> вернет 6,
при вызове f(1)(2)(3)(), тоже вернет 6. Использовать каррирование*/

// function doSum(a: number): any {
//     return (b: number) => {
//         return (c: number) => {
//             return a + b + c
//         }
//     }
// }

// function doMulti(a: number): any {
//     return (b: number) => {
//         return (c: number) => {
//             return a * b * c
//         }
//     }
// }

// console.log(doSum(1)(2)(3));
// console.log(doMulti(1)(2)(3));

/*16. Напишите код, который сделает из массива объект
[ {name: 'width', value: 10}, {name: 'height', value: 20} ] -> {width: 10, height: 20}*/

// interface iProduct {
//     name: string;
//     value: number;
// }

// const array = [{ name: 'width', value: 10 }, { name: 'height', value: 20 }]

// function doObj(array: iProduct[]): iProduct {
//     const object: any = {}
//     array.forEach(element => {
//         let { name, value } = element
//         object[name] = value
//     });
//     return object
// }

// console.log(doObj(array));

/*17. Дано дерево в виде объекта произвольной вложенности, необходимо найти
сумму всех вершин*/

/*18. Дан массив с объектами даты. Необходимо отсортировать по датам.*/

interface iDate {
    date: string
}

const arr: iDate[] = [
    { date: '10.01.2017' },
    { date: '05.11.2016' },
    { date: '21.12.2002' }
]

function doSort(arr: iDate[]): iDate[] {
    for (let i = 0; i < arr.length - 1; i++) {
        // for (let j = arr.length - 1; j > 0; j--) {

            let dateDay = arr[i].date.replaceAll(".", "").split(" ")


        }

        return

    }
    console.log(doSort(arr));
