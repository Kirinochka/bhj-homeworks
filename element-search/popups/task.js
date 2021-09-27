const modal = document.querySelector('#modal_main');
const btnsClose = document.querySelectorAll('.modal__close');
const successModal = document.querySelector('#modal_success');
const btnSuccess = document.querySelector('.show-success')

modal.classList.add('modal_active');

btnsClose.forEach(btn => {
  btn.onclick = () => {
    btn.closest('.modal').classList.remove('modal_active');
  }
});


btnSuccess.onclick = () => {
  modal.classList.remove('modal_active');
  successModal.classList.add('modal_active');
}
