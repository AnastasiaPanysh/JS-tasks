// 4. Дополнить 3. Значения массива отображать одиз за одним через appendChild
// 5. Добавить скролл к 4 заданию

class Html {

    constructor(str) {
        this.str = str
        this.doArray()
    }

    doArray() {
        document.querySelector('.btn').addEventListener('click', () => {
            document.querySelector(this.str).innerHTML = ''
            let input = +document.querySelector('input').value
            let arr = [];
            for (let i = 0; i < input; i++) {
                arr.push(Math.floor(Math.random() * 10))
            }
            for (let i = 0; i < arr.length; i++) {
                const teg = document.createElement('p');
                teg.textContent = arr[i]
                this.renderArr(teg);
            }
        })
    }

    renderArr(teg) {
        document.querySelector(this.str).appendChild(teg)
    }
}

const html = new Html('.res');