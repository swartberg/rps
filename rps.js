let humanScore = 0;
let computerScore = 0;

function getComputerChoice () {
    let computer = Math.floor(Math.random() * 3);
    return computer;
}

function getHumanChoice() {
    let human = prompt("Rock, paper, scissors...!").toLowerCase();
    if (human == "rock") return 0;
    if (human == "paper") return 1;
    if (human == "scissors") return 2;
}

let userInput = getHumanChoice();
let computerInput = getComputerChoice();

function playRound(userInput, computerInput) {
    if (userInput === computerInput) {
        return ("Tie!");
    }
    else if ((userInput === 0 && computerInput === 2) ||
            (userInput === 1 && computerInput === 0) ||
            (userInput === 2 && computerInput === 1)) {
            humanScore++;
            return ("Human wins the round!");

    }
    else {
        computerScore++;
        return ("Computer wins the round!");
    }
}


function playGame () {
    for (let i = 0; i < 5; i++) {
        let userInput = getHumanChoice();
        let computerInput = getComputerChoice();

        console.log(`============ GAME ${(i + 1)} ============`);
        console.log(playRound(userInput, computerInput));
    }

    let result;
    if (humanScore === computerScore) {
        result = "Tie game!";
    }
    else if (humanScore > computerScore) {
        result = "Human wins the game!";
    }
    else {
        result = "Computer wins the game!";
    }

    console.log(`${result}. Human: ${humanScore} - Computer: ${computerScore}`);
    return result;
}

playGame();