const buttons = document.getElementsByTagName("button")

// Get ID of clicked button.
const buttonPressed = e =>
{
  console.log(e.target.id);
}

function getComputerChoice() {
  let num = Math.floor(Math.random() * 3);
  let choice = convertChoice(num, "Computer");
  return choice;
}

function getPlayerChoice()
{
  let buttonClicked = document.addEventListener("click");
}

// function getPlayerChoice()
// {
//   let num = document.getElementById("game-button").value;
//   let choice = convertChoice(num, "Player");
//   return choice;
// }

function convertChoice(num, sender)
{
  let choiceNum = parseInt(num);
  if (choiceNum == 0)
  {
    console.log(sender + " number: " + choiceNum);
    console.log(sender + " choice: rock");
    return "rock";
  }
  else if (choiceNum == 1)
  {
    console.log(sender + " number: " + choiceNum);
    console.log(sender + " choice: paper");
    return "paper";
  }
  else if (choiceNum == 2)
  {
    console.log(sender + " number: " + choiceNum);
    console.log(sender + " choice: scissors");
    return "scissors";
  }
}

function round(gameStats)
{
  let roundCounter = gameStats[3];
  let computerChoice = getComputerChoice();
  let playerChoice = getPlayerChoice();
}

function game()
{
  // Declare initial values.
  let playerVictory = 0;
  let computerVictory = 0;
  let ties = 0;
  let roundCount = 1;
  let gameStats = [playerVictory, computerVictory, ties, roundCount];

  // Begin round looping.
  for (roundCount; roundCount <= 5; roundCount++)
  {
    gameStats = round(gameStats);
  }
}

function game(chosenButton)
{
  let computerChoice = getComputerChoice();
  let playerChoice = convertChoice(chosenButton, "Player");
  let roundCount = 1;
  let playerVictory = 0;
  let computerVictory = 0;
  let ties = 0;
  
  for (roundCount; roundCount <= 5; roundCount++)
  {
    computerChoice = getComputerChoice();
    playerChoice = convertChoice(chosenButton, "Player");
    document.getElementById("round-count").textContent = "ROUND " + roundCount;
    if (computerChoice == "rock")
    {
      if (playerChoice == "rock")
      {
        alert("Computer chose rock. This round is a tie!");
        ties++;
      }
      else if (playerChoice == "paper")
      {
        alert("Computer chose rock. You win this round!");
        playerVictory++;
      }
      else
      {
        alert("Computer chose rock. You lose this round.");
        computerVictory++;
      }
    }
    else if (computerChoice == "paper")
    {
      if (playerChoice == "rock")
      {
        alert("Computer chose paper. You lose this round.");
        computerVictory++;
      }
      else if (playerChoice == "paper")
      {
        alert("Computer chose paper. This round is a tie!");
        ties++;
      }
      else if (playerChoice == "scissors")
      {
        alert("Computer chose paper. You win this round!");
        playerVictory++;
      }
    }
    else
    {
      if (playerChoice == "rock")
      {
        alert("Computer chose scissors. You win this round!");
        playerVictory++;
      }
      else if (playerChoice == "paper")
      {
        alert("Computer chose scissors. You lose this round.");
        computerVictory++;
      }
      else if (playerChoice == "scissors")
      {
        alert("Computer chose scissors. This round is a tie!");
        ties++;
      }
    }
  }
}

// while (roundCount < 5)
// {
//   document.getElementById("")
// }

// for (roundCount; roundCount < 5; roundCount++)
// {
//   document.getElementById("round-count").textcontent = "ROUND " + roundCount
// }