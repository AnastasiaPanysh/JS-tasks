// 10. На входе число. Необходимо создать функцию, возвращающую факториал числа
// 4! = 1 * 2 * 3 * 4

const n = 3

function getFactorial(n) {
     if (n === 1) {
          return 1;
     }
     return getFactorial(n - 1) * n;
}
console.log(getFactorial(n));


