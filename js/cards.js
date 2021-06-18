const slides = document.querySelectorAll('.card-mais-visitados');
const nextButton = document.querySelector('.button--next-1');
const prevButton = document.querySelector('.button--prev-1');
let windowWidth = window.innerWidth;

console.log(slides)
const lastSlideIndex = slides.length - 1
let currentSlideIndex = 0;

if (windowWidth < 768) {
    const manipulateSlideClasses = correctSlideIndex => {

        slides.forEach(slide => slide.classList.remove('active'));
        slides[correctSlideIndex].classList.add('active');

    }

    nextButton.addEventListener('click', () => {

        const correctSlideIndex = currentSlideIndex === lastSlideIndex ? currentSlideIndex = 0 : ++currentSlideIndex;

        manipulateSlideClasses(correctSlideIndex);
    });

    prevButton.addEventListener('click', () => {

        const correctSlideIndex = currentSlideIndex === 0 ? currentSlideIndex = lastSlideIndex : --currentSlideIndex;

        manipulateSlideClasses(correctSlideIndex);

    })

}

if (windowWidth >= 768 && windowWidth < 1440) {
    slides[1].classList.add('active');
} else if (windowWidth >= 1440 && windowWidth < 2560) {
    slides[1].classList.add('active');
    slides[2].classList.add('active');
} else if (windowWidth >= 2560) {
    slides[1].classList.add('active');
    slides[2].classList.add('active');
    slides[3].classList.add('active');
}