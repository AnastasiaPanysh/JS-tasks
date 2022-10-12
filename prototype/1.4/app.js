// 4. На вход программе подается число в двоичной системе счисления. Необходимо
// преобразовать его в десятичную систему счисления


const btn = document.querySelector('.btn');

function checkBin(input) {
    if (!/[0,1]/g.test(input)) throw new Error('не бинарое число')
}

btn.addEventListener('click', () => {
    let input = +document.querySelector('.inpt').value
    try {
        checkBin(input)
        document.querySelector('.res').innerHTML = parseInt(input, 2)
        input = ''

    } catch (error) {
        alert(error.message)
        input = ''
    }
})