const cat = document.getElementById('cat');
const message = document.getElementById('message');
const gameContainer = document.querySelector('.game-container');
let score = 0;
const maxScore = 5; // Define when the game ends

function moveCat() {
    const containerWidth = gameContainer.clientWidth;
    const containerHeight = gameContainer.clientHeight;
    const catSize = cat.clientWidth;

    const randomX = Math.floor(Math.random() * (containerWidth - catSize));
    const randomY = Math.floor(Math.random() * (containerHeight - catSize));

    cat.style.left = `${randomX}px`;
    cat.style.top = `${randomY}px`;
}

function showFlashyMessage() {
    message.style.display = 'block';
    message.classList.add('flash');
    setTimeout(() => {
        message.style.display = 'none';
        message.classList.remove('flash');
    }, 2000);
}

function endGame() {
    cat.style.display = 'none';
    message.style.display = 'block';
    message.textContent = `Game Over! Final Score: ${score}`;
    message.classList.remove('flash');
}

cat.addEventListener('click', () => {
    score++;
    if (score < maxScore) {
        showFlashyMessage();
        moveCat();
    } else {
        endGame();
    }
});

setInterval(moveCat, 1000);

