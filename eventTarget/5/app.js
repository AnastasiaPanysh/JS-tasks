const btn = document.querySelector('.btn');
let arr = [];

function checkInput(input) {
    if (input.value === '') throw new Error('пустое значение')
}


btn.addEventListener('click', () => {
    try {
       let inp= document.querySelector('input')
        checkInput(inp)
        arr.push(inp.value);
        document.querySelector('.res').innerHTML = `результат: ${arr}`;
        inp.value=''
    } catch (error) {
        alert(error.message)
    }
})