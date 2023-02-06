// 5. По клику на кнопку собрать данные из двух input: name, surname. Работать с 1
// state, первоначальное значение которого {name: ‘’, surname: ‘’}. Сравнить значения
// 2 input. Структура state:


import { TextField, Button } from '@mui/material'
import { useState } from 'react'

function Task14() {
    const [form, setForm] = useState({
        firstname: "",
        lastname: ""
    });

    function changeValue(event) {
        setForm({ ...form, [event.target.name]: event.target.value});
    }
    
    function checkForms() {
        try {
            if (!form.firstname) throw new Error('name is empty');
            if (!form.lastname) throw new Error('surname is empty');
            alert('SUCCESS');
        } catch (error) {
            alert(error.message);
        }

    }

    return (
        <>
            <TextField name="firstname" onChange={changeValue} id="standard-basic" label="NAME" variant="standard" />
            <TextField name="lastname" onChange={changeValue} id="standard-basic" label="SURNAME" variant="standard" />
            <Button onClick={checkForms} variant="outlined">click</Button>

        </>
    )
}
export default Task14