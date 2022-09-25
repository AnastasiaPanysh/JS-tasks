// 12. *Реализуйте функцию, которая будет принимать 2 параметра: строку в виде
// бинарного числа и число. Создайте функцию, которая будет, во-первых,
// проверять подходит ли бинарное число под шаблон регулярного выражения
// (состоит только из 1 и 0), и, во-вторых, определять, является ли число после
// перевода из двоичной системы в десятичную равно 2 параметру передаваемому
// в функцию.
// Написать свой алгоритм. Не использовать методы преобразования числа из 1
// системы в 2 (например, parseInt).
// Задача на позицию middle JavaScript Dev.
// На собеседовании давали 5 минут на решение задачи

const binary = '111'.split('');
const decimal = 7;

function checkBinary(binary) {
     if (/[0,1]{1,}/g.test(binary)) return true
     else throw new Error('not a binary number')
}

function getDecimal(binary, decimal) {
     try {
          checkBinary(binary)
          let degreeCounter = 0
          let newDecimal = 0
          for (let i = binary.length - 1; i <= 0; i--) {
               newDecimal = binary[i] * 2 ** degreeCounter;
               degreeCounter++
          }
          if (newDecimal === decimal) return 'получилось'
          else return 'получилась ерунда'

     } catch (error) {
          return error.message
     }

}
console.log(getDecimal(binary, decimal));