let isGameOver = false;

const gameoverAudio = new Audio("./assets/audios/gameover.mp3");

function stopPipeAnimation(position) {
  pipe.style.animation = "none";
  pipe.style.left = `${position}px`;
}

function marioCollisionAnimation() {
  mario.classList.add("collision");

  mario.src = "./assets/images/game-over.png";
  mario.style.width = "75px";
  mario.style.marginLeft = "50px";

  setTimeout(() => {
    mario.style.bottom = "-180px";
    mario.style.animation = "none";
  }, 1250);

  isGameOver = true;
}

function stopCloudsAnimation() {
  const position = clouds.offsetLeft;
  clouds.style.left = `${position}px`;
  clouds.style.animation = "none";
}

function gameOver(pipePosition) {
  isGameOver = true;

  marioCollisionAnimation();
  stopPipeAnimation(pipePosition);
  stopCloudsAnimation();

  backgroundAudio.pause();
  gameoverAudio.play();
}
