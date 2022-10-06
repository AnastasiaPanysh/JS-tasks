// 2. Написать функцию на подсчет количества пар ключ значение в объекте. Добавить
// проверки 

const btn = document.querySelector('.btn')

btn.addEventListener('click', () => {
     let inpt = document.querySelector('.inpt').value
     const obj = {}
     for (let i = 0; i < inpt; i++) {
     obj[i]=Math.floor(Math.random()*100)
     }
    const count= qrtOfPair(obj)
    console.log(coutn);
})

function qrtOfPair(obj){
     let arr = Object.entries(obj)
     return arr.length
}