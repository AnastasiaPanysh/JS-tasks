// 5. Работа с замыканием. Напишите функцию, каждый вызов который будет
// генерировать случайные числа от 1 до 100, но так, чтобы они не повторялись, пока
// не будут перебраны все числа из этого промежутка.


function makeRand() {
     return function () {
          let res = [];
          for (let i = 0; i < 100; i++) {
               let randomValue = Math.floor(Math.random() * 101);
               if (!res.includes(randomValue)) {
                    res.push(randomValue)
               } else {
                    continue
               }
               return res
          }
     }
}
const returnWrapperFunction = makeRand();
returnWrapperFunction()

//не работает 