// 1. Посчитать количество гласных и согласных в строке

const str = 'привет'.split('');
let vowels = 0
let consonants = 0
for (let i = 0; i < str.length; i++) {
    if (str[i] == 'е' || str[i] == 'у' || str[i] == 'ы' || str[i] == 'ы' || str[i] == 'а' || str[i] == 'о' || str[i] == 'э' || str[i] == 'я' || str[i] == 'и' || str[i] == 'ю') vowels++
    else consonants++
}
console.log(`кол-во гласных: ${vowels}, кол-во согласных ${consonants}`);