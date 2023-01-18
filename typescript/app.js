/*1. У вас есть массив объектов вида приведенного в приложении. Необходимо
вывести все товары, количество которых больше 10*/
var array = [{ name: 'width', value: 10 }, { name: 'height', value: 20 }];
function doObj(array) {
    var object = {};
    array.forEach(function (element) {
        var name = element.name, value = element.value;
        object[name] = value;
    });
    return object;
}
console.log(doObj(array));
