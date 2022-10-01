// По нажатию на кнопку поменять местами значения 2 инпутов. 
const change = document.querySelector('.change');
const inp1 = document.querySelector('.inp-1');
const inp2 = document.querySelector('.inp-2');

change.addEventListener('click', () => {
    let changeInp = inp1.value;
    inp1.value = inp2.value;
    inp2.value = changeInp;
})