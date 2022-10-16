// 7. Реализуйте класс ServerDelete. Обязательными функциями считаются функции
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
// "id": 1
// }`
// Необходимо осуществить удаление по id. Если совпадения нет – ошибка. Добавить
// проверки

class ServerDelete {
    middleware(obj) {
        if (!Number.isInteger(obj.id)) throw new Error('NOT A NUM')
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
        arr = filtered
        return arr
    }
}
const serverDelete = new ServerDelete()
serverDelete.controller(`{"id": 1}`)