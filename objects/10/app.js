// 10. На входе статичный объект, включающий такие ключи как name, age, birthday,
// значения ключей – пустые строки. Считать данные с клавиатуры и заполнить объект соответствующими данными. Добавить проверки на ввод

const obj = {
     name: '',
     age: '',
     birthday: ''
}
for (const key in obj) {
     let input = prompt('введите имя').trim();
     // if (input !== '' {
     //      obj[key] = input;
     // }
     while (input == '') {
          obj[key] = prompt(`введите имя ${key}`).trim()
     }

}

console.log(obj);
