const { createApp } = Vue
const persons = [
  {
    name: 'Fabio',
    lastname: 'Rossi'
  },
  {
    name: 'Fabio',
    lastname: 'Rossi2'
  },
  {
    name: 'Fabio',
    lastname: 'Rossi4'
  }, {
    name: 'Fabio',
    lastname: 'Rossi5'
  }
]
createApp({

  data() {
    return {
      canAccess: true,
      age: 44,
      message: 'it works',
      movies: ['Avatar', 'Matrix', 'Ritorno al futuro'],
      persons: [
        {
          name: 'Fabio',
          lastname: 'Rossi'
        },
        {
          name: 'Fabio',
          lastname: 'Rossi2'
        },
        {
          name: 'Fabio',
          lastname: 'Rossi4'
        }, {
          name: 'Fabio',
          lastname: 'Rossi5'
        }
      ],

    }
  },
  methods: {

    printData(){
      console.log(this.persons);
      console.log(this.message);
      console.log(this.canAccess);
      console.log(this.age);
      console.log(this.movies);


    }

    
  }

}).mount('#app')

console.log(persons);