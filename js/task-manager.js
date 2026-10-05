// Step 3: Initialize global array to track tasks
let myTasks = [];

// Weekly Goal Calculator

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

// Step 3: Dynamic Task Manager DOM Manipulation

// 1. Select the static container created in Step 2
const taskListDiv = document.getElementById("task-list");

// 2. Create the <ul> element, give it an ID, and append it to task-list
const userTasksUl = document.createElement("ul");
userTasksUl.id = "user-tasks";
taskListDiv.appendChild(userTasksUl);

// 3. Get references to form input and button
const addTaskBtn = document.getElementById("add-task");
const taskInput = document.getElementById("task-name");

// 4. Attach click event listener to "Add Task" button
addTaskBtn.addEventListener("click", function (event) {
    event.preventDefault();

    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        // Capture & Store: Push task string into myTasks array
        myTasks.push(taskText);

        // Create List Item: Create new <li> element
        const taskLi = document.createElement("li");
        taskLi.textContent = taskText;

        // Assemble: Append <li> to dynamically created <ul>
        userTasksUl.appendChild(taskLi);

        // Reset input field
        taskInput.value = "";
    }
});