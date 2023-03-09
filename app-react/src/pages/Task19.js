import { useState } from "react"

function Task19() {
    const [name, setName] = useState()

    function saveName(event) {
        setName(event.target.value)
    }

    function show() {
        console.log(name);
    }

    return (
        <>
            <input onChange={saveName} />
            <button onClick={show}>buttom</button>
        </>
    )
}

export default Task19