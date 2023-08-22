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
            player.textContent = '▢'
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
            computer.textContent = '▢';
            break;
    }
}

function isGameOver() {
    return playerScore === 5 || computerScore === 5;
}

function displayOverlay() {
    const overlay = document.querySelector('#game-over');
    const text = document.querySelector('.game-over-text');
    
    // change text
    if (playerScore > computerScore) {
        text.textContent = `You win ${playerScore} to ${computerScore}! 🥇`;
    } else {
        text.textContent = `You lost ${computerScore} to ${playerScore}`;
    }

    overlay.style.display = 'flex';
}

function hideOverlay() {
    const overlay = document.querySelector('#game-over');
    overlay.style.display = 'none';
}

function resetResult() {
    const resTitle = document.querySelector('#res-title');
    const resText = document.querySelector('#res-text');

    resTitle.textContent = 'Chose one...';
    resText.textContent = 'First player to 5 points wins!';
}

function restartGame() {
    playerScore = 0;
    computerScore = 0;
    updateScores();
    updateChoices('', '');
    resetResult();
    hideOverlay();
}
    
function handleClick(playerChoice) {
    // check if there is a winner 
    if (isGameOver()) {
        displayOverlay();
        return;
    }

    const computerChoice = getComputerChoice();
    updateChoices(playerChoice, computerChoice);
    playRound(playerChoice, computerChoice);

    if (isGameOver()) {
        displayOverlay();
    }
}

const overlay = document.querySelector('#game-over');
overlay.addEventListener('click', hideOverlay);

const restart = document.querySelector('.play-again');
restart.addEventListener('click', restartGame);

// game buttons
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
rock.addEventListener('click', () => handleClick('ROCK'));
paper.addEventListener('click', () => handleClick('PAPER'));
scissors.addEventListener('click', () => handleClick('SCISSORS'));