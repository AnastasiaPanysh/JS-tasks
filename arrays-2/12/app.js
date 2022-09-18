// 12. На вход программе подается строка текста в маленьком регистре. Разбить строку
// на массив. Необходимо поставить каждый элемент массива в чередование
// регистров toLowerCase, toUpperCase. Map
// hschool -> HsChOoL
const str = 'hschool'.split('')

let res = str.map((elem, i) => {
  if (i % 2 === 0) {
    return elem.toUpperCase();
  } else {
    return elem
  }
})
console.log(res.join(''));