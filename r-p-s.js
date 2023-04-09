let results = [];

//main function to actually play
function RPS(computerSelection, playerSelection) {
  switch (playerSelection + computerSelection) {
    case "RP":
    case "SR":
    case "PS":
      results.push("You win!");
      break;
    case "RR":
    case "PP":
    case "SS":
      results.push("A cats game!");
      break;
    default:
      results.push("You lose!");
      break;
  }
}

//computers choice
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

const rockButton = document.querySelector("#rockButton");
const scissorsButton = document.querySelector("#scissorsButton");
const paperButton = document.querySelector("#paperButton");

rockButton.addEventListener("click", () => {
  let computerSelection = getComputerChoice();
  let playerSelection = "R";
  let result = "You picked Rock! " + results[results.length - 1];
  document.getElementById("dispMessage").textContent = result;
});

scissorsButton.addEventListener("click", () => {
  let computerSelection = getComputerChoice();
  let playerSelection = "S";
  RPS(computerSelection, playerSelection);
  let result = "You picked Scissors! " + results[results.length - 1];
  document.getElementById("dispMessage").textContent = result;
});

paperButton.addEventListener("click", () => {
  let computerSelection = getComputerChoice();
  let playerSelection = "P";
  RPS(computerSelection, playerSelection);
  let result = "You picked Paper! " + results[results.length - 1];
  document.getElementById("dispMessage").textContent = result;
});
