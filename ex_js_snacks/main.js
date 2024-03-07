/* 

SNACK 3
Crea un array di oggetti che rappresentano degli animali.
Ogni animale ha un nome, una famiglia e una classe.
Es:
[
  { nome: 'leone', famiglia: 'felidi', classe: 'mammiferi' },
  { nome: 'cane', famiglia: 'canidi', classe: 'mammiferi' },
  { nome: 'gallina', famiglia: 'fasianidi', classe: 'uccelli' },
]
Crea un nuovo array con la lista dei mammiferi.


*/

const animals = [
  { name: "Lion", family: "Felidae", class: "Mammal" },
  { name: "Elephant", family: "Elephantidae", class: "Mammal" },
  { name: "Horse", family: "Equidae", class: "Mammal" },
  { name: "Dolphin", family: "Delphinidae", class: "Mammal" },
  { name: "Hippopotamus", family: "Hippopotamidae", class: "Mammal" },
  { name: "Eagle", family: "Accipitridae", class: "Bird" },
  { name: "Frog", family: "Ranidae", class: "Amphibian" },
  { name: "Shark", family: "Lamnidae", class: "Fish" },
  { name: "Crocodile", family: "Crocodylidae", class: "Reptile" },
  { name: "Spider", family: "Araneidae", class: "Arachnid" },
];


//const mammals = animals.filter(animal => animal.class === 'Mammal')

const mammals = animals.filter(function (animal) {
  return animal.class === 'Mammal';
})

console.log(mammals);



/* 



SNACK 4
Crea un array di oggetti che rappresentano delle persone.
Ogni persona ha un nome, un cognome e un’età.

Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e l’indicazione se può guidare, in base all’età.
  {
    name: 'Giovanni',
    lastname: 'Cattaneo',
    age: 25,
    canDrive: "Givanni Cannaneo puó guidare"
  },
  {
    name: 'Fabio',
    lastname: 'Pacifici',
    age: 17,
    canDrive: "Fabipo Pacifici non puó guidare"
  },


*/


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


console.log(people);

/* 

Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e l’indicazione se può guidare, in base all’età.
*/


const adults = people.map((person) => {
  if (person.age >= 18) {
    person.canDrive = `${person.name} ${person.lastname} can drive`
  } else {
    person.canDrive = `${person.name} ${person.lastname} cannot drive`
  }
  //console.log(person);
  return person
})


console.log(adults);



