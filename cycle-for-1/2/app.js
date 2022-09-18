/*2. Найдите квадратный корень числа.Результат округлите до целых, десятых, сотых.*/

const a = 12345;
const b = 1
if (!isNaN(a)) {
    const b = a ** (1 / 2)
    console.log(Math.round(b), b.toFixed(1), b.toFixed(2));
}