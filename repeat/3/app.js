// 3. Вы вводите числа в поле для ввода формируя и отображая массив.
// Необходимо также отображать только уникальные значения массива
// [1, 1, 4, 2, 3, 3] -> [4, 2]


class Dom {
    constructor() {
        this.fillArray();
    }

    fillArray() {
        const btn = document.querySelector('.btn');
        let newArr = [];
        btn.addEventListener('click', () => {
            try {
                const one = document.querySelector('.input').value;
                newArr.push(one);
                let uniqArr = [];
                document.querySelector('.res').innerHTML = newArr;
                newArr = newArr.sort();
                for (let i = 0; i < newArr.length; i++) {
                    if (newArr[i] != newArr[i - 1] && newArr[i] != newArr[i + 1]) {
                        uniqArr.push(newArr[i]);
                    }
                }
                document.querySelector('.unique').innerHTML = `уникальный ${uniqArr}`;


            } catch (error) {
                alert(error.message)
            }
        });

        checkArray() {
            if (!/^[0-9]+$/gm.test(one)) throw new Error('ERRROORRR')
        }
    }
}
const dom = new Dom()