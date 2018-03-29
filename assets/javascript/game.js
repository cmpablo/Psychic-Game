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

// global variables

let winScore = 0;
let loseScore = 0;
let guessRemaining = 7;
let guessedLetters = [];

// functions

// resets computer guess
function resetComputerGuess() {
  computerGuess =
    letterChoices[Math.floor(Math.random() * letterChoices.length)];
}

// resets number of guesses remaining to 7
function resetGuessRemaining() {
  document.getElementById("num-guess-left").textContent = guessRemaining;
}

// resets letter guessed so far
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

// calling functions to run at very beginning of game
resetComputerGuess();
resetGuessRemaining();
resetGuessedLetters();

// gameplay

document.onkeyup = function(event) {
  let userGuess = event.key;

  let computerGuess =
    letterChoices[Math.floor(Math.random() * letterChoices.length)];

  // user guesses correct letter - win score goes up by 1
  if (userGuess === computerGuess) {
    winScore++;
    resetGame();
  }

  // user guesses incorrectly and/or runs out of guesses - lose score goes up by 1
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
