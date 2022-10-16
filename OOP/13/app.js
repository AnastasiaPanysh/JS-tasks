// 13. Реализуйте класс ServerPost. Обязательными функциями считаются функции
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
// Неоходимо добавить в массив БД объект только в том случае, если нет совпадений
// по label. Если совпадения нет, то в объект клиента добавить ключ id со значением
// label в toLowerCase таким образом, чтобы в БД был запушен объект вида
// {"id": "javascript", "label": "JavaScript", "category": "programmingLanguages", "priority": 1}
// Если совпадение есть – ошибка. Добавить проверки 


class ServerPost {

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
        const filtered = parseDB.some(el => el.label !== obj.label);
        if (filtered) throw new Error('db has such label');
        parseDB.push(obj)
        return parseDB
    }
}

const serverPost = new ServerPost()
console.log(serverPost.controller(`{"id": "javascript", "label": "JavaScript", "category": "programmingLanguages", "priority": 1}`));

//в чём ошибка? 