// Create an array of letter choices
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

// Variables 

let wins = 0;
let losses = 0;
let guessCount = 7;

// Determine which key user presses
// Computer randomly chooses letter
// if user chooses correct letter, then win score goes up 1, game resets
// if user does not choose correct letter in x-amount guesses, losses goes up 1

function reset() {
  guessCount = 7;
}

document.onkeyup = function(event) {
  let userGuess = event.key;

  let computerGuess =
    letterChoices[Math.floor(Math.random() * letterChoices.length)];

  if (
    userGuess === "a" ||
    userGuess === "b" ||
    userGuess === "c" ||
    userGuess === "d" ||
    userGuess === "e" ||
    userGuess === "f" ||
    userGuess === "g" ||
    userGuess === "h" ||
    userGuess === "i" ||
    userGuess === "j" ||
    userGuess === "k" ||
    userGuess === "l" ||
    userGuess === "m" ||
    userGuess === "n" ||
    userGuess === "o" ||
    userGuess === "p" ||
    userGuess === "q" ||
    userGuess === "r" ||
    userGuess === "s" ||
    userGuess === "t" ||
    userGuess === "u" ||
    userGuess === "v" ||
    userGuess === "w" ||
    userGuess === "x" ||
    userGuess === "y" ||
    userGuess === "z"
  ) {
    if (userGuess === computerGuess) {
      wins++;
      reset();
    } else 
    guessCount--;

    if (guessCount === 0) {
      losses++;
      reset();
    }
  }

  let html =
    "<p>Guess What Letter I'm Thinking" +
    "</p>" +
    "<p>Guesses so far: " +
    guessCount +
    "</p>" +
    "<p>Wins: " +
    wins +
    "</p>" +
    "<p>Losses: " +
    losses +
    "</p>";

  document.querySelector("#game").innerHTML = html;
};
