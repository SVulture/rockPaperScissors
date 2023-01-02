let playerPoints = 0;
let computerPoints = 0;

function playRound(playerChoice, computerChoice) {    
    console.log('test',playerChoice, computerChoice);
    
    if (playerChoice === 'r') {
        computerChoice === 'Rock' 
        ? alert ('DRAW! Try again!') 
        : computerChoice === 'Paper'
        ? (alert ('YOU LOSE! Paper beats Rock!'), computerPoints++)
        : (alert ('YOU WIN! Rock beats Scissors!'), playerPoints++)
    } else if (playerChoice === 'p') {
        computerChoice === 'Paper' 
        ? alert ('DRAW! Try again!')
        : computerChoice === 'Rock'
        ? (alert ('YOU WIN! Paper beats Rock!'), playerPoints++)
        : (alert ('YOU LOSE! Scissors beat Paper!'), computerPoints++)
    }  else if (playerChoice === 's') {
        computerChoice === 'Scissors' 
        ? alert ('DRAW! Try again!')
        : computerChoice === 'Rock'
        ? (alert ('YOU LOSE! Rock beats Scissors!'), computerPoints++)
        : (alert ('YOU WIN! Scissors beat Paper!'), playerPoints++)
    }
}

function getComputerChoice() {
    let x = Math.floor(Math.random() * 3);    
    return x === 0 ? 'Rock' : x === 1 ? 'Paper' : 'Scissors'; 
}

let playerChoice;
let computerChoice;
console.log(computerChoice);



function game() {
    for (let i = 1; i < 4; i++) {
        playerChoice = prompt('Rock(r)-Paper(p)-Scissors(s)??');
        computerChoice = getComputerChoice();
        playRound(playerChoice, computerChoice);
        
    }
    console.log('pl',playerPoints, computerPoints);
    playerPoints > computerPoints ? alert ("YOU ARE THE CHAMPION!!!")
    : playerPoints < computerPoints ? alert ("UPS...")
    : alert ("DRAW!")
}

game();