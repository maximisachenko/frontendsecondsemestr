const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

canvas.width = 400;
canvas.height = 600;

let platformWidth = 100;
let platformHeight = 20;
let platformX = (canvas.width - platformWidth) / 2;
const platformY = canvas.height - platformHeight - 10;
let platformSpeed = 5;

let ballRadius = 10;
let ballX = canvas.width / 2;
let ballY = 50;
let ballSpeedY = 2;
let ballSpeedX = 2;

let score = 0;
let isGameOver = false;

document.addEventListener('keydown', movePlatform);

function movePlatform(e) {
    if (e.key === 'ArrowLeft' && platformX > 0) {
        platformX -= platformSpeed;
    } else if (e.key === 'ArrowRight' && platformX < canvas.width - platformWidth) {
        platformX += platformSpeed;
    }
}

function drawPlatform() {
    ctx.fillStyle = 'white';
    ctx.fillRect(platformX, platformY, platformWidth, platformHeight);
}

function drawBall() {
    ctx.beginPath();
    ctx.arc(ballX, ballY, ballRadius, 0, Math.PI * 2);
    ctx.fillStyle = 'red';
    ctx.fill();
    ctx.closePath();
}

function checkCollision() {

    if (ballY + ballRadius > platformY && ballX > platformX && ballX < platformX + platformWidth) {
        ballSpeedY = -ballSpeedY;
        score++;
        ballSpeedY *= 1.05; 
    }

    if (ballY - ballRadius < 0) {
        ballSpeedY = -ballSpeedY;
    }

    if (ballX + ballRadius > canvas.width || ballX - ballRadius < 0) {
        ballSpeedX = -ballSpeedX;
    }

    if (ballY + ballRadius > canvas.height) {
        isGameOver = true;
    }
}

function updateBall() {
    ballX += ballSpeedX;
    ballY += ballSpeedY;
}

function drawScore() {
    ctx.font = '20px Arial';
    ctx.fillStyle = 'white';
    ctx.fillText(`—чЄт: ${score}`, 10, 20);
}

function drawGameOver() {
    ctx.font = '40px Arial';
    ctx.fillStyle = 'red';
    ctx.fillText('»гра окончена', canvas.width / 4, canvas.height / 2);
}

function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawPlatform();
    drawBall();
    drawScore();

    if (!isGameOver) {
        updateBall();
        checkCollision();
        requestAnimationFrame(gameLoop);
    } else {
        drawGameOver();
    }
}

gameLoop();
