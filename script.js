let num;
let attempts = 5;
let currentScore = 100;
let highScore = localStorage.getItem('highScore') || 0;
let gameActive = false;

const gen = document.getElementById('gen');
const sub = document.getElementById('sub');
const input = document.getElementById('in');
const message = document.getElementById('fill');
const attemptsDisplay = document.getElementById('attempts');
const hint = document.getElementById('hint');
const highScoreDisplay = document.getElementById('highScore');
const currentScoreDisplay = document.getElementById('currentScore');

highScoreDisplay.textContent = highScore;
currentScoreDisplay.textContent = currentScore;

function resetGame() {
    num = Math.floor(Math.random() * 11);
    attempts = 5;
    currentScore = 100;
    gameActive = true;
    input.value = '';
    message.textContent = 'Game started! Make your guess!';
    attemptsDisplay.textContent = `Attempts left: ${attempts}`;
    hint.textContent = '';
    currentScoreDisplay.textContent = currentScore;
    console.log(num);
}

function updateHighScore() {
    if (currentScore > highScore) {
        highScore = currentScore;
        localStorage.setItem('highScore', highScore);
        highScoreDisplay.textContent = highScore;
    }
}

function giveHint(guess) {
    if (guess > num) {
        return "Try lower!";
    } else {
        return "Try higher!";
    }
}

gen.onclick = resetGame;

sub.onclick = function() {
    if (!gameActive) {
        message.textContent = "Click 'New Game' to start!";
        return;
    }

    const guess = parseInt(input.value);
    
    if (isNaN(guess) || guess < 0 || guess > 10) {
        message.textContent = "Please enter a valid number between 0 and 10";
        return;
    }

    attempts--;
    attemptsDisplay.textContent = `Attempts left: ${attempts}`;
    currentScore -= 20;
    currentScoreDisplay.textContent = currentScore;

    if (guess === num) {
        message.textContent = "🎉 You guessed right!";
        updateHighScore();
        gameActive = false;
    } else if (attempts === 0) {
        message.textContent = `Game Over! The number was ${num}`;
        gameActive = false;
    } else {
        hint.textContent = giveHint(guess);
        message.textContent = "Try again!";
    }
}

input.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        sub.click();
    }
});

