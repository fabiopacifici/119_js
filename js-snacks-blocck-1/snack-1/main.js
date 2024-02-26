/* 

L’utente inserisce due numeri in successione, con due prompt.
Il software stampa il maggiore.

*/

const firstNumber = Number(prompt('type a number')) // 10 
const secondNumber = Number(prompt('type a number')) // 4

console.log(firstNumber, secondNumber);

if(firstNumber > secondNumber) {
  console.log('The fisrt number is grether than the second');
} else if (secondNumber > firstNumber) {
  console.log('The second number is grether than the first');
} else {
  console.log('Both numbers are the same');
}