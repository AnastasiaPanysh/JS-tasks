// 7. Напишите функцию, генерирующую надежный пароль. (Math.random)
function generatePassword() {
     const length = 8;
     const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
     let genPass = ''
     for (let i = 0; i < charset.length; i++) {
          genPass += charset.charAt(Math.floor(Math.random() * n));
     }
     return genPass;
}

//посмотрела идею в интернете