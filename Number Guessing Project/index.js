const random = parseInt(Math.random() * 100);
let input = document.querySelector('.input')
let btn = document.querySelector('.btn')
let previous = document.querySelector('.prevNum')
let remaining = document.querySelector('#num')
let result = document.querySelector('#result')
let start = document.querySelector('#start')
console.log(random)
let prevNums = []
let guessNumTimes = 0
const guessNum = input.value

btn.addEventListener('click', () => {
    if (isNaN(guessNum)) {
        alert('Please enter a valid number.')
    } else if (guessNum < 1) {
        alert('Please enter a number greater than or equal to 1.')
    } else if (guessNum > 100) {
        alert('Please enter a number less than or equal to 100.')
    } else {
        prevNums.push(guessNum)
        console.log(prevNums)
        guessNumTimes++
        if (guessNumTimes < 10) {
            if (guessNum == random) {
                remaining.innerHTML = prevNums
                result.innerHTML = 'You Guesses Correctly!'
                start.innerHTML = 'Start New Game!'
                start.addEventListener('click', () => {
                    window.location.reload()
                })
            }
            if (guessNum > random) {
                remaining.innerHTML = prevNums
                result.innerHTML = 'Too High! Try Again!!'
                start.innerHTML = null
            }
            if (guessNum < random) {
                remaining.innerHTML = prevNums
                result.innerHTML = 'Too Low! Try Again!!'
                start.innerHTML = null
            }
        } else {
            remaining.innerHTML = prevNums
            result.innerHTML = `Game Over! Number was ${random}`
            start.innerHTML = 'Start New Game!'
            start.addEventListener('click', () => {
                window.location.reload()
            })
        }
    }
})


