// 1. Реализуйте класс DomHtml, который будет считать количество кликов по html
// кнопке

// class DomHtml {

//     constructor() {
//         this.click()
//     }

//     count = 0;

//     click() {
//         document.querySelector('.btn').addEventListener('click', () => {
//             this.count++
//             console.log(this.count);
//         })
//     }

// }

// const domHtml = new DomHtml();


// 2. Реализуйте класс Client, содержащий метод sendRequest. Ваша задача получить
// данные из 2 инпутов: почта и пароль и по клику на кнопку «отправить запрос на
// сервер» (отправку запроса мы не проходили => просто вывести на экран
// образовавщийся объект вида: {email: email, pwd: pwd}

// 3. Реализуйте класс Server, получающий объект из предыдущего задания и
// сохраняющий его в «БД» (массив) при условии, что email уникальный. Создать
// генерацию нового id. Обязательными функциями считаются функции middleware,
// controller, service, repository. Цепочка взаимодействия между методами
// следующая:
// middleware -> controller -> service -> repository, где:
// middleware – функция валидатор
// controller – функция, принимающая данные. Принимает json
// service – функция проверки на то что с repository вернулось значение
// repository – функция, симулирующая БД. Хранит массив данных. Взаимодействие
// с этим массивом осуществляется только в repository. Массив находится в
// приложении

class Client {

    constructor() {
        this.sendRequest()
    }

    sendRequest() {
        document.querySelector('.btn').addEventListener('click', () => {
            try {
                let email = document.querySelector('.email').value;
                let pwd = document.querySelector('.pwd').value;

                this.checkInp(email, pwd);

                const clientData = JSON.stringify({
                    email: email,
                    pwd: pwd
                })
                const server = new Server();
                const response = server.controller(clientData)

                document.querySelector('.res').innerHTML = response
            } catch (error) {
                alert(error.message)
            }
        })
    }

    checkInp(email, pwd) {
        if (!email.length) throw new Error('email is empty');
        if (!pwd.length) throw new Error('pwd is empty');
    }

}


class Server {


    middleware(email) {
        if (!email) throw new Error('email is empty')
    }

    controller(clientData) {
        try {
            const parsedClientData = JSON.parse(clientData)
            this.middleware(parsedClientData.email)
            return JSON.stringify(this.service(parsedClientData));

        } catch (error) {
            return error.messag
        }
    }

    service(parsedClientData) {
        const rep = this.repository(parsedClientData)
        if (!rep.length) throw new Error('массив пуст')
        return rep
    }

    repository(parsedClientData) {
        const arrData = `[
            { "id": 1, "email": "yesenia@mail.ru", "pwd": "pwd12345678" },
            { "id": 2, "email": "hanna@mail.ru", "pwd": "pwd123123" },
            { "id": 3, "email": "stanislau@mail.ru", "pwd": "pwdtest444" },
            { "id": 4, "email": "german@mail.ru", "pwd": "pwdqqq111" },
            { "id": 5, "email": "maria@mail.ru", "pwd": "pwd746552" }
            ]`

        let parsedDB = JSON.parse(arrData)
        const filtered = parsedDB.filter(el => el.email !== parsedClientData.email)
        if (parsedDB.length !== filtered.length) throw new Error('совпадеине есть')
        filtered.push({id:Math.floor(Math.random()*100),...parsedClientData})
        parsedDB = filtered;
        return parsedDB
    }
}


const client = new Client();