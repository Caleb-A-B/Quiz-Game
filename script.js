//identify constants
const questions = [
    {
        question: "Commonly used datatypes do NOT include",
        answers: [
            {text: "string", correct: false},
            {text: "booleans", correct: true},
            {text: "alerts", correct: false},
            {text: "numbers", correct: false},

        ]
    },
    //add questions for quiz
    {
        question: "The condition in an if/else statement is kept inside of ___",
        answers: [
            {text: "quotes", correct: false},
            {text: "curly brackets", correct: false},
            {text: "paranthesis", correct: true},
            {text: "square brackets", correct: false}
        ]
    },
    {
        question: "Arrays in JavaScript can be used to store ___",
        answers: [
            {text: "numbers and strings", correct: false},
            {text: "other arrays", correct: false},
            {text: "booleans", correct: false},
            {text: "all of the above", correct: true},
        ]
    },
    {
        question: "String values must be enclosed with ___ when being assigned to variables",
        answers: [
            {text: "commas", correct: false},
            {text: "curly brackets", correct: true},
            {text: "quotes", correct: false},
            {text: "paranthesis", correct: false},
        ]
    },
    {
        question: "a tool used in development for debugging and and prrinting content to the debugger is",
        answers: [
            {text: "JavaScript", correct: false},
            {text: "terminal/bash", correct: false},
            {text: "for loops", correct: true},
            {text: "console.log", correct: false},
                ]
    },
    {
        question: "when writing a function it is important to remember the right ___",
        answers: [
            {text: "bracket", correct: false},
            {text: "order", correct: false},
            {text: "symbol", correct: false},
            {text: "all of the above", correct: true},
        ]
    }
];
const questionElement = document.getElementById("question");