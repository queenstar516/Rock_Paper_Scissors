let choices;
let computerChoice;
let playerScore = 0;
let computerScore = 0;
const computerSelection = getComputerChoice();

function getComputerChoice() {
    var choices = ['rock', 'paper', 'scissors']
    let computerChoice = choices[Math.floor(Math.random() * choices.length)]
    return computerChoice; 
}


function playRound(playerSelection, computerSelection) {
         
    if (playerSelection === computerSelection ) {
        return "It's a tie.";
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        playerScore++; 
        return "You win! Rock beats Scissors.";
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
         computerScore++;
         return "You lose! Rock beats Scissors.";
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore++;
        return "You win! Scissors beats Paper.";
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        computerScore++;
        return "You lose! Scissors beats Paper.";
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        computerScore++;
        return "You lose! Paper beats Rock.";
    } else if (playerSelection === 'paper' && computerSelection === 'rock') { 
        playerScore++;
        return  "You win! Paper beats Rock.";
    } else {
        return " You didn't choose anything.";
    }
           
}



function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection =  prompt("What do you choose?").toLocaleLowerCase();
        console.log(playRound(playerSelection, computerSelection));        
    }
    
    if (computerScore > playerScore) {
        return "Computer wins, You lose.";
    } else if (playerScore > computerScore) {
        return "You win, Computer lose.";
    } else {
        return "Got nothing for ya.";
    }
}

console.log(game());

function showScore() {
    return "Computer: " + computerScore + "  " + "Player: " + playerScore;
}

console.log(showScore());