let buttons = document.querySelectorAll('.btn')
let imgDiv = document.querySelector('.img-container')
let pictures = ["car1","car2","car3","car4","car5"]
let counter = 0
buttons.forEach((button)=>{
    button.addEventListener('click',()=>{
        if(button.classList.contains('btn-left')) {
            counter--
            if(counter < 0) {
                counter = pictures.length - 1
            }
            imgDiv.style.backgroundImage = `url('./${pictures[counter]}.jpeg')`
        }
        if(button.classList.contains('btn-right')) {
            counter++
            if(counter > pictures.length - 1) {
                counter = 0
            }
            imgDiv.style.backgroundImage = `url('./${pictures[counter]}.jpeg')`
        }
    })
})