// 4. Реализуйте класс MathСalculation. В него передается число n – количество
// элементов массива. На основании числа формируется динамический массив из n
// элементов внутри класса. Создать функцию для подсчета всех четных чисел
// массива. Добавить проверки на ввод

class MathСalculation {

   doArr(n) {
      let arr = []
      for (let i = 0; i < n; i++) {
         arr.push(Math.floor(Math.random() * 100))
      }
      const newArr = this.checkArr(arr);
      return newArr
   }

   checkArr(newArr) {
      let count=0
      for (let i = 0; i < newArr.length; i++) {
         if (newArr[i] % 2 === 0) count++
      }
      return count
   }

}

const mathСalculation = new MathСalculation();
console.log(mathСalculation.doArr(5));