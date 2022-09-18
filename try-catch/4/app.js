// 4. Дана строка массива. Необходимо спарсить строку и преобразовать в массив.
// Если же после того как вы спарсили данные у вас не массив, то бросить
// исключение. Далее вывести
// те элементы массива,
// в котрых id – четное
// значение



const json = `[
     { "id": 1, "label": "JavaScript", "category": "programmingLanguages", "priority": 1 },
     { "id": 2, "label": "TypeScript", "category": "programmingLanguages", "priority": 1 },
     { "id": 3, "label": "SQL", "category": "programmingLanguages", "priority": 2 },
     { "id": 4, "label": "Java", "category": "programmingLanguages", "priority": 3 },
     { "id": 5, "label": "GO", "category": "programmingLanguages", "priority": 3}
     ]`

let parsedData = JSON.parse(json)

function checkArr(arr) {
     if (!Array.isArray(arr)) throw new Error('не массив')
     if (arr.some(el => isNaN(el.id))) throw new Error('есть строки')
     return true
}

function findValue(arr) {
     try {
          if (checkArr(arr)) {
               const newArr = arr.filter(el => el.id % 2 === 0)
               if (!newArr.length) throw new Error('нет четных id')
               return newArr
          }
     } catch (error) {
          return error.message
     }
}

console.log(findValue(parsedData));
