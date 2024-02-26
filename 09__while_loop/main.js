/* For loop vs While loop 


- while
- (condition)
- {
  // code here 

  // instruction to end the loop
}


while (condition) {

  
}


*/


//1. counter
//2. condition
//3. instruction to end the for loop
for (let i = 0; i < 10; i++) {
  console.log(i);
}

// 1.counter
let i = 0;

// 2.condition
while (i < 10) {
  // your code here
  console.log(i);


  // 3.instruction to end the for loop
  i++ // if this is omitted you end in an infinite loop
}


// While without counter
/* let play = true;

while (play) {
  

  // your code here
  alert(`Your lucky number is: ${Math.random() * 10}`)

  // instruction to end the loop
  play = confirm('do you want to keep playing? confirm to continue, cancel to quit the game')
  console.log(play);
  
} */



/* Do-while 

- do
- { // code here}
- while 
- (condition)

do {
  
} while (condition);

*/


let wantToPlay = false

do {

  // your code here
  alert(`Your lucky number is: ${Math.random() * 10}`)

  // instruction to end the loop
  wantToPlay = confirm('do you want to keep playing? confirm to continue, cancel to quit the game')
  console.log(wantToPlay);
  
} while (wantToPlay);