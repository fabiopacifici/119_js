console.log('Hello, world!');
/* 

Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. 
Stabilire il vincitore, in base a chi fa il punteggio più alto.


tools: 
- Math/floor/random
- if/elseif/else
- log
- let/const

*/

// generate a random number for the player
const playerNumber = Math.floor(Math.random() * 6) + 1
console.log(playerNumber);
// generat a random number for the pc
const pcNumber = Math.floor(Math.random() * 6) + 1
console.log(pcNumber);

let winnerMessage;
// check if the player number is greather than the pc number
if (playerNumber > pcNumber) {
  // player wins
  winnerMessage = `You win | Your number: ${playerNumber} - PC: ${pcNumber}`
} else if (pcNumber > playerNumber) {
  // pc wins
  // otherwise check if the pc number is greather than player number 
  winnerMessage = `You loose | Your number: ${playerNumber} - PC: ${pcNumber}`
} else {
  // otherwise they are equal 
  // no winnerMessage try again
  winnerMessage = `No winner! Try again | Your number: ${playerNumber} - PC: ${pcNumber}`
}

console.log(winnerMessage);

// decide the winner and print a message