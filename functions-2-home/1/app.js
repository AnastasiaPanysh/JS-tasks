// 1. Работа с замыканием. Необходимо реализовать конкатенацию строк при каждом
// последующем вызове функции

function concatenate() {
     let str = ""
     return function () {
          str += 'hi'
          console.log(str);
     }
}

const returnWrapperFunction = concatenate();
returnWrapperFunction()
returnWrapperFunction()
returnWrapperFunction()