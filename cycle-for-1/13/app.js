/*13. Задача на слово палиндром. Если слово одинаковое с 2 сторон, то true, в
противном случае false
anna -> true
мем -> true
тест -> false*/

const str = 'anna';
for (let i = 0; i < str.length; i++) {
    if (str === str.split().reverse().join()) {
        console.log('true');
    } else {
        console.log('false');
    }
}