function Task22Item({ item, setValue }) {
    
    function changeValue(event) {
        setValue(event.target.textContent)
    }


    return (
        <div onClick={changeValue}>
            <span>{item[0]}</span>
            <span>{item[1]}</span>
            <span>{item[2]}</span>
        </div>
    )
}
export default Task22Item
