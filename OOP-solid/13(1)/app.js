// 1. Реализуйте класс DomHtml, который будет считать количество кликов по html
// кнопке

class DomHtml {

    constructor() {
        this.click()
    }

    count = 0;

    click() {
        document.querySelector('.btn').addEventListener('click', () => {
            this.count++
            console.log(this.count);
        })
    }

}

const domHtml = new DomHtml();


