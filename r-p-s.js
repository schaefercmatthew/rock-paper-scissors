let results = [];

//main function to actually play
function RPS(computerSelection, playerSelection) {
  switch (computerSelection.concat(playerSelection)) {
    case "RP":
      results.push("Paper covers Rock: You won a round?!");
      break;
    case "SR":
      results.push("Rock crushes Scissors: Wow, you're doing it!");
      break;
    case "PS":
      results.push("Scissors cuts Paper: Okay, now keep winning!");
      break;
    case "RR":
    case "PP":
    case "SS":
      results.push(
        "So did the computer: Come on. Do better. The whole world is counting on you."
      );
      break;
    case "PR":
      results.push(":( Paper covers Rock: We're dooooooomed.");
      break;
    case "RS":
      results.push(":( Rock crushes Scissors: Ahh, stop doing that.");
      break;
    case "SP":
      results.push(":( Scissors cuts Paper: Geez. Are you even trying?");
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

// scoring
let playerScore = 0;
let computerScore = 0;

const scoreDisplay = document.getElementById("score");

function updateScore() {
  scoreDisplay.textContent = `Player: ${playerScore} - Computer: ${computerScore}`;
  if (playerScore === 5) {
    window.alert("Player wins! You *actually* saved us!", "Keep Playing?");
    location.reload();
    window.scrollTo(0, 0);
  } else if (computerScore === 5) {
    window.alert("Computer wins. Thanks a lot.", "Try again? Please.");
    location.reload();
    window.scrollTo(0, 0);
  }
}

rockButton.addEventListener("click", () => {
  let displayMessage = document.getElementById("dispMessage");
  displayMessage.textContent = ""; // clear old message
  setTimeout(() => {
    let computerSelection = getComputerChoice();
    let playerSelection = "R";
    RPS(computerSelection, playerSelection);
    let result = "You picked Rock! " + results[results.length - 1];
    displayMessage.textContent = result;

    if (results[results.length - 1].includes("!")) {
      playerScore++;
      updateScore();
    } else if (results[results.length - 1].includes(":(")) {
      computerScore++;
      updateScore();
    }
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

    if (results[results.length - 1].includes("!")) {
      playerScore++;
      updateScore();
    } else if (results[results.length - 1].includes(":(")) {
      computerScore++;
      updateScore();
    }
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

    if (results[results.length - 1].includes("!")) {
      playerScore++;
      updateScore();
    } else if (results[results.length - 1].includes(":(")) {
      computerScore++;
      updateScore();
    }
  }, 1000); // wait for 1 second before displaying new message
});

// get the section elements
const section1 = document.querySelector("#section1");
const section2 = document.querySelector("#section2");
const section3 = document.querySelector("#section3");
const section4 = document.querySelector("#section4");
const section5 = document.querySelector("#section5");

// set the initial background images
section1.style.backgroundImage = 'url("citypics/city1.png")';
section2.style.backgroundImage = 'url("citypics/city2.png")';
section3.style.backgroundImage = 'url("citypics/city3.png")';
section4.style.backgroundImage = 'url("citypics/city4.png")';
section5.style.backgroundImage = 'url("citypics/city5.jpg")';

// show the initial score
updateScore();
