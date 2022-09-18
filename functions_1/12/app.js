// 12. На входе строка. Необходимо создать функцию, возвращающую true, если это
// слово анаграмма и false в противном случае

const a = 'пила'.split('');
const b = 'липа'.split('');

function getAnagramm(newStrA, newStrB) {

    // const res = newStrA.filter(el => newStrA.length === newStrB.length && newStrB.includes(el))
    // return res.length === newStrA.length && res.length === newStrB.length ? true : false;


    return newStrA.sort().join() === newStrB.sort().join() ? true : false
}
console.log(getAnagramm(a, b));