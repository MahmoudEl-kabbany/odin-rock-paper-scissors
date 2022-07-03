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
console.log(playRound("ROck", computerPlay()));
