// Необходимо отобразить числовой инпут и кнопку. После нажатия на кнопку необходимо получить значение из инпута. Проверить, что это число > 0. Если проверка true, то вывести в Результат ряд Фибоначчи. Рекурсия

const btn = document.querySelector('.btn')
let input = document.querySelector('.input');


function fibonacci(input) {
    return input.value <= 1 ? input.value : fibonacci(input.value - 1) + fibonacci(input.value - 2)
}

btn.addEventListener('click', () => {
    const arr = fibonacci(input)
    document.querySelector('.res').innerHTML = `результат: ${arr}`;
})

//не получилось 