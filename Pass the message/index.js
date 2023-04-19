let input = document.querySelector('.input')
let btn = document.querySelector('.btn')
let passMsg = document.querySelector('.LastMsg')
let error = document.querySelector('.errMsg')

btn.addEventListener('click', ()=>{
    if(input.value === '') {
        error.classList.add('show')
        setTimeout(()=> {
            error.classList.remove('show')
        },2000)
    }else{
        passMsg.innerHTML = input.value
        input.value = ''
    }
    
})