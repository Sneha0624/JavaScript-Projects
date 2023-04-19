let input = document.querySelector('.input')
let addBtn = document.querySelector('.add-btn')
let clrBtn = document.querySelector('.clr-btn')
let itemDivContainer = document.querySelector('.item-icons')
let itemDiv = document.querySelector('.display')

addBtn.addEventListener('click', ()=>{
    console.log(input.value)
    let newdiv = document.createElement('div')
    itemDiv.appendChild(newdiv).innerHTML = input.value
    itemDiv.classList.toggle('hide')
})

