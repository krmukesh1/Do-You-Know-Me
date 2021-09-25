var readlineSync = require('readline-sync');
var score = 0;
// Wait for user's response.
var userName = readlineSync.question('May I have your name? ');
console.log('Hi ' + userName + '!');
function Play(question, answer) {
  var userAnswer = readlineSync.question(question)
  if (userAnswer === answer) {
    console.log("You are Right")
    score = score + 1;

  }
  else {
    console.log("You are Wrong!")
  }
}
// basic method
// var questionOne={
//   question:"CEO of Microsoft",
//   answer:"satya nadella"
// }
// var questionTwo={
//   question:"CEO of Google",
//   answer:"sundar pichai"
// }
// var questions=["questionOne", "question2"]

// Advance Method
// array of Objwcts
var questions = [{
  question: "CEO of Microsoft",
  answer: "satya nadella"
}, {
  question: "CEO of Google",
  answer: "sundar pichai"
}]

// for loop
for (var i = 0; i < questions.length; i++) {
  var currentquestions = questions[i]
  Play(currentquestions.question, currentquestions.answer)
}

console.log("Your total Score is" + " " + score)