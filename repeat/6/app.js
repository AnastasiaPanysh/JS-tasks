// 6. При наведении на картинку изменять ее
const img = document.querySelector('.img');

img.addEventListener('mouseover',()=>{
    img.style = `background-image: url(./img/fb323f18-2dea-4fa3-83f9-4148dc75a201.jpg)`
})
img.addEventListener('mouseout',()=>{
    img.style = `background-image: url(./img/38ba91fc-c0cd-4d7a-835c-bbacbaa6c80b.jpg)`
})