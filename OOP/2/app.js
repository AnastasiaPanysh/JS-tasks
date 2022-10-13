// 2. Реализуйте класс Calculator, который будет хранить в себе 4 метода: сумма чисел,
// разность, произведение, частное. 2 числа передаются в класс, далее вызываеются
// соответствующие функции. Добавить проверки на ввод

class Calculator {
     // constructor(value1, value2) {
     //      this.value1 = value1
     //      this.value2 = value2
     // }

     getSum(value1, value2) {
          return value1 + value2

     }

     getMinus(value1, value2) {
          return value1 - value2
     }

     getMultiply(value1, value2) {
          return value1 * value2
     }

     getDel(value1, value2) {
          return value1 / value2
     }
}

const calculator = new Calculator()
console.log(calculator.getSum(2, 3));
console.log(calculator.getMinus(2, 3));
console.log(calculator.getMultiply(2, 3));
console.log(calculator.getDel(2, 3));