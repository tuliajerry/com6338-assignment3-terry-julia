var questionsArr = [
  {
    question: 'JavaScript is the best language.',
    answer: true
  },
  {
    question: 'The Earth is flat.',
    answer: false
  },
  {
    question: '2 + 2 equals 4.',
    answer: true
  },
  {
    question: 'The moon is made of cheese.',
    answer: false
  },
  {
    question: 'The sun rises in the west.',
    answer: false
  }
];


function runQuiz() {
  let correctAnswers = 0; 

  for (let i = 0; i < questionsArr.length; i++) {
    let userAnswer = confirm(questionsArr[i].question);
    
    if (userAnswer === questionsArr[i].answer) {
      correctAnswers++; 
    }
  }

  let scorePercentage = (correctAnswers / questionsArr.length) * 100;

  scorePercentage = Math.round(scorePercentage);

  alert('Your final score is: ' + scorePercentage + '%');
}
