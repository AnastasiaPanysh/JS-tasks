// 9. На вход программе подается строка текста, вида “xxxx-xx-xx”. Разбить на массив.
// Преобразуйте эту дату в формат “xx/xx/xxxx”. Как вы думаете, что здесь применить:
// map, forEach, filter?

const str ='xxxx-xx-xx'.split('-')
const res = str.map(function (elem){
    return str.reverse()
})
console.log(res);