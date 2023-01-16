/*1. У вас есть массив объектов вида приведенного в приложении. Необходимо
вывести все товары, количество которых больше 10*/
// interface Obj {
//     id: number;
//     title: string;
//     count: number;
//     price: number;
// }
// const array: Obj[] = [
//     { id: 1, title: 'Часы', count: 10, price: 500 },
//     { id: 2, title: 'Смартфон', count: 33, price: 1500 },
//     { id: 3, title: 'Моноблок', count: 6, price: 2200 },
//     { id: 4, title: 'Ноутбук', count: 13, price: 3000 },
//     { id: 5, title: 'Планшет', count: 22, price: 2100 },
// ]
// function filter(array: Obj[]): Obj[] {
//     const filtered = array.filter((elem) => elem.count > 10)
//     return filtered
// }
// const result = filter(array)
// console.log(result);
/*2. У вас есть массив объектов вида приведенного в приложении. Необходимо
вывести все товары в обратном порядке*/
// interface Obj {
//     id: number;
//     title: string;
//     count: number;
//     price: number;
// }
// const array: Obj[] = [
//     { id: 1, title: 'Часы', count: 10, price: 500 },
//     { id: 2, title: 'Смартфон', count: 33, price: 1500 },
//     { id: 3, title: 'Моноблок', count: 6, price: 2200 },
//     { id: 4, title: 'Ноутбук', count: 13, price: 3000 },
//     { id: 5, title: 'Планшет', count: 22, price: 2100 },
// ]
// const reverse = (array: Obj[]): Obj[]=> {
// const result = array.reverse()
// return result
// }
// console.log(reverse(array));
/*3. У вас есть массив объектов вида приведенного в приложении. Необходимо
вывести только те товары, количество которых внутри массива кратно 3*/
// interface Product {
//     id: number;
//     title: string;
//     count: number;
//     price: number;
// }
// const array: Product[] = [
//     { id: 1, title: 'Часы', count: 10, price: 500 },
//     { id: 2, title: 'Смартфон', count: 33, price: 1500 },
//     { id: 3, title: 'Моноблок', count: 6, price: 2200 },
//     { id: 4, title: 'Ноутбук', count: 13, price: 3000 },
//     { id: 5, title: 'Планшет', count: 22, price: 2100 },
// ]
// function filter(array: Product[]): Product[] {
//     const filtered = array.filter((elem) => elem.count % 3 === 0)
//     return filtered
// }
// console.log(filter(array));
/*4. У вас есть массив объектов вида приведенного в приложении. Необходимо
вывести итоговую стоимость на складе.
Итоговая стоимость = количество * цена + ...*/
// interface Product {
//     id: number;
//     title: string;
//     count: number;
//     price: number
// }
// const array: Product[] = [
//     { id: 1, title: 'Часы', count: 10, price: 500 },
//     { id: 2, title: 'Смартфон', count: 33, price: 1500 },
//     { id: 3, title: 'Моноблок', count: 6, price: 2200 },
//     { id: 4, title: 'Ноутбук', count: 13, price: 3000 },
//     { id: 5, title: 'Планшет', count: 22, price: 2100 },
// ]
// function result(array: Product[]): number {
//     const result = array.reduce((sum, elem) => sum + elem.count * elem.price, 0)
//     return result
// }
// console.log(result(array));
/*5.У вас есть массив объектов вида приведенного в приложении. Необходимо
вывести товар с максимальным прайсом*/
// interface Product {
//     id: number;
//     title: string;
//     count: number;
//     price: number
// }
// const array: Product[] = [
//     { id: 1, title: 'Часы', count: 10, price: 500 },
//     { id: 2, title: 'Смартфон', count: 33, price: 1500 },
//     { id: 3, title: 'Моноблок', count: 6, price: 2200 },
//     { id: 4, title: 'Ноутбук', count: 13, price: 3000 },
//     { id: 5, title: 'Планшет', count: 22, price: 2100 },
// ]
// function getMaxPrice(array: Product[]): number {
//     let max = 0
//     for (let i = 0; i < array.length; i++) {
//         array[i].price > max ? max = array[i].price : null
//     }
//     return max
// }
// console.log(getMaxPrice(array));
/*6. У вас есть массив объектов вида приведенного в приложении. Необходимо
вывести средний прайс среди всех продуктов*/
// interface Product {
//     id: number;
//     title: string;
//     count: number;
//     price: number;
// }
// const array: Product[] = [
//     { id: 1, title: 'Часы', count: 10, price: 500 },
//     { id: 2, title: 'Смартфон', count: 33, price: 1500 },
//     { id: 3, title: 'Моноблок', count: 6, price: 2200 },
//     { id: 4, title: 'Ноутбук', count: 13, price: 3000 },
//     { id: 5, title: 'Планшет', count: 22, price: 2100 },
// ]
// function getAveragePrice(array: Product[]): number {
//     const sum = array.reduce((sum, elem) => sum + elem.price, 0)
//     return sum/array.length
// }
// console.log(getAveragePrice(array));
/*7. У вас есть массив объектов вида приведенного в приложении. Необходимо
вывести тот товар, где количество * прайс является наибольшим значением*/
// interface Product {
//     id: number;
//     title: string;
//     count: number;
//     price: number;
// }
// const array: Product[] = [
//     { id: 1, title: 'Часы', count: 10, price: 500 },
//     { id: 2, title: 'Смартфон', count: 33, price: 1500 },
//     { id: 3, title: 'Моноблок', count: 6, price: 2200 },
//     { id: 4, title: 'Ноутбук', count: 13, price: 3000 },
//     { id: 5, title: 'Планшет', count: 22, price: 2100 },
// ]
// function getMax(array: Product[]): number {
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
var emails = ['test@gmail.com', 'test@gmail.com', 'nasy@gmail.com', 'hanna@gmail.com'];
function isValid(emails) {
    for (var i = 0; i < emails.length; i++) {
        if (typeof emails[i] !== 'string')
            throw new Error("email not a string ".concat(emails[i]));
        if (!/^[a-z0-9]+@[a-z]+\.[a-z]+$/g.test(emails[i]))
            throw new Error("email is invalid ".concat(emails[i]));
    }
}
function getUniqEmail(emails) {
    try {
        isValid(emails);
        var uniqEmails = [];
        for (var i = 0; i < emails.length; i++) {
            // if (!uniqEmails.includes(emails[i])) uniqEmails.push(emails[i])
            if (uniqEmails.indexOf(emails[i]) === -1) {
                uniqEmails.push(emails[i]);
            }
        }
        return uniqEmails;
    }
    catch (error) {
        return error.message;
    }
}
console.log(getUniqEmail(emails));
var array = [
    { id: 1, title: 'Часы', count: 10, price: 500 },
    { id: 2, title: 'Смартфон', count: 33, price: 1500 },
    { id: 3, title: 'Моноблок', count: 6, price: 2200 },
    { id: 4, title: 'Ноутбук', count: 13, price: 3000 },
    { id: 5, title: 'Планшет', count: 22, price: 2100 },
];
function wrapper(array) {
    var count = 0;
    var min = array[0].price;
    return function (elem) {
        count++;
        console.log("\u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E:".concat(count));
        elem.price < min ? min = elem.price : null;
        console.log("\u043C\u0438\u043D\u0438\u043C\u0430\u043B\u044C\u043D\u0430\u044F \u0446\u0435\u043D\u0430:".concat(min));
    };
}
var wrap = wrapper(array);
for (var i = 0; i < array.length; i++) {
    wrap(array[i]);
}
