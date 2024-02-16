// This is a single line comment

/* 

This is a multi
line 
comment

*/


/* Data Types  */

// strings
// a pice of text within single quotes or double quotes
// thisi is a string -> 'hi this is a string' 
// this is a string -> "hi i am a string too"


// Your first script

//document // is your html document

// write line - writes inside the html document (no tags used)
document.writeln('Hello World');

// shows an alert on the page (this blocks the page loading)
//alert('This is an alert')

// shows your text into the console (part of the inspector)
console.log('This is a console log');

// Select an element from the document 
document.getElementById('test');
// log the selected element (just in case)
console.log(document.getElementById('test').innerHTML);

// write inside the selected tag
document.getElementById('test').innerHTML = 'Hello World 😀';

// not equal to the getElementById('')
// document.getelementbyid(''); wrong
console.log(ciao);
