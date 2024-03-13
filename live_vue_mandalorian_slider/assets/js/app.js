const { createApp } = Vue
createApp(
  {
    data() {
      return {
        activeImage: 0,
        movie: {
          title: 'The Mandalorian',
          category: 'Action',
          length: 60,
          images: [
            'https://media.themoviedb.org/t/p/w500_and_h282_face/9zcbqSxdsRMZWHYtyCd1nXPr2xq.jpg',
            "https://media.themoviedb.org/t/p/w500_and_h282_face/qruRhG6jE5M8lWnW1AGOBxtdmCO.jpg",
            "https://media.themoviedb.org/t/p/w500_and_h282_face/lMu3y10KgIYtXFPeCMim3D8iihV.jpg",
            "https://media.themoviedb.org/t/p/w500_and_h282_face/aZ4fmjMUAhS6PWhVLDDfT0RAdNe.jpg",
            "https://media.themoviedb.org/t/p/w500_and_h282_face/ipv5e0SJLqJUIvlHPknR8gh3AZo.jpg"
          ]
        }
      }
    },
    methods: {
      prev() {
        console.log('pre image');
        this.activeImage--
        if(this.activeImage < 0){
          this.activeImage = this.movie.images.length - 1
        }
      },
      next() {
        console.log('next image');
        this.activeImage++
        if (this.activeImage === this.movie.images.length ) {
          this.activeImage = 0;
          
        }
      }
    },
    created(){

      console.log('This is a hook', this.movie);
      

    }
  }
).mount('#app')


const movies  = ['1231', '123', '45r345']
// 0
// 1
// 2

//activeImage++

//activeImage = 3

// movies[activeImage]
// movies[3] // undefined
lenght: 3