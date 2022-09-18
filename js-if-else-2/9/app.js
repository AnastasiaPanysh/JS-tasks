/*9. Пользователь вводит число: 1, 2, 3 или 4. Если это значение '1', то вывести в консоль
'зима', '2' – 'весна' и так далее. Добавить проверку на ввод только чисел. Решите
задачу через switch-case. */

let a = +prompt('введите номер месяца');
if (!isNaN(a)) {
    let result;
    switch (a) {
        case 1:
            result = 'зима';
            break;
        case 2:
            result = 'весна';
            break;
        case 3:
            result = 'лето';
            break;
        case 4:
            result = 'осень';
            break;
        default:
            result = 'повторите ввод';
    }
    console.log(result);
} else {
    console.log("Некорректный ввод");
}