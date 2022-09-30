// Необходимо отобразить числовой инпут и кнопку. После нажатия на кнопку необходимо получить значение из инпута. Проверить, что это число > 0. Если проверка true, то вывести в Результат ряд Фибоначчи. Рекурсия

const btn = document.querySelector('.btn')


function fibonacci(input) {
    if (input.value < 2) return 1;
    else return fibonacci(input.value - 2) + fibonacci(input.value - 1);
    
}

btn.addEventListener('click', () => {
    let input = document.querySelector('.input');
    fibonacci(input)
    document.querySelector('.res').innerHTML =`результат: ${fibonacci(input)}`;
})

//не получилось 