/* 
L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga.

*/


const firstWord = prompt('type a number')  
const secondWord = prompt('type a number')

console.log(firstWord.length, secondWord.length);

if (firstWord.length > secondWord.length) {
  console.log(`Shortest word: ${secondWord} - longer workd: ${firstWord}`);
} else if (secondWord.length > firstWord.length) {
  console.log(`Shortest word: ${firstWord} - longer workd: ${secondWord}`);

} else {
  console.log('Both words have the same lenght');
}