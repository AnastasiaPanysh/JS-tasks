/*16. Пользователь вводит строку. Необходимо посчитать количество гласных (for)*/
/*17. Пользователь вводит строку. Необходимо посчитать количество согласных (for)*/

const str = prompt('Введите знач');
let count = 0
for (let i = 0; i < str.length; i++) {
    if (str[i] == 'а' || str[i] == 'и' || str[i] == 'у' || str[i] == 'е' || str[i] == 'ё' || str[i] == 'о' || str[i] == 'я') {
        count += 1
    }
}
console.log(count); //гласные
console.log(str.length - count); //согласные