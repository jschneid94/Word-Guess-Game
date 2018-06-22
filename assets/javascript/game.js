
// Create variables for DOM elements
var $newGameButton = document.getElementById("newGameButton");
var $placeholders = document.getElementById("placeholders");
var $guessedLetters = document.getElementById("guessedLetters");
var $guessesLeft = document.getElementById("guessesLeft");
var $wins = document.getElementById("wins");
var $losses = document.getElementById("losses");
var $audio = document.getElementById("background_music");


// Create variables for the game
var wordBank = ["Eleanor Rigby", "Magical Mystery Tour", "Fixing A Hole", "A Day In The Life", "Golden Slumbers", "I Want To Hold Your Hand", "For No One", "Taxman", "All You Need Is Love", "Come Together", "Hey Jude", "Ticket To Ride", "Don't Let Me Down", "Can't Buy Me Love", "I've Just Seen A Face"];
var wins = 0;
var losses = 0;
var gameRunning = false;
var guessesLeft = 8;
var pickedWord = "";
var guessedLetterBank = [];
var incorrectLetterBank = [];
var pickedWordPlaceholderArr = [];

// Function to play background music
function playMusic() {
    $audio.play();
}

// newGame function
function newGame() {
    // Reset all stats for a new game
    gameRunning = true;
    guessesLeft = 8;
    guessedLetterBank = [];
    incorrectLetterBank = [];
    pickedWordPlaceholderArr = [];

    // Starts background music when the game is started.
    playMusic();

    // Randomly choose a word from the word bank
    pickedWord = wordBank[Math.floor(Math.random() * wordBank.length)];

    // create a placeholder for the chosen word
    for (var i = 0; i < pickedWord.length; i++) {
        if (pickedWord[i] === " ") {
            pickedWordPlaceholderArr.push(" ");
        } else if (pickedWord[i] === "'") {
            pickedWordPlaceholderArr.push("'");
        } else {
            pickedWordPlaceholderArr.push("_");
        }
    }

    // Display these changes to the DOM
    $placeholders.textContent = pickedWordPlaceholderArr.join("");
    $guessedLetters.textContent = incorrectLetterBank;
    $guessesLeft.textContent = guessesLeft;

}

// letterGuess function: takes in the letter you pressed and sees if it's in the selected word
function letterGuess(letter) {

    // Check if the game is running and if the letter has already been guessed.
    if (gameRunning === true && guessedLetterBank.indexOf(letter) === -1) {
        
        // Push letter into the letter guessed bank
        guessedLetterBank.push(letter);

        // Check each letter in the placeholder
        for (var i = 0; i < pickedWord.length; i++) {
            // If the letter guessed matches a letter in the chosen word, display the letter in the placeholder
            if (pickedWord[i].toLowerCase() === letter.toLowerCase()) {
                pickedWordPlaceholderArr[i] = pickedWord[i];
            }
        }
        // Update the text content of the placeholders in the DOM
        $placeholders.textContent = pickedWordPlaceholderArr.join("");

        // Run the checkIncorrect function on the letter
        checkIncorrect(letter);
    }
    // If game is not running or letter has already been pressed, alert
    else {
        if (!gameRunning) {
            alert("You need to start a new game!");
        } else {
            alert("You already guessed that letter, try another one!");
        }
    }
}

// checkIncorrect function: if guessed letter is not in the placeholder, decrease amount of guesses and display incorrect guesses
function checkIncorrect(letter) {
    // If the guessed letter does not match any lower or upper case letters
    if (pickedWordPlaceholderArr.indexOf(letter.toLowerCase()) === -1 
        && 
        pickedWordPlaceholderArr.indexOf(letter.toUpperCase()) === -1) {
            // Decrement guesses left by 1 and display on DOM
            guessesLeft--;
            $guessesLeft.textContent = guessesLeft;
            // Add the guessed letter to the incorrect letter bank and dispaly on DOM
            incorrectLetterBank.push(letter);
            $guessedLetters.textContent = incorrectLetterBank.join(" ");
    }

    // Run checkLoss function
    checkLoss();
}

// checkLoss function: checks if the user has any guesses left
function checkLoss() {
    if (guessesLeft === 0) {
        // Increment losses and display on screen
        losses++;
        $losses.textContent = losses;
        // Game stops running
        gameRunning = false;
        alert("You lost, try again!");
    }

    // Run checkWin function
    checkWin();
}

// checkWin function: checks if the user has guessed all letters in the placeholder
function checkWin () {
    if (pickedWord.toLowerCase() === pickedWordPlaceholderArr.join("").toLowerCase()) {
        // Increment wins and display on screen
        wins++;
        $wins.textContent = wins;
        // Game stops running
        gameRunning = false;
        alert("You win!");
    }
}

// Create event listener for when new game button is pressed
$newGameButton.addEventListener("click", newGame);

// When any letter key is pressed, run letterGuess function
document.onkeyup = function(event) {
    if (event.keyCode >= 65 && event.keyCode <= 90) {
        letterGuess(event.key);
    }
}

