// 1. Read
// Вывести в консоль массив объектов

const arr = [{
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

// arr.forEach(function (obj, key) {
//      console.log(key);
//      for (const key in obj) {
//           console.log(key, obj[key]);
//      }
// });
console.log(arr);
