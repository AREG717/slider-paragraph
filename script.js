const images = document.querySelectorAll('.container img');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const p = document.querySelectorAll('.container p')

console.log(p)

let current = 0;
let currentp = 0;

const nextSlide = () =>{

    images[current].classList.remove('active');
    current++;

    if (current === images.length) {
        current = 0;
    }

    images[current].classList.add('active');

    p[currentp].classList.remove('active');
    currentp++;

    if (currentp === p.length) {
        currentp = 0;
    }

    p[currentp].classList.add('active');
};

next.addEventListener('click', nextSlide)

prev.addEventListener('click', () =>{
    images[current].classList.remove('active');
    current--;

    if (current < 0) {
        current = images.length - 1 ;
    }

    images[current].classList.add('active');

    p[currentp].classList.remove('active');
    currentp--;

    if (currentp < 0) {
        currentp = p.length - 1 ;
    }

    p[currentp].classList.add('active');
})

setInterval(nextSlide,3000)
