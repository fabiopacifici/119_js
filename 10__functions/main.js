console.log('Functions')
let userAge = 50; // Global variable

/* 

Function Declaration (é soggetta ad hoisting)
posso usare una function declaration prima della sua dichiarazione

- 1. parola chiave `funciton`
- 2. nome della funzione ad esempio: `myFunction`
- 3. parentesi tonde con o senza parametri `()`
- 4. corpo della funzione {// your code here}

  
  
  
  // Function without a parameter
  function name() {
  
  }


  // Function with a parameter
  function name(params) {
  
  }
  

*/

//greetings()
//greetUserByName('Mario Rossi')

// Function without a parameter
function greetings() {
  alert('Ciao Functions');
}


// Function with a parameter (param_1, param_2, param_3)
function greetUserByName(username) {
  alert(`Ciao Functions ${username}`);
}

// Invoke a function
//greetings()
//greetUserByName('Mario Rossi')

userAge = 12



/* Che succede se prendo una variabile dal local scope (function scope)?  */


function myTestFunction() {
  var age = 44;
  let userName = 'Mario';
  const color = 'red';


}
//console.log(age, userName, color); //ReferenceError

myTestFunction();

userAge = 120


/* 🤓 The return keyword 
- 1. parola chiave `funciton`
- 2. nome della funzione ad esempio: `myFunction`
- 3. parentesi tonde con o senza parametri `()`
- 4. corpo della funzione {
  // your code here
  `return` something
}

*/


function sum(numb_1, numb_2) {
  const result = numb_1 + numb_2
  //console.log(result);
  return result;



}

const number_10 = 10
sum(10, number_10) // 20


// LE funzioni con il return restituiscono un valore
// o loggo in console la funzione 
// o la salvo in una variabile e loggo la variabile

console.log(sum(20, 5)); // 25
const result = sum(20, 10) // 30
console.log(result);



/* Return conditionally 

function sum(numb_1, numb_2) {
  const result = numb_1 + numb_2
  //console.log(result);

  if (result > 10) {
    return result;

  } else {
    return 'ciao ciao'
  }

}
sum(10, 10) // 20
*/



/* Function scope ( Ambito di visibilitá delle funzioni) 

Si applica a:
- var
- let
- const

*/

// 😈 (global variables are evil)

function randomFunction() {
  // Function scope
  console.log(userAge); // Access a global variable 😈 (global variables are evil)
}

randomFunction()




/* 
numeri random: generare 10 numeri random (con un for o con un while) attraverso una funzione (copiamola da w3schools) e stamparli a schermo

*/

/**
 * Generates a random integer give a min and max values
 * @param {number} min The minimum number
 * @param {number} max The max number
 * @returns {number}
 */
function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}



console.log(
  getRandomInteger(10, 100)
);


const randomNumbers = []

for (let i = 0; i < 10; i++) {

  randomNumbers.push(getRandomInteger(10, 100))
  
}

console.log(randomNumbers);



/* 

pari o dispari: 



- verificare se un numero è pari o dispari, 
- quindi chiedere un numero all'utente 
- e comunicargli se è pari o dispari

*/


/* const myNumber = 123;


if(myNumber % 2 === 0) {
  console.log('pari');
} else {
  console.log('dispari');
}
 */


// function name: checkEven()


/* 
 */


function checkEven(myNumber) {

  if (myNumber % 2 === 0) {
    //console.log('pari');
    return 'pari'
  }
  return 'dispari'

}

function isEven(myNumber) {

  if (myNumber % 2 === 0) {
    //console.log('pari');
    return true
  } 
  return false

}



/* checkEven(12);
checkEven(122);
checkEven(1244);
checkEven(3);
checkEven(1123452);
checkEven(15435342); */


const userNumber = 124 // prompt('type a number')


if(isEven(userNumber)){
  console.log(`Ciao il numero inserito é pari: ${userNumber}`);
} else {
  console.log(`Ciao il numero inserito é dipari: ${userNumber}`);
}



/* Function Expression (not subject to hoisting) */

calcAge(1980) // ReferenceError: Cannot access 'calcAge' before initialization

const calcAge = function (year_of_birth) {
  console.log('Test 1234');
}

//calcAge(1980)