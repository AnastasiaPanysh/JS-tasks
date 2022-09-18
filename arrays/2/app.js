/*2. На входе 7 чисел. Все эти значения пользователь вводит с клавиатуры и заполяет
5 первыми значениями массив. Далее необходимо создать массив из тех
значений, которые являются числами и НЕ равны 2 другим введенным. Если
длина массива равна 0, то вывести ‘Массив пуст’. Добавить проверку на ввод
только чисел после каждого введенного элемента. forEach*/

const arr = []
const arr2 = []
for (let i = 0; i < 7; i++) {
    if (arr[i] < 5) {
        let input = prompt('введите знач')
        if (isNaN(input)) {
            arr.push(input)
        }
    } else {
        let input = prompt('введите знач')
        if (isNaN(input)) {
            arr2.push(input)
        }
    }
}
console.log(arr);
console.log(arr2);

const arr_res = []
arr.forEach(element => {
    if (!arr2.includes(element)) {
        arr_res.push(element)
    }
});
console.log(arr_res);