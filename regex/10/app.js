// 10. Неопытный Junior запушил в GitHub html файл с комментариями. Team Lead не
// оценил использование комментариев в ветке development и попросил их убрать.
// Вырезая куски кода вы поняли, что их чересчур много. Необходимо написать
// регулярное выражение, которое вырежет все комментарии из html разметки
// <!-- -->


const string = 'const a = 14 <!--ADD SMTH-->';

function deleteComments(newString) {
     try {
          let strWithoutComments = newString.replace(/<!--[a-zA-Z0-9\.!@#$&*]+$-->/g, '');
          if (strWithoutComments.length === string.length) throw new Error('there no comments');
          return newFile;
     } catch (error) {
          return error.message;
     }
}
console.log(deleteComments(string));
//не работает