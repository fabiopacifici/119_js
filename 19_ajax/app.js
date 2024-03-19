/* 
// converts a JSON string into an object
let obj = JSON.parse('{ "name":"John", "age":30, "city":"New York"}');
console.log(obj, '{ "name":"John", "age":30, "city":"New York"}');

// Turn a javascript object into a JSON string
let jsonString = JSON.stringify({ name: 'luke', age: 321 })
console.log(jsonString); */
const { createApp } = Vue
createApp({
  data() {
    return {
      randomSentence: null
    }
  },
  methods: {
    callApi() {
      axios
        .get('https://flynn.boolean.careers/exercises/api/random/sentence')
        .then(response => {
          // log the response first to check its content
          // find the data you need inside the .data property of the response
          console.log(response);

          this.randomSentence = response.data.response
        })
    }
  },
  mounted() {
    // Can do the ajax call here directly or using a method
    /*
     axios
        .get('https://flynn.boolean.careers/exercises/api/random/sentence')
        .then((response) => {
          console.log(response.data.response);
          this.randomSentence = response.data.response
        })
    */
    this.callApi()

  }
}).mount('#app')