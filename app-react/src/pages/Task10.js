// 1. При вводе данных в input отображать вводимое значение в параграф текущей
// страницы
import TextField from '@mui/material/TextField'
import { useState } from 'react'

function Task10() {
const [value,setValue] = useState()

function setParagraph(event){
  setValue(event.target.value)
}
    return (
        <>
        <p>{value}</p>
        <TextField onChange={setParagraph} id="standard-basic" label="type text" variant="standard" />
        </>
    )
}

export default Task10