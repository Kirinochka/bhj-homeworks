const modal = document.querySelector('#subscribe-modal');
const btnClose = document.querySelector('.modal__close');

const getCookie = (name) => {
  const value = "; " + document.cookie;
  let parts = value.split("; " + name + "=");
  if (parts.length === 2) {
    return parts.pop().split(";").shift();
  }
}

if (getCookie('close') !== 'true') {
  modal.classList.add('modal_active');
}

btnClose.addEventListener('click', () => {
  btnClose.closest('.modal').classList.remove('modal_active');
  document.cookie = 'close=true';
})