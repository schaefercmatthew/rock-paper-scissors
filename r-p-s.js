function playRound() {
  let results = [];

  function RPS(computerSelection, playerSelection) {
    if (playerSelection == "R" && computerSelection == "P") {
      results.push("You lose! Paper beats Rock");
    }
    if (playerSelection == "R" && computerSelection == "R") {
      results.push("A cats game! You both picked Rock");
    }
    if (playerSelection == "R" && computerSelection == "S") {
      results.push("You win! Rock beats scissors");
    }
    if (playerSelection == "P" && computerSelection == "P") {
      results.push("A cats game! You both picked paper");
    }
    if (playerSelection == "P" && computerSelection == "R") {
      results.push("You win! Paper beats Rock");
    }
    if (playerSelection == "P" && computerSelection == "S") {
      results.push("You lose! Scissors beats paper");
    }
    if (playerSelection == "S" && computerSelection == "P") {
      results.push("You win! Scissors beats paper");
    }
    if (playerSelection == "S" && computerSelection == "R") {
      results.push("You lose! Rock beats scissors");
    }
    if (playerSelection == "S" && computerSelection == "S") {
      results.push("A cats game! You both picked scissors");
    }
  }

  function getComputerChoice() {
    let x = Math.floor(Math.random() * 3) + 1;
    if (x == 1) {
      return "R";
    } else if (x == 2) {
      return "P";
    } else if (x == 3) {
      return "S";
    }
  }

  computerSelection = getComputerChoice();

  let usersChoice = prompt("Choose Rock, Paper, or Scissors:");
  let playerSelection = usersChoice.charAt(0).toUpperCase();

  RPS(computerSelection, playerSelection);

  for (let i = 0; i < results.length; i++) {
    console.log(results[i]);
  }

  return results;
}

let userWins = 0;
let computerWins = 0;
let ties = 0;

for (let i = 0; i < 5; i++) {
  let result = playRound();
  if (result[0].includes("win")) {
    userWins++;
  } else if (result[0].includes("lose")) {
    computerWins++;
  } else {
    ties++;
  }
}

console.log(
  "User Wins:" +
    userWins +
    `
Computer Wins:` +
    computerWins +
    `
Ties:` +
    ties
);
