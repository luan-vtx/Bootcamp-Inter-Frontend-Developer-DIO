const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');
const addTaskBtn = document.getElementById('add-task-btn');

addTaskBtn.addEventListener('click', () => {
  const task = document.createElement('input');
  task.type = "checkbox";
  task.name = taskInput.value;
  task.value = taskInput.value;
  task.id = taskInput.value;
  
  const taskLabel = document.createElement('label')
  taskLabel.htmlFor = taskInput.value;
  taskLabel.appendChild(document.createTextNode(taskInput.value));
  
  const taskContainer = document.createElement('div');
  taskContainer.appendChild(task);
  taskContainer.appendChild(taskLabel);
  taskContainer.classList.add('task-item');

  taskList.appendChild(taskContainer);

  taskInput.value = '';
});