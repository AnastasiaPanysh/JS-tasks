// 3. На входе статичный массив строк. Ваша задача отфильтровать и отобразить на
// странице в тег li только те строки, которые содержат знак @

function Task3() {
    const arr = ['test@gmail.ru', 'testgmail.ru', 'test2@gmail.ru'];
    const res = arr.map(el => /^[a-zA-Z\.]+@[a-z]+\.[a-z]+$/g.test(el)?<li>{el}</li>:null);
    return(
        <ul>
        <li>{res}</li>
        </ul>
    )
}

export default Task3;