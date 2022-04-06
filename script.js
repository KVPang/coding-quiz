// start button - click (add eventListener)

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
//timer 
var counter = 10;
let number = 0;
var startBtn = document.querySelector('#start');

startBtn.addEventListener("click",function(){
    var myInterval = setInterval(function(){
        var timer = document.querySelector("#timer");
        timer.textContent = counter;
        counter--;
        if(counter==-1) {
            clearInterval(myInterval)
        }
    },1000)
    LoadQuestion(); //function call to load the first question
});


var questionText = document.getElementById("question-text")
var currentQuestion = 0;
var timePara = document.querySelector("#timePara");
var timeLeft = 10;

var optionA =  document.getElementById("btnA");
var optionB =  document.getElementById("btnB");
var optionC =  document.getElementById("btnC");
var optionD =  document.getElementById("btnD");


const LoadQuestion = ()=>{
    let display = document.getElementById("quizQuestions");
    let quest = document.createElement("div")
   quest.innerHTML = questions[number].question; 
    display.appendChild(quest);
//    let opt = "";
   for (let i = 0; i<questions[number].options.length; i++) {
     let item = document.createElement("div");
     item.id = "option" + i; 
     item.innerHTML = questions[number].options[i];
     display.appendChild(item);
     document.getElementById("option" + i).addEventListener("click", function(){
         CheckResponse("option" + i);
     }
     )
   }
}

const CheckResponse = (id)=>{

}

//event listeners 
// // gameStart.addEventListener("click", )
// optionA.addEventListener("click", chooseA);
// optionB.addEventListener("click", chooseB);
// optionC.addEventListener("click", chooseC);
// optionD.addEventListener("click", chooseD);


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


// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }