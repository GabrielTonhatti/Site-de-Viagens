const slides = document.querySelectorAll('.card');
const nextButton = document.querySelector('.button--next');
const prevButton = document.querySelector('.button--prev')

console.log(slides)
const lastSlideIndex =  slides.length - 1
let currentSlideIndex = 0;

const manipulateSlideClasses = correctSlideIndex => {
    
    slides.forEach(slide => slide.classList.remove('active'));
    slides[correctSlideIndex].classList.add('active');

}

nextButton.addEventListener('click', () => {

    const correctSlideIndex = currentSlideIndex === lastSlideIndex ? currentSlideIndex = 0 : ++currentSlideIndex

    manipulateSlideClasses(correctSlideIndex)
});

prevButton.addEventListener('click', () => {

    const correctSlideIndex = currentSlideIndex === 0 ? currentSlideIndex = lastSlideIndex : --currentSlideIndex

    manipulateSlideClasses(correctSlideIndex)

})