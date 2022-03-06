var readlineSync = require('readline-sync')

var userName = readlineSync.question('What is your name? ')
console.log('Hello '+userName+'!  Welcome to this Quiz on Adi Shankar')
console.log('-----------')
var score = 0
var questions = [
  {
    question:'In which state of Present day India did Adi Shankar take birth? ',
    answer: 'Kerala'},
  {
    question:'What is the name of the village where he took birth? ',
    answer: 'Kalandy'
  },
  {
    question:'What was his age when left this world? ',
    answer: '32'
  },
  {
    question:'How many Upanishads did he write his Bhashya(commentry) on? ',
    answer: '10'
  },
  {
    question:'What is the name of the famous  scholar he debated and defeated? ',
    answer: 'Mandana Mishra'
  },
  {
    question: 'What was the name of the judge in this debate? ',
    answer: 'Ubhaya Bharati'
  },
  {
    question: 'How many Mathas did Adi Shankar build in India? ',
    answer: '4'
  } 
]

function quiz(question, answer) {
  var userAnswer = readlineSync.question(question)
  if (userAnswer.toLowerCase() === answer.toLowerCase()) {
    score += 1
    console.log('Correct!')
  }else{
    console.log('Incorrect!')
    console.log('Correct Answer is: ' + answer)
  }
  console.log('Score: '+score)
  console.log('-----------')
}

for(var i = 0; i < questions.length; i++){
  quiz(questions[i].question, questions[i].answer)
}
var numQuestions = questions.length
if(score === numQuestions){
  console.log('Congratulations' + userName + '! You answered all questions correctly.')
  
} else {
  console.log('Your Score is '+score+ ' Out of ' + numQuestions)
  console.log('Try this quiz again!')
}
console.log('Learn more about Adi Shankar by visiting these links:')
console.log('https://en.wikipedia.org/wiki/Adi_Shankara')
console.log('https://sringeri.net/history/sri-adi-shankaracharya')
