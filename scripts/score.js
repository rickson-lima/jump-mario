let boardMode = "morning";
let currentScore = 0;
let width = 100;

const decrementBoardWidth = () => width--;
const incrementBoardWidth = () => width++;

function toggleBoardMode() {
  boardMode === "morning" ? nightBoard() : morningBoard();
}

function resizeBoardWidth() {
  if (width < 100 && boardMode === "morning") {
    incrementBoardWidth();
    gameBoard.style.width = `${width}%`;
  }
  if (boardMode === "night") {
    decrementBoardWidth();
    gameBoard.style.width = `${width}%`;
  }
}

function nightBoard() {
  boardMode = "night";
  gameBoard.style.background = "var(--night-bg)";
  score.style.color = "var(--night-score)";
}

function morningBoard() {
  boardMode = "morning";
  score.style.color = "var(--morning-score)";
  gameBoard.style.background = "var(--morning-bg)";
}

const loopScore = setInterval(() => {
  currentScore = currentScore + 1;
  score.innerHTML = `Score: ${currentScore}`;

  resizeBoardWidth();

  if (currentScore % 75 === 0 && currentScore !== 0) {
    toggleBoardMode();
  }
}, 100);
