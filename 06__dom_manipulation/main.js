
/* DOM Manupulation */




// getElementById('indentifier here')
console.log('hey');

const h1Element = document.getElementById('title')

console.log(typeof h1Element);



// querySelector('css selector here')
// ⚡ Selects only the first occurrence of the selection (only the first tag matching the selection)
const containerElement = document.querySelector('div')
console.log(containerElement);

// Add a new class with clasList.add()
containerElement.classList.add('mt-5')


console.log(containerElement.classList); //  container py-4 mt-5
console.log(containerElement.className);

// add a new class with className
containerElement.className = containerElement.className + ' fabio'
containerElement.className += ' fabio123'

// Multiple elements selected

//console.log(document.querySelectorAll('.container'));



// Element.style

// read the value
console.log(h1Element.style.color)

// write a new value
h1Element.style.color = 'red';
console.log(h1Element.style.color)

h1Element.style.backgroundColor = '#333';



/* Event Listeners 
- element
- addEventListner('event', action)
*/

// Functions declaration
function calcAge(){
  // your code here
  console.log('It works');
}

calcAge()
// Anoymous function <-- 

/* function () {

} */
// does NOT have a name - cannot call it as is.
// Anonymous function here cannot be re-used
/* h1Element.addEventListener('click', function () {

  console.log('It works on click');

}) */



h1Element.addEventListener('click', handleClick)



function handleClick() {

  console.log('It works on click');

}



document.querySelector('.container').addEventListener('click', handleClick)


/* Element.value */

const inputElement = document.getElementById('full_name')
console.log(inputElement.value);

document.querySelector('button').addEventListener('click', function(){

  console.log(inputElement.value);

})



/* ADD DOM ELEMENTS */

// read
console.log(document.querySelector('.red').innerHTML)

// write
document.querySelector('.red').innerHTML = document.querySelector('.red').innerHTML + ' Ciao'
//shortcut
document.querySelector('.red').innerHTML += ' Ciao'

console.log(document.querySelector('.red'));



const redElement = document.querySelector('.red') 
redElement.innerHTML = redElement.innerHTML + ' Ciao'
//shortcut
redElement.innerHTML += ' <p>Mio testo</p>';

console.log(redElement);

redElement.append('only text here')





/* Livecoding 2 

LiveCoding#2:
Al click di un pulsante, deve apparire un alert con un numero random
- button
- querySelector
- element.addEventListener()
- alert
- Math.random()

*/


// select the button on the page and save it into a varibable
const btnElement = document.querySelector('.btn')
// add a click event listener
btnElement.addEventListener('click', function(){
  // generate a random number
  const randomNumber = Math.random()

  // print the random number inside the alert
  alert(`it works ${randomNumber}`);
})
