// 11. Реализуйте класс Сonversion, сдержащий метод doOctalNumber, преобразующий
// все числа 10 системы счисления в 8

class Сonversion {
    
    doOctalNumber(num) {
        return num.toString(8)
    }
}

const conversion = new Сonversion()
console.log(conversion.doOctalNumber(9));