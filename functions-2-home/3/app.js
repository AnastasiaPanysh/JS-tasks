// 3. На входе динамичный массив; число n с клавиатуры. Необходимо написать
// функцию, возвращающую элементы массива, которые больше указанного числа.
// [1, 9, 45, 11, 10], 10 -> 45, 11


// const n = +prompt('enter quantity element');
// const num = +prompt('enter number');

// function doArr(value) {
//      let arr = []
//      for (let i = 0; i < value; i++) {
//           arr.push(prompt('enter value'))
//      }
//      return arr
// }


// function doBigArr(newArr, num) {
//     let res = newArr.filter(el => el>num)
//     return res
// }

// console.log(doBigArr(doArr(n), num));


// Напишите функцию, которая принимает два параметра: строку и букву. Функция
// должна подсчитывать количество вхождений указанной буквы в строке. Добавить
// проверки


const str = 'мама мыла раму'.split('')
const letter = 'м'

function doCountLetter(str, letter) {
     let count =0
     const res= str.filter(el => el===letter? count+=1: null)
     return count
 }
  console.log(doCountLetter(str, letter));