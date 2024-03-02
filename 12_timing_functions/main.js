console.log('it works');
console.log('it works');
console.log('it works');
console.log('it works');
console.log('it works');
console.log('it works');
console.log('it works');
console.log('it works');
console.log('it works');


/* Syntax 

setTimeout(callback, milliseconds)

*/
setTimeout(function () {

  console.log('Hi setTimeout');

}, 3000)


console.log('it works');
console.log('it works');
console.log('it works');
console.log('it works');
console.log('it works');
console.log('it works');
console.log('it works');
console.log('it works');
console.log('it works');


for (let i = 0; i < 10; i++) {
  console.log(i);

}

console.log('Hey its a syncronous js');




/* Set interval 
// repeats the callback every milliseconds
setInterval(callback, milliseconds)

*/

/* const clock  = setInterval(function(){
  console.log('Hi setInterval');
}, 1000) */


const clock = setInterval(logme, 1000)

function logme() {
  console.log('Hi setInterval');

}

clearInterval(clock)
