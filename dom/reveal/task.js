const reveals = document.querySelectorAll('.reveal');

function revealIsInViewport() {
  for (const reveal of reveals) {
    let top = reveal.getBoundingClientRect().top;
    let bottom = reveal.getBoundingClientRect().bottom;
    const clientHeight = document.documentElement.clientHeight;
    if (top < clientHeight) {
      reveal.classList.add('reveal_active')
    }
    if (bottom < 0) {
      reveal.classList.remove('reveal_active')
    }
    if (top > clientHeight) {
      reveal.classList.remove('reveal_active')
    }
  }
}

document.addEventListener('scroll', revealIsInViewport);