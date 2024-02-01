/* Author: Joshua Cruz, 000895793 */

const options = ["ROCK", "PAPER", "SCISSORS"];

// declare variables
let playerScore = 0;
let computerScore = 0;
let svgImages = document.querySelectorAll(".svg");

// generate computer choice
function computerPlay() {
    return options[Math.floor(Math.random() * options.length)];
}

// play one round of rock paper scissors
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
        ) 
    {
        playerScore++;
        return `You win! ${playerSelection.toUpperCase()} beats ${computerSelection.toUpperCase()}`;
    } else {
        computerScore++;
        return `You lose! ${computerSelection.toUpperCase()} beats ${playerSelection.toUpperCase()}`;
    }
}

 // update the score on the page
 function updateScore() {
    const scoreDiv = document.querySelector("#score");
    scoreDiv.textContent = `Player: ${playerScore} Computer: ${computerScore}`;
}

// handle svg image clicks and play the game
svgImages.forEach((image) => {
    image.addEventListener("click", () => {
    const playerSelection = image.id;
    const computerSelection = computerPlay();
    const result = playRound(playerSelection, computerSelection);
    const playerImage = `<img src="./assets/${playerSelection}.svg" alt="${playerSelection}"  title="${playerSelection}">`;
    const computerImage = `<img src="./assets/${computerSelection}.svg" alt="${computerSelection}" titleht="${computerSelection}">`;
    document.querySelector("#images").innerHTML = `${playerImage} ${computerImage}`;
    document.querySelector("#result").textContent = result;
    updateScore();
    });
});

// handle reset button click
const resetButton = document.querySelector("#reset");
resetButton.addEventListener("click", () => {
  resetScore();
});

// reset the score
function resetScore() {
  playerScore = 0;
  computerScore = 0;
  updateScore();
}

// add hover effect to SVG images
svgImages.forEach((image) => {
  image.addEventListener("mouseover", () => {
    image.style.transform = "scale(1.2)";
  });
  image.addEventListener("mouseout", () => {
    image.style.transform = "scale(1)";
  });
});
