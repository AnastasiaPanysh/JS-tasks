// После нажатия на кнопку «Разблокировать» мы можем вносить изменения в инпут. После нажатия на заблокировать данное действие запрещается, тем самым выключая возможность редактирования значения инпута

const block = document.querySelector('.block')
const unblock = document.querySelector('.unblock')
const inp = document.querySelector('.inp')

block.addEventListener(`click`, () => {
    inp.disabled = true
})

unblock.addEventListener(`click`, () => {
    inp.disabled = false
})