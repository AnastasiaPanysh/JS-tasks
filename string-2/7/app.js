/*7. На вход подается строка '/home/user/dir/file.txt'. Необходимо вернуть имя файла
(подстрока после последнего символа “/" ) из полного пути к файлу('file.txt')*/

const a = '/home/user/dir/file.txt'.split('/')
console.log(a[a.length - 1]);