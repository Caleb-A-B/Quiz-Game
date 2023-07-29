let currentQuestionIndex = 0;
let score = 0;



//set timer
var timeE1 = document.querySelector(".time")
var mainE1 = document.getElementById("main")
var secondsLeft = 60;
function setTime () {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeE1.textContent = secondsLeft + "Time remaining.";

        if(secondsLeft === 0) {
            clearInterval(timerInterval);
            
                }
    }, 1000)
        }
    



function sendMessage(){
    console.log("Time is up!")
    
}
const statement = [
    {text: "Congrats on finishing the Quiz, please write your initials here!!"}
]
setTime()
//setting score sheet and cache

function endZone(){
    var questionEl = document.createElement("h2")
    var answerContainer = document.createElement("div")
    var username = document.querySelector("username")
    var textInput = document.createElement("input")
    var quizContainer = document.getElementById("quiz")

    textInput.setAttribute("type", "text")
    questionEl.id = "score"
    answerContainer.id = "answer-button"
    questionEl.textContent = "Congratulations on finishing the Quiz, your score is " + score + "please write your initials here:"
    quizContainer.appendChild(questionEl)
    quizContainer.appendChild(answerContainer)
    quizContainer.append()
}


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
    },
    endZone()
];
startQuiz()
function showResults() {
    if (answer-Button == true) {
        console.log ("correct")
    } else {
        console.log("wrong")
    }
}
const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-button");
addEventListener('answer-Button', showResults)



function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    showQuestion()
}
function showQuestion() {
    var quizContainer = document.getElementById("quiz")
    if(currentQuestionIndex > 5) {
        quizContainer.innerHTML = ""
        endZone()
        return;
    }
    
    quizContainer.innerHTML = ""

    var questionEl = document.createElement("h2")
    var answerContainer = document.createElement("div")
    questionEl.id = "question"
    answerContainer.id = "answer-button"
    questionEl.textContent = questions[currentQuestionIndex].question

    for (i = 0; i < questions[currentQuestionIndex].answers.length; i ++) {
        var choiceButton = document.createElement("button")
        choiceButton.textContent = questions[currentQuestionIndex].answers[i].text
        choiceButton.classList.add("btn")
        choiceButton.setAttribute("data-correct", questions[currentQuestionIndex].answers[i].correct)
        answerContainer.append(choiceButton)
    
    }

    quizContainer.append(questionEl, answerContainer)

    // let currentQuestion = questions[currentQuestionIndex]
    // let questionNo = currentQuestionIndex + 1;
    // questionElement.innerHTML = questionNo + "." + currentQuestion.
    // question;
}

function checkAnswer(event) {
    var isCorrect = event.target.dataset.correct
    if (event.target.tagName === "BUTTON") {
        console.log(event.target.dataset.correct, typeof event.target.dataset.correct)
        if (event.target.dataset.correct === "true") {
            // System.out.printIn("You got it correct!")
            score ++
            console.log("correct!")
        } else {
            // System.out.printIn("sorry, better luck next time")
            console.log ("incorrect")
        }
       
        currentQuestionIndex ++ 
        showQuestion() 
         if (isCorrect) {
        "congratulations"
        } else {
        "Sorry incorrect"
     }
    }
    
}


document.querySelector(".app").addEventListener("click", checkAnswer)