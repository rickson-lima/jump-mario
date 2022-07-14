let currentScore = 0;

const loopScore = setInterval(() => {
  currentScore = currentScore + 1;
  score.innerHTML = `Score: ${currentScore}`;

  resizeBoardWidth();

  if (currentScore % 75 === 0 && currentScore !== 0) {
    toggleBoardMode();
  }
}, 100);
