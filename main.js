const game = document.getElementById('pong-game');
const ball = document.getElementById('ball');
const paddleLeft = document.getElementById('paddleLeft');
const paddleRight = document.getElementById('paddleRight');

let ballDirection = [2, 2];
let paddleSpeed = 2;
let paddleLeftY = 0;
let paddleRightY = 0;

function gameLoop() {
  let gameHeight = game.offsetHeight;
  let gameWidth = game.offsetWidth;

  let ballPosition = [
    ball.offsetLeft + ballDirection[0],
    ball.offsetTop + ballDirection[1]
  ];

  if (ballPosition[0] < 0 || ballPosition[0] > gameWidth - ball.offsetWidth) {
    ballDirection[0] *= -1;
  }

  if (ballPosition[1] < 0 || ballPosition[1] > gameHeight - ball.offsetHeight) {
    ballDirection[1] *= -1;
  }

  ball.style.left = `${ballPosition[0]}px`;
  ball.style.top = `${ballPosition[1]}px`;

  paddleLeftY = Math.min(
    gameHeight - paddleLeft.offsetHeight,
    Math.max(0, paddleLeftY)
  );
  paddleRightY = Math.min(
    gameHeight - paddleRight.offsetHeight,
    Math.max(0, paddleRightY)
  );

  paddleLeft.style.top = `${paddleLeftY}px`;
  paddleRight.style.top = `${paddleRightY}px`;

  requestAnimationFrame(gameLoop);
}

gameLoop();

document.addEventListener('keydown', (e) => {
  switch (e.key) {
    case 'w':
      paddleLeftY -= paddleSpeed;
      break;
    case 's':
      paddleLeftY += paddleSpeed;
      break;
    case 'ArrowUp':
      paddleRightY -= paddleSpeed;
      break;
    case 'ArrowDown':
      paddleRightY += paddleSpeed;
      break;
  }
});
