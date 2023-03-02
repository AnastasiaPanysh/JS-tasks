/*16. Пользователь вводит строку. Необходимо посчитать количество гласных (for)*/
/*17. Пользователь вводит строку. Необходимо посчитать количество согласных (for)*/

// const str = prompt('Введите знач');
// let count = 0
// for (let i = 0; i < str.length; i++) {
//     if (str[i] == 'а' || str[i] == 'и' || str[i] == 'у' || str[i] == 'е' || str[i] == 'ё' || str[i] == 'о' || str[i] == 'я') {
//         count += 1
//     }
// }
// console.log(count); //гласные
// console.log(str.length - count); //согласные



// const str = 'aaaa aaa aa a';
// let splited = str.split(' ')
// for (let i = 0; i < splited.length; i++) {
//     for (let j = 0; j < splited.length - i - 1; j++) {
//         let countJ = 0
//         let countJ_1 = 0
//         const vowels = ['a', 'e', 'i', 'o', 'u']
//         for (let char of splited[j].toLowerCase()) {
//             if (vowels.includes(char)) {
//                 countJ++
//             }
//         }
//         for (let char of splited[j + 1].toLowerCase()) {
//             if (vowels.includes(char)) {
//                 countJ_1++
//             }
//         }
//         if (countJ > countJ_1) {
//             let temp = splited[j + 1];
//             splited[j + 1] = splited[j];
//             splited[j] = temp;
//         }
//         countJ = 0;
//         countJ_1 = 0;
//     }
// }
// console.log(splited.join(' '));


const vowels = ['a', 'e', 'i', 'o', 'u'];
const inputStr = 'aaaa aaa aa a';
let splited = inputStr.split(' ').map(str => {
    let count = 0;
    for (let char of str.toLowerCase()) { 
            if (vowels.includes(char)) { 
                count++ 
            } 
        } 
    return {count, str};

});
const result = splited.sort((a, b) => a.count - b.count).map(s => s.str);
console.log(result);