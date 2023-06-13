// Set the start and target dates
var startDate = new Date("February 1, 2018 08:50:00").getTime();
var targetDate = new Date("November 15, 2023 17:15:00").getTime();

// Calculate the total time difference in seconds
var totalSeconds = Math.floor((targetDate - startDate) / 1000);

// Update the progress bar and information every second
var progressInterval = setInterval(function() {
    // Get the current date and time
    var currentDate = new Date().getTime();

    // Calculate the elapsed time in seconds
    var elapsedSeconds = Math.floor((currentDate - startDate) / 1000);

    // Calculate the remaining time in seconds
    var remainingSeconds = totalSeconds - elapsedSeconds;

    // Calculate the progress percentage
    var progressPercentage = (elapsedSeconds / totalSeconds) * 100;

    // Update the progress bar width
    document.getElementById("progress").style.width = progressPercentage + "%";

    // Update the progress information if the seconds have changed
    var progressInfoElement = document.getElementById("progress-info");
    if (progressInfoElement.innerHTML = "Seconds: " + elapsedSeconds + " (Remaining: " + remainingSeconds + ")") {
        progressInfoElement.innerHTML = "Seconds: " + elapsedSeconds + " (Remaining: " + remainingSeconds + ")" + " (" + "Progress: " + progressPercentage + "%" + ") ";
    }

    // Check if the target time has been reached
    if (elapsedSeconds >= totalSeconds) {
        clearInterval(progressInterval);
        progressInfoElement.innerHTML = "Progress complete!";
    }
}, 1000);




// Second timer

// Set the start and target dates
var startDate_12 = new Date("February 1, 2023 08:50:00").getTime();
var targetDate_12 = new Date("November 15, 2023 17:15:00").getTime();

// Calculate the total time difference in seconds
var totalSeconds_12 = Math.floor((targetDate_12 - startDate_12) / 1000);

// Update the progress bar and information every second
var progressInterval_12 = setInterval(function() {
    // Get the current date and time
    var currentDate_12 = new Date().getTime();

    // Calculate the elapsed time in seconds
    var elapsedSeconds_12 = Math.floor((currentDate_12 - startDate_12) / 1000);

    // Calculate the remaining time in seconds
    var remainingSeconds_12 = totalSeconds_12 - elapsedSeconds_12;

    // Calculate the progress percentage
    var progressPercentage_12 = (elapsedSeconds_12 / totalSeconds_12) * 100;

    // Update the progress bar width
    document.getElementById("progress_12").style.width = progressPercentage_12 + "%";

    // Update the progress information if the seconds have changed
    var progressInfoElement_12 = document.getElementById("progress-info_12");
    if (progressInfoElement_12.innerHTML !== "Seconds: " + elapsedSeconds_12 + " (Remaining: " + remainingSeconds_12 + ")") {
        progressInfoElement_12.innerHTML = "Seconds: " + elapsedSeconds_12 + " (Remaining: " + remainingSeconds_12 + ")" + " (" + "Progress: " + progressPercentage_12 + "%" + ") ";
        
    }

    // Check if the target time has been reached
    if (elapsedSeconds_12 >= totalSeconds_12) {
        clearInterval(progressInterval_12);
        progressInfoElement_12.innerHTML = "Progress complete! 100%";
    }
}, 1000);