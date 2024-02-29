console.log('test');
/* 
Consegna
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.

Ogni cella ha un numero progressivo, da 1 a 100. 

Ci saranno quindi 10 caselle per ognuna delle 10 righe.

Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro 
ed emetto un messaggio in console con il numero della cella cliccata.



Bonus
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
- con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;


*/


// SETUP
/* IIFE */

/**
 * Starts the game
 */
(function() {
  console.log('hi there');
  // select the magic field
  const magicField = document.getElementById('field');
  // define max cells numbers
  //const cellsNumber = 100;
  // select the play button from the dom to start the game
  document.querySelector('form').addEventListener('submit', function (e) {
    
    // Bonus 
    // step 1. prevent default behaviour
    e.preventDefault();
    // step 2. read the selected level
    console.log(e.target.level.value);
    const cellsNumber = e.target.level.value;
    // step 3. use the selected level to generate the magic field
    
    
    // STEPS
    // Start the game
    console.log('Start the game - show the magic field');
  
    generateMagicField(magicField, cellsNumber)
  
  })
  
})();


/**
 * 
 * @param {*} fieldDomElement 
 * @param {*} level 
 */
function generateMagicField(fieldDomElement, level) {
  // Empty the magic filed before adding new cells
  fieldDomElement.innerHTML = '';
  // generate the magic field 🍄
  for (let i = 1; i <= level; i++) {

    // generate the single cell
    const nodeCellElement = generateMagicCell(i, level);

    console.log(nodeCellElement);


    // add to the cell an event listener
    attachEventToMagicCell(nodeCellElement)

    fieldDomElement.insertAdjacentElement('beforeend', nodeCellElement)


  }

}


/**
 * 
 * @param {*} node 
 */
function attachEventToMagicCell(node) {
  node.addEventListener('click', function (e) {
    // add a active class to the clicked element
    console.log(this, e); // this é il nodo della dom in questo contesto - e é l'evento triggerato
    this.classList.toggle('bg-active');
    // print into the console the cell number
    console.log(this.innerText);
    this.innerText = '🍄'
  })
}

/**
 * 
 * @param {*} numb 
 * @param {*} size 
 * @returns 
 */
function generateMagicCell(numb, size) {
  const nodeCellElement = document.createElement('div')
  nodeCellElement.classList.add('cell')
  nodeCellElement.innerText = numb
  nodeCellElement.style.width = `calc(100% / ${Math.sqrt(size)})`

  return nodeCellElement;
}





