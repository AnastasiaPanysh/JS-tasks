// 1. Реализуйте класс Client, содержащий метод doRegistration. Ваша задача получить
// данные из 2 инпутов: почта и пароль и по клику на кнопку «отправить запрос на
// сервер» для последующей записи в массив

class Client {

    constructor() {
        this.doRegistration()
        this.doAuth()
    }

    isEmpty(a, b) {
        if (!a) throw new Error(' value is empty')
        if (!b) throw new Error(' value is empty')
    }

    doRegistration() {
        document.querySelector('.btn').addEventListener('click', () => {
            try {
                const email = document.querySelector('.email').value
                const pwd = document.querySelector('.password').value
                this.isEmpty(email, pwd)
                console.log(email, pwd);
                const server = new Server();
                const dataServer = server.controller({
                    email,
                    pwd
                })
                alert(dataServer)
            } catch (error) {
                alert(error.message)
            }
        })
    }

    doAuth() {
        document.querySelector('.btnEnter').addEventListener('click', () => {
            try {
                const emailAuth = document.querySelector('.emailEnter').value
                const pwdAuth = document.querySelector('.passwordEnter').value
                this.isEmpty(emailAuth, pwdAuth)
                const server = new Server2();
                const dataServer = server.controller({
                    emailAuth,
                    pwdAuth
                })
                alert(dataServer)
            } catch (error) {
                alert(error.message)
            }
        })
    }
}

class Server2 {
    middleware(email) {
        if (!/^[a-zA-Z0-9_\.]+@[a-z]+\.[a-z]{2,5}$/g.test(email)) throw new Error('error')
    }

    controller(obj) {
        try {
            this.middleware(obj.emailAuth)
            const dataServise = this.servise(obj)
            return dataServise
        } catch (error) {
            return error.message
        }
    }

    servise(obj) {
        const bool = this.repository(obj)
        if (!bool) throw new Error('совпадений нет')
        return bool
    }

    repository(obj) {
        const DB = [{
                "id": 1,
                "email": "yesenia@mail.ru",
                "pwd": "pwd12345678"
            }, {
                "id": 2,
                "email": "hanna@mail.ru",
                "pwd": "pwd123123"
            },
            {
                "id": 3,
                "email": "stanislau@mail.ru",
                "pwd": "pwdtest444"
            }, {
                "id": 4,
                "email": "german@mail.ru",
                "pwd": "pwdqqq111"
            },
            {
                "id": 5,
                "email": "maria@mail.ru",
                "pwd": "pwd746552"
            }
        ]

        const res = DB.some(el => el.email == obj.emailAuth && el.pwd == obj.pwdAuth)
        return res ? true : false;
    }
}


class Server {
    middleware(email) {
        if (!/^[a-zA-Z0-9_\.]+@[a-z]+\.[a-z]{2,5}$/g.test(email)) throw new Error('error')
    }

    controller(obj) {
        try {
            this.middleware(obj.email)
            const bool = this.service(obj)
            return bool
        } catch (error) {
            console.log(error.message)
            throw new Error(error.message)
        }
    }
    service(obj) {
        const bool = this.repository(obj)
        if (!bool) throw new Error('пользователь существует')
        return bool
    }

    repository(obj) {
        const DB = [{
                "id": 1,
                "email": "yesenia@mail.ru",
                "pwd": "pwd12345678"
            }, {
                "id": 2,
                "email": "hanna@mail.ru",
                "pwd": "pwd123123"
            },
            {
                "id": 3,
                "email": "stanislau@mail.ru",
                "pwd": "pwdtest444"
            }, {
                "id": 4,
                "email": "german@mail.ru",
                "pwd": "pwdqqq111"
            },
            {
                "id": 5,
                "email": "maria@mail.ru",
                "pwd": "pwd746552"
            }
        ]

        const res = DB.filter(el => el.email === obj.email ? el : null)
        if (res.length == 0) {
            DB.push(obj)
            return true
        }
        return false
    }


}

const client = new Client()