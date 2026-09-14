// Calculate total weekly task goal
function weeklyGoal(userName, dailyGoal, bonusTasks) {
    console.log("Checking status for: " + userName); 

    let calculatedWeeklyGoal = dailyGoal * 5; 
    let totalGoal = calculatedWeeklyGoal + bonusTasks; 

    let output = "User: " + userName + " - Total Weekly Goal: " + totalGoal;
    document.getElementById("goal-message").innerHTML = output;
}

// Event handler for button click
document.getElementById("goal-btn").addEventListener("click", function(event) {
    event.preventDefault();

    // Retrieve input values
    let userName = document.getElementById("name").value;
    let dailyGoal = Number(document.getElementById("daily-goal").value);
    let bonusTasks = Number(document.getElementById("bonus-tasks").value);

    // Execute calculation function
    weeklyGoal(userName, dailyGoal, bonusTasks);
});