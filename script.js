// Code goes here
let playerScore = 0,
  computerScore = 0,
  playerSelection = '';


// Gameplay Variables
const choiceRock = document.querySelector('#rock');
const textArea = document.querySelector('#text-area');
const choicePaper = document.querySelector('#paper');
const choiceScissors = document.querySelector('#scissors');
const gameOverButton = document.querySelector('#game-over');
const drawText = document.querySelector('#draw-text');
const saluteText = document.querySelector('#salute');

gameOverButton.style.display = 'none';
choiceRock.style.display = 'inline';
choicePaper.style.display = 'inline';
choiceScissors.style.display = 'inline';
textArea.textContent = 'Choose your weapon wisely!';
saluteText.textContent = 'First to reach 5 wins!!!';


computerPlay = () => {
  let weapon = ["Rock", "Paper", "Scissors"];
  return weapon[Math.floor(Math.random() * 3)];

};


// Player Weapon Selection
choiceRock.addEventListener('click', () => {
  playerSelection = 'Rock';
  return game();
});

choicePaper.addEventListener('click', () => {
  playerSelection = 'Paper';
  return game();
});

choiceScissors.addEventListener('click', () => {
  playerSelection = 'Scissors';
  return game();

});

gameOverButton.addEventListener('click', () => { // Gameover parameter reset
  playerScore = 0;
  computerScore = 0;
  playerSelection = '';
  gameOverButton.style.display = 'none';
  choiceRock.style.display = 'inline';
  choicePaper.style.display = 'inline';
  choiceScissors.style.display = 'inline';
  textArea.textContent = 'Choose your weapon wisely!';
  saluteText.textContent = 'First to reach 5 wins!!!';
});


// Single Round Play

playRound = (computerSelection) => {

  computerSelection = computerPlay();

  if (playerSelection === "Rock") {
    if (computerSelection === "Scissors") {
      playerScore++;
      drawText.style.display = 'none';
    } else if (computerSelection === "Paper") {
      computerScore++;
      drawText.style.display = 'none';
    } else drawText.style.display = 'inline';
      drawText.textContent = 'You have both selected "Rock", please choose again'; // for the sake of UX, this return is not used and the player simply select again.
  }

  if (playerSelection === "Paper") {
    if (computerSelection === "Rock") {
      playerScore++;
      drawText.style.display = 'none';
    } else if (computerSelection === "Scissors") {
      computerScore++;
      drawText.style.display = 'none';
    } else drawText.style.display = 'inline';
      drawText.textContent = 'You have both selected "Paper", please choose again'; // for the sake of UX, this return is not used and the player simply select again.
  }

  if (playerSelection === "Scissors") {
    if (computerSelection === "Paper") {
      playerScore++;
      drawText.style.display = 'none';
    } else if (computerSelection === "Rock") {
      computerScore++;
      drawText.style.display = 'none';
    } else drawText.style.display = 'inline';
      drawText.textContent = 'You have both selected "Scissors", please choose again'; // for the sake of UX, this return is not used and the player simply select again.
  }


};


gameOver = () => {
  gameOverButton.style.display = 'inline';
  choiceRock.style.display = 'none';
  choicePaper.style.display = 'none';
  choiceScissors.style.display = 'none';
};


game = () => {
  playRound();

  if (playerScore < 5 && computerScore < 5) {
    textArea.textContent = "Your score is " + playerScore + " and Computer score is " + computerScore;
  } else if (playerScore === 5 && computerScore < 5) {
    textArea.textContent = "You Win!!! \n Your score is " + playerScore + " and Computer score is " + computerScore;
    saluteText.textContent = "Congratulations!!!";
    gameOver(); // Create the game over function before run.
  } else if (playerScore < 5 && computerScore === 5) {
    textArea.textContent = "You Lose!!! \n Your score is " + playerScore + " and Computer score is " + computerScore;
    saluteText.textContent = "Better luck next time";
    gameOver();
  }

};
