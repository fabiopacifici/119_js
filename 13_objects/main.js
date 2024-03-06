console.log('test');

// Object literal
const person = {
  name: 'Fabio',
  age: 44,
  hat: {
    color: 'blue',
    type: 'snapback'
  },
  colors: ['red', 'blue']
}

console.log(typeof person);
console.log(person);


// 👉 Read


// dot notation
console.log(person.name);
// square brackets notation
console.log(person['name']);

console.log(person.hat);

console.log(person.colors[0]);


// Update the a property

person.name = person.name + 'Fabio';
console.log(person);

person.name = 'Mario';
console.log(person);

person.name = []

console.log(person);


person['age'] = 43
console.log(person);


/* Objects */

const arianna = {
  name: 'Arianna',
  lastname: 'Salvini',
  age: ''
}

const lea = {
  name: 'Leandra',
  lastname: 'Musto',
  age: ''
}



/* For in loop 
- for 
- (let key in object)
- {//your code here}

*/


const palla = {
  "prezzo": 12,
  "tipo": "pallina da golf",
};


for (let key in palla) {
  //console.log(key, palla);
  //console.log(palla.key); //undefined
  //console.log(palla[key]);
  // take the value of the given key
  const value = palla[key]
  console.log(value);
}


// Risultato atteso: 
// 12
// pallina da golf
// non per forza in questo ordine



/* Complex data type */

const students = [

  {
    name: 'Leandra',
    lastname: 'Musto',
    age: 25
  },
  {
    name: 'Alessia',
    lastname: 'Vozzo',
    age: 25
  },
  {
    name: 'Arianna',
    lastname: 'Salvini',
    age: 25
  },
  {
    name: 'Andrea',
    lastname: 'De Bortoli',
    age: 25
  }
]

console.log(students);

// for loop to iterate over the array elements


for (let i = 0; i < students.length; i++) {
  const student = students[i];

  console.log(student.name);
  console.log(student.lastname);
  console.log(student.age);

  for (const key in student) {
    console.log(student[key]);
  }

}


const team = [
  {
    name: 'Wayne Barnett',
    role: 'Founder & CEO',
    image: 'wayne-barnett-founder-ceo.jpg',
  },
  {
    name: 'Angela Caroll',
    role: 'Chief Editor',
    image: 'angela-caroll-chief-editor.jpg',
  },
  {
    name: 'Walter Gordon',
    role: 'Office Manager',
    image: 'walter-gordon-office-manager.jpg',
  },
  {
    name: 'Angela Lopez',
    role: 'Social Media Manager',
    image: 'angela-lopez-social-media-manager.jpg',
  },
  {
    name: 'Scott Estrada',
    role: 'Developer',
    image: 'scott-estrada-developer.jpg',
  },
  {
    name: 'Barbara Ramos',
    role: 'Graphic Designer',
    image: 'barbara-ramos-graphic-designer.jpg',
  },
];