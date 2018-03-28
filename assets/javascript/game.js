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

// globals

let winScore = 0;
let loseScore = 0;
let guessRemaining = 7;
let lettersGuessed = [];

// Determine which key user presses
// Computer randomly chooses letter
// if user chooses correct letter, then win score goes up 1, game resets
// if user does not choose correct letter in x-amount guesses, losses goes up 1

// resets game after a win or loss

function reset() {
  
  guessRemaining = 7;
}

// track the key pressed then reset after win/loss

document.onkeyup = function(event) {
  let userGuess = event.key;

  let computerGuess =
    letterChoices[Math.floor(Math.random() * letterChoices.length)];

  if (userGuess === computerGuess) {
    winScore++;
    reset();
  }

  if (userGuess != computerGuess) {

    // need to print multiple wrong letters and disable wrong letter
    lettersGuessed.push(userGuess);
    guessRemaining--;
    // console.log("this letter isn't right" + " " + userGuess);
    // console.log(guessRemaining);
    
  } else if (guessRemaining === 0) {
    lettersGuessed = [];
    loseScore++;
    reset();
  }

  // updates stats

  document.getElementById("num-guess-left").textContent = guessRemaining;
  document.getElementById("letters-used").textContent = lettersGuessed;
  document.getElementById("winner").textContent = winScore;
  document.getElementById("loser").textContent = loseScore;
};
