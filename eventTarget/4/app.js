// 4. По двойному клику на кнопку изменить цвет кнопки

// const btn = document.querySelector('.btn');

// const obj = {};
// let arr = [];

// function validInput(input) {
//     if (!/^[a-z]{1,3}\/[0-9]{6}-[a-z]+$/g.test(input)) throw new Error('неправильный формат')
// }

// btn.addEventListener('dblclick', () => {
//     try {
//         const inpt = document.querySelector('input')
//         validInput(inpt.value)

//         if (!arr.includes(inpt.value)) arr.push(inpt.value)

//         for (const item of arr) {
//             const newEl = document.createElement('p');
//             newEl.textContent = item;
//             document.querySelector('res').appendChild(newEl)
//         }

//         inpt.value = ''
//         arr = [];

//     } catch (error) {
//         return error.message
//     }
// });

const btn = document.querySelector('.btn');

let obj = {};

function validInput(input) {
    if (!/^[a-z]{1,3}\/[0-9]{6}-[a-z]+$/g.test(input)) throw new Error('неправильный формат')
}

btn.addEventListener('dblclick', () => {
    try {
        const inpt = document.querySelector('input')
        validInput(inpt.value)

        for (const key in obj) {
            if (obj[key] === inpt.value) throw new Error('ТАКАЯ ГРУППА СУЩЕСТВУЕТ')
        }
        obj = {};

        obj[MathFloor(Math.random() * 100)] = inpt.value

        for (const key in obj) {
            const newEl = document.createElement('p');
            newEl.textContent = obj[key];
            document.querySelector('.res').appendChild(newEl)
        }

        document.querySelector('.res').style = 'border: 1px solid red'
        inpt.value = ''

    } catch (error) {
        return error.message
    }
});