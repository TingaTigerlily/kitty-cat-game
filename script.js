let timer;
let timeLeft = 30;
let score = 0;
const cat = document.getElementById('cat');
const startBtn = document.getElementById('start-btn');
const resetBtn = document.getElementById('reset-btn');
const timerDisplay = document.getElementById('timer');
const scoreDisplay = document.getElementById('score');

cat.addEventListener('click', () => {
    if (timeLeft > 0) {
        score++;
        scoreDisplay.textContent = score;
        moveCat();
        displayMessage('Meow!');
    }
});

startBtn.addEventListener('click', startGame);
resetBtn.addEventListener('click', resetGame);

function startGame() {
    timeLeft = 30;
    score = 0;
    scoreDisplay.textContent = score;
    timerDisplay.textContent = timeLeft;
    moveCat();
    timer = setInterval(updateTimer, 1000);
}

function resetGame() {
    clearInterval(timer);
    timeLeft = 30;
    score = 0;
    timerDisplay.textContent = timeLeft;
    scoreDisplay.textContent = score;
    cat.style.display = 'none';
}

function updateTimer() {
    timeLeft--;
    timerDisplay.textContent = timeLeft;
    if (timeLeft <= 0) {
        clearInterval(timer);
        displayMessage('Game Over!');
        cat.style.display = 'none';  // Hide the cat when the game is over
    }
}

function moveCat() {
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 100);
    cat.style.left = `${x}px`;
    cat.style.top = `${y}px`;
    cat.style.display = 'block';
}

function displayMessage(message) {
    alert(message);
}

resetGame();
