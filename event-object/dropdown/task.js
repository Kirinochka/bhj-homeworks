const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
  const list = dropdown.querySelector('.dropdown__list');
  const value = dropdown.querySelector('.dropdown__value');
  dropdown.addEventListener('click', () =>
    list.classList.toggle('dropdown__list_active'));
  list.addEventListener('click', (e) => {
    const {target} = e;
    if (target.classList.contains('dropdown__link')) {
      e.preventDefault();
      value.textContent = target.textContent;
      target.parentElement.classList.remove('dropdown__list_active');
    }
  })
})