// 3. По условию задачи даны инпут и кнопка. Пользователь вводит в инпут значения и
// по нажатию на кнопку формирует массив строк. Необходимо вывести: полный
// массив из всех элементов, а также массив из уникальных значений

const btn = document.querySelector('.btn')
let arr = []

btn.addEventListener('ckick', () => {
    const arr = []
    const input = +document.querySelector('input').value
    arr.push(input)
    document.querySelector('.res').innerHTML = arr;

    arr.forEach(el => !arrUniq.includes(el)) ? arrUniq.push(el) : null
    document.querySelector('.uniq-res').innerHTML = arrUniq

})