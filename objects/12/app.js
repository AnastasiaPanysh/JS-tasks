// 12. На входе пустой объект, массив, n – количество элементов массива. Далее
// производится заполнение массива с клавиатуры. Добавить в объект ключ “sum”,
// значение – сумма элементов массива(reduce). Добавить проверки на ввод чисел

const obj = {};
const arr = [];
const n = +prompt("введите знчение");
for (let i = 0; i < n; i++) {
     let input = prompt('введите знач элемента')
     if (!isNaN(input))
          arr.push(+input)
}
obj.sum = arr.reduce((sum, elem) => sum + elem, 0);
