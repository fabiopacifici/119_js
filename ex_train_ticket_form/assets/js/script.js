// setup
// select all elements from the page
const fullNameElement = document.getElementById('full_name');
//console.log(fullNameElement);

const kmElement = document.getElementById('km');
//console.log(kmElement);

const ageElement = document.getElementById('age-group')
//console.log(ageElement);

const pricePerKilometer = 0.21;

const ticketElement = document.querySelector('.ticket');


document.querySelector('form').addEventListener('submit', function (e) {

  e.preventDefault();

  // read the value of the fullname imput
  //console.log(fullNameElement.value);
  const fullName = fullNameElement.value;
  // read the value of the km imput
  //console.log(ageElement.value);
  const age = ageElement.value
  // read the value of the age-group select
  //console.log(kmElement.value);
  const km = Number(kmElement.value)

  //console.log(fullName, age, km);

  // calculate the standard ticket price
  let discountType = 'Standard Price';
  let finalPrice = km * pricePerKilometer
  console.log(finalPrice);

  // IF ageGroud is equal to minor
  if (age === 'minor') {
    console.log('apply 20% off');
    finalPrice -= finalPrice * 0.2;
    discountType = '20% OFF'
  } else if (age === 'senior') {
    // ELSE IF ageGroup is equal to senrior 
    console.log('apply 40% off');
    finalPrice -= finalPrice * 0.4;
    discountType = '40% OFF'
  }



  console.log(finalPrice, discountType, fullName);


  // Generate the cp and wagon numbers
  const cpCode = Math.floor((Math.random() * 90000) + 50000);
  const wagonNumber = Math.floor((Math.random() * 10) + 1);


  console.log(cpCode, wagonNumber);

  const markup = `
    <div class="card">
      <div class="card-body">
        <div>Passenger Name: ${fullName}</div>
        <div>Discount: ${discountType}</div>
        <div>FinalPrice: ${finalPrice.toFixed(2)}</div>
        <div>CPCODE: ${cpCode} </div>
        <div>WAGON No. ${wagonNumber}</div>
      </div>
    </div>
  `

  // generate a single ticket 
  ticketElement.innerHTML = markup


  // this geneartes more tickets
  // ticketElement.insertAdjacentHTML('beforeend', markup)

})


/* 
buttonElement.addEventListener('click', function(){

  //console.log(fullNameElement.value);
  const fullName = fullNameElement.value;
  // read the value of the km imput
  //console.log(ageElement.value);
  const age = ageElement.value
  // read the value of the age-group select
  //console.log(kmElement.value);
  const km = Number(kmElement.value)

})
 */