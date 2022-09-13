const container = document.querySelector('.main-container');
let startClientX = 0;
let endClientX = 0;
const selectedDirection = (start, end) => {
    if ((end - start) > 0) {
        return 'l';
    } else {
        return 'r';
    }
}


container.addEventListener('touchstart', (element) => {
    startClientX = element.touches[0].clientX;
});

container.addEventListener('touchend', (element) => {
    endClientX = element.changedTouches[0].clientX;
    console.log(selectedDirection(startClientX, endClientX));
});

