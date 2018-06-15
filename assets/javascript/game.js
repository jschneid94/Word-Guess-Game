// Count number of wins and guesses remaining
var wins = 0;
var remainingGuess = 15;

// Create a word bank of words used in game

// Computer chooses word and displays the length with _'s

// Function to restart the game
function restartGame() {
    wins = 0;
    remainingGuess = 15;
}


// When user presses a key...
document.onkeyup = function(event) {

    // Replace the prompt text
    document.getElementById("startGame").style.display = "none";

    // Store user's guess
    var letterGuess = event.key;
    console.log(letterGuess);

    // Compare guess with the letters in the word
        // If guess is correct
            // Reveal the letter in its respective blank space
        // If guess is incorrect
            // Number of guesses decreased by 1

}

// Check status of the game
    // If player guesses all the characters correctly...
        // Win count increases by 1
        // Computer chooses new word and displays word length
        // Number of guesses is reset
    // If number of guesses reaches 0...
        // Replace prompt text with 'try again' message
        // Computer chooses new word and displays word length
        // Number of guesses is reset

// Display number of guesses remaining

// Display letters already guessed
