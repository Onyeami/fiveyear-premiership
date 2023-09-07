// Fuction to display the login form
function showLoginForm() {
    document.getElementById("login-form").style.display = "block";
    document.getElementById("rules").style.display = "none";
    document.getElementById("scores").style.display = "none";
}

// Function to display the rules section
function showRules() {
    document.getElementById("login-form").style.display = "none";
    document.getElementById("rules").style.display = "block";
    document.getElementById("scores").style.display = "none";
}

// Function to display the scores section
function showScores() {
    document.getElementById("login-form").style.display = "none";
    document.getElementById("rules").style.display = "none";
    document.getElementById("scores").style.display = "block";
}

// Retrieve the email from localStorage
const userEmail = localStorage.getItem("userEmail");

// Retrieve the score associated with the email from localStorage
const userPoints = localStorage.getItem(userEmail + "_points");