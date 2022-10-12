// 2. На входе объект. Ключи и значения - автоинкремент (генерируется
//     автоматически от 1 до n). Необходимо отобразить на экране объект (помните, что
//     окно браузера не воспринимает объекты как тип данных JavaScript. Для
//     отображения неоходимо преобразовать строку в ...)
    
    const btn = document.querySelector('.btn');

    btn.addEventListener('click', ()=>{
        const input = +document.querySelector('.inpt').value;
        const obj ={};
        for( let i =0; i<input; i++){
          obj[ Math.floor(Math.random()*100)] = Math.floor(Math.random()*100);
          document.querySelector('.res').innerHTML = JSON.stringify(obj);
        }
    })
