// 2. Напишите функцию, принимающую в качестве параметра строку. Необходимо
// оставить в строке только униакльные символы. IIFE
// Позволяеткопироватьтекстиз -> позвляеткираьс

const str = "Позволяеткопироватьтекстиз".split("");

function getUnique(newStr) {
     let uniqueStr = []
     newStr.forEach(el => !uniqueStr.includes(el) ? uniqueStr.push(el) : null)
     return uniqueStr.join("")
}

console.log(getUnique(str));
