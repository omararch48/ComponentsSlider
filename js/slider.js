const sliderSections = document.querySelectorAll('.section-slider');


sliderSections.forEach((element) => {

    
    // Constants
    const   sliderContainer = element.querySelector('.slider-container'),
            slides = element.querySelectorAll('.slide'),
            buttons = element.querySelectorAll('.slider__button'),
            deltaTime = 5000;
    // Variables
    let startClientX = 0,
        endClientX = 0,
        indexButton = 0,
        counter;
    // Functions
    const changeSlide = (index=-1) => {
        slides[indexButton].style.opacity='0';
        buttons[indexButton].classList.remove('slider__button--selected');
        if (index == -1) {
            if (indexButton == buttons.length - 1) {
                indexButton = 0;
            } else {
                indexButton++;
            }
        } else {
            indexButton = index;
        }
        slides[indexButton].style.opacity='1';
        buttons[indexButton].classList.add('slider__button--selected');
    };
    const selectedDirection = (start, end) => {
        if ((end - start) > 0) {
            return 'l';
        } else {
            return 'r';
        }
    };
    const restartCounter = () => {
        clearInterval(counter);
        counter = null;
        counter = setInterval(changeSlide, deltaTime);
    }
    
    
    // Events
    buttons.forEach(function(element, index) {
        element.addEventListener('click', () => {
            changeSlide(index);
            restartCounter();
        });
    });
    
    sliderContainer.addEventListener('touchstart', (element) => {
        startClientX = element.touches[0].clientX;
    });
    
    sliderContainer.addEventListener('touchend', (element) => {
        endClientX = element.changedTouches[0].clientX;
        if (selectedDirection(startClientX, endClientX) === 'r') {
            if (indexButton === buttons.length - 1) {
                changeSlide(0);
                restartCounter();
            } else {
                changeSlide(indexButton + 1);
                restartCounter();
            }
        } else if (selectedDirection(startClientX, endClientX) === 'l') {
            if (indexButton === 0) {
                changeSlide(buttons.length - 1);
                restartCounter();
            } else {
                changeSlide(indexButton - 1);
                restartCounter();
            }
        }
    });
    
    
    // Start slider
    slides[indexButton].style.opacity='1';
    buttons[indexButton].classList.add('slider__button--selected');
    counter = setInterval(changeSlide, deltaTime)


});

