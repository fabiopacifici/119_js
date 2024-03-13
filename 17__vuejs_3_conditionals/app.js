console.log('it works');

const { createApp } = Vue
createApp(
  {
    data() {
      return {
        isCool: false,
        canDo: 'swimm'        
      }
    }
  }
).mount('#app')