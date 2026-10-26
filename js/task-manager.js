// ==========================================
// Weekly Goal Calculator (Preserved)
// ==========================================
function weeklyGoal(userName, dailyGoal, bonusTasks) {
    console.log("Checking status for: " + userName); 

    let calculatedWeeklyGoal = dailyGoal * 5; 
    let totalGoal = calculatedWeeklyGoal + bonusTasks; 

    let output = "User: " + userName + " - Total Weekly Goal: " + totalGoal;
    document.getElementById("goal-message").innerHTML = output;
}

// Event handler for goal button click
document.getElementById("goal-btn").addEventListener("click", function(event) {
    event.preventDefault();

    // Retrieve input values
    let userName = document.getElementById("name").value;
    let dailyGoal = Number(document.getElementById("daily-goal").value);
    let bonusTasks = Number(document.getElementById("bonus-tasks").value);

    // Execute calculation function
    weeklyGoal(userName, dailyGoal, bonusTasks);
});

// ==========================================
// Module 9: Task Manager with Objects
// ==========================================

// 1. Initialize global array of objects to track tasks
let tasks = [];

// 2. Select the static container created in index.html
const taskListDiv = document.getElementById("task-list");

// 3. Create the <ul> element, give it an ID, and append it
const userTasksUl = document.createElement("ul");
userTasksUl.id = "user-tasks";
taskListDiv.appendChild(userTasksUl);

// 4. Get references to form inputs and buttons
const addTaskBtn = document.getElementById("add-task");
const taskInput = document.getElementById("task-name");
const taskPrioritySelect = document.getElementById("task-priority");
const taskImportantCheckbox = document.getElementById("task-important");
const deleteListBtn = document.getElementById("delete-list-btn");

// Function to add tasks
function addTask() {
    const taskName = taskInput.value.trim();

    if (taskName !== "") {
        // Create task object with required properties
        let newTask = {
            id: tasks.length + 1,
            name: taskName,
            priority: taskPrioritySelect.value,
            isImportant: taskImportantCheckbox.checked,
            isCompleted: false
        };

        // Push object into tasks array
        tasks.push(newTask);

        // Render tasks dynamically
        renderTasks();

        // Log updated task list in console using JSON.stringify()
        console.log(JSON.stringify(tasks));

        // Reset form inputs
        taskInput.value = "";
        taskImportantCheckbox.checked = false;
        taskPrioritySelect.value = "Low";
    }
}

// Function to render the task list dynamically using DOM nodes
function renderTasks() {
    // Clear current list container HTML before re-rendering
    userTasksUl.innerHTML = "";

    tasks.forEach(function(task) {
        const taskLi = document.createElement("li");
        taskLi.textContent = `${task.name} (Priority: ${task.priority})`;

        // Apply style based on priority/importance: Highlight important tasks in red
        if (task.isImportant) {
            taskLi.style.color = "red";
            taskLi.style.fontWeight = "bold";
        }

        // Apply strikethrough style to completed tasks
        if (task.isCompleted) {
            taskLi.style.textDecoration = "line-through";
        }

        // Function to mark each task complete (click toggles completion status)
        taskLi.addEventListener("click", function() {
            task.isCompleted = !task.isCompleted;
            renderTasks();
            console.log(JSON.stringify(tasks)); // Log update
        });

        userTasksUl.appendChild(taskLi);
    });
}

// Function to delete the entire task list
function deleteTaskList() {
    tasks = [];
    userTasksUl.innerHTML = "";
    console.log(JSON.stringify(tasks)); // Log deletion
}

// Event listener for "Add Task" button
addTaskBtn.addEventListener("click", function(event) {
    event.preventDefault();
    addTask();
});

// Event listener for "Delete Entire List" button
deleteListBtn.addEventListener("click", function(event) {
    event.preventDefault();
    deleteTaskList();
});