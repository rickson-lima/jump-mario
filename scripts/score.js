let currentScore = 0;
let width = 100;

const decrementWidth = () => width--;
const incrementWidth = () => width++;

function nightBoard() {
  decrementWidth();

  gameBoard.style.background = "var(--night-bg)";
  gameBoard.style.width = `${width}%`;
  score.style.color = "var(--night-score)";
}

function morningBoard() {
  gameBoard.style.background = "var(--morning-bg)";

  if (width < 100) {
    incrementWidth();
    gameBoard.style.width = `${width}%`;
    score.style.color = "var(--morning-score)";
  }
}

const loopScore = setInterval(() => {
  currentScore = currentScore + 1;
  score.innerHTML = `Score: ${currentScore}`;

  if (currentScore > 50 && currentScore < 125) {
    nightBoard();
  } else {
    morningBoard();
  }
}, 100);
