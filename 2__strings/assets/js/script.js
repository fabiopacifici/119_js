console.log('Hello, world!');


/* Strings - **sequence** of characters 
- piece of text inside ''
- piece of text indede ""
- piece of text inside `` (backtick)

*/


const userName = "Fabio";
console.log(userName);

const userLastName = "Pacifici"

console.log(userName + userLastName); // FabioPacifici
console.log("Fabio" + "Pacifici");

console.log(userName + ' ' + userLastName); // Fabio Pacifici

console.log('10' + '10');
console.log(10 + '10');




/* Text interpolation (template literal) */

console.log(`
Ciao my name is ${userName} ${userLastName}
`);



/* Numbers */

console.log(123);
console.log(123 + 12);
console.log(2*2);
console.log(12 / 2);


const sum = 123 + 123
console.log(sum);

console.log(sum / 2 );



/* Prompt */

const user = prompt('Type your name here 👇');
console.log(user); 




