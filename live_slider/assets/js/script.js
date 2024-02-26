console.log('Hello, world!');
/* 
- const/let
- for 
- document.querySelector()
- addEventListener()
*/


// SETUP
// get the images as an array
const slides = [
  '01.jpg',
  '02.jpg',
  '03.jpg',
  '04.jpg',
  '05.jpg',
];

let activeImage = 0;

const slidesElement = document.querySelector('.slides')

const prevElement = document.querySelector('.prev')
const nextElement = document.querySelector('.next')

console.log(slides, activeImage, slidesElement);


// generate the images dynamically into the slides dom element
// for loop


for (let i = 0; i < slides.length; i++) {
  const slide = slides[i];
  console.log(slide);

  const slideMarkup = `<img class="${i === activeImage ? 'active' : ''}" src="./assets/img/${slide}" alt="">`

  console.log(slideMarkup);

  slidesElement.insertAdjacentHTML('beforeend', slideMarkup);


}


// listen for the prev click
console.log(prevElement, nextElement);

prevElement.addEventListener('click', function () {
  console.log('slide to the previous image');

  activeImage--
  console.log(activeImage);

  if (activeImage < 0) {
    activeImage = slides.length - 1;
  }


  // change the active image 
  const currentImage = document.querySelector('img.active')
  console.log(currentImage);
  currentImage.classList.remove('active')
  // update the dom element with the active class

  // select the next slide from the rendered images
  const allSlids = document.querySelectorAll('.slides img')


  console.log(activeImage, slides, allSlids);

  console.log(allSlids[activeImage]);
  allSlids[activeImage].classList.add('active')

})

// listen for the next click

nextElement.addEventListener('click', function () {
  console.log('slide to the next image');


  activeImage++
  console.log(activeImage);
  console.log(activeImage > slides.length - 1);

  if(activeImage > slides.length - 1) {
    activeImage = 0;
  }

  // change the active image 
  const currentImage = document.querySelector('img.active')
  console.log(currentImage);
  currentImage.classList.remove('active')
  // update the dom element with the active class

  // select the next slide from the rendered images
  const allSlids = document.querySelectorAll('.slides img')


  console.log(activeImage, slides, allSlids);

  console.log(allSlids[activeImage]);
  allSlids[activeImage].classList.add('active')

})
