/*7. На входе задан массив [‘hschool’, ‘hschool_0’, ‘hschool_1’]. Напишите все возможные
способы обращения к первому и последнему элементам*/

const arr = ['hschool', 'hschool_0', 'hschool_1'];
for (let i = 0; i < arr.length; i++) {
     if (i === 0 || i === arr.length - 1) {
          console.log(arr[i]);
     }
}