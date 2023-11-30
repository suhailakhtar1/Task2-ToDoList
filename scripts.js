function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
    const li = document.createElement('li');
    const taskText = document.createTextNode(taskInput.value);
  
    if (taskInput.value.trim() === '') {
      alert('Please enter a task');
      return;
    }
  
    li.appendChild(taskText);
    taskList.appendChild(li);
    taskInput.value = '';
  
    li.addEventListener('click', function() {
      const newTask = prompt('Edit task:', taskText.textContent);
      if (newTask !== null && newTask.trim() !== '') {
        taskText.textContent = newTask;
      }
    });
  
    li.addEventListener('contextmenu', function(e) {
      e.preventDefault();
      li.remove();
    });
  }
  