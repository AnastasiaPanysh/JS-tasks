// 1. На странице контейнер из 5 инпутов. Необходимо по изменению кнопки
// получить значение соответствующего инпута и отобразить в alert (для того чтобы
// в контейнере по событию получить определенный элемент необходимо
// восользоваться ...)

const wrapper = document.querySelector('.wrapper')

wrapper.addEventListener('change', function (event){
    alert(event.target.value)
    event.target.value = ''
})

