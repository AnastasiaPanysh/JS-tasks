// 6. Работа с замыканием. Реализуйте функцию, которая будет считать количество
// своих вызовов


function multiply() {
     let count = 0;
     return function () {
          count++;
          return count;
     };
}
const wrapper = multiply();
console.log(wrapper());
console.log(wrapper());
console.log(wrapper());
console.log(wrapper());
console.log(wrapper());