// 2. Напишите функцию, которая принимает строку в маленьком регистре и
// возаращает строку, где каждое слово начинается с большого регистра
// hschool company -> Hschool Company

let str = prompt('enter your string').split('')

function convertToUpperCase(a) {
     let newArr = a.map(elem => {
          return elem[0].toUpperCase() + elem.slice(1).toLowerCase()
     })
     return newArr.join('')
}
console.log(convertToUpperCase(str));