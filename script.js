
//create block scoped variables
let winMsg = 'Victory';
let loseMsg = 'Crushing Defeat';
let tieMsg = 'Tie';


let statusDisplay = document.querySelector('#status-head');

let moveDisplays = document.querySelectorAll('.move-display h2');
let buttons = document.querySelectorAll('button');

// possible moves in arraylist
let moveList = ['Rock', 'Paper', 'Scissors'];



/**
 * Displays start state of the game
 * create function startgame that starts game and display inputs
 * */
function startGame() {
    statusDisplay.textContent = 'Choose!';
    // Using to loop to add respective text to the buttons
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].textContent = moveList[i];
        buttons[i].style.display = "inline-block";
        buttons[i].removeEventListener("click",startGame);
        buttons[i].addEventListener("click",endGame);
        buttons[i].style.visibility = 'visible';
    }
}


/**
 * Displays end state of game 
 * @param {Event} event event controlling information of users input
 */
function endGame(event) {
    let userText = event.target.innerHTML;
    let userMove = moveList.indexOf(userText);
    let cpuMove = randomMove();
    let moves = calcResult(userMove, cpuMove)
    document.getElementById("status-head").innerHTML = moves["Message"];
    for (i=0; i< buttons.length; i = i+2) {
        buttons[i].style.visibility = 'hidden';
    }
}



/**
 * return {Number} random number between 0 and 2  
 */
function randomMove() {
    return Math.floor(Math.random() * 3 );
}


/**const userMove = document.getElementById('user-move')
   *const cpuMove = document.getElementById('cpu-move')
   */


/**
 * computes result of the game. returns victory message if move 1 wins
 * param {Number} move 1 move 2
 * param {Number} move 1 move 2
 * return {String} result result of the game
 */ 
function calcResult(userMove, cpuMove) {
    if(userMove == cpuMove){
        return "Draw!"
    }
    else if(cpuMove == "Rock"){
        return (userMove == "Paper") ? "You Win!" : "You Lose!"
    }
    else if(cpuMove == "Paper"){
        return (userMove == "Scissors") ? "You Win!" : "You Lose!"
    }
    else(cpuMove == "Scissors"){
        return (userMove == "Rock") ? "You Win!" : "You Lose!"
    }
}






