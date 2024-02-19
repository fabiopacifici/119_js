console.log('test');
// Primitives
console.log(null);
console.log( typeof null);
console.log( typeof undefined);
console.log(typeof "this is a text");
// strings
console.log('This Is A string'.toLowerCase()); //this is a string
console.log("this is a string".length); //16
console.log(`This is a string`);


// strings concatenation
// + operator 
console.log("This " + "is Fabio");
console.log("This" + " is Fabio");
console.log(`This is Fabio ${5 + 5}`); // text interpolation - template literal

const full_name = 'Fabio Pacifici';
console.log(`This is ${full_name}`);
console.log('This is ' + full_name);


// numbers & operators
console.log(123);

// sum
console.log(23 + 33);

// subtraction
console.log(40 - 20);

// multiplication
console.log(4 * 4);

// division
console.log(16 / 4);


// boolean

console.log(true); // true
console.log(false); // fale



// Comparison operators

// equal to ==

console.log(10 == 10); // true

// not equal operator

console.log(5 != 10); // true
console.log(5 != 5); // false




// equal of value and type ===
console.log(typeof 10); // number
console.log(typeof "10"); // string

console.log(10 == '10'); // Are the values equal? true
console.log(10 === '10');  // Are the values and the data types equal? false

// not equal of value and type !==
console.log(5 !== 5); // false
console.log('5' !== 5); // true


