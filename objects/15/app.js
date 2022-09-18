// 15. На входе массив чисел. На основе этого массива сформировать объект, где ключ –
// число массива, значение – true/false. True – число четное, false – нечетное

const arr = [1, 2, 3, 4, 5]
const obj = {};

arr.forEach(elem => {
     if (elem % 2 === 0) {
          obj[elem] = true
     } else {
          obj[elem] = false
     }
})
console.log(obj);

