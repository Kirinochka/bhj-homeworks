const rotator = document.querySelector('.rotator');

function makeRotate(elem) {
  const rotators = elem.querySelectorAll('.rotator__case');
  let i = 0;
  setTimeout( function func () {
    if (i > rotators.length - 1) {
      i = 0;
      rotators[rotators.length - 1].classList.remove('rotator__case_active');
    }
    if (i > 0) {
      rotators[i - 1].classList.remove('rotator__case_active');
    }
    rotators[i].style.color = rotators[i].dataset.color;
    rotators[i].classList.add('rotator__case_active');
    setTimeout(func , +rotators[i].dataset.speed);
    i++;
  }, 1000);
}

makeRotate(rotator);
