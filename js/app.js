let minutes = 25;
let seconds = 0;
let isRunning = false;
let timerInterval;

function startTimer() {
    if (!isRunning) {
        isRunning = true;
        document.getElementById('startButton').textContent = 'Puza ⏸';
        timerInterval = setInterval(updateTimer, 1000);
    } else {
        isRunning = false;
        document.getElementById('startButton').textContent = 'Davomi ⏯';
        clearInterval(timerInterval);
    }
}

function updateTimer() {
    if (seconds === 0) {
        if (minutes === 0) {
            clearInterval(timerInterval);
            document.getElementById('timer').textContent = "Vaqt Bo'ldi!";
            isRunning = false;
            document.getElementById('startButton').textContent = 'Boshlash ▶';
            return;
        }
        minutes--;
        seconds = 59;
    } else {
        seconds--;
    }

    const displayMinutes = minutes.toString().padStart(2, '0');
    const displaySeconds = seconds.toString().padStart(2, '0');
    document.getElementById('timer').textContent = `${displayMinutes}:${displaySeconds}`;
}

function resetTimer() {
    clearInterval(timerInterval);
    minutes = 25;
    seconds = 0;
    isRunning = false;
    document.getElementById('startButton').textContent = 'Boshlash';
    document.getElementById('timer').textContent = '25:00';
}

document.getElementById('startButton').addEventListener('click', startTimer);
document.getElementById('resetButton').addEventListener('click', resetTimer);

alert("Vaqt Bo'ldi!")
