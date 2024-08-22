
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
 
