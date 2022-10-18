// 10. Реализуйте класс Сonversion, сдержащий метод doBinaryNumber, преобразующий
// все числа 2 системы счисления в 10

class Сonversion {
    
    doBinaryNumber(num) {
        return parseInt(num, 2)
    }
}

const conversion = new Сonversion()
console.log(conversion.doBinaryNumber(110001));