// 1. Реализуйте класс DomHtml, который будет взаимодействовать с DOM по клику на
// кнопку. Класс содержит 4 метода: doPlus, doMinus, doMultiply, doDivide

// class DomHtml {
//     constructor() {
//         this.main()
//     }

//     main() {
//         const btn = document.querySelector('.btn')
//         btn.addEventListener('click', () => {
//             const value1 = +document.querySelector('.inp1').value
//             const value2 = +document.querySelector('.inp2').value
//             this.doPlus(value1, value2)
//             this.doMinus(value1, value2)
//             this.doMultiply(value1, value2)
//             this.doDivide(value1, value2)
//         })
//     }

//     doPlus(value1, value2) {
//         document.querySelector('.sum').innerHTML = `Результат суммы: ${value1+value2}`
//     }

//     doMinus(value1, value2) {
//         document.querySelector('.minus').innerHTML = `Результат вычетание: ${value1-value2}`

//     }

//     doMultiply(value1, value2) {
//         document.querySelector('.multi').innerHTML = `Результат умножения: ${value1*value2}`
//     }

//     doDivide(value1, value2) {
//         document.querySelector('.del').innerHTML = `Результат деления: ${value1/value2}`

//     }
// }

// const domHtml = new DomHtml();


// Реализуйте класс DomHtml, который будет взаимодействовать с DOM по клику на
// кнопку. Класс содержит 1 метод валидации, называемый middleware, в котором
// происходит проверка на почту. Вывести true, если провека успешна


// class DomHtml {
//     constructor() {
//         this.main()
//     }

//     main() {
//         const btn = document.querySelector('.btn');
//         btn.addEventListener('click', () => {
//             const value = document.querySelector('.inp').value
//             this.middleware(value)
//         })
//     }

//     middleware(value) {
//         try {
//             if (!/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+\.[a-z]{2,6}/g.test(value)) throw new Error('ошибка при вводе почты')
//             alert(true)

//         } catch (error) {
//             alert(error.message)
//         }
//     }
// }

// const domHtml = new DomHtml()

// 3. Реализуйте класс ServerGetAll. Обязательными функциями считаются функции
// controller, service, repository. Цепочка взаимодействия между методами
// следующая:
// controller -> service -> repository, где:
// controller – функция, принимающая данные. Принимает json
// service – функция проверки на то что с repository вернулось значение
// repository – функция, симулирующая БД. Хранит массив данных. Взаимодействие
// с этим массивом осуществляется только в repository. Массив находится в
// приложении
// Задание:
// Необходимо вывести в консоль весь массив


// class ServerGetAll {
//     constructor() {
//         this.controller()
//     }

//     controller() {
//         try {
//             const service = this.service()
//             document.querySelector('.res').innerHTML = JSON.stringify(service)

//         } catch (error) {
//             alert(error.message)
//         }
//     }

//     service() {
//         const check = this.repository()
//         if (!check) throw new Error('error')
//         return check

//     }

//     repository() {
//         let arr = `[{ "id": 1, "name": "Yesenia", "age": 22 },
//             { "id": 2, "name": "Hanna", "age": 22 },
//             { "id": 3, "name": "Stanislau", "age": 25 },
//             { "id": 4, "name": "German", "age": 18 },
//             { "id": 5, "name": "Maria", "age": 27 }]`
//         return JSON.parse(arr)
//     }

// }

// const serverGetAll = new ServerGetAll()


// 4. Реализуйте класс ServerById. Обязательными функциями считаются функции
// middleware, controller, service, repository. Цепочка взаимодействия между
// методами следующая:
// middleware -> controller -> service -> repository, где:
// middleware – функция валидатор
// controller – функция, принимающая данные. Принимает json
// service – функция проверки на то что с repository вернулось значение
// repository – функция, симулирующая БД. Хранит массив данных. Взаимодействие
// с этим массивом осуществляется только в repository. Массив находится в
// приложении
// Задание:
// на вход подается JSON вида:
// `{
// "id": 1
// }`
// Необходимо вывести в консоль найденный элемент массива по id если таковой
// имеется. В противном случае бросить исключение. Добавить проверки

// class ServerById {
//     middleware(obj) {
//         if (!Number.isInteger(obj.id)) throw new Error('ID not a num')
//     }

//     controller(obj) {
//         try {
//             const objParsed = JSON.parse(obj)
//             this.middleware(objParsed)
//             document.querySelector('.res').innerHTML = JSON.stringify(this.service(objParsed))
//         } catch (error) {
//             alert(error.message)
//         }
//     }

//     service(obj) {
//         const data = this.repository(obj);
//         if (!data.length) throw new Error('ничего не вернулось')
//         return data
//     }

//     repository(obj) {
//         const arr = [{
//                 "id": 1,
//                 "name": "Yesenia",
//                 "age": 22
//             },
//             {
//                 "id": 2,
//                 "name": "Hanna",
//                 "age": 22
//             },
//             {
//                 "id": 3,
//                 "name": "Stanislau",
//                 "age": 25
//             },
//             {
//                 "id": 4,
//                 "name": "German",
//                 "age": 18
//             },
//             {
//                 "id": 5,
//                 "name": "Maria",
//                 "age": 27
//             }
//         ]
//         return arr.filter(el => el.id === obj.id)

//     }
// }
// const serverById = new ServerById()
// serverById.controller(`{ "id": 1 }`)


// 5. Реализуйте класс ServerPost. Обязательными функциями считаются функции
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
// "name": "Test", "age": 1
// }`
// Необходимо добавить в массив БД объект только в том случае, если нет совпадений
// по name. Если совпадения нет, то в объект клиента добавить ключ id с последним
// возможным уникальным id БД, таким образом, чтобы в БД был запушен объект вида
// {"id": 6, "name": "Test", "age": 1}
// Если совпадение есть – ошибка. Добавить проверки 

class ServerPost {
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
        const arr = [{
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
        const filtered = arr.some(el => el.name !== obj.name);
        if (!filtered) throw new Error('такое имя есть');
        arr.push(obj)
        return arr
    }
}
const serverPost = new ServerPost()
serverPost.controller(`{"name": "Test", "age": 1}`)