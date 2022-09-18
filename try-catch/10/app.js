// 10. На вход подается строка в виде электронной почты пользователя. Необходимо
// найти в данной почте “@”. Если же есть, то вывести булевое true, в противном
// случае бросить исключение и его обработать

const email = 'nastya.panysh@gmail.com';

function checkEmail(email) {
    try {
        if (!email.includes('@')) throw new Error('error!')
        return true
    } catch (error) {
        return error.message
    }
}
console.log(checkEmail(email));