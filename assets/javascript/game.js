// Count number of wins and guesses remaining
var wins = 0;
var remainingGuess = 15;

// Create a word bank of words used in game
var wordListArr = ["Firefly", "Lost", "Westworld", "Heroes"];
var randomWord = wordListArr[Math.floor(Math.random() * wordListArr.length)];

// Computer chooses word and displays the length with _'s

var secretWord;
var count = 0;
var answerArr = [];

function chooseWord() {
    for (var i = 0; i < randomWord.length; i++) {
        answerArr[i] = "_";
    }

    secretWord = answerArr.join(" ");
    document.getElementById("hiddenWord").innerHTML = secretWord;
}

// Function to restart the game
function restartGame() {
    wins = 0;
    remainingGuess = 15;
}

chooseWord();

// When user presses a key...
document.onkeyup = function(event) {

    // Replace the prompt text
    document.getElementById("startGame").style.display = "none";

    // Store user's guess
    var letterGuess = event.key;
    console.log(letterGuess);

    // Compare guess with the letters in the word
        // If guess is correct
        if (letterGuess === randomWord[i]) {
            // Reveal the letter in its respective blank space
            answerArr[i] = letterGuess;
        } 
         // If guess is incorrect
        else {
            // Number of guesses decreased by 1
            remainingGuess--;
        }
       
}

// Check status of the game
    // If player guesses all the characters correctly...
    if ( ) { 
        // Win count increases by 1
        wins++;
        // Computer chooses new word and displays word length
        chooseWord();
        // Number of guesses is reset
        restartGame();
    } 
    // If number of guesses reaches 0...
    else if (remainingGuess === 0) {
        // Replace prompt text with 'try again' message
        document.getElementById("startGame").style.display = "initial";
        document.getElementById("startGame").innerHTML = "No more guesses. Try again!"
        // Computer chooses new word and displays word length
        chooseWord();
        // Number of guesses is reset
        restartGame();
    }
// Display number of guesses remaining

// Display letters already guessed
