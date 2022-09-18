/*25. На вход программе подается строка из букв А, Г, Ц, Т. Напишите программу,
которая подсчитывает сколько букв
АааГГЦЦцТТтттА => А – 4 Г – 2 Ц – 3 Т – 5*/

const str = 'АааГГЦЦцТТТТтттА';
let countA = 0;
let countG = 0;
let countC = 0;
let countT = 0;

for (let i = 0; i < str.length; i++) {
    if (str[i] == 'А') {
        countA += 1;
    } else if (str[i] == 'Г') {
        countG += 1;
    } else if (str[i] == 'Ц') {
        countC += 1;
    } else if (str[i] == 'Т') {
        countT += 1;
    }
}
console.log(`A-${countA} Г-${countG} Ц-${countC} Т-${countT}`);