const jumpClassName = "jump";
const jumpAudio = new Audio("./assets/audios/jump.mp3");
let isJumping = false;

function handleJump() {
  if (isGameOver) return;

  if (isJumping) return;

  mario.classList.add(jumpClassName);

  jumpAudio.play();
  isJumping = true;

  setTimeout(() => {
    mario.classList.remove(jumpClassName);
    isJumping = false;
  }, 300);
}

document.addEventListener("keydown", handleJump);
document.addEventListener("touchstart", handleJump);
