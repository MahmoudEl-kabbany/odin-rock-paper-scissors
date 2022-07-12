function computerPlay() {
  let computerChoice = Math.floor(Math.random() * 3) + 1;
  if (computerChoice === 1) {
    return "rock";
  } else if (computerChoice === 2) {
    return "paper";
  } else {
    return "scissors";
  }
}

function playRound(e) {
  playerSelection = e.target.className;
  computerSelection = computerPlay();
  scoreMessage = document.querySelector("p");
  if (playerSelection === computerSelection) {
    scoreMessage.textContent = "It's a tie";
    return 0;
  } else if (playerSelection == "rock" && computerSelection == "scissors") {
    scoreMessage.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
    return 1;
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    scoreMessage.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
    return 1;
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    scoreMessage.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
    return 1;
  } else {
    scoreMessage.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
    return 2;
  }
}

function game() {
  let playerScore = 0;
  let computerScore = 0;
  let winnerIndicator = -1;
  let playerChoice = "";
  winnerIndicator = playRound(playerChoice, computerPlay());
  if (winnerIndicator == 2) {
    computerScore += 1;
  } else if (winnerIndicator == 1) {
    playerScore += 1;
  }
  if (playerScore > computerScore) {
    console.log("You win the round");
  } else if (computerScore > playerScore) {
    console.log("You lose the round");
  } else {
    console.log("This round is a tie");
  }
}

const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorsButton = document.querySelector(".scissors");

rockButton.addEventListener("click", playRound);
paperButton.addEventListener("click", playRound);
scissorsButton.addEventListener("click", playRound);
