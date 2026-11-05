
let tasks = [];

function addTask() {
    const input = document.getElementById("taskInput");

    const task = input.value.trim();

    if (task === "") {
        alert("Please enter a task");
        return;
    }

    tasks.push(task);

    input.value = "";

    displayTasks();
}

function displayTasks() {
    const taskList = document.getElementById("taskList");

    taskList.innerHTML = "";

    tasks.forEach(function(task) {
        const li = document.createElement("li");

        li.textContent = task;

        taskList.appendChild(li);
    });
}
