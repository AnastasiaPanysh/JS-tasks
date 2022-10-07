// 6. На входе объект и число n, символизирующее количество пар ключ-значение.
// Ключи - автоинкремент (генерируется автоматически от 1 до n). Значение каждого
// ключа – рандомное число от 1 до 100. Вывести каждое значение объекта с
// помощью values
const btn = document.querySelector('.btn');


btn.addEventListener('click', () => {
    const inpt = document.querySelector('.inpt');
    const obj = {};
    for (let i = 0; i < +inpt.value; i++) {
        obj[i] = Math.floor(Math.random() * 100);
    }
    console.log(Object.values(obj));
})