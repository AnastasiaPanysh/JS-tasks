// Необходимо отобразить кнопку с надписью «Нажми на меня» и инпут с плейсхолдером по-умолчанию «+375(хх)ххх-хх-хх». По клику на кнопку заменить значение инпута на «+375(29)111-11-11»

const btn = document.querySelector('.btn');

function isValid(valueInput) {
    if (!valueInput) throw new Error('input is empty');
    if (!/^\+[0-9]{3}\([0-9]{2}\)[0-9]{3}-[0-9]{2}-[0-9]{2}/g.test(value)) throw new Error('incorrect format');
    return true
}

btn.addEventListener('click', () => {
    let input = document.querySelector('.inp');
    try {
        if (isValid(input.value)) {
            input.style = 'border: 1px solid black'
            alert(input.value);
            input.value = '';
        }
    } catch (error) {
        input.style = 'border: 1px solid red'
        alert(error.message);
        input.value = '';
    }
});