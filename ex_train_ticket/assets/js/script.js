console.log('Hello, world!');

const discount_minor = 0.3;
const discount_senior = 0.5;
const price_per_km = 0.31; 
let discount_type = "standard price";
// - Add a prompt to get the km number from the user
const km = Number(prompt('type the km you want to do', '10'));
// - Add a prompt to get the age from the user
const age = Number(prompt('type you age', '10'));

//console.log(km, age);
// - Calculate the standard ticket price (km*0.21)
let ticket_price = km * price_per_km
//console.log(ticket_price);

// - IF user age is less than 18
if(age < 18) {
  // - apply a 20% discount
  //console.log(ticket_price * 0.2, 'apply 20% off');
  ticket_price = ticket_price - ticket_price * discount_minor
  discount_type = '20% off'

} else if( age > 65) {
  // - ELSE IF user age is greater than 65
  // - apply 40% discount
  //console.log(ticket_price * 0.4, 'apply 40% off');
  ticket_price = ticket_price - ticket_price * discount_senior
  discount_type = '40% off'

} 

// - Print the ticket price into the console for humans
const finalPrice = ticket_price.toFixed(2);

console.log(ticket_price.toFixed(2));

if(isNaN(finalPrice)){
  console.error(ticket_price.toFixed(2), 'Ticket price results as NaN');
  alert(' 😯 There is an error in your inputs make sure both are numbers')
} else {
  document.getElementById('results').innerHTML = ` Your final ticket price is: ${finalPrice} | ${discount_type}`
}




