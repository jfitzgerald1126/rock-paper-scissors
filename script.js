let playerScore = 0;
let computerScore = 0;
let winner = '';

function getComputerChoice() {
    let choices = ['ROCK', 'PAPER', 'SCISSORS'];
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        winner = 'tie';
    } else if (
        (playerChoice === 'ROCK' && computerChoice === 'SCISSORS') ||
        (playerChoice === 'PAPER' && computerChoice === 'ROCK') ||
        (playerChoice === 'SCISSORS' && computerChoice === 'PAPER')
    ) {
        // do something
        playerScore++;
        winner = 'player'
    } else {
        computerScore++;
        winner = 'computer'
    }
    updateResult(winner, playerChoice, computerChoice);
    updateScores();
}

function updateResult(winner, playerChoice, computerChoice) {
    const resTitle = document.querySelector('#res-title');
    const resText = document.querySelector('#res-text');
    if (winner === 'player') {
        resTitle.textContent = 'You win! 🏆';
        resText.textContent = `${playerChoice} beats ${computerChoice}`
    } else if (winner === 'computer') {
        resTitle.textContent = 'You lose. 🤦'
        resText.textContent = `${computerChoice} beats ${playerChoice}`
    } else {
        resTitle.textContent = 'Tie. 🥱';
        resText.textContent = `Stalemate between ${playerChoice}`
    }
}

function updateScores() {
    const player = document.querySelector('#player-score');
    const computer = document.querySelector('#computer-score');
    player.textContent = `Player: ${playerScore}`;
    computer.textContent = `Computer: ${computerScore}`;
}

function updateChoices(playerChoice, computerChoice) {
    const player = document.querySelector('#player-choice');
    const computer = document.querySelector('#computer-choice');

    switch (playerChoice) {
        case 'ROCK':
            player.textContent = '🗿';
            break;
        case 'PAPER':
            player.textContent = '📄';
            break;
        case 'SCISSORS':
            player.textContent = '✂️';
            break;
        default:
            break;
    }

    switch (computerChoice) {
        case 'ROCK':
            computer.textContent = '🗿';
            break;
        case 'PAPER':
            computer.textContent = '📄';
            break;
        case 'SCISSORS':
            computer.textContent = '✂️';
            break;
        default:
            break;
    }
}

function handleClick(playerChoice) {
    const computerChoice = getComputerChoice();
    updateChoices(playerChoice, computerChoice);
    playRound(playerChoice, computerChoice);
}

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
rock.addEventListener('click', () => handleClick('ROCK'));
paper.addEventListener('click', () => handleClick('PAPER'));
scissors.addEventListener('click', () => handleClick('SCISSORS'));