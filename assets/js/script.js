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
    window.location.href = "game.html";
}
});

(function () {
    // Variables
    let lives = 3;
    let points = 0;
    let currentSlide = 0; // Define currentSlide here
    const quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');
    const submitAnswerButton = document.getElementById('submitAnswer');
    const playAgainButton = document.getElementById('playAgain');
    const livesContainer = document.getElementById('lives');
    const pointsContainer = document.getElementById('points');

    function buildQuiz() {
        const output = [];

        myQuestions.forEach((currentQuestion, questionNumber) => {
            const answers = [];

            for (letter in currentQuestion.answers) {
                answers.push(
                    `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
                );
            }

            output.push(
                `<div class="slide">
            <div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join("")} </div>
          </div>`
            );
        });

        quizContainer.innerHTML = output.join('');
    }

    const myQuestions = [
        {
            question: "Who invented JavaScript?",
            answers: {
                a: "Douglas Crockford",
                b: "Sheryl Sandberg",
                c: "Brendan Eich"
            },
            correctAnswer: "c"
        },
        {
            question: "Which one of these is a JavaScript package manager?",
            answers: {
                a: "Node.js",
                b: "TypeScript",
                c: "npm"
            },
            correctAnswer: "c"
        },
        {
            question: "Which tool can you use to ensure code quality?",
            answers: {
                a: "Angular",
                b: "jQuery",
                c: "RequireJS",
                d: "ESLint"
            },
            correctAnswer: "d"
        }
    ];

    function showResults() {
        const answerContainers = quizContainer.querySelectorAll('.answers');
        const answerContainer = answerContainers[currentSlide];
        const selector = `input[name=question${currentSlide}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
        const currentQuestion = myQuestions[currentSlide];

        if (userAnswer === currentQuestion.correctAnswer) {
            points += 100;
            resultsContainer.innerHTML = 'Correct!';
        } else {
            lives--;
            resultsContainer.innerHTML = 'Incorrect!';
            if (lives === 0) {
                quizContainer.innerHTML = 'Game Over!';
                playAgainButton.style.display = 'block';
                lives = 3; // Reset lives
                points = 0; // Reset points
            }
        }
        livesContainer.innerHTML = `Lives: ${lives}`;
        pointsContainer.innerHTML = `Points: ${points}`;

        // Store the points in localStorage
        const userEmail = localStorage.getItem("userEmail");
        localStorage.setItem(userEmail + "_points", points.toString());

        showNextSlide(); // Move to the next question
    }



    function showSlide(n) {
        const slides = document.querySelectorAll(".slide");
        if (n >= slides.length) {
            return; // If there are no more questions, do nothing
        }
        slides[currentSlide].classList.remove('active-slide');
        slides[n].classList.add('active-slide');
        currentSlide = n;
    }

    function showNextSlide() {
        showSlide(currentSlide + 1);
    }

    buildQuiz();
    showSlide(0); // Show the first slide

    submitAnswerButton.addEventListener('click', showResults);
    playAgainButton.addEventListener("click", function () {
        location.reload();
    });
})();