let timer;
let moveCatInterval;
let timeLeft = 30;
let score = 0;
const cat = document.getElementById('cat');
const startBtn = document.getElementById('start-btn');
const resetBtn = document.getElementById('reset-btn');
const timerDisplay = document.getElementById('timer');
const scoreDisplay = document.getElementById('score');
const meowSound = new Audio('sounds/meow.mp3'); // Load the meow sound

cat.addEventListener('click', () => {
    if (timeLeft > 0) {
        score++;
        scoreDisplay.textContent = score;
        meowSound.play(); // Play the meow sound
        cat.style.transform = 'scale(1.2)'; // Make the cat slightly larger
        setTimeout(() => {
            cat.style.transform = 'scale(1)'; // Return the cat to normal size
        }, 200);
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
    moveCatInterval = setInterval(moveCat, 1500); // Move cat every 1.5 seconds
}

function resetGame() {
    clearInterval(timer);
    clearInterval(moveCatInterval);
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
        clearInterval(moveCatInterval);
        alert('Game Over!');
        cat.style.display = 'none';  // Hide the cat when the game is over
    }
}

function moveCat() {
    const gameContainer = document.querySelector('.game-container');
    const x = Math.random() * (gameContainer.clientWidth - 100);
    const y = Math.random() * (gameContainer.clientHeight - 100);
    cat.style.left = `${x}px`;
    cat.style.top = `${y}px`;
    cat.style.display = 'block';

    // Hide the cat after a short period
    setTimeout(() => {
        cat.style.display = 'none';
    }, 1000); // Show the cat for 1 second
}

resetGame();
