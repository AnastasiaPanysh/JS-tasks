// 7. На вход подается строка в виде пароля. Необходимо написать регулярное
// выражение для данной строки. Если же строка подходит под регулярное
// выражение, то вывести буле


const password = 'asdFG$5lk';

function checkPassword(newPassword) {
     try {
        if (!/[a-zA-Z0-9_\-\.!@#$&*].{8}$/g.test(newPassword)) throw new error('не надежный пароль')
        return newPassword
     } catch (error) {
          return error.message
     }
}
console.log(checkPassword(password));
