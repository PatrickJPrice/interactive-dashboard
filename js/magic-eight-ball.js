// Define an array of 6 possible answers
let answers = [
    "It is certain.",
    "Reply hazy, try again.",
    "Don't count on it.",
    "Yes, definitely.",
    "My sources say no.",
    "Outlook not so good."
];

// Function to generate a random index and display the answer inside the circle
function displayAnswer() {
    // Generate a random number based on the answers array length
    let randomIndex = Math.floor(Math.random() * answers.length);

    // Get the circle element
    let circle = document.getElementById("circle");

    // Put the random answer into the circle and display it
    circle.innerHTML = answers[randomIndex];
    circle.style.display = "block";
}

// Event listener for mousedown on the ball image
document.getElementById("ball").addEventListener("mousedown", function () {
    // Get the question from the input field
    let questionText = document.getElementById("question").value;

    // Check if a question was entered
    if (questionText == "") {
        alert("Please enter a question first!");
    } else {
        displayAnswer();
    }
});

// Event listener for click on the reset button to hide the answer
document.getElementById("reset").addEventListener("click", function () {
    document.getElementById("circle").style.display = "none";
});

// Bonus Challenge: Event listener to add a custom response to the array
document.getElementById("add-response-btn").addEventListener("click", function () {
    // Prompt the user for a new response
    let newResponse = prompt("Enter a new Magic Eight Ball response:");

    // If the user entered text, push it to the array and log to console
    if (newResponse) {
        answers.push(newResponse);
        console.log("New response added: " + newResponse);
        console.log("Current number of responses in array: " + answers.length);
    }
});