console.log('Hello, world!');


/* Array -> Lista 

- Elemento 1
- Elemento 2
- Elemento 3
- Elemento 4
- Elemento 5

Syntax:
- const/let (optional)
- []
- , (mandatory)


*/


const userName = 'Grogu'; // string
// array of strings
const tv = ['Mandalorian', 'Starwars', 'Lucifer']
console.log(tv);


const userData = ['Grugu', 40, 'green', 'mute', 2, true, true, ['Luke', 'Mando']]

console.log(userData);

console.log(userData.length); //8

// get an element from an array

console.log(userData[7][2])
const groug_friends = userData[7]

console.log(groug_friends[2]);



// add elements to the array

tv.push('scrubs')

console.log(tv);

tv.unshift('matrix')


console.log(tv);




/* Array + loops */

//              0                 1           2     
const shows = ['Mandalorian', 'Starwars', 'Lucifer']

shows[0] // Mandalorian
shows[1] // Starwars
shows[2] // Lucifer
shows[3] // undefined
console.log(shows.length); // 3


// Loop with array (sequence of elements)

for (let index = 0; index <= shows.length; index++) {
  const singleShow = shows[index];
  console.log(singleShow);
}


// Loop with strings (sequence of characters)

/* const fullName = 'Baby yoda'

console.log(fullName[0]);

for (let index = 0; index <= fullName.length; index++) {
  const character = fullName[index];
  console.log(character);
}
 */



/* 

Array+lops

Challenge 1: Somma degli Elementi di un Array
Descrizione: Inizializza una variabile somma con un valore di 0. Cicla attraverso l'array numeri e aggiungi ogni elemento a somma.
*/

let numbers = [1, 2, 4, 5]
let sum = 0;

// write your code 
for (let i = 0; i < numbers.length; i++) {
  const numb = numbers[i];
  console.log(numb);
  sum += numb
}

console.log(sum);


/* 

Challenge 2: Trova il Numero Più Grande
Descrizione: Inizializza una variabile piùGrande con il primo elemento dell'array numeri. Cicla attraverso l'array e aggiorna piùGrande se trovi un numero maggiore.

*/

let numbs = [2, 3, 5, 10, 7];
let largest = numbs[0]

// You code here 
for (let i = 0; i < numbs.length; i++) {
  const numb = numbs[i];
  
  if(numb > largest) {
    largest = numb
  }
}

console.log(largest);






/*
Challenge 3: Verifica la Presenza di un Elemento
Descrizione: Inizializza una variabile trovato con false. Cicla attraverso l'array elementi e imposta trovato su true se l'elemento è presente nell'array.

*/

let elementi = ['mela', 'banana', 'arancia'];
let elemento = 'banana';
let trovato = false;

// your code here
console.log(trovato); // L'output sarà true se l'elemento è stato trovato, altrimenti false.




/* More Challenges 

Challenge 4: Conta le Occorrenze di un Elemento Specifico
Descrizione: Inizializza una variabile conteggio con 0. Cicla attraverso l'array elementi e aumenta conteggio ogni volta che trovi l'elemento.


*/ 

let elements = ['mela', 'banana', 'mela', 'arancia', 'mela'];
let element = 'mela';
let count = 0;

// your code here

console.log(count); // L'elemento 'mela' si verifica 3 volte nell'array.



/*
Challenge 5: Inverti un Array
Descrizione: Crea un nuovo array inverso. Cicla attraverso l'array originale dalla fine all'inizio, e inserisci ogni elemento in inverso.


*/


// Write your starting points and figure out what to do.