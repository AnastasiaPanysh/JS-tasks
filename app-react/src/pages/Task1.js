// 1. На входе статичный массив чисел. Ваша задача каждое число массива возвести в
// квадрат и отобразить на странице


function Task1() {
    const arr = [1, 2, 3, 4, 5]
    const res = arr.map(el => el ** 2)
    console.log(res);
    return (
    <div>{res}</div>
    )
}


export default Task1