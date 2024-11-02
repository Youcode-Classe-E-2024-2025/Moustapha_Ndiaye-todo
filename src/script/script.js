let tasks = [];

function renderTasks() {
    const todoList = document.getElementById("todo-list");
    const inProgressList = document.getElementById("in-progress-list");
    const doneList = document.getElementById("done-list");

    todoList.innerHTML = '';
    inProgressList.innerHTML = '';
    doneList.innerHTML = '';

    tasks.forEach((task, index) => {
        const taskElement = document.createElement("li");
        taskElement.className = `p-2 border rounded ${getPriorityClass(task.priority)}`;
        taskElement.innerHTML = `
            <strong>${task.title}</strong><br>
            Due: ${task.dueDate} | Priority: ${task.priority}<br>
            <button onclick="changeTaskStatus(${index})" title="Change Status"><i class="fas fa-sync-alt"></i></button>
            <button onclick="editTask(${index})" title="Edit"><i class="fas fa-edit"></i></button>
            <button onclick="viewTask(${index})" title="View"><i class="fas fa-eye"></i></button>
            <button onclick="deleteTask(${index})" title="Delete"><i class="fas fa-trash-alt"></i></button>
        `;
        
        if (task.status === "To Do") {
            todoList.appendChild(taskElement);
        } else if (task.status === "In Progress") {
            inProgressList.appendChild(taskElement);
        } else if (task.status === "Done") {
            doneList.appendChild(taskElement);
        }
    });

    updateStatistics();
}

function addTask(title, description, dueDate, status, priority) {
    const newTask = { title, description, dueDate, status, priority };
    tasks.push(newTask);
    renderTasks();
}

function changeTaskStatus(index) {
    const currentStatus = tasks[index].status;
    const nextStatus = currentStatus === "To Do" ? "In Progress" : (currentStatus === "In Progress" ? "Done" : "To Do");
    tasks[index].status = nextStatus;
    renderTasks();
}

function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

function getPriorityClass(priority) {
    switch (priority) {
        case 'Hight':
            return 'bg-red-200';
        case 'Medium':
            return 'bg-orange-200';
        case 'Low':
            return 'bg-green-200';
        default:
            return '';
    }
}

function updateStatistics() {
    const totalTasks = tasks.length;
    const todoCount = tasks.filter(task => task.status === "To Do").length;
    const inProgressCount = tasks.filter(task => task.status === "In Progress").length;
    const doneCount = tasks.filter(task => task.status === "Done").length;

    document.getElementById("total-tasks").innerText = `Total Tasks: ${totalTasks}`;
    document.getElementById("todo-count").innerText = `To Do: ${todoCount}`;
    document.getElementById("in-progress-count").innerText = `In Progress: ${inProgressCount}`;
    document.getElementById("done-count").innerText = `Done: ${doneCount}`;
}

function showAddCard() {
    document.getElementById("add-card").classList.remove("hidden");
}

function hideAddCard() {
    document.getElementById("add-card").classList.add("hidden");
}

function editTask(index) {
    const task = tasks[index];
    
    document.getElementById("task-title").value = task.title;
    document.getElementById("task-description").value = task.description;
    document.getElementById("task-date").value = task.dueDate;
    document.getElementById("task-status").value = task.status;
    document.getElementById("task-priority").value = task.priority;

    document.getElementById("save-task").setAttribute("data-edit-index", index);
    showAddCard();
}

function viewTask(index) {
    const task = tasks[index];
    
    const detailsContainer = document.getElementById("task-details");
    detailsContainer.innerHTML = `
        <strong>${task.title}</strong><br>
        Description: ${task.description}<br>
        Due: ${task.dueDate}<br>
        Status: ${task.status}<br>
        Priority: ${task.priority}<br>
        <button onclick="hideTaskDetails()" class="mt-2 bg-gray-300 p-2 rounded">Close</button>
    `;

    detailsContainer.classList.remove("hidden");
}

function hideTaskDetails() {
    const detailsContainer = document.getElementById("task-details");
    detailsContainer.classList.add("hidden");
}

document.getElementById("save-task").addEventListener("click", () => {
    const title = document.getElementById("task-title").value;
    const description = document.getElementById("task-description").value;
    const dueDate = document.getElementById("task-date").value;
    const status = document.getElementById("task-status").value;
    const priority = document.getElementById("task-priority").value;

    const editIndex = document.getElementById("save-task").getAttribute("data-edit-index");

    if (editIndex !== null) {
        tasks[editIndex] = { title, description, dueDate, status, priority };
        document.getElementById("save-task").removeAttribute("data-edit-index");
    } else {
        addTask(title, description, dueDate, status, priority);
    }

    document.getElementById("task-title").value = '';
    document.getElementById("task-description").value = '';
    document.getElementById("task-date").value = '';
    document.getElementById("task-status").value = 'To Do'; 
    document.getElementById("task-priority").value = 'P3'; 

    hideAddCard();
});

function toggleStatistics() {
    const statisticsSection = document.getElementById("task-statistics");
    statisticsSection.classList.toggle("hidden");
}
