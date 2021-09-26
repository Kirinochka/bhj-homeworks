const counter = document.querySelector('#clicker__counter');
const clickTime = document.querySelector('#clicker__time');
const cookie = document.querySelector('#cookie');

let isSmall = true;
let lastClick;
cookie.onclick = () => {
  if (lastClick) {
    const clickSpeed = Date.now() - lastClick;
    clickTime.textContent = String((1 / clickSpeed * 1000).toFixed(2))
  }
  lastClick = Date.now();
  counter.textContent++

  if(isSmall) {
    cookie.style.width = '300px';
    isSmall = false;
  } else {
    cookie.style.width = '200px';
    isSmall = true;
  }
}