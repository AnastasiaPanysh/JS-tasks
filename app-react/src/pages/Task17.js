import { useState } from 'react'


function Task17() {
    const [value, setValue] = useState(showContent('About'))

    function getValue(event) {
        setValue(showContent(event.target.textContent))
    }

    function showContent(content) {
        if (content === 'About') return <p>{content}</p>
        else if (content === 'Blog') return <p>{content}</p>
        else if (content === 'Programm') return <p>{content}</p>
    }

    return (
        <>
            <div onClick={getValue}>
                <p>About</p>
                <p>Blog</p>
                <p>Programm</p>
            </div>

            <div>
                {value}
            </div>
        </>
    )
}
export default Task17