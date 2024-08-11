let tasks = [];
let completedTasks = [];
let editingTaskIndex = null;
let currentFilter = 'inbox';
let searchQuery = '';

document.getElementById('task-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const dueDate = document.getElementById('due-date').value;
    const priority = document.getElementById('priority').value;
    const category = document.getElementById('category').value;

    const task = {
        title,
        description,
        dueDate,
        priority,
        category
    };

    if (editingTaskIndex !== null) {
        tasks[editingTaskIndex] = task;
        editingTaskIndex = null;
    } else {
        tasks.push(task);
    }

    document.getElementById('task-form').reset();
    displayTasks();
});

document.getElementById('search-bar').addEventListener('input', function (e) {
    searchQuery = e.target.value.toLowerCase();
    displayTasks();
});

document.getElementById('inbox-link').addEventListener('click', () => {
    currentFilter = 'inbox';
    updatePageTitle();
    displayTasks();
});

document.getElementById('today-link').addEventListener('click', () => {
    currentFilter = 'today';
    updatePageTitle();
    displayTasks();
});

document.getElementById('upcoming-link').addEventListener('click', () => {
    currentFilter = 'upcoming';
    updatePageTitle();
    displayTasks();
});

document.getElementById('completed-link').addEventListener('click', () => {
    currentFilter = 'completed';
    updatePageTitle();
    displayCompletedTasks();
});

function displayTasks() {
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = '';

    const filteredTasks = tasks.filter(task => {
    
        if (currentFilter === 'today') {
            return task.dueDate === new Date().toISOString().split('T')[0];
        } else if (currentFilter === 'upcoming') {
            return new Date(task.dueDate) > new Date();
        } else if (currentFilter === 'completed') {
            return false; 
        } else {
            return task.category === currentFilter || currentFilter === 'inbox';
        }
    }).filter(task => {

        const titleMatch = task.title.toLowerCase().includes(searchQuery);
        const descriptionMatch = task.description.toLowerCase().includes(searchQuery);
        const categoryMatch = task.category.toLowerCase().includes(searchQuery);
        return titleMatch || descriptionMatch || categoryMatch;
    });

    const priorityOrder = { low: 1, medium: 2, high: 3 };
    filteredTasks.sort((a, b) => priorityOrder[b.priority] - priorityOrder[a.priority]);

    filteredTasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.classList.add('task');
        li.innerHTML = `
            <div>
                <div class="task-details">
                    <input type="checkbox" onchange="completeTask(${index})">
                    <h3>${task.title}</h3>
                    <h4>${task.description}</h4>
                </div>
                <p>Due: ${task.dueDate}</p>
                <p>Priority: ${task.priority.charAt(0).toUpperCase() + task.priority.slice(1)}</p>
                <p>Category: ${task.category.charAt(0).toUpperCase() + task.category.slice(1)}</p>
            </div>
            <div class="task-buttons">
                <button class="edit" onclick="editTask(${index})">Edit</button>
                <button class="delete" onclick="deleteTask(${index})">Delete</button>
            </div>
        `;
        taskList.appendChild(li);
    });
}

function displayCompletedTasks() {
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = '';

    completedTasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.classList.add('task', 'task-completed');
        li.innerHTML = `
            <div>
                <div class="task-details">
                    <h3>${task.title}</h3>
                    <p>${task.description}</p>
                </div>
                <p>Completed on: ${task.completedOn}</p>
            </div>
        `;
        taskList.appendChild(li);
    });
}

function completeTask(index) {
    const task = tasks[index];
    task.completedOn = new Date().toLocaleString();
    completedTasks.push(task);
    tasks.splice(index, 1);
    displayTasks();
}

function editTask(index) {
    const task = tasks[index];
    document.getElementById('title').value = task.title;
    document.getElementById('description').value = task.description;
    document.getElementById('due-date').value = task.dueDate;
    document.getElementById('priority').value = task.priority;
    document.getElementById('category').value = task.category;
    editingTaskIndex = index;
}

function deleteTask(index) {
    tasks.splice(index, 1);
    displayTasks();
}

function updatePageTitle() {
    const pageTitle = {
        'inbox': 'Inbox',
        'today': 'Today',
        'upcoming': 'Upcoming',
        'projects': 'Projects',
        'completed': 'Completed Tasks'
    };
    document.getElementById('page-title').textContent = pageTitle[currentFilter];
}

const darkModeSwitch = document.getElementById('dark-mode-switch');

function applyDarkMode(isDarkMode) {
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
        document.querySelector('.sidebar').classList.add('dark-mode');
        document.querySelector('.task-section').classList.add('dark-mode');
        document.querySelector('.header').classList.add('dark-mode');
        document.querySelectorAll('input, select').forEach(element => element.classList.add('dark-mode'));
        document.querySelectorAll('#task-form button').forEach(button => button.classList.add('dark-mode'));
        document.querySelectorAll('.task, .task-completed').forEach(task => task.classList.add('dark-mode'));
        document.querySelectorAll('p, h1, h2, h3').forEach(element => element.classList.add('dark-mode'));
    } else {
        document.body.classList.remove('dark-mode');
        document.querySelector('.sidebar').classList.remove('dark-mode');
        document.querySelector('.task-section').classList.remove('dark-mode');
        document.querySelector('.header').classList.remove('dark-mode');
        document.querySelectorAll('input, select').forEach(element => element.classList.remove('dark-mode'));
        document.querySelectorAll('#task-form button').forEach(button => button.classList.remove('dark-mode'));
        document.querySelectorAll('.task, .task-completed').forEach(task => task.classList.remove('dark-mode'));
        document.querySelectorAll('p, h1, h2, h3').forEach(element => element.classList.remove('dark-mode'));
    }
}

const darkModePreference = localStorage.getItem('dark-mode');
if (darkModePreference === 'enabled') {
    darkModeSwitch.checked = true;
    applyDarkMode(true);
} else {
    darkModeSwitch.checked = false;
    applyDarkMode(false);
}

darkModeSwitch.addEventListener('change', function () {
    const isDarkMode = this.checked;
    applyDarkMode(isDarkMode);
    localStorage.setItem('dark-mode', isDarkMode ? 'enabled' : 'disabled');
});


document.addEventListener('DOMContentLoaded', function () {
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('due-date').setAttribute('min', today);
});
