// Вывести в строчку все вводимые значения через инпут в виде массива. Добавить проверку, что поле не пустое
const btn = document.querySelector('.btn');
let arr = [];


btn.addEventListener('click', () => {
    let inp = document.querySelector('.inp');
    arr.push(inp.value)
    document.querySelector('.res').innerHTML = `результат: ${arr}`;
})