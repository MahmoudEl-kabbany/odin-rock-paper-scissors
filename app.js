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
  scoreCounter = document.querySelector(".score-counter");
  if (scores[0] == 5 || scores[1] == 5) {
    if (scores[0] === 5) {
      scoreMessage.textContent = "Human Wins";
    } else {
      scoreMessage.textContent = "Computer Wins";
    }
  } else {
    // checks which side has won the round
    if (playerSelection === computerSelection) {
      scoreMessage.textContent = "It's a tie";
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
      scoreMessage.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
      scores[0] = scores[0] + 1;
    } else if (playerSelection == "paper" && computerSelection == "rock") {
      scoreMessage.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
      scores[0] = scores[0] + 1;
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
      scoreMessage.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
      scores[0] = scores[0] + 1;
    } else {
      scoreMessage.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
      scores[1] = scores[0] + 1;
    }
    // adjusts score counter
    scoreCounter.textContent = `${scores[0]}  :  ${scores[1]}`;
    if (scores[0] == 5 || scores[1] == 5) {
      if (scores[0] === 5) {
        scoreMessage.textContent = "Human Wins";
      } else {
        scoreMessage.textContent = "Computer Wins";
      }
    }
  }
}

function game() {
  // event listener for buttons for player choice
  const rockButton = document.querySelector(".rock");
  const paperButton = document.querySelector(".paper");
  const scissorsButton = document.querySelector(".scissors");
  rockButton.addEventListener("click", playRound);
  paperButton.addEventListener("click", playRound);
  scissorsButton.addEventListener("click", playRound);
}

// array holds score for player and computer index 0 and index 1 is computer
const scores = [0, 0];

game();
