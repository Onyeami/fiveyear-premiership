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

// Retrieve the email from localStorage
const userEmail = localStorage.getItem("userEmail");

// Retrieve the score associated with the email from localStorage
const userPoints = localStorage.getItem(userEmail + "_points");

// Display the email and points on the screen
document.getElementById("userEmail").textContent = userEmail;
document.getElementById("userPoints").textContent = userPoints;
}

// Event listener for the login form submission
document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();
// Prevent the form from refreshing the page
const email = document.getElementById("email").value;

// Validate the user input
if (email) {
// Store the email in localStorage
    localStorage.setItem("userEmail", email);
// Navigate to the quiz screen
    window.location.href = "quiz.html";
}
})