console.log('test');
/* 
Consegna
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100. 
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

*/

// listen for a click event on a button to start the game
// - select the battle field DOM elemenb
// - select the button from the DOM
// - add the click event listener
//const cellsNumber = 100;


/* This is a function that invoke its self - also known as IIFE */
(function() {
  const battleFiled = document.getElementById('field')
  document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault()
    const level = getLevel(e)

    // When the button is clicked generate the battle field with 100 cells
    battleFiled.innerHTML = '';
    console.log('clicked');
    for (let i = 1; i <= level; i++) {
      // generate node cell
      const markupNode = generateNodeCell(i, level)

      attachEventToNode(markupNode);
      // add the node to the dom
      battleFiled.insertAdjacentElement('beforeend', markupNode)


    }

  })

})();

function getLevel(e) {
  // select the dom element
  console.log(e.target.level.value);

  return e.target.level.value
  // read the value
  // return it
}

function generateNodeCell(numb, level = 100) {
  const markupNode = document.createElement('div')
  markupNode.classList.add('cell')
  markupNode.style.width = `calc(100% / ${Math.sqrt(level)})`
  markupNode.innerText = numb;
  console.log(markupNode);
  return markupNode
}

function attachEventToNode(node) {
  // when a cell is clicked add a background color using a class
  node.addEventListener('click', function () {
    this.classList.toggle('bg-active')
    // then print the cell number into the console
    console.log(this.innerText);
  })
}

