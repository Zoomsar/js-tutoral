const choices = ["rock", "paper", "scissors"];
const player = document.getElementById("player");
const computer = document.getElementById("computer");
const result = document.getElementById("result");
const playerScore = document.getElementById("player-score");
const computerScore = document.getElementById("computer-score");
let playerPoints = 0;
let computerPoints = 0;

function playGame(playerChoice) {
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];
  player.textContent = `Player: ${playerChoice}`;
  computer.textContent = `Computer: ${computerChoice}`;

  if (playerChoice === computerChoice) {
    result.textContent = "It's a tie!";
    result.style.color = "yellow";
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    result.textContent = "You win!";
    result.style.color = "limegreen";
    playerPoints++;
    playerScore.textContent = playerPoints;
  } else {
    result.textContent = "You lose...";
    result.style.color = "red";
    computerPoints++;
    computerScore.textContent = computerPoints;
  }
}