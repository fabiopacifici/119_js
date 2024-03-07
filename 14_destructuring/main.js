
/* Destructuring objects */
const person = {
  name: 'Grogu',
  age: 2,
  color: 'green'
}
const {age} = person

/* const color = person.color;
const age = person.age;
const name = person.name; */

console.log(age);



/* Destucturing Array */


const names = ['Luke', 'Mark', 'Stephan'];

const [, , stephan] = names
//console.log(luke);
//console.log(mark);
console.log(stephan);


/* Spred operator */





const people = [
  {
    name: 'Giovanni',
    lastname: 'Cattaneo',
    age: 25,
  },
  {
    name: 'Giacomo',
    lastname: 'Marongiu',
    age: 23,
  },
  {
    name: 'Fabio',
    lastname: 'Pacifici',
    age: 25,
  },
  {
    name: 'Leandra',
    lastname: 'Musto',
    age: 15,
  },
  {
    name: 'Alessia',
    lastname: 'Vozzo',
    age: 8,
  },
];


people.forEach(person => {
  const {name, lastname, age} = person

  const markup = `<div>
    <h2>${name} ${lastname}</h2>
    <div>Age: ${age}</div>

  </div>`

});

/* Rest parameter */

console.log('--------- REST PARAMETER -------');


function sum(...params) {
  
  console.log(params); // [1, 2, 4, 6, 76, 100]
  //console.log(numb_1 + numb_2)

  let sum = 0;
  params.forEach(param => {
    sum += param 
  })
  return sum;
}

const result = sum(1, 2, 4, 12, 344, 123)
console.log(result);


const palla = { name: 'palla', peso: 50 };
console.log(palla);
const newPalla = { ...palla, colore: 'blue' };
console.log(newPalla);
//{name: "palla", peso: 50, colore: "blue"}



const movies = ['Signore degli anelli', 'Dune', 'Starwars', 'Matrix']
console.log(movies);
const newMovies = [...movies, 'Avatar', 'Imitation game']
console.log(newMovies);


