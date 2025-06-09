let playerScore = 0;
let computerScore = 0;
let roundCounter = 1;
const choices = ["Rock", "Paper", "Scissors"];

const currentScore = document.createElement("p");
const currentScoreContainer = document.querySelector(".current-score");
currentScoreContainer.appendChild(currentScore);

scoreboard();

function scoreboard() {
    currentScore.textContent = `Player ${playerScore} : ${computerScore} Computer`;
};

function getComputerChoice () {
    const randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice];
};

function playRound (playerChoice, computerChoice) {
    if (roundCounter > 5) {
        return;
    }
    const roundScore = document.createElement("p");
    if (playerChoice == computerChoice) {
        roundScore.innerHTML = `Player: ${playerChoice}, Computer: ${computerChoice}. TIE!`;
    }
    else if ((playerScore == choices[0] && computerChoice == choices[2]) ||
            playerChoice == choices[1] &&computerChoice == choices[0] ||
            playerChoice == choices[2] && computerChoice == choices[1]) {
        playerScore += 1;
        roundScore.innerHTML = `Player: ${playerChoice}, Computer: ${computerChoice}. Player WINS this round!`;
    }
    else {
        computerScore += 1;
        roundScore.innerHTML = `Player: ${playerChoice}, Computer: ${computerChoice}. Computer WINS this round!`;
    }
    const roundContainer = document.querySelector(".round-score");
    roundContainer.appendChild(roundScore);
    scoreboard();

    roundCounter += 1;

    if (roundCounter === 5) {
        const finalScore = document.createElement("p");
        const finalScoreContainer = document.querySelector(".final-score");
        if (playerScore > computerScore) {
            finalScore.textContent = "Player WINS the game!"
        }
        else if (playerScore < computerScore) {
            finalScore.textContent = "Computer WINS the game!"
        }
        else {
            finalScore.textContent = "TIE game!"
        }
        finalScoreContainer.appendChild(finalScore);
    }
};

function playGame() {
    const rockBtn = document.querySelector("#btn-rock");
    const paperBtn = document.querySelector("#btn-paper");
    const scissorsBtn = document.querySelector("#btn-scissors");
    
    rockBtn.addEventListener("click", () => {
        const playerChoice = choices[0];
        const computerChoice = getComputerChoice();
        playRound(playerChoice, computerChoice);
    });
    paperBtn.addEventListener("click", () => {
        const playerChoice = choices[1];
        const computerChoice = getComputerChoice();
        playRound(playerChoice, computerChoice);
    });
    scissorsBtn.addEventListener("click", () => {
        const playerChoice = choices[2];
        const computerChoice = getComputerChoice();
        playRound(playerChoice, computerChoice);
    });
};


playGame();