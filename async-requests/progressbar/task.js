const progress = document.querySelector('#progress');
const form = document.querySelector('#form');
const input = document.querySelector('#file');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const xhr = new XMLHttpRequest();
  xhr.upload.addEventListener('progress', (e) => {
    progress.value = e.loaded / e.total;
  })
  xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');
  xhr.send(input.files[0]);
})
