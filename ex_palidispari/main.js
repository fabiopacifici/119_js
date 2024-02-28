/* 
Palidroma
Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma

- palindrom: ada, otto, anna, oro, osso, aveva

*/



// Split a word into an array of characters
/* const splittedWord = anotherWord.split('');
console.log(splittedWord); */


/**
 * Split a word into an array of characters
 * @param {string} word The word to split
 * @returns {Array}
 */
function splitWord(word) {
  const splittedWordAsArray = []

  for (let i = 0; i < word.length; i++) {
    const char = word[i];
    splittedWordAsArray.push(char)
  }

  return splittedWordAsArray

}
/* const myWordAsArray = splitWord(anotherWord)
console.log(myWordAsArray); */

// Reverse the array elements
/* const reversedWordAsArray = splittedWord.reverse()
console.log(reversedWordAsArray); */


/**
 * Reverse the array elements order
 * @param {Array} charactersArray The array of characters to revert 
 * @returns {Array}
 */
function reverseArrayElements(charactersArray) {
  console.log(charactersArray, 'here');

  const reversedArray = []
  for (let i = charactersArray.length - 1; i >= 0; i--) {
    const char = charactersArray[i];
    reversedArray.push(char)
  }
  return reversedArray
}

/* const revArray = reverseArrayElements(myWordAsArray)
console.log(revArray, '👈'); */


/* 
Alternativa a split
const strArr = Array.from('Ciao')
console.log(strArr); */
// Join the array elements as string
/* const reversedWord = reversedWordAsArray.join('')
console.log(reversedWord); */

/**
 * Joins the elements of an array into a string
 * @param {Array} arrayOfCharacters The array of characters to join into a word
 * @returns {string}
 */
function joinArrayAsString(arrayOfCharacters) {
  let joinedWord = ''

  for (let i = 0; i < arrayOfCharacters.length; i++) {
    const char = arrayOfCharacters[i];
    joinedWord += char
  }

  return joinedWord
}


/* const myReversedWord = joinArrayAsString(revArray) 
console.log(myReversedWord, '👈'); */

/**
 * Checks if a given word is a palindrom
 *  
 * @param {string} word The word to check
 * @return {string}
 */
function isPalindrom(word) {
  const reversedWord = word.split('').reverse().join('')

  if (reversedWord === word) {
    return true
  }
  return false
}


const anotherWord = 'armadio'
if(isPalindrom(anotherWord)){
  console.log('is a palindrom', anotherWord);
} else {
  console.log('not a palindrom', anotherWord);
}



/* 


/* Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.
*/





init()


function init() {

  //L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
  const playerChoice = 'dispari'
  const playerNumber = 3

  // Generiamo un numero random (sempre da 1 a 5) per il computer
  const pcNumber = getRandomNumber(1, 5)

  console.log(playerChoice, playerNumber, pcNumber);
  //Sommiamo i due numeri 
  const sum = playerNumber + pcNumber


  if (isEven(sum) === playerChoice) {
    console.log('You win!', sum);
  } else {
    console.log('You loose!', sum);
  }

}


/**
 * Checks if a number is even or odd
 * returns 'pari' or 'dispari'
 * @param {number} numb The number to check
 * @returns {string}
 */
function isEven(numb) {
  if (numb % 2 === 0) {
    return 'pari'
  }
  return 'dispari'
}












/**
 * ## Generates a random number
 * This function returns a random number between min and max
 * @param {number} min The minimum number to generate
 * @param {number} max The maximum number to generate
 * @returns {number}
 */
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}