// Sample data for tasks and results
const tasks = [
  {
    id: 1,
    title: 'Task 1',
    description: 'Complete the first task',
    deadline: '2023-06-15',
  },
  {
    id: 2,
    title: 'Task 2',
    description: 'Finish the second task',
    deadline: '2023-06-20',
  },
  // Add more tasks as needed
];

const results = [
  {
    taskId: 1,
    score: 80,
    status: 'Completed',
  },
  {
    taskId: 2,
    score: null,
    status: 'Incomplete',
  },
  // Add more results as needed
];

// Function to render the task list
function renderTasks() {
  const taskList = document.getElementById('task-list');

  tasks.forEach(task => {
    const listItem = document.createElement('li');
    listItem.classList.add('task-item');

    const title = document.createElement('div');
    title.classList.add('task-title');
    title.textContent = task.title;

    const description = document.createElement('div');
    description.classList.add('task-description');
    description.textContent = task.description;

    const deadline = document.createElement('div');
    deadline.classList.add('task-deadline');
    deadline.textContent = `Deadline: ${task.deadline}`;

    listItem.appendChild(title);
    listItem.appendChild(description);
    listItem.appendChild(deadline);

    taskList.appendChild(listItem);
  });
}

// Function to render the result
function renderResult() {
  const resultContainer = document.getElementById('result-container');

  results.forEach(result => {
    const resultItem = document.createElement('div');
    resultItem.classList.add('result');

    const score = document.createElement('div');
    score.classList.add('score');
    score.textContent = `Score: ${result.score || 'N/A'}`;

    const status = document.createElement('div');
    status.classList.add('status');
    status.textContent = `Status: ${result.status}`;

    resultItem.appendChild(score);
    resultItem.appendChild(status);

    resultContainer.appendChild(resultItem);
  });
}

// Call the render functions when the page loads
window.addEventListener('load', () => {
  renderTasks();
  renderResult();
});

