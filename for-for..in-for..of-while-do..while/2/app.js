/* 2. [1, 2, 3, 4, 5]. Выведите каждый элемент массива 3 любыми циклами*/

let arr = [1, 2, 3, 4, 5];
while (i < arr.length) {
    console.log(arr[i]);
    i++
}

let arr = [1, 2, 3, 4, 5];
i = 0
do {
    console.log(arr[i]);
    i++
} while (i < arr.length)


let arr = [1, 2, 3, 4, 5];
for (const item of arr) {
    console.log(item);
}

