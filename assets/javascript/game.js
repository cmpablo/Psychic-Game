// array of letter choices
let letterChoices = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];

// globals

let winScore = 0;
let loseScore = 0;
let guessRemaining = 7;
let guessedLetters = [];

// functions

function resetComputerGuess() {
  computerGuess =
    letterChoices[Math.floor(Math.random() * letterChoices.length)];
}

function resetGuessRemaining() {
  document.getElementById("num-guess-left").textContent = guessRemaining;
}

function resetGuessedLetters() {
  document.getElementById("letters-used").textContent = guessedLetters.join(
    ", "
  );
}

function resetGame() {
  guessRemaining = 7;
  guessedLetters = [];

  resetComputerGuess();
  resetGuessRemaining();
  resetGuessedLetters();
}

resetComputerGuess();
resetGuessRemaining();
resetGuessedLetters();

// gameplay

document.onkeyup = function(event) {
  
  let userGuess = event.key;

  let computerGuess =
    letterChoices[Math.floor(Math.random() * letterChoices.length)];


  if (userGuess === computerGuess) {
    winScore++;
    resetGame();
  }

  if (guessRemaining > 0) {
    guessedLetters.push(userGuess);
    guessRemaining--;
  } else if (guessRemaining == 0) {
    loseScore++;
    resetGame();
  }

  // updates stats

  document.getElementById("num-guess-left").textContent = guessRemaining;
  document.getElementById("letters-used").textContent = guessedLetters.join(
    ", "
  );
  document.getElementById("winner").textContent = winScore;
  document.getElementById("loser").textContent = loseScore;
};
