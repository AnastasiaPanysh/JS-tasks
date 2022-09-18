// 5. На вход подается число n – количество элементов массива. Необходимо
// заполнить массив случайными элементами. Если значение массива находится в диапозоне от 0 до 100 
// , то занести в новый массив. Добавить проверки и обработать их.
// Обрдиапазоне 10<nатите внимание, тут как минимум 3 функции. Первая:
// формирование массива. Вторая: валидация. Третья: основная логика задачи


const n = +prompt('кол-во эл масссива')

function doArr(n) {
     const arr = []
     for (let i = 0; i < n; i++) {
          arr.push((Math.floor(Math.random() * 100)));
     }
     return arr
}

function checkArr(arr) {
     if (!Array.isArray(arr)) throw new Error('не массив')
     if (arr.some(el => isNaN(el))) throw new Error('в массиве не только числа')
     if (arr.some(el => el < 0)) throw new Error('в массиве есть отриц числа')
     return true;
}

function doNewArr(arr) {
     try {
          if (checkArr(arr)) {
               const newArr = arr.fiter(el => el >= 10 && el < 100)
               if (!newArr.length) throw new Error('нет подходящих эл')
               return newArr
          }
     } catch (error) {
          return error.message
     }
}
const randomArray = doArr(n);
console.log(doNewArr(randomArray));

