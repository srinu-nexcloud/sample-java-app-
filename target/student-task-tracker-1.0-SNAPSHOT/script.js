document.querySelector('#task-form').addEventListener('submit', function (event) {
    event.preventDefault();
    
    // Get the task input value
    var taskInput = document.querySelector('#task-input');
    var taskText = taskInput.value.trim();
    
    if (taskText !== '') {
        // Create a new list item for the task
        var listItem = document.createElement('li');
        listItem.textContent = taskText;

        // Append the task to the task list
        var taskList = document.querySelector('#task-list');
        taskList.appendChild(listItem);

        // Clear the task input
        taskInput.value = '';
    }
});

