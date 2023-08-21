let userScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let choices = ['Rock', 'Paper', 'Scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

function playOneRound(playerChoice, computerChoice) {
    playerChoice = playerChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();
    const result = document.querySelector('#container .result')

    if (playerChoice === 'rock') {
        if (computerChoice === 'paper') {
            result.textContent = 'Result: You lose! Paper beats Rock';
        } else if (computerChoice === 'scissors') {
            result.textContent = 'Result: You win! Rock beats Scissors';
        } else {
            result.textContent = 'Result: Tie, you both chose Rock';
        }

    } else if (playerChoice === 'paper') {
        if (computerChoice === 'rock') {
            result.textContent = 'Result: You win! Paper beats Rock';
        } else if (computerChoice === 'scissors') {
            result.textContent = 'Result: You lose! Scissors beats Paper'
        } else {
            result.textContent = 'Result: Tie, you both chose Paper';
        }
    } else {
        if (computerChoice === 'paper') {
            result.textContent = 'Result: You win! Scissors beats Paper';
        } else if (computerChoice === 'rock') {
            result.textContent = 'Result: You Lose! Rock beats Scissors';
        } else {
            result.textContent = 'Result: Tie, you both chose Paper';
        }
    }
}

const container = document.querySelector("#container")

const rock = document.createElement('button');
rock.textContent = 'Rock'
container.appendChild(rock);

const paper = document.createElement('button');
paper.textContent = 'Paper';
container.appendChild(paper);

const scissors = document.createElement('button');
scissors.textContent = 'Scissors';
container.appendChild(scissors);

const buttons = document.querySelectorAll('#container button')
buttons.forEach (button => {
    button.addEventListener('click', e => {
        playerChoice = button.textContent;
        computerChoice = getComputerChoice();
        console.log(playerChoice, computerChoice);
        playOneRound(playerChoice, computerChoice);
    });
})

const result = document.createElement('div');
result.textContent = 'Result: '
result.classList.add('result');
container.appendChild(result);

const score = document.createElement('div');
score.textContent = `Your score: ${userScore}-- Computer score: ${computerScore}`;
container.appendChild(score);


