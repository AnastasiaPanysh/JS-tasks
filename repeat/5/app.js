// 5. У вас есть 3 инпута. Необходимо вывести в результат конкатенацию всех инпутов

document.querySelector('.btn').addEventListener('click',()=>{
    const input_1 = document.querySelector('.input-1').value
    const input_2 = document.querySelector('.input-2').value
    const input_3 = document.querySelector('.input-3').value 
    document.querySelector('.res').innerHTML = `конкатенация инпуто: ${input_1+input_2+input_3}`;
    input_1="";
    input_2="";
    input_3="";
})