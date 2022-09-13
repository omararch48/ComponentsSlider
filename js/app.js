let selected = document.querySelectorAll('.slide');
let selectedLinks = document.querySelectorAll('.slider__button');
let repeat = true;
let i = 0;


const changeSlide = (index=-1) => {

    selected[i].style.opacity='0';
    selectedLinks[i].classList.toggle('slider__button--selected');
    if (index === -1) {
        if (i === selected.length - 1) {
            i = 0;
        } else {
            i++;
        }    
        selectedLinks[i].classList.toggle('slider__button--selected');
        selected[i].style.opacity='1';
    } else {
        i = index;
        selected[index].style.opacity='1';
        selectedLinks[index].classList.toggle('slider__button--selected');
    }
}


selected[0].style.opacity='1';
selectedLinks[0].classList.toggle('slider__button--selected');


selectedLinks.forEach(function(element, index) {
    element.addEventListener('click', () => {
        changeSlide(index);
    });
});


setInterval(changeSlide, 8000);