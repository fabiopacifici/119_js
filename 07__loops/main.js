
// Print the result of a multiplication between 10 and the first 100 numbers
/* console.log(10 * 1);
console.log(10 * 2);
console.log(10 * 3);
console.log(10 * 4);
console.log(10 * 5);
console.log(10 * 6);
console.log(10 * 7);
console.log(10 * 8);
console.log(10 * 9);
console.log(10 * 10); */


'Ciao' // sequence of characters c,i,a,o


/* For Loop 
- for 
- (counter; condition; increment/decrement)
- { //your code here}


⚡ Make sure to add the increment/decrement to avoid infinite loops


for (let i = 0; i < 10; 💥) {
 // code body

}

// Infinite loop
// i = 0
// i < 10 ? true -> run the code inside the {}
//0 < 10 ? true -> run the code inside the {}
//0 < 10 ? true -> run the code inside the {}
//0 < 10 ? true -> run the code inside the {}
//0 < 10 ? true -> run the code inside the {}
//0 < 10 ? true -> run the code inside the {}


*/


// loop forward with the increment operator
for(let i = 0; i <= 10; i++) {
  // code to run
  console.log(i *10);
}

// loop backward with the decrement operator
for (let i = 100; i > 0; i--) {
  // code to run
  console.log(i);
}


console.log('Out of the loop');
// shortcut to incremente the value of a numeric variable
/* let i = 1;
i = i + 1;
 */



// 1. i = 0 ? 0 < 3 = true -> run the code | i++ = 1
// 2. i = 1 ? 1 < 3 = true -> run the code | i++ = 2
// 3. i = 2 ? 2 < 3 = true -> run the code | i++ = 3
//....
// 4. i = 3 ? 3 < 3 = false -> exit the loop


/* Loop + DOM */


const ulElement = document.querySelector('.list')
for(let i = 1; i <= 49; i++){

  console.log(i); // first log the variable i (your counter)
  const markupListItem = `<li class="box box-${i}">${i}</li>`
  console.log(markupListItem);

  // innerHTML +=
  ulElement.innerHTML += markupListItem


  // more permormant
  //ulElement.insertAdjacentHTML('beforeend', markupListItem);

}