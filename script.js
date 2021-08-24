'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //player hasn't guessed
  if (!guess) {
    //   document.querySelector('.message').textContent = '😵 No number!';
    displayMessage('😵 No number!');

    //when player wins
  } else if (guess === secretNumber) {
    //  document.querySelector('.message').textContent = 'Correct!! 🥳';
    displayMessage('Correct!! 🥳');

    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(
        guess > secretNumber ? 'Too high, guess again' : 'Too low, guess again'
      );
      score--;
      document.querySelector('.score').textContent = score;

      //player loses
    } else {
      //    document.querySelector('.message').textContent =  'You lost the game 😢';
      displayMessage('You lost the game 😢');
      document.querySelector('.score').textContent = 0;
    }
  }

  //}else if (guess > secretNumber) {
  //   if (score > 0) {
  //     document.querySelector('.message').textContent = 'Too high, guess again';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //
  //     //player loses
  //  } else {
  //      document.querySelector('.message').textContent = 'You lost the game 😢';
  //     document.querySelector('.score').textContent = 0;
  //  }

  //    //player guesses too low
  // } else if (guess < secretNumber) {
  //  if (score > 0) {
  //    document.querySelector('.message').textContent = 'Too low, guess again';
  //     score--;
  //     document.querySelector('.score').textContent = score;

  //player loses
  //    } else {
  //     document.querySelector('.message').textContent = 'You lost the game 😢';
  //  }
  // }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20);
  //  document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
