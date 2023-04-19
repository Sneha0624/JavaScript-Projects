let btn = document.querySelector('#btn')
let hexValue = document.querySelector('#value')
let hexCount = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']
btn.addEventListener('click', () => {
    let hex = '#'
    for (let i = 0; i < 6; i++) {
        let index = Math.floor(Math.random() * hexCount.length)
        hex += hexCount[index]
    }
    hexValue.innerHTML = hex
    document.body.style.backgroundColor = hex
})