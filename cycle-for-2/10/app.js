/*10. Задача на слово палиндром.*/

const str = 'anna';
if (str === str.split('').reverse().join('')) {
    console.log('палиндром');
} else {
    console.log('непалиндром');
}