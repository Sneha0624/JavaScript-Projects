let div = document.querySelector('div')
let btn = document.querySelector('button')
let light = document.querySelector('.lightText')
let dark = document.querySelector('.darkText')

btn.addEventListener('click', () => {
    light.classList.toggle('display')
    dark.classList.toggle('display')
    div.classList.toggle('dark')
})