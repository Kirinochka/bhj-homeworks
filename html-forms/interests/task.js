const main = document.querySelector('.interests_main');

const func = ({target}) => {
  if (!target.classList.contains('interest__check')) return;
  const parent = target.closest('ul > li');
  const {checked} = target;
  parent.querySelectorAll('input')
    .forEach(input => input.checked = checked)
}

main.addEventListener('click', func)
