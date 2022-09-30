// Необходимо отобразить кнопку с надписью «Нажми на меня» и пустой инпут. По клику на кнопку вызвать alert и отобразить сообщение из значения инпута. Проверки на ввод. Обработать ошибки

const btn = document.querySelector('.btn');

function checkValue(input) {
    if (!input.value) throw new Error('error');
 }

btn.addEventListener('click', () => {
    let input = document.querySelector('.input');
    try {
        checkValue(input)
        alert(input.value)
    } catch (error) {
        alert(error.message)
    }
})