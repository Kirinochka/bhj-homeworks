const book = document.querySelector('.book');
const fszControl = document.querySelector('.book__control_font-size');
const colorControl = document.querySelector('.book__control_color');
const bgControl = document.querySelector('.book__control_background');

function changeFont(e) {
  e.preventDefault();
  const {target} = e;
  [...target.parentElement.children]
    .forEach(el => el.classList.remove('font-size_active'));
  target.classList.add('font-size_active');
  book.classList.remove('book_fs-small', 'book_fs-big');
  if (target.dataset.size === 'small') {
    book.classList.add('book_fs-small');
  } else if (target.dataset.size === 'big') {
    book.classList.add('book_fs-big');
  }
}

function changeColor(e) {
  e.preventDefault();
  const {target} = e;
  [...target.parentElement.children]
    .forEach(el => el.classList.remove('color_active'));
  target.classList.add('color_active');
  book.classList.remove('book_color-gray', 'book_color-black', 'book_color-whitesmoke')
  if (target.dataset.textColor === 'black') {
    book.classList.add('book_color-black');
  } else if (target.dataset.textColor === 'gray') {
    book.classList.add('book_color-gray');
  } else if (target.dataset.textColor === 'whitesmoke') {
    book.classList.add('book_color-whitesmoke');
  }
}

function changeBg(e) {
  e.preventDefault();
  const {target} = e;
  [...target.parentElement.children]
    .forEach(el => el.classList.remove('color_active'));
  target.classList.add('color_active');
  book.classList.remove('book_bg-black', 'book_bg-gray', 'book_bg-white');
  if (target.dataset.bgColor === 'black') {
    book.classList.add('book_bg-black');
  } else if (target.dataset.bgColor === 'gray') {
    book.classList.add('book_bg-gray');
  } else if (target.dataset.bgColor === 'white') {
    book.classList.add('book_bg-white');
  }
}

fszControl.addEventListener('click', changeFont);
colorControl.addEventListener('click', changeColor);
bgControl.addEventListener('click', changeBg);