// Необходимо отобразить числовой инпут и кнопку. После нажатия на кнопку необходимо получить значение из инпута. Проверить, что это число > 0. Если проверка true, то вывести в Результат ряд Фибоначчи. Рекурсия

const btn = document.querySelector('.btn')
const input = +document.querySelector('.input');


function fibonacci(input) {
    if (input.value <= 1) return input.value
    return fibonacci(input.value - 1) + fibonacci(input.value - 2)
}

btn.addEventListener('click', () => {
    // typeof input.value ==='number'
    const arr = [];

    for (let i = 0; i < input.value; i++) {
        arr.push(fibonacci(input))
    }
    console.log(arr);
    document.querySelector('.res').innerHTML = `результат: ${arr}`;
})

//не получилось 