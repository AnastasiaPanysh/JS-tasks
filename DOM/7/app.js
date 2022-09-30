const btn = document.querySelector(`.btn`)

btn.addEventListener(`click`, () => {
    const res = document.querySelector(`.res`)
    res.innerHTML = document.querySelector(`.inp`).value * 2
});