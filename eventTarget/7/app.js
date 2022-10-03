const btn = document.querySelector('.btn');

function checkPalindrom(input) {
    if (input.value !== input.value.split('').reverse().join('')) throw new Error('не палиндром')
    if(!input.value) throw new Error('пустая строка')
}

btn.addEventListener('click', () => {
    try {
        const input = document.querySelector('input');
        checkPalindrom(input)
        document.querySelector('.res').innerHTML = `это палиндром`
        input.value = ''
    } catch (error) {
        alert(error.message)
    }
})