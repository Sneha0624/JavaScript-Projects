let hour = document.querySelector('.hour')
let minute = document.querySelector('.minute')
let second = document.querySelector('.second')
let ms = document.querySelector('.ms')
let timer = 0
var timerInterval;

function start() {
    stop();
    timerInterval = setInterval(function() {
        timer += 1/60;
        var msVal = Math.floor((timer - Math.floor(timer))*100);
        var secondVal = Math.floor(timer) - Math.floor(timer/60) * 60;
        var minuteVal = Math.floor(timer/60);
        var hourVal = Math.floor(timer/60/60);
        ms.innerHTML = msVal < 10 ? "0" + msVal.toString() : msVal;
        second.innerHTML = secondVal < 10 ? "0" + secondVal.toString() : secondVal;
        minute.innerHTML = minuteVal < 10 ? "0" + minuteVal.toString() : minuteVal;
        hour.innerHTML = hourVal < 10 ? "0" + hourVal.toString() : hourVal;
      }, 1000/60);
}

function stop() {
    clearInterval(timerInterval)
}

function reset() {
    ms.innerHTML = minute.innerHTML = second.innerHTML = hour.innerHTML = '00';
}