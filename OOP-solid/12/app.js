// 12. Реализуйте класс Sort, сдержащий метод sortData, сортирующий все числа
// статичного массива сортировкой пузырьком


class Sort {
    sortData(arr) {
        for (let j = arr.length - 1; j > 0; j--) {
            for (let i = 0; i < j; i++) {
                if (arr[i] > arr[i + 1]) {
                    let temp = arr[i];
                    arr[i] = arr[i + 1];
                    arr[i + 1] = temp;
                }
            }
        }
        return arr
    }
}

const sort = new Sort();
console.log(sort.sortData([1, 8, 6, 7, 4, 5, 3]));