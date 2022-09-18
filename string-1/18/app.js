/*18. Пользователь вводит строку. Необходимо вывести все гласные отдельной
строкой (for)
fullstack => ua*/

const str = prompt('Введите строку');
for (let i = 0; i < str.length; i++) {
    if (str[i] == 'а' || str[i] == 'и' || str[i] == 'у' || str[i] == 'е' || str[i] == 'ё' || str[i] == 'о' || str[i] == 'я' || str[i] == 'э' || str[i] == 'ю' || str[i] == 'ы') {
        console.log(str[i]);
    }
}