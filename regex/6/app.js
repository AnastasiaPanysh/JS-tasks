// 6. На вход подается строка вида: путь к файлу. Необходимо написать регулярное
// выражение для данной строки. Если же строка подходит под регулярное
// выражение, то вывести булевое true, в противном случае бросить исключение и
// обработать
// C:\Users\Admin\Desktop\test.txt -> true
// C:/Users/Admin/Desktop/test.txt -> true


const file = 'C:\/Users\/Admin\/Desktop\/test\.txt';

function checkFileName(newFile) {
     try {
          if (!/^[A-Z]+:+\/+[a-zA-Z]+\/[a-zA-Z]+\/[a-zA-Z]+\/[a-zA-Z]+\.+[a-z]+$/g || /^[A-Z]+:+\\+[a-zA-Z]+\\[a-zA-Z]+\\[a-zA-Z]+\\[a-zA-Z]+\.+[a-z]+$/g.test(newFile)) throw new error('некорретный путь')
          return newFile
     } catch (err) {
          return err.message
     }
}
console.log(checkFileName(file));
