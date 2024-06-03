var questionsArr = [
  {
    question: 'There are 365 days in a year',
    answer: true
  },
  {
    question: 'Ice is hot',
    answer: false
  },
  {
    question: 'An octogon has eight sides',
    answer: true
  },
  {
    question: 'Washington D.C. is the capital of the United States',
    answer: true
  },
  {
    question: 'Spiders have six legs',
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
