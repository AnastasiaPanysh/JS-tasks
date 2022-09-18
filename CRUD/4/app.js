// 4. Delete
// Удаление объекта из массива по id
// Примечание: для удаления объекта в БД можно отфильтровать объект БД не
// включая id клиента
// Если совпадения по id нет – ошибка 




let arr = [{
          "id": "javascript",
          "label": "JavaScript",
          "category": "programmingLanguages",
          "priority": 1
     },
     {
          "id": "typescript",
          "label": "TypeScript",
          "category": "programmingLanguages",
          "priority": 1
     },
     {
          "id": "sql",
          "label": "SQL",
          "category": "programmingLanguages",
          "priority": 2
     },
     {
          "id": "java",
          "label": "Java",
          "category": "programmingLanguages",
          "priority": 3
     },
     {
          "id": "go",
          "label": "GO",
          "category": "programmingLanguages",
          "priority": 3
     }
]

const clientID = 'sql';
const arr_new = arr.filter(elem => elem.id !== clientID);

if (arr.length === arr_new.length) console.log('not found object id');
else {
     arr = arr_new
     console.log(arr);
}
