const { createApp } = Vue

createApp(
  // Options object
  {
    // data option
    data() {
      return {
        // Your properties here
        message: 'Hello Vue!',
        content: 'lorem ipsum lorem',
        username: 'Fabio',
        cssClass: 'bg-red',
        counter: 0
      }
    },

    // methods option 

    methods: {

      // All your functions here

      greetings(){
        console.log('it works');
        console.log(this.message);
      }

    }
  }

).mount('#app')
