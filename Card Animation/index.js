let para = document.querySelector('.para')
let text = para.innerHTML
para.innerHTML = text.slice(0, 80) + '...'
let readMore = document.querySelector('.link');
let img = document.querySelector('.img');
let card = document.querySelector('.card');
let more = document.querySelector('.more');
let less = document.querySelector('.less');
less.style.display = 'none'

more.addEventListener('click', () => {
    more.style.display = 'none'
    less.style.display = ''
    card.classList.add('card-design');
    img.classList.remove('animation2');
    img.classList.add('animation');
    para.innerHTML = text
})

less.addEventListener('click', () => {
    more.style.display = ''
    less.style.display = 'none'
    card.classList.remove('card-design');
    img.classList.remove('animation');
    img.classList.add('animation2');
    para.innerHTML = text.slice(0, 80) + '...'
})