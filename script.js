
let tasks = [];

function addTask() 
{
    const input = document.getElementById("taskInput");
    const task = input.value.trim();

    if (task === "") {alert("Please enter a task");return;}
    tasks.push(task);

    input.value = "";

    displayTasks();
}

function displayTasks() {
    const taskList = document.getElementById("taskList");

    taskList.innerHTML = "";

    tasks.forEach(function(task, index) {
        const li = document.createElement("li");

        li.textContent = task;

        const deleteButton = document.createElement("button");

        deleteButton.textContent = "Delete";

        deleteButton.onclick = function() {
            deleteTask(index);
        };

        li.appendChild(deleteButton);

        taskList.appendChild(li);
    });
}

function deleteTask(index) {
    tasks.splice(index, 1);
    displayTasks();
}
