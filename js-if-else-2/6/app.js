/*6. Найти квадратный корень числа. Если же число без плавающей точки, то просто
вывести его. В противном случае необходимо округлить число до целых.
Добавить проверку на ввод только чисел*/

let a = prompt('введите число');
if (!isNaN(a)) {
    let res = Math.sqrt(a)
    console.log((Number.isInteger(res)) ? console.log(res) : console.log(Math.round(res)));
}