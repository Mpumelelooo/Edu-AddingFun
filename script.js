function scrollToSection(sectionId){
  const target = document.getElementById(sectionId);
  target.scrollIntoView({
    behavior: "smooth"
  });
}

function checkAnswer(element, isCorrect, feedbackId){
  const feedback = document.getElementById(feedbackId);
  if (isCorrect) {
    element.classList.add('correct');
    feedback.textContent = "Correct! Well done!";
    feedback.style.color = 'green';
  } else {
    element.classList.add('wrong');
    feedback.textContent = "Oops! Try again.";
    feedback.style.color = 'red';
  }

  const options = element.parentNode.querySelectorAll('.option');
  options.forEach(option => option.onclick = null);
  }

  

  
