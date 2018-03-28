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

// Variables to hold WINS and LOSSES

let wins = 0;
let losses = 0;


// incorrect letter gets placed in used letter bucket

// count number of guesses and restart game
var guessCount = 7;

function countDown() {
  guessCount--;

  if (guessCount == 0) {
    startGame();
  }
  console.log("game restart");
}

// Determine which key user presses
// Computer randomly chooses letter
// if user chooses correct letter, then win score goes up 1
// if user does not choose correct letter in x guesses, losses goes up 1

function startGame() {
  document.onkeyup = function(event) {
    let userGuess = event.key;

    let computerGuess =
      letterChoices[Math.floor(Math.random() * letterChoices.length)];

    // determines outcome of game

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
      } else losses++;

      let html =
        "<p>Guesses so far: " +
        userGuess +
        "</p>" +
        "<p>Wins: " +
        wins +
        "</p>" +
        "<p>Losses: " +
        losses +
        "</p>";

      document.querySelector("#game").innerHTML = html;
    }

    console.log(computerGuess);
    console.log("wins" + wins);
    console.log("lose" + losses);
  };
}

startGame();
