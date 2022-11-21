// 7. Вы вводите числа в поле для ввода формируя и отображая массив.
// Необходимо вывести все числа кратные 3 

document.querySelector('.btn').addEventListener('click',()=>{
    let input = document.querySelector('.inp').value.split('')
    document.querySelector('.res').innerHTML = `числа кратные трем: ${input.filter(el=> el%3===0)}`
})