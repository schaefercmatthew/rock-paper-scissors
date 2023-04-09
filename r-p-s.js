let results = [];

//main function to actually play
function RPS(computerSelection, playerSelection) {
  switch (computerSelection.concat(playerSelection)) {
    case "RP":
      results.push("Paper covers Rock: You win!");
      break;
    case "SR":
      results.push("Rock crushes Scissors: You win!");
      break;
    case "PS":
      results.push("Scissors cuts Paper: You win!");
      break;
    case "RR":
    case "PP":
    case "SS":
      results.push("So did the computer: A cats game!");
      break;
    case "PR":
      results.push("Paper covers Rock: You lose!");
      break;
    case "RS":
      results.push("Rock crushes Scissors: You lose!");
      break;
    case "SP":
      results.push("Scissors cuts Paper: You lose!");
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
  let displayMessage = document.getElementById("dispMessage");
  displayMessage.textContent = ""; // clear old message
  setTimeout(() => {
    let computerSelection = getComputerChoice();
    let playerSelection = "R";
    RPS(computerSelection, playerSelection);
    let result = "You picked Rock! " + results[results.length - 1];
    displayMessage.textContent = result;
  }, 1000); // wait for 1 second before displaying new message
});

scissorsButton.addEventListener("click", () => {
  let displayMessage = document.getElementById("dispMessage");
  displayMessage.textContent = ""; // clear old message
  setTimeout(() => {
    let computerSelection = getComputerChoice();
    let playerSelection = "S";
    RPS(computerSelection, playerSelection);
    let result = "You picked Scissors! " + results[results.length - 1];
    document.getElementById("dispMessage").textContent = result;
  }, 1000); // wait for 1 second before displaying new message
});

paperButton.addEventListener("click", () => {
  let displayMessage = document.getElementById("dispMessage");
  displayMessage.textContent = ""; // clear old message
  setTimeout(() => {
    let computerSelection = getComputerChoice();
    let playerSelection = "P";
    RPS(computerSelection, playerSelection);
    let result = "You picked Paper! " + results[results.length - 1];
    document.getElementById("dispMessage").textContent = result;
  }, 1000); // wait for 1 second before displaying new message
});

// get the section elements
const section1 = document.querySelector("#section1");
const section2 = document.querySelector("#section2");
const section3 = document.querySelector("#section3");

// set the initial background images
section1.style.backgroundImage = 'url("/Pictures/Mountain.jpg")';
section2.style.backgroundImage = 'url("/Pictures/mountain2.jpg")';
section3.style.backgroundImage = 'url("/Pictures/mountain3.jpg")';
