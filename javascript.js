let player = "X";
let gameOver = false;

function play(button) {
  if (button.textContent === "" && !gameOver) {
    button.textContent = player;

    if (checkWin()) {
      alert(`PARABÉNS JOGADOR "${player}", VOCÊ GANHOUU!!! 🥳`);
      gameOver = true;
      return;
    }
    if (checkDraw()) {
      alert("Deu empate ;-;");
      gameOver = true;
      return;
    }
    player = player === "X" ? "O" : "X";
  }
}

const winCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];


function checkWin() {
  const buttons = document.querySelectorAll("button");
  return winCombos.some(combo => {
    const [a, b, c] = combo;
    return (
      buttons[a].textContent === player &&
      buttons[b].textContent === player &&
      buttons[c].textContent === player
    )
  });
}
function checkDraw() {
  const buttons = document.querySelectorAll("button");
  return [...buttons].every(button => button.textContent !== "");
}