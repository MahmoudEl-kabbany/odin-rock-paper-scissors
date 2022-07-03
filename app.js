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

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  if (playerSelection === computerSelection) {
    console.log("It's a tie");
    return 0;
  } else if (playerSelection == "rock" && computerSelection == "scissors") {
    console.log(`You win! ${playerSelection} beats ${computerSelection}`);
    return 1;
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    console.log(`You win! ${playerSelection} beats ${computerSelection}`);
    return 1;
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    console.log(`You win! ${playerSelection} beats ${computerSelection}`);
    return 1;
  } else {
    console.log(`You lose. ${computerSelection} beats ${playerSelection}`);
    return 2;
  }
}

function game() {
  let playerScore = 0;
  let computerScore = 0;
  let winnerIndicator = -1;
  let playerChoice = "";
  for (let i = 0; i < 5; i++) {
    playerChoice = prompt("Choose rock paper or scissors");
    winnerIndicator = playRound(playerChoice, computerPlay());
    if (winnerIndicator == 2) {
      computerScore += 1;
    } else if (winnerIndicator == 1) {
      playerScore += 1;
    }
  }
  if (playerScore > computerScore) {
    console.log("You win the game");
  } else if (computerScore > playerScore) {
    console.log("You lose the game");
  } else {
    console.log("The game is a tie");
  }
}
