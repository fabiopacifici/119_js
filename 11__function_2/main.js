
/* for (var index = 0; index < 10; index++) {
  console.log(index);
} 
console.log(index); // 10

*/

for (let index = 0; index < 10; index++) {
  console.log(index);
}



//console.log(index); //reference error

/* if (index === 10) {
  //console.log(index); //reference error
  console.log(index);
}
 */

// Function scope

function name(params) {
  // function (local) scope 
  // applies to var,let,const
}

// Block scope
// applies only to let,const (var excluded)

/* if (condition) {
  // block scope 


} else {
  // block scope 

}
 */

/* for (let index = 0; index < array.length; index++) {
  const element = array[index];
  // block scope 

} */
/* 
while (condition) {
  // block scope 
} */


/* Quiz */

a = 0; // glebal
b = "buongiorno" // global
var c = "ciao"; // global

saluta();
// a is 0
// b is 1
// ciao

// a is 0
// b is buongiorno

console.log("a is " + a);
console.log("b is " + b);

function saluta() {
  var d = "asd"; //function scope
  console.log("a is " + a); // <--- ? a is 0
  var b = a + 1; // function scope
  console.log("b is " + b); // <--- ? b is 1
  console.log(c); // <--- ciao
}



/* 

function name(params) {
  // function scope

  if(12 > 0){
    // block scope

  }
} */