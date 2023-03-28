let round = 1;
let playerWins = 0;
let computerWins = 0;
let ties = 0;

convertChoiceToNum = choice => {
  let length = choice.length;
  let newString = '';
  for (let i = 0; i < length; i++)
  {
    newString += choice.charAt(i);
  }
  if (newString === "rock")
  {
    return 0;
  }
  else if (newString === "paper")
  {
    return 1;
  }
  else
  {
    return 2;
  }
}

getComputerChoice = () => {
  let computerChoice = Math.floor(Math.random() * 3);
  return computerChoice;
 };

getPlayerChoice = () => {
  let playerChoice = prompt("Type \'rock', \'paper', or \'scissors'");
  return convertChoiceToNum(playerChoice);
 }

playRound = () => {
  let computerChoice = getComputerChoice();
  let playerChoice = getPlayerChoice();

  if (playerChoice === 0)
  {
    if (computerChoice === 0)
    {
      alert("Computer chose rock. It's a tie!");
      ties++;
    }
    else if (computerChoice === 1)
    {
      alert("Computer chose paper. You lose.");
      computerWins++;
    }
    else
    {
      alert("Computer chose scissors. You win!");
      playerWins++;
    }
  }
  else if (playerChoice === 1)
  {
    if (computerChoice === 0)
    {
      alert("Computer chose rock. You win!");
      playerWins++;
    }
    else if (computerChoice === 1)
    {
      alert("Computer chose paper. It's a tie!");
      ties++;
    }
    else
    {
      alert("Computer chose scissors. You lose.");
      computerWins++;
    }
  }
  else
  {
    if (computerChoice === 0)
    {
      alert("Computer chose rock. You lose.");
      computerWins++;
    }
    else if (computerChoice === 1)
    {
      alert("Computer chose paper. You win!");
      playerWins++;
    }
    else
    {
      alert("Computer chose scissors. It's a tie!")
      ties++;
    }
    round++;
  }
}

declareWinner = () =>
{
  if (playerWins > computerWins)
  {
    alert("You won " + playerWins + " rounds, and the computer won " + computerWins + " rounds. You tied " + ties + " rounds. Congratulations!");
  }
  else if (playerWins < computerWins)
  {
    alert("You won " + playerWins + " rounds, and the computer won " + computerWins + " rounds. You tied " + ties + " rounds. Better luck next time.");
  }
  else
  {
    alert("You won " + playerWins + " rounds, and the computer won " + computerWins + " rounds. You tied " + ties + " rounds. See if you can win next time!");
  }
}

game = () => {
  alert("Prepare for a game of ROCK, PAPER, SCISSORS!");

  for (round; round <= 5; round++)
  {
    playRound();
  }
  declareWinner();
  alert("Thanks for playing!");
}

function buttonClicked(e)
{
  console.log(e);
}

const buttons = document.querySelectorAll('.button');
buttons.forEach(button => button.addEventListener('click', buttonClicked));