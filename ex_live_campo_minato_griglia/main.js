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


DAY 2:


Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: i funghi magici.

// Generare massimo 16 funghi in questi range relativi al livello scelto
// 100 -> min: 1 max: 100 | Totale funghi 16
// 81 -> min: 1 max: 81 |  Totale funghi 16
// 49 -> min: 1 max: 49 |  Totale funghi 16

Attenzione: nella stessa cella può essere posizionato al massimo un fungo, perciò nell’array dei funghi non potranno esserci due numeri uguali.




*/


// SETUP
/* IIFE */

/**
 * Starts the game
 */
(function () {
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



function generateMushrooms(level) {

  const mushrooms = []

  while (mushrooms.length < 16) {
    const randomNumber = getRndInteger(1, level);
    if (!mushrooms.includes(randomNumber)) {
      mushrooms.push(randomNumber)
    }

  }

  return mushrooms;
}


function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


/**
 * 
 * @param {*} fieldDomElement 
 * @param {*} level 
 */
function generateMagicField(fieldDomElement, level) {
  // Empty the magic filed before adding new cells
  fieldDomElement.innerHTML = '';

  // generate mushrooms
  const mushrooms = generateMushrooms(level)
  console.log(mushrooms.sort((a, b) => a - b));

  // generate the magic field 🍄
  for (let i = 1; i <= level; i++) {

    // generate the single cell
    const nodeCellElement = generateMagicCell(i, level);

    console.log(nodeCellElement);


    if (mushrooms.includes(i)) {
      nodeCellElement.querySelector('span').innerText = '🍄'
    }


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
  node.addEventListener('click', handleClick)
}

function handleClick(e) {
  // add a active class to the clicked element
  console.log(this, e); // this é il nodo della dom in questo contesto - e é l'evento triggerato
  this.classList.toggle('bg-active');
  // print into the console the cell number
  if (this.querySelector('span').innerText == '🍄') {
    this.classList.remove('bg-active')
    this.style.backgroundColor = 'red';
    this.querySelector('span').style.display = 'inline'
    // end game
    gameOver();
  }

  // Check if the user has clickd on the last available cell based on the field generated
  const totalCells = document.querySelectorAll('.cell').length
  const clickedCells = document.getElementsByClassName('bg-active').length

  if (totalCells - clickedCells === 16) {
    gameOver();
  }



}

function gameOver() {
  console.log('game over');
  // find the score
  const score = document.getElementsByClassName('bg-active').length

  console.log('your score: ', score);
  // prevent the click to all cell
  const cells = document.querySelectorAll('.cell');

  for (let i = 0; i < cells.length; i++) {
    const node = cells[i];
    node.removeEventListener('click', handleClick)
    // Show all mushrooms when the game ends
    const spanEl = node.querySelector('span');
    if (spanEl.innerText === '🍄'){
      node.style.backgroundColor = 'red';
      spanEl.style.display = 'inline';
    }

  }
  const gameOverElement = document.getElementById('game-over')
  gameOverElement.style.display = 'block';
  gameOverElement.querySelector('span').innerText = score;

  

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

  const spanEl = document.createElement('span')
  spanEl.innerText = numb

  nodeCellElement.appendChild(spanEl)
  nodeCellElement.style.width = `calc(100% / ${Math.sqrt(size)})`

  return nodeCellElement;
}