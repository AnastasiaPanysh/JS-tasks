// 8. Реализуйте класс Validator. У него будет метод isEmail параметром принимает
// строку и проверяет, является ли она корректным емейлом или нет. Если является
// - возвращает true, если не является - то false


class Validator {
    isEmail(email) {
        if (/^([a-z0-9_-]+\.)*[a-z0-9_-]+@+[a-z0-9_-]+\.+[a-z]{2,6}/g.test(email)) return true
        else return false
    }
}

const validator = new Validator();
console.log(validator.isEmail('nastya.panysh@gmail.com'));