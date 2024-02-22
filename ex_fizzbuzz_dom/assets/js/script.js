console.log('Hello, world!');


const containerEl = document.querySelector('.container')

// Scrivi un programma che stampi in console i numeri da 1 a 100
for (let i = 1; i <= 100; i++) {
  
  //console.log(i % 3 === 0 && i % 5 === 0);
  let markup;
  let markupElement = document.createElement('div');
  markupElement.classList.add('box')

  //console.log(markupElement); 
  if (i % 15 === 0) {
    // per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
    console.log('FizzBuzz');
    //markup = `<div class="box">FizzBuzz</div>`
    markupElement.append('FizzBuzz')
    markupElement.classList.add('bg-blue')
    markupElement.style.backgroundColor = 'blue';
    //console.log(markupElement, 'it works');
  } else if (i % 3 === 0) {
    // per i multipli di 3 stampi “Fizz”
    console.log('Fizz');
    //markup = `<div class="box">Fizz</div>`
    markupElement.append('Fizz')
    markupElement.classList.add('bg-red')
    markupElement.style.backgroundColor = 'red';
  
  } else if (i % 5 === 0) {
    // per i multipli di 5 stampi “Buzz”
    console.log('Buzz');
    //markup = `<div class="box">Buzz</div>`
    markupElement.append('Buzz')
    markupElement.classList.add('bg-pink')
    markupElement.style.backgroundColor = 'deeppink';

  } else {
    // print the number
    console.log(i);
    //markup = `<div class="box">${i}</div>`
    markupElement.append(i)

  }

  //containerEl.innerHTML += markup

  containerEl.append(markupElement)



}








/** 
Tools
- const/let
- log
- %
- if/elseif/else
- querySelector/getElementById
- for loop
- ++



**BONUS 1:**
Crea un container nel DOM , aggiungendo (attraverso la funzione `append()`) un elemento html con il numero o la stringa corretta da mostrare.

**BONUS 2:**
Applica stili differenti agli elementi aggiunti al DOM nel *BONUS 1*, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz.

x bonus:
- createElement
- appen()
- classList.add()

*/