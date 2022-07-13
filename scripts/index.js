const mario = document.querySelector(".mario");
const pipe = document.querySelector(".pipe");
const clouds = document.querySelector(".clouds");

const score = document.querySelector("#score");
const gameBoard = document.querySelector("#game-board");

const backgroundAudio = new Audio("./assets/audios/background.mp3");

const loop = setInterval(() => {
  backgroundAudio.play();
  const pipeOffsetLeft = pipe.offsetLeft;
  const marioOffsetBottom = +window
    .getComputedStyle(mario)
    .bottom.replace("px", "");

  const collisionCondition =
    pipeOffsetLeft <= 120 && pipeOffsetLeft > 0 && marioOffsetBottom < 80;

  if (collisionCondition) {
    gameOver(pipeOffsetLeft, marioOffsetBottom);

    clearInterval(loop);
    clearInterval(loopScore);
  }
}, 10);
