// 3. Возле дороги стоят столбы. Расстояние между столбами одинаковое и ширина
// столбов одинаковая. По условию задачи даны 3 инпута и кнопка. По клику на
// кнопку вызывается функция, принимающая три параметра: количество столбов
// (≥ 1); расстояние между столбами (10 – 30 метров); ширина столба (10 – 50
// сантиметров). Рассчитайте расстояние между первым и последним столбом в
// сантиметрах

const btn = document.querySelector('.btn');

function checkInputs(inpQuantity, inpDistance, inpWidth) {
    if (!inpQuantity || !inpDistance || !inpWidth) throw new Error('не все поля заполнены');
    if ((inpQuantity <= 1)) throw new Error('некоррекнтый диапазон');
    if ((inpDistance <= 10 && inpDistance >= 30)) throw new Error('некоррекнтый диапазон');
    if ((inpWidth <= 10 && inpDistance >= 50)) throw new Error('некоррекнтый диапазон');
}



btn.addEventListener('click', () => {
    let inpQuantity = +document.querySelector('.inp-quantity').value;
    let inpDistance = +document.querySelector('.inp-distance').value;
    let inpWidth = +document.querySelector('.inp-width').value;
    try {
        checkInputs(inpQuantity, inpDistance, inpWidth);
        document.querySelector('.res').innerHTML = `расстояние между первым и последним столбом ${inpWidth * inpQuantity + (inpDistance*100) * (inpQuantity - 1)} см`;
        inpQuantity = '';
        inpDistance = '';
        inpWidth = '';
    } catch (error) {
        alert(error.message);
        inpDistance = '';
        inpQuantity = '';
        inpWidth = '';
    }
})