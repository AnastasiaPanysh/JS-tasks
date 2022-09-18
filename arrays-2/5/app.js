// 5. Создать массив гласных из динамичного массива. Filter

let n = +prompt('введите кол-во элементов')
const arr = []
const arr2= ['а', 'у', 'о', 'и', 'э',  'ы',  'я',  'ю',  'е',  'ё']
for (let i = 0; i < n; i++) {
     let input = prompt('введите элемент массива')
     arr.push(input)
}
let res = arr.filter ( function (elem){
     if (arr2.includes(elem)){
          return elem 
     }
})
console.log(res);