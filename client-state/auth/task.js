const form = document.querySelector('#signin__form');
const signin = document.querySelector('#signin');
const welcome = document.querySelector('#welcome');
const userId = document.querySelector('#user_id');

if (localStorage.getItem('userId')) {
  signin.remove();
  welcome.classList.add('welcome_active');
  userId.textContent = localStorage.getItem('userId');
}

async function authorize(data) {
  const res = await fetch('https://netology-slow-rest.herokuapp.com/auth.php', {
    method: 'POST',
    body: data
  })

  return await res.json();
}

async function handleForm(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  const {success, user_id} = await authorize(formData);
  if (success) {
    signin.remove();
    welcome.classList.add('welcome_active');
    localStorage.setItem('userId', user_id);
    userId.textContent = user_id;
  } else {
    alert('Неверный логин/пароль');
  }

}

form.addEventListener('submit', handleForm);
