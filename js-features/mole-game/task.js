const dead = document.querySelector('#dead')
const lost = document.querySelector('#lost')

const getHole = (id) => {
  const hole = document.querySelector(`#hole${id}`);
  return hole;
}

const endGame = () => {
  dead.textContent = '0';
  lost.textContent = '0';
}
for (let i = 1; i < 10; i++) {
  let hole = getHole(i);
  hole.onclick = () => {
    if (hole.classList.contains('hole_has-mole')) {
      dead.textContent++
    } else {
      lost.textContent++
    }
    if (dead.textContent == 10) {
      alert('победа');
      endGame();
    }
    if (lost.textContent == 5) {
      alert('поражение');
      endGame();
    }
  }
}

