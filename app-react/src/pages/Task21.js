import { useState } from "react"

function Task21() {

    const [value, setValue] = useState(0)


    function doPlus() {
        setValue(value + 1)
    }

    function doMinus() {
        setValue(value - 1)

    }

    return (
        <>
            <button onClick={doPlus}>+1</button>
            <div>{value}</div>
            <button onClick={doMinus}>-1</button>
        </>
    )
}

export default Task21