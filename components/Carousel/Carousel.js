/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

let images = ['mountains', 'computer', 'trees', 'turntable'];

function Carousel() {
    const carouselWrap = document.createElement('div');
    carouselWrap.classList.add('carousel');
    
    const leftButton = document.createElement('div');
    leftButton.classList.add('left-button');
    leftButton.textContent = '<';
    carouselWrap.appendChild(leftButton);

    images.forEach((image) => {
        let img = document.createElement('img');
        img.setAttribute('src', `./assets/carousel/${image}.jpeg`);
        carouselWrap.appendChild(img);
    });
    
    const rightButton = document.createElement('div');
    rightButton.classList.add('right-button');
    rightButton.textContent = '>';
    carouselWrap.appendChild(rightButton);

    return carouselWrap;
}

const carouselContainer = document.querySelector('.carousel-container');
carouselContainer.appendChild(Carousel());
const leftButton = document.querySelector('.left-button');
const rightButton = document.querySelector('.right-button');

window.addEventListener('load', () => {
    const images = Array.prototype.slice.call(document.querySelectorAll('.carousel img'));
    let count = 0,
        max = images.length-1;

    images[count].style.display = 'block';
    
    leftButton.addEventListener('click', () => {
        images[count].style.display = 'none';
        count = (count<=0) ? max : count-=1;
        images[count].style.display = 'block';
    });

    rightButton.addEventListener('click', () => {
        images[count].style.display = 'none';
        count = (count<max) ? count+=1 : 0;
        images[count].style.display = 'block';
    });

});