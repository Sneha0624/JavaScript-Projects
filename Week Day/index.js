const listOfDays = [
    {
        day: 'Sunday',
        phrase: 'Time to Chill!'
    },
    {
        day: 'Monday',
        phrase: 'Monday morning blues!'
    },
    {
        day: 'Tuesday',
        phrase: 'Taco Time!'
    },
    {
        day: 'Wednesday',
        phrase: 'Two more days to the weekend.'
    },
    {
        day: 'Thursday',
        phrase: 'The weekend is almost here...'
    },
    {
        day: 'Friday',
        phrase: 'Weekend is here!'
    },
    {
        day: 'Saturday',
        phrase: 'Time to party!'
    }
]

let date = new Date()
let weekdayNum = date.getDay()
console.log(weekdayNum)
let days = document.querySelector('#day')
let phrases = document.querySelector('#phrase')
days.innerHTML = listOfDays[weekdayNum].day
phrases.innerHTML = listOfDays[weekdayNum].phrase