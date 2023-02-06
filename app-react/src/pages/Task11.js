// 2. По клику на кнопку собрать данные из input и проверить вводимую строку на
// палиндром

import { TextField, Button } from '@mui/material'
import { useState } from 'react'

function Task11() {
    const [value, setValue] = useState()
    function changeValue(event) {
        setValue(event.target.value)
    }
    function doPalindrom() {
        let palindrom = value.split('').reverse().join('');
        (value === palindrom) ? alert('this word is a palindrom') : alert('this  word is not a palindrom')
    }

    return (
        <>
            <TextField onChange={changeValue} id="standard-basic" label="type txt" variant="standard" />
            <Button onClick={doPalindrom} variant="outlined">click</Button>
        </>
    )
}

export default Task11