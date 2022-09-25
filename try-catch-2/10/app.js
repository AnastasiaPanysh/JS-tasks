// 10. Реализуйте функцию, которая принимает строку из 2 повторяющихся символов.
// Необходимо проверить, содержит ли строка одинаковое количество символов.
// Функция возвращает true, если строка содержит одинаковое количество
// символов и false в противном случае. Добавить проверки
// ooxx –> true
// xooxx –> false
// ooxXm –> ИСКЛЮЧЕНИЕ (3 символа)

const str = 'ooxx'.toLowerCase().split('').sort().join('')

function checkStr(str) {
     try {
          if (str.length % 2 == 0) {
               for (let i = 0; i < str.length; i + 2) {
                    if (str[i] === str[i + 1]) return true
                    else return false
               }
          } else throw new Error('doesn\'t contain a pair')
     } catch (error) {
          return error.message
     }
}
console.log(checkStr(str));

