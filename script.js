// start button - click (add eventListener)
// var startBtn = document.querySelector("#start");
// startBtn.addEventListener("click", startGame);

// timer that starts after clicking the start button
// when the 1st question is answered, another question appears
// if the question is answered incorrectly, time is taken from the clock
// when all questions are answered or the timer reaches 0
// then the game is over
//
// when the game is over
// then the user can enter their initials and score (saved)
// scores and username saved on screen 

//variables

var startBtn = document.getElementById("start");
// var timerText = document.getElementById("timer");

var questionText = document.getElementById("question-text")
var currentQuestion = 0;
var timePara = document.querySelector("#timePara");
var timeLeft = 10;
var timer =
var optionA =  document.getElementById("btnA");
var optionB =  document.getElementById("btnB");
var optionC =  document.getElementById("btnC");
var optionD =  document.getElementById("btnD");


//event listeners 
gameStart.addEventListener("click", )
optionA.addEventListener("click", chooseA);
optionB.addEventListener("click", chooseB);
optionC.addEventListener("click", chooseC);
optionD.addEventListener("click", chooseD);


//timer 
var counter = 10;
var myInterval = setInterval(function(){
    counter --;
    if(counter===0) {
        clearInterval(myInterval)

    }
},2000)


//quiz questions
var questions = [
{   question: "What is the description for this arithmetic operator: %",
    options: ["A. Oculus", "B. Expelliarmus", "C. Modulus", "4. Imperio"],
    answer: "C. Modulus"
},
{   question: "Which is not a way to declare a variable?",
    options: ["A. const", "B. dec", "C. var", "4. let"],
    answer: "B. dec"
}, 
{   question: "What function can you use find out if a variable is true?",
    options: ["A. Ganglion()", "B. TrueFalse()", "C. Bullion()", "D. Boolean()"],
    answer: "D. Boolean"
}, 
{   question: "How can you add a comment in a JavaScript file?",
    options: ["A. --This is a comment", "B. <!--This is a comment-->", "C. ~*This is a comment", "D. //This is a comment"],
    answer: "D. //This is a comment"
}, 
{   
    question: "How do you create a function in JavaScript?",
    options:  ["A. createMyFunction()", "B. function.myFunction()", "C. function myFunction() ", "D. function = myFunction()"],
    answer: "C. function myFunction()"
}
];


document.querySelector("#resetButton").addEventListener("click", function() {

for(var i =0; i<1; i++) {
    var response = (questions[i].prompt);
    if(response == questions[i].answer){
        score++
    } else {

    }};