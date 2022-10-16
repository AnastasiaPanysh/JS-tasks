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
    middleware(parsedData) {
        if (typeof parsedData.id !== 'string') throw new Error('label is not a string')
    }

    controller(obj) {
        try {
            const parsedData = JSON.parse(obj);
            this.middleware(parsedData)
            const gotData = this.service(parsedData);
            return gotData;
        } catch (error) {
            return error.message;
        }
    }


    service(parsedData) {
        const gotData = this.repository(parsedData);
        if (!gotData.length) throw new Error('array has this element');
       const newData = gotData.push(parsedData)
       return newData
    }

    repository(parsedDataClient) {
        const arr = `[
            { "id": "javascript", "label": "JavaScript", "category": "programmingLanguages", "priority": 1 },
            { "id": "typescript", "label": "TypeScript", "category": "programmingLanguages", "priority": 1 },
            { "id": "sql", "label": "SQL", "category": "programmingLanguages", "priority": 2 },
            { "id": "java", "label": "Java", "category": "programmingLanguages", "priority": 3 },
            { "id": "go", "label": "GO", "category": "programmingLanguages", "priority": 3 }
            ]`;

        const parseDB = JSON.parse(arr);
        const found = parseDB.filter(el => el.id === parsedDataClient.label);
        return found
    }

}

const serverPost = new ServerPost();
console.log(serverPost.controller(`{"id": "javascript", "label": "JavaZA", "category": "programmingLanguages", "priority": 1}`));


//ОШИБКА!!! 