/* 3. Пользователь вводит число от 1 до 7, соответствующее дню недели. Необходимо
вывести день для введенного числа.
1 -> Понедельник*/

let a = +prompt('введите число от 1 до 7');
let result;
switch (a) {
    case 1:
        result = 'пн';
        break;
    case 2:
        result = 'вт';
        break;
    case 3:
        result = 'ср';
        break;
    case 4:
        result = 'чт';
        break;
    case 5:
        result = 'пт';
        break;
    case 6:
        result = 'сб';
        break;
    case 7:
        result = 'вс';
        break;
    default:
        result = 'повторите ввод';
}
console.log(result);