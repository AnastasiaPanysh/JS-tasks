const btn = document.querySelector('.btn')
const td = document.querySelector('.table td')

btn.addEventListener('click', () => {
    td = document.createElement('td').appendChild(document.querySelector('input').value);
})

//надо разобраться 