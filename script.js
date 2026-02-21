let miliSec = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;
let timer = null;
const startBtn = document.getElementById("start")
const resetBtn = document.getElementById("reset")

const displayTime = document.getElementById("displayTimer")

function displayTimer() {
    updateTimer()
    let h = String(hours).padStart(2, '0');
    let m = String(minutes).padStart(2, '0');
    let s = String(seconds).padStart(2, '0');
    let ml = String(miliSec).padStart(2, '0');

    displayTime.textContent = `${h}:${m}:${s}:${ml}`


}

function updateTimer() {

    miliSec++;
    if (miliSec === 100) {
        miliSec = 0;
        seconds++;
    }
    if (seconds === 60) {
        seconds = 0;
        minutes++;
    }
    if (minutes === 60) {
        minutes = 0;
        hours++;
    }
    if (hours === 24) {
        hours = 0;
    }


}

function start() {
    if (timer !== null) return;
    timer = setInterval(displayTimer, 10);
    startBtn.innerHTML = `<i class="fa-solid fa-pause"></i>`
}

function pause() {
    clearInterval(timer)
    timer = null
    startBtn.innerHTML = `<i class="fa-solid fa-play"></i>`
}

startBtn.addEventListener("click", () => {
    if (timer === null) {
        start()
    }
    else {
        pause()
    }
})

resetBtn.addEventListener("click", () => {
        pause();
    miliSec = 0;
    seconds = 0;
    minutes = 0;
    hours = 0;
    displayTime.textContent = "00:00:00:00"

})