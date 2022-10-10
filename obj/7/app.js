// 7. На вход подается число. Необходимо каждое значение возвести в степень
// индекса и вычислить сумму.

const btn = document.querySelector('.btn');
// const arr = [];

function checkInput(input) {
     if (!input.value) throw new Error('error');
     if (isNaN(input.value)) throw new Error('not a number');
}

btn.addEventListener('click', () => {
     let input = document.querySelector('.inpt');
     try {
          checkInput(input)
          // arr.push(input.value);
          let arr = input.value.split('')

          let sum =0
          for (let i = 0; i < arr.length; i++) {
               sum += arr[i] ** i
          }
          
          document.querySelector('.res').innerHTML = `сумма: ${sum}`;
          input.value = ''
     } catch (error) {
          alert(error.message)
          input.value = ''
     }
})