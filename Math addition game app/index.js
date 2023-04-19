let firstNumber = parseInt(Math.random()*10);
let secondNumber = parseInt(Math.random()*10);
let num1 = document.querySelector('.num1')
num1.innerHTML = `<p>${firstNumber}</p>`
let num2 = document.querySelector('.num2')
num2.innerHTML = `<p>${secondNumber}</p>`
let output = document.querySelector('.output')
let btn = document.querySelector('.btn')

btn.addEventListener('click', ()=>{
    if(output.value == '') {
        alert('Enter Your Output')
    }else if(output.value == firstNumber+secondNumber){
        alert('Correct')
        output.value = ''
        window.location.reload()
    }else{
        let sum = firstNumber+secondNumber
        alert(`Wrong Answer. Output is ${sum}`)
        window.location.reload()
    }
})