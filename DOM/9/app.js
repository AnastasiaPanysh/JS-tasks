const btn = document.querySelector('.btn')
const obj = {
    1: 'black',
    2: 'red',
    3: 'white',
    4: 'blue',
    5: 'yellow'
}

btn.addEventListener('click', () => {
    btn.style = `background-color:${obj[Math.round(Math.ceil()*Object.entries(obj).length)]}`
})