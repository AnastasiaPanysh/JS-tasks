// По условию задачи даны инпут и кнопка. Пользователь вводит в инпут значения и
// по нажатию на кнопку формирует массив. Необходимо создать объект, где
// каждый ключ – индекс элемента массива, а значение – текущее итерируемое
// значение массива
// [11, 2, 13] – {
// 0: 11,
// 1: 2,
// 2: 13
// }

const btn = document.querySelector('.btn');
const arr = [];
const obj = {};

btn.addEventListener('click', () => {
    const inpt = document.querySelector('.inpt')
    arr.push(inpt.value)
    document.querySelector('.array').innerHTML = `массив ${arr}`
    inpt.value = '';
    for (let i = 0; i < arr.length; i++) {
        obj[i] = arr[i]
    }
    document.querySelector('.object').innerHTML = `массив ${JSON.stringify(obj)}`
})