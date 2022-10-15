// 10. Дополнить класс Validator. Добавить метод isDate для проверки на дату.

class Validator {
    isEmail(email) {
        if (/^([a-z0-9_-]+\.)*[a-z0-9_-]+@+[a-z0-9_-]+\.+[a-z]{2,6}/g.test(email)) return true
        else return false
    }

    isURL(url){
        if (/^(http|https):\/\/[a-zA-Z]+\.[a-z]{1,3}\/[\w]+$/g.test(url)) return true
        else return false
    }

    isDate(date){
        if (/([0-3][0-9])\.([0-1][0-9])\.+[0-9]+$/g.test(date)) return true
        else return false
    }
}

const validator = new Validator();
console.log(validator.isEmail('nastya.panysh@gmail.com'));
console.log(validator.isURL('https://github.com/AnastasiaPanysh'));
console.log(validator.isDate('27.11.2000'));