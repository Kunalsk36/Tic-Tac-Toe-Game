let boxes = document.querySelectorAll(".box");
let winMsg = document.querySelector("#winMsg");
let xCountMsg = document.querySelector("#xCount");
let oCountMsg = document.querySelector("#oCount");
let newGame = document.querySelector("#newGame");
let resetGame = document.querySelector("#resetGame");
let turnMsg = document.querySelector("#turnMsg");
let playerTurn = document.querySelector("#playerTurn");

let winPattern = [
  [0, 1, 2],
  [0, 4, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

let oTurn = true;

let xCount = 0;
let oCount = 0;

for (let box of boxes) {
  box.addEventListener("click", () => {
    if (oTurn) {
      box.innerText = "O";
      box.style.color = "#003049"
      oTurn = false;
      box.disabled = true;
      playerTurn.innerText = "X"
    } else {
      box.innerText = "X";
      box.style.color = "#d62828"
      oTurn = true;
      box.disabled = true;
      playerTurn.innerText = "O";
    }
    checkWin();
  });
}

checkWin = () => {
  let isDraw = true;
  for (let pattern of winPattern) {
    if (
      boxes[pattern[0]].innerText !== "" &&
      boxes[pattern[1]].innerText !== "" &&
      boxes[pattern[2]].innerText !== ""
    ) {
      if (
        boxes[pattern[0]].innerText === boxes[pattern[1]].innerText &&
        boxes[pattern[1]].innerText === boxes[pattern[2]].innerText
      ) {
        if (!oTurn) {
          winMsg.innerText = "Congratulations! Player O has Win!";
          winMsg.classList.replace("hide", "notHide");
        turnMsg.style.display = "none";
          oCount+=1;
          oCountMsg.innerText = oCount;
        } else {
          winMsg.innerText = "Congratulations! Player X has Win!";
          winMsg.classList.replace("hide", "notHide");
        turnMsg.style.display = "none";
          xCount+=1;
          xCountMsg.innerText = xCount;
        }
        disableBoxes();
        isDraw = false;
        break;
      }
    }
  }
  if (isDraw) {
    let isBoardFull = true;
    for (let box of boxes) {
      if (box.innerText === "") {
        isBoardFull = false;
        break;
      }
    }
    if (isBoardFull) {
      winMsg.innerText = "It's a draw! Try again for a win!";
      winMsg.classList.replace("hide", "notHide");
    turnMsg.style.display = "none";
    }
  }
};

disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const resetGameFunction = resetGame.addEventListener("click", () => {
    for (let box of boxes) {
        box.innerText = "";
        box.disabled = false;
    }
    if (oTurn) {
        playerTurn.innerText = "O";
        turnMsg.style.display = "block";
    }
    else{
        playerTurn.innerText = "X"
        turnMsg.style.display = "block";
    }
    winMsg.classList.replace("notHide", "hide");
});


const newGameFunction = newGame.addEventListener("click", () => {
    for (let box of boxes) {
        box.innerText = "";
        box.disabled = false;
    }
    if (oTurn) {
        playerTurn.innerText = "O";
        turnMsg.style.display = "block";
    }
    else{
        playerTurn.innerText = "X"
        turnMsg.style.display = "block";
    }
    winMsg.classList.replace("notHide", "hide");
    xCount = 0;
    oCount = 0;
    oCountMsg.innerText = oCount;
    xCountMsg.innerText = xCount;
})