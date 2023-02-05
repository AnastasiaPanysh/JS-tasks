// 2. По событию изменения input отображать в консоль каждое вводимое значение

function Task7() {

    return (
        <>
            <input onChange={(event) => {
                console.log(event.target.value);
            }} />
        </>
    )
}

export default Task7