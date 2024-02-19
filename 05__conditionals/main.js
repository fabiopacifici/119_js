// boolean

//console.log(true); // true
//console.log(false); // fale



// Comparison operators

// equal to ==

//console.log(10 == 10); // true

// not equal operator

//console.log(5 != 10); // true
//console.log(5 != 5); // false




// equal of value and type ===
//console.log(typeof 10); // number
//console.log(typeof "10"); // string

//console.log(10 == '10'); // Are the values equal? true
//console.log(10 === '10');  // Are the values and the data types equal? false

// not equal of value and type !==
//console.log(5 !== 5); // false
////console.log('5' !== 5); // true


/* 
Conditional statement (control flow tools)
- if
- (condition) "add a conditional expression that returns true/false"
- { // your code here }
- else "optional"
- { // code here}
  
  if(condition) {
    // code here
  }


  if(condition) {
    // code here 
  } else {
    // code here 
  }


*/


// Only if 
if (true) {
  console.log('I am here');
}




// if/else
if (false) {
  //console.log('I am here');
} else {
  // code here 
  console.log('I am here else');
}

console.log('I am outside of the if');



// Conditional statement with expression

console.log(5 === '5'); // true

if (5 === '5') {
  console.log('5 is equal to 5');
} else {
  if (10 > 5) {
    console.log('10 is greater than 5');
  }
}

console.log(10 === 5 + 5);



/* if/else if/ else 
- if (condition)
- {//your code to execute if the condition is true}
- else if (condition_2) 
- {//your code to execute if the condition_2 is true} add as many as you need
- else {// code to run if none of the conditions above were true}


if (condition) {
  // code here 
} else if (condition_2) {
  // code here 
} else {
  // code here 
}

*/

console.log(100 > 50); // true
console.log(100 < 50); // false
console.log(5 > 1); // true



if (100 < 50) {
  // code here 
  console.log('here inside the if');
} else if (5 < 1) {
  // code here 
  console.log('here inside the else if');
} else {
  // code here 
  console.log('here inside the else');
}

console.log('Outside the if/else');


/* const userAge = prompt('type your age');
console.log(userAge);
console.log(userAge == 10); // true
console.log(userAge === 10); */


// AND
console.log(true && false); //false

// OR
console.log(true || false); //true

// not

console.log(!true); //false



/* Quiz */

const x = '3';

console.log(typeof x); // string
console.log(typeof 3); // number

console.log('3' === 3); //false
console.log('3' == 3); //true


if (x === 3) {

  // Questo blocco viene eseguito 
  // solo se x è uguale a 3

  alert("X è uguale a 3");

}



if (!true) {
  console.log('here not true');
}

if (!false) {
  console.log('here not false');
}


/* the Date object */

const old_date = new Date("2021-03-25")
const now = new Date();
console.log(old_date, typeof now);

console.log(now.getFullYear())
console.log(old_date.getFullYear())



/* The Math object */

console.log(Math);

console.log(Math.random()); // returns a decimal (float) number 


console.log(Math.floor(Math.random()) )
console.log(Math.ceil(Math.random()))



console.log(Math.floor(Math.random() * 10))
console.log(Math.ceil(Math.random() * 10) + 1 )


/* 

const/let (block scope)
var (no block scope) 

*/
const fullName = 'Fabio 123'

let userName = 'fabio'
let anotherVariable; // declaratyion only
if(true) {
  let catName = 'Antifa'
  console.log(userName);
  console.log(catName);
  anotherVariable = 'Another variable in the if'

  const fullName = 'Fabio PAcific'

  console.log(fullName);

}

console.log(fullName);

console.log(userName);
//console.log(catName); reference error
console.log(anotherVariable);


let validation = true;
const wordA = "Word A";
let wordB = "Word B";
let wordC = 'C';
if (validation === true) {
  let wordC = "Word C"; // /* 🔒 */
  //console.log(wordB);
  let wordB = "Word Custom B";
  console.log(wordA);
  console.log(wordB);
  console.log(wordC); 

}


console.log(wordA);
console.log(wordB);
console.log(wordC);


console.log(test);
let test = 'q1213'