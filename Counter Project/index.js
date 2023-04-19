let count = document.querySelector('#head-count')
let lowerBtn = document.querySelector('#lowerBtn')
let addBtn = document.querySelector('#addBtn')
function color () {
    if(count.innerHTML < 0) {
        count.style.color = 'red'
    }else if(count.innerHTML > 0) {
        count.style.color = 'green'
    }else{
        count.style.color = '#333333'
    }
}
lowerBtn.addEventListener('click', ()=>{
    count.innerHTML--
    color();
})

addBtn.addEventListener('click', ()=>{
    count.innerHTML++
    color();
})