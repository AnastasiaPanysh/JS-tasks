// 10. Неопытный Junior запушил в GitHub html файл с комментариями. Team Lead не
// оценил использование комментариев в ветке development и попросил их убрать.
// Вырезая куски кода вы поняли, что их чересчур много. Необходимо написать
// регулярное выражение, которое вырежет все комментарии из html разметки
// <!-- -->


const comment = 'const a = 14 <!--ADD SMTH-->';

function deleteComments(newComment) {
     try {
        if (!/<!--(.*?)-->/g.test(newComment)) 
     
     } catch (error) {
          return error.message
     }
}
console.log(deleteComments(comment));