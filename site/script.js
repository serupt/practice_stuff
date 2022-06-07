"use strict";

let range = 20;

let secretNumber = Math.floor(Math.random() * 20) + 1;

let score = 20;

let win = false;

//Let player choose number range to guess

document.querySelector(".range").addEventListener("click", function () {
  range = Number(prompt("Between 1 and ?"));
  //   console.log(range);
  if (range <= 1) {
    alert("Please enter a number higher than 1!");
  } else {
    document.querySelector(".between").textContent = `(Between 1 and ${range})`;
    resetGame();
  }
});

//Checks user input

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    document.querySelector(".message").textContent = "No value entered!";
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "You have guessed the correct number!";

    document.querySelector(".number").textContent = secretNumber;

    document.querySelector("body").style.backgroundColor = "hsl(79, 61%, 33%)";

    win = true;

    if (score > document.querySelector(".highscore").textContent) {
      document.querySelector(".highscore").textContent = score;
    }
  } else if (guess > secretNumber && score > 1 && win === false) {
    document.querySelector(".message").textContent = "Guess is higher than the secret number!";
    score--;
    document.querySelector(".score").textContent = score;
  } else if (guess < secretNumber && score > 1 && win === false) {
    document.querySelector(".message").textContent = "Guess is lower than the secret number!";
    score--;
    document.querySelector(".score").textContent = score;
  } else {
    document.querySelector(".message").textContent =
      "Game is over! Press the reset button to play again!";
  }
});

//Resets the game with pressing again

function resetGame() {
  secretNumber = Math.floor(Math.random() * range) + 1;

  document.querySelector(".score").textContent = 20;
  score = 20;

  document.querySelector("body").style.backgroundColor = "#222";

  document.querySelector(".message").textContent = "Start guessing...";

  document.querySelector(".guess").value = "";

  document.querySelector(".number").textContent = "?";
}

document.querySelector(".again").addEventListener("click", function () {
  resetGame();
});
