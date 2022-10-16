// 14. Реализуйте класс ServerPut. Обязательными функциями считаются функции
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
// "id": "javascript", "label": "JavaScript", "category": "programmingLanguages", "priority": 1
// }`
// Необходимо найти id клиента в массиве БД. Если совпадение есть, произвести
// обновление значений для соответствующих ключей.
// Если совпадения по id нет – ошибка. Добавить проверки

class  ServerPut {

    middleware(obj) {
       if (!obj.hasOwnProperty('id')) throw new Error('Нет id')
    }
    controller(obj) {
        try {
            const objParsed = JSON.parse(obj);
            this.middleware(objParsed);
            const arrDB = this.service(objParsed);
            return arrDB
        } catch (error) {
            return (error.message)
        }
    }

    service(obj) {
        const arrDB = this.repository(obj);
        if (!arrDB.length) throw new Error('массив пуст')
        return arrDB
    }

    repository(obj) {
        let arrDB  = `[
            { "id": "javascript", "label": "JavaScript", "category": "programmingLanguages", "priority": 1 },
            { "id": "typescript", "label": "TypeScript", "category": "programmingLanguages", "priority": 1 },
            { "id": "sql", "label": "SQL", "category": "programmingLanguages", "priority": 2 },
            { "id": "java", "label": "Java", "category": "programmingLanguages", "priority": 3 },
            { "id": "go", "label": "GO", "category": "programmingLanguages", "priority": 3 }
            ]`;

        const parseDB = JSON.parse(arrDB);
        const filtered = parseDB.filter(el => el.id === obj.label);
        if (!filtered) throw new Error('db has not such id');
        parseDB.push(obj)
        return parseDB
    }
}

const serverPut = new ServerPut()
console.log(serverPut.controller(`{"id": "javascript", "label": "JavaScript", "category": "programmingLanguages", "priority": 1}`));
