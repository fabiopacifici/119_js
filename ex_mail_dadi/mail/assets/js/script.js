console.log('Hello, world!');

/* 
Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.

*/



// set up (bonus)
const formElement = document.querySelector('form')


// create a list of email address and save in a variable (guestList)
const list = [
  'test@gmail.com',
  'grogu@gmail.com',
  'mando@gmail.com',
  'luke@gmail.com',
]
// ask to the user its email address with a prompt partecipantEmail
//const userEmail = prompt('type your email address') 
//const userEmail = 'grogu@gmail.com'
let canAccess = false;

// Check the guestList
// loop over the email list 
for (let i = 0; i < list.length; i++) {
  const email = list[i];
  console.log(email, userEmail, email === userEmail);
  if (email === userEmail) {
    //console.log('Found');
    canAccess = true;
    // Stop the loop to avoid unnecessary values
    break;
  }
}

console.log(list.includes(userEmail))


// 1. false -> else => canAccess = false
// 2. true -> if => canAccess = true
// 3. false -> else => canAccess = false
// 4. false -> else => canAccess = false



  // check if the given email is present  
let message;
  if (canAccess) {
    console.log('welcome', userEmail);
    message = 'Welcome to the Party 🎉'
  } else {
    console.log('go home');
    message = 'Sorry, no invite no party 😭'
  }

  document.querySelector('h1').innerHTML = message


// bonus
/* formElement.addEventListener('submit', function (e) {

  e.preventDefault();
  console.log(e.target.email.value);


  // check the guest list

  const userEmail = e.target.email.value;

  for (let i = 0; i < list.length; i++) {
    const email = list[i];
    console.log(email, userEmail, email === userEmail);
    if (email === userEmail) {
      //console.log('Found');
      canAccess = true;
      // Stop the loop to avoid unnecessary values
      break;
    }
  }


  console.log(canAccess);
  if (canAccess) {
    console.log('welcome', userEmail);
    message = 'Welcome to the Party 🎉'
  } else {
    console.log('go home');
    message = 'Sorry, no invite no party 😭'
  }

  document.querySelector('h1').innerHTML = message

}) */
