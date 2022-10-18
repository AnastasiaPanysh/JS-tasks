// 5. Реализуйте класс Word, и функцию isAnagram которая будет выводить в alert
// соответствующее будевое значение. Если значения 2 инпутов являются
// анаграммами -> true, в противном случае false 

class Word {

    constructor() {
        this.isAnagram()
    }
    isAnagram() {
        document.querySelector('.btn').addEventListener('click', () => {
            const value1 = document.querySelector('.value1').value
            const value2 = document.querySelector('.value2').value
            if (value1.split('').sort().join('') === value2.split('').sort().join('')) alert(true)
            else alert(false)
        })
    }

}
const word = new Word()