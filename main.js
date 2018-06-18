// Grab reference to my DOM elements
var $newgameButton = document.getElementById('newGameButton');
var $placeholders = document.getElementById('placholders');
var $guessedLetters = document.getElementById('guessedLetters');
var $guessesLeft = document.getElementById('guessesLeft');
var $wins = document.getElementById('wins');
var $losses = document.getElementById('losses');

/* Create variables for game (wordBank, wins, losses, picked word, guesses left,
game running, picked word placeholder, guessed letter bank, incorrect letter bank)*/
var wordBank = ["The Beatles", "Arctic Monkeys", "Radiohead"];
var wins = 0;
var losses = 0
var guessesLeft = 8;
var gameRunning = false;
var pickedWord = '';
var pickedWordPlaceholderArr = [];
var guessedLetterBank = [];
var incorrectLetterBank = [];

// newGame function to reset all stats, pick new word and creat placeholders
function newGame() {
    // Reset all game info
    gameRunning = true;
    guessesLeft = 8;
    guessedLetterBank = [];
    incorrectLetterBank = [];
    pickedWordPlaceholderArr = [];

    // Pick a new word
    pickedWord = wordBank[Math.floor(Math.random() * wordBank.length)]

    // Create placeholders out of new pickedWord
    for (var i = 0; i < pickedWord.length; i++) {
        if (pickedWord[i] === " ") {
            pickedWordPlaceholderArr.push(" ");
        } else {
            pickedWordPlaceholderArr.push("_");
        }
    }

    // Write all new game info to DOM
    $guessesLeft.textContent = guessesLeft;
    $placeholders.textContent = pickedWordPlaceholderArr.join("");
    $guessedLetters.textContent = incorrectLetterBank;
}

// letterGuess function, takes in the letter you pressed and sees if it's in the selected word

// checkIncorrect(letter)

// checkLose

// checkWin

// Add event listener for new game button
$newgameButton.addEventListener('click', newGame);

// Add onkeyup event to trigger letterGuess