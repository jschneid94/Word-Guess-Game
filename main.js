// Create variables to reference DOM elements
var $newgameButton = document.getElementById('newGameButton');
var $placeholders = document.getElementById('placeholders');
var $guessedLetters = document.getElementById('guessedLetters');
var $guessesLeft = document.getElementById('guessesLeft');
var $wins = document.getElementById('wins');
var $losses = document.getElementById('losses');

/* Create variables for game (wordBank, wins, losses, picked word, guesses left,
game running, picked word placeholder, guessed letter bank, incorrect letter bank)*/
var wordBank = ["Eleanor Rigby", "Magical Mystery Tour", "Fixing A Hole", "A Day In The Life", "Golden Slumbers", "I Want To Hold Your Hand", "For No One", "Taxman", "All You Need Is Love", "Come Together", "Hey Jude", "Ticket To Ride", "Don't Let Me Down", "Can't Buy Me Love", "I've Just Seen A Face"];
var wins = 0;
var losses = 0
var guessesLeft = 8;
var gameRunning = false;
var pickedWord = '';
var pickedWordPlaceholderArr = [];
var guessedLetterBank = [];
var incorrectLetterBank = [];
var gameSong;

// newGame function to reset all stats, randomly pick word from word bank, and create string with placeholders
function newGame() {
    // Reset all game info
    gameRunning = true;
    guessesLeft = 8;
    guessedLetterBank = [];
    incorrectLetterBank = [];
    pickedWordPlaceholderArr = [];
    pickedWord = wordBank[Math.floor(Math.random() * wordBank.length)];

    // Create placeholders out of new pickedWord
    for (var i = 0; i < pickedWord.length; i++) {
        if (pickedWord[i] === " ") {
            pickedWordPlaceholderArr.push(" ");
        } else if (pickedWord[i] === "'") {
            pickedWordPlaceholderArr.push("'");
        }else {
            pickedWordPlaceholderArr.push("_");
        }
    }

    // Write all new game info to DOM
    $guessesLeft.textContent = guessesLeft;
    // .join("") pushes all the characters back into a string
    $placeholders.textContent = pickedWordPlaceholderArr.join("");
    $guessedLetters.textContent = incorrectLetterBank;
}

// letterGuess function: takes in the letter you pressed and sees if it's in the selected word
function letterGuess(letter) {
    console.log(letter);

    // Test if the new game has been started and if the letter has not been chosen already
    if (gameRunning === true && guessedLetterBank.indexOf(letter) === -1) {

        // Put letter in the guessed word bank
        guessedLetterBank.push(letter);

        // for loop to check every character in the placeholder
        for (var i = 0; i < pickedWord.length; i++) {
            // Convert both values to lower case so I can compare them correctly
            if (pickedWord[i].toLowerCase() === letter.toLowerCase()) {
                // If a match, swap out that character in the placeholder with the letter
                pickedWordPlaceholderArr[i] = pickedWord[i];
            }
        }

        // Replace the textContent of the placeholder in DOM
        $placeholders.textContent = pickedWordPlaceholderArr.join('');
        // Pass letter into our checkIncorrect function
        checkIncorrect(letter);

    }
    // If new game has not been started, alert error message.
    else {
        if (!gameRunning) {
            alert("The game isn't running, click on the New Game button to start over.")
        } else {
            alert("You've already guessed this letter, try a new one!")
        }
    }
}

// checkIncorrect(letter)
function checkIncorrect(letter) {
    // Check to see if the letter didn't make it into our pickedWordPlaceholder array
    if (pickedWordPlaceholderArr.indexOf(letter.toLowerCase()) === -1 
        &&
        pickedWordPlaceholderArr.indexOf(letter.toUpperCase()) === -1) {
            // Decrement guesses
            guessesLeft--;
            // Add incorrect letter to incorrectLetterBank
            incorrectLetterBank.push(letter);
            // Write new bank of incorrect letters guessed to DOM
            $guessedLetters.textContent = incorrectLetterBank.join(' ');
            // Write new amount of guesses to DOM
            $guessesLeft.textContent = guessesLeft;
    }
    // Pass into checkLoss function
    checkLoss();
}

// checkLoss
function checkLoss() {
    if (guessesLeft === 0) {
        losses++;
        gameRunning = false;
        $losses.textContent = losses;
        alert("You lost, try again!")
    }
    checkWin();
}

// checkWin
function checkWin() {
    if (pickedWord.toLowerCase() === pickedWordPlaceholderArr.join('').toLowerCase()) {
        wins++;
        gameRuning = false;
        $wins.textContent = wins;
        alert("You win!");
    }
}

// Add event listener for new game button
$newgameButton.addEventListener('click', newGame);

// Add onkeyup event to trigger letterGuess
document.onkeyup = function(event) {
    if (event.keyCode >= 65 && event.keyCode <= 90) {
        letterGuess(event.key);
    }
}