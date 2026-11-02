function updateClock() {
    // 1. Create a new Date object
    let now = new Date();

    // 2. Extract hours, minutes, and seconds
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // 3. AM/PM Session logic
    let session = "AM";
    if (hours >= 12) {
        session = "PM";
    }

    // Convert 24-hour time to 12-hour format
    if (hours > 12) {
        hours = hours - 12;
    }
    if (hours === 0) {
        hours = 12; // Midnight case
    }

    // 4. Leading zeros formatting logic (using ternary operators)
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    // Construct the final time and date strings
    let timeString = `${hours}:${minutes}:${seconds} ${session}`;
    let dateString = now.toLocaleDateString();

    // 5. Update the DOM
    document.getElementById("clock-face").innerHTML = timeString;
    document.getElementById("calendar-date").innerHTML = dateString;
}

// Run immediately so there's no 1-second delay on page load
updateClock();

// Initialize interval to execute updateClock every 1000 milliseconds (1 second)
setInterval(updateClock, 1000);