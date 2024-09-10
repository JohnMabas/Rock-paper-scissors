
let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
};

// if (!score) {
//     score = {
//         wins: 0,
//         losses: 0,
//         ties: 0
//     };

// } 

updateScoreElement();

let isAutoPlaying = false;
let intervalId;

function autoPlay() {
    if (!isAutoPlaying) {
     intervalId = setInterval(function() {
            const playerMove = pickComputerMove();
            playerGame(playerMove);
    
        }, 1000);
        isAutoPlaying = true; 
    } else {
        clearInterval(intervalId);
        isAutoPlaying = false; 
    }
}

function playerGame(playerMove) {
    const computerMove = pickComputerMove();


    let result = '';

        if (playerMove === 'scissors') { 

            if (computerMove === 'rock') {
                result = 'you lose';
            } else if (computerMove == 'paper') {
                result = 'You win';
            } else if (computerMove == 'scissors') {
                result = 'Tie.';
            }
    
        } else if (playerMove === 'paper') {
    
            if (computerMove === 'rock') {
                result = 'You won.';
            } else if (computerMove == 'paper') {
                result = 'Tie';
            } else if (computerMove == 'scissors') {
                result = 'You lose.';
            }
    
        } else if (playerMove === "rock") {
            if (computerMove === 'rock') {
                result = 'Tie';
            } else if (computerMove == 'paper') {
                result = 'You lose';
            } else if (computerMove == 'scissors') {
                result = 'You win.';
            }
        }

        if (result === 'You win.') {
            score.wins = score.wins  + 1;
        } else if (result === 'You lose.') {
            score.losses += 1;
        } else if (result === 'Tie.') {
            score.ties =+ 1;
        }

        localStorage.setItem('score', JSON.stringify(score));

        updateScoreElement();

        document.querySelector('.js-result').innerHTML = result;
        document.querySelector('.js-moves').innerHTML = `You ${playerMove} - ${computerMove} compuer`;

//         alert(`You picked ${playerMove}. computer picked ${computerMove}. ${result}
// Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`);
}

function updateScoreElement() {
    document.querySelector('.js-score')
    .innerHTML = `   You
        <img src="./img/ ${playerGame} emoji3.png" class="move-icon">
        <img src="./img/ ${pickComputerMove} emoji4.jpeg" class="move-icon">
        Computer`;

}



function pickComputerMove() {

        const randonNumber = Math.random();

        let computerMove = '';


        if (randonNumber >= 0 && randonNumber < 1 / 3) {
            computerMove = 'rock';
        } else if (randonNumber >= 1 / 3 && randonNumber < 2 / 3) {
            computerMove = 'paper';
        } else if (randonNumber >= 2 / 3 && randonNumber < 1) {
            computerMove = 'scissors';
        }
        
        return computerMove;
}
 
