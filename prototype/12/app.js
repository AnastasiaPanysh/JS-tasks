// 2. Разработчик запушил в главную ветку GitHub js файл с многострочными
// комментариями (/* */). Предстоящее демо гарантирует демонстрацию экрана с
// кодом проделанной работы за спринт. Программисту необходимо вырезать все
// комментарии в коде новым коммитом. Задача: вырезать куски кода комментариев
// используя регулярные выражения воизбежание публичного стыда.

const str = '<--ccomen$-->';

function deleteComments(str) {
    let strWithoutComments ='';
    strWithoutComments = str.replace(/<--[\w+\.%!@#$&*]+-->/g, '');
    if (str = strWithoutComments) {
        console.log(str);
    } else {
        console.log(strWithoutComments);
    }
}
console.log(deleteComments(str));

//не раб