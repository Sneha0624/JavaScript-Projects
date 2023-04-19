let input = document.querySelector('input')
let para = document.querySelector('.count')
let btn = document.querySelector('button')

btn.addEventListener('click',()=>{
    let count = input.value.length
    para.innerHTML = count
})