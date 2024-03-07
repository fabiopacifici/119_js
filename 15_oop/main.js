/* OOP Intro 

- object - rappresenta un entita del mondo reale (animale, perosona, computer, tastiera, macchina)
- object literal - forma letterale di oggetto

*/


// Object literal
const cat = {
  name: 'Antifa',
  weight: 2,
  race: 'bombay',
  number_of_legs: 4,
  age: 2,

  run() {
    console.log('I am running');
  },

  mow() {
    console.log(`I am ${this.name} - mawing`);
  }
}

cat.mow()

const cat_2 = {
  name: 'Anakin',
  weight: 4,
  race: 'bombay',
  number_of_legs: 4,
  age: 3.5,

  run() {
    console.log('I am running');
  },

  mow() {
    console.log('I mawing');
  }
}

cat_2.mow()


const person = {
  name: '',
  height: '',
  weight: '',
  speack() { },
  breath() { },
  run() { },


}

// OOP Class constructor -> model 

// 🤓 es5 
/* function Person(name, height) {
  this.name = name;
  this.height = height
}

const fabio = new Person('Fabio', 170)
const stanislav = new Person('Stanislav', 170)
const givanni = new Person('Giovanni', 170)
const arianna = new Person('Arianna', 170)

console.log(fabio, stanislav, givanni, arianna);


const students = [
  new Person('Fabio', 170),
  new Person('Stanislav', 170),
  givanni,
  arianna

]

console.log(students); */

function Animal(name, race) {
  this.name = name
  this.race = race

}


const anakin = new Animal('Anakin', 'European');
const antifa = new Animal('Antifa', 'Bombay');



Animal.prototype.walk = function () {
  console.log('can walk');
}

Animal.prototype.color = 'black';

anakin.walk();
antifa.walk()


console.log(anakin.color);
console.log(antifa.color);


console.log(anakin, antifa);


/*********************
 * es6 syntax class declaration
- class: parola chiave da usare (riservata a js)
- Product: nome della classe da creare
- {
  // define the model here 
}
************************/

/* 
function Product(name, price, description, image){
  this.name = name;
  this.price = price;
  this.description = description;
  this.image = image;
} 

// updated to 👇

*/

class Laptop {

  constructor(name, price, description, image) {
    this.name = name;
    this.price = price;
    this.description = description;
    this.image = image;
  }

  on() {
    console.log('Booting...', this.name);
  }


}


const laptop = new Laptop('Lenovo laptop', 2000, 'A lenovo laptop', 'https://picsum.photos/400/200')

console.log(laptop);

// 1000k lines of code

const asus_laptop = new Laptop('Asus laptop', 1000, 'Asus laptop', 'https://picsum.photos/400/200')
console.log(asus_laptop);


/* Inheritance 

// Parent class Product
- product class
// child classes 
- a computer is a product
- a bottle in a product 
- a pair of sneakers are a product

// parent class Person 
- person class
// child class
- an employeee is a person
- an user is a person

*/


class Person {

  constructor(name, lastname, height, weight) {
    this.name = name;
    this.lastname = lastname;
    this.height = height;
    this.weight = weight;
  }

  fullName() {
    return `${this.name} ${this.lastname}`;
  }

}


const luke = new Person('Luke', 'Skywalker', 170, 70);

console.log(luke);


class Employee extends Person {
  constructor(name, lastname, height, weight, role, salary) {
    super(name, lastname, height, weight)
    this.role = role;
    this.salary = salary;
  }


  /* Polymorph method */
  fullName() {
    return `I am ${this.name} ${this.lastname}`;
  }

  getEarnings() {
    return `I earn  as ${this.role} the following money 💰 ${this.salary}` 
  }

}

const grogu = new Employee('Grogu', 'Skywalker', 35, 1, 'fullstack', 100)

console.log(grogu);

console.log(luke.fullName());


console.log(grogu.fullName());
console.log(grogu.getEarnings());


/* 
Import/Export 

// Export
- named exports
- default exports

// Import
- named import
- default import

*/

//(moved in helpers.js)
//export const username = 'fabio';

// main.js
import { username, calcAge } from "./helpers.js";

console.log(username);

calcAge()




