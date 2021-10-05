const form = document.querySelector('#tasks__form');
const input = document.querySelector('#task__input');
const taskList = document.querySelector('#tasks__list');

function removeTodo({target}) {
  const todo = target.closest('.task');
  todo.remove();
}

function addTodo(text) {
  const task = document.createElement('div');
  const title = document.createElement('div');
  const remove = document.createElement('a');

  task.classList.add('task');
  title.classList.add('task__title');
  remove.classList.add('task__remove');
  remove.href = '#';
  remove.innerHTML = '&times;';
  title.textContent = text;
  remove.addEventListener('click', removeTodo);
  task.append(title, remove);
  taskList.append(task);
}

form.addEventListener('submit', e => {
  e.preventDefault();
  if (input.value.trim()) {
    addTodo(input.value);
    input.value = '';
  }
})