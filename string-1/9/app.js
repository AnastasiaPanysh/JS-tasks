/*9. На вход программе подается переменная date, в котрой лежит дата в формате
'xxxx-xx-xx'. Преобразуйте эту дату в формат 'xx/xx/xxxx’. (reverse)*/

const a = prompt('введите дату формата xxxx-xx-xx').split('-').reverse().join('/');
console.log(a);