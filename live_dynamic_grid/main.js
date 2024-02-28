/* 
Creare in JavaScript una griglia 8x8. 

Ogni volta che clicco su un quadrato questo si colora di verde (e si decolora al secondo click se usiamo `.toggle()` invece di `.add()` sull’elemento del DOM).


// Tools: 
- for
- const/let
- getElementById/querySelector
- addEventListener()
- classList().add() / classList().toggle()


// Pseudo code:
- Insierisco variabile per la righa e una per la colonna
- creao una funzione per creare la griglia
- aggiungo un ciclo for
- avvio il ciclo for

Creare in JavaScript una griglia 8x8. 
Ogni volta che clicco su un quadrato questo si colora di verde

*/



// Insierisco variabile per la righa e una per la colonna

// creao una funzione per creare la griglia (DOPO)

//  aggiungo un ciclo for

// avvio il ciclo for


// Inserisco nella griglia le 64 celle
// - select the container DOM element
const containerEl = document.getElementById('container')
console.log(containerEl);
// - aggiungere una lista
const maxCellsNumber = 64;
const markup = `<div class="box"></div>`



for (let i = 0; i < maxCellsNumber; i++) {
  containerEl.insertAdjacentHTML('beforeend', markup)
}

// Ogni volta che clicco su un quadrato questo si colora di verde

// Aggiungi un event listener alle celle generate
function colorElement() {
  if (markup.style.backgroundColor === 'green') {
    markup.style.backgroundColor = 'red';
  }
}

const boxElements = document.getElementsByClassName('box')
console.log(boxElements); // HTML collection
console.log(typeof markup); // string



for (let i = 0; i < boxElements.length; i++) {
  const element = boxElements[i];
  console.log(element);
  // Applica la classe richiesta sulla cella al click
  element.addEventListener('click', function (e) {

    console.log(element.style.backgroundColor === 'paleturquoise');

    // Rimuovi al secondo click la classe applicata prima
    element.classList.toggle('red')


    /*     if (element.style.backgroundColor === 'paleturquoise') {
          element.style.backgroundColor = 'red';
        } else if (element.style.backgroundColor === 'red') {
          element.style.backgroundColor = 'paleturquoise';
        } */
  });
}
//markup.addEventListener('click', colorElement); (markup is a string so no addEventListener available)


/* 

✅creare in JavaScript una griglia 8x8. 

Ogni cella della griglia contiene un numero casuale da 1 a 64.

I numeri presenti nelle celle ***non devono essere ripetuti***
(ovvero la griglia contiene **tutti** i numeri da 1 a 64). 

Ogni volta che clicco su un quadrato questo si colora di verde 
- se il numero contenuto e pari 
- e in rosso se dispari (e si decolora al secondo click se uso `.toggle()` al posto di `.add()`).


*/



/* 
Ogni cella della griglia contiene un numero casuale da 1 a 64.
I numeri presenti nelle celle ***non devono essere ripetuti***
(ovvero la griglia contiene **tutti** i numeri da 1 a 64). 

Tools:
- Math.random()
- array


Pseudo code:
- gerate 64 numeri casuali (compresi tra 1 e 64)

*/

const randomNumbers = []
/* for (let i = 0; i < maxCellsNumber; i++) {

  const randomNumber = getRndInteger(1, maxCellsNumber)
  console.log(randomNumber);
  //randomNumbers.push()
  // check if the number is already inside the array?
  // otherwise push it
  if (!randomNumbers.includes(randomNumber)) {
    randomNumbers.push(randomNumber)
  }
} */

//randomNumbers.legth = 0
// 0 <= 64? false

console.log(randomNumbers.length, randomNumbers.length <= 64);
while (randomNumbers.length < 64) {
  // inside the loop
  console.log(maxCellsNumber);
  const randomNumber = getRndInteger(1, maxCellsNumber)
  console.log(randomNumber);
  //randomNumbers.push()
  // check if the number is already inside the array?
  // otherwise push it
  if (!randomNumbers.includes(randomNumber)) {
    randomNumbers.push(randomNumber)
  }
}

console.log(randomNumbers);


/* TODO: */
function getRandomNumbers(){

}

// 1. [12,]
// 2. [12, 13]
// 3. skip (12)
// 4. [12, 13, 16]
// 5. skip (13)
// 6. [12, 13, 16, 20]
// 7. skip (16)
// 8. skip (13)
// 9. skip (16)
// 10. skip (13)
// 11. skip (20)


// Array(4) | after 11 iterations






function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

