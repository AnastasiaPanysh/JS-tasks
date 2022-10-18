// 9. Реализуйте класс Сonversion, сдержащий метод do DecimalNumber, преобразующий
// все числа 10 системы счисления в 2

class Сonversion {

    DecimalNumber(num) {
        return num.toString(2)
    }
}

const conversion = new Сonversion()
console.log(conversion.DecimalNumber(49));