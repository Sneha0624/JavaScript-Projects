let input = document.querySelector('.input')
let buttons = document.querySelectorAll('.btn')
let clear = document.querySelector('.btn-clear')
let equal = document.querySelector('.btn-equal')

buttons.forEach((button)=>{
    button.addEventListener('click',(e)=>{
        let value = e.target.value
        input.value += value
    })
})

clear.addEventListener('click',()=>{
    input.value = ''
})

equal.addEventListener('click',()=>{
    if(input.value == '') {
        input.value = 'Please enter a value'
    }else{
        let ans = eval(input.value)
        input.value = ans
    }
})