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
