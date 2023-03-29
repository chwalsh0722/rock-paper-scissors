let round = 1;
let wins = 0;
let losses = 0;
let ties = 0;

function getPlayerChoice(e) {
  if (e.target.id === 'rock-button') {
    return 0;
  }
  else if (e.target.id === 'paper-button') {
    return 1;
  }
  else {
    return 2;
  }
}

function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 3);
  return computerChoice;
}

function getRoundWinner(playerChoice, computerChoice) {
  if ((playerChoice == 0 && computerChoice == 0) || (playerChoice == 1 && computerChoice == 1) || (playerChoice == 2 && computerChoice == 2)) {
    ties++;
    tie.textContent = "TIES: " + ties;
  }
  else if ((playerChoice == 0 && computerChoice == 1) || (playerChoice == 1 && computerChoice == 2) || (playerChoice == 2 && computerChoice == 0)) {
    losses++;
    lose.textContent = "LOSSES: " + losses;
  }
  else {
    wins++;
    win.textContent = "WINS: " + wins;
  }
}

function playRound(e) {
  if (round >= 5) {
    return;
  }
  let playerChoice = getPlayerChoice(e);
  let computerChoice = getComputerChoice();
  getRoundWinner(playerChoice, computerChoice);
  if (round == 5) {
    const winner = document.createElement('winner');
    winner.setAttribute('style', 'color: gray; font-size: 32px; height: 100px;');
    if (wins > losses) {
      winner.textContent = "Congratulations! You won!";
    }
    else if (wins < losses) {
      winner.textContent = "Sorry, better luck next time!";
    }
    else {
      winner.textContent = "It's a draw!";
    }
  }
  if (round <= 4)
  {
    round++;
  }
  currentRound.textContent = "ROUND " + round;
}

const tie = document.getElementById('tie');
const win = document.getElementById('win');
const lose = document.getElementById('lose');
const currentRound = document.getElementById('round-count');
const buttons = document.querySelectorAll('.button');
