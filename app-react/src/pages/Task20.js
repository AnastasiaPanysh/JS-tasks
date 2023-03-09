import { useState } from "react"

function Task20() {

    const [form, setForm] = useState({})

    function saveValue(event) {
        setForm({...form,  [event.target.name]: event.target.value })
    }

    function showValues() {
        console.log(form);
    }

    return (
        <>
            <input name="name" onChange={saveValue} />
            <input name="lastname" onChange={saveValue} />
            <input name="age" onChange={saveValue}/>

            <button onClick={showValues}>button</button>
        </>
    )
}

export default Task20