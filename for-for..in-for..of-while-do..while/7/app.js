// 7. Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for of найдите сумму
// элементов этого массива
// let value = 5;
// const arr = []

for (let i = 0; i < value; i++) {
    arr.push(+prompt('введите знач'))
}
let res = 0;
for (let i of arr) {
    res += i;
}
console.log(res);