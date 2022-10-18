// 8. Реализуйте класс DomHtml, который будет взаимодействовать с DOM по клику на
// кнопку. Класс содержит 1 метод валидации, называемый middleware, в котором
// происходит проверка на uuid, введенный в input. Вывести true, если провека
// успешна

class DomHtml {
    constructor() {
        this.main()
    }

    main() {
        const btn = document.querySelector('.btn');
        btn.addEventListener('click', () => {
            let value = document.querySelector('.inp').value
            this.middleware(value)
        })
    }

    middleware(value) {
        try {
            if (!/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/g.test(value)) throw new Error('ошибка при вводе uuid')
            alert(true)
        } catch (error) {
            alert(error.message)
        }
    }
}

const domHtml = new DomHtml()