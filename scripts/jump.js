const jumpClassName = "jump";
const jumpAudio = new Audio("./assets/audios/jump.mp3");

function handleJump() {
  if (isGameOver) return;

  mario.classList.add(jumpClassName);
  // adicionar o audio de jump.mp3
  jumpAudio.play();

  setTimeout(() => {
    mario.classList.remove(jumpClassName);
  }, 500);
}

document.addEventListener("keydown", handleJump);
