function getComputerChoice() {
    let choices = ['Rock', 'Paper', 'Scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

function playOneRound(playerChoice, computerChoice) {
    playerChoice = playerChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    if (playerChoice === 'rock') {
        if (computerChoice === 'paper') {
            // return 'You lose! Paper beats Rock';
            return 'win';
        } else if (computerChoice === 'scissors') {
            // return 'You win! Rock beats Scissors';
            return 'loss';
        } else {
            return 'tie';
        }

    } else if (playerChoice === 'paper') {
        if (computerChoice === 'rock') {
            // return 'You win! Paper beats Rock';
            return 'win';
        } else if (computerChoice === 'scissors') {
            // return 'You lose! Scissors beats Paper'
            return 'loss';
        } else {
            // return 'Tie!';
            return 'tie';
        }
    } else {
        if (computerChoice === 'paper') {
            // return 'You win! Scissors beats Paper';
            return 'win';
        } else if (computerChoice === 'rock') {
            // return 'You Lose! Rock beats Scissors';
            return 'loss';
        } else {
            // return 'Tie!';
            return 'tie';
        }
    }
}

    function game() {
        let userScore = 0;
        let computerScore = 0;
        let result;
        for (i = 0; i < 5; i++) {
            userInput = prompt("Rock, Paper or Scissors?");
            computerChoice = getComputerChoice();
            result = playOneRound(userInput, computerChoice);
            if (result === 'win') {
                console.log('Win!')
                userScore++;
            } else if (result === 'loss') {
                console.log('Loss.')
                computerScore++;
            } else {
                console.log('Tie');
            }
        }

        if (userScore > computerScore) {
            console.log(`Congrats! You win ${userScore} to ${computerScore}.`);
        } else if (userScore < computerScore) {
            console.log(`You lost ${computerScore} to ${userScore}.`)
        } else {
            console.log('Tie game!')
        }
    }

