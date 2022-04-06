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



var questions = [
  {
    question: "What is the description for this arithmetic operator: %",
    options: ["A. Oculus", "B. Expelliarmus", "C. Modulus", "4. Imperio"],
    answer: "C. Modulus",
  },
  {
    question: "Which is not a way to declare a variable?",
    options: ["A. const", "B. dec", "C. var", "4. let"],
    answer: "B. dec",
  },
  {
    question: "What function can you use find out if a variable is true?",
    options: [
      "A. Ganglion()",
      "B. TrueFalse()",
      "C. Bullion()",
      "D. Boolean()",
    ],
    answer: "D. Boolean()",
  },
  {
    question: "How can you add a comment in a JavaScript file?",
    options: [
      "A. --This is a comment",
      "B. <!--This is a comment-->",
      "C. ~*This is a comment",
      "D. //This is a comment",
    ],
    answer: "D. //This is a comment",
  },
  {
    question: "How do you create a function in JavaScript?",
    options: [
      "A. createMyFunction()",
      "B. function.myFunction()",
      "C. function myFunction()",
      "D. function = myFunction()",
    ],
    answer: "C. function myFunction()",
  },
];

var counter = 75;
let number = 0;
var startBtn = document.querySelector("#start");

var myInterval;

startBtn.addEventListener("click", function () {
  myInterval = setInterval(function () {
    var timer = document.querySelector("#timer");
    timer.textContent = counter;
    counter--;
    if (counter == -1) {
      endGame();
    }
  }, 1000);
  LoadQuestion(); //function call to load the first question
});

var questionText = document.getElementById("question-text");
var timePara = document.querySelector("#timePara");

const LoadQuestion = () => {
  let display = document.getElementById("quizQuestions");
  display.innerHTML = "";
  let quest = document.createElement("div");
  quest.innerHTML = questions[number].question;
  display.appendChild(quest);
  //    let opt = "";
  for (let i = 0; i < questions[number].options.length; i++) {
    let item = document.createElement("div");
    item.id = "option" + i;
    item.innerHTML = questions[number].options[i];
    display.appendChild(item);
    document
      .getElementById("option" + i)
      .addEventListener("click", function (event) {
        CheckResponse("option" + i, event);
      });
  }
};

const CheckResponse = (id, event) => {
  console.log(event);
  if (event.target.textContent === questions[number].answer) {
    console.log(true);
  } else {
    console.log(false);
    counter = counter - 10;
  }
  number++;
  if (number <= questions.length - 1) {
    LoadQuestion();
  } else {
    endGame();
  }
};

function endGame() {
  clearInterval(myInterval);
  console.log(counter);
  let display = document.getElementById("quizQuestions");
  display.innerHTML = "";
  var timer = document.querySelector("#timer");
  timer.textContent = counter;
}

// user initials, score, local storage