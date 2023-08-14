function getComputerChoice() {
    let choices = ['Rock', 'Paper', 'Scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

function playOneRound(playerChoice, computerChoice) {
    playerChoice = playerChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    if (playerChoice === 'rock') {
        if (computerChoice === 'paper') {
            return 'You lose! Paper beats Rock';
        } else if (computerChoice === 'scissors') {
            return 'You win! Rock beats Scissors';
        } else {
            return 'Tie!'
        }

    } else if (playerChoice === 'paper') {
        if (computerChoice === 'rock') {
            return 'You win! Paper beats Rock';
        } else if (computerChoice === 'scissors') {
            return 'You lose! Scissors beats Paper'
        } else {
            return 'Tie!';
        }
    } else {
        if (computerChoice === 'paper') {
            return 'You win! Scissors beats Paper';
        } else if (computerChoice === 'rock') {
            return 'You Lose! Rock beats Scissors';
        } else {
            return 'Tie!';
        }
    }
}