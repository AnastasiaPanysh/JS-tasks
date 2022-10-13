// 5. Реализуйте класс Anagram (Анаграмма это слово или фраза , полученный путем
//      замены букв исходного слова или фразы). Создать функцию для вывода ряда true,
//      если слова являются анаграммами. Добавить проверки на ввод.
//пила липа

class Anagram {
     constructor(str1, str2) {
          this.str1 = str1
          this.str2 = str2
     }

     checkStr() {
          const sortedStr1 = this.str1.split('').sort().join('');
          const sortedStr2 = this.str2.split('').sort().join('');
          return sortedStr1 === sortedStr2 ? true : false;
     }
}
const anagram = new Anagram('пtла', 'липа');
console.log(anagram.checkStr());


// class Anagram {

//      checkStr(str1, str2) {
//           const sortedStr1 = str1.split('').sort().join('');
//           const sortedStr2 = str2.split('').sort().join('');
//           return sortedStr1 === sortedStr2 ? true : false;
//      }
// }
// const anagram = new Anagram();
// console.log(anagram.checkStr('пила', 'липа'));

