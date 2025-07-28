// questions answers 
let questions = [
  {
    question: "QUES 1?",
    choices: ["emre", "baran", "osman"],
    answer: "emre"
  },
  {
    question: "QUES 2",
    choices: ["1", "2", "3"],
    answer: "2"
  },
  {
    question: "QUES 3",
    choices: ["apple", "banana", "grape"],
    answer: "banana"
  },
  {
    question: "QUES 4",
    choices: ["sun", "moon", "star"],
    answer: "moon"
  },
  {
    question: "QUES 5",
    choices: ["cat", "dog", "bird"],
    answer: "dog"
  }
];

// which question you are on it keeps 
let current = 0;
// prints ques and answers to screen
function showQuestion() {
  document.getElementById("question").innerHTML = questions[current].question;
  let choicesDiv = document.getElementById("choices");
  choicesDiv.innerHTML = "";

  for (let i = 0; i < questions[current].choices.length; i++) {
    let btn = document.createElement("button");
    btn.innerHTML = questions[current].choices[i];
    btn.onclick = function () {
      checkAnswer(questions[current].choices[i]);
    };
    choicesDiv.appendChild(btn);
  }
}
// checks answers
function checkAnswer(choice) {
  if (choice === questions[current].answer) {
    document.getElementById("feedback").innerHTML = "Correct!";
  } else {
    document.getElementById("feedback").innerHTML = "Wrong!";
  }
}
// changes the question when pressed
function nextQuestion() {
  current++;
  document.getElementById("feedback").innerHTML = "";
  if (current < questions.length) {
    showQuestion();
  } else {
    document.getElementById("question").innerHTML = "Quiz Completed!";
    document.getElementById("choices").innerHTML = "";
  }
}
// when this page opens starts showing questions
shuffle(questions);
window.onload = showQuestion;

// Shuffle function 
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1)); 
    [array[i], array[j]] = [array[j], array[i]];
  }
}

