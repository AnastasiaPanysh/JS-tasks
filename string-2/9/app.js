/*9. На вход подается строка из нескольких строк. Необходимо преобразовать слово в
хештег. Добавить проверку на ввод текстовых значений
hSСhOol СomPAnY-> #hschoolcompany*/

const a = 'hSСhOol СomPAnY'.toLocaleLowerCase().split(' ').join('');
if (isNaN(a)) {
    console.log(`#${a}`);
}
const a1 = 'hSСhOol СomPAnY'.trim().toLocaleLowerCase()
let result = '';
for (let i = 0; i < a1.length; i++) {
    if (a1[i] !== ' ') {
        result += a1[i];
    }
}
console.log(`#${result}`);