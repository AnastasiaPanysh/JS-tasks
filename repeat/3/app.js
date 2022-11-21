// 3. Вы вводите числа в поле для ввода формируя и отображая массив.
// Необходимо также отображать только уникальные значения массива
// [1, 1, 4, 2, 3, 3] -> [4, 2]

let unique =[];
document.querySelector('.btn').addEventListener('click', () => {
    let input = document.querySelector('.input').value.split('');
    for (let i = 0; i < input.length; i++) {
        if (!unique.includes(input[i])) unique.push(input[i])
    }
    document.querySelector('.res').innerHTML =`массив: ${input}`;
    document.querySelector('.unique').innerHTML =`уникальный массив: ${unique}`;
    input = ''
})



