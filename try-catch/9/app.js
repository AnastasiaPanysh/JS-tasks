const arrHouses = [5, 1, 2, 3, 0, 1, 5, 0, 2];

function checkArr(newArr) {
     if (newArr.some(el => isNaN(el))) throw new Error('в массиве не только числа')
     return true
}

function getSumOfHouses(newArr) {
     try {
          if (checkArr(newArr)) {
               let res = 0
               for (let i = 0; i < newArr.length; i++) {
                    if (newArr[i] === 0) {
                         break;
                    } else {
                         res += newArr[i]
                    }
               }
               return res
          }
     } catch (error) {
          return error.message
     }
}

console.log(getSumOfHouses(arrHouses));