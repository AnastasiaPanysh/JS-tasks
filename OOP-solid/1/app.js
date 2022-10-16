// 1. Реализуйте класс DomHtml, который будет взаимодействовать с DOM по клику на
// кнопку. Класс содержит 4 метода: doPlus, doMinus, doMultiply, doDivide

class DomHtml {
    constructor() {
        this.main()
    }

    main() {
        const btn = document.querySelector('.btn')
        btn.addEventListener('click', () => {
            const value1 = +document.querySelector('.inp1').value
            const value2 = +document.querySelector('.inp2').value
            this.doPlus(value1, value2)
            this.doMinus(value1, value2)
            this.doMultiply(value1, value2)
            this.doDivide(value1, value2)
        })
    }

    doPlus(value1, value2) {
        document.querySelector('.sum').innerHTML = `Результат суммы: ${value1+value2}`
    }

    doMinus(value1, value2) {
        document.querySelector('.minus').innerHTML = `Результат вычетание: ${value1-value2}`

    }

    doMultiply(value1, value2) {
        document.querySelector('.multi').innerHTML = `Результат умножения: ${value1*value2}`
    }

    doDivide(value1, value2) {
        document.querySelector('.del').innerHTML = `Результат деления: ${value1/value2}`

    }
}

const domHtml = new DomHtml();

