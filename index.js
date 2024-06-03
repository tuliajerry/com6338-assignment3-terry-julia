// Array containing question objects
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

// Function to run the quiz
function runQuiz() {
  let correctAnswers = 0; // Counter for correct answers

  // Loop through each question in the array
  for (let i = 0; i < questionsArr.length; i++) {
    // Ask the user the question and get the response (true or false)
    let userAnswer = confirm(questionsArr[i].question);
    
    // Check if the user's answer matches the correct answer
    if (userAnswer === questionsArr[i].answer) {
      correctAnswers++; // Increment the correct answers counter
    }
  }

  // Calculate the percentage of correct answers
  let scorePercentage = (correctAnswers / questionsArr.length) * 100;

  // Round the percentage to a whole number
  scorePercentage = Math.round(scorePercentage);

  // Display the final score to the user
  alert('Your final score is: ' + scorePercentage + '%');
}
