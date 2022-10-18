// 4. Реализуйте класс Word, и функцию isPalindrome которая будет выводить в alert
// соответствующее будевое значение. Если значения 2 инпутов являются
// палиндромом -> true, в противном случае false

class Word {

    constructor() {
        this.isPalindrome()
    }
    isPalindrome() {
        document.querySelector('.btn').addEventListener('click', () => {
            const value1 = document.querySelector('.value1').value
            const value2 = document.querySelector('.value2').value
            if (value1 === value1.split('').reverse().join('') && value2 === value2.split('').reverse().join('')) alert(true)
            else alert(false)
        })
    }

}
const word = new Word()