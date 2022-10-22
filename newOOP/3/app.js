// 3. Реализуйте класс Html. В нем функцию renderArr, принимающую селектор. Вам
// неоходимо отобразить массив ['Minsk', 'Brest', 'Vitebsk'] в принимаемый селектор

// class Html {

//     constructor(str, arr) {
//         this.str = str
//         this.arr = arr
//     }

//         renderArr() {
//         document.querySelector(this.str).textContent = this.arr

//     }
// }

// const html = new Html('.res', ['Minsk', 'Brest', 'Vitebsk']);
// html.renderArr()


//ДИНАМИЧНО

class Html {

    constructor(str) {
        this.str = str
        this.doArray()
    }

    doArray() {
        document.querySelector('.btn').addEventListener('click', () => {
            const input = +document.querySelector('input').value
            let arr = [];
            for (let i = 0; i < input; i++) {
                arr.push(Math.floor(Math.random()*10))
            }
            this.renderArr(arr);
        })
    }

    renderArr(arr) {
        document.querySelector(this.str).textContent = arr
    }
}

const html = new Html('.res');
