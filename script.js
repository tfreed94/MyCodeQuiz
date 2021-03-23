var section = document.querySelector("section");
var countDown = document.querySelector("#countDown");
var quizQuestions = document.querySelector("#quizQuestions");
var beginTimer = document.querySelector("#beginTimer");
var ul = document.createElement("ul");
var arrayObject = 0;
var results = 0;
var countDownTime = 75;
var startingPoint = 0;
var deduct = 15;
var questions = [
    {
        title: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answers: "alerts"
    },
    {
        title: "The condition in an if / else statement is enclosed within ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answers: "parentheses"
    },
    {
        title: "Arrays in Javascript can be used to store ____.",
        choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        answers: "all of the above"
    },
    {
        title: "String values must be enclosed within ____ when being assigned to variables.",
        choices: ["commas", "curly brackets", "quotes", "parenthesis"],
        answers: "quotes"
    },
    {
        title: "A very useful tool for used during development and debugging for printing content to the debugger is:",
        choices: ["Javascript", "terminal / bash", "for loops", "console log"],
        answers: "console log"
    }

];

function init(arrayObject) {
    quizQuestions.innerHTML = ""; ul.innerHTML = "";
    // Checking all elements in questions array with for loop
    for (var i = 0; i < questions.length; i++) {
        question = questions[arrayObject].title;
        multipleChoice = questions[arrayObject].choices;
        quizQuestions.textContent = question;
    }
    // for each function to bring up next set of choices
    multipleChoice.forEach(function (nextQuestionsChoices) {
        li = document.createElement("li");
        li.textContent = nextQuestionsChoices;
        quizQuestions.appendChild(ul);
        ul.appendChild(li);
        li.addEventListener("click", (match));
    })
}
// Button that starts countdown and adds the 75 second timer for user to see
beginTimer.addEventListener("click", function () {
    if (startingPoint === 0) {
        startingPoint = setInterval(function () {
            countDownTime--;
            countDown.textContent = "Time Remaining: " + countDownTime;
            if (countDownTime <= 0) {
                window.clearInterval(startingPoint);
                gameOver();
                countDown.textContent = "Time's up!";
            }
        },1000);
    } 
    init(arrayObject);
});
//  Conditional function checking to see if the user answer is true or false
function match(choicesAnswer) {
    var choicesArrayElement = choicesAnswer.target;
    // Creates an ID of div if user answers correctly
    if (choicesArrayElement.matches("li")) {
        var div = document.createElement("div");
        div.setAttribute("id", "div");
        // If the user answer matches the key-value pair of answers then return a string of "Correct" to let the user know they answered correctly
        if (choicesArrayElement.textContent == questions[arrayObject].answers) {
            results++;
            div.textContent = "Correct!"
        } else {
            // Takes 15 seconds off of countDownTime if user answers incorrectly and lets user know they answered incorrectly by returning a string of "Wrong"
            countDownTime = countDownTime - deduct;
            div.textContent = "Wrong!"
        }
    } arrayObject++;
    if (arrayObject >= questions.length) {
        gameOver(); 
    } else {
        init(arrayObject);
    }quizQuestions.appendChild(div);  
}