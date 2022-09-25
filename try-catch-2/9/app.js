// 9. Middleware – cвязующее программное обеспечение. Прежде чем запрос попадет на сервер, запрос поступает в middleware, где находятся функции валидаторы. Необходимо реализовать функцию валидатор, которая обрабатывает 2 поля: почту, имя пользователя. Для проверки полей воспользуйтесь регулярными выражениями. Middleware-функция возвращает true, если оба условия отработали успешно и false в противном случае

const email = 'nastya.panysh@gmail.com'
const name = 'Nastya'

function getValid(email, name) {
    try {
        if (!/^[a-zA-Z0-9_\.]+$/g.test(name)) throw new Error('некорректное имя')
        if (!/^[a-zA-Z0-9_\.]+@[a-z]+\.[a-z]{1,3}$/g.test(email)) throw new Error('некорректное имя')
        return true
    } catch (error) {
        return error.massage
    }
}
console.log(getValid(email, name));