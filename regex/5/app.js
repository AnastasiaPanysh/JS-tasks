// 5. На вход подается строка в виде url. Необходимо написать регулярное выражение
// для данной строки. Если же строка подходит под регулярное выражение, то
// вывести булевое true, в противном случае бросить исключение и обработать

const url = 'https://github.com/AnastasiaPanysh'

function checkUrl(newUrl) {
     try {
          if (!/^(http|https):\/\/[a-zA-Z]+\.[a-z]{1,3}\/[\w]+$/g.test(newUrl)) throw new error('не подходит под RegEx')
          return newUrl

     } catch (error) {
          return error.message
     }
}
console.log(checkUrl(url));
