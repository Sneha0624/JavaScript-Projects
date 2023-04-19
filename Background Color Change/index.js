let btn = document.querySelector("#btn");
let text = document.querySelector(".text");
let textClr = document.querySelector(".textClr");
let changeText = document.querySelector(".changeText");

btn.addEventListener('click', () => {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let newColor = `rgb(${r},${g},${b})`;
    if (r < 125 || g < 125 || b < 125) {
        text.style.color = 'white'
    } else {
        text.style.color = 'black'
    }
    document.body.style.backgroundColor = newColor;
    changeText.innerHTML = newColor;
})