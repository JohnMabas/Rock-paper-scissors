
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
        
        alert(`You picked ${playerMove}. computer picked ${computerMove}. ${result}`);
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
 
