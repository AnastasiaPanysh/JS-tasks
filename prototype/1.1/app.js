// 1. По условию задачи даны 2 инпута и кнопка. Необходимо вернуть true, если часть
// символов 1 строки есть в другой.
// 'rkqodlw', 'world‘ – true
// 'kacvtas', 'steak' – false

const btn = document.querySelector('.btn');

function chrckInputs(firstt, second) {
    if (first === '' || second === '') throw new Error('пустая строка');
    if (/[\d]/g.test(first) || /[\d]/g.test(second)) throw new Error('не только буквы');
}


btn.addEventListener('click', () => {
    try {
        const firstInput = document.querySelector('.firstInput').value.trim();
        const secondInput = document.querySelector('.secondInput').value.trim();
        let count = 0
        for (let i = 0; i < secondInput.length; i++) {
            if (firstInput.includes(secondInput[i])) {
                count++
            }
        }
        alert(count === secondInput.length)
    } catch (error) {
        alert(error.message)
    }
});