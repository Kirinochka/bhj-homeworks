const links = document.querySelectorAll('.has-tooltip');

function createTooltip(elem) {
  const tooltip = document.createElement('div');
  tooltip.textContent = elem.title;
  tooltip.classList.add('tooltip');
  elem.insertAdjacentElement('afterend', tooltip);
}
links.forEach(link => createTooltip(link));

const showTooltip = (e) => {
  e.preventDefault();
  const tooltips = document.querySelectorAll('.tooltip');
  tooltips.forEach(tooltip => tooltip.classList.remove('tooltip_active'))
  const {target} = e;
  const {left, top} = target.getBoundingClientRect();

  if (!target.classList.contains('has-tooltip')) return;
  target.nextElementSibling.classList.add('tooltip_active');
  target.nextElementSibling.style.left = left + 'px';
  target.nextElementSibling.style.top = top + target.offsetHeight + 'px';
}

document.body.addEventListener('click', showTooltip);