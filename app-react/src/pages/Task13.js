// 4. По клику на кнопку собрать данные из двух input (2 разных state). Сравнить
// значения 2 input

import { TextField, Button } from '@mui/material'
import { useState } from 'react'

function Task13() {
    const [value_1, setValue_1] = useState()
    const [value_2, setValue_2] = useState()

    function changeValue1(event) {
        setValue_1(event.target.value)
    }

    function changeValue2(event) {
        setValue_2(event.target.value)
    }

    function compareValues() {
        try {
            if (value_1 !== value_2) throw new Error('not same values')
            else alert('success')
        } catch (error) {
            alert(error.message)
        }
    }

    return (
        <>
            <TextField onChange={changeValue1} id="standard-basic" label="type txt" variant="standard" />
            <TextField onChange={changeValue2} id="standard-basic" label="type txt" variant="standard" />
            <Button onClick={compareValues} variant="outlined">click</Button>

        </>
    )
}
export default Task13