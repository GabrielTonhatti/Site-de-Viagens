const slides1 = document.querySelectorAll('.card-mais-visitados');
const slides2 = document.querySelectorAll('.card-ferias')
const nextButton1 = document.querySelector('.button--next-1');
const prevButton1 = document.querySelector('.button--prev-1');
const nextButton2 = document.querySelector('.button--next-2');
const prevButton2 = document.querySelector('.button--prev-2');
let windowWidth = window.innerWidth;

console.log(slides1)
console.log(slides2)
const lastSlideIndex = slides1.length - 1
let currentSlideIndex = 0;
let currentSlideIndex2 = 0;

if (windowWidth < 768) {
    const slidesMaisVisitados = correctSlideIndex => {

        slides1.forEach(slide => slide.classList.remove('active'));
        slides1[correctSlideIndex].classList.add('active');

    }

    nextButton1.addEventListener('click', () => {

        const correctSlideIndex = currentSlideIndex === lastSlideIndex ? currentSlideIndex = 0 : ++currentSlideIndex;

        slidesMaisVisitados(correctSlideIndex);
    });

    prevButton1.addEventListener('click', () => {

        const correctSlideIndex = currentSlideIndex === 0 ? currentSlideIndex = lastSlideIndex : --currentSlideIndex;

        slidesMaisVisitados(correctSlideIndex);

    })

    const slidesFerias = correctSlideIndex => {

        slides2.forEach(slide => slide.classList.remove('active'));
        slides2[correctSlideIndex].classList.add('active');

    }

    nextButton2.addEventListener('click', () => {

        const correctSlideIndex = currentSlideIndex2 === slides2.length - 1 ? currentSlideIndex2 = 0 : ++currentSlideIndex2;

        slidesFerias(correctSlideIndex);
    });

    prevButton2.addEventListener('click', () => {

        const correctSlideIndex = currentSlideIndex2 === 0 ? currentSlideIndex2 = slides2.length - 1 : --currentSlideIndex2;

        slidesFerias(correctSlideIndex);

    })
}

if (windowWidth >= 768 && windowWidth < 1440) {
    // Mais visitados
    slides1[1].classList.add('active');

    // Ferias
    slides2[1].classList.add('active');


} else if (windowWidth >= 1440 && windowWidth < 2560) {
    // Mais visitados
    slides1[1].classList.add('active');
    slides1[2].classList.add('active');

    // Ferias
    slides2[1].classList.add('active');
    slides2[2].classList.add('active');


} else if (windowWidth >= 2560) {
    // Mais visitados
    slides1[1].classList.add('active');
    slides1[2].classList.add('active');
    slides1[3].classList.add('active');

    // Ferias
    slides2[1].classList.add('active');
    slides2[2].classList.add('active');
    slides2[3].classList.add('active');


}