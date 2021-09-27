const sliderItems = document.querySelectorAll('.slider__item');
const prevBtn = document.querySelector('.slider__arrow_prev');
const nextBtn = document.querySelector('.slider__arrow_next');

let slideIndex = 0;
function showSlide(index) {
  slideIndex += index;
  if(slideIndex > sliderItems.length - 1) slideIndex = 0;
  if (slideIndex < 0) slideIndex = sliderItems.length - 1;
  sliderItems.forEach(slide => slide.classList.remove('slider__item_active'))
  sliderItems[slideIndex].classList.add('slider__item_active');
}

prevBtn.onclick = () => showSlide(-1);
nextBtn.onclick = () => showSlide(1);