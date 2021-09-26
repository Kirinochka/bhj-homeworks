const timer = document.querySelector('#timer')

let seconds = timer.textContent;
const countdown = (val, timer, timerId) => {
  seconds = --val;
  if (val === 0) {
    clearInterval(timerId);
    alert('Вы победили в конкурсе!');
  }
  timer.textContent = val;
}
const timerId = setInterval(() => countdown(seconds, timer, timerId), 1000)