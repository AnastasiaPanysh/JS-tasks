// 6. Реализуйте класс ServerPut. Обязательными функциями считаются функции
// middleware, controller, service, repository. Цепочка взаимодействия между методами
// следующая:
// middleware -> controller -> service -> repository, где:
// middleware – функция валидатор
// controller – функция, принимающая данные. Принимает json
// service – функция проверки на то что с repository вернулось значение
// repository – функция, симулирующая БД. Хранит массив данных. Взаимодействие с
// этим массивом осуществляется только в repository. Массив находится в приложении
// Задание:
// на вход подается JSON вида:
// `{
// "id": 1, "name": "Test", "age": 1
// }`
// Необходимо найти id клиента в массиве БД. Если совпадение есть, произвести
// обновление значений для соответствующих ключей.
// Если совпадения по id нет – ошибка. Добавить проверки 

class ServerPut {
    middleware(obj) {
        if (!Number.isInteger(obj.age)) throw new Error('NOT A NUM')
    }

    controller(obj) {
        try {
            const objParsed = JSON.parse(obj)
            this.middleware(objParsed)
            const arr = this.service(objParsed)
            document.querySelector('.res').innerHTML = JSON.stringify(arr)
        } catch (error) {
            alert(error.message)
        }
    }

    service(obj) {
        const arr = this.repository(obj);
        if (!arr.length) throw new Error('массив пуст')
        return arr
    }

    repository(obj) {
       let arr = [{
                "id": 1,
                "name": "Yesenia",
                "age": 22
            },
            {
                "id": 2,
                "name": "Hanna",
                "age": 22
            },
            {
                "id": 3,
                "name": "Stanislau",
                "age": 25
            },
            {
                "id": 4,
                "name": "German",
                "age": 18
            },
            {
                "id": 5,
                "name": "Maria",
                "age": 27
            }
        ]
        const filtered = arr.filter(el => el.id !== obj.id);
        if (arr.length == filtered.length) throw new Error('такого имени нет');
        filtered.push(obj)
        arr = filtered
        return arr
    }
}
const serverPut = new ServerPut()
serverPut.controller(`{"id": 1, "name": "Test", "age": 1}`)