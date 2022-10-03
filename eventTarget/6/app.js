// 6. Добавьте картинку на страницу. При наведении на картинку мышкой необходимо
// ее изменять на другую картинку. Но как только мышка снова отходит в сторону, то
// возвращается первая картинка

const picture1 = document.querySelector('.picture1')

picture1.addEventListener('mouseover', () => {
    picture1.style = `background-image: url(./img/image2.png)`;
})

picture1.addEventListener('mouseout', () => {
    picture1.style = `background-image: url(./img/image1.png)`;
})