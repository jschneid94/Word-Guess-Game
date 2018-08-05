# Word-Guess-Game

Deployed Page:
https://jschneid94.github.io/Word-Guess-Game/

Word Guess Game, or Hangman: Beatles Edition, is a web app game developed using javascript. The objective of the game is to guess the hidden Beatles song on the screen by typing letters on the keyboard; the user has a number of guesses and too many incorrect guesses results in a loss while correctly guessing the song name will result in a win, and the game will tally the number of these wins/losses. 
My approach to this game was to run event listeners that would grab the value of the key the user pressed and compare it to the song title. If the letter was at all included in the song title, a function would replace the underscore character with the letter on the page; if not, the letter would be displayed in a letter guessed section. Song titles were stored in an array and were randomly chosen upon page load.
