// 4. Вы вводите строку. Неоходимо проверить является ли эта строка датой и
// соответствует шаблону вида хх-хх-хххх

document.querySelector('.btn').addEventListener('click', () => {
    let input = document.querySelector('.input').value;
    (/^[0-9]{2}-[0-9]{2}-[0-9]{4}$/gm.test(input))? document.querySelector('.res').innerHTML = true:document.querySelector('.res').innerHTML = false;
    input=''
})