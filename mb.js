const questionElement = document.getElementById('question');

const balloonContainer = document.getElementById('balloon-container');

const feedbackElement = document.getElementById('feedback');

const timerElement = document.getElementById('timer');

let correctAnswer;

let timer;



function generateQuestion() {

  const num1 = Math.floor(Math.random() * 9) + 1; // Random number between 1 and 9

  const num2 = Math.floor(Math.random() * 9) + 1; // Random number between 1 and 9

  correctAnswer = num1 * num2;



  questionElement.innerText = `What is ${num1} × ${num2}?`;



  const options = [correctAnswer, Math.floor(Math.random() * 81) + 1, Math.floor(Math.random() * 81) + 1];

  options.sort(() => Math.random() - 0.5); // Shuffle options



  balloonContainer.innerHTML = '';

  options.forEach((option) => {

    const balloon = document.createElement('div');

    balloon.classList.add('balloon');

    balloon.innerText = option;

    balloon.style.left = `${Math.random() * 90}%`; // Random horizontal position

    balloon.style.top = `${Math.random() * 60}%`; // Random vertical position

    balloon.onclick = () => checkAnswer(option);

    balloonContainer.appendChild(balloon);

  });



  startTimer();

}



function checkAnswer(selectedAnswer) {

  if (selectedAnswer === correctAnswer) {

    feedbackElement.innerText = "Correct! Well done!";

    feedbackElement.style.color = "green";

  } else {

    feedbackElement.innerText = "Oops! Try again.";

    feedbackElement.style.color = "red";

  }



  setTimeout(generateQuestion, 1000); // Generate new question after 1 second

}



function startTimer() {

  let timeLeft = 20; // 20 seconds timer

  timerElement.innerText = `Time left: ${timeLeft}s`;

  

  timer = setInterval(() => {

    timeLeft -= 1;

    timerElement.innerText = `Time left: ${timeLeft}s`;



    if (timeLeft <= 0) {

      clearInterval(timer);

      feedbackElement.innerText = "Time's up! Try again.";

      feedbackElement.style.color = "red";

      setTimeout(generateQuestion, 1000);

    }

  }, 1000);

}



generateQuestion(); // Initial question load
