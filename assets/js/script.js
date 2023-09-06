function showLoginForm() {
    document.getElementById("login-form").style.display = "block";
    document.getElementById("rules").style.display = "none";
    document.getElementById("scores").style.display = "none";
}
function showRules() {
    document.getElementById("login-form").style.display = "none";
    document.getElementById("rules").style.display = "block";
    document.getElementById("scores").style.display = "none";
}

function showScores() {
    document.getElementById("login-form").style.display = "none";
    document.getElementById("rules").style.display = "none";
    document.getElementById("scores").style.display = "block";
}