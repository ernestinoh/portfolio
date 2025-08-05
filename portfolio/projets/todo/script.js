const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const list = document.getElementById('todo-list');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const taskText = input.value.trim();
  if (taskText === '') return;

  addTask(taskText);
  input.value = '';
});

function addTask(text) {
  const li = document.createElement('li');
  li.textContent = text;

  // Bouton supprimer
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Supprimer';
  deleteBtn.classList.add('delete-btn');
  deleteBtn.addEventListener('click', () => {
    list.removeChild(li);
  });

  // Clic pour marquer comme faite
  li.addEventListener('click', () => {
    li.classList.toggle('completed');
  });

  li.appendChild(deleteBtn);
  list.appendChild(li);
}
