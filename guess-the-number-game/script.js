'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

// set displayed message
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// set number box value
const setNumber = function (number) {
  document.querySelector('.number').textContent = number;
};

// set body backgroundColor and number box width
const changeStyles = function (backgroundColor, width) {
  document.querySelector('body').style.backgroundColor = backgroundColor;
  document.querySelector('.number').style.width = width;
};

// set score text value
const setScore = function (scoreValue) {
  document.querySelector('.score').textContent = scoreValue;
};

// check button logic
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // no input
  if (!guess) {
    displayMessage('No number entered');

    // if wins
  } else if (guess === secretNumber) {
    displayMessage('Correct number! Yay!');
    setNumber(secretNumber);
    changeStyles('#60b347', '30rem');

    if (score > highScore) {
      highScore = score;

      document.querySelector('.highscore').textContent = highScore;
    }

    // when guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too high!' : 'Too low...');
      score--;
      setScore(score);
    } else {
      displayMessage('You lost the game!');
      setScore(0);
    }
  }
});

// again button logic
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  document.querySelector('.guess').value = '';
  changeStyles('#222', '15rem');
  setScore(score);
  setNumber('?');
});
