const rockBtn = document.getElementById("rock-btn");
const paperBtn = document.getElementById("paper-btn");
const scissorsBtn = document.getElementById("scissors-btn");
const pScore = document.getElementById("p-score");
const cScore = document.getElementById("c-score");
const round = document.getElementById("round");

// options to select 
const choices = ['rock', 'paper', 'scissors']

// selects random option 
function getComputerChoice() {  
    let computerChoice = choices[Math.floor(Math.random() * choices.length)]
    return computerChoice; 
}


// setting initial variables
let playerSelection;
let playerScore = 0;
let computerScore = 0;


// game round
function playRound(playerSelection) {

    const computerSelection = getComputerChoice();

    if (playerSelection === computerSelection ) {
        round.innerHTML = "<p>It is a tie</p>";
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        playerScore++; 
        round.innerHTML = "<p>You get a point! Rock beats Scissors.</p>";
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
         computerScore++;
        round.innerHTML = "<p>No points for you! Rock beats Scissors.</p>";
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore++;
        round.innerHTML = "<p>You get a point! Scissors beats Paper.</p>";
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        computerScore++;
        round.innerHTML = "<p>No points for you! Scissors beats Paper.</p>";
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        computerScore++;
        round.innerHTML = "<p>No points for you! Paper beats Rock.</p>";
    } else if (playerSelection === 'paper' && computerSelection === 'rock') { 
        playerScore++;
        round.innerHTML = "<p>You get a point! Paper beats Rock.</p>";
    } else {
        round.innerHTML = "<p>You didn't choose anything.</p>";
    }
           
    updateScore();
    checkWinner();
    
}

// update scores
function updateScore() {
    document.getElementById("p-score").textContent = playerScore;
    document.getElementById("c-score").textContent = computerScore;
}

// decide the final winner
function checkWinner() {
    if (playerScore === 5 || computerScore === 5) {
        const winner =
        playerScore === 5
        ? "You win! Congrats. Project simulation Complete"
        : "Computer wins. Try again next time. Project simulation complete";
        round.innerHTML = `<h3 class="result">${winner}</h3>`
        return false;
       
    }
    
}

