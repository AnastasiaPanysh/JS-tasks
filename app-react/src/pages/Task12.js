// 3. По клику на кнопку собрать данные из input и проверить вводимую строку на
// почту

import { TextField, Button } from '@mui/material'
import { useState } from 'react'

function Task12() {
    const [value, setValue] = useState()

    function changeValue(event) {
        setValue(event.target.value)
    }

    function checkEmail() {
        try {
            if (!/^[\w\.\_\$\-]+@[a-z]+\.[a-z]+$/g.test(value)) throw new Error('email is invalid')
            alert('success')
        } catch (error) {
            alert(error.message)
        }
    }

    return (
        <>
            <TextField onChange={changeValue} id="standard-basic" label="type txt" variant="standard" />
            <Button onClick={checkEmail} variant="outlined">click</Button>

        </>
    )
}
export default Task12