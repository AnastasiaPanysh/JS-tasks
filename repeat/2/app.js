// 2. Вы вводите числа в поле для ввода формируя массив.
// Необходимо отобразить массив, а также отдельно
// все четные элементы этого массива и нечетные

let even = [];
let odd = [];
document.querySelector('.btn').addEventListener('click', () => {
    let input = document.querySelector('.input').value.split('');
    for (let i = 0; i < input.length; i++) {
        if (input[i] % 2 == 0) even.push(input[i])
        else odd.push(input[i])
    }
    document.querySelector('.res').innerHTML =`массив: ${input}`;
    document.querySelector('.even').innerHTML = `четные: ${even}`;
    document.querySelector('.odd').innerHTML = `нечетные: ${odd}`;
})