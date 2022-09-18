
/*12. Пользователь вводит дату в формате 'xxxx-xx-xx'. Преобразуйте эту дату в формат
'xx.xx.xxxx'.*/

const a= prompt('введите дату формата xxxx-xx-xx').split('-').reverse().join('.');
console.log(a);