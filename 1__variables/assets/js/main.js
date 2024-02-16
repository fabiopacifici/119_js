console.log('It works');


//console.log(message); // Cannot access 'message' before initialization
const message = 'It Works';
//console.log(ciao); // ciao is not a variable -> error
console.log(message); // message is a variable -> inside your console your find the text it Works.


/* Cont variables

Assignment operator: =
- const: cannot re-assign a value
- cannot use a const before its initialization (Cannot access 'message' before initialization)
*/

//message = "It's not working"


/* Let variables 

- let: can be reassigned
- cannot be used before initialization (ReferenceError: Cannot access 'userName' before initialization)
*/

//console.log(userName);
let userName = 'Fabio'

console.log(userName);

userName = 'Mario'

console.log(userName);


let userAge = 40;




/* var variables  
- can be reassigned
- can be used before initialization

Subject to hoisting (innalzamento)

*/

console.log(favouriteColor); // undefined
var favouriteColor = 'purple' // variable initialization
console.log(favouriteColor);




/* variables Declaration only 
 - var and let only
*/


let my_cat_name, my_cat_age;
console.log(my_cat_name, my_cat_age);

my_cat_age = '2'
my_cat_name = 'Antifa'
console.log(my_cat_name, my_cat_age);


var my_first_name, my_lastname;

console.log(my_first_name, my_lastname);

my_first_name = 'Fabio';
my_lastname = 'Pacific';
my_lastname = 123;

/* Quiz 1 */


// dichiarazione variabile
let miaStringa; // undefined

// assegnazione
miaStringa = 'ciao'; // ciao
// utilizzo/richiamo
//alert(miaStringa); // ciao

// assegnazione
miaStringa = 'arrivederci'; // arrivederci
// utilizzo/richiamo 
//alert(miaStringa); //arrivederci


console.log(document);
