const btn = document.querySelector('.btn');
let arr = [];

function checkVal(input) {
    if (!input.value) throw new Error('error')
    if (isNaN(input.value)) throw new Error('not a number')
}

btn.addEventListener('click', () => {
    let input = document.querySelector('.input');
    try {
        checkVal(input)
        arr.push(input.value);
        document.querySelector('.res').innerHTML = `вы ввели: ${arr}`;
        input.value = ''
        input.style = "border: 1px solid black"
    } catch (error) {
        alert(error.message)
        input.value = ''
        input.style = "border: 1px solid red"
    }
})