"use strict";

//Elements
const score0Ele = document.getElementById("score--0");
const score1Ele = document.getElementById("score--1");
const currentScore0Ele = document.getElementById("current--0");
const currentScore1Ele = document.getElementById("current--1");
const player0 = document.querySelector(".player--0");
const player1 = document.querySelector(".player--1");

const diceEle = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

//Starting condition
score0Ele.textContent = 0;
score1Ele.textContent = 0;
diceEle.classList.add("hidden");

let currentPoint = 0;
let currentPlayer = 0;
let scores = [0, 0];
let isGameOver = false;

btnRoll.addEventListener("click", function () {
  if (!isGameOver) {
    const dice = rollDice();
    diceEle.classList.remove("hidden");
    diceEle.src = `dice-${dice}.png`;

    if (dice !== 1) {
      currentPoint += dice;
      document.getElementById(`current--${currentPlayer}`).textContent = currentPoint;
    } else if (dice === 1) {
      currentPoint = 0;
      document.getElementById(`current--${currentPlayer}`).textContent = 0;
      switchPlayers(currentPlayer);
    }
  }
});

btnHold.addEventListener("click", function () {
  if (!isGameOver) {
    scores[currentPlayer] += currentPoint;
    currentPoint = 0;
    document.getElementById(`current--${currentPlayer}`).textContent = 0;
    document.getElementById(`score--${currentPlayer}`).textContent = scores[currentPlayer];
    if (Number(scores[currentPlayer]) >= 100) {
      diceEle.classList.add("hidden");
      document.querySelector(`.player--${currentPlayer}`).classList.add("player--winner");
      isGameOver = true;
    } else {
      switchPlayers(currentPlayer);
    }
  }
});

btnNew.addEventListener("click", resetGame);

//Roll dice function
function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

//Switch players function

function switchPlayers(i) {
  player0.classList.toggle("player--active");
  player1.classList.toggle("player--active");
  return (currentPlayer = i === 1 ? 0 : 1);
}

//Reset game function
function resetGame() {
  score0Ele.textContent = 0;
  score1Ele.textContent = 0;
  currentScore0Ele.textContent = 0;
  currentScore1Ele.textContent = 0;
  scores = [0, 0];
  document.querySelector(`.player--${currentPlayer}`).classList.remove("player--winner");
  currentPlayer = 0;
  player0.classList.add("player--active");
  player1.classList.remove("player--active");
  isGameOver = false;
}
