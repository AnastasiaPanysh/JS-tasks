// 4. У вас есть кнопка. После каждого нажатия менять ее цвет [‘red’, ‘white’, ‘blue’]
// рандомно

function Task9() {
    const array = ['red', 'blue', 'yellow']
    function changeColor(event) {
        let number = Math.round(Math.random() * 2)
        event.target.style = `background-color:${array[number]}`
    }

    return (
        <>
            <button onClick={changeColor}>change</button>
        </>
    )
}

export default Task9

