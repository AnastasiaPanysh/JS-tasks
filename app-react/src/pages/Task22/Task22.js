import Task22Item from "./Task22Item"
import { useState, useEffect } from "react"

function Task22() {
    const [value, setValue] = useState(0)
    const [arr, setArr] = useState([])

    function doRandom() {
        const result = []
        let item = []
        for (let i = 1; i <= 9; i++) {
            item.push(i)
            if (i % 3 === 0) {
                result.push(item)
                item = []
            }
        }
        setArr(result)
    }

    useEffect(()=>{
        doRandom()
    },[])

    return (
        <>
            <div>{value}</div>
            {arr.map((el, index) => <Task22Item key={index} item={el} setValue={setValue} />)}
        </>
    )
}

export default Task22