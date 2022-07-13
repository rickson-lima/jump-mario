let isGameOver = false;

const gameoverAudio = new Audio("./assets/audios/gameover.mp3");

function stopPipeAnimation(position) {
  pipe.style.animation = "none";
  pipe.style.left = `${position}px`;
}

function stopMario(position) {
  mario.style.animation = "none";
  mario.style.bottom = `${position}px`;

  mario.src = "./assets/images/game-over.png";
  mario.style.width = "75px";
  mario.style.marginLeft = "50px";

  isGameOver = true;
}

function stopCloudsAnimation() {
  const position = clouds.offsetLeft;
  clouds.style.left = `${position}px`;
  clouds.style.animation = "none";
}

function gameOver(pipePosition, marioPosition) {
  isGameOver = true;

  stopMario(marioPosition);
  stopPipeAnimation(pipePosition);
  stopCloudsAnimation();

  backgroundAudio.pause();
  gameoverAudio.play();
}
