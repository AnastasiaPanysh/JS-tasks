// 13. На входе n – количество элементов массива. Далее производится заполнение
// массива arr с клавиатуры. Также в памяти есть статичный массив данных
// [“javascript”, “c#”, “c”, “java”]. Необходимо создать новый массив из отфильтрованных
// значений, где строка массива arr включают значения статичного массива.
// Проверка на ввод только текстовых значений на заполнение массива. forEach

const arr = [];
let n = +prompt('кол-во эл в массиве')
const arr2 = ['javascript', 'c#', 'c', 'java']
let arr_res = []

for (let i = 0; i < n; i++) {
    let input = prompt('');
    if (isNaN(input)) {
        arr.push(input)
    }
}

arr.forEach(elem => {
    if (arr2.includes(elem)) {
        arr_res.push(elem)
    }
})
console.log(arr_res);