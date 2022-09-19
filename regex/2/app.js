//2. На вход подается строка вида “имя фамилия возраст”. Необходимо написать
// регулярное выражение для данной строки. Если же строка подходит под
// регулярное выражение, то вывести булевое true, в противном случае бросить
// исключение и обработать

const str ='Nastya Panysh 21';
function checkArr(str) {
     try {
          if (!/^[a-zA-Z]+ [a-zA-Z]+ [\d]+$/gm.test(str)) throw new error('не подходит под RegEx')
          return true
     } catch (err) {
          return err.message
     }
}
console.log(checkArr(num));
