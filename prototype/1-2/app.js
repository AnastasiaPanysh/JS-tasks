// 1. По условию задачи даны инпут и кнопка. Пользователь вводит в инпут значение.
// Необходимо вывести среднее этого числа

const btn = document.querySelector('.btn')

btn.addEventListener('ckick', () => {
    const arr = []
    const input = +document.querySelector('input').value
    arr.push(input)
    document.querySelector('.res').innerHTML = arr;
    
    document.querySelector('.avg') =arr.reduce((sum, el) => sum = el, 0) / arr.length
})