// 2. На входе статичный массив чисел. Ваша задача найти корень каждого числа и
// отобразить на странице в виде h1


function Task2() {
    const arr = [4, 16, 25]
    return (
    <div>{arr.map(el=><h1>{Math.sqrt(el)}</h1>)}</div>
    )
}


export default Task2