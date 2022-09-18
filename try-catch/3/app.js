// 3. Дан массив чисел внутри строки. Необходимо строку преобразовать в массив
// используя JSON.parse. Если же после того как вы спарсили данные у вас не
// массив, то бросить исключение. Добавить проверку на числа. Далее вывести
// только те числа, которые кратны 3


const json = `[
     { "id": "javascript", "label": "JavaScript", "category": "programmingLanguages", "priority": 1 },
     { "id": "typescript", "label": "TypeScript", "category": "programmingLanguages", "priority": 1 },
     { "id": "sql", "label": "SQL", "category": "programmingLanguages", "priority": 2 },
     { "id": "java", "label": "Java", "category": "programmingLanguages", "priority": 3 },
     { "id": "go", "label": "GO", "category": "programmingLanguages", "priority": 3}
     ]`

let parsedData = JSON.parse(json)

function checkNum(arr) {
    let counterErrors = 0
    arr.forEach(el => isNaN(el.priority) ? counterErrors++ : null)
    if (counterErrors > 0) throw new Error('значение не число')
    return true
}

function findPriority(arr) {
    try {
        if (checkNum(arr)) {
            const newArr = arr.filter(el => el.priority % 3 === 0)
            if (!newArr.length) throw new Error('нет чисел кратных трем')
            return newArr
        }
    } catch (error) {
        return error.message
    }
}
console.log(findPriority(parsedData));